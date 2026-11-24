"""Talk automation actions over the device's existing authenticated ESPHome link."""

from __future__ import annotations

import json
from typing import Any

import voluptuous as vol
from aioesphomeapi import APIConnectionError
from homeassistant.auth.permissions.const import POLICY_CONTROL, POLICY_READ
from homeassistant.components.esphome.const import DOMAIN as ESPHOME_DOMAIN
from homeassistant.core import HomeAssistant, ServiceCall, SupportsResponse
from homeassistant.exceptions import HomeAssistantError, Unauthorized
from homeassistant.helpers import (
    config_validation as cv,
    device_registry as dr,
    entity_registry as er,
)

from .const import DOMAIN

_ACTIONS = {
    "start_talk": "talk_start",
    "stop_talk": "talk_stop",
    "get_openclaw_sessions": "openclaw_sessions",
}
_DEVICE = {vol.Required("device_id"): cv.string}
_START = vol.Schema(
    {
        **_DEVICE,
        vol.Optional("session_id", default=""): cv.string,
        vol.Optional("startup_prompt", default=""): cv.string,
    }
)


def async_setup(hass: HomeAssistant) -> None:
    """Register once with the integration's other process-lifetime handlers."""
    for name in _ACTIONS:
        hass.services.async_register(
            DOMAIN,
            name,
            _handler(hass, name),
            schema=_START if name == "start_talk" else vol.Schema(_DEVICE),
            supports_response=SupportsResponse.OPTIONAL,
        )


def _handler(hass: HomeAssistant, name: str):
    async def handle(call: ServiceCall) -> dict[str, Any]:
        device_id = call.data["device_id"]
        device = dr.async_get(hass).async_get(device_id)
        if device is None or device.manufacturer != "EchoLocal":
            raise HomeAssistantError("talk_device_unavailable")
        candidates = []
        for entry_id in device.config_entries:
            entry = hass.config_entries.async_get_entry(entry_id)
            if entry is None or entry.domain != ESPHOME_DOMAIN:
                continue
            data = getattr(entry, "runtime_data", None)
            # Do not route a sub-device to another main node by matching names.
            info = getattr(data, "device_info", None)
            if info is None:
                continue
            expected_mac = info.mac_address.lower().replace(":", "").replace("-", "")
            if any(
                kind == dr.CONNECTION_NETWORK_MAC
                and address.lower().replace(":", "").replace("-", "") == expected_mac
                for kind, address in device.connections
            ):
                candidates.append(data)
        if len(candidates) != 1 or not candidates[0].available:
            raise HomeAssistantError("talk_device_unavailable")
        data = candidates[0]
        if call.context.user_id:
            user = await hass.auth.async_get_user(call.context.user_id)
            policy = POLICY_READ if name == "get_openclaw_sessions" else POLICY_CONTROL
            if user is None:
                raise Unauthorized(
                    context=call.context, perm_category="entities", permission=policy
                )
            if not user.is_admin:
                entities = er.async_entries_for_config_entry(er.async_get(hass), data.entry_id)
                if not entities or any(
                    not user.permissions.check_entity(entity.entity_id, policy)
                    for entity in entities
                ):
                    raise Unauthorized(
                        context=call.context, perm_category="entities", permission=policy
                    )
        service = next(
            (item for item in data.services.values() if item.name == _ACTIONS[name]), None
        )
        if service is None or not service.supports_response:
            raise HomeAssistantError("talk_action_unavailable")
        args = {}
        if name == "start_talk":
            args = {
                "session_id": call.data.get("session_id", ""),
                "startup_prompt": call.data.get("startup_prompt", ""),
            }
        try:
            response = await data.client.execute_service(
                service, args, return_response=True, timeout=65
            )
        except (APIConnectionError, TimeoutError) as err:
            # Never leak endpoint/credential details or blindly replay an uncertain start.
            raise HomeAssistantError("talk_connection_unavailable") from err
        if response is None:
            raise HomeAssistantError("talk_response_missing")
        if not response.success:
            # Device errors are fixed public codes, never raw gateway/provider messages.
            code = response.error_message
            allowed = {
                "talk_already_active",
                "talk_assistant_busy",
                "talk_invalid_session",
                "talk_connection_unavailable",
                "talk_start_failed",
                "talk_start_cancelled",
                "talk_stop_timeout",
                "talk_target_missing",
                "talk_storage",
                "talk_greeting_invalid",
                "talk_greeting_too_long",
                "talk_identity",
                "talk_session_catalog_invalid",
                "talk_session_catalog_incomplete",
                "talk_microphone_muted",
            }
            raise HomeAssistantError(code if code in allowed else "talk_start_failed")
        try:
            result = json.loads(response.response_data)
            if not isinstance(result, dict):
                raise ValueError
        except (ValueError, TypeError) as err:
            raise HomeAssistantError("talk_response_invalid") from err
        return result

    return handle

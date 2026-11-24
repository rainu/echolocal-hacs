"""Run with Home Assistant's Python environment; all identities and links are synthetic."""

from __future__ import annotations

import ast
import importlib
import json
import sys
import unittest
from pathlib import Path
from types import ModuleType, SimpleNamespace
from unittest.mock import AsyncMock, Mock, patch

import yaml
from aioesphomeapi import APIConnectionError
from homeassistant.core import Context
from homeassistant.exceptions import HomeAssistantError, Unauthorized

# Load the module without running integration setup (no production config access).
package = ModuleType("echolocal_talk_tests")
package.__path__ = [str(Path(__file__).parents[1] / "custom_components" / "echolocal")]
sys.modules[package.__name__] = package
talk = importlib.import_module(f"{package.__name__}.talk")


class TalkActionsTest(unittest.IsolatedAsyncioTestCase):
    def setUp(self):
        self.service = SimpleNamespace(name="talk_start", supports_response=1)
        self.client = SimpleNamespace(
            execute_service=AsyncMock(
                return_value=SimpleNamespace(
                    success=True, response_data=b'{"success":true,"active":true}'
                )
            )
        )
        self.data = SimpleNamespace(
            entry_id="synthetic-entry",
            available=True,
            device_info=SimpleNamespace(mac_address="00:00:00:00:00:01"),
            services={1: self.service},
            client=self.client,
        )
        self.entry = SimpleNamespace(domain="esphome", runtime_data=self.data)
        self.device = SimpleNamespace(
            manufacturer="EchoLocal",
            config_entries={"synthetic-entry"},
            connections={(talk.dr.CONNECTION_NETWORK_MAC, "00:00:00:00:00:01")},
        )
        self.user = SimpleNamespace(
            is_admin=False, permissions=SimpleNamespace(check_entity=Mock(return_value=True))
        )
        self.hass = SimpleNamespace(
            auth=SimpleNamespace(async_get_user=AsyncMock(return_value=self.user)),
            config_entries=SimpleNamespace(async_get_entry=Mock(return_value=self.entry)),
        )
        self.registry = SimpleNamespace(async_get=Mock(return_value=self.device))
        self.patch = patch.object(talk.dr, "async_get", return_value=self.registry)
        self.patch.start()
        self.addCleanup(self.patch.stop)
        self.entity_patch = patch.object(talk.er, "async_get", return_value=Mock())
        self.entity_patch.start()
        self.addCleanup(self.entity_patch.stop)
        self.entries_patch = patch.object(
            talk.er,
            "async_entries_for_config_entry",
            return_value=[SimpleNamespace(entity_id="media_player.synthetic_echo")],
        )
        self.entries_patch.start()
        self.addCleanup(self.entries_patch.stop)

    async def invoke(self, name="start_talk", **args):
        schema = talk._START if name == "start_talk" else talk.vol.Schema(talk._DEVICE)
        data = schema({"device_id": "synthetic-device", **args})
        return await talk._handler(self.hass, name)(
            SimpleNamespace(data=data, context=Context(user_id="synthetic-user"))
        )

    async def test_independent_optional_overrides_and_confirmed_response(self):
        for args in (
            {},
            {"session_id": "agent:test:selected"},
            {"startup_prompt": "Say hello"},
            {"session_id": "agent:test:selected", "startup_prompt": "Say hello"},
        ):
            result = await self.invoke(**args)
            self.assertEqual(result, {"success": True, "active": True})
            self.client.execute_service.assert_awaited_with(
                self.service,
                {
                    "session_id": args.get("session_id", ""),
                    "startup_prompt": args.get("startup_prompt", ""),
                },
                return_response=True,
                timeout=65,
            )
        self.assertEqual(self.client.execute_service.await_count, 4)

    async def test_registration_has_real_optional_schema_and_response_support(self):
        services = Mock()
        self.hass.services = services
        talk.async_setup(self.hass)
        self.assertEqual(services.async_register.call_count, 3)
        for call in services.async_register.call_args_list:
            self.assertEqual(call.args[0], "echolocal")
            self.assertEqual(call.kwargs["supports_response"], talk.SupportsResponse.OPTIONAL)
            self.assertIn("device_id", call.kwargs["schema"]({"device_id": "synthetic-device"}))

    async def test_stop_and_list_have_no_start_arguments(self):
        for name, native, response in (
            ("stop_talk", "talk_stop", {"success": True, "active": False}),
            (
                "get_openclaw_sessions",
                "openclaw_sessions",
                {"sessions": [{"id": "agent:test:selected", "name": "Selected"}]},
            ),
        ):
            self.service.name = native
            self.client.execute_service.return_value.response_data = json.dumps(response).encode()
            self.assertEqual(await self.invoke(name), response)
            self.client.execute_service.assert_awaited_with(
                self.service, {}, return_response=True, timeout=65
            )

    async def test_device_errors_propagate_without_retry(self):
        for code in ("talk_already_active", "talk_invalid_session", "talk_connection_unavailable"):
            self.client.execute_service.return_value = SimpleNamespace(
                success=False, error_message=code
            )
            before = self.client.execute_service.await_count
            with self.assertRaisesRegex(HomeAssistantError, code):
                await self.invoke()
            self.assertEqual(self.client.execute_service.await_count, before + 1)

    async def test_raw_error_details_are_not_exposed(self):
        self.client.execute_service.return_value = SimpleNamespace(
            success=False, error_message="synthetic-private-details"
        )
        with self.assertRaisesRegex(HomeAssistantError, "^talk_start_failed$"):
            await self.invoke()

    async def test_disconnected_missing_or_wrong_device_never_invokes(self):
        for change in ("offline", "missing", "wrong", "subdevice", "unsupported"):
            self.data.available = change != "offline"
            self.registry.async_get.return_value = None if change == "missing" else self.device
            self.device.manufacturer = "Other" if change == "wrong" else "EchoLocal"
            self.device.connections = (
                set()
                if change == "subdevice"
                else {(talk.dr.CONNECTION_NETWORK_MAC, "00:00:00:00:00:01")}
            )
            self.data.services = {} if change == "unsupported" else {1: self.service}
            with self.assertRaises(HomeAssistantError):
                await self.invoke()
        self.client.execute_service.assert_not_awaited()

    async def test_permissions_are_checked_for_target_device(self):
        self.user.permissions.check_entity.return_value = False
        for name in talk._ACTIONS:
            with self.assertRaises(Unauthorized):
                await self.invoke(name)
            self.user.permissions.check_entity.assert_called_with(
                "media_player.synthetic_echo",
                talk.POLICY_READ if name == "get_openclaw_sessions" else talk.POLICY_CONTROL,
            )
        self.client.execute_service.assert_not_awaited()
        self.hass.auth.async_get_user.return_value = None
        with self.assertRaises(Unauthorized):
            await self.invoke()

    def test_existing_v020_service_catalog_is_preserved(self):
        root = Path(__file__).parents[1] / "custom_components" / "echolocal"
        names = set(yaml.safe_load((root / "services.yaml").read_text()))
        existing = {
            "assign_tone",
            "unassign_tone",
            "dashboards",
            "dashboard_token",
            "fetch",
            "ping",
            "voices",
            "music_queue",
            "music_favorite",
            "music_play",
            "music_browse",
            "music_library",
            "music_search",
            "music_players",
            "music_recent",
            "music_recommendations",
            "camera_webrtc",
            "camera_webrtc_close",
            "call_answer",
            "call_end",
        }
        self.assertTrue(existing <= names)
        self.assertTrue(set(talk._ACTIONS) <= names)

    def test_existing_v020_startup_handlers_are_preserved(self):
        root = Path(__file__).parents[1] / "custom_components" / "echolocal"
        tree = ast.parse((root / "__init__.py").read_text())
        setup = next(
            node
            for node in tree.body
            if isinstance(node, ast.AsyncFunctionDef) and node.name == "async_setup_entry"
        )
        calls = {
            node.func.value.id
            for node in ast.walk(setup)
            if isinstance(node, ast.Call)
            and isinstance(node.func, ast.Attribute)
            and node.func.attr == "async_setup"
            and isinstance(node.func.value, ast.Name)
        }
        self.assertTrue(
            {
                "wakewords",
                "tones",
                "triggers",
                "fleet",
                "voices",
                "entities",
                "ping",
                "webrtc",
                "call",
                "dashboard",
                "fetch",
                "music",
                "talk",
            }
            <= calls
        )

    async def test_system_automations_and_admin_remain_supported(self):
        self.entries_patch.stop()
        self.entries_patch = patch.object(
            talk.er, "async_entries_for_config_entry", return_value=[]
        )
        self.entries_patch.start()
        self.addCleanup(self.entries_patch.stop)
        with self.assertRaises(Unauthorized):
            await self.invoke()
        self.user.is_admin = True
        self.assertTrue((await self.invoke())["success"])
        self.user.permissions.check_entity.assert_not_called()
        result = await talk._handler(self.hass, "start_talk")(
            SimpleNamespace(data={"device_id": "synthetic-device"}, context=Context())
        )
        self.assertTrue(result["success"])

    async def test_connection_timeout_and_malformed_response_fail(self):
        for error in (TimeoutError(), APIConnectionError("synthetic-private-details")):
            self.client.execute_service.side_effect = error
            with self.assertRaisesRegex(HomeAssistantError, "^talk_connection_unavailable$"):
                await self.invoke()
        self.client.execute_service.side_effect = None
        for response in (
            None,
            SimpleNamespace(success=True, response_data=b"[]"),
            SimpleNamespace(success=True, response_data=b"bad"),
        ):
            self.client.execute_service.return_value = response
            with self.assertRaises(HomeAssistantError):
                await self.invoke()


if __name__ == "__main__":
    unittest.main(verbosity=2)

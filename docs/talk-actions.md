# Home Assistant Talk actions

The optional EchoLocal Home Assistant integration exposes three response-capable
actions over the device's existing authenticated ESPHome connection. No new
OpenClaw credentials, permissions or protocol features are required.

| Action | Inputs | Response |
| --- | --- | --- |
| `echolocal.start_talk` | `device_id`; optional `session_id`, `startup_prompt` | `{"success": true, "active": true}` after transport and audio are ready |
| `echolocal.stop_talk` | `device_id` | `{"success": true, "active": false}` after voice resources are released; repeated stops succeed |
| `echolocal.get_openclaw_sessions` | `device_id` | `{"sessions": [{"id": "agent:example:voice-demo", "name": "Voice demo"}]}` |

Select the **main EchoLocal device**, not one of its ESPHome sub-devices.
For non-admin users, start and stop require control permission for the device's
registered ESPHome entities; session discovery requires read permission. Automations retain Home Assistant's normal system context.

## Defaults and one-call overrides

The device's first assistant profile supplies the default session/agent,
startup greeting, provider/model, tones and inactivity timeout.
Omit either optional argument (or use an empty string) to independently use its
corresponding device default. A non-empty startup prompt follows the same
validation and speakable startup path as the configured greeting (maximum 1536 UTF-8 bytes).
Whitespace-only prompts are invalid.

Use the exact stable routing `id` returned by session discovery as `session_id`.
Names are display labels, not identifiers. Discovery uses the same selectable
sidebar-session catalog as the device's chat app, follows pagination, excludes
archived/system/cron/subagent sessions and never fetches transcripts.
A failed, malformed or incomplete catalog raises an error; only an actual
successful empty catalog returns `{"sessions":[]}`.

Overrides are copied into the activation only. Neither the assistant settings
nor the selected session, greeting or provider/model defaults are rewritten.
When the default profile creates a new context for each activation, the
automation similarly uses a fresh transient context without persisting its ID.
No new settings or owner UI are introduced.

## Automation example

```yaml
- action: echolocal.get_openclaw_sessions
  data:
    device_id: YOUR_MAIN_DEVICE_ID
  response_variable: available_sessions

# Select an id from available_sessions.sessions; never use a display name.
- action: echolocal.start_talk
  data:
    device_id: YOUR_MAIN_DEVICE_ID
    session_id: "agent:example:voice-demo"
    startup_prompt: "Briefly tell me what is on my calendar."
  response_variable: talk_started

- action: echolocal.stop_talk
  data:
    device_id: YOUR_MAIN_DEVICE_ID
  response_variable: talk_stopped
```

Both start overrides can be omitted altogether. Response variables are optional
for start/stop, but errors still fail the action. They are needed to consume the
session list in an automation.

## Failure and lifetime semantics

An active or connecting Talk returns `talk_already_active` without switching,
stopping or restarting that conversation. A busy Home Assistant assistant returns
`talk_assistant_busy`. Unknown/invalid override IDs return `talk_invalid_session`.
Disconnected devices/gateways return `talk_device_unavailable` or
`talk_connection_unavailable`; muted capture returns `talk_microphone_muted`.
Other setup failures return `talk_start_failed`, not a successful queued response.

Start waits for actual Talk setup. It does not retry uncertain requests.
If the Home Assistant link fails after a start was delivered, check the device or
use Stop Talk before deciding whether to start again.

Stop cancels only this device's voice activation and closes its voice transport.
It never calls `chat.abort`, deletes/resets an OpenClaw session or stops an
independent text task. The selected underlying session remains available.

The device also exposes native ESPHome actions `talk_start`, `talk_stop` and
`openclaw_sessions`. Native `talk_start` has two string arguments; stock ESPHome
requires both fields, so use `""` for a default. The HACS wrapper provides the
truly optional fields above and uses a bounded response timeout appropriate for
Talk setup. Blocking native actions use opt-in bounded asynchronous dispatch,
so keepalives and Stop Talk are not queued behind setup.

## Checks

Go regression tests cover independent overrides and unchanged store bytes,
fresh transient defaults, invalid prompts/IDs, paginated/error catalogs,
active-call protection, generation-safe/idempotent stop and native action
discovery. The library tests check read-loop responsiveness, concurrent stop,
bounded admission, correlation and panic cleanup.

The HACS `tests/test_talk.py` suite runs in a Home Assistant Python environment
and checks optional schemas, response support, device routing/permissions,
failure propagation, disconnections, malformed replies and absence of retries.
Mocked tests do not establish real-device or spoken-conversation behavior.

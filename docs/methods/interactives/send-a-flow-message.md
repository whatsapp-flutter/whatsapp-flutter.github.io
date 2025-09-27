---
title: 🔄 Send a Flow Message
sidebar_position: 4
---

Send a flow message to the specified phone number.

```dart
await whatsapp.sendFlowMessage(
  phoneNumber: 'RECIPIENT_NUMBER',
  flowToken: 'your_flow_token',
  flowId: 'your_flow_id',
  flowCta: 'Start Flow',
  flowActionPayload: '{"screen": "SCREEN_NAME"}',
  headerText: 'Welcome!',
  bodyText: 'Complete this flow to get started.',
  footerText: 'Bye',
);

```

| param               | type   | required | description                                                             |
| ------------------- | ------ | -------- | ----------------------------------------------------------------------- |
| `phoneNumber`       | String | yes      | Phone number with country code.                                |
| `flowToken`         | String | no      | A valid flow token from WhatsApp Cloud API.                              |
| `flowId`            | String | yes      | Flow ID that identifies which flow to trigger.                          |
| `flowCta`           | String | yes      | Call-to-action text for the flow button.                                |
| `flowActionPayload` | String | yes      | JSON string payload to define initial screen or custom flow parameters. |
| `headerText`        | String | no       | Header text shown at the top of the flow card.                          |
| `bodyText`          | String | no       | Body description shown inside the flow card.                            |
| `footerText`        | String | no       | Footer text at the bottom of the flow card                             |

## Flow Action Payload

The flowActionPayload allows you to specify the starting point of the flow or pass additional context.
It must be a valid JSON string.

---
title: ⭐ Send Custom Request
sidebar_position: 15
---

Send your own WhatsApp Business API Request

```dart
await whatsapp.sendCustomRequest(
  path: '/messages',
  payload: {
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": "+91xxxxxxxxxx",
      "type": "text",
      "text": {
        "preview_url": false,
        "body": "Hello"
    }
  }
)
```

| param     | type                   | required | description                          |
| --------- | ---------------------- | -------- | ------------------------------------ |
| `path`    | String                 | yes      | Path Url of Request. `ex. /messages` |
| `payload` | Map\<String, dynamic\> | yes      | Body Request                         |

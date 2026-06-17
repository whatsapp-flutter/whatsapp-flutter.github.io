---
title: 💬 Send a message
sidebar_position: 1
---

Send a message to the specified phone number

```dart
await whatsapp.sendMessage(
  phoneNumber : 'RECIPIENT_NUMBER',
  text : 'text_message',
  previewUrl : true,
);
```

:::tip Return Methods
Please find out supported return method [here](/docs/return-methods.md).
That return method can be used in all methods.
:::

| param         | type   | required | description                                 |
| ------------- | ------ | -------- | ------------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code.     |
| `text`        | String | yes      | A text message to send                      |
| `previewUrl`  | bool   | no       | URL preview in message if there is any link |


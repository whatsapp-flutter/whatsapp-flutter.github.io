---
title: 📍 Location Request
---

Request location from user

```dart
await whatsapp.sendLocationRequest(
  phoneNumber : 'RECIPIENT_NUMBER',
  text : 'Please, Send me your current location.'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `text`        | String | yes      | Text message                            |

---
title: 📍 Location Request
---

Request Location from user

```dart
await whatsapp.sendLocationRequest(
  phoneNumber : 'PHONE_NUMBER',
  text : 'Please, Send me your current location.'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `text`        | String | yes      | Text Message                            |

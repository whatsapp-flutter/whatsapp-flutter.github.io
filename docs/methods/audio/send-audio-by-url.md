---
title: 🔗 Send a Audio by URL
---

Send a audio to the specified phone number using direct audio link.

```dart
await whatsapp.sendAudioByUrl(
  phoneNumber : 'PHONE_NUMBER',
  audioUrl : 'https://example.com/example.mp3',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `audioUrl`    | String | yes      | Direct audio url                        |

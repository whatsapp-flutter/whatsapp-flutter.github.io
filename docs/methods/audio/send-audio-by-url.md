---
title: 🔗 Send Audio by URL
---

Send audio to the specified phone number using direct audio link.

```dart
await whatsapp.sendAudioByUrl(
  phoneNumber : 'RECIPIENT_NUMBER',
  audioUrl : 'https://whatsapp-flutter.github.io/samples/sample.mp3',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `audioUrl`    | String | yes      | Direct audio URL                        |

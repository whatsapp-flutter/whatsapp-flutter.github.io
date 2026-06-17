---
title: 🔑 Send Audio by ID
---

Send audio to the specified phone number using uploaded media.

```dart
await whatsapp.sendAudioById(
  phoneNumber : 'RECIPIENT_NUMBER',
  audioId : 'media_id',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `audioId`     | String | yes      | Uploaded audio's media ID               |

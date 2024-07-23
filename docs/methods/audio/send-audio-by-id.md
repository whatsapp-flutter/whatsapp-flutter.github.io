---
title: 🔑 Send a Audio by Id
---

Send a audio to the specified phone number using uploaded media.

```dart
await whatsapp.sendAudioById(
  phoneNumber : 'PHONE_NUMBER',
  mediaId : 'media_id',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `mediaId`     | String | yes      | Uploaded audio's media id               |

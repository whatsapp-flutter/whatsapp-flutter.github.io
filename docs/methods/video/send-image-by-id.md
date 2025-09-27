---
title: 🔑 Send Video by ID
---

Send a video to the specified phone number using uploaded media.

```dart
await whatsapp.sendVideoById(
  phoneNumber : 'RECIPIENT_NUMBER',
  videoId : 'media_id',
  caption : 'Sample video',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `videoId`     | String | yes      | Uploaded video's media ID               |
| `caption`     | String | no       | A caption with video                    |

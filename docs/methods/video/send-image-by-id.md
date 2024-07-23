---
title: 🔑 Send a Video by Id
---

Send a video to the specified phone number using uploaded media.

```dart
whatsapp.sendVideoById(
  phoneNumber : 'PHONE_NUMBER',
  mediaId : 'media_id',
  caption : 'My fav video.',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `mediaId`     | String | yes      | Uploaded video's media id               |
| `caption`     | String | no       | A caption with video                    |

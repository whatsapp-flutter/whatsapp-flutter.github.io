---
title: 🔑 Send a Image by Id
---

Send a Image to the specified phone number using uploaded media.

```dart
await whatsapp.sendImageById(
  phoneNumber : 'PHONE_NUMBER',
  mediaId : 'media_id',
  caption : 'My fav photo.',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `mediaId`     | String | yes      | Upload media id                         |
| `caption`     | String | no       | A caption with image                    |

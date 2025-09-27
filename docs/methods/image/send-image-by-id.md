---
title: 🔑 Send Image by ID
---

Send an image to the specified phone number using uploaded media.

```dart
await whatsapp.sendImageById(
  phoneNumber : 'RECIPIENT_NUMBER',
  imageId : 'media_id',
  caption : 'Sample Image.',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `imageId`     | String | yes      | Uploaded media ID                       |
| `caption`     | String | no       | A caption with image                    |

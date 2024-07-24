---
title: 🔗 Send a Video by URL
---

Send a video to the specified phone number using direct video url.

```dart
whatsapp.sendImageByUrl(
  phoneNumber : 'PHONE_NUMBER',
  videoUrl : 'https://whatsapp-flutter.github.io/samples/whatsapp-flutter.mp4',
  caption : 'WhatsApp Flutter Package Video',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `videoUrl`    | String | yes      | Direct Video url                        |
| `caption`     | String | no       | A caption with video                    |

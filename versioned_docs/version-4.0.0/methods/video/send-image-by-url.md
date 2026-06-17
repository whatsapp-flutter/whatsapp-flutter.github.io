---
title: 🔗 Send Video by URL
---

Send a video to the specified phone number using a direct video URL.

```dart
await whatsapp.sendVideoByUrl(
  phoneNumber : 'RECIPIENT_NUMBER',
  videoUrl : 'https://whatsapp-flutter.github.io/samples/sample.mp4',
  caption : 'Sample Video',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `videoUrl`    | String | yes      | Direct video URL                        |
| `caption`     | String | no       | A caption with video                    |

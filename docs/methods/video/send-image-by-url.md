---
title: 🔗 Send a Video by URL
---

Send a video to the specified phone number using direct video url.

```dart
whatsapp.sendImageByUrl(
  phoneNumber : 'PHONE_NUMBER',
  videoUrl : 'https://example.com/example.mp4',
  caption : 'My fav video.',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `videoUrl`    | String | yes      | Direct Video url                        |
| `caption`     | String | no       | A caption with video                    |

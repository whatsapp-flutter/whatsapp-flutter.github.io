---
title: 🔗 Send Image by URL
---

Send an image to the specified phone number using a direct image URL.

```dart
await whatsapp.sendImageByUrl(
  phoneNumber : 'RECIPIENT_NUMBER',
  imageUrl : 'https://whatsapp-flutter.github.io/samples/sample.png',
  caption : 'Sample Image',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `imageUrl`    | String | yes      | Direct image URL                        |
| `caption`     | String | no       | A caption with image                    |

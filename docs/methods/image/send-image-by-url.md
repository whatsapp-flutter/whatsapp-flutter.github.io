---
title: 🔗 Send a Image by URL
---

Send a message to the specified phone number using direct image url.

```dart
await whatsapp.sendImageByUrl(
  phoneNumber : 'PHONE_NUMBER',
  imageUrl : 'https://whatsapp-flutter.github.io/samples/whatsapp-flutter.jpg',
  caption : 'WhatsApp Flutter Package Photo',
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `imageUrl`    | String | yes      | Direct Image url                        |
| `caption`     | String | no       | A caption with image                    |

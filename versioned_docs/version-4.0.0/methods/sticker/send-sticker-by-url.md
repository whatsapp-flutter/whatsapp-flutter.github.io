---
title: 🔗 Send Sticker by URL
sidebar_position: 9
---

Send sticker to the specified phone number

```dart
await whatsapp.sendStickerByUrl(
  phoneNumber : 'RECIPIENT_NUMBER',
  stickerUrl : 'https://whatsapp-flutter.github.io/samples/sample.webp'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `stickerUrl`   | String | yes      | Direct sticker URL                       |

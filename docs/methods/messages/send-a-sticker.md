---
title: 💖 Send a Sticker
sidebar_position: 9
---

Send sticker to the specified phone number

```dart
await whatsapp.sendSticker(
  phoneNumber : 'PHONE_NUMBER',
  stickerId : 'STICKER_ID'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `stickerId`   | String | yes      | ID of Sticker                           |

---
title: 🔑 Send Sticker by ID
sidebar_position: 9
---

Send sticker to the specified phone number

```dart
await whatsapp.sendSticker(
  phoneNumber : 'RECIPIENT_NUMBER',
  stickerId : 'STICKER_ID'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `stickerId`   | String | yes      | ID of sticker                           |

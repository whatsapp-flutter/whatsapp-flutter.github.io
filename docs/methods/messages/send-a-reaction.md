---
title: 👍 Send a Reaction
sidebar_position: 10
---

Send emoji reaction to a message.

```dart
await whatsapp.sendReaction(
  phoneNumber : 'PHONE_NUMBER',
  messageId : 'MESSAGE_ID',
  emoji: '👍'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `messageId`   | String | yes      | Message ID                              |
| `emoji`       | String | yes      | Emoji symbol or Unicode escape sequence |

---
title: 👁‍🗨 Mark as Read
sidebar_position: 8
---

Read (Seen) the messages received by the specified phone number, using message id.

```dart
await whatsapp.markAsRead(
  phoneNumber : 'PHONE_NUMBER',
  messageId : 'WA_MESSAGE_ID'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `messageId`   | String | yes      | A message id                            |

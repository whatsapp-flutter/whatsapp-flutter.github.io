---
title: 🚫 Block Users
sidebar_position: 1
---

Block registered users

```dart
await whatsapp.blockUsers(
    users: ['91XXXXXXXXXX','WA_MESSAGE_ID']
);
```

:::note
In the `users` parameter, you can block users using their number or WhatsApp Message ID.
:::

| param        | type   | required | description                                      |
| ------------ | ------ | -------- | ------------------------------------------------ |
| `users` | List\<String\>| yes      | List of user numbers or message IDs to block        |

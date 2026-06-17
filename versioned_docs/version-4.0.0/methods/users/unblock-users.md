---
title: ✔️ Unblock Users
sidebar_position: 2
---

Unblock registered users

```dart
await whatsapp.unblockUsers(
    users: ['91XXXXXXXXXX','WA_MESSAGE_ID']
);
```

:::note
In the `users` parameter, you can unblock users using their number or WhatsApp Message ID.
:::

| param        | type   | required | description                                      |
| ------------ | ------ | -------- | ------------------------------------------------ |
| `users` | List\<String\>| yes      | List of user numbers or message IDs to unblock        |

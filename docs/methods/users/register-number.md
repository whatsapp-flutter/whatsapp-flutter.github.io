---
title: 📞 Register Number
sidebar_position: 6
---

Register a new user with your business account

:::warning Notice
This method ensures the recipient's number is registered. If the number is **not registered**, they will **not receive messages**.

**Note:** If a user sends a message to your business number (e.g., "hi"), their number is **automatically registered**, so you do **not** need to call this method manually.
:::



```dart
await whatsapp.register(
    code: 123456,
);
```

| param  | type | required | description              |
| ------ | ---- | -------- | ------------------------ |
| `code` | int  | yes      | Pin Code for Your Number |

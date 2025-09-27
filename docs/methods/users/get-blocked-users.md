---
title: 🗳️ Get Blocked Users
sidebar_position: 3
---

Get list of blocked users

```dart
await whatsapp.getBlockedUsers();
```

| param        | type   | required | description                                      |
| ------------ | ------ | -------- | ------------------------------------------------ |
| `limit` | int| no      | Limit of numbers to get records        |
| `before` | String| no      | Navigation ID for previous page        |
| `after` | String| no      | Navigation ID for next page        |

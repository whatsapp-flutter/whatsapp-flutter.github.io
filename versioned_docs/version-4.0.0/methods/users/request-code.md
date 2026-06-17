---
title: 📳 Request Code
sidebar_position: 4
---

Request Verification Code

```dart
await whatsapp.requestCode(
    codeMethod: 'SMS',
    language: 'en',
);
```

| param        | type   | required | description                                      |
| ------------ | ------ | -------- | ------------------------------------------------ |
| `codeMethod` | String | yes      | Verification message type: SMS or Voice          |
| `language`   | String | no       | Verification message language code (default: en) |

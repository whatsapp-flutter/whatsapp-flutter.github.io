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
| `codeMethod` | String | yes      | Verification Message Type : `SMS` `Voice`        |
| `language`   | String | no       | Verification Message Language Code `default: en` |

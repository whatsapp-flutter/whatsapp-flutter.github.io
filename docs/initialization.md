---
title: Initialization
sidebar_position: 2
---

You need to initialization class object, using constructor.

```dart
 const accessToken ='EAAGp6aTb8.....';
 const fromNumberId = '1082772452xxxxx';

 final whatsapp = WhatsApp(accessToken, fromNumberId);
```

| param          | type   | required | description                               |
| -------------- | ------ | -------- | ----------------------------------------- |
| `accessToken`  | string | yes      | Access token of your Facebook App         |
| `fromNumberId` | string | yes      | Phone Number id of your whatsapp business |

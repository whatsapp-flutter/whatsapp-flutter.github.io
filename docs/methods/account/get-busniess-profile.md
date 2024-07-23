---
title: 💻 Get Business Profile
sidebar_position: 1
---

Get your business profile details

```dart
await whatsapp.getBusinessProfile(
    scope: [
        "email",
        "profile_picture_url"
    ],
); // for limited records


await whatsapp.getBusinessProfile(); // for all information
```

| param   | type           | required | description    |
| ------- | -------------- | -------- | -------------- |
| `scope` | List\<String\> | no       | List of Scopes |

Default will return all information.

---
title: 📲 Call to Action Button
---

Send a list.

```dart
await whatsapp.sendCallToActionButton(
    phoneNumber: phoneNumber,
    headerText: "HEADER",
    bodyText: "Please have a look to my website.",
    footerText:"FOOTER",
    buttonText: "Open",
    actionUrl: "https://rohitchouhan.com",
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `headerText`  | String | no       | Header Text                             |
| `bodyText`    | String | yes      | Body Text                               |
| `footerText`  | String | no       | Footer Text                             |
| `buttonText`  | String | yes      | Button Text                             |
| `actionUrl`   | String | yes      | Web Page Link                           |

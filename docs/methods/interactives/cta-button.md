---
title: 📲 Call to Action Button
---

Send a call-to-action button.

```dart
await whatsapp.sendCallToActionButton(
    phoneNumber: 'RECIPIENT_NUMBER',
    headerText: "HEADER",
    bodyText: "Please have a look to my website.",
    footerText:"FOOTER",
    buttonText: "Open",
    actionUrl: "https://rohitchouhan.com",
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `headerText`  | String | no       | Header Text                             |
| `bodyText`    | String | yes      | Body Text                               |
| `footerText`  | String | no       | Footer Text                             |
| `buttonText`  | String | yes      | Button Text                             |
| `actionUrl`   | String | yes      | Web Page Link                           |

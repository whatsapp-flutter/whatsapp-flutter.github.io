---
title: 🔗 Send Document by URL
---

Send a document to the specified phone number using a direct document URL.

```dart
await whatsapp.sendDocumentByUrl(
  phoneNumber : 'RECIPIENT_NUMBER',
  documentUrl : 'https://whatsapp-flutter.github.io/samples/sample.pdf',
  caption : 'Sample File',
  fileName: 'sample.pdf'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `documentUrl` | String | yes      | Direct Document URL                     |
| `caption`     | String | no       | A caption with document                 |
| `fileName`    | String | no       | Document file name                      |

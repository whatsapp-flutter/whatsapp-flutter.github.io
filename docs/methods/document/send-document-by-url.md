---
title: 🔗 Send a Document by URL
---

Send a document to the specified phone number using direct document url.

```dart
await whatsapp.sendDocumentById(
  phoneNumber : 'PHONE_NUMBER',
  documentUrl :  'https://whatsapp-flutter.github.io/samples/whatsapp-flutter.pdf',
  caption : 'WhatsApp Flutter Package PDF',
  fileName: 'whatsapp-flutter.pdf'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `documentUrl` | String | yes      | Direct Document URL                     |
| `caption`     | String | no       | A caption with document                 |
| `fileName`    | String | no       | Document file name                      |

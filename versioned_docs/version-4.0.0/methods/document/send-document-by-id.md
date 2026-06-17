---
title: 🔑 Send Document by ID
---

Send a document to the specified phone number using uploaded media.

```dart
await whatsapp.sendDocumentById(
  phoneNumber : 'RECIPIENT_NUMBER',
  documentId : 'media_id',
  caption : 'Sample File',
  fileName: 'sample.pdf'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `documentId`     | String | yes      | Uploaded document's media ID            |
| `caption`     | String | no       | A caption with document                 |
| `fileName`    | String | no       | Document file name                      |

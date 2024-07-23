---
title: 🔑 Send a Document by Id
---

Send a document to the specified phone number using uploaded media.

```dart
await whatsapp.sendDocumentById(
  phoneNumber : 'PHONE_NUMBER',
  mediaId : 'media_id',
  caption : 'WhatsApp Flutter Docs File',
  fileName: 'whatsapp-flutter.pdf'
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `mediaId`     | String | yes      | Upload document's media id              |
| `caption`     | String | no       | A caption with document                 |
| `fileName`    | String | no       | Document file name                      |

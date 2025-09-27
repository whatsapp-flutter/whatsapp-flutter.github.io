---
title: ✏️ Create Resumable
sidebar_position: 1
---

Create a new session for resumable upload

```dart
await whatsapp.createResumableUploadSession(
    fileLength: 210915,
    fileType: 'image/png',
    fileName: 'sample.png',
);
```

| param   | type           | required | description    |
| ------- | -------------- | -------- | -------------- |
| `fileLength` | int | yes       | Exact file size in bytes |
| `fileType` | String | yes       | Type of file that you are going to upload |
| `fileName` | String | no       | Name of the file |

## Resumable Return Methods

- [`isSuccess()`](/docs/return-methods#resumable-methods)
- [`getId()`](/docs/return-methods#resumable-methods)
- [`getH()`](/docs/return-methods#resumable-methods)
- [`getFileOffset`](/docs/return-methods#resumable-methods)


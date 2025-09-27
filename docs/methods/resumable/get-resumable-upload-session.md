---
title: 📓 Get Resumable
sidebar_position: 3
---

Get information about the resumable upload session

```dart
await whatsapp.getResumableUploadSession(
    uploadId: 'UPLOAD_SESSION_ID',
);
```

| param   | type           | required | description    |
| ------- | -------------- | -------- | -------------- |
| `uploadId` | String | yes       | Session ID of the resumable upload |
| `fileType` | String | yes       | Type of file that you are going to upload |
| `fileName` | String | no       | Name of the file |

## Resumable Return Methods

- [`isSuccess()`](/docs/return-methods#resumable-methods)
- [`getId()`](/docs/return-methods#resumable-methods)
- [`getH()`](/docs/return-methods#resumable-methods)
- [`getFileOffset`](/docs/return-methods#resumable-methods)


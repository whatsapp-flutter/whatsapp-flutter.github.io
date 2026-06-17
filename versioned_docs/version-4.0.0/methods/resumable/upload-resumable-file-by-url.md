---
title: ⬆️ Upload File by Url
sidebar_position: 2.5
---
Upload file by URL using resumable session upload ID
```dart
await whatsapp.uploadResumableFileByUrl(
    uploadId: 'UPLOAD_SESSION_ID',
    fileUrl: 'http://raw.githack.com/rohit-chouhan/whatsapp/main/sample_files/resumable-sample.png',
    fileType: 'image/png',
);
```

| param   | type           | required | description    |
| ------- | -------------- | -------- | -------------- |
| `uploadId` | String | yes       | Session ID of the resumable upload |
| `fileUrl` | String | yes       | Direct file url to upload |
| `fileType` | String | yes       | Type of file that you are going to upload |

## Resumable Return Methods

- [`isSuccess()`](/docs/return-methods#resumable-methods)
- [`getId()`](/docs/return-methods#resumable-methods)
- [`getH()`](/docs/return-methods#resumable-methods)
- [`getFileOffset`](/docs/return-methods#resumable-methods)


---
title: ⬆️ Upload File
sidebar_position: 2
---

Upload file using resumable session upload ID

```dart
await whatsapp.uploadResumableFile(
    uploadId: 'UPLOAD_SESSION_ID',
    file: File('sample_files/resumable-sample.png'),
    fileType: 'image/png',
);
```

| param   | type           | required | description    |
| ------- | -------------- | -------- | -------------- |
| `uploadId` | String | yes       | Session ID of the resumable upload |
| `file` | File | yes       | File that you are going to upload |
| `fileType` | String | yes       | Type of file that you are going to upload |

### Web Platform
Most features work seamlessly on Flutter Web, however **uploadResumableFile** and **createUploadResumableFile** won't work due to CORS restrictions imposed by the WhatsApp Business API. Direct uploads from web browsers to external APIs are blocked for security reasons by meta.

**Workaround for Web Uploads:**
- Implement a backend server to proxy upload requests
- Upload files to your server first, then use [`uploadResumableFileByUrl`](/docs/methods/resumable/upload-resumable-file-by-url) with a public URL
- For development, consider using mobile platforms or desktop builds

## Resumable Return Methods

- [`isSuccess()`](/docs/return-methods#resumable-methods)
- [`getId()`](/docs/return-methods#resumable-methods)
- [`getH()`](/docs/return-methods#resumable-methods)
- [`getFileOffset`](/docs/return-methods#resumable-methods)


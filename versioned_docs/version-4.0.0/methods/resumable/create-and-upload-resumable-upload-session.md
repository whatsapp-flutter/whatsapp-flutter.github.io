---
title: 📦 Create & Upload Resumable
sidebar_position: 4
---

Create and upload a resumable file at once

```dart
await whatsapp.createUploadResumableFile(
    fileLength: 210915,
    file: File('sample_files/resumable-sample.png'), // use any one file or fileUrl
    fileUrl: 'http://raw.githack.com/rohit-chouhan/whatsapp/main/sample_files/resumable-sample.png',
    fileType: 'image/png',
    fileName: 'resumable-sample.png',
);
```

## Example
A example with select image (using file picker) and update business profile photo.
👉 Check out this **working example** here: [pub.dev WhatsApp Example](https://pub.dev/packages/whatsapp/example)

```dart
FilePickerResult? result = await FilePicker.platform.pickFiles(type: FileType.image, allowedExtensions: ['png']);
if (result != null) {
    try {
        final uploadResponse = await whatsapp.createUploadResumableFile(
            fileLength: result.files.first.size,
            file: File(result.files.first.path!),
            fileType: 'image/png',
            fileName: result.files.first.name);
        await whatsapp.updateBusinessProfile(
            profilePictureHandle: uploadResponse.getH(),
        );
        print('Profile picture updated');
    } catch (e) {
        print('Error updating profile picture: $e');
    }
}
```

:::warning  
Use either `file` **or** `fileUrl`, not both.  
If you provide `file`, omit `fileUrl`.  
If you provide `fileUrl`, omit `file`.  
Choose the option that best fits your use case.  
:::


| param   | type           | required | description    |
| ------- | -------------- | -------- | -------------- |
| `fileLength` | int | yes       | Exact file size in bytes |
| `file` | File | no       | File that you are going to upload |
| `fileUrl` | String | no       | Direct file url to upload |
| `fileType` | String | yes       | Type of file that you are going to upload |
| `fileName` | String | no       | Name of the file |

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


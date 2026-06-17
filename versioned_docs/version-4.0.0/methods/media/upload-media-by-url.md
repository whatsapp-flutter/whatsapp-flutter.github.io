---
title: 📤 Upload Media by URL
sidebar_position: 3
---

Upload a media file to business account by URL

```dart
var upload = await whatsapp.uploadMediaFileByUrl(
  fileUrl: 'https://whatsapp-flutter.github.io/samples/sample.png',
  fileType: 'image/png',
);

// ✅ auto-detect type
var fileUrl = 'https://whatsapp-flutter.github.io/samples/sample.png';
var upload = await whatsapp.uploadMediaFileByUrl(
  fileUrl: fileUrl,
  fileType: whatsapp.getAutoFileType(fileName: fileUrl),
);

upload.getMediaId(); //10023589340434
```

| param      | type   | required | description               |
| ---------- | ------ | -------- | ------------------------- |
| `fileUrl`  | String | yes      | File URL.                 |
| `fileType` | String | yes      | File Type (ex. image/png) |

:::danger[Supported Media Type]
Please make sure you are using correct media types. Please find out [supported media type here](/docs/methods/media/supported-media-type.md).
:::

## Media Return Methods

- [`isSuccess()`](/docs/return-methods#common-methods)
- [`isUploaded()`](/docs/return-methods#media-methods)
- [`getMediaId()`](/docs/return-methods#media-methods)

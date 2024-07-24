---
title: 📤 Upload Media by Url
sidebar_position: 3
---

Upload a Media File to Business Account by Url

```dart
var upload = await whatsapp.uploadMediaFileByUrl(
  fileUrl: 'https://example.com/sample.jpeg',
  fileType: 'image/jpeg',
);

upload.getMediaId(); //10023589340434
```

| param      | type   | required | description               |
| ---------- | ------ | -------- | ------------------------- |
| `fileUrl`  | String | yes      | File Url.                 |
| `fileType` | String | yes      | File Type (ex. image/png) |

:::danger[Supported Media Type]
Please make sure you are using correct media types, Please find out [supported media type here](/docs/methods/media/supported-media-type.md).
:::

## Media Return Methods

- [`isSuccess()`](docs/return-methods.md#issuccess-bool)
- [`getMediaId()`](docs/return-methods.md#getmediaid-string)

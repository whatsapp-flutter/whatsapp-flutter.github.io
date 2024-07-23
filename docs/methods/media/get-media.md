---
title: 🗂️ Get Media Details
sidebar_position: 2
---

Get uploaded media details using Media Id

```dart
var upload = await whatsapp.getMedia(
  mediaId: 'MEDIA_ID',
);

upload.getMediaUrl(); //https://cdn.fb.com/xxxxxx
```

| param     | type   | required | description               |
| --------- | ------ | -------- | ------------------------- |
| `mediaId` | String | yes      | Media Id of uploaded file |

## Media Return Methods

- [`isSuccess()`](docs/return-methods.md#issuccess-bool)
- [`getMediaUrl()`](docs/return-methods.md#getmediaurl-string)
- [`getMediaMimeType()`](docs/return-methods.md#getmediamimetype-string)
- [`getMediaFileSize()`](docs/return-methods.md#getmediafilesize-string)
- [`getMediaSha256()`](docs/return-methods.md#getmediasha256-string)

---
title: 🗂️ Get Media Details
sidebar_position: 4
---

Get uploaded media details using media ID

```dart
var upload = await whatsapp.getMedia(
  mediaId: 'MEDIA_ID',
);

upload.getMediaUrl(); //https://cdn.fb.com/xxxxxx
```

| param     | type   | required | description               |
| --------- | ------ | -------- | ------------------------- |
| `mediaId` | String | yes      | Media ID of uploaded file |

## Media Return Methods

- [`isSuccess()`](/docs/return-methods#common-methods)
- [`getMediaId()`](/docs/return-methods#media-methods)
- [`getMediaUrl()`](/docs/return-methods#media-methods)
- [`getMediaMimeType()`](/docs/return-methods#media-methods)
- [`getMediaFileSize()`](/docs/return-methods#media-methods)
- [`getMediaSha256()`](/docs/return-methods#media-methods)

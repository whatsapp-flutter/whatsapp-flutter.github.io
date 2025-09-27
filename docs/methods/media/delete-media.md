---
title: 🗑️ Delete Media
sidebar_position: 5
---

Delete media file using media ID

```dart
await whatsapp.deleteMedia(
  mediaId: 'MEDIA_ID',
);
```

| param     | type   | required | description               |
| --------- | ------ | -------- | ------------------------- |
| `mediaId` | String | yes      | Media ID of uploaded file |

## Media Return Methods

- [`isSuccess()`](/docs/return-methods#common-methods)
- [`isDeleted()`](/docs/return-methods#media-methods)
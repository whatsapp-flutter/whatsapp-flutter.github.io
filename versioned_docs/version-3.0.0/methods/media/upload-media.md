---
title: 📤 Upload Media File
sidebar_position: 2
---

Upload a Media File to Business Account

```dart
var upload = await whatsapp.uploadMediaFile(
  file: File('assets/sample.png'),
  fileType: 'image/png',
);

upload.getMediaId(); //10023589340434
```

| param      | type   | required | description               |
| ---------- | ------ | -------- | ------------------------- |
| `file`     | File   | yes      | File Path.                |
| `fileType` | String | yes      | File Type (ex. image/png) |

:::danger[Supported Media Type]
Please make sure you are using correct media types, Please find out [supported media type here](/docs/methods/media/supported-media-type.md).
:::

:::tip[Some Tips]

Here is some tips to media using [`image_picker Package`](https://pub.dev/packages/image_picker) and [`file_picker Package`](https://pub.dev/packages/file_picker)

**For Image :-**

```dart
 final ImagePicker _picker = ImagePicker();
 final XFile? image = await _picker.pickImage(source: ImageSource.gallery);
 await whatsapp.uploadMediaFile(
     file: image.path,
     fileType: 'image/png'
 );
```

**For Image, Audio, Video, Document or any file :-**

```dart
 FilePickerResult? result = await FilePicker.platform.pickFiles();
 PlatformFile file = result.files.first;
 await whatsapp.uploadMediaFile(
     file: file.path,
     fileType: 'application/pdf'
 );
```

:::

## Media Return Methods

- [`isSuccess()`](docs/return-methods.md#issuccess-bool)
- [`getMediaId()`](docs/return-methods.md#getmediaid-string)

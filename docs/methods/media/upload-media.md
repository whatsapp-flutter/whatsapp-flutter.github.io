---
title: 📤 Upload Media File
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Upload a media file to business account

:::tip **Important Update in v4.0.0  – File Type**
The `file` parameter type **`File`** has been updated to **`dynamic`** to ensure compatibility with web platforms.  

- **Web platforms**: Use `List<int>` (bytes)  
- **Other platforms**: Use `File` (file path)  
:::

```dart
import 'dart:io';

var upload = await whatsapp.uploadMediaFile(
  file: File('sample_files/sample.png'), 
  fileType: 'image/png',
);

upload.getMediaId(); //10023589340434
```

| param      | type   | required | description               |
| ---------- | ------ | -------- | ------------------------- |
| `file`     | dynamic   | yes      | File or List\<int\>    |
| `fileType` | String | yes      | File Type (ex. image/png) |

### Helper

`getAutoFileType(filePath: fileUrl)` - This methods help you automatically determine the file type.

```dart
var file_path = 'sample_files/sample.png'; //or full url
var upload = await whatsapp.uploadMediaFile(
  file: File(file_path),
  fileType: whatsapp.getAutoFileType(filePath: file_path), // ✅ auto-detect type
);
```

:::tip Cross Platforms Example
<Tabs>
<TabItem value="Native_Platforms" label="Native Platforms" default>

```dart
//Android, iOS, Windows, macOS, Linux
import 'dart:io';
var file_path = 'sample_files/sample.png';
final response = await whatsapp.uploadMediaFile(
  file: File(file_path),
  fileType: whatsapp.getAutoFileType(filePath: file_path), // ✅ auto-detect type
);
print('Media ID: ${response.getMediaId()}');
```

  </TabItem>
  <TabItem value="web_platform" label="Web Platforms">

```dart
//Android, iOS, Windows, macOS, Web, Linux
import 'package:file_picker/file_picker.dart'; // Add this dependency

// Using file picker to get bytes
FilePickerResult? result = await FilePicker.platform.pickFiles(
  type: FileType.image,
);

if (result != null) {
  final selectedFile = result.files.single; // Uint8List
  final response = await whatsapp.uploadMediaFile(
    file: selectedFile.bytes, // Pass bytes directly
    //file: File(result.files.first.path!), //Pass file path using File
    fileType: whatsapp.getAutoFileType(filePath: selectedFile.name), // ✅ auto-detect type
  );
  print('Media ID: ${response.getMediaId()}');
}
```
  </TabItem>
  <TabItem value="html" label="Alternative Web Example">

```dart
// Web or HTML
import 'dart:html' as html;
import 'dart:typed_data';

html.FileUploadInputElement uploadInput = html.FileUploadInputElement();
uploadInput.click();

uploadInput.onChange.listen((e) async {
  final files = uploadInput.files;
  if (files != null && files.isNotEmpty) {
    final file = files[0];
    final reader = html.FileReader();
    reader.readAsArrayBuffer(file);

    reader.onLoadEnd.listen((e) async {
      final bytes = reader.result as Uint8List;
      final response = await whatsapp.uploadMediaFile(
        file: bytes,
        fileType: whatsapp.getAutoFileType(fileName: file.name), // ✅ auto-detect type
      );
      print('Media ID: ${response.getMediaId()}');
    });
  }
});
```

  </TabItem>
</Tabs>
:::


:::danger[Supported Media Type]
Please make sure you are using correct media types. Please find out [supported media type here](/docs/methods/media/supported-media-type.md).
:::

:::tip[Some Tips (Native Platforms)]

Here are some tips for media using [`image_picker Package`](https://pub.dev/packages/image_picker) and [`file_picker Package`](https://pub.dev/packages/file_picker)

**For Image :-**

```dart
final ImagePicker _picker = ImagePicker();
final XFile? image = await _picker.pickImage(source: ImageSource.gallery);

if (image != null) {
  await whatsapp.uploadMediaFile(
    file: File(image.path),
    fileType: whatsapp.getAutoFileType(fileName: image.name), // ✅ auto-detect type
  );
}
```

**For Image, Audio, Video, Document or any file :-**

```dart
FilePickerResult? result = await FilePicker.platform.pickFiles();

if (result != null) {
  PlatformFile file = result.files.first;

  await whatsapp.uploadMediaFile(
    file: File(file.path!),
    fileType: whatsapp.getAutoFileType(fileName: file.name), // ✅ auto-detect type
  );
}
```

:::

## Media Return Methods

- [`isSuccess()`](/docs/return-methods#common-methods)
- [`isUploaded()`](/docs/return-methods#media-methods)
- [`getMediaId()`](/docs/return-methods#media-methods)

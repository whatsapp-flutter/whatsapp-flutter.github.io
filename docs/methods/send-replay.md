---
title: 📢 Replay a message
sidebar_position: 16
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Send replay to a specific message

```dart
await whatsapp.replay(
    phoneNumber: 'PHONE_NUMBER',
    messageId: 'MESSAGE_ID',
    replay: Replay().text("Thank for contacting us", true),
);
```

| param         | type                   | required | description                             |
| ------------- | ---------------------- | -------- | --------------------------------------- |
| `phoneNumber` | String                 | yes      | Phone number with county code and plus. |
| `messageId`   | String                 | yes      | A message id                            |
| `replay`      | Map\<String, dynamic\> | yes      | Replay Content                          |

## Replay

For replay to a specific message, you can use `Replay` class methods, our you can use custom json object.

Here is predefined methods for Replay:

:::tip[Text]
<Tabs>
<TabItem value="text" label="Send Text Replay" default>

```dart
Replay().text(
    "Thank for contacting us", //Replay Text
    true, //Url preview
);
```

  </TabItem>
</Tabs>
:::

:::tip[Image]
<Tabs>
<TabItem value="image_by_id" label="By Image Id" default>

```dart
Replay().imageById(
    "1100XXXXXXXXXXXXX", //Image Media ID
);
```

  </TabItem>
  <TabItem value="image_by_URL" label="By Image Url" default>

```dart
Replay().imageByUrl(
    "https:://example.com/sample.jpg", //Image direct url
);
```

  </TabItem>
</Tabs>
:::

:::tip[Audio]
<Tabs>
<TabItem value="Audio_by_id" label="By Audio Id" default>

```dart
Replay().audioById(
    "1100XXXXXXXXXXXXX", //Audio Media ID
);
```

  </TabItem>
  <TabItem value="Audio_by_URL" label="By Audio Url" default>

```dart
Replay().audioByUrl(
    "https:://example.com/sample.mp3", //Audio direct url
);
```

  </TabItem>
</Tabs>
:::

:::tip[Video]
<Tabs>
<TabItem value="Video_by_id" label="By Video Id" default>

```dart
Replay().videoById(
    "1100XXXXXXXXXXXXX", //Video Media ID
);
```

  </TabItem>
  <TabItem value="Video_by_URL" label="By Video Url" default>

```dart
Replay().videoByUrl(
    "https:://example.com/sample.mp4", //Video direct url
);
```

  </TabItem>
</Tabs>
:::

:::tip[Document]
<Tabs>
<TabItem value="Document_by_id" label="By Document Id" default>

```dart
Replay().documentById(
    "1100XXXXXXXXXXXXX", //Document Media ID
);
```

  </TabItem>
  <TabItem value="Document_by_URL" label="By Document Url" default>

```dart
Replay().documentByUrl(
    "https:://example.com/sample.pdf", //Document direct url
);
```

  </TabItem>
</Tabs>
:::

:::info[Custom Object]
You can pass your custom object as well.
Find documentation here [https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages/#replies](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages/#replies)

```dart
await whatsapp.replay(
    phoneNumber: 'PHONE_NUMBER',
    messageId: 'MESSAGE_ID',
    replay: {
        "type":"image",
        "image" : {
            "link" :"https://example.com/sample.jpg"
        }
    },
);
```

:::

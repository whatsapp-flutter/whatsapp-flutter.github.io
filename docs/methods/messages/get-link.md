---
title: 👁‍🗨 Generate Link
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Generate direct link for whatsapp

```dart
whatsapp.getLink(
    phoneNumber : "+91XXXXXXXXXX",
    message = 'Hy Johnny, How Are You.',
    shortLink = false,
    bold : ["Johnny"] ,
    italic : ["How"],
    strikethrough : ["Are"],
    monospace : ["You"],
);
```

:::tip[Output]
<Tabs>
<TabItem value="false" label="shortLink = false" default>

```bash
https://api.whatsapp.com/send?phone=91XXXXXXXXXX&text=Hy%20%2AJohnny%2A%2C%20_How_%20~Are~%20%60%60%60You%60%60%60.%0A
```

  </TabItem>
  <TabItem value="true" label="shortLink = true">

```bash
https://wa.me/91XXXXXXXXXX&text=Hy%20%2AJohnny%2A%2C%20_How_%20~Are~%20%60%60%60You%60%60%60.%0A
```

  </TabItem>
</Tabs>
:::

| param           | type           | required | description                                  |
| --------------- | -------------- | -------- | -------------------------------------------- |
| `phoneNumber`   | String         | yes      | Phone number with county code and plus.      |
| `message`       | String         | no       | A message to send                            |
| `shortLink`     | bool           | no       | Make link shorten `default: false`           |
| `bold`          | List\<String\> | no       | List of Text to add Bold formatting          |
| `italic`        | List\<String\> | no       | List of Text to add italic formatting        |
| `strikethrough` | List\<String\> | no       | List of Text to add strikethrough formatting |
| `monospace`     | List\<String\> | no       | List of Text to add monospace formatting     |

---
title: Getting Started
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<p align="center">
  <img src="https://raw.githubusercontent.com/rohit-chouhan/whatsapp/main/img/whatsapp-flutter-banner-v4.png" alt="WhatsApp Flutter Banner"/>
</p>

This Flutter package provides seamless integration with the WhatsApp Business API, enabling developers to send messages, media, templates, manage business profiles, create interactive elements and flows, and share catalog messages within Flutter applications. The package supports the latest WhatsApp Business API version 23.0.

![Pub Likes](https://img.shields.io/pub/likes/whatsapp)
![Pub Points](https://img.shields.io/pub/points/whatsapp)
![Pub Monthly Downloads](https://img.shields.io/pub/dm/whatsapp)
![GitHub Issues](https://img.shields.io/github/issues/rohit-chouhan/whatsapp)
![GitHub PRs](https://img.shields.io/github/issues-pr/rohit-chouhan/whatsapp)
![GitHub Forks](https://img.shields.io/github/forks/rohit-chouhan/whatsapp)

For a comprehensive guide to the **WhatsApp Business Cloud API**, refer to the official documentation:  
[WhatsApp Business Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/)

## Installation Options

:::tip Choose the method that suits you
<Tabs>
<TabItem value="copy_version" label="Copy Version" default>

```bash
whatsapp: ^4.0.0
```

  </TabItem>
  <TabItem value="flutter_command" label="Flutter Command">
```bash
flutter pub add whatsapp
```
  </TabItem>
  <TabItem value="pubspec" label="pubspec.yaml">
   You can also copy the following snippet into your `pubspec.yaml` file:

```yaml
dependencies:
  whatsapp: ^4.0.0
```

  </TabItem>
</Tabs>
:::

## Import

In your Dart code, import the package like this:

```dart
import 'package:whatsapp/whatsapp.dart';
```

---
title: Initialization
sidebar_position: 2
---

To use the WhatsApp package, initialize the class object using the constructor.

```dart
const accessToken = 'YOUR_ACCESS_TOKEN';
const fromNumberId = 'YOUR_BUSINESS_PHONE_NUMBER_ID';

final whatsapp = WhatsApp(accessToken, fromNumberId);
```

| param          | type   | required | description                               |
| -------------- | ------ | -------- | ----------------------------------------- |
| `accessToken`  | String | yes      | Access token for your Facebook App         |
| `fromNumberId` | String | yes      | Phone Number ID for your WhatsApp business |


### ⚙️ API Version Customization

By default, the package uses WhatsApp Business API version `v23.0`. If you want to target a specific Graph API release, you can override the default version using the `setVersion` method. This ensures compatibility with version-dependent features and prevents issues with deprecated endpoints.

:::tip Default Version
If not set, the API version defaults to v23.0.
:::

```dart
String version = "v21.0"; // specify as needed
whatsapp.setVersion(version);
```
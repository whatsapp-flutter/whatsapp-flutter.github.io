---
title: Return Methods
sidebar_position: 3
---

There multiple return method, will helps you to determine your request.

```dart
 var res = await whatsapp.sendMessage(
     phoneNumber: '+91XXXXXXXXXX',
     text: "Hello, this is a test message!"
 );
```

## isSuccess() `bool`

Check if the request was successful. Returns true if the HTTP status code is between 200 => and < 300.

:::info[Example]

```dart
res.isSuccess();
// true
```

:::

## getHttpCode() `int`

Get the HTTP status code.

:::info[Example]

```dart
res.getHttpCode();
// 200
```

:::

## getError() `String`

Get HTTP Request error message.

:::info[Example]

```dart
res.getError();
// An error occurred: ClientException: Failed to parse header value
```

:::

## getErrorMessage() `String`

Get exact error message from whatsapp business api.

:::info[Example]

```dart
res.getErrorMessage();
// The phone_number parameter is required.
```

:::

## getMessageId() `String`

Get sent message whatsapp message id.

:::info[Example]

```dart
res.getMessageId();
// wamid.HBgMOTE3MDIzMDQyMzA2FQIAERgSMDlCNTVGMUJFMkMxOTU1RUJEAA==
```

:::

## getPhoneNumber() `String`

Get the phone number where message has been sent.

:::info[Example]

```dart
res.getPhoneNumber();
// +91XXXXXXXXXX
```

:::

## getResponse() `Map`

Get response body from request.
:::info[Example]

```dart
res.getResponse();
// {
//    messaging_product: whatsapp,
//    contacts: [{
//        input: +91XXXXXXXXXX,
//        wa_id: 91XXXXXXXXXX
//    }],
//    messages: [{
//        id: wamid.HBgMOTE3MDIzMDQyMzA2FQIAERgSRkVCRTM5Q0UwQUIyOTE4NTEzAA==
//    }]
// }
```

:::

## getMediaId() `String`

Get media id of uploaded media after upload.

:::info[Example]

```dart
res.getMediaId();
// 1041224066853401
```

:::

## getMediaUrl() `String`

Get public media url of uploaded media.

:::info[Example]

```dart
res.getMediaUrl();
// https://lookaside.fbsbx.com/whatsapp_business/attachments/?mid=1041224066853401&ext=1721591487&hash=ATv7_iq0Tnoi1nO4eh06M7qF-fSHGa-QExcJEnkpOaCYOA
```

:::

## getMediaMimeType() `String`

Get Uploaded media MIME type.

:::info[Example]

```dart
res.getMediaMimeType();
// image/png
```

:::

## getMediaSha256() `String`

Get Uploaded media SHA-256 hash.

:::info[Example]

```dart
res.getMediaSha256();
// 4d2e172311d776ff44ff03ec1fdd86e05bb6c2fbc8c9a0595e48fd7cbacba6ba
```

:::

## getMediaFileSize() `String`

Get media file size in bytes

:::info[Example]

```dart
res.getMediaFileSize();
// 187604
```

:::

---
title: 💬 Send a message
sidebar_position: 1
---

Send a message to the specified phone number

```dart
var res = await whatsapp.sendMessage(
  phoneNumber : 'PHONE_NUMBER',
  text : 'text_message',
  previewUrl : true,
);

if(res.isSuccess()){
  print(res.getMessageId()); // wamid.HBgMOTE3MDIzMDQyMzA2FQIAERgSRkVCRTM5Q0UwQUIyOTE4NTEzAA==
} else {
  print('HTTP: $res.getHttpCode()'); // 400
  print('API Error: $res.getErrorMessage()'); // Phone Number is not valid
}
```

:::tip Return Methods
Please find out supported return method [here](/docs/return-methods.md).
That return method can be used in all methods.
:::

| param         | type   | required | description                                 |
| ------------- | ------ | -------- | ------------------------------------------- |
| `phoneNumber` | string | yes      | Phone number with county code and plus.     |
| `text`        | string | yes      | A text message to send                      |
| `previewUrl`  | bool   | no       | Url preview in message if there is any link |

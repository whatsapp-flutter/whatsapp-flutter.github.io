---
title: Method Usage
sidebar_position: 4
---

:::warning Await is Must
It is crucial to use await with all methods due to API calls and for better state management.
:::

:::info Return Method Usage
To utilize return methods, assign your method call to a Request or var type variable.

See simple example:

```dart
 var response = await whatsapp.sendMessage(
     phoneNumber: '+91XXXXXXXXXX',
     text: "Welcome to WhatsApp Flutter."
 );

response.isSuccess(); //return method
```

See better example:

```dart
var res = await whatsapp.sendMessage(
  phoneNumber : 'PHONE_NUMBER',
  text : 'text_message',
  previewUrl : true,
);

if (res.isSuccess()) {
    // when message sent
    //Return id of message
    debugPrint('Message ID: ${res.getMessageId()}');

    //Return number where message sent
    debugPrint('Message sent to: ${res.getPhoneNumber()}');

    //Return exact API Response Body
    debugPrint('API Response: ${res.getResponse().toString()}');
} else {
    //when something went wrong
    //Will return HTTP CODE
    debugPrint('HTTP Code: ${res.getHttpCode()}');

    // Will return exact error from WhatsApp Cloud API
    debugPrint('API Error: ${res.getErrorMessage()}');

    // Will return HTTP Request error
    debugPrint('Request Error: ${res.getError()}');

    //Return exact API Response Body
    debugPrint('API Response: ${res.getResponse().toString()}');
}
```

It is important to understand how to use the methods provided by the whatsapp library. Make sure to review the return methods documentation at [`docs/return-methods`](/docs/return-methods.md)

:::

:::info Phone Number Format

The Phone number you can add followed by the country code with `+` sign or without.
For example: `+91XXXXXXXXXX` or `91XXXXXXXXXX`.

:::

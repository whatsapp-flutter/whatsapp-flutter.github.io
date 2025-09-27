---
title: Method Usage
sidebar_position: 4
---

:::warning Await is Must
It is crucial to use await with all methods due to API calls and for better state management.
:::

:::info Return Method Usage
To utilize return methods, assign your method call to a Request or var type variable.

```dart
var res = await whatsapp.sendMessage(
    phoneNumber: 'RECIPIENT_NUMBER',
    text: 'text_message',
    previewUrl: true,
);

if (res.isSuccess()) {
    // when message sent
    // Returns the ID of the message
    print('Message ID: ${res.getMessageId()}');

    // Returns the number where the message was sent
    print('Message sent to: ${res.getContactId()}');

    // Returns the exact API response body
    print('API Response: ${res.getFullResponse()}');
} else {
    // Returns the WhatsApp error code
    print('HTTP Code: ${res.getErrorCode()}');

    // Returns the exact error from the WhatsApp Cloud API
    print('API Error: ${res.getErrorMessage()}');

    // Returns the WhatsApp error type
    print('Request Error: ${res.getErrorType()}');
}
```
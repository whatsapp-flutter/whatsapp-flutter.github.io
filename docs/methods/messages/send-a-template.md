---
title: 💬 Send a template
sidebar_position: 2
---

Send a template message to the specified phone number.

```dart
await whatsapp.sendTemplate(
  phoneNumber : 'PHONE_NUMBER',
  template : 'one_time_password_template',
  language : 'en_US',
  placeholder: [
   {"type": "text", "text": "123456"}
  ]
);
```

| param         | type                         | required | description                             |
| ------------- | ---------------------------- | -------- | --------------------------------------- |
| `phoneNumber` | String                       | yes      | Phone number with county code and plus. |
| `template`    | String                       | yes      | A template id                           |
| `language`    | String                       | yes      | lang code (ex. en_US)                   |
| `placeholder` | List\<Map\<String, dynamic>> | no       | Placeholder variables for template      |

## Placeholder

You can use placeholders (strings of characters) in WhatsApp operator templates.
Its takes type as `List<Map<String, dynamic>>`.

:::info
Please find out supported <a href="https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/#example-request--editing-components-">Components</a> and more details, at WhatsApp Cloud API.
:::

Here the sample example.

```dart
whatsapp.sendTemplate(
  phoneNumber : 'PHONE_NUMBER',
  template : 'TEMPLATE_ID',
  language : 'en_US',
  placeholder: [
    {
      "type": "HEADER",
      "format": "TEXT",
      "text": "Our {{1}} is on!",
      "example": {
        "header_text": [
          "Spring Sale"
        ]
      }
    },
    {
      "type": "BODY",
      "text": "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
      "example": {
        "body_text": [
          [
            "the end of April",
            "25OFF",
            "25%"
          ]
        ]
      }
    },
    {
      "type": "FOOTER",
      "text": "Use the buttons below to manage your marketing subscriptions"
    },
    {
      "type": "BUTTONS",
      "buttons": [
        {
          "type": "QUICK_REPLY",
          "text": "Unsubcribe from Promos"
        },
        {
          "type": "QUICK_REPLY",
          "text": "Unsubscribe from All"
        }
      ]
    }
  ]
);
```

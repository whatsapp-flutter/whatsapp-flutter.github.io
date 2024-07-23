---
title: 🖲 Send Replay Button
---

Send a Replay Button Actions.

```dart
await whatsapp.sendInteractiveReplayButton(
    phoneNumber: 'PHONR_NUMBER',
    headerInteractive: {
        "type": "image",
        "image": {
            "link": "https://www.akc.org/wp-content/uploads/2015/03/so-you-want-to-breed-dogs-500x500.jpg",
        }
    },
    bodyText: "Choose an option",
    footerText: "Tap to proceed",
    interactiveReplyButtons: [{
            "type": "reply",
            "reply": {
                "id": "change-button",
                "title": "Change"
            }
        },
        {
            "type": "reply",
            "reply": {
                "id": "cancel-button",
                "title": "Cancel"
            }
        }
    ],
);
```

| param                     | type                           | required | description                             |
| ------------------------- | ------------------------------ | -------- | --------------------------------------- |
| `phoneNumber`             | String                         | yes      | Phone number with county code and plus. |
| `headerInteractive`       | Map\<String, dynamic\>         | yes      | Header content                          |
| `bodyText`                | String                         | yes      | Body content                            |
| `footerText`              | String                         | yes      | Footer content                          |
| `interactiveReplyButtons` | List\<Map\<String, dynamic\>\> | yes      | Actions                                 |

## headerInteractive

Header is part of message, which will be shown in top of message.

Supports the following types:

- document
- image
- text
- video

You can provide map values of given types, and use `media_id` or `link`.

### Using Media ID

```js
{
  "type": "image",
  "image": {
    "to": "media_id"
  }
}
```

### Using Link

```js
{
  "type": "image",
  "image": {
    "link": "https://www.akc.org/wp-content/uploads/2015/03/so-you-want-to-breed-dogs-500x500.jpg"
  }
}
```

## interactiveReplyButtons

- `type` : The type field specifies the kind of interactive element. For reply buttons, the type is always set to "reply".
- `replay`: The reply object contains the id and title of the button. This is the actual content of the button that the user sees and interacts with.
  - `Id` : The id is a unique identifier for each button. It is used to distinguish between different buttons within the same or different messages. This id is usually a string.
  - `title` :The title is the text that appears on the button. It is a short, descriptive label that indicates the action that will be taken when the button is pressed.

:::tip Need more help?

I acknowledge that this method can be quite complex. If you find it challenging to understand, please refer to the official documentation for further assistance: <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-reply-buttons-messages/">WhatsApp Cloud API - Interactive Reply Buttons Messages</a>

:::

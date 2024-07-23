---
title: 📋 Send List
---

Send a list option, user to choose.

```dart
await whatsapp.sendInteractiveLists(
    phoneNumber: 'PHONE_NUMBER',
    headerText: "Welcome Dear",
    bodyText: "Choose your favorite animal",
    footerText: "Please choose only one",
    buttonText: "Choose",
    sections: [{
            "title": "Birds",
            "rows": [{
                    "id": "1001",
                    "title": "Peacock",
                    "description": "Lifespan: 15 years"
                },
                {
                    "id": "1002",
                    "title": "Cardinal",
                    "description": "Lifespan: 12 years"
                },
                {
                    "id": "1003",
                    "title": "Cockatiel",
                    "description": "Lifespan: 10 years"
                }
            ]
        },
        {
            "title": "Wild Animals",
            "rows": [{
                    "id": "2001",
                    "title": "Lion",
                    "description": "Lifespan: 15 years"
                },
                {
                    "id": "2002",
                    "title": "Tiger",
                    "description": "Lifespan: 12 years"
                },
                {
                    "id": "2003",
                    "title": "Elephant",
                    "description": "Lifespan: 10 years"
                }
            ]
        }
    ],
);
```

| param         | type                           | required | description                             |
| ------------- | ------------------------------ | -------- | --------------------------------------- |
| `phoneNumber` | String                         | yes      | Phone number with county code and plus. |
| `headerText`  | String                         | no       | Header Text                             |
| `bodyText`    | String                         | yes      | Body Text                               |
| `footerText`  | String                         | no       | Footer Text                             |
| `buttonText`  | String                         | yes      | Button Text                             |
| `sections`    | List\<Map\<String, dynamic\>\> | yes      | List Content                            |

## Components of Interactive List Messages

### Sections

A section is a grouping of related items. Each section has a title and contains multiple rows. Sections help organize the content in a logical way for the user.

```js
"sections": [{
    "title": "Birds",
    "rows": [...]
}]
```

### Title

The title of a section is a string that describes the content or theme of that section. It provides context to the user about the type of items they can expect within that section.

```js
"title": "Birds"
```

### Rows

Rows are individual items within a section. Each row represents a single interactive element that the user can select. A row contains an id, title, and description.

```js
"rows": [{
    "id": "1001",
    "title": "Peacock",
    "description": "Lifespan: 15 years"
}]
```

- #### ID

The id is a unique identifier for each row. It is used to distinguish between different rows within the same or different sections. This id is usually a string.

- #### Title

The title of a row is a string that provides the main information about that row. It is typically a short, descriptive name or label for the item.

- #### Description

The description of a row is a string that provides additional details about the item. This can include information such as characteristics, lifespan, or any other relevant data.

:::tip Need more help?

I acknowledge that this method can be quite complex. If you find it challenging to understand, please refer to the official documentation for further assistance: <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-list-messages/">WhatsApp Cloud API - Interactive List</a>

:::

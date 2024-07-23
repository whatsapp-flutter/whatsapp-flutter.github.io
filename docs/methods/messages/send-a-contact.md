---
title: ☎️ Send a Contact
sidebar_position: 3
---

Send a contact details to the specified phone number

```dart
await client.sendContactDetails(
    phoneNumber: phoneNumber,
    dateOfBirth: "1990-01-01",
    addresses: [{
        "street": "Ajmer",
        "city": "Ajmer",
        "state": "Rajasthan",
        "zip": "305001",
        "country": "India",
        "country_code": "in",
        "type": "contact",
    }],
    emails: [{
        "email": "me@rohitchouhan.com",
        "type": "contact"
    }],
    organization: {
        "company": "Codebrine",
        "department": "IT",
        "title": "Founder"
    },
    person: {
        "formatted_name": "Rohit Chouhan",
        "first_name": "Rohit",
        "last_name": "Chouhan",
        "middle_name": "",
        "suffix": "Mr.",
        "prefix": "Mr."
    },
    phones: [{
        "phone": "+919999999999",
        "type": "Home"
    }],
    urls: [{
        "url": "https://rohitchouhan.com",
        "type": "Personal Website"
    }],
);
```

| param          | type                           | required | description                             |
| -------------- | ------------------------------ | -------- | --------------------------------------- |
| `phoneNumber`  | String                         | yes      | Phone number with county code and plus. |
| `dateOfBirth`  | String                         | no       | Date of Birth `YYYY-MM-DD`              |
| `addresses`    | List\<Map\<String, dynamic\>\> | no       | List of Address                         |
| `emails`       | List\<Map\<String, dynamic\>\> | no       | List of Emails                          |
| `organization` | Map\<String, dynamic\>         | no       | Organization Details                    |
| `person`       | Map\<String, dynamic\>         | yes      | Person Information                      |
| `phone`        | List\<Map\<String, dynamic\>\> | yes      | Phone Details                           |
| `url`          | List\<Map\<String, dynamic\>\> | no       | List of Webpages                        |

---
title: ✏️ Update Business Profile
sidebar_position: 2
---

Update your WhatsApp business profile details

```dart
await whatsapp.updateBusinessProfile(
    about: "Welcome to my shop.",
    address: "Ajmer, Rajasthan",
    description: "We sell any kind of toys.",
    industry: "OTHER",
    email: "buy@example.com",
    websites: [
        "https://example.com",
        "https://demo.com"
    ],
    profilePictureHandle: "RESUMABLE_H_FILE_ID",
);
```

| param                  | type           | required | description                 |
| ---------------------- | -------------- | -------- | --------------------------- |
| `about`                | String         | no       | About Status                |
| `address`              | String         | no       | Your Business Address       |
| `description`          | String         | no       | Your Business Details       |
| `industry`             | String         | no       | Your Business Category      |
| `email`                | String         | no       | Your Business Email Address |
| `websites`             | List\<String\> | no       | Your Business Websites      |
| `profilePictureHandle` | String         | no       | `h` id generated from [resumable upload file](/docs/methods/resumable/upload-resumable-file)    |

## Supported Industry

- OTHER
- AUTO
- BEAUTY
- APPAREL
- EDU
- ENTERTAIN
- EVENT_PLAN
- FINANCE
- GROCERY
- GOVT
- HOTEL
- HEALTH
- NONPROFIT
- PROF_SERVICES
- RETAIL
- TRAVEL
- RESTAURANT
- ALCOHOL
- ONLINE_GAMBLING
- PHYSICAL_GAMBLING
- OTC_DRUGS

---
title: ✏️ Update Business Profile
sidebar_position: 2
---

Update your whatsapp business profile details

```dart
await whatsapp.updateBusinessProfile({
    about: "Welcome to my shop.",
    address: "Ajmer, Rajasthan",
    description: "We sell any kind of toys.",
    industry: "TOY",
    email: "buy@example.com",
    websites: [
        "https://example.com",
        "https://demo.com"
    ],
    profilePictureHandle: "profilePictureHandle",
});
```

| param                  | type           | required | description                 |
| ---------------------- | -------------- | -------- | --------------------------- |
| `about`                | String         | no       | About Status                |
| `address`              | String         | no       | Your Business Address       |
| `description`          | String         | no       | Your Business Details       |
| `industry`             | String         | no       | Your Business Category      |
| `email`                | String         | no       | Your Business Email Address |
| `website`              | List\<String\> | no       | Your Business Websites      |
| `profilePictureHandle` | String         | no       | Business Profile Pic        |

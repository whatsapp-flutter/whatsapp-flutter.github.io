---
title: ⚠️ Read Before You Start
sidebar_position: 1
---

Before sending or receiving messages, **recipient numbers must be registered** with your business account using the `register()` method. Unregistered numbers may cause methods to fail or messages not to be delivered.

:::warning Method: `register()`
Always register your **test or recipient numbers** before making API calls.  
➡️ [Learn more about the `register` method](/docs/methods/users/register-number)
:::

:::success Note
If a user sends a message to your business number (e.g., "hi"), their number is **automatically registered**. In this case, you **do not need** to call `register()` manually.
:::

📖 For more details, see the official WhatsApp Business documentation on [Registering Numbers](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/registration/).

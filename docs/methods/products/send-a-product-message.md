---
title: 🛍️ Send a Product Message
sidebar_position: 2
---

Send a product message to the specified phone number.
```dart
 await whatsapp.sendProductMessage(
   phoneNumber: 'RECIPIENT_NUMBER',
   catalogId: 'your_catalog_id',
   productRetailerId: 'product_retailer_id',
   bodyText: 'Amazing product at great price.',
   footerText: 'Subscribe',
 );
```

| param               | type   | required | description                                                     |
| ------------------- | ------ | -------- | --------------------------------------------------------------- |
| `phoneNumber`       | String | yes      | Phone number with country code.                        |
| `catalogId`         | String | yes      | The ID of the catalog linked to your WhatsApp Business account. |
| `productRetailerId` | String | yes      | Unique product retailer ID from your catalog.                   |
| `bodyText`          | String | no       | Body text displayed below the product details.                  |
| `footerText`        | String | no       | Footer text displayed below the product card.                   |

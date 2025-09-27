---
title: 🛍️ Send a Catalog Message
sidebar_position: 1
---

Send a catalog message to the specified phone number.
```dart
 await whatsapp.sendCatalogMessage(
   phoneNumber: 'RECIPIENT_NUMBER',
   productRetailerId: 'product_retailer_id',
   headerText: 'Check out this product!',
   bodyText: 'Amazing product at great price.',
   footerText: 'Subscribe',
 );
```

| param               | type   | required | description                                                     |
| ------------------- | ------ | -------- | --------------------------------------------------------------- |
| `phoneNumber`       | String | yes      | Phone number with country code.                        |
| `productRetailerId` | String | yes      | Unique product retailer ID from your catalog.                   |
| `headerText`        | String | no       | Header text displayed above the product card.                   |
| `bodyText`          | String | no       | Body text displayed below the product details.                  |
| `footerText`        | String | no       | Footer text displayed below the product card.                   |

## Example with multiple products

If you want to showcase more than one product, you can include a catalog message with a collection of items.

```dart
await whatsapp.sendCatalogMessage(
  phoneNumber: 'RECIPIENT_NUMBER',
  productRetailerId: 'product_123',
  headerText: '🔥 Hot Deals!',
  bodyText: 'Browse our top products today!',
  footerText:'Follow us',
);

await whatsapp.sendCatalogMessage(
  phoneNumber: 'RECIPIENT_NUMBER',
  productRetailerId: 'product_456',
  headerText: '✨ Best Seller!',
  bodyText: 'Don’t miss out on this one!',
  footerText:'Follow us',
);
```
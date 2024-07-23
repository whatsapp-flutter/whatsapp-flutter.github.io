---
title: 📍 Send Location
---

Send specific location to user.

```dart
await whatsapp.sendLocation(
  phoneNumber: 'PHONE_NUMBER',
  latitude: 25.197197,
  longitude: 55.2743764,
  name: "Burj Khalifa",
  address:"1 Sheikh Mohammed bin, United Arab Emirates"
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with county code and plus. |
| `latitude`    | double | yes      | Location Latitude                       |
| `longitude`   | double | yes      | Location Longitude                      |
| `name`        | String | no       | Location Name                           |
| `address`     | String | no       | Location Address                        |

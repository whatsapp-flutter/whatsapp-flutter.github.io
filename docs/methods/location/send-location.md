---
title: 📍 Send Location
---

Send specific location to user.

```dart
await whatsapp.sendLocation(
  phoneNumber: 'RECIPIENT_NUMBER',
  latitude: 40.7580,
  longitude: -73.9855,
  name: "Times Square",
  address: "Manhattan, NY 10036, United States"
);
```

| param         | type   | required | description                             |
| ------------- | ------ | -------- | --------------------------------------- |
| `phoneNumber` | String | yes      | Phone number with country code. |
| `latitude`    | double | yes      | Location Latitude                       |
| `longitude`   | double | yes      | Location Longitude                      |
| `name`        | String | no       | Location Name                           |
| `address`     | String | no       | Location Address                        |

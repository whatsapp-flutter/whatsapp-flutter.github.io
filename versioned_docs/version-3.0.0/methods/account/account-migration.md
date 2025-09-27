---
title: 🤝 Account Migration
sidebar_position: 3
---

Register the number for use with Cloud API after you have performed your backup.

```dart
await whatsapp.accountMigrationRegister(
    digitsPinCode: "123456",
    backupData: "BACKUP_DATA",
    password: "PASSWORD"
);
```

| param           | type   | required | description                                                                                                                                                                                                                                                                                                  |
| --------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `digitsPinCode` | String | yes      | A 6-digit pin you have previously set up. If you use the wrong pin, your on-premise deployment will be down and will be disconnected from the WhatsApp servers                                                                                                                                               |
| `backupData`    | String | no       | The data value you get when you backup your on-premise deployment. This contains the account registration info and application settings. See [Backup and Restore](https://developers.facebook.com/docs/whatsapp/on-premises/reference/settings/backup-and-restore) to backup your on-premise implementation. |
| `password`      | String | yes      | The password you used in the backup API of your On-Premises deployment.                                                                                                                                                                                                                                      |

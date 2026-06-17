---
title: Return Methods
sidebar_position: 3
---

There are multiple return methods that help you determine the status of your request.

## Common Methods

:::note
These methods are supported across all methods
:::

These methods are available in the base response class and commonly used across all response types.

- **`isSuccess()`**: Checks if the operation was successful. This method should be implemented by subclasses to define what constitutes success for their specific response type.

- **`getFullResponse()`**: Returns the complete, raw JSON response from the API. Useful for debugging or accessing other data not directly exposed by this class's properties.

- **`getErrorMessage()`**: Retrieves a descriptive error message if the operation failed. It parses the `error` field from the full response to return a human-readable message, or a generic message if no error is found.

- **`getErrorCode()`**: Gets the numeric error code from a failed operation. Returns the `code` field from the error object in the API response, or `0` if the operation was successful.

- **`getErrorType()`**: Gets the type of error from a failed operation. Returns the `type` field from the error object in the API response, or an empty string if the operation was successful.


## Messages Methods

These methods are specific to other response types such as messaging, templates, etc.

- **`getMessageId()`**: Returns the unique ID of the sent message.

- **`getContactId()`**: Returns the WhatsApp ID of the recipient contact.

## Media Methods

These methods are specific to media-related operations such as uploading, getting, or deleting media.

- **`getMediaId()`**: Returns the WhatsApp ID of the uploaded or retrieved media.

- **`getMediaUrl()`**: Returns the full URL of the media.

- **`getMediaMimeType()`**: Returns the MIME type of the media.

- **`getMediaSha256()`**: Returns the SHA-256 hash of the media.

- **`getMediaFileSize()`**: Returns the file size of the media.

- **`isDeleted()`**: Checks if the media was deleted successfully. This method is deprecated and should be replaced with `isSuccess()`. It returns the result of calling `isSuccess()`.

- **`isUploaded()`**: Deprecated. Calls `isSuccess()` and returns the result.

## Business Account Methods

These methods are specific to other response types such as messaging, business accounts, and user management.

- **`getAbout()`**: Returns the `about` field value or an empty string.

- **`getAddress()`**: Returns the `address` field value or an empty string.

- **`getDescription()`**: Returns the `description` field value or an empty string.

- **`getEmail()`**: Returns the `email` field value or an empty string.

- **`getProfilePictureUrl()`**: Returns the `profilePictureUrl` field value or an empty string.

- **`getVertical()`**: Returns the `vertical` field value or an empty string.

- **`getWebsites()`**: Returns the `websites` field value or an empty string.

## Users Block/Unblock Methods

- **`isSomeSuccess()`**: Checks if some users were blocked (partial success). Returns `true` if there are failed users, indicating partial success.

- **`getUsersList()`**: Returns the list of blocked users.

- **`getCursorBefore()`**: Returns the cursor for pagination to get the previous page of results.

- **`getCursorAfter()`**: Returns the cursor for pagination to get the next page of results.

## Resumable Methods

- **`getId()`**: Returns the id of created resumable upload session.

- **`getH()`**: Returns the `h` id of uploaded image.

- **`getFileOffset()`**: Returns the file size in bytes of created resumable upload session.

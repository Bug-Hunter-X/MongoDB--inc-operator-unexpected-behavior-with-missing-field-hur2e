# MongoDB $inc Operator Unexpected Behavior

This repository demonstrates an uncommon bug related to the `$inc` operator in MongoDB.  Specifically, when attempting to decrement a counter using `$inc` on a document where the counter field does not exist, it sets the counter to -1 instead of handling the missing field gracefully.

## Bug Description
The `$inc` operator in MongoDB is designed to increment or decrement a numerical field. However, when applied to a non-existent field, it unexpectedly creates the field and sets its value, which is different than most other database systems' behavior. This can lead to hard-to-debug issues.

## Reproduction Steps
1. Create a MongoDB collection.
2. Attempt to decrement a non-existent counter field using `$inc`.
3. Observe that the field is created with a value of -1 instead of 0 or an error being thrown.

## Solution
The solution involves checking for the existence of the counter field before attempting the increment/decrement operation, or using the `$setOnInsert` operator in conjunction with `$inc` to handle cases where the field does not yet exist.  Consider using a default value if the field is missing.
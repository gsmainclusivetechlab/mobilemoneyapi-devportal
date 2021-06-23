---
pageClass: api-page
---

## API Endpoints

API endpoint fields are described in this specification as follows:

- The field **name**.
- The field **type**.
- **Description** of the field.
- **Optionality** of the field, i.e. whether the field must be supplied. Optionality is identified as per follows:

-> Request optionality

<- Response optionality

O    Field is optional

M    Field is mandatory

C    Field is conditional

NA    Field does not need to be supplied. If supplied, it will be ignored.

<br>

- **Reference** where the fields is a acollection/n array and/or is defined by another object.
- **Validation** applied to the field, including enumeration, field length and use of regular expressions to validate format.

Please note that string fields have a default maximum length of 256 characters unless specified otherwise.

### Transactions API

P2P Transfers can be created,  and viewed and updated using transactions APIs. The following paths are permitted:

*POST /transactions/type/transfer*. To create a P2P transfer.

*GET /transactions/{transactionReference}*. To view a P2P transfer.

The following paths are permitted:

| Operation | Path  | Description |
|-----------|-------|-------------|
| Create | POST */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL.  |
| View | GET */transactions/{transactionReference}* | To view a transaction. |
| Update | PATCH */transactions/{transactionReference}* | To update the transactionStatus of a transaction. |

### Transaction UML Class Diagram

TBC

### Transaction Object Definition

TBC

## Reversals API

TBC

### Reversal UML Class Diagram

TBC

### Reversal Object Definition

TBC

## Accounts APIs

TBC

### Identifying an FSP Account

TBC

#### Single Identifier Method Multiple Identifiers Method

TBC

## Account Transactions API

TBC

### Account Transaction UML Class Diagram

TBC

## Account Balances API

TBC

### Account Balance Object Definition

TBC

## Account Holder Name API

TBC

### Account Holder Name UML Class Diagram

TBC

### Account Holder Name Object Definition




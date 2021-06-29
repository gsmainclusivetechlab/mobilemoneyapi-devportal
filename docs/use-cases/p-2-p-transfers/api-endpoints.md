---
pageClass: api-page
---

# API Endpoints

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

## Transactions API

P2P Transfers can be created,  and viewed and updated using transactions APIs. The following paths are permitted:

*POST /transactions/type/transfer*. To create a P2P transfer.

*GET /transactions/{transactionReference}*. To view a P2P transfer.

The following paths are permitted:

| Operation | Path  | Description |
|:-----------|:-------|:-------------|
| Create | POST */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL.  |
| View | GET */transactions/{transactionReference}* | To view a transaction. |
| Update | PATCH */transactions/{transactionReference}* | To update the transactionStatus of a transaction. |

### Transaction UML Class Diagram

![Transaction UML Class Diagram](https://lh6.googleusercontent.com/bZKQIVfkWs1AgfS088A5AgTW5FlDR7gQHnX8-iJM6TlLU5KL7jir3JVeAFkwcE61AOZ0Yzo4DFuTPd_GDTCmBN4iIByLNgzLbEICbGYWDA8KkVVNNuzF2JNX3639fp5GbxKfzn_pwfGD1rgCGg)

### Transaction Object Definition

Transaction Object

| Name | Type | Description |  | Reference | Validation |
|:-----|:-----|:------------|:--|:----------|:-----------|
| amount | string | The transaction amount. | M <br> M |  | Please refer to API Fundamentals document for amount validation rules. |
| currency | string | Currency of the transaction amount. | M <br> M |  | Enumeration = [ISO Currency Codes](/use-cases/p-2-p-transfers/enumerations.html) |
| type | string | The harmonised Transaction Type (not required if passed in the URL) | M <br> M |  | Enumeration = [Transaction Types](/use-cases/p-2-p-transfers/enumerations.html#transaction-types) |
| subType | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | O <br> O |  |  |
| transactionStatus | string | Indicates the status of the transaction as stored by the API provider. | NA <br> 🡨M |  |  |
| descriptionText | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | 🡪O <br> 🡪O |  |  |
| requestDate | date-time | The creation date and time of the transaction as supplied by the client. | 🡪O <br> 🡪O |  |  |
| creationDate | date-time | Date and time when the transaction was created by the API Provider | 🡪NA <br> 🡨O |  |  |
| modificationDate | date-time | Date and time when the transaction was modified by the API Provider | 🡪NA <br> 🡨O |  |  |
| transactionReference | string | Unique reference for the transaction. This is returned in the response by API provider. | 🡪NA <br> 🡨M |  |  |
| transactionReceipt | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | 🡪NA <br> 🡨O |  |  |
| requestingOrganisationTransactionReference | string | A reference provided by the requesting organisation that is to be associated with the transaction. | 🡪O <br> 🡪O |  |  |
| oneTimeCode | string | A one-time code that can be supplied in the request or can be generated in the response depending upon the use case. An authorisation code can be supplied in this field for requests that have been pre-authorised. | 🡪O <br> 🡪O |  |  |
| geoCode | string | Indicates the geographic location from where the transaction was initiated. | 🡪O <br> 🡪O |  |  |
| debitParty | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | 🡪C <br> 🡪C | [Account Identifiers](/use-cases/p-2-p-transfers/enumerations.html#account-identifiers) | debitParty must be supplied if creditParty is omitted. <br> If creditParty is supplied, then debitParty is optional. |
| creditParty | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | 🡪C <br> 🡪C | [Account Identifiers](/use-cases/p-2-p-transfers/enumerations.html#account-identifiers) | creditParty must be supplied if debitParty is omitted. If debitParty is supplied, then creditParty is optional. |
| senderKyc | object | A collection of fields detailing the KYC of the transaction Sender. | 🡪O <br> 🡪O | [KYC](/use-cases/p-2-p-transfers/supporting-objects.html#kyc-information-object) |  |
| recipientKyc | object | A collection of fields detailed the KYC of the transaction Recipient. | 🡪O <br> 🡪O | [KYC](/use-cases/p-2-p-transfers/supporting-objects.html#kyc-information-object) |  |
| originalTransactionReference | string | This field indicates the transaction which is the subject of the reversal. | 🡪O <br> 🡪O |  |  |
| servicingIdentity | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | 🡪O <br> 🡪O  |  |  |
| fees | array | Allows the passing and/or returning of all fees pertaining to the transaction. | 🡪O <br> 🡪O | [Fees Object](/use-cases/p-2-p-transfers/supporting-objects.html#custom-data-object) |  |
| metadata | array | A collection of key/value pairs. These can be used to populate additional transaction fields. | 🡪O <br> 🡪O | [Metadata](/use-cases/p-2-p-transfers/supporting-objects.html#metadata-object) |  |

## Reversals API

The Reversals API is used to reverse a P2P transfer. The originating transaction reference must be provided in the path to identify the payment to be reversed. For a partial reversal, the amount needs to be supplied. 

For viewing reversals, the [Transactions API](#transactions-api) should be used. For performing a reversal without the original transaction reference, use the [Transactions API](#transactions-api). 

### Reversal UML Class Diagram

![Reversal UML Class Diagram](https://lh3.googleusercontent.com/NI675xQbRGMNuwxppQabSV5vhstf_FKwwKs5bNlUVfOcm1x9h4lydPUEn5yRMbSp8Cr1vRVo-7tGEBXcv-qKo-v4YhYPOScrElqYPmLCLPMKu-36t5nu4bApTjvUVOFk68bjxd3BhEe1OYvtQg)

### Reversal Object Definition

TBC end here

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




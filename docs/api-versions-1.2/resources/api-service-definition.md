---
sidebarDepth: 2
pageClass: api-page
---

# API Endpoints

API endpoint fields are described in this specification as follows:

- The field **name**.
- The field **type**.
- **Description** of the field.
- **Optionality** of the field, i.e. whether the field must be supplied. Optionality is identified as per follows:

🡪    Request optionality

🡨    Response optionality

O    Field is optional

M    Field is mandatory

C    Field is conditional

NA    Field does not need to be supplied. If supplied, it will be ignored.

- **Reference** where the fields is an array and/or is defined by another object.
- **Validation** applied to the field, including enumeration, field length and use of regular expressions to validate format.

Please note that string fields have a default maximum length of 256 characters unless specified otherwise.

## Transactions API

The Transactions APIs are used to support mobile money financial transaction use cases. Transactions are used for a wide range of use cases including merchant payments, international transfers, domestic transfers, and agent cash-in/cash-out.

The following paths are permitted:

| Operation     | Path          | Description  |
| ------------- |:-------------|------|
| POST          | POST <br> */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL. |
| View          | GET <br>  */transactions/{transactionReference}* |   To view a transaction. |
| Update | PATCH */transactions/{transactionReference}*  | To update the transactionStatus of a transaction.|

### Transaction UML Class Diagram

![Transaction UML Class Diagram](/images/transaction_uml_class_diagram.png)

**Figure 2-1 Transaction UML Class Diagram**

**Transaction Object**

|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
|:--------|:--------|:-------------|:--------|:---------|:------|
| transactionReference | string | Unique reference for the transaction. This is returned in the response by API provider. | 🡪NA <br> 🡨M |  |  |
| requesting <br> Organisation TransactionReference | string | A reference provided by the requesting organisation that is to be associated with the transaction. | 🡪O <br> 🡨O |  |  |
| originalTransactionReference | string | For reversals and refunds, this field indicates the transaction which is the subject of the reversal. | 🡪NA <br> 🡨M | [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#) |  |
| creditParty | array | 	
A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | 🡪O <br> 🡨O |  |  |
| debitParty  | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | 🡪O <br> 🡨O |  | [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) |
| type | string | The harmonised Transaction Type. | 🡪M <br> 🡨M |  | Enumeration = [Transaction Types](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects12) <br> Note that only Reversals and Refunds (adjustments) are supported. |
| subType | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | 🡪O <br> 🡨O |  |  |
| transactionStatus | string | Indicates the status of the transaction as stored by the API provider.  | 🡪NA <br> 🡨M |  |  |
| amount | string | The transaction amount. | 🡪O <br> 🡨O |  | Please refer to API Fundamentals document for amount validation rules. |
| currency | string | Currency of the transaction amount. | 🡪O <br> 🡨O |  | Enumeration = [ISO Currency Codes](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#Enumerations1).|
| descriptionText | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | 🡪O <br> 🡨O |  |  |
| fees | array | Allows the passing and/or returning of all fees pertaining to the transaction. | 🡪O <br> 🡨O | [Fees Object](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects14) |  |
| geoCode | string | Indicates the geographic location from where the transaction was initiated. | 🡪O <br> 🡨O |  |  |
| requestingOrganisation | object | The originating organisation of the request. | 🡪O <br> 🡨O | [Requesting Organisation](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects16) |  |
| servicingIdentity | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | 🡪O <br> 🡨O |  |  |
| transactionReceipt | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | 🡪NA <br> 🡨O |  |  |
| creationDate | date-time | Date and time when the transaction was created by the API Provider. | 🡪NA <br> 🡨O |  |  |
| modificationDate | date-time | Date and time when the transaction was modified by the API Provider. | 🡪NA <br> 🡨O |  |  |
| requestDate | date-time | The date and time of the transaction request as supplied by the client | 🡪O <br> 🡨O  |  |  |
| customData | string | A collection of key/value pairs that can be used for provider specific fields. | 🡪O <br> 🡨O | [Custom Data Object](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects10) |  |
| metadata | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the transaction. | 🡪O <br> 🡨O | [Metadata](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects9) |  |

## Batch Transactions

The Mobile Money API allows clients to submit, approve and view batches of transactions. The following steps describe an end to end flow for processing batch transactions. Two types of processing modes are supported:

- One shot processing without an approver.
- Maker/checker approval, i.e. transactions are not completed until approved via a second API request.

The individual APIs that are referenced in the steps below are fully documented in subsequent sub-sections.

### Batch Transactions Workflow

### One-Shot Batch Processing

##### Creating a Batch

1. Client submits the batch for processing via POST /batchtransactions.

2. The client will return the requestState object indicating whether a callback will be provided or polling is required.

3. The API provider will parse the batch in order to determine whether the transactions are capable of being processed.

4. Once parsing has completed, the API provider will set the batch status in the batchTransactions object to ‘**completed**’.

##### Verifying a Batch

&nbsp;

5. The client will be able to retrieve the batch transaction object by invoking *GET /batchtransactions*  using the object reference provided by the *requestState* object. Alternatively, if Callback is specified, the client will receive the representation of the batchTransactions object to their nominated URL set in the *X-Callback-URL* header.

If errors are indicated, i.e. some of the transactions failed parsing, the client is able to retrieve the errors via *GET /batchtransactions/rejections*. Successfully completed transactions can be viewed via *GET /batchtransactions/completions*.

### Batch Processing with Maker/Checker

TBC

### Batch Transactions API

TBC

## Batch Transaction Object UML Diagram

TBC

### Batch Transaction Object Definition

TBC

### Batch Transaction Object Definition

TBC

## Batch Rejections API

TBC

### Batch Rejection UML Class Diagram

TBC

### Batch Rejection Object Definition

TBC

## Batch Completions API

TBC

### Batch Completion UML Class Diagram

TBC

### Batch Completion Object Definition

TBC

## Accounts APIs

TBC

### Identifying a Target Account

TBC

#### Single Identifier Method Multiple Identifiers Method

TBC

### Account Creation

TBC

### Account Retrieval

TBC

### Account Update

TBC

#### Account-Level Updates Identity-Level Updates

TBC

### Account UML Diagram

TBC

### Account Object Definition

TBC

### Retrieving Transactions for an Account

TBC

#### Account Transaction UML Class Diagram

TBC

### Accounts Status API

TBC 

#### Account Status UML Class Diagram

TBC

#### Account Status Object Definition

TBC

### Account Balances API

TBC

#### Account Balance UML Class Diagram

TBC

### Account Holder Name API

TBC

#### Account Holder Name UML Class Diagram

TBC

#### Account Holder Name Object Definition

TBC

### Account Statement Entries API

TBC

#### Account Statement Entry UML Class Diagram

TBC

#### Account Statement Entry Object Definition

TBC


## Bills API

TBC

### Bill UML Class Diagram

TBC

### Bill Object Definition

TBC 

## Bill Payments API

TBC

### Bill Payment UML Class Diagram

TBC 

### Bill Payment Object Definition

TBC

## Bill Companies API

TBC

### Bill Company UML Class Diagram

TBC

### Bill Company Object Definition

TBC

## Debit Mandates API

TBC

### Debit Mandate UML Class Diagram

TBC

### Debit Mandate Object Definition

## Links API

TBC

### Link UML Class Diagram

TBC

### Link Object Definition

TBC

## Authorisation Codes API

TBC

### Authorisation Code UML Class Diagram

TBC

### Authorisation Code Object Definition

TBC

## Quotations API

TBC

### Quotation UML Class Diagram

TBC

### Quotation Object Definition

TBC

## Supporting Objects

TBC 

## Enumerations

TBC

---
sidebarDepth: 2
pageClass: api-page
---

# API Service Definition

## API Endpoints

API endpoint fields are described in this specification as follows:

- The field **name**.
- The field **type**.
- **Description** of the field.
- **Optionality** of the field, i.e. whether the field must be supplied. Optionality is identified as per follows:

&#8594;     Request optionality

&#8592;     Response optionality

O    Field is optional

M    Field is mandatory

C    Field is conditional

NA    Field does not need to be supplied. If supplied, it will be ignored.
<br><br>

- **Reference** where the fields is an array and/or is defined by another object.
- **Validation** applied to the field, including enumeration, field length and use of regular expressions to validate format.

Please note that string fields have a default maximum length of 256 characters unless specified otherwise.

### Transactions API

The Transactions APIs are used to support mobile money financial transaction use cases. Transactions are used for a wide range of use cases including merchant payments, international transfers, domestic transfers, and agent cash-in/cash-out.

The following paths are permitted:

| Operation     | Path          | Description  |
| ------------- |:-------------|------|
| POST          | POST <br> */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL. |
| View          | GET <br>  */transactions/{transactionReference}* |   To view a transaction. |
| Update | PATCH */transactions/{transactionReference}*  | To update the transactionStatus of a transaction.|

#### Transaction UML Class Diagram

![Transaction UML Class Diagram](/images/transaction_uml_class_diagram.png)

**Figure 2-1 Transaction UML Class Diagram**

#### Transaction Object Definition

**Transaction Object**

|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
|:--------|:--------|:-------------|:--------|:---------|:------|
| transactionReference | string | Unique reference for the transaction. This is returned in the response by API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| requestingOrganisationTransactionReference | string | A reference provided by the requesting organisation that is to be associated with the transaction. | &#8594; O <br> &#8592; O |  |  |
| originalTransactionReference | string | For reversals and refunds, this field indicates the transaction which is the subject of the reversal. | &#8594; O <br> &#8592; O |  |  |
| creditParty | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594; C <br> &#8592; C | [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) | creditParty must be supplied if debitParty is omitted. If debitParty is supplied, then creditParty is optional. |
| debitParty  | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594; C <br> &#8592; C |  [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) | debitParty must be supplied if creditParty is omitted. If creditParty is supplied, then debitParty is optional. |
| type | string | The harmonised Transaction Type (not required if passed in the URL). | &#8594; M <br> &#8592; M |  | Enumeration = [Transaction Types](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects12) <br> Note that only Reversals and Refunds (adjustments) are supported. |
| subType | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | &#8594; O <br> &#8592; O |  |  |
| transactionStatus | string | Indicates the status of the transaction as stored by the API provider. | &#8594; NA <br> &#8592; M |  |  |
| amount | string | The transaction amount. | &#8594; M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| currency | string | Currency of the transaction amount. | &#8594; M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#Enumerations1).|
| descriptionText | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | &#8594; O <br> &#8592; O |  |  |
| fees | array | Allows the passing and/or returning of all fees pertaining to the transaction. | &#8594; O <br> &#8592; O | [Fees Object](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects14) |  |
| geoCode | string | Indicates the geographic location from where the transaction was initiated. | &#8594; O <br> &#8592; O |  |  |
| internationalTransferInformation | object | A collection of fields detailing information specifically used for international transfers. | &#8594; O <br> &#8592; O | [International Transfer Information](/api-versions-1.2/resources/api-service-definition#supporting-objects)  |  |
| oneTimeCode | string | A one-time code that can be supplied in the request or can be generated in the response depending upon the use case. An [authorisation code](/api-versions-1.2/resources/api-service-definition#api-endpoints-13) can be supplied in this field for requests that have been pre-authorised. | &#8594; O <br> &#8592; O |  |  |
| recipientKyc | object | A collection of fields detailing the KYC of the transaction recipient. | &#8594; O <br> &#8592; O | [KYC Information](/api-versions-1.2/resources/api-service-definition#supporting-objects-2) |  |
| senderKyc | object | A collection of fields detailing the KYC of the transaction sender. | &#8594; O <br> &#8592; O | [KYC Information](/api-versions-1.2/resources/api-service-definition#supporting-objects-2) |  |
| requestingOrganisation | object | The originating organisation of the request. | &#8594; O <br> &#8592; O | [Requesting Organisation](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects16) |  |
| servicingIdentity | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | &#8594; O <br> &#8592; O |  |  |
| transactionReceipt | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | &#8594; NA <br> &#8592; O |  |  |
| creationDate | date-time | Date and time when the transaction was created by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| modificationDate | date-time | Date and time when the transaction was modified by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| requestDate | date-time | The date and time of the transaction request as supplied by the client | &#8594; O <br> &#8592; O  |  |  |
| customData | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects10) |  |
| metadata | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the transaction. | &#8594; O <br> &#8592; O | [Metadata](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects9) |  |

### Reversals API

The Reversals API is used to reverse, adjust or refund a financial transaction. The originating transaction reference must be provided in the path in order to identify the transaction to be reversed. For a partial reversal, the amount needs to be supplied. It should be noted that some API providers do not support partial reversals and will return an error if a partial amount is supplied. 

For viewing and updating reversals, the [Transactions API](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition) should be used. 

The supported path is *POST /transactions/{originalTransactionReference}/reversals*.

#### Reversal UML Class Diagram

![Reversal UML Class Diagram](/images/Reversal-UML-Class-Diagram.png)

**Figure 2-1 Transaction UML Class Diagram**

#### Reversal Object Definition

**Reversal Object**

|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
|:--------|:--------|:-------------|:--------|:---------|:------|
| transactionReference | string | Unique reference for the transaction. This is returned in the response by API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| requestingOrganisationTransactionReference | string | A reference provided by the requesting organisation that is to be associated with the transaction. | &#8594; O <br> &#8592; O |  |  |
| originalTransactionReference | string | For reversals and refunds, this field indicates the transaction which is the subject of the reversal. | &#8594; NA <br> &#8592; M |  |  |
| creditParty | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594; O <br> &#8592; O | [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) |  |
| debitParty  | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594; O <br> &#8592; O | [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) |  |
| type | string | The harmonised Transaction Type. | &#8594; M <br> &#8592; M |  | Enumeration = [Transaction Types](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects12) <br> Note that only Reversals and Refunds (adjustments) are supported. |
| subType | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | &#8594; O <br> &#8592; O |  |  |
| transactionStatus | string | Indicates the status of the transaction as stored by the API provider.  | &#8594; NA <br> &#8592; M |  |  |
| amount | string | The transaction amount. | &#8594; O <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| currency | string | Currency of the transaction amount. | &#8594; O <br> &#8592; O |  | Enumeration = [ISO Currency Codes](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#Enumerations1).|
| descriptionText | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | &#8594; O <br> &#8592; O |  |  |
| fees | array | Allows the passing and/or returning of all fees pertaining to the transaction. | &#8594; O <br> &#8592; O | [Fees Object](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects14) |  |
| geoCode | string | Indicates the geographic location from where the transaction was initiated. | &#8594; O <br> &#8592; O |  |  |
| requestingOrganisation | object | The originating organisation of the request. | &#8594; O <br> &#8592; O | [Requesting Organisation](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects16) |  |
| servicingIdentity | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | &#8594; O <br> &#8592; O |  |  |
| transactionReceipt | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | &#8594; NA <br> &#8592; O |  |  |
| creationDate | date-time | Date and time when the transaction was created by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| modificationDate | date-time | Date and time when the transaction was modified by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| requestDate | date-time | The date and time of the transaction request as supplied by the client | &#8594; O <br> &#8592; O  |  |  |
| customData | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects10) |  |
| metadata | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the transaction. | &#8594; O <br> &#8592; O | [Metadata](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects9) |  |

### Batch Transactions

The Mobile Money API allows clients to submit, approve and view batches of transactions. The following steps describe an end to end flow for processing batch transactions. Two types of processing modes are supported:

- One shot processing without an approver.
- Maker/checker approval, i.e. transactions are not completed until approved via a second API request.

The individual APIs that are referenced in the steps below are fully documented in subsequent sub-sections.

#### Batch Transactions Workflow

##### One-Shot Batch Processing

**Creating a Batch**

1. Client submits the batch for processing via *POST /batchtransactions*.

2. The client will return the requestState object indicating whether a callback will be provided or polling is required.

3. The API provider will parse the batch in order to determine whether the transactions are capable of being processed.

4. Once parsing has completed, the API provider will set the batch status in the *batchTransactions* object to ‘**completed**’.

**Verifying a Batch**

&nbsp;

5. The client will be able to retrieve the batch transaction object by invoking *GET /batchtransactions*  using the object reference provided by the *requestState* object. Alternatively, if Callback is specified, the client will receive the representation of the batchTransactions object to their nominated URL set in the *X-Callback-URL* header.

If errors are indicated, i.e. some of the transactions failed parsing, the client is able to retrieve the errors via *GET /batchtransactions/rejections*. Successfully completed transactions can be viewed via *GET /batchtransactions/completions*.

##### Batch Processing with Maker/Checker

**Creating a Batch**

1. Client submits the batch for processing via *POST /batchtransactions*.

2. The client will return the *requestState* object indicating whether a callback will be provided or polling is required.

3. The API provider will parse the batch in order to determine whether the transactions are capable of being processed.

4. Once parsing has completed, the API provider will set the batch status in the *batchTransactions* object to ‘**created**’.

**Verifying a Batch**

5. The client will be able to retrieve the batch transaction object by invoking *GET /batchtransactions*  using the object reference provided by the *requestState* object. Alternatively, if Callback is specified, the client will receive the representation of the *batchTransactions* object to their nominated URL set in the *X-Callback-URL* header.
   
6. If errors are indicated, i.e. some of the transactions failed parsing, the client is able to retrieve the errors via *GET /batchtransactions/rejections*.

**Approving a Batch**

7. A client can approve the batch for posting by issuing a *PATCH /batchtransactions* in order to update the status to ‘**approved**’. 

8. As per step 2, a *requestState* object will be returned indicating whether a callback will be provided or polling is required.

9. The API provider will then post the transactions in the batch considering any scheduling considerations.

10. Once posting is completed, the API provider will set the batch status in the *batchTransactions* object to ‘**completed**’.

11. The client will be able to retrieve the *batchTransactions* object by invoking *GET /batchtransactions* using the object reference provided by the *requestState* object. Alternatively, if Callback is specified, the client will receive the representation of the *batchTransactions* object to their nominated URL set in the *X-Callback-URL* header.

the client will also be able to retrieve a list of successful transaction completions */batchtransactions/completions and transaction failures /batchtransactions/rejections*.

### Batch Transactions API

This API enables clients to submit and approve a batch of transactions. The API allows transactions of multiple types to be included in a single batch. The following paths are permitted:

**- Submit** a batch: POST /batchtransactions

**- Approve** a batch: PATCH /bathtransactions/{batchID}. The Batch Status needs to be set to ‘approved’.

**- View details** regarding batch processing: GET /batchtransactions/{batchID}

Only asynchronous mode is supported for the POST and PATCH methods. For the GET method, only synchronous mode is supported.

There is a limit of 999,999 transaction records per batch.

#### Batch Transaction Object UML Diagram

![Batch Transaction Object UML Diagram](/images/Batch-Transaction-Object-UML-Diagram.png)

**Figure 2-3 Batch Transaction UML Class Diagram**

#### Batch Transaction Object Definition

**Batch Transaction Object**

|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
|:--------|:--------|:-------------|:--------|:---------|:------|
| batchID | string | Identifier for the Batch that is assigned by the API provider. This ID is used by the client on subsequent GET or PATCH methods. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| batchStatus | string | Indicates the status of the batch. | &#8594; O <br> &#8592; M |  | Enumeration = created, approved, completed |
| Transactions | array | Collection of Transactions that are to be processed. Note that the representation of each completed transaction can be retrieved via the ‘/completions API. | &#8594; M <br> &#8592; NA | [Transactions](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) |  |
| approvalDate | date-time | Indicates when the batch was approved as recorded by the API provider. | &#8594; NA <br> &#8592; M |  |  |
| completionDate  | date-time | Indicates when the batch was completed as recorded by the API provider. | &#8594; NA <br> &#8592; M |  |  |
| batchTitle | string | Client-provided title for the batch. | &#8594; O <br> &#8592; O |  |  |
| batchDescription | string | Client-provided description of the batch. | &#8594; O <br> &#8592; O |  |  |
| processingFlag | boolean | Indicates whether the batch is currently undergoing processing by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| completedCount | integer | Indicates the number of records that have been successfully completed. | &#8594; NA <br> &#8592; O |  |  |
| parsingSuccessCount | integer | Indicates the number of records that have been parsed successfully. | &#8594; NA <br> &#8592; O |  | |
| rejectionCount | integer | Indicates the number of records that have been rejected, either during parsing or during final processing. | &#8594; NA <br> &#8592; O |  |  |
| requestingOrganisation | object | The originating organisation of the request. | &#8594; O <br> &#8592; O | [Requesting Organisation](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects16) |  |
| scheduledStartDate | date-time | If the batch has been scheduled, the expected start time is provided here. | &#8594; O <br> &#8592; O |  |  |
| creationDate | date-time | Indicates when the batch was created as recorded by the API provider. | &#8594; NA <br> &#8592; O |  |  |
| modificationDate | date-time | Indicates when the batch was modified as recorded by the API provider. | &#8594; NA <br> &#8592; O |  |  |
| requestDate | date-time | The date and time of the batch request as supplied by the client. | &#8594; O <br> &#8592; O  |  |  |
| customData | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects10) |  |

### Batch Rejections API

This API enables clients to retrieve information on all transactions that have either failed parsing or have failed to complete. Only the GET method is supported. The path is batchtransactions/{batchID}/rejections.

To filter the number of records returned, the following query strings can be used:

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| limit | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| offset | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| fromDateTime | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| toDateTime | string | date-time | Indicates the maximum creationDate for which records should be returned. |

Note:    HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count).

#### Batch Rejection UML Class Diagram

![Batch Rejection UML Class Diagram](/images/Batch-Rejection-UML-Class-Diagram.png)

**Figure 2-4 Batch Rejection UML Class Diagram**

#### Batch Rejection Object Definition

**Batch Rejection Object**

|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
|:--------|:--------|:-------------|:--------|:---------|:------|
| transactionReference | string | Transaction Reference as assigned by the API provider. | &#8594;&nbsp;N/A <br> &#8592; O |  |  |
| requestingOrganisationTransactionReference | string | A reference provided by the requesting organisation that is to be associated with the transactions. | &#8594; N/A <br> &#8592; O |  |  |
| creditParty | array | The credit party identifiers for the transaction as specific in the batch request. | &#8594; N/A <br> &#8592; M | [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) |  |
| debitParty | array | The debit party identifiers for the transaction as specific in the batch request. | &#8594; N/A <br> &#8592; M | [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) |  |
| rejectionReason  | string | The reason for the transaction request as indicated by the API provider. | &#8594; N/A <br> &#8592; M |  |  |
| rejectionDate | date-time | Date and time of the rejection. | &#8594; N/A <br> &#8592; M |  |  |
| customData | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects10) |  |

### Batch Completions API

This API lists all transactions that have successfully completed for a given batch. Only the GET method is supported. The path format is *batchtransactions/{batchID}/completions*.

To filter the number of records returned, the following query strings can be used:

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| limit | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| offset | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| fromDateTime | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| toDateTime | string | date-time | Indicates the maximum creationDate for which records should be returned. |

Note:    HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count)

#### Batch Completion UML Class Diagram

![Batch Completion UML Class Diagram](/images/Batch-Completion-UML-Class-Diagram.png)

**Figure 2-5 Batch Completion UML Class Diagram**

#### Batch Completion Object Definition

**Batch Completion Object**

|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
|:--------|:--------|:-------------|:--------|:---------|:------|
| transactionReference | string | Transaction Reference as assigned by the API provider. | &#8594;&nbsp;N/A <br> &#8592; M |  |  |
| requestingOrganisationTransactionReference | string | A reference provided by the requesting organisation that is to be associated with the transactions. | &#8594; N/A <br> &#8592; O |  |  |
| creditParty | array | The credit party identifiers for the transaction as specific in the batch request. | &#8594; N/A <br> &#8592; M | [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) |  |
| debitParty | array | The debit party identifiers for the transaction as specific in the batch request. | &#8594; N/A <br> &#8592; M | [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) |  |
| completionDate  | date-time | Date and time indicating when the transaction was completed. | &#8594; N/A <br> &#8592; M |  |  |
| link | string | Provides a URL to the transaction resource. | &#8594; N/A <br> &#8592; M |  |  |
| customData | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects10) |  |

### Accounts APIs

The Accounts APIs are used to support a range of account-related operations. Types of accounts include mobile wallets, bank accounts, savings accounts, and loan accounts.

#### Identifying a Target Account

Two methods are provided for identifying an account, the single identifier method, and the multiple identifiers method.

##### Single Identifier Method

In the scenario where one identifier suffices to uniquely identify an account, the following path is to be used: */accounts/{identifierType}/{identifier}*.

##### Multiple Identifiers Method

Where a single identifier is not sufficient to identify an account, the following path is to be used: */accounts/{accountIdentifier1}@{value1}${accountIdentifier2}@{value2}${accountIdentifier3}@{value3}*. 

The path uses a ‘$’ delimiter to separate each identifier, up to a limit of three account identifiers. Each key/value is delimited by ‘@’.

The list of permitted account identifiers supported by the Mobile Money API can be found in the [Account Identifiers](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) section.

#### Account Creation

The Mobile Money API allows account creation for customers who are classified as individuals. The creation of a customer account can be triggered by various means including:

**-** Account creation via a mobile money agent.

**-** Automatic account creation upon SIM registration.

**-** App-based self-registration.

Regardless of the method of creation, new customers are generally provided with account and transaction limits based upon the level of KYC information they have provided and whether their KYC information has been physically verified.

To create an account, use *POST /accounts/{identityType}*, supplying *‘individual’* as the *identityType*.

#### Account Retrieval

Account details, including associated account identities can be retrieved via the following paths:

*GET /accounts/{accountIdentifierType}/{identifier}* OR

*GET /accounts/{Account Identifiers}*

#### Account Update

##### Account-Level Updates

To update information held against an account, use one of the following paths:

*PATCH /accounts/{accountIdentifierType}/{identifier}* OR

*PATCH /accounts/{Account Identifiers}*
<br>
<br>

The following account fields can be updated:

|**Field**|**PATCH Body**|**Description**|
|:--------|:--------|:-------------|
| accountStatus | *"op": "replace", "path": "/accountStatus", "value": “string”* | Use to modify the status of an account. |
| accountSubStatus |  *"op": "replace", "path": "/accountSubStatus", "value": “string”* | Use to modify the sub-status of an account. |

For more information on the above fields please refer to the [Account](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects6) object.

##### Identity-Level Updates

To update an information held against an identity associated with an account, use one of the following paths:

*PATCH /accounts/{identifierType}/{identifier}/identities/{identityId}* OR

*PATCH /accounts/{Account Identifiers}/identities/{identityId}*
<br>
<br>

The following identity fields can be updated:

|**Field**|**PATCH Body**|**Description**|
|:--------|:--------|:-------------|
| identity.identityStatus | *"op": "replace", "path": "/identityStatus", "value": “string”* | Use to modify the status of an identity associated with an account. |
| identity.kycVerificationStatus |  *"op": "replace", "path": "/kycVerificationStatus", "value": “string”* | Use to change the KYC verification status of an identity associated with an account. |
| identity.kycVerificationEntity |  *"op": "replace", "path": "/kycVerificationEntity", "value": “string”* | Use to indicate the entity (e.g. mobile money agent) that performed the verification. |
| identity.kycLevel |  *"op": "replace", "path": "/kycLevel", "value": “integer”* | UUse to modify the KYC level of an identity associated with an account. |

For more information on the above fields please refer to the [Identity Object](https://developer.mobilemoneyapi.io/1.2/content/api-service-definition#SupportingObjects10).

#### Account UML Diagram

![Account UML Diagram](/images/Account-UML-Diagram.png)

**Figure 2-6 Account Creation UML Class Diagram**

#### Account Object Definition

TBC

#### Retrieving Transactions for an Account

TBC

##### Account Transaction UML Class Diagram

TBC

#### Accounts Status API

TBC 

##### Account Status UML Class Diagram

TBC

##### Account Status Object Definition

TBC

#### Account Balances API

TBC

##### Account Balance UML Class Diagram

TBC

#### Account Holder Name API

TBC

##### Account Holder Name UML Class Diagram

TBC

##### Account Holder Name Object Definition

TBC

#### Account Statement Entries API

TBC

##### Account Statement Entry UML Class Diagram

TBC

##### Account Statement Entry Object Definition

TBC


### Bills API

TBC

#### Bill UML Class Diagram

TBC

#### Bill Object Definition

TBC 

### Bill Payments API

TBC

#### Bill Payment UML Class Diagram

TBC 

#### Bill Payment Object Definition

TBC

### Bill Companies API

TBC

#### Bill Company UML Class Diagram

TBC

#### Bill Company Object Definition

TBC

### Debit Mandates API

TBC

#### Debit Mandate UML Class Diagram

TBC

#### Debit Mandate Object Definition

### Links API

TBC

#### Link UML Class Diagram

TBC

#### Link Object Definition

TBC

### Authorisation Codes API

TBC

#### Authorisation Code UML Class Diagram

TBC

#### Authorisation Code Object Definition

TBC

### Quotations API

TBC

#### Quotation UML Class Diagram

TBC

#### Quotation Object Definition

TBC

### Supporting Objects

TBC 

### Enumerations

TBC

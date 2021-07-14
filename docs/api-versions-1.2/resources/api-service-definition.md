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

&#8594;&nbsp; Request optionality

&#8592;&nbsp; Response optionality

O&nbsp; Field is optional

M&nbsp; Field is mandatory

C&nbsp; Field is conditional

NA&nbsp; Field does not need to be supplied. If supplied, it will be ignored.
<br>

- **Reference** where the fields is an array and/or is defined by another object.
- **Validation** applied to the field, including enumeration, field length and use of regular expressions to validate format.

::: tip
Please note that string fields have a default maximum length of 256 characters unless specified otherwise.
:::

### Transactions API

The Transactions APIs are used to support mobile money financial transaction use cases. Transactions are used for a wide range of use cases including merchant payments, international transfers, domestic transfers, and agent cash-in/cash-out.

The following paths are permitted:

| **Operation**     | **Path**         | **Description**  |
| ------------- |:-------------|------|
| POST          | POST <br> */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL. |
| View          | GET <br>  */transactions/{transactionReference}* |   To view a transaction. |
| Update | PATCH */transactions/{transactionReference}*  | To update the transactionStatus of a transaction.|

#### Transaction UML Class Diagram

<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Transaction
    Debit Party Identifier "1..10" --* "1" Transaction
    Fee "0..20" --* "1" Transaction
    Transaction "1" *-- "0..20" Metadata
    Transaction "1" *-- "0..2" KYC Information
    Transaction "1" *-- "0..1" International Transfer Information
    KYC Information "1" *-- "0..10" ID Document
    KYC Information "1" *-- "0..1" Address
    KYC Information "1" *-- "0..1" Name
</mermaid>

**Figure 2-1 Transaction UML Class Diagram**

#### Transaction Object Definition

| **Transaction Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **transactionReference** | string | Unique reference for the transaction. This is returned in the response by API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **requestingOrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transaction. | &#8594; O <br> &#8592; O |  |  |
| **originalTransactionReference** | string | For reversals and refunds, this field indicates the transaction which is the subject of the reversal. | &#8594; O <br> &#8592; O |  |  |
| **creditParty** | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594; C <br> &#8592; C | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) | creditParty must be supplied if debitParty is omitted. If debitParty is supplied, then creditParty is optional. |
| **debitParty**  | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594; C <br> &#8592; C |  [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) | debitParty must be supplied if creditParty is omitted. If creditParty is supplied, then debitParty is optional. |
| **type** | string | The harmonised Transaction Type (not required if passed in the URL). | &#8594; M <br> &#8592; M |  | Enumeration = [Transaction Types](/api-versions-1.2/resources/api-service-definition.html#transaction-type-object) <br> Note that only Reversals and Refunds (adjustments) are supported. |
| **subType** | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | &#8594; O <br> &#8592; O |  |  |
| **transactionStatus** | string | Indicates the status of the transaction as stored by the API provider. | &#8594; NA <br> &#8592; M |  |  |
| **amount** | string | The transaction amount. | &#8594; M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the transaction amount. | &#8594; M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes). |
| **descriptionText** | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | &#8594; O <br> &#8592; O |  |  |
| **fees** | array | Allows the passing and/or returning of all fees pertaining to the transaction. | &#8594; O <br> &#8592; O | [Fees Object](/api-versions-1.2/resources/api-service-definition.html#fees-object) |  |
| **geoCode** | string | Indicates the geographic location from where the transaction was initiated. | &#8594; O <br> &#8592; O |  |  |
| **internationalTransferInformation** | object | A collection of fields detailing information specifically used for international transfers. | &#8594; O <br> &#8592; O | [International Transfer Information](/api-versions-1.2/resources/api-service-definition.html#international-transfer-information-object)  |  |
| **oneTimeCode** | string | A one-time code that can be supplied in the request or can be generated in the response depending upon the use case. An [authorisation code](/api-versions-1.2/resources/api-service-definition.html#authorisation-codes-api) can be supplied in this field for requests that have been pre-authorised. | &#8594; O <br> &#8592; O |  |  |
| **recipientKyc** | object | A collection of fields detailing the KYC of the transaction recipient. | &#8594; O <br> &#8592; O | [KYC Information](/api-versions-1.2/resources/api-service-definition.html#kyc-information-object) |  |
| **senderKyc** | object | A collection of fields detailing the KYC of the transaction sender. | &#8594; O <br> &#8592; O | [KYC Information](/api-versions-1.2/resources/api-service-definition.html#kyc-information-object) |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594; O <br> &#8592; O | [Requesting Organisation](/api-versions-1.2/resources/api-service-definition.html#requesting-organisation-object) |  |
| **servicingIdentity** | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | &#8594; O <br> &#8592; O |  |  |
| **transactionReceipt** | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | &#8594; NA <br> &#8592; O |  |  |
| **creationDate** | date-time | Date and time when the transaction was created by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Date and time when the transaction was modified by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the transaction request as supplied by the client | &#8594; O <br> &#8592; O  |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the transaction. | &#8594; O <br> &#8592; O | [Metadata](/api-versions-1.2/resources/api-service-definition.html#metadata-object) |  |

### Reversals API

The Reversals API is used to reverse, adjust or refund a financial transaction. The originating transaction reference must be provided in the path in order to identify the transaction to be reversed. For a partial reversal, the amount needs to be supplied. It should be noted that some API providers do not support partial reversals and will return an error if a partial amount is supplied. 

For viewing and updating reversals, the [Transactions API](/api-versions-1.2/resources/api-service-definition.html) should be used. 

The supported path is *POST /transactions/{originalTransactionReference}/reversals*.

#### Reversal UML Class Diagram

<mermaid>
classDiagram
    Credit Party Identifier "0..10" --* "" Reversal
    Debit Party Identifier "0..10" --* "" Reversal
    Fee "0..20" --* "1" Reversal
    Metadata "0..20" --* "1" Reversal
    Reversal --> Transaction
</mermaid>

**Figure 2-2 Reversal UML Class Diagram**

#### Reversal Object Definition

| **Reversal Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **transactionReference** | string | Unique reference for the transaction. This is returned in the response by API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **requestingOrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transaction. | &#8594; O <br> &#8592; O |  |  |
| **originalTransactionReference** | string | For reversals and refunds, this field indicates the transaction which is the subject of the reversal. | &#8594; NA <br> &#8592; M |  |  |
| **creditParty** | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594; O <br> &#8592; O | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **debitParty**  | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594; O <br> &#8592; O | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **type** | string | The harmonised Transaction Type. | &#8594; M <br> &#8592; M |  | Enumeration = [Transaction Types](/api-versions-1.2/resources/api-service-definition.html#transaction-type-object) <br> Note that only Reversals and Refunds (adjustments) are supported. |
| **subType** | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | &#8594; O <br> &#8592; O |  |  |
| **transactionStatus** | string | Indicates the status of the transaction as stored by the API provider.  | &#8594; NA <br> &#8592; M |  |  |
| **amount** | string | The transaction amount. | &#8594; O <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the transaction amount. | &#8594; O <br> &#8592; O |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes).|
| **descriptionText** | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | &#8594; O <br> &#8592; O |  |  |
| **fees** | array | Allows the passing and/or returning of all fees pertaining to the transaction. | &#8594; O <br> &#8592; O | [Fees Object](/api-versions-1.2/resources/api-service-definition.html#fees-object) |  |
| **geoCode** | string | Indicates the geographic location from where the transaction was initiated. | &#8594; O <br> &#8592; O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594; O <br> &#8592; O | [Requesting Organisation](/api-versions-1.2/resources/api-service-definition.html#requesting-organisation-object) |  |
| **servicingIdentity** | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | &#8594; O <br> &#8592; O |  |  |
| **transactionReceipt** | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | &#8594; NA <br> &#8592; O |  |  |
| **creationDate** | date-time | Date and time when the transaction was created by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Date and time when the transaction was modified by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the transaction request as supplied by the client | &#8594; O <br> &#8592; O  |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the transaction. | &#8594; O <br> &#8592; O | [Metadata](/api-versions-1.2/resources/api-service-definition.html#metadata-object) |  |

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
<br><br>

Only asynchronous mode is supported for the POST and PATCH methods. For the GET method, only synchronous mode is supported.

There is a limit of 999,999 transaction records per batch.

#### Batch Transaction Object UML Diagram

<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Transaction
    Debit Party Identifier "1..10" --* "1" Transaction
    Fee "0..20" --* "1" Transaction
    Transaction "0.." --* "1" Batch Transaction
    Transaction "1" *-- "0..20" Metadata
    Transaction "1" *-- "0..1" International Transfer Information
    KYC Information "0..2" --* "1" Transaction
    KYC Information "1" *-- "0..10" ID Document
    KYC Information "1" *-- "0..1" Address
    KYC Information "1" *-- "0..1" Name
</mermaid>

**Figure 2-3 Batch Transaction UML Class Diagram**

#### Batch Transaction Object Definition

| **Batch Transaction Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **batchID** | string | Identifier for the Batch that is assigned by the API provider. This ID is used by the client on subsequent GET or PATCH methods. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **batchStatus** | string | Indicates the status of the batch. | &#8594; O <br> &#8592; M |  | Enumeration = created, approved, completed |
| **Transactions** | array | Collection of Transactions that are to be processed. Note that the representation of each completed transaction can be retrieved via the ‘/completions API. | &#8594; M <br> &#8592; NA | [Transactions](/api-versions-1.2/resources/api-service-definition.html#transactions-api) |  |
| **approvalDate** | date-time | Indicates when the batch was approved as recorded by the API provider. | &#8594; NA <br> &#8592; M |  |  |
| **completionDate**  | date-time | Indicates when the batch was completed as recorded by the API provider. | &#8594; NA <br> &#8592; M |  |  |
| **batchTitle** | string | Client-provided title for the batch. | &#8594; O <br> &#8592; O |  |  |
| **batchDescription** | string | Client-provided description of the batch. | &#8594; O <br> &#8592; O |  |  |
| **processingFlag** | boolean | Indicates whether the batch is currently undergoing processing by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| **completedCount** | integer | Indicates the number of records that have been successfully completed. | &#8594; NA <br> &#8592; O |  |  |
| **parsingSuccessCount** | integer | Indicates the number of records that have been parsed successfully. | &#8594; NA <br> &#8592; O |  | |
| **rejectionCount** | integer | Indicates the number of records that have been rejected, either during parsing or during final processing. | &#8594; NA <br> &#8592; O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594; O <br> &#8592; O | [Requesting Organisation](/api-versions-1.2/resources/api-service-definition.html#requesting-organisation-object) |  |
| **scheduledStartDate** | date-time | If the batch has been scheduled, the expected start time is provided here. | &#8594; O <br> &#8592; O |  |  |
| **creationDate** | date-time | Indicates when the batch was created as recorded by the API provider. | &#8594; NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the batch was modified as recorded by the API provider. | &#8594; NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the batch request as supplied by the client. | &#8594; O <br> &#8592; O  |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |

### Batch Rejections API

This API enables clients to retrieve information on all transactions that have either failed parsing or have failed to complete. Only the GET method is supported. The path is batchtransactions/{batchID}/rejections.

To filter the number of records returned, the following query strings can be used:

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| limit | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| offset | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| fromDateTime | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| toDateTime | string | date-time | Indicates the maximum creationDate for which records should be returned. |

::: tip
Note: HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count).
:::

#### Batch Rejection UML Class Diagram

<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Batch Rejection
    Debit Party Identifier "1..10" --* "1" Batch Rejection
    Batch Rejection "0..*" --* "1" Batch Transaction
</mermaid>

**Figure 2-4 Batch Rejection UML Class Diagram**

#### Batch Rejection Object Definition

| **Batch Rejection Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **transactionReference** | string | Transaction Reference as assigned by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestingOrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transactions. | &#8594; NA <br> &#8592; O |  |  |
| **creditParty** | array | The credit party identifiers for the transaction as specific in the batch request. | &#8594; NA <br> &#8592; M | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **debitParty** | array | The debit party identifiers for the transaction as specific in the batch request. | &#8594; NA <br> &#8592; M | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **rejectionReason**  | string | The reason for the transaction request as indicated by the API provider. | &#8594; NA <br> &#8592; M |  |  |
| **rejectionDate** | date-time | Date and time of the rejection. | &#8594; NA <br> &#8592; M |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |

### Batch Completions API

This API lists all transactions that have successfully completed for a given batch. Only the GET method is supported. The path format is *batchtransactions/{batchID}/completions*.

To filter the number of records returned, the following query strings can be used:

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| limit | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| offset | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| fromDateTime | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| toDateTime | string | date-time | Indicates the maximum creationDate for which records should be returned. |

::: tip
Note: HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count)
:::

#### Batch Completion UML Class Diagram

<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Batch Completion
    Debit Party Identifier "1..10" --* "1" Batch Completion
    Batch Completion "0..*" --* "1" Batch Transaction
</mermaid>

**Figure 2-5 Batch Completion UML Class Diagram**

#### Batch Completion Object Definition

| **Batch Completion Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **transactionReference** | string | Transaction Reference as assigned by the API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **requestingOrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transactions. | &#8594; NA <br> &#8592; O |  |  |
| **creditParty** | array | The credit party identifiers for the transaction as specific in the batch request. | &#8594; NA <br> &#8592; M | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **debitParty** | array | The debit party identifiers for the transaction as specific in the batch request. | &#8594; NA <br> &#8592; M | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **completionDate**  | date-time | Date and time indicating when the transaction was completed. | &#8594; NA <br> &#8592; M |  |  |
| **link** | string | Provides a URL to the transaction resource. | &#8594; NA <br> &#8592; M |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |

### Accounts APIs

The Accounts APIs are used to support a range of account-related operations. Types of accounts include mobile wallets, bank accounts, savings accounts, and loan accounts.

#### Identifying a Target Account

Two methods are provided for identifying an account, the single identifier method, and the multiple identifiers method.

##### Single Identifier Method

In the scenario where one identifier suffices to uniquely identify an account, the following path is to be used: */accounts/{identifierType}/{identifier}*.

##### Multiple Identifiers Method

Where a single identifier is not sufficient to identify an account, the following path is to be used: */accounts/{accountIdentifier1}@{value1}${accountIdentifier2}@{value2}${accountIdentifier3}@{value3}*. 

The path uses a ‘$’ delimiter to separate each identifier, up to a limit of three account identifiers. Each key/value is delimited by ‘@’.

The list of permitted account identifiers supported by the Mobile Money API can be found in the [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) section.

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

For more information on the above fields please refer to the [Account](/api-versions-1.2/resources/api-service-definition.html#account-object-definition) object.

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

For more information on the above fields please refer to the [Identity Object](/api-versions-1.2/resources/api-service-definition.html#identity-object).

#### Account UML Diagram

<mermaid>
classDiagram
    ID Document "0..10" --* "1" KYC Information
    Address "0..1" --* "1" KYC Information
    Name "0..1" --* "1" KYC Information
    KYC Information "1" --* "1" Identity
    Account Identifier "1..10" --* "1" Account
    Identity "1..20" --* "1" Account
    Fee "1..20" --* "1" Account
    Commission "1..20" --* "1" Account
</mermaid>

**Figure 2-6 Account Creation UML Class Diagram**

#### Account Object Definition

| **Account Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **accountIdentifiers** | array | A series of key/value pairs that enable the account to be identified. Identifiers are assigned by the API Provider during creation. | &#8594;&nbsp;O <br> &#8592; M | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **identity** | array | An account must be associated with one or more identities. | &#8594;&nbsp;M <br> &#8592; M | [Identity Object](/api-versions-1.2/resources/api-service-definition.html#identity-object) |  |
| **accountType** | string | A non-harmonised field that indicates the type of the account. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **accountStatus** | string | Indicates a simplified representation of the account status. This will be shown as ‘available’ or ‘unavailable’. A state of ‘unavailable’ means that the account is in a state that does not allow posting of transactions. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **accountSubStatus** | string | Field can be used to return a provider-specific status for the account. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **currentBalance** | string | The current outstanding balance on the account. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **availableBalance** | string | Indicates the balance that is able to be debited for an account. This balance is only provided on some API provider systems. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **reservedBalance** | string | Indicates the portion of the balance that is reserved, i.e. intended to be debited. This balance is only provided on some API provider systems. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **unClearedBalance** | string | Indicates the sum of uncleared funds in an account, i.e. those that are awaiting a credit confirmation. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the account. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |
| **fees** | string | Returns all fees related to the creation of the account. | &#8594;&nbsp;O <br> &#8592; O | [Fees Object](/api-versions-1.2/resources/api-service-definition.html#fees-object) |  |
| **commissionEarned** | string | Returns all commission earned by the registering entity for the creation of the account. | &#8594;&nbsp;NA <br> &#8592; O | [Commission Object](/api-versions-1.2/resources/api-service-definition.html#commission-object) |  |
| **registeringEntity** | string | The entity that registered the account, for example, a mobile money agent. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **creationDate** | date-time | Indicates when the account was created as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the account was modified as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the account request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |

#### Retrieving Transactions for an Account

It is possible to return a range of transactions for an account as per the following paths:

*GET /accounts/{identifierType}/{identifier}/transactions*

or *GET /accounts/{Account Identifiers}/transactions*. 

To filter the number of records returned, the following query strings can be used:

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| limit | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| offset | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| fromDateTime | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| toDateTime | string | date-time | Indicates the maximum creationDate for which records should be returned. |
| transactionStatus | string | N/A | Indicates the status of the transactions to be returned. |
| transactionType | string | N/A | Indicates the [type](/api-versions-1.2/resources/api-service-definition.html#transaction-type-object) of the transactions to be returned. |

::: tip
Note 1: For a harmonised behavior, API Providers should make sure that the transactions are returned in descending date created order. 

Note 2: HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count).
:::

##### Account Transaction UML Class Diagram

<mermaid>
classDiagram
    ID Document "0..10" --* "1" KYC Information
    Address "0..1" --* "1" KYC Information
    Name "0..1" --* "1" KYC Information
    Credit Party Identifier "1..10" --* "1" Transaction
    Debit Party Identifier "1..10" --* "1" Transaction
    Fee "0..20" --* "1" Transaction
    KYC Information "0..2" --* "1" Transaction
    Metadata "0..20" --* "1" Transaction
    International TransferInformation "0..1" --* "1" Transaction
    Transaction "0..*" --* "2" Account
</mermaid>

**Figure 2-7 Account Transaction UML Class Diagram**

#### Accounts Status API

The Accounts Status API returns a harmonised status of the account. The status enables the client to determine whether transactions can be subsequently posted against the account. Permitted paths are GET */accounts/{identifierType}/{identifier}/status’* or *GET /accounts/{Account Identifiers}/status*.

##### Account Status UML Class Diagram

<mermaid>
classDiagram
    Account Status "1" --* "1" Account
</mermaid>

**Figure 2-8 Account Status UML Class Diagram**

##### Account Status Object Definition

| **Account Status Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **accountStatus** | string | Indicates a simplified representation of the account status. This will be shown as ‘available’ or ‘unavailable’. A state of ‘unavailable’ means that the account is in a state that does not allow posting of transactions. Unregistered indicates that although not available, a transaction posted with the account identifier(s) will result in an unregistered voucher creation. | &#8594;&nbsp;NA <br> &#8592; M |  | Enumeration = available, unavailable, unregistered |
| **subStatus** | string | Field can be used to return a provider-specific status for the account. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **lei** | string | Indicates the Legal Entity Identifier of the organisation holding the account. | &#8594;&nbsp;NA <br> &#8592; O |  | Refer to LEI format as defined here: [https://www.leiroc.org/lei.htm](https://www.leiroc.org/lei.htm) |

#### Account Balances API

This API defines specific fields for returning balances associated with an account. Permitted paths are *GET /accounts/{identifierType}/{identifier}/balance* or *GET /accounts/{Account Identifiers}/balance*.

A ‘self’ version is also available where the calling API client is the account holder. Path for the ‘self’ version is */accounts/balance*.

##### Account Balance UML Class Diagram

<mermaid>
classDiagram
    Account Balance "1" --* "1" Account
</mermaid>

**Figure 2-9 Account Balance UML Class Diagram**

| **Balance Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **accountStatus** | string | Indicates a harmonises representation of the account state. This will be shown as ‘available’ or ‘unavailable’. A state of ‘unavailable’ means that the account is in a state that does not allow posting of transactions. Unregistered indicates that although not available, a transaction created with the account identifier(s) will result in an unregistered voucher creation. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = available, unavailable, unregistered |
| **currentBalance** | string | The current outstanding balance on the account. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **availableBalance** | string | Indicates the balance that is able to be debited for an account. This balance is only provided on some API provider systems. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **reservedBalance** | string | Indicates the portion of the balance that is reserved, i.e. intended to be debited. This balance is only provided on some API provider systems. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **unClearedBalance** | string | Indicates the sum of uncleared funds in an account, i.e. those that are awaiting a credit confirmation. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency for all returned balances. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |

#### Account Holder Name API

This API defines specific fields for returning account holder name information associated with an account. Permitted paths are *GET /accounts/{identifierType}/{identifier}/accountname* or *GET /accounts/{Account Identifiers}/accountname*.

##### Account Holder Name UML Class Diagram

<mermaid>
classDiagram
    Account Holder Name "1" --* "1" Account
</mermaid>

**Figure 2-10 Account Holder Name UML Class Diagram**

##### Account Holder Name Object Definition

| **Account Holder Name Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **name** | rReference | A collection of fields detailing the name of the Primary Account Holder. | &#8594;&nbsp;NA <br> &#8592; O | [Name](/api-versions-1.2/resources/api-service-definition.html#name-object) |  |
| **lei** | string | Indicates the Legal Entity Identifier of the organisation holding the account. | &#8594;&nbsp;NA <br> &#8592; O |  | Refer to LEI format as defined here: [https://www.leiroc.org/lei.htm](https://www.leiroc.org/lei.htm) |

#### Account Statement Entries API

The Account Statement Entries API enables a generic representation of transactions to be returned so that they can be displayed in an account statement for the account holder. To return statement entries, an account or a transaction reference must be specified. The supported paths are as follows:

To return a specific statement entry:

**-** *GET /statemententries/{transactionReference}*

To return a range of statement entries:

**-** *GET /accounts/{ identifierType}/{identifier}statemententries* or */accounts/{Account Identifiers}/statemententries*.
<br><br>

To filter the number of records returned, the following query string parameters can be used:

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| limit | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| offset | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| fromDateTime | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| toDateTime | string | date-time | Indicates the maximum creationDate for which records should be returned. |
| transactionStatus | string | N/A | Indicates the status of the transactions to be returned. |
| displayType | string | N/A | Indicates the Display Type of the transactions to be returned. |

::: tip
Note 1: For a harmonised behavior, API Providers should make sure that the statement entries are returned in descending date created order. 

Note 2: HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count).
:::

##### Account Statement Entry UML Class Diagram

<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Statement Entry
    Debit Party Identifier "1..10" --* "1" Statement Entry
</mermaid>
<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Statement Entry
    Debit Party Identifier "1..10" --* "1" Statement Entry
    Statement Entry "0..*" --* "2" Account
</mermaid>

**Figure 2-11 Statement Entry UML Class Diagram**

##### Account Statement Entry Object Definition

| **Account Statement Entry Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **transactionReference** | string | Unique reference for the transaction. This is returned in the response by API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **creditParty** | array | A series of key/value pairs that identify the credit party. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;NA <br> &#8592; M | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **debitParty** | array | A collection of key/value pairs that identify the debit. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;NA <br> &#8592; M | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **transactionStatus** | string | Indicates the status of the transaction as represented by the API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **amount** | string | Amount of the transaction. | &#8594;&nbsp;NA <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the transaction. | &#8594;&nbsp;NA <br> &#8592; M |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |
| **descriptionText** | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **displayType** | string | The transaction type that is to be used for presentation to the account holder as determined by the API provider. This is not necessarily the actual transaction type. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **transactionReceipt** | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **creationDate** | date-time | Date and time when the transaction was created by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Date and time when the transaction modified by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the transaction request as supplied by the client. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |

### Bills API

The Bills API are used to return all outstanding bills associated with an account. The main purpose of the API is to support Bill Presentment, i.e. presenting all applicable bills for a payer to view and select for payment. To pay a bill, the [Bill Payments API](/api-versions-1.2/resources/api-service-definition.html#bill-payments-api) is used. Permitted paths are *GET /accounts/{identifierType}/{identifier}/bills* or *GET /accounts/{Account Identifiers}/bills*.

To filter the number of records returned, the following query string parameters can be used:

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| limit | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| offset | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| fromDateTime | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| toDateTime | string | date-time | Indicates the maximum creationDate for which records should be returned. |

::: tip
Note 1: For a harmonised behavior, API Providers should make sure that the bills are returned in descending date created order. 

Note 2: HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count).
:::

#### Bill UML Class Diagram

<mermaid>
classDiagram
    Metadata "0..20" --* "1" Bill
    Bill "0..*" --* "1" Account
</mermaid>

**Figure 2-12 Bill UML Class Diagram**

#### Bill Object Definition

| **Bill Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **billReference** | string | Reference number for the Bill that the payer can use when making a payment. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **billStatus** | string | Identifies the status of the Bill. | &#8594;&nbsp;NA <br> &#8592; O |  | ‘paid’, ‘unpaid’, ‘partialpaid’ |
| **amountDue** | string | Amount outstanding on the bill to be paid. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **billDescription** | string | Description of the bill that is to be paid. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **currency** | string | Currency of the bill to be paid. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |
| **dueDate** | date | Date on which the Bill is due to be paid. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **minimumAmountDue** | string | The minimum amount that is outstanding on the bill to be paid. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **creationDate** | date-time | Indicates when the bill was created by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the bill was modified by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the bill. | &#8594;&nbsp;NA <br> &#8592; O | [Metadata](/api-versions-1.2/resources/api-service-definition.html#metadata-object) |  |

### Bill Payments API

The Bill Payments APIs are used to pay a specific bill associated with an account held with a service provider. Bill payments can also be retrieved. Permitted paths are:

|**Path**|**Usage**|
|:--------|:--------|
| */accounts/{identifierType}/{identifier}/bills/{billReference}/payments* | Use when a single identifier suffices to identify the bill account. |
| */accounts/{Account Identifiers}/bills/{billReference}/payments* | Use when two or three identifiers are required to identify an account. |
| */bills/{billReference}/payments* | Use when a bill payment is not associated with a service provider account. |
| */accounts/{identifierType}/{identifier}/bills/payments* **OR** */accounts/{Account Identifiers}/bills/payments* | Use when a bill does not have a bill reference |

As per MM API standards, POST is used to create a bill payment whereas GET is used to retrieve all payments associated with a bill.

When retrieving bill payments, the following query string parameters can be used to filter the number of records returned:

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| limit | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| offset | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| fromDateTime | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| toDateTime | string | date-time | Indicates the maximum creationDate for which records should be returned. |

::: tip
Note 1: For a harmonised behavior, API Providers should make sure that the bill payments are returned in descending date created order. 

Note 2: HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count).
:::

#### Bill Payment UML Class Diagram

<mermaid>
classDiagram
    Supplementary Bill Reference "0..20" --* "1" Bill Payment
    Metadata "0..20" --* "1" Bill Payment
</mermaid>
<mermaid>
classDiagram
    Supplementary Bill Reference "0..20" --* "1" Bill Payment
    Metadata "0..20" --* "1" Bill Payment
    Bill Payment "0..*" --* "1" Account
</mermaid>

**Figure 2-13 Bill Payment UML Class Diagram**

#### Bill Payment Object Definition

| **Bill Payment Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **serviceProviderPaymentReference** | string | Reference for the payment generated by the service provider. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **requestingOrganisationTransactionReference** | string | The mobile money provider’s (or Financial Institution’s) transaction reference used to debit the customer and credit the service provider. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **paymentType** | string | Describes the type of Bill Payment, i.e. whether a full or partial payment. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = ‘fullpayment’, ‘partialpayment’ |
| **billPaymentStatus** | string | Indicates the status of the bill payment as stored by the API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **amountPaid** | string | Amount that is being paid. | &#8594;&nbsp;M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the amount that is being paid. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |
| **customerReference** | string | Textual reference provided by the customer paying the bill. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **requestingOrganisation** | string | The originating mobile money provider or financial institution that holds the wallet/account of the payer. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **supplementaryBillReferenceDetails** | array | In some cases, a single reference is not sufficient to identify a bill. This key-value collection enables further reference information to be supplied. | &#8594;&nbsp;C <br> &#8592; C | [Bill References](/api-versions-1.2/resources/api-service-definition.html#supplementary-bill-reference-object) | Not applicable if billReference is no passed in the path. |
| **serviceProviderComment** | string | Allows the Service Provider to include specific information regarding the bill payment. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **serviceProviderNotification** | string | Allows the Service Provider to include specific information that will be included on the notification to the customer by the mobile money provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **creationDate** | date-time | Indicates when the bill payment was created as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the bill payment was modified as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the bill payment request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the bill payment. | &#8594;&nbsp;O <br> &#8592; O | [Metadata](/api-versions-1.2/resources/api-service-definition.html#metadata-object) |  |

### Bill Companies API

The Bill Companies APIs are used to return a list of Service Providers that accept bill payments. Permitted paths are as per below:

- Bill Companies irrespective of account:

  - Use *GET /billcompanies* to return a list of all bill payment service providers.

  - se *GET /billcompanies/{serviceProvider}* to return a specific bill payment service provider.

- Bill Companies for a given account:

  - *GET /accounts/{identifierType}/{identifier}/billcompanies or GET /accounts/{Account Identifiers}/billcompanies.*

To filter the number of records returned, the following query strings can be used:

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| limit | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| offset | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |

::: tip
Note: HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count).
:::

#### Bill Company UML Class Diagram

<mermaid>
classDiagram
    Supplementary Service Provider Details "0..20" --* "1" Bill Company
</mermaid>
<mermaid>
classDiagram
    Supplementary Service Provider Details "0..20" --* "1" Bill Company
    Bill Company "0..*" --* "1" Account
</mermaid>

**Figure 2-14 Bill Company UML Class Diagram**

#### Bill Company Object Definition

| **Bill Companies Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **serviceProvider** | string | Service Provider Reference Code. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **service ProviderType** | string | Type of Service Provider that accepts payments. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **serviceProviderSubType** | string | Sub-Type of Service Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **companyName** | string | Display Name for the Service Provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **supplementary ServiceProviderDetails** | array | In some cases, further information for a service provider can be returned. This key-value collection enables further information to be supplied. | &#8594;&nbsp;NA <br> &#8592; O | [Supplementary Service Provider Details](/api-versions-1.2/resources/api-service-definition.html#supplementary-bill-reference-object) |  |

### Debit Mandates API

The Debit Mandates APIs allow a mobile money customer to provide prior approval for payments to be taken from their account by a requesting payee. If the amount limit field is not supplied, the payee will be able to take any amount. Mandates can be open-ended or can be constrained by a quantified number of payments for a given frequency.

Mandates can be created, viewed, and modified. The request to create a debit mandate will be typically initiated by the service provider (payee) but can also be requested by the customer (payer).

The permitted paths are as follows. Note that the payer account is identified in the path whereas the payee account is identified in the request body. 

**- Creation**: *POST /accounts/{identifierType}/{identifier}/debitmandates* or *POST /accounts/{Account Identifiers}/debitmandates*.

**- Update**: In order to update a debit mandate, a HTTP PATCH is used. Format is: *PATCH /accounts/{identifierType}/{identifier}/debitmandates/{mandateReference}* or *PATCH /accounts/{Account Identifiers}/debitmandates/{mandateReference}*

**- Read**. *GET /accounts/{identifierType}/{identifier}/debitmandates/{mandateReference} or GET /accounts/{Account Identifiers}/debitmandates/{mandateReference}*.

Synchronous and asynchronous modes are supported for the POST and PATCH methods whereas only synchronous mode is supported for the GET method.

The following fields are modifiable: *mandateStatus, startDate, endDate, frequencyType, numberOfPayments*.

#### Debit Mandate UML Class Diagram

<mermaid>
classDiagram
    Payee Identifiers "0..10" --* "1" Debit Mandate
    Payer Identifiers "0..10" --* "1" Debit Mandate
    Debit Mandate "0..*" --* "1" Account
</mermaid>

**Figure 2-15 Debit Mandate UML Class Diagram**

#### Debit Mandate Object Definition

| **Debit Mandate Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **mandateReference** | string | Unique reference provided by the API Provider for the Debit Mandate. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **payee** | array | A series of key/value pairs that enable the payee to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;O <br> &#8592; O | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **mandateStatus** | string | Indicates the status of the Debit Mandate as held in the API Provider system. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = active, inactive |
| **startDate** | date | Date on which the mandate starts. If a frequencyType is specified, this will also be the date on which the first payment is to be taken. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **amountLimit** | string | The maximum amount that can be taken by the Payee on a payment request. | &#8594;&nbsp;O <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the amount limit. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |
| **endDate** | date | Date on which the Debit Mandate ends. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **frequencyType** | string | Indicates the frequency for which payments will be taken from the payers account. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [Frequency](/api-versions-1.2/resources/api-service-definition.html#frequency-type) |
| **numberOfPayments** | number | Indicates the number of consecutive payments that are to be taken. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594;&nbsp;O <br> &#8592; O | [Requesting Organisation](/api-versions-1.2/resources/api-service-definition.html#requesting-organisation-object) |  |
| **creationDate** | date-time | Date and time when the Debit Mandate was created by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Date and time when the Debit Mandate was modified by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the debit mandate request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |

### Links API

The Links APIs are used to establish a link between two separate accounts on the client and provider systems. The API can be used for example to link a mobile wallet account to a Microfinance Institution account or a bank account. The link object does not mandate the processes to verify and authenticate a link request - this depends upon the use case. A link needs to be associated with a mode of operation:

**- pull**. The link can be used by the client to debit the target account held by the provider.

**- push**. The link can be used by the client to credit the target account held by the provider.

**- both**. The link can be used for Push and Pull requests.

To identify the accounts that are to be linked, the target account is specified in the path whereas the source account is specified in the link object.

The permitted paths are as follows:

**- Creation**: *POST /accounts/{identifierType}/{identifier}/links* or *POST /accounts/{ Account Identifiers}/links*.

**- Update** of status and/or mode fields: *PATCH /accounts/{identifierType}/{identifier}/links/{linkReference}* or *PATCH /accounts/{Account Identifiers}/links/{linkReference}*. 

**- Read**. *GET /accounts/{identifierType}/{identifier}/links/{linkReference}* or *GET /accounts/{Account Identifiers}/links/{linkReference}*.

Synchronous and asynchronous modes are supported for POST and PATCH methods whereas only synchronous mode is supported for the GET method.

#### Link UML Class Diagram

<mermaid>
classDiagram
    Source Account Identifier "1..10" --* "1" Link
    Link "0..*" --* "1" Account
</mermaid>

**Figure 2-16 Link UML Class Diagram**

#### Link Object Definition

| **Link Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **linkReference** | string | Indicates the Link reference. This enables a linked account to be uniquely identified. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **sourceAccountIdentifiers** | array | A series of key/value pairs that identify the source account. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;M <br> &#8592; M | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **mode** | string | Indicates the mode of operation for the Link. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = push, pull, both |
| **status** | string | Indicates the status of the Link. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = active, inactive |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594;&nbsp;O <br> &#8592; O | [Requesting Organisation](/api-versions-1.2/resources/api-service-definition.html#requesting-organisation-object) |  |
| **creationDate** | date-time | Indicates when the link was created as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the link was modified as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the link request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | Contains provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |

### Authorisation Codes API

The Authorisation Codes APIs allow a payer to generate a payment code which when presented to the payee, can be redeemed for an amount associated with the code. 

Authorisation codes can be set to expire. Note that expiry time can be specified via the API, however the mobile money provider may mandate a common expiry period for all codes.

Authorisation Codes are used widely in the industry across a range of use cases, including:

**-** ATM Codes for card-less withdrawals. A code is generated in advance by the customer and entered into the ATM to facilitate the withdrawal.

**-** Pre-authorised codes for agent withdrawals. A code is generated in advance by the customer and given to the agent to facilitate the withdrawal. 

**-** Pre-authorised codes for merchant payments. The customer generates a code which can be redeemed at a merchant.

Once an authorisation code has been generated, it can be presented through multiple means, including encoding into a QR code. Typically, an authorisation code will expire.

The following paths are permitted:

**- Generate** an Authorisation Code. *POST /accounts/{identifierType}/{identifier}/authorisationcodes* or *POST /accounts/{Account Identifiers}/authorisationcodes*

**- Cancel** an Authorisation Code (*codeState* = ‘cancelled’). *PATCH /accounts/{identifierType}/{identifier}/authorisationcodes/{authorisationCode}* or *PATCH /accounts/{Account Identifiers}/authorisationcodes/{authorisationCode}*. 

**- View** An Authorisation Code for a given account. *GET /accounts/{identifierType}/{identifier}/authorisationcodes/{authorisationCode}* or *GET /accounts/{Requestor Account Identifiers}/authorisationcodes/{authorisationCode}*. 

**- View** all Authorisation Codes for a given account. *GET /accounts/{identifierType}/{identifier}/authorisationcodes* or *GET /accounts/{Requestor Account Identifiers}/authorisationcodes*.

When retrieving authorisation codes, the following query string parameters can be used to filter the number of records returned:

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| limit | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| offset | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| fromDateTime | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| toDateTime | string | date-time | Indicates the maximum creationDate for which records should be returned. |
| codeState | string | string | Allows filtering on the state of the authorisation code. |

::: tip
Note 1: For a harmonised behavior, API Providers should make sure that the authorisation codes are returned in descending date created order. 

Note 2: HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count).
:::

Synchronous and asynchronous modes are supported for the POST and PATCH methods whereas only synchronous mode is supported for the GET method.

#### Authorisation Code UML Class Diagram

<mermaid>
classDiagram
    Redemption Account Identifier "0..10" --* "1" Authorisation Code
    Metadata "0..20" --* "1" Authorisation Code
    Redemption Channel "0..50" --* "1" Authorisation Code
    Redemption Transaction Type "0..50" --* "1" Authorisation Code
    Authorisation Code "0..*" --* "1" Account
</mermaid>

**Figure 2-17 Authorisation Code UML Class Diagram**

#### Authorisation Code Object Definition

| **Authorisation Codes Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **authorisationCode** | string | The code that will be presented to the other party for redemption. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **codeState** | string | Indicates the state of the [Authorisation Code](/api-versions-1.2/resources/api-service-definition.html#authorisation-codes-api) | &#8594;&nbsp;NA <br> &#8592; M |  | Enumeration = ‘active’, ‘expired’, ‘cancelled’ |
| **amount** | string | Indicates the amount associated with the [authorisation code](/api-versions-1.2/resources/api-service-definition.html#authorisation-codes-api). Typically, this is set by the client. | &#8594;&nbsp;O <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Indicates the amount currency. Must be supplied when an amount is supplied. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |
| **amountType** | string | The amount for the authorisation can be an exact amount or can be a maximum amount, i.e. redemption up to but not higher than the amount specified. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = ‘exact’, ‘maximum’ |
| **codeLifetime** | integer | Indicates the expiry time in seconds of the code. Depending upon the use case, this can be set by the client or server. | &#8594;&nbsp;O <br> &#8592; O |  | If supplied, then must be 1 second or greater. |
| **holdFundsIndicator** | boolean | Indicates whether funds should be reserved against the payer’s account where the payer is the requestor. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **redemptionAccountIdentifiers** | array | A series of key/value pairs that identify the  account where the code must be redeemed. Only needed if the redemption account needs to be explicitly stated. | &#8594;&nbsp;O <br> &#8592; O | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **redemptionChannels** | string | Indicates the channel(s) that the code can be redeemed against, e.g. ATM, Merchant, etc.. | &#8594;&nbsp;O <br> &#8592; O | [Channel Types Object](/api-versions-1.2/resources/api-service-definition.html#channel-type-object) |  |
| **redemptionTransactionTypes** | string | Indicates the Transaction Types(s) that the code can be redeemed against. | &#8594;&nbsp;O <br> &#8592; O | [Transaction Types Object](/api-versions-1.2/resources/api-service-definition.html#transaction-type-object) |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594;&nbsp;O <br> &#8592; O | [Requesting Organisation](/api-versions-1.2/resources/api-service-definition.html#requesting-organisation-object) |  |
| **creationDate** | date-time | Indicates when the link was created as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the link was modified as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the request as provided by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the [authorisation code](/api-versions-1.2/resources/api-service-definition.html#authorisation-codes-api) | &#8594;&nbsp;O <br> &#8592; O | [Metadata](/api-versions-1.2/resources/api-service-definition.html#metadata-object) |  |

### Quotations API

The Quotations APIs are used to obtain one or multiple quotes for a mobile money customer that wishes to transfer money. The creation of a quote involves returning any fees that will be levied on the sending customer and if the request is international, the forex rate. A request is made for a quotation by the requesting Service Provider in response to a customer request. The quotation is calculated and returned. If the customer is satisfied with the quotation, then they can confirm and proceed with a transaction request using the [/transactions](/api-versions-1.2/resources/api-service-definition.html#api-endpoints) API.

The following paths are permitted:

**- Creation** of a quotation: *POST /quotations*

**View** a quotation: *GET /quotations/{Quotation Reference}*

#### Quotation UML Class Diagram

<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Quotation
    Debit Party Identifier "1..10" --* "1" Quotation
    Metadata "0..20" --* "1" Quotation
    Quotation "1" *-- "0..2" KYC Information
    Quotation "1" *-- "0..1" Quote
    KYC Information "1" *-- "0..10" ID Document
    KYC Information "1" *-- "0..1" Address
    KYC Information "1" *-- "0..1" Name
    Quote "1" *-- "0..20" Fee
</mermaid>

**Figure 2-18 Quotation UML Class Diagram**

#### Quotation Object Definition

| **Quotation Object Definition** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **quotationReference** | string | Unique reference for the quotation as provided by the API Provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **creditParty** | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;M <br> &#8592; M | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **debitParty** | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;M <br> &#8592; M | [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |  |
| **type** | string | The transaction type that the quotation has been requested for. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [Transaction Types](/api-versions-1.2/resources/api-service-definition.html#transaction-type-object) |
| **subtype** | string | The transaction sub-type that the quotation has been requested for. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **quotationStatus** | string | Indicates the creation state of the quotation. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = pending, rejected, completed |
| **requestAmount** | string | Requested Quotation amount. | &#8594;&nbsp;M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **requestCurrency** | string | Currency of the requested quotation amount. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |
| **availableDeliveryMethod** | string | Delivery Method that is possible for the intended recipient. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [Delivery Method](/api-versions-1.2/resources/api-service-definition.html#delivery-method-types) |
| **chosenDeliveryMethod** | string | The delivery method chosen by the sending end user as the specific delivery method to be used in the quotes received. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [Delivery Method](/api-versions-1.2/resources/api-service-definition.html#delivery-method-types) |
| **originCountry** | string | The originating country of the quotation request, i.e. the country where the request was initiated. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **receivingCountry** | string | Destination country of the quotation request, i.e. the country that the sender wishes to send to. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **quotes** | array | A collection of quotes. A quote can be received from a single receiving financial service provider or from multiple providers. | &#8594;&nbsp;NA <br> &#8592; O | [Quotes](/api-versions-1.2/resources/api-service-definition.html#quote-object) |  |
| **recipientKyc** | object | A collection of fields detailing the KYC of the transaction recipient, typically used for International Transfers. | &#8594;&nbsp;O <br> &#8592; O | [KYC Information](/api-versions-1.2/resources/api-service-definition.html#kyc-information-object) |  |
| **senderKyc** | object | A collection of fields detailing the KYC of the transaction sender, typically used for International Transfers. | &#8594;&nbsp;O <br> &#8592; O | [KYC Information](/api-versions-1.2/resources/api-service-definition.html#kyc-information-object) |  |
| **recipientBlockingReason** | string | The reason for blocking the quotation, based on AML checks on the recipient. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **senderBlockingReason** | string | The reason for blocking the quotation, based on AML checks on the sender. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594;&nbsp;NA <br> &#8592; O | [Requesting Organisation](/api-versions-1.2/resources/api-service-definition.html#requesting-organisation-object) |  |
| **sendingServiceProviderCountry** | string | The country of the sending service provider that holds the account of the sender. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **creationDate** | date-time | Date and time when the quotation was created by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Date and time when the quotation was modified by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the quotation request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](/api-versions-1.2/resources/api-service-definition.html#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the quotation. | &#8594;&nbsp;O <br> &#8592; O | [Metadata](/api-versions-1.2/resources/api-service-definition.html#metadata-object) |  |

## Supporting Objects

### International Transfer Information Object

The International Transfer Information object contains details that are specific to international money transfers.

| **International Transfer Information Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **quotationReference** | string | Reference for the quotation that was provided to the sender. (refer to [Quotations](/api-versions-1.2/resources/api-service-definition.html#quotations-api) API for more information). | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **quoteId** | string | The specific quote associated with the quotation (refer to [Quotes](/api-versions-1.2/resources/api-service-definition.html#quote-object) object for more information). | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **originCountry** | string | The originating country of the transaction, i.e. the country where the transaction was initiated. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Country Codes](/api-versions-1.2/resources/api-service-definition.html#iso-country-codes). |
| **deliveryMethod** | string | The recipient delivery method as chosen by the sender. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [Delivery Method Types](/api-versions-1.2/resources/api-service-definition.html#delivery-method-types) |
| **receivingCountry** | string | Destination country of the international transfer. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **relationshipSender** | string | Indicates the relationship (if any) between the sender and the receiver. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **recipientBlockingReason** | string | The reason for blocking the transaction, based on AML checks on the recipient. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **senderBlockingReason** | string | The reason for blocking the transaction, based on AML checks on the sender. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **remittancePurpose** | string | field providing a description of the reason for the international transfer. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| ***sendingServiceProviderCountry*** | string | The country of the sending service provider that holds the account of the sender. | &#8594;&nbsp;O <br> &#8592; O |  |  |

### KYC Information Object

KYC refers to ‘Know your Customer’. The KYC object contains a number of fields that enable the identity of the subject to be verified. KYC can be provided with transfers for the sending identity and the receiving identity. There are no mandatory KYC object fields.

| **KYC Information Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **birthCountry** | string | The country of birth of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [ISO Country Codes](/api-versions-1.2/resources/api-service-definition.html#iso-country-codes). |
| **dateOfBirth** | date | Birth date of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **contactPhone** | string | Contact phone number (mobile or landline) of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  | Must contain between 6 and 15 consecutive digits<br>First character can contain a ‘+’ or digit<br>Can contain spaces. |
| **emailAddress** | string | Email address of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **employerName** | string | Employer name of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **gender** | string | Gender of the KYC Object. | &#8594;&nbsp;O <br> &#8592; O |  | Length=1, Enumeration = (m)ale, (f)emale, (u)nspecified |
| **idDocument** | array | An array of fields containing the forms of identification that are associated with the subject. | &#8594;&nbsp;O <br> &#8592; O | [Id Document Object](/api-versions-1.2/resources/api-service-definition.html#id-document-object) |  |
| **nationality** | string | Nationality of the KYC subject. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [ISO Country Codes](/api-versions-1.2/resources/api-service-definition.html#iso-country-codes) |
| **postalAddress** | object | A collection of fields that details the postal address of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O | [Address](/api-versions-1.2/resources/api-service-definition.html#address-object) |  |
| **occupation** | string | Occupation of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **subjectName** | object | Refers to the name fields for the KYC subject. | &#8594;&nbsp;O <br> &#8592; O | [Name](/api-versions-1.2/resources/api-service-definition.html#name-object) |  |

### Name Object

The name object identifies the name details for the subject identity.

| **Name Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **title** | string | The given title of the KYC subject, e.g. Mr, Mrs, Dr. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **firstName** | string | First name (also referred to as given name) of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **middleName** | string | Middle Name of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **lastName** | string | Surname (also referred to as last or family name) of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **fullName** | string | The full name of the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **nativeName** | string | The full name expressed as in the native language. | &#8594;&nbsp;O <br> &#8592; O |  |  |

### Id Document Object

As part of KYC information, identification documentation is normally required. The Id Document Object enables documents pertaining to a subject’s identity to be described.

| **Id Document Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **idType** | string | Indicates the type of identification for the KYC subject, e.g. passport, driving licence etc.. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ID Types](/api-versions-1.2/resources/api-service-definition.html#id-types) |
| **idNumber** | string | Reference pertaining to the type of identification for the KYC subject. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **issueDate** | date | Date of issue for the identification document. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **expiryDate** | date | Date of expiry for the identification document. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **issuer** | string | Indicates the organisation/government entity that issued the ID document. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **issuerPlace** | string | Place of issue for the identification type. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **issuerCountry** | string | Country where the identification type was issued. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [ISO Country Codes](/api-versions-1.2/resources/api-service-definition.html#iso-country-codes) |
| **otherIdDescription** | string | Where an ID Type of ‘otherid’ is specified, a description of the type of identification can be provided in this field. | &#8594;&nbsp;O <br> &#8592; O |  |  |

### Address Object

The address object holds the postal address of the subject. Due to variability of address information in a number of mobile money markets, only the country is mandatory.

| **Address Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **addressLine1** | string | First line of the address. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **addressLine2** | string | Second line of the address. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **addressLine3** | string | Third line of the address. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **city** | string | City/Town. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **stateProvince** | string | State or Province. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **postalCode** | string | Postal Code. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **country** | string | Country | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Country Codes](/api-versions-1.2/resources/api-service-definition.html#iso-country-codes) |

### Account Identifier Object

The Account Identifier object enables one or multiple identifiers to be provided to enable the recipient system to resolve the account/party.

| **Account Identifier Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **key** | string | Provides the account identifier type. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [Account Identifiers](/api-versions-1.2/resources/api-service-definition.html#account-identifier-object) |
| **value** | string | Provides the account identifier type value. | &#8594;&nbsp;M <br> &#8592; M |  |  |

### Identity Object

The Identity object defines the information for an identity associated with an account. Between one and twenty identities can be associated with an account.

| **Identity Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **identityId** | string | A unique id for the identity as assigned by the API Provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **identityType** | string | Indicates the type of the identity. Currently, only ‘individual’ is supported. | &#8594;&nbsp;NA <br> &#8592; M |  | ‘individual’ |
| **identityStatus** | string | A non-harmonised field describing the status of the identity. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **identityKyc** | object | A collection of fields detailing the KYC held for the identity. | &#8594;&nbsp;M <br> &#8592; M | [KYC Information](/api-versions-1.2/resources/api-service-definition.html#kyc-information-object) |  |
| **accountRelationship** | string | Describes the relationship that the identity holds with the account. | &#8594;&nbsp;M <br> &#8592; M |  | ‘accountholder’ |
| **kycVerificationStatus** | string | Indicates the status of the identity’s KYC verification. | &#8594;&nbsp;O <br> &#8592; O |  | ‘verified’, ‘unverified’, ‘rejected’ |
| **kycVerificationEntity** | string | Indicates the entity (e.g. mobile money agent) that has verified the KYC of the identity. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **kycLevel** | integer | Indicates the KYC level that the identity is associated with. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | array | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O |  |  |

### Quote Object

Quotations can consist of multiple quotes. The fields for a quote are defined in the object.

| **Quote Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **quoteId** | string | The unique ID for this quote. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **receivingAmount** | string | The total amount as it will be received by the receiving end user. | &#8594;&nbsp;NA <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **receivingCurrency** | string | The currency of the quote. | &#8594;&nbsp;NA <br> &#8592; M |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |
| **sendingAmount** | string | Requested quotation amount as supplied by the sender. | &#8594;&nbsp;NA <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **sendingCurrency** | string | Currency of the requested quotation amount. | &#8594;&nbsp;NA <br> &#8592; M |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |
| **deliveryMethod** | string | The delivery method that is applicable to the quotation. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [Delivery Method](/api-versions-1.2/resources/api-service-definition.html#delivery-method-types) |
| **fees** | array | Returns all fees that are applicable to the quote. | &#8594;&nbsp;NA <br> &#8592; O | [Fees Object](/api-versions-1.2/resources/api-service-definition.html#fees-object) |  |
| **fxRate** | string | The conversion rate applicable between the sending and the receiving currency for the requested transaction. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. Note 10 decimal places supported. |
| **quoteExpiryTime** | date-time | The timestamp when the quote will expire. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **receivingServiceProvider** | string | The name of the receiving service provider, i.e. the provider that the quote is associated with. | &#8594;&nbsp;NA <br> &#8592; O |  |  |

### Metadata Object

The metadata object allows fields to be specified to convey administrative information regarding the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

| **Metadata Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **key** | string | Identifies the type of additional fields. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **value** | string | Identifies the value of the additional field. | &#8594;&nbsp;M <br> &#8592; M |  |  |

### Custom Data Object

The custom data object allows additional fields to be specified for the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

| **Custom Data Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **key** | string | Identifies the type of additional fields. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **value** | string | Identifies the value of the additional field. | &#8594;&nbsp;M <br> &#8592; M |  |  |

### Supplementary Bill Reference Object

This object enables additional payment references to be specified for a bill payment in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

| **Supplementary Bill Reference Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **paymentReferenceType** | string | Identifies the type of the additional payment reference. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **paymentReferenceValue** | string | Identifies the value of the additional payment reference. | &#8594;&nbsp;M <br> &#8592; M |  |  |

### Transaction Type Object

This object enables multiple transaction types to be specified along with paired sub-types. This object is used where multiple transaction types need to be passed in an API.

| **Transaction Type Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **transactionType** | string | Identifies the Transaction Type. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [Transaction Types](/api-versions-1.2/resources/api-service-definition.html#transaction-type-object) |
| **transactionSubType** | string | Identifies the Transaction Sub-Type. | &#8594;&nbsp;O <br> &#8592; O |  |  |

### Channel Type Object

This object enables multiple channel types to be specified. This object is used where multiple channel types need to be passed in an API.

| **Channel Type Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **channelType** | string | Identifies the Channel Type. | &#8594;&nbsp;M <br> &#8592; M |  |  |

### Fees Object

An object that enables fees that are differentiated by type to be provided and/or returned.

| **Fees Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **feeType** | string | Defines the type of fee. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **feeAmount** | string | Defines the amount of the fee. | &#8594;&nbsp;M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **feeCurrency** | string | Defines the currency for the given fee. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |

### Commission Object

An object that enables earned commission that is calculated by the API provider to be returned.

| **Commission Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **commissionType** | string | Defines the type of commission. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **commissionAmount** | string | Defines the amount of the commission. | &#8594;&nbsp;M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **commissionCurrency** | string | Defines the currency of the commission. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](/api-versions-1.2/resources/api-service-definition.html#iso-currency-codes) |

### Requesting Organisation Object

An object that details the originating organisation of the request.

| **Requesting Organisation Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **requestingOrganisationIdentifierType** | string | Identifies the identifier type of the requesting organisation. | &#8594;&nbsp;M <br> &#8592; M |  | ‘swiftbic’, ‘lei’, ‘organisationid’ |
| **requestingOrganisationIdentifier** | string | Contains the requesting organisation identifier. | &#8594;&nbsp;M <br> &#8592; M |  |  |

## Enumerations

### ISO Currency Codes

The three-character alphabetic code for currency as defined by ISO 4217 is to be used for all currency fields. The full list of codes is maintained by Swiss Interbank Clearing on behalf of the International Organisation for Standardisation. This list can be obtained via the following website - [http://www.currency-iso.org/en/home/tables/table-a1.html](http://www.currency-iso.org/en/home/tables/table-a1.html)

### Transaction Types

A transaction type is used to classify the nature of a transaction.

|**Code**|**Description**|
|:--------|:--------|
| billpay | Payment of bill from a business for goods and/or services. |
| deposit | Exchange of cash in return for e-Money at a physical agent or via ATM. |
| disbursement | Disbursement of funds (making payments from an organisation (business, NGO, government entity) to a mobile money recipient. |
| transfer | Transfer of funds between mobile money provider and another provider or financial institution in the same country. |
| merchantpay | Purchases of goods and/or services from shops (payer present) or online (payer not present). |
| inttransfer | Transfer of funds to a recipient in another country, either directly to/from a mobile wallet or via an international money transfer provider. |
| adjustment | General adjustments to an account via an adjustment transaction (e.g. refunds). |
| reversal | Reversal of a prior transaction to return funds to the payer. |
| withdrawal | Exchange of e-Money in return for cash at a physical agent or via ATM. |

### ID Types

The ID Types enumeration contains accepted identification types. Due to the wide international variation in accepted types of identification, a catch-all type of ‘otherid’ is included.

|**ID Type**|**Description**|
|:--------|:--------|
| passport | Payment of bill from a business for goods and/or services. |
| nationalregistration | National Registration Number. |
| othered | Catch-all for IDs not on the list. |
| drivinglicence | Driving Licence Number. |
| socialsecurity | Social Security Number. |
| alienregistration | Alien Registration ID. |
| nationalidcard | National Identity Card. |
| employer | Employers Identification. |
| taxid | Tax Identification Number. |
| seniorcitizenscard | Senior Citizens ID Card. |
| marriagecertificate | Marriage Certificate. |
| birthcertificate | Birth Certificate. |
| healthcard | Health Card. |
| votersid | Voters Identification. |
| villageelderletter | Letter of confirmation from village elder. |
| pancard | Credit/debit card number (Primary Account Number). |
| officialletter | Official letter confirming identity. |

### Account Identifiers

The Account Identifier enumeration lists all possible means to identify a target account. Identifiers can be combined if necessary, to provide a unique identifier for the target account.

|**Code**|**Short Description**|**Type**|**Description**|
|:--------|:--------|:--------|:--------|
| accountcategory | Account Category | string | Can be used to identify the sources of funds category where there are multiple accounts (wallets) held against an account holder. |
| bankaccountno | Bank Account Number | string | Financial institution account number that is typically known by the account holder. |
| accountrank | Account Rank | string | Is used to identify the rank of the source of funds where there are multiple accounts (wallets) held against an account holder. |
| identityalias | Identity Alias | string | An alias for the identity, e.g. short code for an agent till. |
| iban | IBAN | string | Internationally agreed system of identifying bank accounts across national borders to facilitate the communication and processing of cross border transactions. Can contain up to 34 alphanumeric characters. |
| accountid | Account Holder Identity | string | Identifier for the account holder. |
| msisdn | MSISDN | string | Must contain between 6 and 15 consecutive digits<br>>First character can contain a ‘+’ or digit<br>>Can contain spaces. |
| swiftbic | SWIFTBIC | string | A bank identifier code (BIC) is a unique identifier for a specific financial institution. A BIC is composed of a 4-character bank code, a 2-character country code, a 2-character location code and an optional 3-character branch code. BICs are used by financial institutions for letters of credit, payments and securities transactions and other business messages between banks. Please refer to [ISO 9362](http://www.iso.org/iso/catalogue_detail?csnumber=60390) for further information. |
| sortcode | Bank Sort Code | string | Sort code to identify the financial institution holding the account. |
| organisationid | Organisation Account Identifier | string | Used to identify the organisation for which a payment is to be made. |
| username | Username | string | Used to identify target account via an associated username. |
| walletid | Wallet Identifier | string | A means to identify a mobile money wallet, particularly where multiple wallets can be held against an MSISDN. typically used in conjunction with MSISDN or identity alias to identify a particular wallet. |
| linkref | Link Reference | string | A means to uniquely identify an account via an account to account link. E.g. wallet account link to bank account. |
| consumerno | Consumer Number | string | Identifies the consumer associated with the account. |
| serviceprovider | Service Provider | string | Provides a reference for a Service Provider. |
| storeid | Store ID | string | Identifies the transacting store / retail outlet. |
| bankname | Bank Name | string | Name of the bank. |
| bankaccounttitle | Bank Account Title | string | The title of the bank account. |
| emailaddress | Email Address | string | emailaddress of the party. |
| mandatereference | Debit Mandate Reference | string | A means to identify an account via a debit mandate reference. |

### ISO Country Codes

The two-character alphabetic code for country as defined by ISO 3166 is to be used for all fields specifying a country or nationality. The full list of codes is maintained by the International Organisation for Standardisation. The list can be obtained via the following website - [http://www.iso.org/iso/country_codes](http://www.iso.org/iso/country_codes)

### Delivery Method Types

When a customer requests a quotation they are able to specify their preferred method of delivery of the transfer to the recipient. Permitted delivery methods are provided below.

|**Delivery Method**|**Description**|
|:--------|:--------|
| directtoaccount | The transfer is to be delivered into the account (wallet) of the recipient. |
| agent | The recipient can visit an agent and get the transferred funds. |
| personaldelivery | a supplementary service where an authorised person can deliver the funds, in hand, to the receiving end user. |

### Frequency Type

When requesting a debit mandate, the API client is able to specify the frequency of which the payment should be taken. Valid values are defined in the table below.

|**Frequency Type**|**Description**|
|:--------|:--------|
| weekly | Payment will be taken weekly. |
| fortnight | Payment will be taken every two weeks. |
| monthspecificdate | Payment to be taken on a specific date every month. |
| twomonths | Payment to be taken every two months. |
| threemonths | Payment to be taken every three months. |
| fourmonths | Payment to be taken every four months. |
| sixmonths | Payment to be taken every six months. |
| yearly | Payment to be taken yearly. |
| lastdaymonth | Payment to be taken on the last calendar day of the month. |
| lastdaymonthworking | Payment to be taken on the last working day of the month according to working days as per the resident country of the account. |
| lastmonday | Payment to be taken on the last Monday of the month. |
| lasttuesday | Payment to be taken on the last Tuesday of the month. |
| lastwednesday | Payment to be taken on the last Wednesday of the month. |
| lastthursday | Payment to be taken on the last Thursday of the month. |
| lastfriday | Payment to be taken on the last Friday of the month. |
| lastsaturday | Payment to be taken on the last Saturday of the month. |
| lastsunday | Payment to be taken on the last Sunday of the month. |
| specificdaymonthly | Payment to be taken on a specific day of the month. |

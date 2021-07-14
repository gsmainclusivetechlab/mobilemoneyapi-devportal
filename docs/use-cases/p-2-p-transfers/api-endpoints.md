---
pageClass: api-page
---

# API Endpoints

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

- **Reference** where the fields is a acollection/n array and/or is defined by another object.
- **Validation** applied to the field, including enumeration, field length and use of regular expressions to validate format.

Please note that string fields have a default maximum length of 256 characters unless specified otherwise.

## Transactions API

P2P Transfers can be created,  and viewed and updated using transactions APIs. The following paths are permitted:

*POST /transactions/type/transfer*. To create a P2P transfer.

*GET /transactions/{transactionReference}*. To view a P2P transfer.

The following paths are permitted:

| **Operation** | **Path**  | **Description** |
|:-----------|:-------|:-------------|
| **Create** | POST */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL.  |
| **View** | GET */transactions/{transactionReference}* | To view a transaction. |
| **Update** | PATCH */transactions/{transactionReference}* | To update the transactionStatus of a transaction. |

### Transaction UML Class Diagram

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

### Transaction Object Definition

| **Transaction Object** ||||||
|:-----|:-----|:------------|:--|:----------|:-----------|
| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
| **amount** | string | The transaction amount. | M <br> M |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the transaction amount. | M <br> M |  | Enumeration = [ISO Currency Codes](/use-cases/p-2-p-transfers/enumerations.html) |
| **type** | string | The harmonised Transaction Type (not required if passed in the URL) | M <br> M |  | Enumeration = [Transaction Types](/use-cases/p-2-p-transfers/enumerations.html#transaction-types) |
| **subType** | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | O <br> O |  |  |
| **transactionStatus** | string | Indicates the status of the transaction as stored by the API provider. | NA <br> &#8592;&nbsp;M |  |  |
| **descriptionText** | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **requestDate** | date-time | The creation date and time of the transaction as supplied by the client. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **creationDate** | date-time | Date and time when the transaction was created by the API Provider | &#8594;&nbsp;NA <br> &#8592;&nbsp;O |  |  |
| **modificationDate** | date-time | Date and time when the transaction was modified by the API Provider | &#8594;&nbsp;NA <br> &#8592;&nbsp;O |  |  |
| **transactionReference** | string | Unique reference for the transaction. This is returned in the response by API provider. | &#8594;&nbsp;NA <br> &#8592;&nbsp;M |  |  |
| **transactionReceipt** | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | &#8594;&nbsp;NA <br> &#8592;&nbsp;O |  |  |
| **requestingOrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transaction. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **oneTimeCode** | string | A one-time code that can be supplied in the request or can be generated in the response depending upon the use case. An authorisation code can be supplied in this field for requests that have been pre-authorised. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **geoCode** | string | Indicates the geographic location from where the transaction was initiated. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **debitParty** | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;C <br> &#8592;&nbsp;C | [Account Identifiers](/use-cases/p-2-p-transfers/enumerations.html#account-identifiers) | debitParty must be supplied if creditParty is omitted. <br> If creditParty is supplied, then debitParty is optional. |
| **creditParty** | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;C <br> &#8592;&nbsp;C | [Account Identifiers](/use-cases/p-2-p-transfers/enumerations.html#account-identifiers) | creditParty must be supplied if debitParty is omitted. If debitParty is supplied, then creditParty is optional. |
| **senderKyc** | object | A collection of fields detailing the KYC of the transaction Sender. | &#8594;&nbsp;O <br> &#8592;&nbsp;O | [KYC](/use-cases/p-2-p-transfers/supporting-objects.html#kyc-information-object) |  |
| **recipientKyc** | object | A collection of fields detailed the KYC of the transaction Recipient. | &#8594;&nbsp;O <br> &#8592;&nbsp;O | [KYC](/use-cases/p-2-p-transfers/supporting-objects.html#kyc-information-object) |  |
| **originalTransactionReference** | string | This field indicates the transaction which is the subject of the reversal. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **servicingIdentity** | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | &#8594;&nbsp;O <br> &#8592;&nbsp;O  |  |  |
| **fees** | array | Allows the passing and/or returning of all fees pertaining to the transaction. | &#8594;&nbsp;O <br> &#8592;&nbsp;O | [Fees Object](/use-cases/p-2-p-transfers/supporting-objects.html#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional transaction fields. | &#8594;&nbsp;O <br> &#8592;&nbsp;O | [Metadata](/use-cases/p-2-p-transfers/supporting-objects.html#metadata-object) |  |

## Reversals API

The Reversals API is used to reverse a P2P transfer. The originating transaction reference must be provided in the path to identify the payment to be reversed. For a partial reversal, the amount needs to be supplied. 

For viewing reversals, the [Transactions API](#transactions-api) should be used. For performing a reversal without the original transaction reference, use the [Transactions API](#transactions-api). 

### Reversal UML Class Diagram

<mermaid>
classDiagram
    Credit Party Identifier "0..10" --* "" Reversal
    Debit Party Identifier "0..10" --* "" Reversal
    Fee "0..20" --* "1" Reversal
    Metadata "0..20" --* "1" Reversal
    Reversal --> Transaction
</mermaid>

### Reversal Object Definition

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:---|:---|:---|:---|:---|:---|
| **transactionReference** | string | Unique reference for the transaction. This is returned in the response by API provider.  | NA <br> M |  |  |
| **requesting OrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transaction. | O <br> O |  |  |
| **originalTransactionReference** | string | For reversals and refunds, this field indicates the transaction which is the subject of the reversal. | NA <br> M |  |  |
| **creditParty** | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | O <br> O | [Account Identifiers](/use-cases/p-2-p-transfers/supporting-objects.html#account-identifiers-object) |  |
| **debitParty** | array | 	A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | O <br> O | [Account Identifiers](/use-cases/p-2-p-transfers/supporting-objects.html#account-identifiers-object) |  |
| **type** | string | The harmonised Transaction Type | M <br> M |  | Enumeration = [Transaction Types](/use-cases/p-2-p-transfers/enumerations.html#transaction-types) Note that only Reversals and Refunds (adjustments) are supported. |
| **subType** | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | O <br> O |  |  |
| **transactionStatus** | string | Indicates the status of the transaction as stored by the API provider. | NA <br> M |  |  |
| **amount** | string | The transaction Amount. | O <br> O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the transaction amount. | O <br> O |  | Enumeration = [ISO Currency Codes](/use-cases/p-2-p-transfers/enumerations.html#iso-currency-codes) |
| **descriptionText** | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | O <br> O |  |  |
| **fees** | array | Allows the passing and/or returning of all fees pertaining to the transaction. | O <br> O | [Fees Object](/use-cases/p-2-p-transfers/supporting-objects.html#custom-data-object) |  |
| **geoCode** | string | Indicates the geographic location from where the transaction was initiated. | O <br> O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | O <br> O | [Requesting Organisation Object](/use-cases/p-2-p-transfers/supporting-objects.html#requesting-organisation-object) |  |
| **servicingIdentity** | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | O <br> O |  |  |
| **transactionReceipt** | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | NA <br> O |  |  |
| **creationDate** | date-time | Date and time when the transaction was created by the API Provider. | NA <br> O |  |  |
| **modificationDate** | date-time | Date and time when the transaction was modified by the API Provider. | NA <br> O |  |  |
| **requestDate** | date-time | The date and time of the transaction request as supplied by the client. | O <br> O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | O <br> O | [Custom Data Object](/use-cases/p-2-p-transfers/supporting-objects.html#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the transaction. | O <br> O | [Metadata](/use-cases/p-2-p-transfers/supporting-objects.html#metadata-object) |  |

## Accounts APIs

Using account APIs, an FSP can:

- View transfers for their account with another FSP.
- View their account balance with another FSP.
- Return the name of the intended recipient of a transfer.

### Identifying an FSP Account

Two methods are provided for identifying an FSP account, the single identifier method, and the multiple identifiers method.

#### Single Identifier Method

In the scenario where one identifier suffices to uniquely identify an account, the following path is to be used:
<br>

*`/accounts/{identifierType}/{identifier}`* .

#### Multiple Identifiers Method

Where a single identifier is not sufficient to identify an account, the following path is to be used:

*`/accounts/{accountIdentifier1}@{value1}${accountIdentifier2}@{value2}${accountIdentifier3}@{value3}`* .

The path uses a ‘$’ delimiter to separate each identifier, up to a limit of three account identifiers. Each key/value is delimited by ‘@’.

The list of permitted account identifiers supported by the Mobile Money API can be found in the [Account Identifiers](/use-cases/p-2-p-transfers/enumerations.html#account-identifiers) section.

## Account Transactions API

An FSP should use this API to return a list of payments transfers against their account. One of the following paths can be used:

GET `/accounts/{identifierType}/{identifier}/transactions`

or GET `/accounts/{Account Identifiers}/transactions`

To filter the number of records returned, the following query strings can be used:

| **Parameter** | **Type** | **Format** | **Description** |
|:--|:--|:--|:--|
| **lLimit** | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| **oOffset** | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| **fromDateTime** | string | date-time | Indicates the minimum date creationDate for which records should be returned. |
| **toDateTime** | string | date-time | Indicates the maximum date creationDate for which records should be returned. |
| **transactionStatus** | string | N/A | Indicates the status of the transactions to be returned. |
| **transactionType** | string | N/A | Indicates the [type](/use-cases/p-2-p-transfers/enumerations.html#transaction-types) of the transactions to be returned. |

::: tip Note 1:
For a harmonised behavior, API Providers should make sure that the transactions are returned in descending date created order.
:::

::: tip Note 2:
HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count).
:::

### Account Transaction UML Class Diagram

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

## Account Balances API

Using the Account Balances API, an FSP can check their balance. Permitted paths are: 

GET `/accounts/{identifierType}/{identifier}/balance`

or GET `/accounts/{Account Identifiers}/balance`

A ‘self’ version is also available where the calling API client is the FSP account holder. Path for the ‘self’ version is `/accounts/balance`.

### Account Balance Object Definition

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **accountStatus** | string | Indicates a harmonised representation of the account state. This will be shown as ‘available’ or ‘unavailable’. A state of ‘unavailable’ means that the account is in a state that does not allow posting of transactions. Unregistered indicates that although not available, a transaction created with the account identifier(s) will result in an unregistered voucher creation. | NA <br> O |  | Enumeration = available, unavailable, unregistered |
| **currentBalance** | string | The current outstanding balance on the account. | NA <br> O |  | Please refer to API Fundamentals document for amount validation rules. |
| **availableBalance** | string | Indicates the balance that is able to be debited for an account. This balance is only provided on some API provider systems. | NA <br> O |  | Please refer to API Fundamentals document for amount validation rules. |
| **reservedBalance** | string | Indicates the portion of the balance that is reserved, i.e. intended to be debited. This balance is only provided on some API provider systems. | NA <br> O |  | Please refer to API Fundamentals document for amount validation rules. |
| **unClearedBalance** | string | Indicates the sum of uncleared funds in an account, i.e. those that are awaiting a credit confirmation. | NA <br> O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency for all returned balances. | NA <br> O |  | Enumeration = [ISO Currency Codes](/use-cases/p-2-p-transfers/enumerations.html#iso-currency-codes) |

## Account Holder Name API

Using the Account Holder Name API, a sending FSP can retrieve the name of the intended recipient of a transfer. This can then be provided to the sending account holder to confirm the recipient name is correct prior to authorising the transfer.  

Permitted paths are: 

GET `/accounts/{identifierType}/{identifier}/accountname`

or GET `/accounts/{Account Identifiers}/accountname`

### Account Holder Name UML Class Diagram

<mermaid>
classDiagram
    Account Holder Name "1" --* "1" Account
</mermaid>

### Account Holder Name Object Definition

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **name** | Reference | A collection of fields detailing the name of the primary account holder. | NA <br> O | [Name](/use-cases/p-2-p-transfers/supporting-objects.html#name-object) |  |

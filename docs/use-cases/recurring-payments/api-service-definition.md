---
pageClass: api-page has-code-panel
---

<side-code-panel/>

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

- **Reference** where the fields is a acollection/n array and/or is defined by another object.
- **Validation** applied to the field, including enumeration, field length and use of regular expressions to validate format.

::: tip
Please note that string fields have a default maximum length of 256 characters unless specified otherwise.
:::

### Transactions API

<div class="has-code-panel-block">

<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->

<code-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```php
POST .../transactions/type/merchantpay
---
Body Parameters:
{
  "amount":"5.00",
  "currency":"GBP",
  "debitParty":[
  {
    "key":"msisdn",
    "value":"+447911123456"
  }
  ],
  "creditParty":[
  {
    "key":"accountid",
    "value":"12"
  }
  ]
}
```
</code-block>

<code-block title="GET">
```php
GET .../transactions/36125b528237
```
</code-block>

<code-block title="PATCH">
```php
PATCH .../transactions/36125b528237
---
Body Parameters:
{
  "transactionStatus":"completed"
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">

<code-group>
<code-block title="POST">
```php
<?php 
require_once("mm-api.php");
try {
  $TransferId = 11111111;
  $Transfer = $Api->Transfers->Get($TransferId);  
} catch(MM-API\Libraries\ResponseException $e) {
  $e->GetErrorDetails() 
} catch(MM-API\Libraries\Exception $e) {
}  
?>
```
</code-block>

<code-block title="GET">
```php
<?php 
require_once("mm-api.php");
try {
  $TransferId = 22222222;
  $Transfer = $Api->Transfers->Get($TransferId);  
} catch(MM-API\Libraries\ResponseException $e) {
  $e->GetErrorDetails() 
} catch(MM-API\Libraries\Exception $e) {
}  
?>
```
</code-block>

<code-block title="PATCH">
```php
<?php 
require_once("mm-api.php");
try {
  $TransferId = 33333333;
  $Transfer = $Api->Transfers->Get($TransferId);  
} catch(MM-API\Libraries\ResponseException $e) {
  $e->GetErrorDetails() 
} catch(MM-API\Libraries\Exception $e) {
}  
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

</div>
</div>


The transaction APIs can be used by the service provider to take a payment from a payer’s account. The payer will have previously provided authorisation for payments to be taken as per an agreed [payment mandate](#debit-mandates-api).  

The following paths are permitted: 

- *POST /transactions/type/merchantpay*. To take a payment from a payer’s account.
- *POST /transactions/type/adjustment*. To issue a refund to the payer.
- *GET /transactions/{transactionReference}*. To view a payment.

Transactions fields that are not applicable for recurring payments have been omitted.

| **Operation** | **Path**  | **Description** |
|:-----------|:-------|:-------------|
| **Create** | POST */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction *type* be identified in the URL.  |
| **View** | GET */transactions/{transactionReference}* | To view a transaction. |
| **Update** | PATCH */transactions/{transactionReference}* | To update the transactionStatus of a transaction. |

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

#### Transaction Object Definition

| **Transaction Object** ||||||
|:-----|:-----|:------------|:--|:----------|:-----------|
| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
| **amount** | string | The transaction amount. | M <br> M |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the transaction amount. | M <br> M |  | Enumeration = [ISO Currency Codes]() |
| **type** | string | The harmonised Transaction Type (not required if passed in the URL) | M <br> M |  | Enumeration = [Transaction Types](#transaction-types) |
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
| **debitParty** | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;C <br> &#8592;&nbsp;C | [Account Identifiers](#account-identifiers) | debitParty must be supplied if creditParty is omitted. <br> If creditParty is supplied, then debitParty is optional. |
| **creditParty** | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;C <br> &#8592;&nbsp;C | [Account Identifiers](#account-identifiers) | creditParty must be supplied if debitParty is omitted. If debitParty is supplied, then creditParty is optional. |
| **senderKyc** | object | A collection of fields detailing the KYC of the transaction Sender. | &#8594;&nbsp;O <br> &#8592;&nbsp;O | [KYC](#kyc-information-object) |  |
| **recipientKyc** | object | A collection of fields detailed the KYC of the transaction Recipient. | &#8594;&nbsp;O <br> &#8592;&nbsp;O | [KYC](#kyc-information-object) |  |
| **originalTransactionReference** | string | This field indicates the transaction which is the subject of the reversal. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **servicingIdentity** | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | &#8594;&nbsp;O <br> &#8592;&nbsp;O  |  |  |
| **fees** | array | Allows the passing and/or returning of all fees pertaining to the transaction. | &#8594;&nbsp;O <br> &#8592;&nbsp;O | [Fees Object](#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional transaction fields. | &#8594;&nbsp;O <br> &#8592;&nbsp;O | [Metadata](#metadata-object) |  |

::: tip
To take a payment against a debit mandate, use *mandatereference* as the account identifier key.
:::


### Reversals API

The Reversals API is used to reverse, adjust, or refund a recurring payment. The originating transaction reference must be provided in the path in order to identify the payment to be reversed. For a partial reversal, the amount needs to be supplied. 

For viewing reversals, the [Transactions API](#transactions-api) should be used. For performing a reversal without the original transaction reference, use the [Transactions API](#transactions-api). 

The supported path is POST `/transactions/{originalTransactionReference}/reversals`.

#### Reversal UML Class Diagram

<mermaid>
classDiagram
    Credit Party Identifier "0..10" --* "" Reversal
    Debit Party Identifier "0..10" --* "" Reversal
    Fee "0..20" --* "1" Reversal
    Metadata "0..20" --* "1" Reversal
    Reversal --> Transaction
</mermaid>

#### Reversal Object Definition

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:---|:---|:---|:---|:---|:---|
| **transactionReference** | string | Unique reference for the transaction. This is returned in the response by API provider.  | NA <br> M |  |  |
| **requesting OrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transaction. | O <br> O |  |  |
| **originalTransactionReference** | string | For reversals and refunds, this field indicates the transaction which is the subject of the reversal. | NA <br> M |  |  |
| **creditParty** | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | O <br> O | [Account Identifiers](#account-identifiers-object) |  |
| **debitParty** | array | 	A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | O <br> O | [Account Identifiers](#account-identifiers-object) |  |
| **type** | string | The harmonised Transaction Type | M <br> M |  | Enumeration = [Transaction Types](#transaction-types) Note that only Reversals and Refunds (adjustments) are supported. |
| **subType** | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | O <br> O |  |  |
| **transactionStatus** | string | Indicates the status of the transaction as stored by the API provider. | NA <br> M |  |  |
| **amount** | string | The transaction Amount. | O <br> O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the transaction amount. | O <br> O |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **descriptionText** | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | O <br> O |  |  |
| **fees** | array | Allows the passing and/or returning of all fees pertaining to the transaction. | O <br> O | [Fees Object](#custom-data-object) |  |
| **geoCode** | string | Indicates the geographic location from where the transaction was initiated. | O <br> O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | O <br> O | [Requesting Organisation Object](#requesting-organisation-object) |  |
| **servicingIdentity** | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | O <br> O |  |  |
| **transactionReceipt** | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | NA <br> O |  |  |
| **creationDate** | date-time | Date and time when the transaction was created by the API Provider. | NA <br> O |  |  |
| **modificationDate** | date-time | Date and time when the transaction was modified by the API Provider. | NA <br> O |  |  |
| **requestDate** | date-time | The date and time of the transaction request as supplied by the client. | O <br> O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | O <br> O | [Custom Data Object](#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the transaction. | O <br> O | [Metadata](#metadata-object) |  |

### Accounts APIs

Using the mobile money APIs, service providers can:

- View payments for their account.
- View their account balance.

#### Identifying a Service Provider Account

Two methods are provided for identifying a service provider account, the single identifier method, and the multiple identifiers method.

##### Single Identifier Method

In the scenario where one identifier suffices to uniquely identify an account, the following path is to be used:
<br>

`/accounts/{identifierType}/{identifier}`.

##### Multiple Identifiers Method

Where a single identifier is not sufficient to identify an account, the following path is to be used:

`/accounts/{accountIdentifier1}@{value1}${accountIdentifier2}@{value2}${accountIdentifier3}@{value3}`.

The path uses a `$` delimiter to separate each identifier, up to a limit of three account identifiers. Each key/value is delimited by `@`.

The list of permitted account identifiers supported by the Mobile Money API can be found in the [Account Identifiers](#account-identifiers) section.

### Account Transactions API

A service provider should use this API to return a list of payments against their account. One of the following paths can be used:

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
| **transactionType** | string | N/A | Indicates the [type](#transaction-types) of the transactions to be returned. |

::: tip Note 1:
For a harmonised behavior, API Providers should make sure that the transactions are returned in descending date created order.
:::

::: tip Note 2:
HTTP response headers are returned with each response indicating the total number of records available (X-Records-Available-Count) and total number of records returned (X-Records-Returned-Count).
:::

#### Account Transaction UML Class Diagram

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

### Account Balances API

Using the Account Balances API, an FSP can check their balance. Permitted paths are: 

GET `/accounts/{identifierType}/{identifier}/balance`

or GET `/accounts/{Account Identifiers}/balance`

A ‘self’ version is also available where the calling API client is the FSP account holder. Path for the ‘self’ version is `/accounts/balance`.

#### Account Balance UML Class Diagram

<mermaid>
classDiagram
    Account Balance "1" --* "1" Account
</mermaid>

#### Account Balance Object Definition

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **accountStatus** | string | Indicates a harmonised representation of the account state. This will be shown as ‘available’ or ‘unavailable’. A state of ‘unavailable’ means that the account is in a state that does not allow posting of transactions. Unregistered indicates that although not available, a transaction created with the account identifier(s) will result in an unregistered voucher creation. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = available, unavailable, unregistered |
| **currentBalance** | string | The current outstanding balance on the account. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **availableBalance** | string | Indicates the balance that is able to be debited for an account. This balance is only provided on some API provider systems. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **reservedBalance** | string | Indicates the portion of the balance that is reserved, i.e. intended to be debited. This balance is only provided on some API provider systems. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **unClearedBalance** | string | Indicates the sum of uncleared funds in an account, i.e. those that are awaiting a credit confirmation. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency for all returned balances. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |


### Debit Mandates API

The Debit Mandates APIs allows a mobile money customer to provide prior approval for payments to be taken from their account by a requesting service providerpayee. If the amount limit field is not supplied, the mandate is considered open, i.e. the payee would will be able to take any amount. Mandates can be open-ended or can be constrained by a quantified number of payments for a given frequency.

Mandates can be created, changed, and inactivatedviewed and modified. The request to create a debit mandate will be typically initiated by the service provider (payee) but can also be requested by the customer (payer).

The permitted paths are as follows. Note that the payer account is identified in the path whereas the payee account is identified in the request body.

- **Creation**: `POST /accounts/{identifierType}/{identifier}/debitmandates` or `POST /accounts/{Account Identifiers}/debitmandates`.
- **Update**: To update a debit mandate, a HTTP PATCH is used. Format is: `PATCH /accounts/{identifierType}/{identifier}/debitmandates/{mandateReference}` or `PATCH /accounts/{Account Identifiers}/debitmandates/{mandateReference}`
- **Read**. `GET /accounts/{identifierType}/{identifier}/debitmandates/{mandateReference} `or `GET /accounts/{Account Identifiers}/debitmandates/{mandateReference}`.

Synchronous and asynchronous modes are supported for the POST and PATCH methods whereas only synchronous mode is supported for the GET method.

The following fields are modifiable: *mandateStatus, startDate, endDate, frequencyType, numberOfPayments*.

#### Debit Mandate UML Class Diagram

<mermaid>
classDiagram
    Payee Identifiers "0..10" --* "1" Debit Mandate
    Payer Identifiers "0..10" --* "1" Debit Mandate
    Debit Mandate "0..*" --* "1" Account
</mermaid>

#### Debit Mandate Object Definition

| **Debit Mandate Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **mandateReference** | string | Unique reference provided by the API Provider for the Debit Mandate. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **payee** | array | A series of key/value pairs that enable the payee to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;O <br> &#8592; O | [Account Identifiers](#account-identifier-object) |  |
| **mandateStatus** | string | Indicates the status of the Debit Mandate as held in the API Provider system. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = active, inactive |
| **startDate** | date | Date on which the mandate starts. If a frequencyType is specified, this will also be the date on which the first payment is to be taken. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **amountLimit** | string | The maximum amount that can be taken by the Payee on a payment request. | &#8594;&nbsp;O <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the amount limit. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **endDate** | date | Date on which the Debit Mandate ends. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **frequencyType** | string | Indicates the frequency for which payments will be taken from the payers account. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [Frequency](#frequency-type) |
| **numberOfPayments** | number | Indicates the number of consecutive payments that are to be taken. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594;&nbsp;O <br> &#8592; O | [Requesting Organisation](#requesting-organisation-object) |  |
| **creationDate** | date-time | Date and time when the Debit Mandate was created by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Date and time when the Debit Mandate was modified by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the debit mandate request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |




## Supporting Objects


### Account Identifiers Object

The Account Identifier object enables one or multiple identifiers to be provided to enable the recipient system to resolve the account/party.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Provides the account identifier type. | M <br> M |  | Enumeration = [Account Identifiers](#account-identifiers) |
| **value** | string | Provides the account identifier type value. | M <br> M |  |  |

### Metadata Object

The metadata object allows fields to be specified to convey administrative information regarding the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Identifies the type of additional fields. | M <br> M |  |  |
| **value** | string | Identifies the value of the additional field. | M <br> M |  |  |

### Custom Data Object

The custom data object allows additional fields to be specified for the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Identifies the type of additional fields. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |
| **value** | string | Identifies the value of the additional field. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |

### Fees Object

An object that enables fees that are differentiated by type to be provided and/or returned.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **feeType** | string | Defines the type of fee. | M <br> M |  |  |
| **feeAmount** | string | Defines the amount of the fee. | M <br> M |  | Please refer to API Fundamentals document for amount validation rules. |
| **feeCurrency** | string | Defines the currency for the given fee. | M <br> M |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |

### Requesting Organisation Object

An object that details the originating organisation of the request.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **requestingOrganisationIdentifierType** | string | Identifies the identifier type of the requesting organisation. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  | ‘swiftbic’, ‘lei’, ‘organisationid |
| **requestingOrganisationIdentifier** | string | Contains the requesting organisation identifier. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |






## Enumerations

### ISO Currency Codes

The three-character alphabetic code for currency as defined by ISO 4217 is to be used for all currency fields. The full list of codes is maintained by Swiss Interbank Clearing on behalf of the International Organisation for Standardisation. This list can be obtained via the following website - [http://www.currency-iso.org/en/home/tables/table-a1.html](http://www.currency-iso.org/en/home/tables/table-a1.html).


### Transaction Types

| **Code** | **Description** |
|:--|:--|
| **merchantpay** | Purchases of goods and/or services from shops (payer present) or online (payer not present). |
| **adjustment** | General adjustments to an account via an adjustment transaction (e.g. refunds). |
| **reversal** | Reversal of a prior transaction to return funds to the payer. |


### Account Identifiers

The Account Identifier enumeration lists all possible means to identify a target account. Identifiers can be combined if necessary, to provide a unique identifier for the target account.

| **Code** | **Short Description** | **Type** | **Description** |
|:--|:--|:--|:--|
| **accountcategory** | Account Category | string | Can be used to identify the sources of funds category where there are multiple accounts (wallets) held against an account holder. |
| **bankaccountno** | Bank Account Number | string | Financial institution account number that is typically known by the account holder. |
| **accountrank** | Account Rank | string | Is used to identify the rank of the source of funds where there are multiple accounts (wallets) held against an account holder. |
| **identityalias** | Identity Alias | string | An alias for the identity, e.g. short code for an agent till. |
| **iban** | IBAN | string | Internationally agreed system of identifying bank accounts across national borders to facilitate the communication and processing of cross border transactions. Can contain up to 34 alphanumeric characters. |
| **accountid** | Account Holder Identity | string | Identifier for the account holder. |
| **msisdn** | MSISDN | string | Must contain between 6 and 15 consecutive digits <br> First character can contain a ‘+’ or digit <br> Can contain spaces. |
| **swiftbic** | SWIFTBIC | string | A bank identifier code (BIC) is a unique identifier for a specific financial institution. A BIC is composed of a 4-character bank code, a 2-character country code, a 2-character location code and an optional 3-character branch code. BICs are used by financial institutions for letters of credit, payments and securities transactions and other business messages between banks. Please refer to [ISO 9362](https://www.iso.org/standard/60390.html) for further information. |
| **sortcode** | Bank Sort Code | string | Sort code to identify the financial institution holding the account. |
| **organisationid** | Organisation Account Identifier | string | Used to identify the organisation for which a payment is to be made. |
| **username** | Username | string | Used to identify target account via an associated username. |
| **walletid** | Wallet Identifier | string | A means to identify a mobile money wallet, particularly where multiple wallets can be held against an MSISDN. typically used in conjunction with MSISDN or identity alias to identify a particular wallet. |
| **linkref** | Link Reference | string | A means to uniquely identify an account via an account to account link. E.g. wallet account link to bank account. |
| **consumerno** | Consumer Number | String | Identifies the consumer associated with the account. |
| **serviceprovider** | Service Provider | String | Provides a reference for a Service Provider. |
| **storeid** | Store ID | String | Identifies the transacting store / retail outlet. |
| **bankname** | Bank Name | String | Name of the bank. |
| **bankaccounttitle** | Bank Account Title | String | The title of the bank account. |
| **emailaddress** | Email Address | String | emailaddress of the party. |
| **mandatereference** | Debit Mandate Reference | String | A means to identify an account via a debit mandate reference. |

### Frequency Type

When requesting a debit mandate, the API client is able to specify the frequency of which the payment should be taken. Valid values are defined in the table below.

|**Frequency Type**|**Description**|
|:--------|:--------|
| **weekly** | Payment will be taken weekly. |
| **fortnight** | Payment will be taken every two weeks. |
| **monthspecificdate** | Payment to be taken on a specific date every month. |
| **twomonths** | Payment to be taken every two months. |
| **threemonths** | Payment to be taken every three months. |
| **fourmonths** | Payment to be taken every four months. |
| **sixmonths** | Payment to be taken every six months. |
| **yearly** | Payment to be taken yearly. |
| **lastdaymonth** | Payment to be taken on the last calendar day of the month. |
| **lastdaymonthworking** | Payment to be taken on the last working day of the month according to working days as per the resident country of the account. |
| **lastmonday** | Payment to be taken on the last Monday of the month. |
| **lasttuesday** | Payment to be taken on the last Tuesday of the month. |
| **lastwednesday** | Payment to be taken on the last Wednesday of the month. |
| **lastthursday** | Payment to be taken on the last Thursday of the month. |
| **lastfriday** | Payment to be taken on the last Friday of the month. |
| **lastsaturday** | Payment to be taken on the last Saturday of the month. |
| **lastsunday** | Payment to be taken on the last Sunday of the month. |
| **specificdaymonthly** | Payment to be taken on a specific day of the month. |
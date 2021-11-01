---
pageClass: api-page has-code-panel
title: International Transfers - API Service Definition
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

International Transfers can be created and viewed using transactions APIs.

The following paths are permitted:

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json{1}
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
```json{1}
GET .../transactions/36125b528237
```
</code-block>

<code-block title="PATCH">
```json{1}
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
<code-group title="JavaScript">
<code-block title="POST">
```javascript
//some JavaScript code here 
```
</code-block>

<code-block title="GET">
```javascript
//some JavaScript code here 
```
</code-block>

<code-block title="PATCH">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="POST">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

<code-block title="GET">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

<code-block title="PATCH">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Operation** | **Path**  | **Description** |
|:-----------|:-------|:-------------|
| **Create** | POST */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL.  |
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

**Figure 2‑1 Transaction UML Class Diagram**

#### Transaction Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Transaction Object">
```json
{
  "transactionReference": "dd82cc6a-159a-4ddf-bea7-23bae38e72c5",
  "requestingOrganisationTransactionReference": "c66e56ed-a5c2-4080-b34d-ad84d04065d4",
  "originalTransactionReference": "a7d9e363-46ed-48be-a0e0-1d2d2971b86c",
  "creditParty": [
    {
      "key":"accountid",
      "value":"12"
    }
  ],
  "debitParty": [
    {
      "key":"msisdn",
      "value":"+447911123456"
    }
  ],
  "type": "merchantpay",
  "subType": "my custom sub type",
  "transactionStatus": "completed",
  "amount": "123.45",
  "currency": "GBP",
  "descriptionText": "Client's transaction description",
  "fees": [
    {
      "feeType": "addition",
      "feeAmount": "2",
      "feeCurrency": "GBP"
    }
  ],
  "geoCode": "GB",
  "internationalTransferInformation": {
    "originCountry": "GBP"
  },
  "oneTimeCode": "12345",
  "recipientKyc": {
    "nationality": "GBP",
    "emailAddress": "example@mail.com",
    "gender": "m"
  },
  "senderKyc": {
    "nationality": "GBP",
    "emailAddress": "email@dot.com",
    "gender": "f"
  },
  "requestingOrganisation": {
    "requestingOrganisationIdentifierType": "organisationid",
    "requestingOrganisationIdentifier": "987654321"
  },
  "servicingIdentity": "0123-456-789",
  "transactionReceipt": "f2d184b3-ae08-4d99-9e67-8d7490e0103e",
  "creationDate": "2017-07-21T17:32:28Z",
  "modificationDate": "2017-07-21T17:32:28Z",
  "requestDate": "2017-07-21T17:32:28Z",
  "customData": {
    "customKey01": "customValue01",
    "customKey02": "customValue02"
  },
  "metadata": [
    {
      "customKey01": "customValue01",
      "customKey02": "customValue02"
    },
  ]
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Transaction Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Transaction Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Transaction Object** ||||||
|:-----|:-----|:------------|:--|:----------|:-----------|
| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
| **transactionReference** | string | Unique reference for the transaction. This is returned in the response by API provider. | &#8594;&nbsp;NA <br> &#8592;&nbsp;M |  |  |
| **requestingOrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transaction. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **originalTransactionReference** | string | For reversals and refunds, this field indicates the transaction which is the subject of the reversal. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **creditParty** | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;C <br> &#8592;&nbsp;C | [Account Identifiers](#account-identifiers) | creditParty must be supplied if debitParty is omitted. If debitParty is supplied, then creditParty is optional. |
| **debitParty** | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;C <br> &#8592;&nbsp;C | [Account Identifiers](#account-identifiers) | debitParty must be supplied if creditParty is omitted. <br> If creditParty is supplied, then debitParty is optional. |
| **type** | string | The harmonised Transaction Type (not required if passed in the URL) | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [Transaction Types](#transaction-types) |
| **subType** | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **transactionStatus** | string | Indicates the status of the transaction as stored by the API provider. | &#8594;&nbsp;NA <br> &#8592;&nbsp;M |  |  |
| **amount** | string | The transaction amount. | &#8594;&nbsp;M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the transaction amount. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **descriptionText** | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **fees** | array | Allows the passing and/or returning of all fees pertaining to the transaction. | &#8594;&nbsp;O <br> &#8592;&nbsp;O | [Fees Object](#custom-data-object) |  |
| **geoCode** | string | Indicates the geographic location from where the transaction was initiated. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **oneTimeCode** | string | A one-time code that can be supplied in the request or can be generated in the response depending upon the use case. An authorisation code can be supplied in this field for requests that have been pre-authorised. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594;&nbsp;O <br> &#8592; O | [Requesting Organisation Object](#requesting-organisation-object) |  |
| **servicingIdentity** | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | &#8594;&nbsp;O <br> &#8592;&nbsp;O  |  |  |
| **transactionReceipt** | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | &#8594;&nbsp;NA <br> &#8592;&nbsp;O |  |  |
| **creationDate** | date-time | Date and time when the transaction was created by the API Provider | &#8594;&nbsp;NA <br> &#8592;&nbsp;O |  |  |
| **modificationDate** | date-time | Date and time when the transaction was modified by the API Provider | &#8594;&nbsp;NA <br> &#8592;&nbsp;O |  |  |
| **requestDate** | date-time | The creation date and time of the transaction as supplied by the client. | &#8594;&nbsp;O <br> &#8592;&nbsp;O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional transaction fields. | &#8594;&nbsp;O <br> &#8592;&nbsp;O | [Metadata](#metadata-object) |  |

### Reversals API

The Reversals API is used to reverse an international transfer. The originating transaction reference must be provided in the path in order to identify the payment to be reversed. For a partial reversal, the amount needs to be supplied.

For viewing reversals, the [Transactions API](#transactions-api) should be used. For performing a reversal without the original transaction reference, use the [Transactions API](#transactions-api). 

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->

<code-main-group>
<code-block title="View">
<code-group>
<code-block title="POST">
```json{1}
POST .../transactions/Place Reference of Txn to be Reversed here/reversals
---
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "X-Callback-URL": ["Please enter your callback URL here"],
   "Content-Type": ["application/json"]
}
---
Body parameters:
{
  "type": "reversal"
}
```
</code-block>
</code-group>
</code-block>
<code-block title="Code">
<code-group title="JavaScript">
<code-block title="POST">

```javascript
//some JavaScript code here
```

</code-block>

</code-group>
<code-group title="PHP">
<code-block title="POST">

```php
<?php
  //some PHP code here
?>
```

</code-block>

</code-group>
</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

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

**Figure 2‑2 Reversal UML Class Diagram**

#### Reversal Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Reversal Object">
```json
{
  "transactionReference": "dd82cc6a-159a-4ddf-bea7-23bae38e72c5",
  "requestingOrganisationTransactionReference": "c66e56ed-a5c2-4080-b34d-ad84d04065d4",
  "originalTransactionReference": "a7d9e363-46ed-48be-a0e0-1d2d2971b86c",
  "creditParty": [
    {
      "key":"accountid",
      "value":"12"
    }
  ],
  "debitParty": [
    {
      "key":"msisdn",
      "value":"+447911123456"
    }
  ],
  "type": "merchantpay",
  "subType": "my custom sub type",
  "transactionStatus": "completed",
  "amount": "123.45",
  "currency": "GBP",
  "descriptionText": "Client's transaction description",
  "fees": [
    {
      "feeType": "addition",
      "feeAmount": "2",
      "feeCurrency": "GBP"
    }
  ],
  "geoCode": "GB",
  "internationalTransferInformation": {
    "originCountry": "GBP"
  },
  "oneTimeCode": "12345",
  "recipientKyc": {
    "nationality": "GBP",
    "emailAddress": "example@mail.com",
    "gender": "m"
  },
  "senderKyc": {
    "nationality": "GBP",
    "emailAddress": "email@dot.com",
    "gender": "f"
  },
  "requestingOrganisation": {
    "requestingOrganisationIdentifierType": "organisationid",
    "requestingOrganisationIdentifier": "987654321"
  },
  "servicingIdentity": "0123-456-789",
  "transactionReceipt": "f2d184b3-ae08-4d99-9e67-8d7490e0103e",
  "creationDate": "2017-07-21T17:32:28Z",
  "modificationDate": "2017-07-21T17:32:28Z",
  "requestDate": "2017-07-21T17:32:28Z",
  "customData": {
    "customKey01": "customValue01",
    "customKey02": "customValue02"
  },
  "metadata": [
    {
      "customKey01": "customValue01",
      "customKey02": "customValue02"
    },
  ]
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Reversal Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Reversal Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:---|:---|:---|:---|:---|:---|
| **transactionReference** | string | Unique reference for the transaction. This is returned in the response by API provider.  | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **requesting OrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transaction. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **originalTransactionReference** | string | For reversals and refunds, this field indicates the transaction which is the subject of the reversal. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **creditParty** | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;O <br> &#8592; O | [Account Identifiers](#account-identifiers-object) |  |
| **debitParty** | array | 	A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;O <br> &#8592; O | [Account Identifiers](#account-identifiers-object) |  |
| **type** | string | The harmonised Transaction Type | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [Transaction Types](#transaction-types) Note that only Reversals and Refunds (adjustments) are supported. |
| **subType** | string | A non-harmonised sub-classification of the type of transaction. Values are not fixed, and usage will vary according to Provider. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **transactionStatus** | string | Indicates the status of the transaction as stored by the API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **amount** | string | The transaction Amount. | &#8594;&nbsp;O <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the transaction amount. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **descriptionText** | string | Free format text description of the transaction provided by the client. This can be provided as a reference for the receiver on a notification SMS and on an account statement. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **fees** | array | Allows the passing and/or returning of all fees pertaining to the transaction. | &#8594;&nbsp;O <br> &#8592; O | [Fees Object](#custom-data-object) |  |
| **geoCode** | string | Indicates the geographic location from where the transaction was initiated. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594;&nbsp;O <br> &#8592; O | [Requesting Organisation Object](#requesting-organisation-object) |  |
| **servicingIdentity** | string | The field is used to identify the servicing identity for transactions, e.g. till, POS ID, assistant ID. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **transactionReceipt** | string | Transaction receipt number as notified to the parties. This may differ from the Transaction Reference. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **creationDate** | date-time | Date and time when the transaction was created by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Date and time when the transaction was modified by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the transaction request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the transaction. | &#8594;&nbsp;O <br> &#8592; O | [Metadata](#metadata-object) |  |

### Accounts APIs

Using account APIs, a sending FSP can:

- View transfers for their account.
- View their account balance.

#### Identifying an FSP Account

Two methods are provided for identifying an FSP account, the single identifier method, and the multiple identifiers method.

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

An FSP should use this API to return a list of payments against their account. One of the following paths can be used:

GET `/accounts/{identifierType}/{identifier}/transactions`

or GET `/accounts/{Account Identifiers}/transactions`

To filter the number of records returned, the following query strings can be used:

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Account Transactions filters">
```json
{
  "limit": 50,
  "offset": 10,
  "fromDateTime": "2017-07-21T17:32:28Z",
  "toDateTime": "2017-07-21T17:32:28Z",
  "transactionStatus": "completed",
  "transactionType": "merchantpay"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Account Transactions filters">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Account Transactions filters">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Parameter** | **Type** | **Format** | **Description** |
|:--|:--|:--|:--|
| **limit** | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| **offset** | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| **fromDateTime** | string | date-time | Indicates the minimum date creationDate for which records should be returned. |
| **toDateTime** | string | date-time | Indicates the maximum date creationDate for which records should be returned. |
| **transactionStatus** | string | N/A | Indicates the status of the transactions to be returned. |
| **transactionType** | string | N/A | Indicates the [type](#transaction-types) of the transactions to be returned. |

::: tip Note 1:
For a harmonised behavior, API Providers should make sure that the transactions are returned in descending date created order.
:::

::: tip Note 2:
HTTP response headers are returned with each response indicating the total number of records available (`X-Records-Available-Count`) and total number of records returned (`X-Records-Returned-Count`).
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

**Figure 2‑3 Account Transaction UML Class Diagram**

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

**Figure 2‑4 Account Balance UML Class Diagram**

#### Account Balance Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Account Balance Object">
```json
{
  "accountStatus": "available",
  "currentBalance": "123.45",
  "availableBalance": "100.00",
  "reservedBalance": "20.45",
  "unClearedBalance": "3.00",
  "currency": "GBP"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Account Balance Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Account Balance Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **accountStatus** | string | Indicates a harmonised representation of the account state. This will be shown as ‘available’ or ‘unavailable’. A state of ‘unavailable’ means that the account is in a state that does not allow posting of transactions. Unregistered indicates that although not available, a transaction created with the account identifier(s) will result in an unregistered voucher creation. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = available, unavailable, unregistered |
| **currentBalance** | string | The current outstanding balance on the account. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **availableBalance** | string | Indicates the balance that is able to be debited for an account. This balance is only provided on some API provider systems. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **reservedBalance** | string | Indicates the portion of the balance that is reserved, i.e. intended to be debited. This balance is only provided on some API provider systems. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **unClearedBalance** | string | Indicates the sum of uncleared funds in an account, i.e. those that are awaiting a credit confirmation. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency for all returned balances. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |


### Quotations API

The quotations APIs are used by the sending FSP to obtain an international transfer quotation from the receiving FSP. The generated quotation can include any fees that will be levied and will include the forex rate.

Where a sending FSP is connecting via a hub, the hub can generate and return a quotation containing multiple quotes for multiple potential receiving FSPs.

The following paths are permitted:

- **Creation** of a quotation: `POST /quotations`
- **View** a quotation: `GET /quotations/{Quotation Reference}`

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

**Figure 2‑5 Quotation UML Class Diagram**

#### Quotation Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Quotation Object">
```json
{
  "quotationReference": "dd82cc6a-159a-4ddf-bea7-23bae38e72c5",
  "creditParty": [
    {
      "key":"accountid",
      "value":"12"
    }
  ],
  "debitParty": [
    {
      "key":"msisdn",
      "value":"+447911123456"
    }
  ],
  "type": "merchantpay",
  "subType": "my custom sub type",
  "quotationStatus": "completed",
  "requestAmount": "123.45",
  "requestCurrency": "GBP",
  "availableDeliveryMethod": "directtoaccount",
  "chosenDeliveryMethod": "personaldelivery",
  "originCountry": "GB",
  "receivingCountry": "IE",
  "quotes": [
    {
      "quoteId": "123456789",
      "receivingAmount": "123.45",
      "receivingCurrency": "GBP",
      "sendingAmount": "123.45",
      "sendingCurrency": "GBP"
    }
  ],
  "recipientKyc": {
    "nationality": "GBP",
    "emailAddress": "example@mail.com",
    "gender": "m"
  },
  "senderKyc": {
    "nationality": "GBP",
    "emailAddress": "email@dot.com",
    "gender": "f"
  },
  "recipientBlockingReason": "No supported currency...",
  "senderBlockingReason": "Not enough funds...",
  "requestingOrganisation": {
    "requestingOrganisationIdentifierType": "organisationid",
    "requestingOrganisationIdentifier": "987654321"
  },
  "sendingServiceProviderCountry": "GB",
  "creationDate": "2017-07-21T17:32:28Z",
  "modificationDate": "2017-07-21T17:32:28Z",
  "requestDate": "2017-07-21T17:32:28Z",
  "customData": {
    "customKey01": "customValue01",
    "customKey02": "customValue02"
  },
  "metadata": [
    {
      "customKey01": "customValue01",
      "customKey02": "customValue02"
    },
  ]
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Quotation Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Quotation Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Quotation Object Definition** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **quotationReference** | string | Unique reference for the quotation as provided by the API Provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **creditParty** | array | A series of key/value pairs that enable the credit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;M <br> &#8592; M | [Account Identifiers](#account-identifier-object) |  |
| **debitParty** | array | A collection of key/value pairs that enable the debit party to be identified. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;M <br> &#8592; M | [Account Identifiers](#account-identifier-object) |  |
| **type** | string | The transaction type that the quotation has been requested for. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [Transaction Types](#transaction-type-object) |
| **subtype** | string | The transaction sub-type that the quotation has been requested for. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **quotationStatus** | string | Indicates the creation state of the quotation. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = pending, rejected, completed |
| **requestAmount** | string | Requested Quotation amount. | &#8594;&nbsp;M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **requestCurrency** | string | Currency of the requested quotation amount. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **availableDeliveryMethod** | string | Delivery Method that is possible for the intended recipient. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [Delivery Method](#delivery-method-types) |
| **chosenDeliveryMethod** | string | The delivery method chosen by the sending end user as the specific delivery method to be used in the quotes received. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [Delivery Method](#delivery-method-types) |
| **originCountry** | string | The originating country of the quotation request, i.e. the country where the request was initiated. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **receivingCountry** | string | Destination country of the quotation request, i.e. the country that the sender wishes to send to. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **quotes** | array | A collection of quotes. A quote can be received from a single receiving financial service provider or from multiple providers. | &#8594;&nbsp;NA <br> &#8592; O | [Quotes](#quote-object) |  |
| **recipientKyc** | object | A collection of fields detailing the KYC of the transaction recipient, typically used for International Transfers. | &#8594;&nbsp;O <br> &#8592; O | [KYC Information](#kyc-information-object) |  |
| **senderKyc** | object | A collection of fields detailing the KYC of the transaction sender, typically used for International Transfers. | &#8594;&nbsp;O <br> &#8592; O | [KYC Information](#kyc-information-object) |  |
| **recipientBlockingReason** | string | The reason for blocking the quotation, based on AML checks on the recipient. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **senderBlockingReason** | string | The reason for blocking the quotation, based on AML checks on the sender. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594;&nbsp;NA <br> &#8592; O | [Requesting Organisation](#requesting-organisation-object) |  |
| **sendingServiceProviderCountry** | string | The country of the sending service provider that holds the account of the sender. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **creationDate** | date-time | Date and time when the quotation was created by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Date and time when the quotation was modified by the API Provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the quotation request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the quotation. | &#8594;&nbsp;O <br> &#8592; O | [Metadata](#metadata-object) |  |



## Supporting Objects

### International Transfer Information Object

The International Transfer Information object contains details that are specific to international money transfers.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="International Transfer Information Object">
```json
{
  "quotationReference": "dd82cc6a-159a-4ddf-bea7-23bae38e72c5",
  "quoteId": "123456789",
  "originCountry": "GB",
  "deliveryMethod": "personaldelivery",
  "receivingCountry": "IE",
  "relationshipSender": "Household",
  "recipientBlockingReason": "ID card is expired...",
  "senderBlockingReason": "Address must be provided...",
  "remittancePurpose": "Commission...",
  "sendingServiceProviderCountry": "GB"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="International Transfer Information Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="International Transfer Information Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **International Transfer Information Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **quotationReference** | string | Reference for the quotation that was provided to the sender. (refer to [Quotations](#quotations-api) API for more information). | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **quoteId** | string | The specific quote associated with the quotation (refer to [Quotes](#quote-object) object for more information). | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **originCountry** | string | The originating country of the transaction, i.e. the country where the transaction was initiated. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Country Codes](#iso-country-codes). |
| **deliveryMethod** | string | The recipient delivery method as chosen by the sender. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [Delivery Method Types](#delivery-method-types) |
| **receivingCountry** | string | Destination country of the international transfer. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **relationshipSender** | string | Indicates the relationship (if any) between the sender and the receiver. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **recipientBlockingReason** | string | The reason for blocking the transaction, based on AML checks on the recipient. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **senderBlockingReason** | string | The reason for blocking the transaction, based on AML checks on the sender. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **remittancePurpose** | string | field providing a description of the reason for the international transfer. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| ***sendingServiceProviderCountry*** | string | The country of the sending service provider that holds the account of the sender. | &#8594;&nbsp;O <br> &#8592; O |  |  |

### KYC Information Object

KYC refers to ‘Know your Customer’. The KYC object contains a number of fields that enable the identity of subject to be verified. KYC is typically provided for international transfers for the sending identity and the receiving identity. There are no mandatory KYC object fields.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="KYC Information Object">
```json
{
  "birthCountry": "GB",
  "dateOfBirth": "2017-07-21T17:32:28Z",
  "contactPhone": "+1234567890",
  "emailAddress": "example@mail.com",
  "employerName": "Employer LLC",
  "gender": "m",
  "idDocument": [
    {
      "idType": "passport",
      "idNumber": "TEST123456"
    }
  ],
  "nationality": "GB",
  "postalAddress": {
    "addressLine1": "33 Brow Rd",
    "addressLine2": "Unit 200",
    "addressLine3": "Paddock",
    "city": "Huddersfield",
    "stateProvince": "West Yorkshire",
    "postalCode": "HD1 4TP",
    "country": "GB"
  },
  "occupation": "Manager",
  "subjectName": {
    "title": "Mr",
    "firstName": "John",
    "middleName": "Alan",
    "lastName": "Doe",
    "fullName": "John Alan Doe",
    "nativeName": "John Doe"
  }
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="KYC Information Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="KYC Information Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **birthCountry** | string | The country of birth of the KYC subject. | O <br> O |  | Enumeration = [ISO Country Codes](#iso-country-codes) |
| **dateOfBirth** | date | Birth date of the KYC subject. | O <br> O |  |  |
| **contactPhone** | string | Contact phone number (mobile or landline) of the KYC subject. | O <br> O |  | Must contain between 6 and 15 consecutive digits <br> First character can contain a ‘+’ or digit <br> Can contain spaces. |
| **emailAddress** | string | Email address of the KYC subject. | O <br> O |  |  |
| **employerName** | string | Employer name of the KYC subject. | O <br> O |  |  |
| **gender** | string | Gender of the KYC Object. | O <br> O |  | Length=1, Enumeration = (m)ale, (f)emale, (u)nspecified |
| **idDocument** | array | An array of fields containing the forms of identification that are associated with the subject. | O <br> O | [Id Document](#id-document-object) | |
| **nationality** | string | Nationality of the KYC subject. | O <br> O |  | Enumeration = [ISO Country Codes](#iso-country-codes) |
| **postalAddress** | object | A collection of fields that details the postal address of the KYC subject. | O <br> O | [Address](#address-object) |  |
| **occupation** | string | Occupation of the KYC subject. | O <br> O |  |  |

### Name Object

The name object identifies the name details for the subject identity.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Name Object">
```json
{
  "title": "Mr",
  "firstName": "John",
  "middleName": "Alan",
  "lastName": "Doe",
  "fullName": "John Alan Doe",
  "nativeName": "John Doe"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Name Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Name Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **title** | string | The given title of the KYC subject, e.g. Mr, Mrs, Dr. | O <br> O |  |  |
| **firstName** | string | First name (also referred to as given name) of the KYC subject. | O <br> O |  |  |
| **middleName** | string | Middle Name of the KYC subject. | O <br> O |  |  |
| **lastName** | string | Surname (also referred to as last or family name) of the KYC subject. | O <br> O |  |  |
| **fullName** | string | The full name of the KYC subject. | O <br> O |  |  |
| **nativeName** | string | The full name expressed as in the native language. | O <br> O |  |  |

### Id Document Object

As part of KYC information, identification documentation is normally required. The Id Document Object enables documents pertaining to a subject’s identity to be described.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Id Document Object">
```json
{
  "idType": "passport",
  "idNumber": "TEST123456",
  "issueDate": "2017-07-21T17:32:28Z",
  "expiryDate ": "2017-07-21T17:32:28Z",
  "issuer": "123456789",
  "issuerPlace": "London",
  "issuerCountry": "GB",
  "otherIdDescription": "Other ID description..."
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Id Document Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Id Document Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->


| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **idType** | string | Indicates the type of identification for the KYC subject, e.g. passport, driving licence etc. | M <br> M |  | Enumeration = [ID Types](#id-types) |
| **idNumber** | string | Reference pertaining to the type of identification for the KYC subject. | O <br> O |  |  |
| **issueDate**| date | Date of issue for the identification document. | O <br> O |  |  |
| **expiryDate** | date | Date of expiry for the identification document. | O <br> O |  |  |
| **issuer** | string | Indicates the organisation/government entity that issued the ID document. | O <br> O |  |  |
| **issuerPlace** | string | Place of issue for the identification type. | O <br> O |  |  |
| **issuerCountry** | string | Country where the identification type was issued.  | O <br> O |  | Enumeration = [ISO Country Codes](#iso-country-codes) |
| **otherIdDescription** | string | Where an ID Type of ‘otherid’ is specified, a description of the type of identification can be provided in this field. | O <br> O |  |  |

### Address Object

The address object holds the postal address of the subject. Due to variability of address information in a number of mobile money markets, only country is mandatory.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Address Object">
```json
{
  "addressLine1": "33 Brow Rd",
  "addressLine2": "Unit 200",
  "addressLine3": "Paddock",
  "city": "Huddersfield",
  "stateProvince": "West Yorkshire",
  "postalCode": "HD1 4TP",
  "country": "GB"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Address Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Address Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **addressLine1** | string | First line of the address. | O <br> O |  |  |
| **addressLine2** | string | Second line of the address. | O <br> O |  |  |
| **addressLine3** | string | Third line of the address. | O <br> O |  |  |
| **city** | string | City/Town. | O <br> O |  |  |
| **stateProvince** | string | State or Province. | O <br> O |  |  |
| **postalCode** | string | Postal Code. | O <br> O |  |  |
| **country** | string | Country | M <br> M |  | Enumeration = [ISO Country Codes](#iso-country-codes) |

### Account Identifiers Object

The Account Identifier object enables one or multiple identifiers to be provided to enable the recipient system to resolve the account/party.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Account Identifier Object">
```json
{
  "accountcategory":"default",
  "bankaccountno":"1234567890",
  "accountrank":"high",
  "identityalias":"12345",
  "iban":"GB24BKEN10000031510604",
  "accountid":"31510604",
  "msisdn":"+1234567890",
  "swiftbic":"BARCGB22",
  "sortcode":"100000"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Account Identifier Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Account Identifier Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Provides the account identifier type. | M <br> M |  | Enumeration = [Account Identifiers](#account-identifiers) |
| **value** | string | Provides the account identifier type value. | M <br> M |  |  |

### Quote Object

Quotations can consist of multiple quotes. The fields for a quote are defined in the object.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Quote Object">
```json
{
  "quoteId": "123456789",
  "receivingAmount": "123.45",
  "receivingCurrency": "GBP",
  "sendingAmount": "123.45",
  "sendingCurrency": "GBP",
  "deliveryMethod": "personaldelivery",
  "fees": [
    {
      "feeType": "addition",
      "feeAmount": "2",
      "feeCurrency": "GBP"
    }
  ],
  "fxRate": "1.0000000000",
  "quoteExpiryTime": "2017-07-21T17:32:28Z",
  "receivingServiceProvider": "Receiving FSP"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Quote Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Quote Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Quote Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **quoteId** | string | The unique ID for this quote. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **receivingAmount** | string | The total amount as it will be received by the receiving end user. | &#8594;&nbsp;NA <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **receivingCurrency** | string | The currency of the quote. | &#8594;&nbsp;NA <br> &#8592; M |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **sendingAmount** | string | Requested quotation amount as supplied by the sender. | &#8594;&nbsp;NA <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **sendingCurrency** | string | Currency of the requested quotation amount. | &#8594;&nbsp;NA <br> &#8592; M |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **deliveryMethod** | string | The delivery method that is applicable to the quotation. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [Delivery Method](#delivery-method-types) |
| **fees** | array | Returns all fees that are applicable to the quote. | &#8594;&nbsp;NA <br> &#8592; O | [Fees Object](#fees-object) |  |
| **fxRate** | string | The conversion rate applicable between the sending and the receiving currency for the requested transaction. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. Note 10 decimal places supported. |
| **quoteExpiryTime** | date-time | The timestamp when the quote will expire. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **receivingServiceProvider** | string | The name of the receiving service provider, i.e. the provider that the quote is associated with. | &#8594;&nbsp;NA <br> &#8592; O |  |  |


### Metadata Object

The metadata object allows fields to be specified to convey administrative information regarding the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Metadata Object">
```json
{
  "customKey01": "customValue01",
  "customKey02": "customValue02"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Metadata Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Metadata Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Identifies the type of additional fields. | M <br> M |  |  |
| **value** | string | Identifies the value of the additional field. | M <br> M |  |  |

### Custom Data Object

The custom data object allows additional fields to be specified for the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Custom Data Object">
```json
{
  "customKey01": "customValue01",
  "customKey02": "customValue02"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Custom Data Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Custom Data Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Identifies the type of additional fields. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |
| **value** | string | Identifies the value of the additional field. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |

### Fees Object

An object that enables fees that are differentiated by type to be provided and/or returned.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Fees Object">
```json
{
  "feeType": "addition",
  "feeAmount": "2",
  "feeCurrency": "GBP"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Fees Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Fees Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **feeType** | string | Defines the type of fee. | M <br> M |  |  |
| **feeAmount** | string | Defines the amount of the fee. | M <br> M |  | Please refer to API Fundamentals document for amount validation rules. |
| **feeCurrency** | string | Defines the currency for the given fee. | M <br> M |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |

### Requesting Organisation Object

An object that details the originating organisation of the request.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Requesting Organisation Object">
```json
{
  "requestingOrganisationIdentifierType": "organisationid",
  "requestingOrganisationIdentifier": "987654321"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Requesting Organisation Object">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Requesting Organisation Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **requestingOrganisationIdentifierType** | string | Identifies the identifier type of the requesting organisation. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  | ‘swiftbic’, ‘lei’, ‘organisationid |
| **requestingOrganisationIdentifier** | string | Contains the requesting organisation identifier. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |



## Enumerations

### ISO Currency Codes

The three-character alphabetic code for currency as defined by ISO 4217 is to be used for all currency fields. The full list of codes is maintained by Swiss Interbank Clearing on behalf of the International Organisation for Standardisation. This list can be obtained via the following website - [http://www.currency-iso.org/en/home/tables/table-a1.html](http://www.currency-iso.org/en/home/tables/table-a1.html).


### Transaction Types

A transaction type is used to classify the nature of a transaction.

| **Code** | **Description** |
|:--|:--|
| **inttransfer** | Transfer of funds to a recipient in another country, either directly to/from a mobile wallet or via an international money transfer provider. |
| **reversal** | Reversal of a prior transaction to return funds to the payer. |

### ID Types

The ID Types enumeration contains accepted identification types. Due to the wide international variation in accepted types of identification, a catch-all type of ‘otherid’ is included.

| **ID Type** | **Description** |
|:--|:--|
| **passport** | Payment of bill from a business for goods and/or services. |
| **nationalregistration** | National Registration Number. |
| **othered** | Catch-all for IDs not on the list. |
| **drivinglicence** | Driving Licence Number. |
| **socialsecurity** | Social Security Number. |
| **alienregistration** | Alien Registration ID. |
| **nationalidcard** | National Identity Card. |
| **employer** | Employers Identification. |
| **taxid** | Tax Identification Number. |
| **seniorcitizenscard** | Senior Citizens ID Card. |
| **marriagecertificate** | Marriage Certificate. |
| **birthcertificate** | Birth Certificate. |
| **healthcard** | Health Card. |
| **votersid** | Voters Identification. |
| **villageelderletter** | Letter of confirmation from village elder. |
| **pancard** | Credit/debit card number (Primary Account Number). |
| **officialletter** | Official letter confirming identity. |

### Account Identifiers

The Account Identifier enumeration lists all possible means to identify a target account. Identifiers can be combined if necessary, to provide a unique identifier for the target account.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Account Identifiers">
```json
{
  "accountcategory":"default",
  "bankaccountno":"1234567890",
  "accountrank":"high",
  "identityalias":"12345",
  "iban":"GB24BKEN10000031510604",
  "accountid":"31510604",
  "msisdn":"+1234567890",
  "swiftbic":"BARCGB22",
  "sortcode":"100000",
  "organisationid":"987654321",
  "username":"johndoe",
  "walletid":"11111111111",
  "linkref":"899fa8a7-7ea7-4880-87c2-e873fc22baf7",
  "consumerno":"1122334455",
  "serviceprovider":"serviceProvider",
  "storeid":"9999999999",
  "bankname":"Barclays",
  "bankaccounttitle":"Debit",
  "emailaddress":"example@email.com",
  "mandatereference":"85f6196e-0557-42bd-b3c5-c4a7d5433815"
}
```
</code-block>

</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Account Identifiers">
```javascript
//some JavaScript code here 
```
</code-block>

</code-group>

<code-group title="PHP">
<code-block title="Account Identifiers">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>

</code-block>
</code-main-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

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

### ISO Country Codes

The two-character alphabetic code for country as defined by ISO 3166 is to be used for all fields specifying a country or nationality. The full list of codes is maintained by the International Organisation for Standardisation. The list can be obtained via the following website - [http://www.iso.org/iso/country_codes](http://www.iso.org/iso/country_codes).

### Delivery Method Types

When a customer requests a quotation they are able to specify their preferred method of delivery of the transfer to the recipient. Permitted delivery methods are provided below.

|**Delivery Method**|**Description**|
|:--------|:--------|
| **directtoaccount** | The transfer is to be delivered into the account (wallet) of the recipient. |
| **agent** | The recipient can visit an agent and get the transferred funds. |
| **personaldelivery** | a supplementary service where an authorised person can deliver the funds, in hand, to the receiving end user. |

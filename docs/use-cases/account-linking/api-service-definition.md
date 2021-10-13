---
pageClass: api-page has-code-panel
title: Account Linking - API Service Definition
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

The transaction API can be used by FSPs to make a transfer for a linked account. Prior to making the transfer, a link must have been established between the debit and credit accounts.

The following paths are permitted:

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
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
```json
GET .../transactions/36125b528237
```
</code-block>

<code-block title="PATCH">
```json
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
    Transaction Party "1..2" --* "1" Transaction
    Fee "0..20" --* "1" Transaction
    Metadata "0..20" --* "1" Transaction
</mermaid>
<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Transaction
    Debit Party Identifier "1..10" --* "1" Transaction
    Fee "0..20" --* "1" Transaction
    Metadata "0..20" --* "1" Transaction
    Transaction "0..*" --* "2" Account
</mermaid>

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
  "creationDate": "Sun, 06 Nov 1994 08:49:37 GMT",
  "modificationDate": "Sun, 06 Nov 1994 08:49:37 GMT",
  "requestDate": "Sun, 06 Nov 1994 08:49:37 GMT",
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

The Reversals API is used to reverse, adjust or refund a financial transaction. The originating transaction reference must be provided in the path in order to identify the transfer to be reversed. For a partial reversal, the amount needs to be supplied. It should be noted that some API Providers do not support partial reversals and will return an error if a partial amount is supplied.

For viewing reversals, the [Transactions API](#transactions-api) should be used. For performing a reversal without the original transaction reference, use the [Transactions API](#transactions-api). 

The supported path is `POST /transactions/{originalTransactionReference}/reversals`.

#### Reversal UML Class Diagram

<mermaid>
classDiagram
    Transaction Party "1..2" --* "1" Reversal
    Fee "0..20" --* "1" Reversal
    Metadata "0..20" --* "1" Reversal
    Reversal --> Transaction
</mermaid>
<mermaid>
classDiagram
    Credit Party Identifier "0..10" --* "1" Reversal
    Debit Party Identifier "0..10" --* "1" Reversal
    Fee "0..20" --* "1" Reversal
    Metadata "0..20" --* "1" Reversal
    Reversal --> Transaction
</mermaid>

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
  "creationDate": "Sun, 06 Nov 1994 08:49:37 GMT",
  "modificationDate": "Sun, 06 Nov 1994 08:49:37 GMT",
  "requestDate": "Sun, 06 Nov 1994 08:49:37 GMT",
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

Using the mobile money APIs, financial service providers can:

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

### Retrieving Transactions for an Account

An FSP should use this API to return a list of transfers against their account. One of the following paths can be used:

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
<code-block title="Retrieving Transactions filters">
```json
{
  "limit": 50,
  "offset": 10,
  "fromDateTime": "Sun, 06 Nov 1994 08:49:37 GMT",
  "toDateTime": "Sun, 06 Nov 1994 08:49:37 GMT",
  "transactionStatus": "completed",
  "transactionType": "merchantpay"
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Retrieving Transactions filters">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Retrieving Transactions filters">
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
    Transaction Party "1..2" --* "1" Transaction
    Fee "0..20" --* "1" Transaction
    Metadata "0..20" --* "1" Transaction
    Transaction "0..*" --* "2" Account
</mermaid>
<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Transaction
    Debit Party Identifier "1..10" --* "1" Transaction
    Fee "0..20" --* "1" Transaction
    Metadata "0..20" --* "1" Transaction
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
| **accountStatus** | string | Indicates a harmonised representation of the account state. This will be shown as ‘available’ or ‘unavailable’. A state of ‘unavailable’ means that the account is in a state that does not allow posting of transactions. Unregistered indicates that although not available, a transaction created with the account identifier(s) will result in an unregistered voucher creation. | NA <br> O |  | Enumeration = available, unavailable, unregistered |
| **currentBalance** | string | The current outstanding balance on the account. | NA <br> O |  | Please refer to API Fundamentals document for amount validation rules. |
| **availableBalance** | string | Indicates the balance that is able to be debited for an account. This balance is only provided on some API provider systems. | NA <br> O |  | Please refer to API Fundamentals document for amount validation rules. |
| **reservedBalance** | string | Indicates the portion of the balance that is reserved, i.e. intended to be debited. This balance is only provided on some API provider systems. | NA <br> O |  | Please refer to API Fundamentals document for amount validation rules. |
| **unClearedBalance** | string | Indicates the sum of uncleared funds in an account, i.e. those that are awaiting a credit confirmation. | NA <br> O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency for all returned balances. | NA <br> O |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |


### Links API

The Links APIs are used to establish a link between two separate accounts between financial service providers. The API can be used for example to link a mobile wallet account to a microfinance institution account or a bank account. The link object does not mandate the processes to verify and authenticate a link request - this depends upon the use case. A link needs to be associated with a mode of operation:

- **pull**. The link can be used by the client to debit the target account held by the provider.

- **push**. The link can be used by the client to credit the target account held by the provider.

- **both**. The link can be used for Push and Pull requests.

To identify the accounts that are to be linked, the target account is specified in the path whereas the source account is specified in the link object.

The permitted paths are as follows:

- **Creation**: *POST /accounts/{identifierType}/{identifier}/links* or *POST /accounts/{ Account Identifiers}/links*.

- **Update** of status and/or mode fields: *PATCH /accounts/{identifierType}/{identifier}/links/{linkReference}* or *PATCH /accounts/{Account Identifiers}/links/{linkReference}*. 

- **Read**. *GET /accounts/{identifierType}/{identifier}/links/{linkReference}* or *GET /accounts/{Account Identifiers}/links/{linkReference}*.

Synchronous and asynchronous modes are supported for POST and PATCH methods whereas only synchronous mode is supported for the GET method.

#### Link UML Class Diagram

<mermaid>
classDiagram
    Link Source Account "1" --* "1" Link
    Link "0..*" --* "1" Account
</mermaid>
<mermaid>
classDiagram
    Source Account Identifier "1..10" --* "1" Link
    Link "0..*" --* "1" Account
</mermaid>


**Figure 2-5 Link UML Class Diagram**

#### Link Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Link Object">
```json
{
  "linkReference": "dd82cc6a-159a-4ddf-bea7-23bae38e72c5",
  "sourceAccountIdentifiers": [
    {
      "key":"MSISDN",
      "value":"+1234567890"
    }
  ],
  "mode": "both",
  "status": "inactive",
  "requestingOrganisation": {
    "requestingOrganisationIdentifierType": "organisationid",
    "requestingOrganisationIdentifier": "987654321"
  },
  "creationDate": "Sun, 06 Nov 1994 08:49:37 GMT",
  "modificationDate": "Sun, 06 Nov 1994 08:49:37 GMT",
  "requestDate": "Sun, 06 Nov 1994 08:49:37 GMT",
  "customData": {
    "customKey01": "customValue01",
    "customKey02": "customValue02"
  }
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Link Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Link Object">
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

| **Link Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **linkReference** | string | Indicates the Link reference. This enables a linked account to be uniquely identified. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **sourceAccountIdentifiers** | array | A series of key/value pairs that identify the source account. Keys include MSISDN and Wallet Identifier. | &#8594;&nbsp;M <br> &#8592; M | [Account Identifiers](#account-identifier-object) |  |
| **mode** | string | Indicates the mode of operation for the Link. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = push, pull, both |
| **status** | string | Indicates the status of the Link. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = active, inactive |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594;&nbsp;O <br> &#8592; O | [Requesting Organisation](#requesting-organisation-object) |  |
| **creationDate** | date-time | Indicates when the link was created as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the link was modified as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the link request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | Contains provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |














## Supporting Objects

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
| **key** | string | Identifies the type of additional fields. | M <br> M |  |  |
| **value** | string | Identifies the value of the additional field. | M <br> M |  |  |

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
| **transfer** | Transfer of funds between mobile money provider and another provider or financial institution in the same country. |
| **reversal** | Reversal of a prior transaction to return funds to the payer. |

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

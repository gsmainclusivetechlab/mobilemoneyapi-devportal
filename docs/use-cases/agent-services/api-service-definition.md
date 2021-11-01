---
pageClass: api-page has-code-panel
title: Agent Services - API Service Definition
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

Customer cash-in and cash-out transactions can be created, updated, and viewed using Transactions APIs.

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
| **Update** | PATCH */transactions/{transactionReference}* | To update the *transactionStatus* of a transaction. |

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

The Reversals API is used to reverse a cash-in or cash-out. The originating transaction reference must be provided in the path in order to identify the transaction to be reversed. For a partial reversal, the amount needs to be supplied.

For viewing reversals, the [Transactions API](#transactions-api) should be used. 

The supported path is POST `/transactions/{originalTransactionReference}/reversals`.

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

**Figure 2-2 Reversal UML Class Diagram**

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

### Agent Accounts APIs

Using the mobile money Account APIs, agents can:

- Register a new customer mobile money account.
- Perform KYC verification services for a customer.
- View transactions for their account.
- View their account balance

#### Identifying an Agent Account

Two methods are provided for identifying an agent account, the single identifier method, and the multiple identifiers method

##### Single Identifier Method

In the scenario where one identifier suffices to uniquely identify an account, the following path is to be used:
<br>

`/accounts/{identifierType}/{identifier}` .

##### Multiple Identifiers Method

Where a single identifier is not sufficient to identify an account, the following path is to be used:

`/accounts/{accountIdentifier1}@{value1}${accountIdentifier2}@{value2}${accountIdentifier3}@{value3}` .

The path uses a `$` delimiter to separate each identifier, up to a limit of three account identifiers. Each key/value is delimited by `@`.

The list of permitted account identifiers supported by the Mobile Money API can be found in the [Account Identifiers](#account-identifiers) section.


### Customer Account Services

#### Register a Customer Mobile Money Account

The Mobile Money API allows account creation for customers who are classified as individuals. Upon registration, new customers are generally provided with account and transaction limits based upon the level of KYC information they have provided and whether their KYC information has been physically verified.

To create an account, use POST `/accounts/{identityType}`, supplying `individual` as the `identityType`.

#### Verify a Customer’s KYC

In some markets, customers are able self-register for a mobile money account but have limited access to services until they have physically verified their KYC documentation with an authorised mobile money agent. The agent will compare the physical KYC against the details held by the mobile money provider. Agents can use the mobile money API to notify the outcome of the KYC verification to the mobile money provider. The steps are as follows:

1. Retrieve the KYC details for the customer from the mobile money provider.
2. Inform the mobile money provider as to whether the KYC verification was successful.

##### Retrieve Customer KYC Details from the Mobile Money Provider

KYC details for a customer(s) associated with an account can be retrieved via the following paths:

GET /accounts/{accountIdentifierType}/{identifier} OR

GET /accounts/{Account Identifiers}

The `identityId` of the customer will also be returned in the response which must then be used to identify the customer in the subsequent verification request.

##### Provide Customer KYC Verification Update to the Mobile Money Provider

To verify a customer’s KYC, use one of the following paths:

PATCH `/accounts/{identifierType}/{identifier}/identities/{identityId}` OR

PATCH `/accounts/{Account Identifiers}/identities/{identityId}`

The following identity fields can be updated:

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="KYC Verification Update">
```json
{
  "identity.kycVerificationStatus": {
    "op": "replace", 
    "path": "/kycVerificationStatus", 
    "value": "string"
  },
  "identity.kycVerificationEntity": {
    "op": "replace", 
    "path": "/kycVerificationEntity", 
    "value": "string"
  },
  "identity.kycLevel": {
    "op": "replace", 
    "path": "/kycLevel", 
    "value": "string"
  }
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="KYC Verification Update">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="KYC Verification Update">
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

|**Field**|**PATCH Body**|**Description**|
|:--------|:--------|:-------------|
| **identity.kycVerificationStatus**<br>(required) |  *"op": "replace", "path": "/kycVerificationStatus", "value": “string”* | Use to change the KYC verification status of an identity associated with an account. The values that can be set will be provided by the mobile money provider. |
| **identity.kycVerificationEntity**<br>(optional) |  *"op": "replace", "path": "/kycVerificationEntity", "value": “string”* | Use to indicate the agent that performed the verification. |
| **identity.kycLevel**<br>(optional) |  *"op": "replace", "path": "/kycLevel", "value": “integer”* | Use to modify the KYC level of an identity associated with an account. Valid KYC levels will be provided by the mobile money provider. |


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

**Figure 2‑3 Account Creation UML Class Diagram**

#### Account Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Account Object">
```json
{
  "accountIdentifiers": [
    {
      "key": "myCustomKey",
      "value": "myCustomValue"
    }
  ],
  "identity": [
    {
      "identityId": "12345",
      "identityType": "individual",
      "identityKyc": {
        "dateOfBirth": "2017-07-21T17:32:28Z",
        "birthCountry": "GB",
        "contactPhone": "+1234567890"
      },
      "accountRelationship": "accountholder"
    }
  ],
  "accountType": "seller",
  "accountSubStatus": "api",
  "currentBalance": "123.45",
  "availableBalance": "100.00",
  "reservedBalance": "20.45",
  "unClearedBalance": "3.00",
  "currency": "GBP",
  "customData": {
    "customKey01": "customValue01",
    "customKey02": "customValue02"
  },
  "fees": [
    {
      "feeType": "addition",
      "feeAmount": "2",
      "feeCurrency": "GBP"
    }
  ],
  "commissionEarned": {
    "commissionType": "transfer",
    "commissionAmount": "2.50",
    "commissionCurrency": "GBP"
  },
  "registeringEntity": "My FSP",
  "creationDate": "2017-07-21T17:32:28Z",
  "modificationDate": "2017-07-21T17:32:28Z",
  "requestDate": "2017-07-21T17:32:28Z"
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Account Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Account Object">
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

| **Account Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **accountIdentifiers** | array | A series of key/value pairs that enable the account to be identified. Identifiers are assigned by the API Provider during creation. | &#8594;&nbsp;O <br> &#8592; M | [Account Identifiers](#account-identifier-object) |  |
| **identity** | array | An account must be associated with one or more identities. | &#8594;&nbsp;M <br> &#8592; M | [Identity Object](#identity-object) |  |
| **accountType** | string | A non-harmonised field that indicates the type of the account. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **accountStatus** | string | Indicates a simplified representation of the account status. This will be shown as ‘available’ or ‘unavailable’. A state of ‘unavailable’ means that the account is in a state that does not allow posting of transactions. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **accountSubStatus** | string | Field can be used to return a provider-specific status for the account. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **currentBalance** | string | The current outstanding balance on the account. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **availableBalance** | string | Indicates the balance that is able to be debited for an account. This balance is only provided on some API provider systems. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **reservedBalance** | string | Indicates the portion of the balance that is reserved, i.e. intended to be debited. This balance is only provided on some API provider systems. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **unClearedBalance** | string | Indicates the sum of uncleared funds in an account, i.e. those that are awaiting a credit confirmation. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the account. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |
| **fees** | string | Returns all fees related to the creation of the account. | &#8594;&nbsp;O <br> &#8592; O | [Fees Object](#fees-object) |  |
| **commissionEarned** | string | Returns all commission earned by the registering entity for the creation of the account. | &#8594;&nbsp;NA <br> &#8592; O | [Commission Object](#commission-object) |  |
| **registeringEntity** | string | The entity that registered the account, for example, a mobile money agent. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **creationDate** | date-time | Indicates when the account was created as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the account was modified as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the account request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |



### View Transactions for an Agent

An agent should use this API to return a list of transactions against their account. One of the following paths can be used:

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
| **transactionType** | string | N/A | Indicates the [type](#transaction-types) of the transactions to be returned. This can be ‘deposit’, ‘withdrawal’, ‘reversal’ or ‘adjustment’. |

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

**Figure 2‑4 Account Transaction UML Class Diagram**


### View an Agent’s Account Balance

Using the Account Balances API, an FSP can check their balance. Permitted paths are: 

GET `/accounts/{identifierType}/{identifier}/balance`

or GET `/accounts/{Account Identifiers}/balance`

A ‘self’ version is also available where the calling API client is the FSP account holder. Path for the ‘self’ version is `/accounts/balance`.


#### Account Balance UML Class Diagram

<mermaid>
classDiagram
    Account Balance "1" --* "1" Account
</mermaid>

**Figure 2‑5 Account Balance UML Class Diagram**


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


### Account Holder Name API

Using the Account Holder Name API, an agent can retrieve the name of the depositing customer to confirm the name is correct prior to authorising the request.

Permitted paths are:

GET `/accounts/{identifierType}/{identifier}/accountname`

or GET `/accounts/{Account Identifiers}/accountname`

#### Account Holder Name UML Class Diagram

<mermaid>
classDiagram
    Account Holder Name "1" --* "1" Account
</mermaid>

**Figure 2‑6 Account Holder Name UML Class Diagram**

#### Account Holder Name Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Account Holder Name Object">
```json
{
  "name": {
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
<code-block title="Account Holder Name Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Account Holder Name Object">
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
| **name** | Reference | A collection of fields detailing the name of the primary account holder. | NA <br> O | [Name](#name-object) |  |


### Authorisation Codes API

The Authorisation Codes API allows a withdrawing customer to generate a code which when presented to the agent, can be redeemed for an amount set by the withdrawing customer. The code can then be presented to the agent in the form of a digital code or QR code displayed on an app. The agent enters the digital code or scans the QR code via their POS.

Authorisation codes can be set to expire. Note that expiry time can be specified via the API, however the mobile money provider may mandate a common expiry period for all codes.

The following paths are permitted:

- **Generate** an Authorisation Code. POST `/accounts/{identifierType}/{identifier}/authorisationcodes` or POST `/accounts/{Account Identifiers}/authorisationcodes`
- **Cancel** an Authorisation Code (`codeState` = ‘cancelled’). PATCH `/accounts/{identifierType}/{identifier}/authorisationcodes/{authorisationCode}` or PATCH `/accounts/{Account Identifiers}/authorisationcodes/{authorisationCode}`. 
- **View** An Authorisation Code for a given account. GET `/accounts/{identifierType}/{identifier}/authorisationcodes/{authorisationCode}` or GET `/accounts/{Requestor Account Identifiers}/authorisationcodes/{authorisationCode}`. 
- **View** all Authorisation Codes for a given account. GET `/accounts/{identifierType}/{identifier}/authorisationcodes` or GET `/accounts/{Requestor Account Identifiers}/authorisationcodes`.

When retrieving authorisation codes, the following query string parameters can be used to filter the number of records returned:

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Authorisation Codes filters">
```json
{
  "limit": 50,
  "offset": 10,
  "fromDateTime": "2017-07-21T17:32:28Z",
  "toDateTime": "2017-07-21T17:32:28Z",
  "codeState": "active"
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Authorisation Codes filters">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Authorisation Codes filters">
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

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| **limit** | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| **offset** | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| **fromDateTime** | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| **toDateTime** | string | date-time | Indicates the maximum creationDate for which records should be returned. |
| **codeState** | string | string | Allows filtering on the state of the authorisation code. |

::: tip
Note 1: For a harmonised behavior, API Providers should make sure that the authorisation codes are returned in descending date created order. 

Note 2: HTTP response headers are returned with each response indicating the total number of records available (`X-Records-Available-Count`) and total number of records returned (`X-Records-Returned-Count`).
:::

Synchronous and asynchronous modes are supported for the POST and PATCH methods whereas only synchronous mode is supported for the GET method.

#### Authorisation Code UML Class Diagram

<mermaid>
classDiagram
    Redemption Party "1" --* "1" Authorisation Code
    Metadata "0..20" --* "1" Authorisation Code
    Redemption Channel "0..50" --* "1" Authorisation Code
    Redemption Transaction Type "0..50" --* "1" Authorisation Code
    Authorisation Code "0..*" --* "1" Account
</mermaid>
<mermaid>
classDiagram
    Redemption Account Identifier "0..10" --* "1" Authorisation Code
    Metadata "0..20" --* "1" Authorisation Code
    Redemption Channel "0..50" --* "1" Authorisation Code
    Redemption Transaction Type "0..50" --* "1" Authorisation Code
    Authorisation Code "0..*" --* "1" Account
</mermaid>

**Figure 2-7 Authorisation Code UML Class Diagram**

#### Authorisation Code Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Authorisation Code Object">
```json
{
  "authorisationCode": "12345",
  "codeState": "expired",
  "amount": "123.45",
  "currency": "GBP",
  "amountType": "exact",
  "codeLifetime": 30000,
  "holdFundsIndicator": true,
  "redemptionAccountIdentifiers": [
    {
      "key":"MSISDN",
      "value":"+1234567890"
    }
  ],
  "redemptionChannels": "ATM",
  "redemptionTransactionTypes": {
    "transactionStatus": "completed",
    "transactionType": "merchantpay"
  },
  "requestingOrganisation": {
    "requestingOrganisationIdentifierType": "organisationid",
    "requestingOrganisationIdentifier": "987654321"
  },
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
<code-block title="Authorisation Code Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Authorisation Code Object">
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

| **Authorisation Codes Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **authorisationCode** | string | The code that will be presented to the other party for redemption. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **codeState** | string | Indicates the state of the [Authorisation Code](#authorisation-codes-api) | &#8594;&nbsp;NA <br> &#8592; M |  | Enumeration = ‘active’, ‘expired’, ‘cancelled’ |
| **amount** | string | Indicates the amount associated with the [authorisation code](#authorisation-codes-api). Typically, this is set by the client. | &#8594;&nbsp;O <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Indicates the amount currency. Must be supplied when an amount is supplied. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **amountType** | string | The amount for the authorisation can be an exact amount or can be a maximum amount, i.e. redemption up to but not higher than the amount specified. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = ‘exact’, ‘maximum’ |
| **codeLifetime** | integer | Indicates the expiry time in seconds of the code. Depending upon the use case, this can be set by the client or server. | &#8594;&nbsp;O <br> &#8592; O |  | If supplied, then must be 1 second or greater. |
| **holdFundsIndicator** | boolean | Indicates whether funds should be reserved against the payer’s account where the payer is the requestor. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **redemptionAccountIdentifiers** | array | A series of key/value pairs that identify the  account where the code must be redeemed. Only needed if the redemption account needs to be explicitly stated. | &#8594;&nbsp;O <br> &#8592; O | [Account Identifiers](#account-identifier-object) |  |
| **redemptionChannels** | string | Indicates the channel(s) that the code can be redeemed against, e.g. ATM, Merchant, etc.. | &#8594;&nbsp;O <br> &#8592; O | [Channel Types Object](#channel-type-object) |  |
| **redemptionTransactionTypes** | string | Indicates the Transaction Types(s) that the code can be redeemed against. | &#8594;&nbsp;O <br> &#8592; O | [Transaction Types Object](#transaction-type-object) |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594;&nbsp;O <br> &#8592; O | [Requesting Organisation](#requesting-organisation-object) |  |
| **creationDate** | date-time | Indicates when the link was created as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the link was modified as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the request as provided by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the [authorisation code](#authorisation-codes-api) | &#8594;&nbsp;O <br> &#8592; O | [Metadata](#metadata-object) |  |












## Supporting Objects

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


### Account Identifier Object

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


### Identity Object

The Identity object defines the information for an identity associated with an account. Between one and twenty identities can be associated with an account.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Identity Object">
```json
{
  "identityId": "12345",
  "identityType": "individual",
  "identityStatus": "Completed",
  "identityKyc": {
    "dateOfBirth": "2017-07-21T17:32:28Z",
    "birthCountry": "GB",
    "contactPhone": "+1234567890"
  },
  "accountRelationship": "accountholder",
  "kycVerificationStatus": "verified",
  "kycVerificationEntity": "123456789",
  "kycLevel": "Regular",
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
<code-block title="Identity Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Identity Object">
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

| **Identity Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **identityId** | string | A unique id for the identity as assigned by the API Provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **identityType** | string | Indicates the type of the identity. Currently, only ‘individual’ is supported. | &#8594;&nbsp;NA <br> &#8592; M |  | ‘individual’ |
| **identityStatus** | string | A non-harmonised field describing the status of the identity. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **identityKyc** | object | A collection of fields detailing the KYC held for the identity. | &#8594;&nbsp;M <br> &#8592; M | [KYC Information](#kyc-information-object) |  |
| **accountRelationship** | string | Describes the relationship that the identity holds with the account. | &#8594;&nbsp;M <br> &#8592; M |  | ‘accountholder’ |
| **kycVerificationStatus** | string | Indicates the status of the identity’s KYC verification. | &#8594;&nbsp;O <br> &#8592; O |  | ‘verified’, ‘unverified’, ‘rejected’ |
| **kycVerificationEntity** | string | Indicates the entity (e.g. mobile money agent) that has verified the KYC of the identity. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **kycLevel** | integer | Indicates the KYC level that the identity is associated with. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | array | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O |  |  |


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


### Transaction Type Object

This object enables multiple transaction types to be specified along with paired sub-types. This object is used where multiple transaction types need to be passed in an API.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Transaction Type Object">
```json
{
  "transactionType": "merchantpay",
  "transactionSubType": "local",
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Transaction Type Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Transaction Type Object">
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

| **Transaction Type Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **transactionType** | string | Identifies the Transaction Type. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [Transaction Types](#transaction-type-object) |
| **transactionSubType** | string | Identifies the Transaction Sub-Type. | &#8594;&nbsp;O <br> &#8592; O |  |  |

### Channel Type Object

This object enables multiple channel types to be specified. This object is used where multiple channel types need to be passed in an API.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Channel Type Object">
```json
{
  "channelType": "ATM"
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Channel Type Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Channel Type Object">
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

| **Channel Type Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **channelType** | string | Identifies the Channel Type. | &#8594;&nbsp;M <br> &#8592; M |  |  |

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

### Commission Object

An object that enables earned commission that is calculated by the API provider to be returned.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Commission Object">
```json
{
  "commissionType": "surcharge",
  "commissionAmount": "2",
  "commissionCurrency": "GBP"
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Commission Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Commission Object">
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

| **Commission Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **commissionType** | string | Defines the type of commission. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **commissionAmount** | string | Defines the amount of the commission. | &#8594;&nbsp;M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **commissionCurrency** | string | Defines the currency of the commission. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |


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
| **deposit** | Exchange of cash in return for e-Money at a physical agent or via ATM (cash-in). |
| **adjustment** | General adjustments to an account via an adjustment transaction (e.g. refunds). |
| **reversal** | Reversal of a prior transaction to return funds to the payer. |
| **withdrawal** | Exchange of e-Money in return for cash at a physical agent or via ATM (cash-out). |

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

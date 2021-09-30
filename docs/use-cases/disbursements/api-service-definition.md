---
pageClass: api-page has-code-panel
title: Disbursements - API Service Definition
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

Individual disbursements can be created and viewed using transactions APIs. The following paths are permitted:

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
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

<code-block title="JavaScript">

<code-group>
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
</code-block>
<code-block title="PHP">

<code-group>
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
</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->


| **Operation** | **Path**  | **Description** |
|:-----------|:-------|:-------------|
| **Create** | POST */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL.  |
| **View** | GET */transactions/{transactionReference}* | To view a transaction. |
| **Update** | PATCH */transactions/{transactionReference}* | To update the transactionStatus of a transaction. |

For batches of disbursements, please refer to [Bulk Disbursement](/use-cases/disbursements/scenarios/scenarios.html#bulk-disbursement).

#### Transaction UML Class Diagram

<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Transaction
    Debit Party Identifier "1..10" --* "1" Transaction
    Fee "0..20" --* "1" Transaction
    Metadata "0..20" --* "1" Transaction
    Transaction "0..*" --* "2" Account
</mermaid>

**Figure 2‑1 Transaction UML Class Diagram**

#### Transaction Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
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

<code-block title="JavaScript">

<code-group>
<code-block title="Transaction Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Transaction Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

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

The Reversals API is used to reverse a P2P transfer. The originating transaction reference must be provided in the path to identify the payment to be reversed. For a partial reversal, the amount needs to be supplied. 

For viewing reversals, the [Transactions API](#transactions-api) should be used.

The supported path is `POST /transactions/{originalTransactionReference}/reversals`.

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


<code-group>
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

<code-block title="JavaScript">

<code-group>
<code-block title="Reversal Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Reversal Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

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

### Batch Transactions

The Mobile Money API allows organisations to submit, approve and view batches of disbursements. The following steps describe an end to end flow for processing batch disbursements. Two types of processing modes are supported:

- One shot processing without an approver.
- Maker/checker approval, i.e. transactions are not completed until approved via a second API request.

The individual APIs that are referenced in the steps below are fully documented in subsequent sub-sections.

#### Batch Transactions Workflow

##### One-Shot Batch Processing

**Creating a Batch**

1. Client submits the batch for processing via `POST /batchtransactions`.

2. The client will return the requestState object indicating whether a callback will be provided or polling is required.

3. The API provider will parse the batch in order to determine whether the transactions are capable of being processed.

4. Once parsing has completed, the API provider will set the batch status in the `batchTransactions` object to ‘**completed**’.

**Verifying a Batch**

1. The client will be able to retrieve the batch transaction object by invoking `GET /batchtransactions`  using the object reference provided by the `requestState` object. Alternatively, if Callback is specified, the client will receive the representation of the batchTransactions object to their nominated URL set in the `X-Callback-URL` header.

2. If errors are indicated, i.e. some of the transactions failed parsing, the client is able to retrieve the errors via `GET /batchtransactions/rejections`. Successfully completed transactions can be viewed via `GET /batchtransactions/completions`.

##### Batch Processing with Maker/Checker

**Creating a Batch**

1. Client submits the batch for processing via `POST /batchtransactions`.

2. The client will return the `requestState` object indicating whether a callback will be provided or polling is required.

3. The API provider will parse the batch in order to determine whether the transactions are capable of being processed.

4. Once parsing has completed, the API provider will set the batch status in the `batchTransactions` object to ‘**created**’.

**Verifying a Batch**

1. The client will be able to retrieve the batch transaction object by invoking `GET /batchtransactions`  using the object reference provided by the `requestState` object. Alternatively, if Callback is specified, the client will receive the representation of the `batchTransactions` object to their nominated URL set in the `X-Callback-URL` header.
   
2. If errors are indicated, i.e. some of the transactions failed parsing, the client is able to retrieve the errors via `GET /batchtransactions/rejections`.

**Approving a Batch**

1. A client can approve the batch for posting by issuing a `PATCH /batchtransactions` in order to update the status to ‘**approved**’. 

2. As per step 2, a `requestState` object will be returned indicating whether a callback will be provided or polling is required.

3. The API provider will then post the transactions in the batch considering any scheduling considerations.

4. Once posting is completed, the API provider will set the batch status in the `batchTransactions` object to ‘**completed**’.

5. The client will be able to retrieve the `batchTransactions` object by invoking `GET /batchtransactions` using the object reference provided by the `requestState` object. Alternatively, if Callback is specified, the client will receive the representation of the `batchTransactions` object to their nominated URL set in the `X-Callback-URL` header.

6. The client will also be able to retrieve a list of successful transaction completions `/batchtransactions/completions` and transaction failures `/batchtransactions/rejections`.

### Batch Transactions API

This API enables clients to submit and approve a batch of transactions. The API allows transactions of multiple types to be included in a single batch. The following paths are permitted:

**- Submit** a batch: `POST /batchtransactions`

**- Approve** a batch: `PATCH /bathtransactions/{batchID}`. The Batch Status needs to be set to ‘approved’.

**- View details** regarding batch processing: `GET /batchtransactions/{batchID}`
<br><br>

Only asynchronous mode is supported for the POST and PATCH methods. For the GET method, only synchronous mode is supported.

There is a limit of 999,999 transaction records per batch.

#### Batch Transaction Object UML Diagram

<mermaid>
classDiagram
    Credit Party Identifier "1..10" --* "1" Transaction
    Debit Party Identifier "1..10" --* "1" Transaction
    Fee "0..20" --* "1" Transaction
    Metadata "0..20" --* "1" Transaction
    Transaction "0.." --* "1" Batch Transaction
</mermaid>

**Figure 2-3 Batch Transaction UML Class Diagram**

#### Batch Transaction Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
<code-block title="View">

<code-group>
<code-block title="Batch Transaction Object">
```json
{
  "batchID": "d24651c4-ef6f-4c5c-af0e-468f1dc53624",
  "batchStatus": "approved",
  "Transactions": [
    {
      //transaction 1 object...
      },
    {
      //transaction 2 object...
    }
  ]
  "approvalDate": "Sun, 06 Nov 1994 08:49:37 GMT", 
  "completionDate": "Sun, 06 Nov 1994 08:49:37 GMT",
  "batchTitle": "Batch title...",
  "batchDescription": "Batch description...",
  "processingFlag": true,
  "completedCount": 3,
  "parsingSuccessCount": 2,
  "rejectionCount": 1,
  "requestingOrganisation": {
    "requestingOrganisationIdentifierType": "organisationid",
    "requestingOrganisationIdentifier": "987654321"
  },
  "scheduledStartDate": "Sun, 06 Nov 1994 08:49:37 GMT",
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

<code-block title="JavaScript">

<code-group>
<code-block title="Batch Transaction Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Batch Transaction Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Batch Transaction Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **batchID** | string | Identifier for the Batch that is assigned by the API provider. This ID is used by the client on subsequent GET or PATCH methods. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **batchStatus** | string | Indicates the status of the batch. | &#8594; O <br> &#8592; M |  | Enumeration = created, approved, completed |
| **Transactions** | array | Collection of Transactions that are to be processed. Note that the representation of each completed transaction can be retrieved via the ‘/completions API. | &#8594; M <br> &#8592; NA | [Transactions](#transactions-api) |  |
| **approvalDate** | date-time | Indicates when the batch was approved as recorded by the API provider. | &#8594; NA <br> &#8592; M |  |  |
| **completionDate**  | date-time | Indicates when the batch was completed as recorded by the API provider. | &#8594; NA <br> &#8592; M |  |  |
| **batchTitle** | string | Client-provided title for the batch. | &#8594; O <br> &#8592; O |  |  |
| **batchDescription** | string | Client-provided description of the batch. | &#8594; O <br> &#8592; O |  |  |
| **processingFlag** | boolean | Indicates whether the batch is currently undergoing processing by the API Provider. | &#8594; NA <br> &#8592; O |  |  |
| **completedCount** | integer | Indicates the number of records that have been successfully completed. | &#8594; NA <br> &#8592; O |  |  |
| **parsingSuccessCount** | integer | Indicates the number of records that have been parsed successfully. | &#8594; NA <br> &#8592; O |  | |
| **rejectionCount** | integer | Indicates the number of records that have been rejected, either during parsing or during final processing. | &#8594; NA <br> &#8592; O |  |  |
| **requestingOrganisation** | object | The originating organisation of the request. | &#8594; O <br> &#8592; O | [Requesting Organisation](#requesting-organisation-object) |  |
| **scheduledStartDate** | date-time | If the batch has been scheduled, the expected start time is provided here. | &#8594; O <br> &#8592; O |  |  |
| **creationDate** | date-time | Indicates when the batch was created as recorded by the API provider. | &#8594; NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the batch was modified as recorded by the API provider. | &#8594; NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the batch request as supplied by the client. | &#8594; O <br> &#8592; O  |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |

### Batch Rejections API

This API enables clients to retrieve information on all transactions that have either failed parsing or have failed to complete. Only the GET method is supported. The path is `batchtransactions/{batchID}/rejections`.

To filter the number of records returned, the following query strings can be used:

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
<code-block title="View">

<code-group>
<code-block title="Batch Rejections filters">
```json
{
  "limit": 50,
  "offset": 10,
  "fromDateTime": "Sun, 06 Nov 1994 08:49:37 GMT",
  "toDateTime": "Sun, 06 Nov 1994 08:49:37 GMT",
}
```
</code-block>
</code-group>

</code-block>

<code-block title="JavaScript">

<code-group>
<code-block title="Batch Rejections filters">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Batch Rejections filters">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

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

::: tip
Note: HTTP response headers are returned with each response indicating the total number of records available (`X-Records-Available-Count`) and total number of records returned (`X-Records-Returned-Count`).
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

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
<code-block title="View">

<code-group>
<code-block title="Batch Rejection Object">
```json
{
  "transactionReference": "dd82cc6a-159a-4ddf-bea7-23bae38e72c5",
  "requestingOrganisationTransactionReference": "c66e56ed-a5c2-4080-b34d-ad84d04065d4",
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
  "rejectionReason": "Some rejection reason...",
  "rejectionDate": "Sun, 06 Nov 1994 08:49:37 GMT",
  "customData": {
    "customKey01": "customValue01",
    "customKey02": "customValue02"
  }
}
```
</code-block>
</code-group>

</code-block>

<code-block title="JavaScript">

<code-group>
<code-block title="Batch Rejection Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Batch Rejection Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Batch Rejection Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **transactionReference** | string | Transaction Reference as assigned by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestingOrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transactions. | &#8594; NA <br> &#8592; O |  |  |
| **creditParty** | array | The credit party identifiers for the transaction as specific in the batch request. | &#8594; NA <br> &#8592; M | [Account Identifiers](#account-identifier-object) |  |
| **debitParty** | array | The debit party identifiers for the transaction as specific in the batch request. | &#8594; NA <br> &#8592; M | [Account Identifiers](#account-identifier-object) |  |
| **rejectionReason**  | string | The reason for the transaction request as indicated by the API provider. | &#8594; NA <br> &#8592; M |  |  |
| **rejectionDate** | date-time | Date and time of the rejection. | &#8594; NA <br> &#8592; M |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |

### Batch Completions API

This API lists all transactions that have successfully completed for a given batch. Only the GET method is supported. The path format is `batchtransactions/{batchID}/completions`.

To filter the number of records returned, the following query strings can be used:

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
<code-block title="View">

<code-group>
<code-block title="Batch Completions filters">
```json
{
  "limit": 50,
  "offset": 10,
  "fromDateTime": "Sun, 06 Nov 1994 08:49:37 GMT",
  "toDateTime": "Sun, 06 Nov 1994 08:49:37 GMT",
}
```
</code-block>
</code-group>

</code-block>

<code-block title="JavaScript">

<code-group>
<code-block title="Batch Completions filters">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Batch Completions filters">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

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

::: tip
Note: HTTP response headers are returned with each response indicating the total number of records available (`X-Records-Available-Count`) and total number of records returned (`X-Records-Returned-Count`)
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

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
<code-block title="View">

<code-group>
<code-block title="Batch Completion Object">
```json
{
  "transactionReference": "dd82cc6a-159a-4ddf-bea7-23bae38e72c5",
  "requestingOrganisationTransactionReference": "c66e56ed-a5c2-4080-b34d-ad84d04065d4",
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
  "completionDate": "Sun, 06 Nov 1994 08:49:37 GMT",
  "link": "https://application.com/uuid",
  "customData": {
    "customKey01": "customValue01",
    "customKey02": "customValue02"
  }
}
```
</code-block>
</code-group>

</code-block>

<code-block title="JavaScript">

<code-group>
<code-block title="Batch Completion Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Batch Completion Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Batch Completion Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **transactionReference** | string | Transaction Reference as assigned by the API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **requestingOrganisationTransactionReference** | string | A reference provided by the requesting organisation that is to be associated with the transactions. | &#8594; NA <br> &#8592; O |  |  |
| **creditParty** | array | The credit party identifiers for the transaction as specific in the batch request. | &#8594; NA <br> &#8592; M | [Account Identifiers](#account-identifier-object) |  |
| **debitParty** | array | The debit party identifiers for the transaction as specific in the batch request. | &#8594; NA <br> &#8592; M | [Account Identifiers](#account-identifier-object) |  |
| **completionDate**  | date-time | Date and time indicating when the transaction was completed. | &#8594; NA <br> &#8592; M |  |  |
| **link** | string | Provides a URL to the transaction resource. | &#8594; NA <br> &#8592; M |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594; O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |

### Disbursement Accounts APIs

Using the mobile money APIs, disbursement organisations can:

- View transactions for their account.
- View their account balance.

#### Identifying aDisbursement Organisation Account

Two methods are provided for identifying a disbursement organisation account, the single identifier method, and the multiple identifiers method.

##### Single Identifier Method

In the scenario where one identifier suffices to uniquely identify an account, the following path is to be used: <br>`/accounts/{identifierType}/{identifier}`.

##### Multiple Identifiers Method

Where a single identifier is not sufficient to identify an account, the following path is to be used: <br>`/accounts/{accountIdentifier1}@{value1}${accountIdentifier2}@{value2}${accountIdentifier3}@{value3}`.

The path uses a `$` delimiter to separate each identifier, up to a limit of three account identifiers. Each key/value is delimited by `@`.

The list of permitted account identifiers supported by the Mobile Money API can be found in the [Account Identifiers](#account-identifiers) section.

### Account Transactions API

A disbursement organisation should use this API to return a list of transactions against their account. One of the following paths can be used

GET `/accounts/{identifierType}/{identifier}/transactions`

or GET `/accounts/{Account Identifiers}/transactions`

To filter the number of records returned, the following query strings can be used:

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
<code-block title="View">

<code-group>
<code-block title="Account Transactions filters">
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

<code-block title="JavaScript">

<code-group>
<code-block title="Account Transactions filters">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Account Transactions filters">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

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
    Credit Party Identifier "1..10" --* "1" Transaction
    Debit Party Identifier "1..10" --* "1" Transaction
    Fee "0..20" --* "1" Transaction
    Metadata "0..20" --* "1" Transaction
    Transaction "0..*" --* "2" Account
</mermaid>

**Figure 2‑6 Account Transaction UML Class Diagram**

### Account Balances API

Using the Account Balances API, a disbursement organisation can check their balance. Permitted paths are:

GET `/accounts/{identifierType}/{identifier}/balance`

or GET `/accounts/{Account Identifiers}/balance`

A ‘self’ version is also available where the calling API client is the organisation account holder. Path for the ‘self’ version is `/accounts/balance`.

#### Account Balance UML Class Diagram

<mermaid>
classDiagram
    AccountBalance "1" --* "1" Account
</mermaid>

**Figure 2‑7 Account Balance UML Class Diagram**

#### Account Balance Object Definition

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
<code-block title="View">

<code-group>
<code-block title="Balance Object">
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

<code-block title="JavaScript">

<code-group>
<code-block title="Balance Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Balance Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

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














## Supporting Objects


### Account Identifiers Object

The Account Identifier object enables one or multiple identifiers to be provided to enable the recipient system to resolve the account/party.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
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

<code-block title="JavaScript">

<code-group>
<code-block title="Account Identifier Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Account Identifier Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Provides the account identifier type. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [Account Identifiers](#account-identifiers) |
| **value** | string | Provides the account identifier type value. | &#8594;&nbsp;M <br> &#8592; M |  |  |

### Metadata Object

The metadata object allows fields to be specified to convey administrative information regarding the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
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

<code-block title="JavaScript">

<code-group>
<code-block title="Metadata Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Metadata Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Identifies the type of additional fields. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **value** | string | Identifies the value of the additional field. | &#8594;&nbsp;M <br> &#8592; M |  |  |

### Custom Data Object

The custom data object allows additional fields to be specified for the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
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

<code-block title="JavaScript">

<code-group>
<code-block title="Custom Data Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Custom Data Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

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


<code-group>
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

<code-block title="JavaScript">

<code-group>
<code-block title="Fees Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Fees Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **feeType** | string | Defines the type of fee. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **feeAmount** | string | Defines the amount of the fee. | &#8594;&nbsp;M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **feeCurrency** | string | Defines the currency for the given fee. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |

### Requesting Organisation Object

An object that details the originating organisation of the request.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
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

<code-block title="JavaScript">

<code-group>
<code-block title="Requesting Organisation Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Requesting Organisation Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

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
| **disbursement** | Disbursement of funds (making payments from an organisation (business, NGO, government entity) to a mobile money recipient. |
| **reversal** | Reversal of a prior transaction to return funds to the payer. |


### Account Identifiers

The Account Identifier enumeration lists all possible means to identify a target account. Identifiers can be combined if necessary, to provide a unique identifier for the target account.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-group>
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

<code-block title="JavaScript">

<code-group>
<code-block title="Account Identifiers">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

</code-block>

<code-block title="PHP">
<code-group>
  
<code-block title="Account Identifiers">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>

</code-group>
</code-block>

</code-group>

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
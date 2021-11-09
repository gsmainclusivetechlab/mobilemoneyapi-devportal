---
pageClass: api-page has-code-panel
title: Bill Payments - API Service Definition
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

### Identifying a Target Account

Two methods are provided for identifying an account on all bills and bill payments APIs - the single identifier method, and the multiple identifiers method.

#### Single Identifier Method

In the scenario where one identifier suffices to uniquely identify an account, the following path is to be used: `/accounts/{identifierType}/{identifier}`.

#### Multiple Identifiers Method

Where a single identifier is not sufficient to identify an account, the following path is to be used: `/accounts/{accountIdentifier1}@{value1}${accountIdentifier2}@{value2}${accountIdentifier3}@{value3}`. 

The path uses a `$` delimiter to separate each identifier, up to a limit of three account identifiers. Each key/value is delimited by `@`.

The list of permitted account identifiers supported by the Mobile Money API can be found in the [Account Identifiers](#account-identifier-object) section.


### Bills API

The Bills API are used to return all outstanding bills associated with an account. The main purpose of the API is to support Bill Presentment, i.e. presenting all applicable bills for a payer to view and select for payment. To pay a bill, the [Bill Payments API](#bill-payments-api) is used. Permitted paths are `GET /accounts/{identifierType}/{identifier}/bills` or `GET /accounts/{Account Identifiers}/bills`.

To filter the number of records returned, the following query string parameters can be used:

 
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Bills API filters">
```json
{
  "limit": 50,
  "offset": 10,
  "fromDateTime": "2017-07-21T17:32:28Z",
  "toDateTime": "2017-07-21T17:32:28Z"
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Bills API filters">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Bills API filters">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>
</code-group>

</code-block>
</code-main-group>

 

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| **limit** | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| **offset** | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| **fromDateTime** | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| **toDateTime** | string | date-time | Indicates the maximum creationDate for which records should be returned. |

::: tip
Note 1: For a harmonised behavior, API Providers should make sure that the bills are returned in descending date created order. 

Note 2: HTTP response headers are returned with each response indicating the total number of records available (`X-Records-Available-Count`) and total number of records returned (`X-Records-Returned-Count`).
:::

#### Bill UML Class Diagram

<mermaid>
classDiagram
    Metadata "0..20" --* "1" Bill
    Bill "0..*" --* "1" Account
</mermaid>

**Figure 2-1 Bill UML Class Diagram**

#### Bill Object Definition

 
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Bill Object">
```json
{
  "billReference": "dd82cc6a-159a-4ddf-bea7-23bae38e72c5",
  "billStatus": "partialpaid",
  "amountDue": "123.45",
  "billDescription": "My custom description...",
  "currency": "GBP",
  "dueDate": "2018-11-20",
  "minimumAmountDue": "23.45",
  "creationDate": "2017-07-21T17:32:28Z",
  "modificationDate": "2017-07-21T17:32:28Z",
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
<code-block title="Bill Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Bill Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>
</code-group>

</code-block>
</code-main-group>

 

| **Bill Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **billReference** | string | Reference number for the Bill that the payer can use when making a payment. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **billStatus** | string | Identifies the status of the Bill. | &#8594;&nbsp;NA <br> &#8592; O |  | ‘paid’, ‘unpaid’, ‘partialpaid’ |
| **amountDue** | string | Amount outstanding on the bill to be paid. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **billDescription** | string | Description of the bill that is to be paid. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **currency** | string | Currency of the bill to be paid. | &#8594;&nbsp;NA <br> &#8592; O |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **dueDate** | date | Date on which the Bill is due to be paid. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **minimumAmountDue** | string | The minimum amount that is outstanding on the bill to be paid. | &#8594;&nbsp;NA <br> &#8592; O |  | Please refer to API Fundamentals document for amount validation rules. |
| **creationDate** | date-time | Indicates when the bill was created by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the bill was modified by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the bill. | &#8594;&nbsp;NA <br> &#8592; O | [Metadata](#metadata-object) |  |

### Bill Payments API

The Bill Payments API is used to pay a specific bill associated with an account held with a service provider.

|**Path**|**Usage**|
|:--------|:--------|
| *`/accounts/{identifierType}/{identifier}/bills/{billReference}/payments`* | Use when a single identifier suffices to identify the bill account. |
| *`/accounts/{Account Identifiers}/bills/{billReference}/payments`* | Use when two or three identifiers are required to identify an account. |
| *`/bills/{billReference}/payments`* | Use when a bill payment is not associated with a service provider account. |
| *`/accounts/{identifierType}/{identifier}/bills/payments*`* OR *`/accounts/{Account Identifiers}/bills/payments`* | Use when a bill does not have a bill reference |

As per MM API standards, POST is used to create a bill payment whereas GET is used to retrieve all payments associated with a bill.

When retrieving bill payments, the following query string parameters can be used to filter the number of records returned:

 
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Bill Payments filters">
```json
{
  "limit": 50,
  "offset": 10,
  "fromDateTime": "2017-07-21T17:32:28Z",
  "toDateTime": "2017-07-21T17:32:28Z"
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Bill Payments filters">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Bill Payments filters">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>
</code-group>

</code-block>
</code-main-group>

 

|**Parameter**|**Type**|**Format**|**Description**|
|:--------|:--------|:-------------|:--------|
| **limit** | integer | N/A | Supports pagination. If this is not supplied, then the server will apply a limit of 50 records returned for each request. |
| **offset** | integer | N/A | Supports pagination. This value will indicate the cursor position from where to retrieve the set of records. For example, a limit of 50 and offset of 10 will return records 11 to 60. |
| **fromDateTime** | string | date-time | Indicates the minimum creationDate for which records should be returned. |
| **toDateTime** | string | date-time | Indicates the maximum creationDate for which records should be returned. |

::: tip
Note 1: For a harmonised behavior, API Providers should make sure that the bill payments are returned in descending date created order. 

Note 2: HTTP response headers are returned with each response indicating the total number of records available (`X-Records-Available-Count`) and total number of records returned (`X-Records-Returned-Count`).
:::

#### Bill Payment UML Class Diagram

**Bill payment - No Account**

<mermaid>
classDiagram
    Supplementary Bill Reference "0..20" --* "1" Bill Payment
    Metadata "0..20" --* "1" Bill Payment
</mermaid>

**Bill payment - With Account**

<mermaid>
classDiagram
    Supplementary Bill Reference "0..20" --* "1" Bill Payment
    Metadata "0..20" --* "1" Bill Payment
    Bill Payment "0..*" --* "1" Account
</mermaid>

**Figure 2-2 Bill Payment UML Class Diagram**

#### Bill Payment Object Definition

 
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Bill Payment Object">
```json
{
  "serviceProviderPaymentReference": "dd82cc6a-159a-4ddf-bea7-23bae38e72c5",
  "requestingOrganisationTransactionReference": "c66e56ed-a5c2-4080-b34d-ad84d04065d4",
  "paymentType": "fullpayment",
  "billPaymentStatus": "approved",
  "amountPaid": "123.45",
  "currency": "GBP",
  "customerReference": "Customer reference text...",
  "requestingOrganisation": "creditFSP",
  "supplementaryBillReferenceDetails": [
    {
      "paymentReferenceType": "paymentReferenceValue"
    }
  ],
  "serviceProviderComment": "This is SP comment...",
  "serviceProviderNotification": "This is SP notification...",
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
<code-block title="Bill Payment Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Bill Payment Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>
</code-group>

</code-block>
</code-main-group>

 

| **Bill Payment Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **serviceProviderPaymentReference** | string | Reference for the payment generated by the service provider. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **requestingOrganisationTransactionReference** | string | The mobile money provider’s (or Financial Institution’s) transaction reference used to debit the customer and credit the service provider. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **paymentType** | string | Describes the type of Bill Payment, i.e. whether a full or partial payment. | &#8594;&nbsp;O <br> &#8592; O |  | Enumeration = ‘fullpayment’, ‘partialpayment’ |
| **billPaymentStatus** | string | Indicates the status of the bill payment as stored by the API provider. | &#8594;&nbsp;NA <br> &#8592; M |  |  |
| **amountPaid** | string | Amount that is being paid. | &#8594;&nbsp;M <br> &#8592; M |  | Please refer to API Fundamentals document for amount validation rules. |
| **currency** | string | Currency of the amount that is being paid. | &#8594;&nbsp;M <br> &#8592; M |  | Enumeration = [ISO Currency Codes](#iso-currency-codes) |
| **customerReference** | string | Textual reference provided by the customer paying the bill. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **requestingOrganisation** | string | The originating mobile money provider or financial institution that holds the wallet/account of the payer. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **supplementaryBillReferenceDetails** | array | In some cases, a single reference is not sufficient to identify a bill. This key-value collection enables further reference information to be supplied. | &#8594;&nbsp;C <br> &#8592; C | [Bill References](#supplementary-bill-reference-object) | Not applicable if billReference is no passed in the path. |
| **serviceProviderComment** | string | Allows the Service Provider to include specific information regarding the bill payment. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **serviceProviderNotification** | string | Allows the Service Provider to include specific information that will be included on the notification to the customer by the mobile money provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **creationDate** | date-time | Indicates when the bill payment was created as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **modificationDate** | date-time | Indicates when the bill payment was modified as recorded by the API provider. | &#8594;&nbsp;NA <br> &#8592; O |  |  |
| **requestDate** | date-time | The date and time of the bill payment request as supplied by the client. | &#8594;&nbsp;O <br> &#8592; O |  |  |
| **customData** | string | A collection of key/value pairs that can be used for provider specific fields. | &#8594;&nbsp;O <br> &#8592; O | [Custom Data Object](#custom-data-object) |  |
| **metadata** | array | A collection of key/value pairs. These can be used to populate additional properties that describe administrative information regarding the bill payment. | &#8594;&nbsp;O <br> &#8592; O | [Metadata](#metadata-object) |  |













## Supporting Objects

### Account Identifiers Object

The Account Identifier object enables one or multiple identifiers to be provided to enable the recipient system to resolve the account/party.

 
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

 

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Provides the account identifier type. | M <br> M |  | Enumeration = [Account Identifiers](#account-identifiers) |
| **value** | string | Provides the account identifier type value. | M <br> M |  |  |

### Metadata Object

The metadata object allows fields to be specified to convey administrative information regarding the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

 
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

 

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Identifies the type of additional fields. | M <br> M |  |  |
| **value** | string | Identifies the value of the additional field. | M <br> M |  |  |

### Custom Data Object

The custom data object allows additional fields to be specified for the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

 
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

 

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Identifies the type of additional fields. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |
| **value** | string | Identifies the value of the additional field. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |


### Supplementary Bill Reference Object

This object enables additional payment references to be specified for a bill payment in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

 
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Supplementary Bill Reference Object">
```json
{
  "paymentReferenceType": "paymentReferenceValue"
}
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="Supplementary Bill Reference Object">
```javascript
//some JavaScript code here 
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="Supplementary Bill Reference Object">
```php
<?php 
  //some PHP code here 
?>
```
</code-block>
</code-group>

</code-block>
</code-main-group>

 

| **Supplementary Bill Reference Object** ||||||
|:--------|:--------|:-------------|:--------|:---------|:------|
|**Name**|**Type**|**Description**|  |**Reference**|**Validation**|
| **paymentReferenceType** | string | Identifies the type of the additional payment reference. | &#8594;&nbsp;M <br> &#8592; M |  |  |
| **paymentReferenceValue** | string | Identifies the value of the additional payment reference. | &#8594;&nbsp;M <br> &#8592; M |  |  |













## Enumerations

### ISO Currency Codes

The three-character alphabetic code for currency as defined by ISO 4217 is to be used for all currency fields. The full list of codes is maintained by Swiss Interbank Clearing on behalf of the International Organisation for Standardisation. This list can be obtained via the following website - [http://www.currency-iso.org/en/home/tables/table-a1.html](http://www.currency-iso.org/en/home/tables/table-a1.html).


### Account Identifiers

The Account Identifier enumeration lists all possible means to identify a target account. Identifiers can be combined if necessary, to provide a unique identifier for the target account.

 
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="Account Identifiers">
```json
{
  "accountid":"31510604",
  "msisdn":"+1234567890",
  "organisationid":"987654321",
  "username":"johndoe",
  "consumerno":"1122334455",
  "serviceprovider":"serviceProvider",
  "emailaddress":"example@email.com",
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

 

| **Code** | **Short Description** | **Type** | **Description** |
|:--|:--|:--|:--|
| **accountid** | Account Holder Identity | string | Identifier for the account holder. |
| **msisdn** | MSISDN | string | Must contain between 6 and 15 consecutive digits <br> First character can contain a ‘+’ or digit <br> Can contain spaces. |
| **organisationid** | Organisation Account Identifier | string | Used to identify the organisation for which a payment is to be made. |
| **username** | Username | string | Used to identify target account via an associated username. |
| **consumerno** | Consumer Number | String | Identifies the consumer associated with the account. |
| **serviceprovider** | Service Provider | String | Provides a reference for a Service Provider. |
| **emailaddress** | Email Address | String | emailaddress of the party. |

### ISO Country Codes

The two-character alphabetic code for country as defined by ISO 3166 is to be used for all fields specifying a country or nationality. The full list of codes is maintained by the International Organisation for Standardisation. The list can be obtained via the following website - [http://www.iso.org/iso/country_codes](http://www.iso.org/iso/country_codes).

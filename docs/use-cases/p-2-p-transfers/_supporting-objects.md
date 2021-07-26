---
pageClass: api-page has-code-panel
---

<side-code-panel/>

## KYC Information Object

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **birthCountry** | string | The country of birth of the KYC subject. | O <br> O |  | Enumeration = [ISO Country Codes](/use-cases/p-2-p-transfers/enumerations.html#iso-country-codes) |
| **dateOfBirth** | date | Birth date of the KYC subject. | O <br> O |  |  |
| **contactPhone** | string | Contact phone number (mobile or landline) of the KYC subject. | O <br> O |  | Must contain between 6 and 15 consecutive digits <br> First character can contain a ‘+’ or digit <br> Can contain spaces. |
| **emailAddress** | string | Email address of the KYC subject. | O <br> O |  |  |
| **employerName** | string | Employer name of the KYC subject. | O <br> O |  |  |
| **gender** | string | Gender of the KYC Object. | O <br> O |  | Length=1, Enumeration = (m)ale, (f)emale, (u)nspecified |
| **idDocument** | array | An array of fields containing the forms of identification that are associated with the subject. | O <br> O | [Id Document](#id-document-object) | |
| **nationality** | string | Nationality of the KYC subject. | O <br> O |  | Enumeration = [ISO Country Codes](/use-cases/p-2-p-transfers/enumerations.html#iso-country-codes) |
| **postalAddress** | object | A collection of fields that details the postal address of the KYC subject. | O <br> O | [Address](#address-object) |  |
| **occupation** | string | Occupation of the KYC subject. | O <br> O |  |  |

## Name Object


<div class="has-code-panel-block">

<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->

<code-group>
<code-block title="View">

<code-group>
<code-block title="post">
```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({div: '#foo'})
  }
}
```
</code-block>

<code-block title="get">
```php
<?php
echo str_word_count("PHP");
?> 
```
</code-block>

<code-block title="Get">

::: v-pre
`{{ Some pher information  }}`
:::
</code-block>
</code-group>

</code-block>

<code-block title="Code">
```php
<?php
echo str_word_count("PHP");
?> 
```
</code-block>
<!-- <copy-btn/> -->
</code-group>


<code-language-selector>
<code-lang title="Vue">

<code-group>
<code-block title="View">

<code-group>
<code-block title="post">
```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({div: '#foo'})
  }
}
```
</code-block>

<code-block title="get">
```php
<?php
echo str_word_count("PHP");
?> 
```
</code-block>

<code-block title="Get">

::: v-pre
`{{ Some pher information  }}`
:::
</code-block>
</code-group>

</code-block>

<code-block title="Code">
```php
<?php
echo str_word_count("PHP");
?> 
```
</code-block>

</code-group>

</code-lang>

<code-lang title="JavaScript">
<code-group>

<code-block title="View">

<code-group>
<code-block title="post">
```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({div: '#foo'})
  }
}
```
</code-block>

<code-block title="get">
```php
<?php
echo str_word_count("PHP");
?> 
```
</code-block>

<code-block title="Get">

::: v-pre
`{{ Some pher information  }}`
:::
</code-block>
</code-group>

</code-block>

<code-block title="Code">
```php
<?php
echo str_word_count("PHP");
?> 
```
</code-block>
</code-group>

</code-lang>

<code-lang title="Java">

<code-group>
<code-block title="View">

<code-group>
<code-block title="post">
```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({div: '#foo'})
  }
}
```
</code-block>

<code-block title="get">
```php
<?php
echo str_word_count("PHP");
?> 
```
</code-block>

<code-block title="Get">

::: v-pre
`{{ Some pher information  }}`
:::
</code-block>
</code-group>

</code-block>

<code-block title="Code">
```php
<?php
echo str_word_count("PHP");
?> 
```
</code-block>
</code-group>
</code-lang>
</code-language-selector>

</div>
</div>


| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **title** | string | The given title of the KYC subject, e.g. Mr, Mrs, Dr. | O <br> O |  |  |
| **firstName** | string | First name (also referred to as given name) of the KYC subject. | O <br> O |  |  |
| **middleName** | string | Middle Name of the KYC subject. | O <br> O |  |  |
| **lastName** | string | Surname (also referred to as last or family name) of the KYC subject. | O <br> O |  |  |
| **fullName** | string | The full name of the KYC subject. | O <br> O |  |  |
| **nativeName** | string | The full name expressed as in the native language. | O <br> O |  |  |

## Id Document Object

As part of KYC information, identification documentation is normally required. The Id Document Object enables documents pertaining to a subject’s identity to be described.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **idType** | string | Indicates the type of identification for the KYC subject, e.g. passport, driving licence etc. | M <br> M |  | Enumeration = [ID Types](/use-cases/p-2-p-transfers/enumerations.html#id-types) |
| **idNumber** | string | Reference pertaining to the type of identification for the KYC subject. | O <br> O |  |  |
| **issueDate**| date | Date of issue for the identification document. | O <br> O |  |  |
| **expiryDate** | date | Date of expiry for the identification document. | O <br> O |  |  |
| **issuer** | string | Indicates the organisation/government entity that issued the ID document. | O <br> O |  |  |
| **issuerPlace** | string | Place of issue for the identification type. | O <br> O |  |  |
| **issuerCountry** | string | Country where the identification type was issued.  | O <br> O |  | Enumeration = [ISO Country Codes](/use-cases/p-2-p-transfers/enumerations.html#iso-country-codes) |
| **otherIdDescription** | string | Where an ID Type of ‘otherid’ is specified, a description of the type of identification can be provided in this field. | O <br> O |  |  |

## Address Object

The address object holds the postal address of the subject. Due to variability of address information in a number of mobile money markets, only country is mandatory.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **addressLine1** | string | First line of the address. | O <br> O |  |  |
| **addressLine2** | string | Second line of the address. | O <br> O |  |  |
| **addressLine3** | string | Third line of the address. | O <br> O |  |  |
| **city** | string | City/Town. | O <br> O |  |  |
| **stateProvince** | string | State or Province. | O <br> O |  |  |
| **postalCode** | string | Postal Code. | O <br> O |  |  |
| **country** | string | Country | M <br> M |  | Enumeration = [ISO Country Codes](/use-cases/p-2-p-transfers/enumerations.html#iso-country-codes) |

## Account Identifiers Object

The Account Identifier object enables one or multiple identifiers to be provided to enable the recipient system to resolve the account/party.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Provides the account identifier type. | M <br> M |  | Enumeration = [Account Identifiers](/use-cases/p-2-p-transfers/enumerations.html#account-identifiers) |
| **value** | string | Provides the account identifier type value. | M <br> M |  |  |

## Metadata Object

The metadata object allows fields to be specified to convey administrative information regarding the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20The metadata object allows additional fields to be specified for the parent object in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Identifies the type of additional fields. | M <br> M |  |  |
| **value** | string | Identifies the value of the additional field. | M <br> M |  |  |

## Custom Data Object

The custom data object allows additional fields to be specified for the associated resource in the form of key/value pairs. Additional fields should only be used where no suitable defined field match can be found. The number of key/value pairs is limited to 20.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **key** | string | Identifies the type of additional fields. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |
| **value** | string | Identifies the value of the additional field. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |

## Fees Object

An object that enables fees that are differentiated by type to be provided and/or returned.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **feeType** | string | Defines the type of fee. | M <br> M |  |  |
| **feeAmount** | string | Defines the amount of the fee. | M <br> M |  | Please refer to API Fundamentals document for amount validation rules. |
| **feeCurrency** | string | Defines the currency for the given fee. | M <br> M |  | Enumeration = [ISO Currency Codes](/use-cases/p-2-p-transfers/enumerations.html#iso-currency-codes) |

## Requesting Organisation Object

An object that details the originating organisation of the request.

| **Name** | **Type** | **Description** |  | **Reference** | **Validation** |
|:--|:--|:--|:--|:--|:--|
| **requestingOrganisationIdentifierType** | string | Identifies the identifier type of the requesting organisation. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  | ‘swiftbic’, ‘lei’, ‘organisationid |
| **requestingOrganisationIdentifier** | string | Contains the requesting organisation identifier. | &#8594;&nbsp;M <br> &#8592;&nbsp;M |  |  |

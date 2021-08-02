---
pageClass: api-page has-code-panel
---

<side-code-panel/>

# Heading 1

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

# Heading 1

## Heading 2

Fermentum, at volutpat tincidunt ut. Dui id aliquam sed interdum imperdiet. Donec magna egestas in neque, sed tempor nisl dapibus.

### Heading 3

Fermentum, at volutpat tincidunt ut. Dui id aliquam sed interdum imperdiet. Donec magna egestas in neque, sed tempor nisl dapibus.

## Tips

::: tip Note
Hendrerit rhoncus, neque nunc massa purus risus.
:::

::: danger Warning
Hendrerit rhoncus, neque nunc massa purus risus.
:::

::: warning Warning
Hendrerit rhoncus, neque nunc massa purus risus.
:::


## Sidebar code sections

### Single language

This will require a single group use as per VuePress documentation, or as per the next example (here and next we assume that the code group is wrapped by wrappers from above). 

In a few word just use `<code-group>` tag as a wrapper for a View `<code-block>` and inside the View add the other combination of `<code-group>` and `<code-block>` to include the Object name and info.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
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
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Operation**     | **Path**         | **Description**  |
| ------------- |:-------------|------|
| **POST**          | POST <br> */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL. |
| **View**          | GET <br>  */transactions/{transactionReference}* |   To view a transaction. |
| **Update** | PATCH */transactions/{transactionReference}*  | To update the transactionStatus of a transaction.|

<br><br>

### 1 method + 1 language (w/o a switcher) 

This is an example of how the right sidebar can be used for a single method/object w/o adding a language switcher.

E.g. a **single method/object** needs to be described in **one or few languages**.

Just use the default 2 groups View and Code, where Code will include a group of two blocks are named as languages, e.g. PHP and JavaScript. 


<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
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
</code-group>

</code-block>

<code-block title="Code">

<code-group>
<code-block title="PHP">
```php
<?php 
//This is PHP
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

<code-block title="JavaScript">
```javascript
//This is JavaScript
require_once("mm-api.php");
try {
  $TransferId = 22222222;
  $Transfer = $Api->Transfers->Get($TransferId);  
} catch(MM-API\Libraries\ResponseException $e) {
  $e->GetErrorDetails() 
} catch(MM-API\Libraries\Exception $e) {
}  
```
</code-block>

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Operation**     | **Path**         | **Description**  |
| ------------- |:-------------|------|
| **POST**          | POST <br> */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL. |

<br><br><br><br><br><br><br><br><br><br>


### Multiple methods/objects and languages (w/o switcher)

This is an example of how multiple methods/objects and languages can be supported. 

E.g. we need 2 methods and code examples in two languages for them as separate tabs / `<code-group>`s.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->

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

</code-group>

</code-block>

<code-block title="PHP">
<code-group>
<code-block title="POST">
```php
<?php 
//This is PHP
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
//This is PHP
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

</code-group>
</code-block>

<code-block title="JavaScript">
<code-group>
<code-block title="POST">
```javascript
//This is JavaScript
try {
  $TransferId = 11111111;
  $Transfer = $Api->Transfers->Get($TransferId);  
} catch(MM-API\Libraries\ResponseException $e) {
  $e->GetErrorDetails() 
} catch(MM-API\Libraries\Exception $e) {
}  
```
</code-block>

<code-block title="GET">
```javascript
//This is JavaScript
try {
  $TransferId = 22222222;
  $Transfer = $Api->Transfers->Get($TransferId);  
} catch(MM-API\Libraries\ResponseException $e)
```
</code-block>

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Operation**     | **Path**         | **Description**  |
| ------------- |:-------------|------|
| **POST**          | POST <br> */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL. |
| **View**          | GET <br>  */transactions/{transactionReference}* |   To view a transaction. |

<br><br><br><br><br><br><br><br><br><br>

### Multiple methods/objects and languages (with switcher)

This is an example of how multiple methods/objects and languages can be supported. 

E.g. we need 2 methods and code examples in two languages for them. 

This will require adding methods and code examples for all languages wrapping them into `<code-language-selector>` tags.


<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->

<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->


<code-language-selector>
<code-lang title="PHP">

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

</code-group>

</code-block>

<code-block title="Code">
<code-group>
<code-block title="POST">
```php
<?php 
//This is PHP
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
//This is PHP
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

</code-group>
</code-block>
</code-group>
</code-lang>

<code-lang title="JavaScript">
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

</code-group>

</code-block>

<code-block title="Code">
<code-group>
<code-block title="POST">
```javascript
//This is JavaScript
try {
  $TransferId = 11111111;
  $Transfer = $Api->Transfers->Get($TransferId);  
} catch(MM-API\Libraries\ResponseException $e) {
  $e->GetErrorDetails() 
} catch(MM-API\Libraries\Exception $e) {
}  
```
</code-block>

<code-block title="GET">
```javascript
//This is JavaScript
try {
  $TransferId = 22222222;
  $Transfer = $Api->Transfers->Get($TransferId);  
} catch(MM-API\Libraries\ResponseException $e)
```
</code-block>

</code-group>
</code-block>
</code-group>
</code-lang>

</code-language-selector>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

| **Operation**     | **Path**         | **Description**  |
| ------------- |:-------------|------|
| **POST**          | POST <br> */transactions/type/{transactiontype}* | To be used for transaction creation when the provider’s API Gateway requires that the transaction type be identified in the URL. |
| **View**          | GET <br>  */transactions/{transactionReference}* |   To view a transaction. |


## Table

| Audience        | Usage           | Role  |
|:--------------|:-------------|:-----|
| Mobile Money Providers | To understand how to implement the Mobile Money API to receive payments from merchants. | API provider |
| Merchants     | To understand how to implement the Mobile Money API to accept mobile money payments.     |  API consumer |

Fermentum, at volutpat tincidunt ut. Dui id aliquam sed interdum imperdiet. Donec magna egestas in neque, sed tempor nisl dapibus.

## Code examples

<code-group>
<code-block title="View">
<code-group>
<code-block title="Post">
  <div class="api-route" style="color: #BEBEBF">POST/transactions/type/merchantpay \</div>

  <div class="code-body">

  <p>curl --location --request POST 'https://sandbox.mobilemoneyapi.io/simulator/v1.2/passthrough/mm/transactions/type/merchantpay'\<br>
  --header 'X-CorrelationID: Please enter your UUID here'\ <br>
  --header 'X-Callback-URL: Please enter your callback URL here'\<br>
  --header 'Content-Type: application/json'\<br>
  --data-raw '{<br>
  &nbsp;&nbsp;&nbsp;&nbsp;"amount": "200.00",</p>

  </div>
</code-block>
</code-group>
</code-block>

<code-block title="Code">
::: v-pre
`{{ This will be displayed as-is }}`
:::
</code-block>
</code-group>

<code-group>

<code-block title="JS">
```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({div: '#foo'})
  }
}
```
</code-block>

<code-block title="PHP">
```php
<?php
echo str_word_count("PHP");
?> 
```
</code-block>
</code-group>

```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({div: '#foo'})
  }
}
```

```php
<?php
echo str_word_count("PHP");
?> 
```

```vue
<img :src="$withBase('/foo.png')" alt="foo">
```

<cta-2-col
  :ctaCards="[
    {
      title: 'Explore documentation',
      text: 'Review the documentation for particular use case.',
      link: '#',
      linkText: 'Merchant payments Docs',
    },
    {
      title: 'Open OAS UI',
      text: 'Visualize and interact with the API’s resources.',
      link: '#',
      linkText: 'Merchant payments Open OAS UI',
    }
  ]"
/>

<view-link
  :blockText="'View example in postman collection.'"
  :link="'#'"
  :linkText="'Open Postman'"
/>

<IframeComponent/>

::: details
This is a details block, which does not work in IE / Edge
:::

::: v-pre
`{{ This will be displayed as-is }}`
:::

## Demo component

<demo-component/>

## Image in markdown

![Image of Yaktocat](/images/test.jpg)


[[toc]]

## Tabs
:::: tabs type:board-card
::: tab PHP lazy
```php
<?php
echo str_word_count("PHP example");
?> 
```
:::
::: tab JavaScript lazy
```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({div: '#foo'})
  }
}
```
:::
::::

<code-group>
<code-block title="YARN">
```bash
yarn create vuepress-site [optionalDirectoryName]
```
</code-block>

<code-block title="NPM">
```bash
npx create-vuepress-site [optionalDirectoryName]
```
</code-block>
</code-group>

## Tech diagrams with mermaids

<mermaid>
sequenceDiagram
    participant Merchant
    participant Mobile Money Provider
    participant Payer
    Merchant->>+Mobile Money Provider: POST /transactions/type/merchantpay <b>important</b> <a href='http://google.com'>link</a>
    Note right of Mobile Money Provider: (1) The merchant submits the payment request for processing<br>to the MMP. The MMP will return the Request State object<br>to indicate that the request is "pending".
    Mobile Money Provider-->>-Merchant: HTTP 202 (Request State Object)
    Mobile Money Provider->>+Payer: Obtain Customer Authorisation 
    Note right of Payer: (2) The Payer is requested by the MMP to<br>authorise the payment. This can be<br>achieved through a number of means<br>including USSD Push and One Time Code.<br>OpenId can also be used for Payer<br>authorisation. 
    Payer-->>-Mobile Money Provider: (Authorised)
    Mobile Money Provider->>+Merchant: PUT (Callback URL) (transctions Object)
    Note right of Mobile Money Provider: (3) The MMP informs the Merchant that the<br>transaction has been successfully completed<br>by returning the final representation of the<br>transaction.
    Merchant-->>-Mobile Money Provider: HTTP 204

</mermaid>

## Test
Test me please

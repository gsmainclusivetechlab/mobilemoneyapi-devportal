---
pageClass: api-page has-back-btn
---

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
echo str_word_count("PHP is givno");
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

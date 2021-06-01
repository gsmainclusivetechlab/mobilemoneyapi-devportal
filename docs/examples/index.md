---
pageClass: test
---

# Introduction Test

It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

## Document
<IframeComponent/>

::: v-pre
`{{ This will be displayed as-is }}`
:::

## Demo component

<demo-component/>

## Image in markdown

![Image of Yaktocat](/images/test.jpg)

## Code examples

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
## Tables

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

[[toc]]

## Tips

::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
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

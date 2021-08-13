---
sidebarDepth: 1
pageClass: api-page has-code-panel
title: Merchant Payments - Use Case Scenarios
---
<!-- required page classes .api-page .has-code-panel -->


<side-code-panel/>
<!-- required component to open-close right-side panel -->

# About Use Case Scenarios

The GSMA Simulator for the Mobile Money API is a simulated API implementation developed by the GSMA to facilitate API adoption and testing, thereby decreasing implementation effort and time to market for Mobile Money Providers and ecosystem Service Providers. Developers can navigate through Use Case Scenarios providing access to a set of pre-defined Postman Collections for the Simulator to try out some of the most common mobile money API use cases, or directly access the OAS interface for the API Specification and use the API Try It Out functionality from there.

## Payee-Initiated Merchant Payment

In this example, an asynchronous payment flow is used with a final callback. The merchant initiates the request and will be credited when the payer approves the request.

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
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "X-Callback-URL": ["Please enter your callback URL here"],
   "Content-Type": ["application/json"]
}
---
Body Parameters:
{
    "amount": "200.00",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "creditParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "currency": "RWF"
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


</code-group>
</code-block>
</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

<mermaid>
  sequenceDiagram
    participant Merchant
    participant Mobile Money Provider 
    participant Payer  
    Merchant->>Mobile Money Provider: POST /transactions/type/merchantpay
    activate Merchant
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Merchant submits the payment request for processing<br>to the MMP. The MMP will return the Request State object<br>to indicate that the request is 'pending'.
    Mobile Money Provider-->>Merchant: HTTP 202 (Request State Object)
    deactivate Merchant
    Mobile Money Provider->>Payer: Obtain Customer Authorisation
    activate Payer
    Note right of Payer: (2) The Payer is requested to the MMP to<br>authorise the payment. This can be<br>achieved through a number of means<br>including USSD Push and One Time Code.<br>OpenId can also be used for Payer authorisation.
    Payer-->>Mobile Money Provider: (Authorised)
    deactivate Payer
    activate Merchant
    Mobile Money Provider->>Merchant: PUT {Callback URL} (Transactions Object)
    Note right of Mobile Money Provider: (3) The MMP informs the Merchant that the<br>transaction has been successfully completed<br>by returning the final representation of the<br>transaction.
    Merchant-->>Mobile Money Provider: HTTP 204
    deactivate Merchant
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcGEr4" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLNh" target="_blank">Open Postman Collection with Authentication</a>
</div>


## Payee-Initiated Merchant Payment Failure

In this example, an asynchronous payment flow is used with a final callback that contains the reason for failure.

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
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "X-Callback-URL": ["Please enter your callback URL here"],
   "Content-Type": ["application/json"]
}
---
Body Parameters:
{
    "amount": "200.00",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "creditParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "currency": "RWF"
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

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

<mermaid>
sequenceDiagram
    participant Merchant
    participant Mobile Money Provider 
    participant Payer  
    Merchant->>Mobile Money Provider: POST /transactions/type/merchantpay
    activate Merchant
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Merchant submits the payment request for processing<br>to the MMP. The MMP will return the Request State object<br>to indicate that the request is 'pending'.
    Mobile Money Provider-->>Merchant: HTTP 202 (Request State Object)
    deactivate Merchant
    Mobile Money Provider->>Payer: Obtain Customer Authorisation
    activate Payer
    Note right of Payer: (2) The Payer is requested to the MMP to<br>authorise the payment. This can be<br>achieved through a number of means<br>including USSD Push and One Time Code.<br>OpenId can also be used for Payer authorisation.
    Payer-->>Mobile Money Provider: (Authorised)
    deactivate Payer
    activate Merchant
    Mobile Money Provider->>Merchant: PUT {Callback URL} (Transactions Object)
    Note right of Mobile Money Provider: (3) The MMP informs the Merchant that the<br>transaction has been successfully completed<br>by returning the final representation of the<br>transaction.
    Merchant-->>Mobile Money Provider: HTTP 204
    deactivate Merchant
    deactivate Mobile Money Provider
</mermaid>




## Payee-Initiated Merchant Payment using the Polling Method

In this example, an asynchronous payment flow is used with the polling method. The client polls against the request state object to determine the outcome of the payment request.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```bash
POST .../transactions/type/merchantpay
---
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "Content-Type": ["application/json"]
}
---
Body Parameters:
{
    "amount": "200.00",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "creditParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "currency": "RWF"
}
```
</code-block>

<code-block title="GET">
```json
GET .../requeststates/Place the Server Correlation Id here
```
</code-block>

<code-block title="GET">
```json
GET .../transactions/Place Transaction Reference here
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

<code-block title="GET">
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

<code-block title="GET">
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

<mermaid>
sequenceDiagram
    participant Merchant
    participant Mobile Money Provider 
    participant Payer
    Merchant->>Mobile Money Provider: POST /transactions/type/merchantpay
    activate Merchant
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Merchant submits the payment request for processing<br>to the MMP. The MMP will return the Request State object<br>to indicate that the request is 'pending'.
    Mobile Money Provider-->>Merchant: HTTP 202 (Request State Object)
    deactivate Merchant      
    par
        loop 
            activate Merchant
            Merchant->>Mobile Money Provider: GET /requeststates/{serverCorrelationId}
            Note right of Mobile Money Provider: (2) The Merchant polls the MMP for the Request State until the<br>transaction is authorised or declined or until the polling limit<br>is reached.
            Mobile Money Provider-->>Merchant: HTTP 200 (Request State Object)
        end
    and
        Mobile Money Provider->>Payer: Obtain Customer Authorisation
        activate Payer
        Note right of Payer: (3) The Payer is requested to the MMP to<br>authorise the payment. This can be<br>achieved through a number of means<br>including USSD Push and One Time Code.<br>OpenId can also be used for Payer<br>authorisation.
        Payer-->>Mobile Money Provider: (Authorised)
    end
    deactivate Merchant
    deactivate Payer
    deactivate Mobile Money Provider
    opt
        activate Mobile Money Provider
        activate Merchant
        Merchant->>Mobile Money Provider: GET /transactions/transactionsReference
        Note right of Mobile Money Provider: (4) The Merchant can use the objectReference returned in the<br>Request State to retrieve a representation of the complete<br>payment transaction.
        Mobile Money Provider-->>Merchant: HTTP 200 (Transactions Object)
    end    
    deactivate Merchant
    deactivate Mobile Money Provider
</mermaid>



<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcGEvL" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLXR" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Payer-Initiated Merchant Payment

In this example, an asynchronous payment flow is used with a final callback. The payer initiates the request and will be debited upon successful completion of the request.

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
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "X-Callback-URL": ["Please enter your callback URL here"],
   "Content-Type": ["application/json"]
}
---
Body Parameters:
{
    "amount": "200.00",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "creditParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "currency": "RWF"
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

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

<mermaid>
sequenceDiagram
    participant Payer  
    participant Mobile Money Provider  
    participant Merchant
    Payer->>Mobile Money Provider: POST /transactions/type/merchantpay
    activate Payer
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Payer's channel (e.g. Mobile Money App) submits the<br>payment request for processing to the MMP. The MMP will<br>return the Request State object to indicate that the request<br>is 'pending'.
    Mobile Money Provider-->>Payer: HTTP 202 (Request State Object)
    deactivate Payer   
    Mobile Money Provider->>Payer: PUT {Callback URL} (transactions Object)
    activate Payer
    Note right of Mobile Money Provider: (2) The MMP informs the Payer's channel that the<br>payment has been successfully completed<br>by returning the final representation of the<br>transaction.
    Payer-->>Mobile Money Provider: HTTP 204  
    deactivate Payer
    activate Merchant
    Mobile Money Provider->>Merchant: Notify
    Note right of Merchant: (3) The MMP notifies the merchant tha the<br>payment has successfully compeleted.
    deactivate Mobile Money Provider
    deactivate Merchant
</mermaid>


<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcGEvP" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLXU" target="_blank">Open Postman Collection with Authentication</a>
</div>


## Payer-Initiated Merchant Payment Failure

In this example, an asynchronous payment flow is used with a final callback that contains the reason for failure.

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
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "X-Callback-URL": ["Please enter your callback URL here"],
   "Content-Type": ["application/json"]
}
---
Body Parameters:
{
    "amount": "200.00",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "creditParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "currency": "RWF"
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

</code-group>
</code-block>

</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

<mermaid>
sequenceDiagram
    participant Payer  
    participant Mobile Money Provider  
    participant Merchant
    Payer->>Mobile Money Provider: POST /transactions/type/merchantpay
    activate Payer
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Payer's channel (e.g. Mobile Money App) submits the<br>payment request for processing to the MMP. The MMP will<br>return the Request State object to indicate that the request<br>is 'pending'.
    Mobile Money Provider-->>Payer: HTTP 202 (Request State Object)
    deactivate Payer  
    Mobile Money Provider->>Payer: PUT {Callback URL} (Error Object)
    activate Payer
    Note right of Mobile Money Provider: (2) The MMP informs the Payer's channel that the<br>payment has been failed and returns the error<br>object detailing the reason for failure.
    Payer-->>Mobile Money Provider: HTTP 204   
    deactivate Payer
    activate Merchant
    Mobile Money Provider->>Merchant: Notify
    Note right of Merchant: (3) The MMP notifies the merchant tha the<br>payment has failed.
    deactivate Mobile Money Provider
    deactivate Merchant
</mermaid>



## Payee-Initiated Merchant Payment using a Pre-authorised Payment Code

In this example the /authorisationcodes API is used to obtain a pre-authorised payment code. This in turn is presented by the payer to the merchant who initiates the payment request. Both flows in the diagram result in a callback. This flow is primarily used for payment on delivery use cases.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->

<code-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
POST .../accounts/accountid/2000/authorisationcodes
---
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "X-Callback-URL": ["Please enter your callback URL here"],
   "Content-Type": ["application/json"]
}
---
Body Parameters:
{
    "requestDate": "2018-07-03T10:43:27.405Z",
    "currency": "GBP",
    "amount": "1000.00"
}
```
</code-block>

<code-block title="POST">
```json
POST .../transactions/type/merchantpay
---
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "X-Callback-URL": ["Please enter your callback URL here"],
   "Content-Type": ["application/json"]
}
---
Body Parameters:
{
    "amount": "200.00",
    "type": "transfer",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "creditParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "currency": "RWF",
    "oneTimeCode": "Place your Authorisation Code here"
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

<code-block title="POST">
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

<code-block title="POST">
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

<mermaid>
sequenceDiagram
    participant Payer  
    participant Merchant
    participant Mobile Money Provider    
    Payer->>Mobile Money Provider: POST /accounts/{identifierType}/{identifier}/authorisationcodes
    activate Payer
    activate Mobile Money Provider 
    Note right of Mobile Money Provider: (1) The Payer's channel (e.g. Mobile Money App) submits<br>the request to generate an authorisation code to the<br>MMP. The MMP will return the Request State object to<br>indicate that the request is 'pending'.
    Mobile Money Provider-->>Payer: HTTP 202 (Request State Object)
    Mobile Money Provider->>Payer: PUT {Callback URL} (Authorisation Code Object)
    Note right of Mobile Money Provider: (2) The MMP informs the Payer's channel that the<br>request has been successfully completed by<br>returing the final representation of the<br>authorisation code.
    Payer-->>Mobile Money Provider: HTTP 204
    deactivate Payer
    deactivate Mobile Money Provider    
    Note right of Payer: (3) The Payer communicates the code to the merchant. This<br>can be via QR code or by verbally communicating the code. 
    Payer->>Merchant: Communicates Code Verbally or via QR Presentment
    activate Payer
    activate Merchant
    activate Mobile Money Provider 
    Merchant->>Mobile Money Provider: POST /transactions/type/merchantpay
    Note right of Mobile Money Provider: (4) The Merchant submits the payment request for<br>processing to the MMP. The request will contain the<br>authorisation code. The MMP will return the Request<br>State object to indicate that the request is 'pending'.
    Mobile Money Provider-->>Merchant: HTTP 202 (Request State Object)
    deactivate Merchant
    Mobile Money Provider->>Merchant: PUT {Callback URL} (Transactions Object)
    activate Merchant
    Note right of Mobile Money Provider: (5) The MMP informs the Merchant that the<br>transaction has been successfully completed by<br>returning the final representation of the<br>transaction.
    Merchant-->>Mobile Money Provider: HTTP 204
    deactivate Payer
    deactivate Merchant
    deactivate Mobile Money Provider 
</mermaid>


<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcGEzm" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLTA" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Merchant Payment Refund

Merchants can issue a refund to payers. In this diagram, the refund is not linked to the original transaction and hence the /transactions API is used. Where a refund needs to be linked to the original transaction, the /reversals API must be used to perform the refund.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->

<code-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
POST .../transactions/type/adjustment
---
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "X-Callback-URL": ["Please enter your callback URL here"],
   "Content-Type": ["application/json"]
}
---
Body Parameters:
{
    "amount": "200.00",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "creditParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "currency": "RWF"
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
</code-group>

</code-block>
</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

<mermaid>
sequenceDiagram
    participant Merchant
    participant Mobile Money Provider 
    Merchant->>Mobile Money Provider: POST /transactions/type/adjustment
    activate Merchant
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Merchant submits the refund request for processing to<br>the MMP. The MMP will return the Request State object to<br>indicate that the request is 'pending'.
    Mobile Money Provider-->>Merchant: HTTP 202 (Request State Object)
    Mobile Money Provider->>Merchant: PUT {Callback URL} (Transactions Object)
    Note right of Mobile Money Provider: (2) The MMP informs the Merchant that the<br>refund has been successfully completed by<br>returning the final representation of the refund.
    Merchant-->>Mobile Money Provider: HTTP 204
    deactivate Merchant
    deactivate Mobile Money Provider
</mermaid>



<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcGEzq" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLJG" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Merchant Payment Reversal

In some failure scenarios, a merchant may need to reverse a transaction. This diagram illustrates a reversal with the final result communicated via the callback.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->

<code-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
POST .../transactions/Place Reference of Txn to be Reversed here/reversals
---
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "X-Callback-URL": ["Please enter your callback URL here"],
   "Content-Type": ["application/json"]
}
---
Body Parameters:
{
    "type": "reversal"
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
</code-group>

</code-block>
</code-group>

</div>
<!-- end of right-side code blocks holder -->
</div>
<!-- end of right-side code blocks wrapper -->

<mermaid>
sequenceDiagram
    participant Merchant
    participant Mobile Money Provider 
    Merchant->>Mobile Money Provider: POST /transactions/{original transaction reference}/reversals
    activate Merchant
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Merchant submits the reversal request for processing<br>to the MMP - passing the reference of the transaction that<br>is to be reversed. The MMP will return the Request State<br>object to indicate that the request is 'pending'.
    Mobile Money Provider-->>Merchant: HTTP 202 (Request State Object)
    Mobile Money Provider->>Merchant: PUT {Callback URL} (Reversal Object)
    Note right of Mobile Money Provider: (2) The MMP informs the Merchant that the<br>reversal has been successfully completed by<br>returning the final representation of the<br>reversal transaction.
    Merchant-->>Mobile Money Provider: HTTP 204
    deactivate Merchant
    deactivate Mobile Money Provider
</mermaid>


<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcGF59" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLJK" target="_blank">Open Postman Collection with Authentication</a>
</div>


## Obtain a Merchant Balance

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->

<code-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json
GET .../accounts/accountid/2000/balance
```
</code-block>
</code-group>

</code-block>

<code-block title="JavaScript">

<code-group>
<code-block title="GET">
```javascript
//some JavaScript code here
```
</code-block>

</code-group>
</code-block>

<code-block title="PHP">

<code-group>
<code-block title="GET">
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

<mermaid>
sequenceDiagram
    participant Merchant
    participant Mobile Money Provider 
    Merchant->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/balance
    activate Merchant
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) Obtain the balance of the<br>requested account.
    Mobile Money Provider-->>Merchant: HTTP 200 (Balance Object)
    deactivate Merchant
    deactivate Mobile Money Provider
</mermaid>


<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDdiZFV" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDL9Q" target="_blank">Open Postman Collection with Authentication</a>
</div>


## Retrieve Payments for a Merchant

This diagram illustrates use of a cursor mechanism to retrieve all payments for a merchant via multiple requests.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->

<code-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json
GET .../accounts/accountid/2000/transactions?offset=0&limit=20
---
Params: 
{
    "offset": 0,
    "limit": 20
}
```
</code-block>
</code-group>

</code-block>

<code-block title="JavaScript">

<code-group>
<code-block title="GET">
```javascript
//some JavaScript code here
```
</code-block>

</code-group>
</code-block>

<code-block title="PHP">

<code-group>
<code-block title="GET">
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

<mermaid>
sequenceDiagram
    participant Merchant
    participant Mobile Money Provider 
    Merchant->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/transactions?offset=0&limit=20
    activate Merchant
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Merchant requests up to<br>20 transactions for the<br>account from the MMP.
    Mobile Money Provider-->>Merchant: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
    Note right of Mobile Money Provider: (2) The MMP returns an array of<br>20 transactions and indicates<br>via a response header that<br>there are 40 records<br>available in total.    
    Merchant->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/transactions?offset=20&limit=20
    Note right of Mobile Money Provider: (3) The Merchant requests the<br>remaining transactions for<br>the account from the MMP.
    Mobile Money Provider-->>Merchant: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
    deactivate Merchant
    deactivate Mobile Money Provider
</mermaid>


<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDdiZFX" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1w6" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Check for Service Availability

The Heartbeat API is used for monitoring purposes and establishes whether the mobile money provider is in a state that enables a client to submit a request for processing.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->

<code-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json
GET .../heartbeat
```
</code-block>
</code-group>

</code-block>

<code-block title="JavaScript">

<code-group>
<code-block title="GET">
```javascript
//some JavaScript code here
```
</code-block>

</code-group>
</code-block>

<code-block title="PHP">

<code-group>
<code-block title="GET">
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

<mermaid>
sequenceDiagram
    participant Merchant
    participant Mobile Money Provider 
    Merchant->>Mobile Money Provider: GET /heartbeat
    activate Merchant
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Merchant requests the availability<br>of the service from the MMP.
    Mobile Money Provider-->>Merchant: HTTP 200 (Heartbeat Object)
    Note right of Mobile Money Provider: (2) The MMP returns the availability of<br>the service - available, unavailable<br>or degraded.
    deactivate Merchant
    deactivate Mobile Money Provider
</mermaid>


<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7p" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCQbS8z" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Retrieve a Missing API Response

This API can be used by the merchant to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the mobile money provider.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->

<code-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json
GET .../responses/Please enter your UUID here
```
</code-block>
</code-group>

</code-block>

<code-block title="JavaScript">

<code-group>
<code-block title="GET">
```javascript
//some JavaScript code here
```
</code-block>

</code-group>
</code-block>

<code-block title="PHP">

<code-group>
<code-block title="GET">
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
<mermaid>
sequenceDiagram
    participant Merchant
    participant Mobile Money Provider 
    Merchant->>Mobile Money Provider: GET /responses{clientCorrelationId}
    activate Merchant
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) Using the Merchant's<br>clientCorrelationId, a request for the<br>missing API response is sent.
    Mobile Money Provider-->>Merchant: HTTP 200 (Responses Object) 
    Note right of Mobile Money Provider: (2) A Responses object is returned<br>containing a link to the missing<br>resource.  
    Merchant->>Mobile Money Provider: GET /{link}
    Note right of Mobile Money Provider: (3) The Merchant uses the link to obtain<br>a representation of the missing<br>resource.
    Mobile Money Provider-->>Merchant: HTTP 200 (Requested Object)
    deactivate Merchant
    deactivate Mobile Money Provider
</mermaid>


<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7v" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1rj" target="_blank">Open Postman Collection with Authentication</a>
</div>

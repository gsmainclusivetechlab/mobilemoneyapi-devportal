---
sidebarDepth: 1
pageClass: api-page has-code-panel
title: Recurring Payments - Use Case Scenarios
---
<!-- required page classes .api-page .has-code-panel -->


<side-code-panel/>
<!-- required component to open-close right-side panel -->

# About Use Case Scenarios

The GSMA Simulator for the Mobile Money API is a simulated API implementation developed by the GSMA to facilitate API adoption and testing, thereby decreasing implementation effort and time to market for Mobile Money Providers and ecosystem Service Providers. Developers can navigate through Use Case Scenarios providing access to a set of pre-defined Postman Collections for the Simulator to try out some of the most common mobile money API use cases, or directly access the OAS interface for the API Specification and use the API Try It Out functionality from there.

## Setup a Recurring Payment

This diagram illustrates the setting-up of a recurring payment via a debit mandate. The service provider initiates the request which is authorised by the account holding customer. In this diagram, an asynchronous flow is used with a final callback.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json{1}
POST .../accounts/accountid/2000/debitmandates
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
   "payee": [
    {
      "key": "accountid",
      "value": "2999"
    }
  ],
    "requestDate": "2017-07-21T17:32:28Z",
    "startDate": "2018-11-20",
    "currency": "GBP",
    "amountLimit": "1000.00",
    "endDate": "2018-11-20",
    "numberOfPayments": "2",
    "frequencyType": "sixmonths",
    "customData": [
        {
        "key": "keytest",
        "value": "keyvalue"
        }
    ]        
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

<mermaid>
sequenceDiagram
    participant Service Provider
    participant Mobile Money Provider 
    participant Account Holder  
    Service Provider->>Mobile Money Provider: POST /accounts/{identifierType}/{identifier}/debitmandates
    activate Service Provider
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The service provider submits the debit mandate request for<br>processing to the MMP. The MMP will return the Request<br>State object to indicate that the request is 'pending'.
    Mobile Money Provider-->>Service Provider: HTTP 202 (Request State Object)
    Mobile Money Provider->>Account Holder: Obtain Customer Authorisation
    activate Account Holder
    Note right of Account Holder: (2) The customer is requested to the MMP to<br>authorise the mandate. This can be<br>achieved through a number of means<br>including USSD Push and One Time Code.<br>OpenId can also be used to secure<br>customer authorisation.
    Account Holder-->>Mobile Money Provider: (Authorised)   
    deactivate Account Holder
    Mobile Money Provider->>Service Provider: PUT {Callback URL} (Debit Mandates Object)
    Note right of Mobile Money Provider: (3) The MMP informs the service provider that the<br>debit mandate has been successfully created<br>by returning the final representation of the<br>debit mandate.
    Service Provider-->>Mobile Money Provider: HTTP 204
    deactivate Service Provider
    deactivate Mobile Money Provider
</mermaid>


<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDakaJt" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoFLoh" target="_blank">Open Postman Collection with Authentication</a>
</div>


## Setup a Recurring Payment Failure

In this diagram, the account holder declines to provide authorisation to setup the recurring payment. The service provider receives a callback containing an error object detailing the reason for failure.

<mermaid>
sequenceDiagram
    participant Service Provider
    participant Mobile Money Provider 
    participant Account Holder  
    Service Provider->>Mobile Money Provider: POST /accounts/{identifierType}/{identifier}/debitmandates
    activate Service Provider
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The service provider submits the payment request for<br>processing to the MMP. The MMP will return the Request<br>State object to indicate that the request is 'pending'.
    Mobile Money Provider-->>Service Provider: HTTP 202 (Request State Object)
    Mobile Money Provider->>Account Holder: Obtain Customer Authorisation
    activate Account Holder
    Note right of Account Holder: (2) The customer declines the request by the<br>MMP to accept the debit mandate.
    Account Holder-->>Mobile Money Provider: (Declined)   
    deactivate Account Holder
    Mobile Money Provider->>Service Provider: PUT {Callback URL} (Error Object)
    Note right of Mobile Money Provider: (3) The MMP informs the service provider that the<br>debit mandate has been declined by returning<br>an error object.
    Service Provider-->>Mobile Money Provider: HTTP 204
    deactivate Service Provider
    deactivate Mobile Money Provider
</mermaid>


## Take a Recurring Payment

In this diagram, the service provider initiates a payment request to the FSP to debit the account-holders account as per the debit mandate.

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
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "X-Callback-URL": ["Please enter your callback URL here"],
   "Content-Type": ["application/json"]
}
---
Body parameters: 
{
    "amount": "200.00",
    "debitParty": [
        {
            "key": "mandatereference",
            "value": "Place your Mandate Reference here"
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

<mermaid>
sequenceDiagram
    participant Service Provider
    participant Mobile Money Provider 
    Service Provider->>Mobile Money Provider: POST /transactions/type/merchantpay
    activate Service Provider
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The service provider submits the payment request for<br>processing to the MMP, ensuring that a mandate reference<br>is provided for the payment. The MMP will return the<br>Request State object to indicate that the request is<br>'pending'.
    Mobile Money Provider-->>Service Provider: HTTP 202 (Request State Object)    
    deactivate Service Provider
    Mobile Money Provider->>Service Provider: PUT {Callback URL} (Transactions Object)
    activate Service Provider
    Note right of Mobile Money Provider: (2) The MMP informs the service provider that the<br>transaction has been successfully completed<br>by returning the final representation of the<br>transaction.
    Service Provider-->>Mobile Money Provider: HTTP 204
    deactivate Service Provider
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCLAUy6" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoFLt8" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Take a Recurring Payment Failure

In this diagram, the service provider initiates a payment request to the FSP to debit the account-holders account as per the debit mandate. The FSP is unable to process the payment and returns a callback containing the error object.

<mermaid>
sequenceDiagram
    participant Service Provider
    participant Mobile Money Provider 
    Service Provider->>Mobile Money Provider: POST /transactions/type/merchantpay
    activate Service Provider
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The service provider submits the payment request for<br>processing to the MMP, ensuring that a mandate reference<br>is provided for the payment. The MMP will return the<br>Request State object to indicate that the request is<br>'pending'.
    Mobile Money Provider-->>Service Provider: HTTP 202 (Request State Object)  
    deactivate Service Provider
    Mobile Money Provider->>Service Provider: PUT {Callback URL} (Error Object)
    activate Service Provider
    Note right of Mobile Money Provider: (2) The MMP informs the service provider that the<br>payment has failed and returns the error<br>object detailing the reason for failure.
    Service Provider-->>Mobile Money Provider: HTTP 204
    deactivate Service Provider
    deactivate Mobile Money Provider
</mermaid>



## Take a Recurring Payment using the Polling Method

In this example, an asynchronous payment flow is used with the polling method. The client polls against the request state object to determine the outcome of the payment request.

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
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "Content-Type": ["application/json"]
}
---
Body parameters: 
{
    "amount": "200.00",
    "debitParty": [
        {
            "key": "mandatereference",
            "value": "Place your Mandate Reference here"
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
```json{1}
GET .../requeststates/Place the Server Correlation Id here
```
</code-block>

<code-block title="GET">
```json{1}
GET .../transactions/Place Transaction Reference here
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

<code-block title="GET">
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

<code-block title="GET">
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

<mermaid>
sequenceDiagram
    participant Service Provider
    participant Mobile Money Provider 
    Service Provider->>Mobile Money Provider: POST /transactions/type/merchantpay
    activate Service Provider
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The service provider submits the payment request for<br>processing to the MMP, ensuring that a mandate reference<br>is provided for the payment. The MMP will return the<br>Request State object to indicate that the request is<br>'pending'.
    Mobile Money Provider-->>Service Provider: HTTP 202 (Request State Object)    
    deactivate Service Provider
    loop
        activate Service Provider
        Service Provider->>Mobile Money Provider: GET /requeststates/{serverCorrelationId}
        Note right of Mobile Money Provider: (2) The service provider polls the MMP for the Request State<br>until the transaction is authorised or declied or until the<br>polling limit is reached.
        Mobile Money Provider-->>Service Provider: HTTP 200 (Request State Object)
    end   
    deactivate Mobile Money Provider
    opt
        activate Mobile Money Provider
        Service Provider->>Mobile Money Provider: GET /transactions/transactionReference
        Note right of Mobile Money Provider: (3) The service provider can use the objectReference returned in<br>the Request State to retrieve a representation of the<br>completed payment.
        Mobile Money Provider-->>Service Provider: HTTP 200 (Transactions Object)
    end
    deactivate Service Provider
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDdkE3t" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoFLtE" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Recurring Payment Refund

Service Providers can issue a refund to payers. In this diagram, the refund is not linked to the original transaction and hence the /transactions API is used. Where a refund needs to be linked to the original transaction, the /reversals API must be used to perform the refund.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json{1}
POST .../transactions/type/adjustment
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
    "amount": "200.00",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "creditParty": [
        {
            "key": "mandateReference",
            "value": "Place your Mandate Reference here"
        }
    ],
    "currency": "RWF"
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

<mermaid>
  sequenceDiagram
      participant Service Provider
      participant Mobile Money Provider 
      Service Provider->>Mobile Money Provider: POST /transactions/type/adjustment
      activate Service Provider
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The service provider submits the refund request for<br>processing to the MMP. The MMP will return the Request<br>State object to indicate that the request is 'pending'.
      Mobile Money Provider-->>Service Provider: HTTP 202 (Request State Object)
      Mobile Money Provider->>Service Provider: PUT {Callback URL} (Transactions Object)
      Note right of Mobile Money Provider: (2) The MMP informs the service provider that the<br>refund has been successfully completed by<br>returning the final representation of the refund.
      Service Provider-->>Mobile Money Provider: HTTP 204
      deactivate Service Provider
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDdkECo" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfQ8" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Recurring Payment Reversal

In some failure scenarios, a service provider may need to reverse a transaction. This diagram illustrates a reversal with the final result communicated via the callback.

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

<mermaid>
  sequenceDiagram
      participant Service Provider
      participant Mobile Money Provider 
      Service Provider->>Mobile Money Provider: POST /transactions/{original transaction reference}/reversals
      activate Service Provider
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The service provider submits the reversal request for<br>processing to the MMP - passing the reference of the<br>transaction that is to be reversed. The MMP will return the<br>Request State object to indicate that the request is<br>'pending'.
      Mobile Money Provider-->>Service Provider: HTTP 202 (Request State Object)
      Mobile Money Provider->>Service Provider: PUT {Callback URL} (Reversal Object)
      Note right of Mobile Money Provider: (2) The MMP informs the service provider that the<br>reversal has been successfully completed by<br>returning the final representation of the<br>reversal transaction.
      Service Provider-->>Mobile Money Provider: HTTP 204
      deactivate Service Provider
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDdkEH6" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfQA" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Payer sets up a Recurring Payment using MMP Channel

This diagram illustrates how the MM API can be used by a mobile money provider to allow a payer to setup a recurring payment using a channel provided by the provider, for example, a mobile money app.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json{1}
POST .../accounts/accountid/2000/debitmandates
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
   "payee": [
    {
      "key": "accountid",
      "value": "2999"
    }
  ],
    "requestDate": "2017-07-21T17:32:28Z",
    "startDate": "2018-11-20",
    "currency": "GBP",
    "amountLimit": "1000.00",
    "endDate": "2018-11-20",
    "numberOfPayments": "2",
    "frequencyType": "sixmonths",
    "customData": [
        {
        "key": "keytest",
        "value": "keyvalue"
        }
    ]        
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

<mermaid>
  sequenceDiagram
      participant Mobile Money Provider Channel
      participant Mobile Money Provider 
      Mobile Money Provider Channel->>Mobile Money Provider: POST /accounts/{identifierType}/{identifier}/debitmandates
      activate Mobile Money Provider Channel
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The MMP Channel submits the debit mandate request for<br>processing to the MMP. The MMP will return the Request<br>State object to indicate that the request is 'pending'.
      Mobile Money Provider-->>Mobile Money Provider Channel: HTTP 202 (Request State Object)
      Mobile Money Provider->>Mobile Money Provider Channel: PUT {Callback URL} (Debit Mandates Object)
      Note right of Mobile Money Provider: (2) The MMP informs the MMP Channel that the<br>debit mandate has been successfully created<br>by returning the final representation of the<br>debit mandate.
      Mobile Money Provider Channel-->>Mobile Money Provider: HTTP 204
      deactivate Mobile Money Provider Channel
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCLAV3Q" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoFLon" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Obtain a Service Provider Balance

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json{1}
GET .../accounts/accountid/2000/balance
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="GET">
```javascript
//some JavaScript code here
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="GET">
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

<mermaid>
  sequenceDiagram
      participant Service Provider
      participant Mobile Money Provider    
      Service Provider->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/balance
      activate Service Provider
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) Obtain the balance of the<br>requested account.
      Mobile Money Provider-->>Service Provider: HTTP 200 (Balance Object)    
      deactivate Service Provider
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDdkEHA" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDL9T" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Retrieve Payments for a Service Provider

This diagram illustrates use of a cursor mechanism to retrieve all payments for a service provider via multiple requests.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json{1}
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

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="GET">
```javascript
//some JavaScript code here
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="GET">
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

<mermaid>
  sequenceDiagram
      participant Service Provider
      participant Mobile Money Provider   
      Service Provider->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/transactions?offset=0&limit=20
      activate Service Provider
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The service provider requests<br>up to 20 transactions for the<br>account from the MMP.
      Mobile Money Provider-->>Service Provider: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
      Note right of Mobile Money Provider: (2) The MMP returns an array of<br>20 transactions and indicates<br>via a response header that<br>there are 40 records<br>available in total.      
      Service Provider->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/transactions?offset=20&limit=20
      Note right of Mobile Money Provider: (3) The service provider requests<br>the remaining transactions for<br>the account from the MMP.
      Mobile Money Provider-->>Service Provider: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
      deactivate Service Provider
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCLAV3S" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF21X" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Check for Service Availability

The Heartbeat API is used for monitoring purposes and establishes whether the FSP is in a state that enables a client to submit a request for processing.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json{1}
GET .../heartbeat
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="GET">
```javascript
//some JavaScript code here
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="GET">
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

<mermaid>
  sequenceDiagram
      participant Service Provider
      participant Mobile Money Provider    
      Service Provider->>Mobile Money Provider: GET /heartbeat
      activate Service Provider
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The service provider requests the<br>availability of the service from the MMP.
      Mobile Money Provider-->>Service Provider: HTTP 200 (Heartbeat Object)
      Note right of Mobile Money Provider: (2) The MMP returns the availability of<br>the service - available, unavailable<br>or degraded.
      deactivate Service Provider
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7p" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCQbS8z" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Retrieve a Missing API Response

This API can be used by the service provider to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the FSP.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json{1}
GET .../responses/Please enter your UUID here
```
</code-block>
</code-group>

</code-block>

<code-block title="Code">
<code-group title="JavaScript">
<code-block title="GET">
```javascript
//some JavaScript code here
```
</code-block>
</code-group>

<code-group title="PHP">
<code-block title="GET">
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

<mermaid>
  sequenceDiagram
      participant Service Provider
      participant Mobile Money Provider
      Service Provider->>Mobile Money Provider: GET /responses{clientCorrelationId}
      activate Service Provider
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) Using the service provider's<br>clientCorrelationId, a request for the<br>missing API response is sent.
      Mobile Money Provider-->>Service Provider: HTTP 200 (Responses Object)
      Note right of Mobile Money Provider: (2) A Responses object is returned<br>containing a link to the missing<br>resource.     
      Service Provider->>Mobile Money Provider: GET /{link}
      Note right of Mobile Money Provider: (3) The service provider uses the link to<br>obtain a representation of the missing<br>resource.
      Mobile Money Provider-->>Service Provider: HTTP 200 (Requested Object)
      deactivate Mobile Money Provider
      deactivate Service Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7v" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1rj" target="_blank">Open Postman Collection with Authentication</a>
</div>

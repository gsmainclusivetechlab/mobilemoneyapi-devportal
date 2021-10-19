---
sidebarDepth: 1
pageClass: api-page has-code-panel
title: Bill Payments - Use Case Scenarios
---
<!-- required page classes .api-page .has-code-panel -->


<side-code-panel/>
<!-- required component to open-close right-side panel -->

# About Use Case Scenarios

The GSMA Simulator for the Mobile Money API is a simulated API implementation developed by the GSMA to facilitate API adoption and testing, thereby decreasing implementation effort and time to market for Mobile Money Providers and ecosystem Service Providers. Developers can navigate through Use Case Scenarios providing access to a set of pre-defined Postman Collections for the Simulator to try out some of the most common mobile money API use cases, or directly access the OAS interface for the API Specification and use the API Try It Out functionality from there.

## Successful Retrieval of Bills

This diagram illustrates how a mobile money provider can retrieve bills for a given service provider customer account.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json
GET .../accounts/accountid/1/bills?offset=0&limit=20
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
    participant Mobile Money Provider
    participant Service Provider  
    Mobile Money Provider->>Service Provider: GET /accounts/{identifierType}/{identifier}/bills
    activate Mobile Money Provider
    activate Service Provider
    Note right of Service Provider: (1) Obtain all bills of a given account.
    Service Provider-->>Mobile Money Provider: HTTP 200 (Bills Object)  
    deactivate Mobile Money Provider
    deactivate Service Provider   
</mermaid>


<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcEEVK" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1rp" target="_blank">Open Postman Collection with Authentication</a>
</div>


## Unsuccessful Retrieval of Bills

This diagram illustrates the return of an error object where a service provider is unable to return bill details to a mobile money provider.

<mermaid>
sequenceDiagram
    participant Mobile Money Provider
    participant Service Provider  
    Mobile Money Provider->>Service Provider: GET /accounts/{identifierType}/{identifier}/bills
    activate Mobile Money Provider
    activate Service Provider
    Note right of Service Provider: (1) Retrieve all bills for a given account.   
    Service Provider-->>Mobile Money Provider: HTTP 4xx/5xx (Error Object)
    Note right of Service Provider: (2) Return the error object providing<br>detais of the failure reason.   
    deactivate Mobile Money Provider
    deactivate Service Provider
</mermaid>



## Make a Successful Bill Payment with Callback

This diagram illustrates how a mobile money provider can make a bill payment to a service provider using the asynchronous callback method. To illustrate the end to end flow, a leg has been added to describe how a third payment provider can initiate a bill payment request to a mobile money provider.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
POST .../accounts/accountid/1/bills/REF-000001/payments
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
    "currency": "GBP",
    "amountPaid": "5.30"
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
    participant Third Party Payment Provider
    participant Mobile Money Provider
    participant Service Provider
    Note right of Third Party Payment Provider: (1) The provider that enables the payer to pay<br>bills submits a payment request to the MMP.
    Third Party Payment Provider->>Mobile Money Provider: POST /transactions/type/billpay
    activate Third Party Payment Provider
    activate Mobile Money Provider
    Mobile Money Provider-->>Third Party Payment Provider: HTTP 202 (Request State Object)  
    deactivate Third Party Payment Provider
    Mobile Money Provider->>Service Provider: POST /accounts/{identifierType}/{identifier}/bills/{billReference}/payments
    activate Service Provider
    Note right of Service Provider: (2) The MMP submits the bill payment request<br>for processing to the Service Provider. The<br>Service Provider will return the Request State<br>object to indicate that the request is 'pending'.  
    Service Provider-->>Mobile Money Provider: HTTP 202 (Request State Object)  
    deactivate Mobile Money Provider
    Service Provider->>Mobile Money Provider: PUT {Callback URL} (Bill Payments Object)
    activate Mobile Money Provider
    Note right of Service Provider: (3) The Service Provider informs the MMP<br>that the request has been succesfully<br>completed by returning the final<br>representation of the bill payment. 
    Mobile Money Provider-->>Service Provider: HTTP 204
    deactivate Service Provider
    Note right of Third Party Payment Provider: (4) The MMP informs the third party payment provider that the<br>request has been succesfully completed by returning the<br>final representation of the transactions object. 
    Mobile Money Provider->>Third Party Payment Provider: PUT {Callback URL} (Transactions Object)
    activate Third Party Payment Provider
    Third Party Payment Provider-->> Mobile Money Provider: HTTP 204
    deactivate Mobile Money Provider
    deactivate Third Party Payment Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcEZfc" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDKzZ" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Make an Unsuccessful Bill Payment with Callback

This diagram illustrates the return of an error object where a service provider fails to process a bill payment request.

<mermaid>
sequenceDiagram
    participant Mobile Money Provider
    participant Service Provider
    Mobile Money Provider->>Service Provider: POST /accounts/{identifierType}/{identifier}/bills/{billReference}/payments
    activate Service Provider
    activate Mobile Money Provider
    Note right of Service Provider: (1) The MMP submits the bill payment request<br>for processing to the Service Provider. The<br>Service Provider will return the Request State<br>object to indicate that the request is 'pending'.  
    Service Provider-->>Mobile Money Provider: HTTP 202 (Request State Object)   
    deactivate Mobile Money Provider
    Service Provider->>Mobile Money Provider: PUT {Callback URL} (Error Object)
    activate Mobile Money Provider
    Note right of Service Provider: (2) The Service Provider informs the MMP<br>that the request failed by returning a<br>representation of the error object. 
    Mobile Money Provider-->>Service Provider: HTTP 204
    deactivate Service Provider
    deactivate Mobile Money Provider
</mermaid>


## Make a Bill Payment with Polling

This diagram illustrates how a mobile money provider can make a bill payment to a service provider using the asynchronous polling method.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
POST .../accounts/accountid/1/bills/REF-000001/payments
---
Headers:
{
   "X-CorrelationID": ["Please enter your UUID here"],
   "Content-Type": ["application/json"]
}
---
Body parameters: 
{
    "currency": "GBP",
    "amountPaid": "5.30"
}
```
</code-block>

<code-block title="GET">
```json
GET .../accounts/accountid/2000/bills/REF-000001/payments?limit=5
---
Params:
{
  "limit": 5
}
```
</code-block>

<code-block title="GET">
```json
GET .../requestStates/Place the Server Correlation Id here
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
    participant Mobile Money Provider
    participant Service Provider
    Mobile Money Provider->>Service Provider: POST /accounts/{identifierType}/{identifier}/bills/{billReference}/payments
    activate Service Provider
    activate Mobile Money Provider
    Note right of Service Provider: (1) The MMP submits the bill payment request for processing<br>to the Service Provider. The Service Provider will return<br>the Request State object to indicate that the request is<br>'pending'.  
    Service Provider-->>Mobile Money Provider: HTTP 202 (Request State Object)  
    deactivate Mobile Money Provider
    loop
        activate Mobile Money Provider
        Mobile Money Provider->>Service Provider: GET /requeststates/{serverCorrelationId}
        Note right of Service Provider: (2) The MMP polls the Service Provider for the Request State<br>until the bill payment is processed or until the polling limit is<br>reached. The request state will return the final status of the<br>required, i.e. completed or failed.
        Service Provider-->>Mobile Money Provider: HTTP 200 (Request State Object)
    end
    deactivate Service Provider
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcEZk1" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDL4x" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Retrieval of Bill Payments

This diagram illustrates how a mobile money provider can retrieve payments against a given bill for a given service provider customer account.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json
GET .../accounts/accountid/1/bills/REF-000001/payments?offset=0&limit=20
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
    participant Mobile Money Provider
    participant Service Provider    
    Mobile Money Provider->>Service Provider: GET /accounts/{identifierType}/{identifier}/bills/{billReference}/payments?offset=0&limit=10
    activate Mobile Money Provider
    activate Service Provider
    Note right of Service Provider: (1) The MMP requests up to 10 bill<br>payments for the account from the<br>Service Provider.
    Service Provider-->>Mobile Money Provider: HTTP 200 (Bill Payments Array) (X-Records-Available-Count=20)
    Note right of Service Provider: (2) The Service Provider returns an array<br>of 10 bill payments and indicates via a<br>response header that there are 20<br>records available in total.   
    Mobile Money Provider->>Service Provider: GET /accounts/{identifierType}/{identifier}/bills/{billReference}/payments?offset=10&limit=10
    Note right of Service Provider: (3) The MMP requests the remaining<br>bill payments for the account<br>from the Service Provider.
    Service Provider-->>Mobile Money Provider: HTTP 200 (Bill Payments Array) (X-Records-Available-Count=20)    
    deactivate Mobile Money Provider
    deactivate Service Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcFaQw" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1rm" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Check for Service Availability

The Heartbeat API is used for monitoring purposes and establishes whether the Service Provider is in a state that enables an FSP to submit a request for processing.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json
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
    participant Mobile Money Provider
    participant Service Provider
    Mobile Money Provider->>Service Provider: GET /heartbeat
    activate Mobile Money Provider
    activate Service Provider
    Note right of Service Provider: (1) The MMP requests the availability of the<br>service from the Service Provider.
    Service Provider-->>Mobile Money Provider: HTTP 200 (Heartbeat Object)
    Note right of Service Provider: (2) The Service Provider returns the<br>availability of the service - available,<br>unavailable or degraded.   
    deactivate Mobile Money Provider
    deactivate Service Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7p" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCQbS8z" target="_blank">Open Postman Collection with Authentication</a>
</div>

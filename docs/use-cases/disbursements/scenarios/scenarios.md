---
sidebarDepth: 1
pageClass: api-page has-code-panel
title: Disbursements - Use Case Scenarios
---
<!-- required page classes .api-page .has-code-panel -->


<side-code-panel/>
<!-- required component to open-close right-side panel -->

# About Use Case Scenarios

The GSMA Simulator for the Mobile Money API is a simulated API implementation developed by the GSMA to facilitate API adoption and testing, thereby decreasing implementation effort and time to market for Mobile Money Providers and ecosystem Service Providers. Developers can navigate through Use Case Scenarios providing access to a set of pre-defined Postman Collections for the Simulator to try out some of the most common mobile money API use cases, or directly access the OAS interface for the API Specification and use the API Try It Out functionality from there.

## Individual Disbursement

This diagram illustrates an individual disbursement using an asynchronous flow with the notification provided via a callback.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
POST .../transactions/type/disbursement
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
      participant Disbursement Organisation
      participant Mobile Money Provider 
      Disbursement Organisation->>Mobile Money Provider: POST /transactions/type/disbursement
      activate Disbursement Organisation
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The disbursement organisation submits the refund request for<br>processing to the MMP. The MMP will return the Request<br>State object to indicate that the request is 'pending'.
      Mobile Money Provider-->>Disbursement Organisation: HTTP 202 (Request State Object)     
      deactivate Disbursement Organisation
      Mobile Money Provider->>Disbursement Organisation: PUT {Callback URL} (Transactions Object)
      activate Disbursement Organisation
      Note right of Mobile Money Provider: (2) The MMP informs the disbursement<br>organisation that the disbursement has been<br>successfully completed by returning the final<br>representation of the transaction.
      Disbursement Organisation-->>Mobile Money Provider: HTTP 204
      deactivate Disbursement Organisation
      deactivate Mobile Money Provider
</mermaid>


<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcFaVS" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfhr" target="_blank">Open Postman Collection with Authentication</a>
</div>


## Individual Disbursement Failure

In this example, an asynchronous flow is used with a final callback that contains the reason for failure.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
POST .../transactions/type/disbursement
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
    participant Disbursement Organisation
    participant Mobile Money Provider 
    Disbursement Organisation->>Mobile Money Provider: POST /transactions/type/disbursement
    activate Disbursement Organisation
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The disbursement organisation submits the refund request for<br>processing to the MMP. The MMP will return the Request<br>State object to indicate that the request is 'pending'.
    Mobile Money Provider-->>Disbursement Organisation: HTTP 202 (Request State Object)  
    deactivate Disbursement Organisation
    Mobile Money Provider->>Disbursement Organisation: PUT {Callback URL} (Error Object)
    activate Disbursement Organisation
    Note right of Mobile Money Provider: (2) The MMP informs the disbursement<br>organisation that the disbursement has failed<br>and returns the error object datailing the<br>reason for failure.
    Disbursement Organisation-->>Mobile Money Provider: HTTP 204
    deactivate Disbursement Organisation
    deactivate Mobile Money Provider
</mermaid>


## Bulk Disbursement

This diagram illustrates the flow for a ‘one-shot’ bulk disbursement.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
POST .../batchtransactions
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
    "transactions": [
        {
            "amount": "200.00",
            "type": "transfer",
            "creditParty": [
                {
                    "key": "accountid",
                    "value": "2000"
                }
            ],
            "currency": "RWF",
            "debitParty": [
                {
                    "key": "accountid",
                    "value": "2999"
                }
            ]
        },
        {
            "amount": "200.00",
            "type": "transfer",
            "creditParty": [
                {
                    "key": "accountid",
                    "value": "2999"
                }
            ],
            "currency": "RWF",
            "debitParty": [
                {
                    "key": "accountid",
                    "value": "2000"
                }
            ]
        }        
    ],
    "batchTitle": "Batch_Test",
    "batchDescription": "Testing a Batch",
    "scheduledStartDate": "2019-12-11T15:08:03.158Z"
}
```
</code-block>

<code-block title="GET">
```json
GET .../batchtransactions/Place your Batch Id here/completions
```
</code-block>

<code-block title="GET">
```json
GET .../batchtransactions/Place your Batch Id here/rejections
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
    participant Disbursement Organisation
    participant Mobile Money Provider 
    Disbursement Organisation->>Mobile Money Provider: POST /batchtransactions
    activate Disbursement Organisation
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The disbursement organisation submits the batch of<br>transactions for processing to the MMP. The MMP will<br>return the Request State object to indicate that the batch<br>request is 'pending'.
    Mobile Money Provider-->>Disbursement Organisation: HTTP 202 (Request State Object)   
    deactivate Disbursement Organisation
    Mobile Money Provider->>Disbursement Organisation: PUT {Callback URL} (Batch Transactions Object)
    activate Disbursement Organisation
    Note right of Mobile Money Provider: (2) The MMP informs the disbursement organisation that<br>the request has been processed by returning the<br>representation of the batch.
    Disbursement Organisation-->>Mobile Money Provider: HTTP 204
    deactivate Disbursement Organisation
    deactivate Mobile Money Provider
    opt
        Disbursement Organisation->>Mobile Money Provider: GET /batchtransactions/{batchId}
        activate Disbursement Organisation
        activate Mobile Money Provider
        Note right of Mobile Money Provider: (3) The disbursement organisation can optionally retrieve a<br>representation of the batch transactions object that will<br>confirm the overall success of the approval request.
        Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Batch Transactions Object)
        Disbursement Organisation->>Mobile Money Provider: GET /batchtransactions/{batchId}/completions
        Note right of Mobile Money Provider: (4) The disbursement organisation can optionally request<br>details of all transactions in the batch that have been<br>completed.
        Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Batch Completions Object)
        Disbursement Organisation->>Mobile Money Provider: GET /batchtransactions/{batchId}/rejections
        Note right of Mobile Money Provider: (5) The disbursement organisation can optionally request<br>details of all transactions in the batch that have been<br>rejected.
        Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Batch Rejections Object)
    end    
    deactivate Disbursement Organisation
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcFuHb" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLJC" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Bulk Disbursement Failure

In this example, an asynchronous flow is used with a final callback that contains the reason for failure to process the bulk request.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
POST .../batchtransactions
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
    "transactions": [
        {
            "amount": "200.00",
            "type": "transfer",
            "creditParty": [
                {
                    "key": "accountid",
                    "value": "2000"
                }
            ],
            "currency": "RWF",
            "debitParty": [
                {
                    "key": "accountid",
                    "value": "2999"
                }
            ]
        },
        {
            "amount": "200.00",
            "type": "transfer",
            "creditParty": [
                {
                    "key": "accountid",
                    "value": "2999"
                }
            ],
            "currency": "RWF",
            "debitParty": [
                {
                    "key": "accountid",
                    "value": "2000"
                }
            ]
        }        
    ],
    "batchTitle": "Batch_Test",
    "batchDescription": "Testing a Batch",
    "scheduledStartDate": "2019-12-11T15:08:03.158Z"
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
      participant Disbursement Organisation
      participant Mobile Money Provider 
      Disbursement Organisation->>Mobile Money Provider: POST /batchtransactions
      activate Disbursement Organisation
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The disbursement organisation submits the batch of<br>transactions for processing to the MMP. The MMP will<br>return the Request State object to indicate that the batch<br>request is 'pending'.
      Mobile Money Provider-->>Disbursement Organisation: HTTP 202 (Request State Object)      
      deactivate Disbursement Organisation
      Mobile Money Provider->>Disbursement Organisation: PUT {Callback URL} (Error Object)
      activate Disbursement Organisation
      Note right of Mobile Money Provider: (2) The MMP informs the disbursement organisation that<br>the request has failed by returning the representation of<br>the error object.
      Disbursement Organisation-->>Mobile Money Provider: HTTP 204
      deactivate Disbursement Organisation
      deactivate Mobile Money Provider
</mermaid>


## Bulk Disbursement with Maker / Checker

This flow allows a bulk request to be processed in two steps. The first step involves the ‘maker’ system loading the request into the mobile money provider. The second step involves the ‘checker’ system approving the request.

<mermaid>
sequenceDiagram
    participant Disbursement Organisation Maker
    participant Disbursement Organisation Checker
    participant Mobile Money Provider 
    Disbursement Organisation Maker->>Mobile Money Provider: POST /batchtransactions
    activate Disbursement Organisation Maker
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The disbursement organisation maker submits the batch of<br>transactions for processing to the MMP. The MMP will<br>return the Request State object to indicate that the batch<br>request is 'pending'.
    Mobile Money Provider-->>Disbursement Organisation Maker: HTTP 202 (Request State Object)   
    deactivate Disbursement Organisation Maker
    Mobile Money Provider->>Disbursement Organisation Maker: PUT {Callback URL} (Batch Transactions Object)
    activate Disbursement Organisation Maker
    Note right of Mobile Money Provider: (2) The MMP informs the disbursement organisation maker<br>that the request has been processed by returning the<br>representation of the batch.
    Disbursement Organisation Maker-->>Mobile Money Provider: HTTP 204
    opt
        Disbursement Organisation Maker->>Mobile Money Provider: GET /batchtransactions/{batchId}/rejections
        Note right of Mobile Money Provider: (3) The disbursement organisation maker can optionally<br>request details of all transactions in the batch that have<br>been rejected.
        Mobile Money Provider-->>Disbursement Organisation Maker: HTTP 200 (Batch Rejections Object)
    end
    deactivate Disbursement Organisation Maker
    deactivate Mobile Money Provider
    Disbursement Organisation Checker->>Mobile Money Provider: PATCH /batchtransactions/{batchId}
    activate Disbursement Organisation Checker
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (4) The disbursement organisation checker submits a request<br> to approve the transaction batch. The MMP will return the<br>Request State object to indicate that the request is<br>'pending'.
    Mobile Money Provider-->>Disbursement Organisation Checker: HTTP 202 (Request State Object)
    deactivate Disbursement Organisation Checker
    Mobile Money Provider->>Disbursement Organisation Checker: PUT {Callback URL} (Success)
    activate Disbursement Organisation Checker
    Note right of Mobile Money Provider: (5) The MMP informs the disbursement organisation checker<br>that the request has been processed by returning the<br>representation of the batch.
    Disbursement Organisation Checker-->>Mobile Money Provider: HTTP 204
    deactivate Mobile Money Provider
    deactivate Disbursement Organisation Checker
    opt
        activate Mobile Money Provider
        activate Disbursement Organisation Checker
        Disbursement Organisation Checker->>Mobile Money Provider: GET /batchtransactions/{batchId}
        Note right of Mobile Money Provider: (6) The disbursement organisation checker can optionally<br>retrieve a representation of the batch transactions object<br>that will confirm the overall success of the approval<br>request.
        Mobile Money Provider-->>Disbursement Organisation Checker: HTTP 200 (Batch Transactions Object)
        Disbursement Organisation Checker->>Mobile Money Provider: GET /batchtransactions/{batchId}/completions
        Note right of Mobile Money Provider: (7) The disbursement organisation checker can optionally<br>request details of all transactions in the batch that have<br>been completed.
        Mobile Money Provider-->>Disbursement Organisation Checker: HTTP 200 (Batch Completions Object)
        Disbursement Organisation Checker->>Mobile Money Provider: GET /batchtransactions/{batchId}/rejections
        Note right of Mobile Money Provider: (8) The disbursement organisation checker can optionally<br>request details of all transactions in the batch that have<br>been rejected.
        Mobile Money Provider-->>Disbursement Organisation Checker: HTTP 200 (Batch Rejections Object)
    end   
    deactivate Disbursement Organisation Checker
    deactivate Mobile Money Provider
</mermaid>


## Individual Disbursement Using the Polling Method

In this diagram, an asynchronous flow is used with the polling method. The client polls against the request state object to determine the outcome of the individual disbursement request.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">
```json
POST .../transactions/type/disbursement
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
      participant Disbursement Organisation
      participant Mobile Money Provider 
      Disbursement Organisation->>Mobile Money Provider: POST /transactions/type/disbursement
      activate Disbursement Organisation
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The disbursement organisation submits the refund request for<br>processing to the MMP. The MMP will return the Request<br>State object to indicate that the request is 'pending'.
      Mobile Money Provider-->>Disbursement Organisation: HTTP 202 (Request State Object)     
      deactivate Disbursement Organisation
      loop
          activate Disbursement Organisation
          Disbursement Organisation->>Mobile Money Provider: GET /requeststates/{serverCorrelationId}
          Note right of Mobile Money Provider: (2) The disbursement organisation polls the MMP for the<br>Request State until the transaction is authorised or declied<br>or until the polling limit is reached.
          Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Request State Object)
      end     
      deactivate Mobile Money Provider
      opt
          activate Mobile Money Provider
          Disbursement Organisation->>Mobile Money Provider: GET /transactions/transactionReference
          Note right of Mobile Money Provider: (3) The disbursement organisation can use the objectReference<br>returned in the Request State to retrieve a representation of<br>the completed disbursement.
          Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Transactions Object)
      end
      deactivate Disbursement Organisation
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcFuWv" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfnB" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Disbursement Reversal

In some failure scenarios, a organisation may need to reverse an individual disbursement transaction. This diagram illustrates a reversal with the final result communicated via the callback.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
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
      participant Disbursement Organisation
      participant Mobile Money Provider 
      Disbursement Organisation->>Mobile Money Provider: POST /transactions/{original transaction reference}/reversals
      activate Disbursement Organisation
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The disbursement organisation submits the reversal<br>request for processing to the MMP - passing the reference<br>of the transaction that is to be reversed. The MMP will<br>return the Request State object to indicate that the request<br>is 'pending'.
      Mobile Money Provider-->>Disbursement Organisation: HTTP 202 (Request State Object)
      Mobile Money Provider->>Disbursement Organisation: PUT {Callback URL} (Reversal Object)
      Note right of Mobile Money Provider: (2) The MMP informs the The disbursement<br>organisation that the reversal has been<br>successfully completed by returning the final<br>representation of the reversal transaction.
      Disbursement Organisation-->>Mobile Money Provider: HTTP 204
      deactivate Disbursement Organisation
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF3P" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfUV" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Obtain a Disbursement Organisation Balance

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json
POST .../accounts/accountid/2000/balance
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
    participant Disbursement Organisation
    participant Mobile Money Provider 
    Disbursement Organisation->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/balance
    activate Disbursement Organisation
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) Obtain the balance of the<br>requested account.
    Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Balance Object)
    deactivate Disbursement Organisation
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcFubG" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDL56" target="_blank">Open Postman Collection with Authentication</a>
</div>


## Retrieve Transactions for a Disbursement Organisation

This diagram illustrates use of a cursor mechanism to retrieve all transactions for a disbursement organisation via multiple requests.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
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
      participant Disbursement Organisation
      participant Mobile Money Provider 
      Disbursement Organisation->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/transactions?offset=0&limit=20
      activate Disbursement Organisation
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The disbursement<br>organisation requests up to<br>20 transactions for the<br>account from the MMP.
      Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
      Note right of Mobile Money Provider: (2) The MMP returns an array of<br>20 transactions and indicates<br>via a response header that<br>there are 40 records<br>available in total.     
      Disbursement Organisation->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/transactions?offset=20&limit=20
      Note right of Mobile Money Provider: (3) The disbursement<br>organisation requests the<br>remaining transactions for<br>the account from the MMP.
      Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
      deactivate Disbursement Organisation
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCLAUpA" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1wA" target="_blank">Open Postman Collection with Authentication</a>
</div>

## Check for Service Availability

The Heartbeat API is used for monitoring purposes and establishes whether the mobile money provider is in a state that enables a client to submit a request for processing.sts.

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
      participant Disbursement Organisation
      participant Mobile Money Provider 
      Disbursement Organisation->>Mobile Money Provider: GET /heartbeat
      activate Disbursement Organisation
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) The disbursement organisation requests<br>the availability of the service from the MMP.
      Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Heartbeat Object)
      Note right of Mobile Money Provider: (2) The MMP returns the availability of<br>the service - available, unavailable<br>or degraded.
      deactivate Disbursement Organisation
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7p" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCQbS8z" target="_blank">Open Postman Collection with Authentication</a>
</div>


## Retrieve a Missing API Response

This API can be used by the disbursement organisation to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the mobile money provider.

<div class="has-code-panel-block">
<!-- required right-side code blocks wrapper (necessary to bind code blocks to content)-->
<div class="code-panel-block-holder">
<!-- start of right-side code blocks holder -->
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="GET">
```json
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
      participant Disbursement Organisation
      participant Mobile Money Provider 
      Disbursement Organisation->>Mobile Money Provider: GET /responses{clientCorrelationId}
      activate Disbursement Organisation
      activate Mobile Money Provider
      Note right of Mobile Money Provider: (1) Using the disbursement organisations<br>clientCorrelationId, a request for the<br>missing API response is sent.
      Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Responses Object) 
      Note right of Mobile Money Provider: (2) A Responses object is returned<br>containing a link to the missing<br>resource.      
      Disbursement Organisation->>Mobile Money Provider: GET /{link}
      Note right of Mobile Money Provider: (3) The disbursement organisation uses<br>the link to obtain a representation of<br>the missing resource.
      Mobile Money Provider-->>Disbursement Organisation: HTTP 200 (Requested Object)
      deactivate Disbursement Organisation
      deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7v" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1rj" target="_blank">Open Postman Collection with Authentication</a>
</div>

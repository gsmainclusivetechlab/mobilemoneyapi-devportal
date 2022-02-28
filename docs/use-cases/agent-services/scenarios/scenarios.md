---
sidebarDepth: 1
pageClass: api-page has-code-panel
title: Agent Services - Use Case Scenarios
---
<!-- required page classes .api-page .has-code-panel -->


<side-code-panel/>
<!-- required component to open-close right-side panel -->



# About Use Case Scenarios

The GSMA Simulator for the Mobile Money API is a simulated API implementation developed by the GSMA to facilitate API adoption and testing, thereby decreasing implementation effort and time to market for Mobile Money Providers and ecosystem Service Providers. Developers can navigate through Use Case Scenarios providing access to a set of pre-defined Postman Collections for the Simulator to try out some of the most common mobile money API use cases, or directly access the OAS interface for the API Specification and use the API Try It Out functionality from there.



## Agent-initiated Cash-out

In this example, an asynchronous cash-out flow is used with a final callback.

<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">

```json{1}
POST .../transactions/type/withdrawal
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

<code-group title="PHP">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/php/agentService/createWithdrawalTransaction.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/nodejs/agentService/createWithdrawalTransaction.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/java/agentService/createWithdrawalTransaction.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="createWithdrawalTransaction">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/javascript/agentService/createWithdrawalTransaction.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Agent
    participant Mobile Money Provider 
    participant Customer  
    Agent->>Mobile Money Provider: POST /transactions/type/withdrawal
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Agent submits the payment request for processing to<br>the MMP. The MMP will return the Request State object to<br>indicate that the request is 'pending'.
    Mobile Money Provider-->>Agent: HTTP 202 (Request State Object)
    deactivate Agent
    Mobile Money Provider->>Customer: Obtain Customer Authorisation
    activate Customer
    Note right of Customer: (2) The customer is requested by the MMP to<br>authorise the cash-out. This can be<br>achieved through a number of means<br>including USSD Push and One Time Code.<br>OpenId can also be used for cash-out<br>authorisation.
    Customer-->>Mobile Money Provider: (Authorised)   
    deactivate Customer
    Mobile Money Provider->>Agent: PUT {Callback URL} (Transactions Object)
    activate Agent
    Note right of Mobile Money Provider: (3) The MMP informs the agent that the cash-out<br>has been successfully completed by returning<br>the final representation of the transaction.
    Agent-->>Mobile Money Provider: HTTP 204
    deactivate Agent
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamFGd" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfdP" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Agent-initiated Cash-out Failure

In this example, an asynchronous cash-out flow is used with a final callback that contains the reason for failure.

<mermaid>
sequenceDiagram
    participant Agent
    participant Mobile Money Provider 
    participant Customer  
    Agent->>Mobile Money Provider: POST /transactions/type/withdrawal
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The Agent submits the payment request for processing to<br>the MMP. The MMP will return the Request State object to<br>indicate that the request is 'pending'.
    Mobile Money Provider-->>Agent: HTTP 202 (Request State Object)
    deactivate Agent
    Mobile Money Provider->>Customer: Obtain Customer Authorisation
    activate Customer
    Note right of Customer: (2) The customer is requested by the MMP to<br>authorise the cash-out. The customer<br>declines the request or the request times-<br>out.
    Customer-->>Mobile Money Provider: (Declined or Timeout)  
    deactivate Customer
    Mobile Money Provider->>Agent: PUT {Callback URL} (Error Object)
    activate Agent
    Note right of Mobile Money Provider: (3) The MMP informs the agent that the cash-out<br>has failed and returns the error object detailing<br>the reason for failure.
    Agent-->>Mobile Money Provider: HTTP 204
    deactivate Agent
    deactivate Mobile Money Provider
</mermaid>



## Agent-initiated Cash-out using the Polling Method

In this example, an asynchronous cash-out flow is used with the polling method. The client polls against the request state object to determine the outcome of the cash-out request.

<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">

```json{1}
POST .../transactions/type/withdrawal
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

<code-group title="PHP">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/php/agentService/createWithdrawalTransaction.php
</code-block>

<code-block title="viewRequestState">
<<< @/code-snippets/php/agentService/viewRequestState.php
</code-block>

<code-block title="viewTransaction">
<<< @/code-snippets/php/agentService/viewTransaction.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/nodejs/agentService/createWithdrawalTransaction.js
</code-block>

<code-block title="viewRequestState">
<<< @/code-snippets/nodejs/agentService/viewRequestState.js
</code-block>

<code-block title="viewTransaction">
<<< @/code-snippets/nodejs/agentService/viewTransaction.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/java/agentService/createWithdrawalTransaction.java
</code-block>

<code-block title="viewRequestState">
<<< @/code-snippets/java/agentService/viewRequestState.java
</code-block>

<code-block title="viewTransaction">
<<< @/code-snippets/java/agentService/viewTransaction.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="createWithdrawalTransaction">

</code-block>

<code-block title="viewRequestState">

</code-block>

<code-block title="viewTransaction">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/javascript/agentService/createWithdrawalTransaction.js
</code-block>

<code-block title="viewRequestState">
<<< @/code-snippets/javascript/agentService/viewRequestState.js
</code-block>

<code-block title="viewTransaction">
<<< @/code-snippets/javascript/agentService/viewTransaction.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Agent
    participant Mobile Money Provider 
    participant Customer
    Agent->>Mobile Money Provider: POST /transactions/type/withdrawal
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The agent submits the cash-out request for processing to<br>the MMP. The MMP will return the Request State object to<br>indicate that the request is 'pending'.
    Mobile Money Provider-->>Agent: HTTP 202 (Request State Object)
    deactivate Agent       
    par
        loop 
            activate Agent
            Agent->>Mobile Money Provider: GET /requeststates/{serverCorrelationId}
            Note right of Mobile Money Provider: (2) The agent polls the MMP for the Request State until the<br>transaction is authorised or declined or until the polling limit<br>is reached.
            Mobile Money Provider-->>Agent: HTTP 200 (Request State Object)
        end
    and
        Mobile Money Provider->>Customer: Obtain Customer Authorisation
        activate Customer
        Note right of Customer: (3) The Customer is requested to the MMP to<br>authorise the cash-out. This can be<br>achieved through a number of means<br>including USSD Push and One Time Code.<br>OpenId can also be used for cash-out<br>authorisation.
        Customer-->>Mobile Money Provider: (Authorised)
    end
    deactivate Agent
    deactivate Customer
    deactivate Mobile Money Provider
    opt
        activate Mobile Money Provider
        activate Agent
        Agent->>Mobile Money Provider: GET /transactions/transactionsReference
        Note right of Mobile Money Provider: (4) The agent can use the objectReference returned in the<br>Request State to retrieve a representation of the complete<br>cash-out transaction.
        Mobile Money Provider-->>Agent: HTTP 200 (Transactions Object)
    end   
    deactivate Agent
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamFRY" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfhh" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Customer-initiated Cash-out

In this example, an asynchronous cash-out flow is used with a final callback.

<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">

```json{1}
POST .../transactions/type/withdrawal
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

<code-group title="PHP">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/php/agentService/createWithdrawalTransaction.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/nodejs/agentService/createWithdrawalTransaction.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/java/agentService/createWithdrawalTransaction.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="createWithdrawalTransaction">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/javascript/agentService/createWithdrawalTransaction.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Customer  
    participant Mobile Money Provider  
    participant Agent
    Customer->>Mobile Money Provider: POST /transactions/type/withdrawal
    activate Customer
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The customer's channel (e.g. Mobile Money App) submits<br>the cash-out request for processing to the MMP. The MMP<br>will return the Request State object to indicate that the<br>request is 'pending'.
    Mobile Money Provider-->>Customer: HTTP 202 (Request State Object)
    deactivate Customer  
    Mobile Money Provider->>Customer: PUT {Callback URL} (Transactions Object)
    activate Customer
    Note right of Mobile Money Provider: (2) The MMP informs the customer's channel that<br>the cash-out has been successfully completed<br>by returning the final representation of the<br>transaction.
    Customer-->>Mobile Money Provider: HTTP 204   
    deactivate Customer
    activate Agent
    Mobile Money Provider->>Agent: Notify
    Note right of Agent: (3) The MMP notifies the agent tha the cash-<br>out has successfully compeleted.
    deactivate Mobile Money Provider
    deactivate Agent
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamFRa" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLJEt" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Customer-initiated Cash-out Failure

In this example, an asynchronous cash-out flow is used with a final callback that contains the reason for failure.

<mermaid>
sequenceDiagram
    participant Customer  
    participant Mobile Money Provider  
    participant Agent
    Customer->>Mobile Money Provider: POST /transactions/type/withdrawal
    activate Customer
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The customer's channel (e.g. Mobile Money App) submits<br>the cash-out request for processing to the MMP. The MMP<br>will return the Request State object to indicate that the<br>request is 'pending'.
    Mobile Money Provider-->>Customer: HTTP 202 (Request State Object)
    deactivate Customer  
    Mobile Money Provider->>Customer: PUT {Callback URL} (Error Object)
    activate Customer
    Note right of Mobile Money Provider: (2) The MMP informs the customer's channel that<br>the cash-out has failed and returns the error<br>object detailing the reason for failure.
    Customer-->>Mobile Money Provider: HTTP 204   
    deactivate Customer
    activate Agent
    Mobile Money Provider->>Agent: Notify
    Note right of Agent: (3) The MMP notifies the agent tha the cash-<br>out has failed.
    deactivate Mobile Money Provider
    deactivate Agent
</mermaid>



## Customer Cash-out at an ATM using an Authorisation Code

In this example the /authorisationcodes API is used to obtain a pre-authorised code. This in turn is presented by the withdrawing customer to the ATM which then initiates the cash-out request. Both flows in the diagram result in a callback.

<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">

```json{1}
POST .../accounts/accountid/2000/authorisationcodes
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
    "requestDate": "2017-07-21T17:32:28Z",
    "currency": "GBP",
    "amount": "1000.00"
}
```

</code-block>

<code-block title="POST">

```json{1}
POST .../transactions/type/withdrawal
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

<code-block title="Code">

<code-group title="PHP">
<code-block title="createAuthorisationCode">
<<< @/code-snippets/php/agentService/createAuthorisationCode.php
</code-block>

<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/php/agentService/createWithdrawalTransaction.php
</code-block>

<code-block title="viewAuthorisationCode">
<<< @/code-snippets/php/agentService/viewAuthorisationCode.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="createAuthorisationCode">
<<< @/code-snippets/nodejs/agentService/createAuthorisationCode.js
</code-block>

<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/nodejs/agentService/createWithdrawalTransaction.js
</code-block>

<code-block title="viewAuthorisationCode">
<<< @/code-snippets/nodejs/agentService/viewAuthorisationCode.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="createAuthorisationCode">
<<< @/code-snippets/java/agentService/createAuthorisationCode.java
</code-block>

<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/java/agentService/createWithdrawalTransaction.java
</code-block>

<code-block title="viewAuthorisationCode">
<<< @/code-snippets/java/agentService/viewAuthorisationCode.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="createAuthorisationCode">

</code-block>

<code-block title="createWithdrawalTransaction">

</code-block>

<code-block title="viewAuthorisationCode">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="createAuthorisationCode">
<<< @/code-snippets/javascript/agentService/createAuthorisationCode.js
</code-block>

<code-block title="createWithdrawalTransaction">
<<< @/code-snippets/javascript/agentService/createWithdrawalTransaction.js
</code-block>

<code-block title="viewAuthorisationCode">
<<< @/code-snippets/javascript/agentService/viewAuthorisationCode.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram    
    participant Customer  
    participant ATM
    participant Mobile Money Provider    
    Customer->>Mobile Money Provider: POST /accounts/{identifierType}/{identifier}/authorisationcodes
    activate Customer
    activate Mobile Money Provider 
    Note right of Mobile Money Provider: (1) The customer's channel (e.g. Mobile Money App)<br>submits the request to generate an authorisation code<br>to the MMP. The MMP will return the Request State<br>object to indicate that the request is 'pending'.
    Mobile Money Provider-->>Customer: HTTP 202 (Request State Object)
    Mobile Money Provider->>Customer: PUT {Callback URL} (Authorisation Codes Object)
    Note right of Mobile Money Provider: (2) The MMP informs the customer's channel that<br>the request has been successfully completed by<br>returing the final representation of the<br>authorisation code.
    Customer-->>Mobile Money Provider: HTTP 204
    deactivate Customer
    deactivate Mobile Money Provider    
    Note right of Customer: (3) The customer enters the code into the ATM. 
    Customer->>ATM: Code Entry
    activate Customer
    activate ATM
    activate Mobile Money Provider 
    ATM->>Mobile Money Provider: POST /transactions/type/withdrawal
    Note right of Mobile Money Provider: (4) The ATM submits the cash-out request for processing<br>to the MMP. The request will contain the authorisation<br>code. The MMP will return the Request State object to<br>indicate that the request is 'pending'.
    Mobile Money Provider-->>ATM: HTTP 202 (Request State Object)
    deactivate ATM
    Mobile Money Provider->>ATM: PUT {Callback URL} (Transactions Object)
    activate ATM
    Note right of Mobile Money Provider: (5) The MMP informs the ATM that the cash-out<br>has been successfully completed by returning<br>the final representation of the transaction.
    ATM-->>Mobile Money Provider: HTTP 204
    deactivate Mobile Money Provider 
    ATM->>Customer: Notify
    deactivate Customer
    deactivate ATM
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamFVv" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfho" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Agent-initiated Customer Cash-in

In this diagram, the agent firstly checks that the depositing customer’s name is correct and will then submit the cash-in request. The final result is returned in the callback.
 
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="GET">

```json{1}
GET .../accounts/accountid/2000/accountname
```

</code-block>

<code-block title="POST">

```json{1}
POST .../transactions/type/deposit
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

<code-group title="PHP">
<code-block title="viewAccountName">
<<< @/code-snippets/php/agentService/viewAccountName.php
</code-block>

<code-block title="createDepositTransaction">
<<< @/code-snippets/php/agentService/createDepositTransaction.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="viewAccountName">
<<< @/code-snippets/nodejs/agentService/viewAccountName.js
</code-block>

<code-block title="createDepositTransaction">
<<< @/code-snippets/nodejs/agentService/createDepositTransaction.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="viewAccountName">
<<< @/code-snippets/java/agentService/viewAccountName.java
</code-block>

<code-block title="createDepositTransaction">
<<< @/code-snippets/java/agentService/createDepositTransaction.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="viewAccountName">

</code-block>

<code-block title="createDepositTransaction">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="viewAccountName">
<<< @/code-snippets/javascript/agentService/viewAccountName.js
</code-block>

<code-block title="createDepositTransaction">
<<< @/code-snippets/javascript/agentService/createDepositTransaction.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Agent  
    participant Mobile Money Provider  
    participant Customer
    Agent->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/accountname
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The agent retrieves the name of the depositing customer<br>and will check that the name is correct.
    Mobile Money Provider-->>Agent: HTTP 200 (Account Holder Name Object)
    Agent->>Mobile Money Provider: POST /transactions/type/deposit
    Note right of Mobile Money Provider: (2) The agent submits the cash-in request for processing to<br>the MMP. The MMP will return the Request State object to<br>indicate that the request is 'pending'.
    Mobile Money Provider-->>Agent: HTTP 202 (Request State Object)
    deactivate Agent   
    Mobile Money Provider->>Agent: PUT {Callback URL} (Transactions Object)
    activate Agent
    Note right of Mobile Money Provider: (3) The MMP informs the agent that the cash-in<br>has been successfully completed by returning<br>the final representation of the transaction.
    Agent-->>Mobile Money Provider: HTTP 204  
    deactivate Agent
    activate Customer
    Mobile Money Provider->>Customer: Notify
    Note right of Customer: (4) The MMP notifies the customer that the<br>cash-in has successfully compeleted.
    deactivate Mobile Money Provider
    deactivate Customer
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamFaF" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfdM" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Cash-out Reversal

In some failure scenarios, an agent may need to reverse a transaction. This diagram illustrates a reversal with the final result communicated via the callback.

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

<code-group title="PHP">
<code-block title="createReversal">
<<< @/code-snippets/php/agentService/createReversal.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="createReversal">

</code-block>
</code-group>

<code-group title="Java">
<code-block title="createReversal">

</code-block>
</code-group>

<code-group title="Android">
<code-block title="createReversal">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="createReversal">

</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Agent
    participant Mobile Money Provider 
    Agent->>Mobile Money Provider: POST /transactions/{original transaction reference}/reversals
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The agent submits the reversal request for processing to<br>the MMP - passing the reference of the transaction that is<br>to be reversed. The MMP will return the Request State<br>object to indicate that the request is 'pending'.
    Mobile Money Provider-->>Agent: HTTP 202 (Request State Object)
    Mobile Money Provider->>Agent: PUT {Callback URL} (Reversal Object)
    Note right of Mobile Money Provider: (2) The MMP informs the Agent that the reversal<br>has been successfully completed by returning<br>the final representation of the reversal<br>transaction.
    Agent-->>Mobile Money Provider: HTTP 204
    deactivate Agent
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF3P" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfUV" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Register a Customer Mobile Money Account

In this diagram, an agent registers a new mobile money customer on behalf of a mobile money provider.

 
<code-main-group>
<code-block title="View">

<code-group>
<code-block title="POST">

```json{1}
POST .../accounts/individual
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
  "accountIdentifiers": [
    {
      "key": "msisdn",
      "value": "Place a valid Mobile Number here"
    }
  ],
  "identity": [
    {
      "identityKyc": {
        "birthCountry": "AD",
        "contactPhone": "+447777777777",
        "dateOfBirth": "2000-11-20",
        "emailAddress": "xyz@xyz.com",
        "employerName": "string",
        "gender": "m",
        "idDocument": [
          {
            "idType": "passport",
            "idNumber": "111111",
            "issueDate": "2018-11-20",
            "expiryDate": "2018-11-20",
            "issuer": "ABC",
            "issuerPlace": "DEF",
            "issuerCountry": "AD"
          }
        ],
        "nationality": "AD",
        "occupation": "Miner",
        "postalAddress": {
          "addressLine1": "37",
          "addressLine2": "ABC Drive",
          "addressLine3": "string",
          "city": "Berlin",
          "stateProvince": "string",
          "postalCode": "AF1234",
          "country": "AD"
        },
        "subjectName": {
          "title": "Mr",
          "firstName": "H",
          "middleName": "I",
          "lastName": "J",
          "fullName": "H I J",
          "nativeName": "string"
        }
      },
      "accountRelationship": "accountholder",
      "kycVerificationStatus": "verified",
      "kycVerificationEntity": "ABC Agent",
      "kycLevel": 1,
      "customData": [
        {
          "key": "test",
          "value": "custom"
        }
      ]
    }
  ],
  "accountType": "string",
  "customData": [
    {
      "key": "test",
      "value": "custom1"
    }
  ],
  "fees": [
    {
      "feeType": "string",
      "feeAmount": "5.46",
      "feeCurrency": "AED"
    }
  ],
  "registeringEntity": "ABC Agent",
  "requestDate": "2017-07-21T17:32:28Z"
}
```

</code-block>
</code-group>

</code-block>

<code-block title="Code">

<code-group title="PHP">
<code-block title="createAccount">
<<< @/code-snippets/php/agentService/createAccount.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="createAccount">
<<< @/code-snippets/nodejs/agentService/createAccount.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="createAccount">
<<< @/code-snippets/java/agentService/createAccount.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="createAccount">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="createAccount">
<<< @/code-snippets/javascript/agentService/createAccount.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Agent
    participant Mobile Money Provider 
    Agent->>Mobile Money Provider: POST /accounts/individual
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The agent submits the account<br>registration request for processing<br>to the MMP. The MMP will return<br>the Request State object to<br>indicate that the request is<br>'pending'.
    Mobile Money Provider-->>Agent: HTTP 202 (Request State Object)
    Mobile Money Provider->>Agent: PUT {Callback URL} (Account Object)
    Note right of Mobile Money Provider: (2) The MMP informs the agent that<br>the reversal has been successfully<br>registered by returning the final<br>representation of the account.
    Agent-->>Mobile Money Provider: HTTP 204
    deactivate Agent
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamFaL" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1ri" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Verify a Customer’s KYC

In this diagram, an agent verifies the physical KYC provided by the customer against details held by the mobile money provider and informs the provider that the KYC has been successfully verified.

<code-main-group>
<code-block title="View">

<code-group>
<code-block title="PATCH">

```json{1}
PATCH .../accounts/accountid/2000/identities/105
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
  [
    {
        "op": "replace",
        "path": "/kycVerificationStatus",
        "value": "verified"
    }
  ]
}
```

</code-block>
</code-group>

</code-block>

<code-block title="Code">

<code-group title="PHP">
<code-block title="viewAccount">
<<< @/code-snippets/php/agentService/viewAccount.php
</code-block>

<code-block title="updateAccountIdentity">
<<< @/code-snippets/php/agentService/updateAccountIdentity.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="viewAccount">
<<< @/code-snippets/nodejs/agentService/viewAccount.js
</code-block>

<code-block title="updateAccountIdentity">
<<< @/code-snippets/nodejs/agentService/updateAccountIdentity.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="viewAccount">
<<< @/code-snippets/java/agentService/viewAccount.java
</code-block>

<code-block title="updateAccountIdentity">
<<< @/code-snippets/java/agentService/updateAccountIdentity.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="viewAccount">

</code-block>

<code-block title="updateAccountIdentity">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="viewAccount">
<<< @/code-snippets/javascript/agentService/viewAccount.js
</code-block>

<code-block title="updateAccountIdentity">
<<< @/code-snippets/javascript/agentService/updateAccountIdentity.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Agent
    participant Mobile Money Provider 
    Agent->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The agent retrieves account<br>information from the MMP which<br>includes the customer's KYC<br>details.
    Mobile Money Provider-->>Agent: HTTP 200 (Account Object)
    Agent->>Mobile Money Provider: PATCH /accounts/{identifierType}/{identifier}/identities/{identityId}
    Note right of Mobile Money Provider: (2) The agent submits the KYC<br>verification request for processing<br>to the MMP. The MMP will return<br>the Request State object to<br>indicate that the request is<br>'pending'.
    Mobile Money Provider-->>Agent: HTTP 202 (Request State Object)
    Mobile Money Provider->>Agent: PUT {Callback URL} (Success)
    Note right of Mobile Money Provider: (3) The MMP informs the agent that<br>the verification request has been<br>successfully processed.
    Agent-->>Mobile Money Provider: HTTP 204
    deactivate Agent
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcEEQr" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoFLxX" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Obtain an Agent Balance

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

<code-group title="PHP">
<code-block title="viewAccountBalance">
<<< @/code-snippets/php/agentService/viewAccountBalance.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="viewAccountBalance">
<<< @/code-snippets/nodejs/agentService/viewAccountBalance.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="viewAccountBalance">
<<< @/code-snippets/java/agentService/viewAccountBalance.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="viewAccountBalance">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="viewAccountBalance">
<<< @/code-snippets/javascript/agentService/viewAccountBalance.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Agent
    participant Mobile Money Provider 
    Agent->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/balance
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) Obtain the balance of the<br>requested account.
    Mobile Money Provider-->>Agent: HTTP 200 (Balance Object)
    deactivate Agent
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcEEQu" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLDm" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Retrieve Transactions for an Agent

This diagram illustrates use of a cursor mechanism to retrieve all transactions for an agent via multiple requests.

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

<code-group title="PHP">
<code-block title="viewAccountTransactions">
<<< @/code-snippets/php/agentService/viewAccountTransactions.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="viewAccountTransactions">
<<< @/code-snippets/nodejs/agentService/viewAccountTransactions.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="viewAccountTransactions">
<<< @/code-snippets/java/agentService/viewAccountTransactions.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="viewAccountTransactions">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="viewAccountTransactions">
<<< @/code-snippets/javascript/agentService/viewAccountTransactions.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Agent
    participant Mobile Money Provider 
    Agent->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/transactions?offset=0&limit=20
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The agent requests up to 20<br>transactions for the account<br>from the MMP.
    Mobile Money Provider-->>Agent: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
    Note right of Mobile Money Provider: (2) The MMP returns an array of<br>20 transactions and indicates<br>via a response header that<br>there are 40 records<br>available in total.    
    Agent->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/transactions?offset=20&limit=20
    Note right of Mobile Money Provider: (3) The agent requests the<br>remaining transactions for<br>the account from the MMP.
    Mobile Money Provider-->>Agent: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
    deactivate Agent
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcEEQw" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF21Z" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Check for Service Availability

The Heartbeat API is used for monitoring purposes and establishes whether the mobile money provider is in a state that enables a client to submit a request for processing.

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

<code-group title="PHP">
<code-block title="viewServiceAvailability">
<<< @/code-snippets/php/agentService/viewServiceAvailability.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="viewServiceAvailability">
<<< @/code-snippets/nodejs/agentService/viewServiceAvailability.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="viewServiceAvailability">
<<< @/code-snippets/java/agentService/viewServiceAvailability.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="viewServiceAvailability">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="viewServiceAvailability">
<<< @/code-snippets/javascript/agentService/viewServiceAvailability.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Agent
    participant Mobile Money Provider 
    Agent->>Mobile Money Provider: GET /heartbeat
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) The agent requests the availability<br>of the service from the MMP.
    Mobile Money Provider-->>Agent: HTTP 200 (Heartbeat Object)
    Note right of Mobile Money Provider: (2) The MMP returns the availability of<br>the service - available, unavailable<br>or degraded.
    deactivate Agent
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7p" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCQbS8z" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Retrieve a Missing API Response

This API can be used by the agent to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the mobile money provider.

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

<code-group title="PHP">
<code-block title="viewResponse">
<<< @/code-snippets/php/agentService/viewResponse.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="viewResponse">
<<< @/code-snippets/nodejs/agentService/viewResponse.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="viewResponse">
<<< @/code-snippets/java/agentService/viewResponse.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="viewResponse">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="viewResponse">
<<< @/code-snippets/javascript/agentService/viewResponse.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Agent
    participant Mobile Money Provider 
    Agent->>Mobile Money Provider: GET /responses{clientCorrelationId}
    activate Agent
    activate Mobile Money Provider
    Note right of Mobile Money Provider: (1) Using the agent's<br>clientCorrelationId, a request for the<br>missing API response is sent.
    Mobile Money Provider-->>Agent: HTTP 200 (Responses Object) 
    Note right of Mobile Money Provider: (2) A Responses object is returned<br>containing a link to the missing<br>resource.    
    Agent->>Mobile Money Provider: GET /{link}
    Note right of Mobile Money Provider: (3) The Agent uses the link to obtain<br>a representation of the missing<br>resource.
    Mobile Money Provider-->>Agent: HTTP 200 (Requested Object)
    deactivate Agent
    deactivate Mobile Money Provider
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7v" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1rj" target="_blank">Open Postman Collection with Authentication</a>
</div>

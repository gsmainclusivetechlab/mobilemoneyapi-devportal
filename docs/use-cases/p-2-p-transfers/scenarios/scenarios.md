---
sidebarDepth: 1
pageClass: api-page has-code-panel
title: P2P Transfers - Use Сase Scenarios
---
<!-- required page classes .api-page .has-code-panel -->


<side-code-panel/>
<!-- required component to open-close right-side panel -->



# About Use Сase Scenarios

The GSMA Simulator for the Mobile Money API is a simulated API implementation developed by the GSMA to facilitate API adoption and testing, thereby decreasing implementation effort and time to market for Mobile Money Providers and ecosystem Service Providers. Developers can navigate through Use Case Scenarios providing access to a set of pre-defined Postman Collections for the Simulator to try out some of the most common mobile money API use cases, or directly access the OAS interface for the API Specification and use the API Try It Out functionality from there.



## P2P Transfer via Switch

In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and  and to(3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.

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
POST .../quotations
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
    "creditParty": [
        {
            "key": "accountid",
            "value": "2000"
        }
    ],
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "requestAmount": "75.30",
    "requestCurrency": "RWF",
  "requestDate": "2017-07-21T17:32:28Z",
    "type": "transfer",
    "subType": "abc",
    "chosenDeliveryMethod": "directtoaccount",
    "customData": [
        {
        "key": "keytest",
        "value": "keyvalue"
        }
    ]
}
```

</code-block>

<code-block title="POST">

```json{1}
POST .../transactions/type/transfer
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
    "amount": "100.00",
    "creditParty": [
        {
            "key": "accountid",
            "value": "2000"
        }
    ],
    "currency": "GBP",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "internationalTransferInformation": {
        "originCountry": "AD",
        "quotationReference": "{{quotationReference}}",
        "quoteId": "{{quoteId}}",
        "remittancePurpose": "personal",
        "deliveryMethod": "agent"
   },    
  "requestingOrganisation": {
    "requestingOrganisationIdentifierType": "organisationid",
    "requestingOrganisationIdentifier": "testorganisation"
  }
}
```

</code-block>

</code-group>
</code-block>

<code-block title="Code">

<code-group title="PHP">
<code-block title="GET">
<<< @/code-snippets/php/p2pTransfer/viewAccountName.php
</code-block>

<code-block title="POST">
<<< @/code-snippets/php/p2pTransfer/createQuotation.php
</code-block>

<code-block title="POST">
<<< @/code-snippets/php/p2pTransfer/viewTransaction.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="GET">
<<< @/code-snippets/nodejs/p2pTransfer/viewAccountName.js
</code-block>

<code-block title="POST">
<<< @/code-snippets/nodejs/p2pTransfer/createQuotation.js
</code-block>

<code-block title="POST">
<<< @/code-snippets/nodejs/p2pTransfer/viewTransaction.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="GET">
<<< @/code-snippets/java/p2pTransfer/viewAccountName.java
</code-block>

<code-block title="POST">
<<< @/code-snippets/java/p2pTransfer/createQuotation.java
</code-block>

<code-block title="POST">
<<< @/code-snippets/java/p2pTransfer/viewTransaction.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="GET">
<<< @/code-snippets/android/p2pTransfer/viewAccountName.java
</code-block>

<code-block title="POST">
<<< @/code-snippets/android/p2pTransfer/createQuotation.java
</code-block>

<code-block title="POST">
<<< @/code-snippets/android/p2pTransfer/viewTransaction.java
</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="GET">
<<< @/code-snippets/javascript/p2pTransfer/viewAccountName.js
</code-block>

<code-block title="POST">
<<< @/code-snippets/javascript/p2pTransfer/createQuotation.js
</code-block>

<code-block title="POST">
<<< @/code-snippets/javascript/p2pTransfer/viewTransaction.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
  sequenceDiagram
    participant Sending FSP
    participant Switch
    participant Receiving FSP
    Sending FSP->>Switch: GET /accounts/{identifierType}/{identifier}accountname
    activate Sending FSP
    activate Switch
    activate Receiving FSP
    Note right of Switch: (1) The Sending FSP retrieves the name of theintended<br>recipient from the Receiving FSP via the Switch.
    Switch->>Receiving FSP: GET /accounts/{identifierType}/{identifier}accountname
    Receiving FSP-->>Switch: HTTP 200 (Account Holder Name Object)
    Switch-->>Sending FSP: HTTP 200 (Account Holder Name Object)
    deactivate Sending FSP
    deactivate Switch
    deactivate Receiving FSP
    Sending FSP->>Switch: POST /quotations
    activate Sending FSP
    activate Switch
    activate Receiving FSP
    Note right of Switch: (2) Subject to sender confirmation of the namereturned in step 1, the Sending FSP<br>submits a quotation request tothe Switch. The Switch will return the Request<br>State object toindicate that the request is 'pending'. 
    Switch->>Receiving FSP: POST /quotations
    Note right of Receiving FSP: (3) The Swith in turn submits thequotation request to the<br>Receiving FSP. The Receiving FSP willreturn the<br>Request State object to indicate that the requestis<br>'pending'.
    Receiving FSP-->>Switch: HTTP 202 (Request State Object)
    Switch-->>Sending FSP: HTTP 202 (Request State  Object)
    deactivate Sending FSP
    deactivate Switch
    Receiving FSP->>Switch: PUT {Callback URL} (Quotations Object)
    activate Switch
    activate Sending FSP
    Note right of Receiving FSP: (4) The FSP informs the Switch that thequotation<br>has been successfully created by returning the<br>finalrepresentation of the quotation. 
    Switch-->>Receiving FSP: HTTP 204
    deactivate Receiving FSP
    Switch->>Sending FSP: PUT {Callback URL} (Quotations Object)
    Note right of Switch: (5) The Swith in turn informs the Sending FSPthat the quotation<br> has successfully created by returning the finalrepresentation<br>of the quotation.
    Sending FSP-->>Switch: HTTP 204
    deactivate Switch
    deactivate Sending FSP
    Sending FSP->>Switch: POST /transactions/type/transfer
    activate Switch
    activate Sending FSP
    activate Receiving FSP
    Note right of Switch: (6) Subject to sender confirmation, the SendingFSP submits a transfer<br>request to the Swith. The Switch will returnthe Request State object to<br>indicate that the request is 'pending'.
    Switch->>Receiving FSP: POST /transactions/type/transfer
    Note right of Receiving FSP: (7) The Switch in turn submits thetransaction request to the<br>Receiving FSP. The Receiving FSP willreturn the<br>Request State object to indicate that the requestis<br>'pending'.
    Receiving FSP-->>Switch: HTTP 202 (Request State Object)
    Switch-->>Sending FSP: HTTP 202 (Request State Object)
    deactivate Switch
    deactivate Sending FSP
    Receiving FSP->>Switch: PUT {Callback URL} (Transactions Object)
    activate Switch
    activate Sending FSP
    Note right of Receiving FSP: (8) The FSP informs the Switch thatthe<br>transaction has been successfully completed<br>by returning thefinal representation of the<br>transaction.
    Switch-->>Receiving FSP: HTTP 204
    deactivate Receiving FSP
    Switch->>Sending FSP: PUT {Callback URL} (Transactions Object)
    Note right of Switch: (9) The Swith in turn informs the Sending FSPthat the<br>transaction has been successfully completed<br>byreturning the final representation of the<br>transaction.
    Sending FSP-->>Switch: HTTP 204
    deactivate Switch
    deactivate Sending FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDdjZhR" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLNf" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Bilateral P2P Transfer

In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.

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
POST .../transactions/type/transfer
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
    "amount": "100.00",
    "creditParty": [
        {
            "key": "accountid",
            "value": "2000"
        }
    ],
    "currency": "GBP",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
  "requestingOrganisation": {
    "requestingOrganisationIdentifierType": "organisationid",
    "requestingOrganisationIdentifier": "testorganisation"
  }
}
```

</code-block>

</code-group>
</code-block>

<code-block title="Code">

<code-group title="PHP">
<code-block title="GET">
<<< @/code-snippets/php/p2pTransfer/viewAccountName.php
</code-block>

<code-block title="POST">
<<< @/code-snippets/php/p2pTransfer/createTransferTransaction.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="GET">
<<< @/code-snippets/nodejs/p2pTransfer/viewAccountName.js
</code-block>

<code-block title="POST">
<<< @/code-snippets/nodejs/p2pTransfer/createTransferTransaction.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="GET">
<<< @/code-snippets/java/p2pTransfer/viewAccountName.java
</code-block>

<code-block title="POST">
<<< @/code-snippets/java/p2pTransfer/createTransferTransaction.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="GET">
<<< @/code-snippets/android/p2pTransfer/viewAccountName.java
</code-block>

<code-block title="POST">
<<< @/code-snippets/android/p2pTransfer/createTransferTransaction.java
</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="GET">
<<< @/code-snippets/javascript/p2pTransfer/viewAccountName.js
</code-block>

<code-block title="POST">
<<< @/code-snippets/javascript/p2pTransfer/createTransferTransaction.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
  sequenceDiagram
    participant Sending FSP
    participant Receiving FSP
    Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the<br>intended recipient from the Receiving FSP.
    Receiving FSP-->>Sending FSP: HTTP 200 (Account Holder Name Object)
    deactivate Receiving FSP
    Sending FSP->>Receiving FSP: POST /transactions/type/transfer
    activate Receiving FSP
    Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP<br>submits a transfer request. The Receiving FSP will<br>return the Request State object to indicate that the<br>request is "pending".
    Receiving FSP-->>Sending FSP: HTTP 202 (Request State Object)
    deactivate Sending FSP
    deactivate Receiving FSP
    Receiving FSP->>Sending FSP: PUT {Callback URL} (Transaction Object)
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the<br>transation has been succesfully completed by<br>returning the final representation of the transaction. 
    Sending FSP-->>Receiving FSP: HTTP 204
    deactivate Sending FSP
    deactivate Receiving FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCLAUy2" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDLDt" target="_blank">Open Postman Collection with Authentication</a>
</div>



## ‘On-us’ P2P Transfer Initiated by a Third Party Provider

In this diagram, A third party provider enables a sender to transfer money to a recipient in the same FSP. The third party provider (1) confirms the recipient name, (2) requests a quotation and (3) performs the transfer with the FSP. A callback is provided by the FSP to return confirmation of the transfer.

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
POST .../quotations
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
    "creditParty": [
        {
            "key": "accountid",
            "value": "2000"
        }
    ],
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "requestAmount": "75.30",
    "requestCurrency": "RWF",
  "requestDate": "2017-07-21T17:32:28Z",
    "type": "transfer",
    "subType": "abc",
    "chosenDeliveryMethod": "directtoaccount",
    "customData": [
        {
        "key": "keytest",
        "value": "keyvalue"
        }
    ]
}
```
</code-block>

<code-block title="POST">

```json{1}
POST .../transactions/type/transfer
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
    "amount": "100.00",
    "creditParty": [
        {
            "key": "accountid",
            "value": "2000"
        }
    ],
    "currency": "GBP",
    "debitParty": [
        {
            "key": "accountid",
            "value": "2999"
        }
    ],
    "internationalTransferInformation": {
        "originCountry": "AD",
        "quotationReference": "{{quotationReference}}",
        "quoteId": "{{quoteId}}",
        "remittancePurpose": "personal",
        "deliveryMethod": "agent"
   },    
  "requestingOrganisation": {
    "requestingOrganisationIdentifierType": "organisationid",
    "requestingOrganisationIdentifier": "testorganisation"
  }
}
```

</code-block>

</code-group>
</code-block>

<code-block title="Code">

<code-group title="PHP">
<code-block title="GET">
<<< @/code-snippets/php/p2pTransfer/viewAccountName.php
</code-block>

<code-block title="POST">
<<< @/code-snippets/php/p2pTransfer/createQuotation.php
</code-block>

<code-block title="POST">
<<< @/code-snippets/php/p2pTransfer/viewTransaction.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="GET">
<<< @/code-snippets/nodejs/p2pTransfer/viewAccountName.js
</code-block>

<code-block title="POST">
<<< @/code-snippets/nodejs/p2pTransfer/createQuotation.js
</code-block>

<code-block title="POST">
<<< @/code-snippets/nodejs/p2pTransfer/viewTransaction.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="GET">
<<< @/code-snippets/java/p2pTransfer/viewAccountName.java
</code-block>

<code-block title="POST">
<<< @/code-snippets/java/p2pTransfer/createQuotation.java
</code-block>

<code-block title="POST">
<<< @/code-snippets/java/p2pTransfer/viewTransaction.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="GET">
<<< @/code-snippets/android/p2pTransfer/viewAccountName.java
</code-block>

<code-block title="POST">
<<< @/code-snippets/android/p2pTransfer/createQuotation.java
</code-block>

<code-block title="POST">
<<< @/code-snippets/android/p2pTransfer/viewTransaction.java
</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="GET">
<<< @/code-snippets/javascript/p2pTransfer/viewAccountName.js
</code-block>

<code-block title="POST">
<<< @/code-snippets/javascript/p2pTransfer/createQuotation.js
</code-block>

<code-block title="POST">
<<< @/code-snippets/javascript/p2pTransfer/viewTransaction.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
  sequenceDiagram
    participant Third Party Provider
    participant FSP
    Third Party Provider->>FSP: GET /accounts/{identifierType}/{identifier}/accountname
    activate Third Party Provider
    activate FSP
    Note right of FSP: (1) The Third Party Provider retrieves the name of the<br>intended recipient from the FSP.
    FSP-->>Third Party Provider: HTTP 200 (Account Holder Name Object)
    deactivate Third Party Provider
    deactivate FSP
    Third Party Provider->>FSP: POST /quotations
    activate Third Party Provider
    activate FSP
    Note right of FSP: (2) Subject to sender confirmation, the Third Party Provider<br>submits a quotation request. The FSP will return the<br>Request State object to indicate that the request is<br>'pending'.
    Third Party Provider-->>FSP: HTTP 202 (Request State Object)
    deactivate Third Party Provider
    deactivate FSP
    FSP->>Third Party Provider: PUT {Callback URL} (Quotations Object)
    activate Third Party Provider
    activate FSP
    Note right of FSP: (3) The FSP in turn informs the Third Party Provider that<br>the quotation has been successfully completed by<br>returning the final representation of the quotation.
    Third Party Provider-->>FSP: HTTP 204
    deactivate Third Party Provider
    deactivate FSP
    Third Party Provider->>FSP: POST /transactions/type/transfer
    activate Third Party Provider
    activate FSP
    Note right of FSP: (4) Subject to sender confirmation, the Third Party Provider<br>submits a transfer request. The FSP will return the<br>Request State object to indicate that the request is<br>'pending'.
    Third Party Provider-->>FSP: HTTP 202 (Request State Object)
    deactivate Third Party Provider
    deactivate FSP
    FSP->>Third Party Provider: PUT {Callback URL} (Transactions Object)
    activate Third Party Provider
    activate FSP
    Note right of FSP: (5) The FSP in turn informs the Third Party Provider that<br>the transaction has been successfully completed by<br>returning the final representation of the transaction.
    Third Party Provider-->>FSP: HTTP 204
    deactivate Third Party Provider
    deactivate FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCLAUy4" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfrY" target="_blank">Open Postman Collection with Authentication</a>
</div>



## P2P Transfer Failure

In some failure scenarios, a transfer may need to be reversed. This diagram illustrates an reversal with the final result communicated via the callback.

<mermaid>
  sequenceDiagram
    participant Sending FSP
    participant Receiving FSP
    Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the<br>intended recipient from the Receiving FSP.
    Receiving FSP-->>Sending FSP: HTTP 200 (Account Holder Name Object)
    deactivate Receiving FSP
    Sending FSP->>Receiving FSP: POST /transactions/type/transfer
    activate Receiving FSP
    Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP<br>submits a transfer request. The Receiving FSP will<br>return the Request State object to indicate that the<br>request is "pending".
    Receiving FSP-->>Sending FSP: HTTP 202 (Request State Object)
    deactivate Sending FSP
    deactivate Receiving FSP
    Receiving FSP->>Sending FSP: PUT {Callback URL} (Error Object)
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the<br>transation has been failed by returning an Error<br>object containing the reason for failure. 
    Sending FSP-->>Receiving FSP: HTTP 204
    deactivate Sending FSP
    deactivate Receiving FSP
</mermaid>



## P2P Transfer Reversal

In some failure scenarios, a transfer may need to be reversed. This diagram illustrates an reversal with the final result communicated via the callback.

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
<code-block title="POST">
<<< @/code-snippets/php/p2pTransfer/createReversal.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="POST">
<<< @/code-snippets/nodejs/p2pTransfer/createReversal.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="POST">
<<< @/code-snippets/java/p2pTransfer/createReversal.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="POST">
<<< @/code-snippets/android/p2pTransfer/createReversal.java
</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="POST">
<<< @/code-snippets/javascript/p2pTransfer/createReversal.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
  sequenceDiagram
    participant Sending FSP
    participant Receiving FSP
    Sending FSP->>Receiving FSP: POST /transactions/{original transaction reference}/reversals
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (1) The Sending FSP submits the reversal request for<br>processing to the Receiving FSP - passing the reference of<br>the transaction that is to bve reversed. The Receiving FSP<br>will return the Request State object to indicate the the<br>request is "pending".
    Receiving FSP-->>Sending FSP: HTTP 202 (Request State Object)
    Receiving FSP->>Sending FSP: PUT {Callback URL} (Reversal Object)
    Note right of Receiving FSP: (2) The Receiving FSP informs the Sending FSP<br>that the reversal has been successully<br>completed by returning the final representation<br>of the reversal transaction.
    Sending FSP-->>Receiving FSP: HTTP 204
    deactivate Sending FSP
    deactivate Receiving FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF3P" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfUV" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Obtain an FSP Balance

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
<code-block title="GET">
<<< @/code-snippets/php/p2pTransfer/viewAccountBalance.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="GET">
<<< @/code-snippets/nodejs/p2pTransfer/viewAccountBalance.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="GET">
<<< @/code-snippets/java/p2pTransfer/viewAccountBalance.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="GET">
<<< @/code-snippets/android/p2pTransfer/viewAccountBalance.java
</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="GET">
<<< @/code-snippets/javascript/p2pTransfer/viewAccountBalance.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
  sequenceDiagram
    participant Requesting FSP
    participant FSP
    Requesting FSP->>FSP: GET /accounts/{identifierType}/{identifier}/balance
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) Obtain the balance of the<br>Requesting FSP's account.
    FSP-->>Requesting FSP: HTTP 200 (Balance Object)
    deactivate Requesting FSP
    deactivate FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF3U" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDL9M" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Retrieve Transactions for an FSP

This diagram illustrates use of a cursor mechanism to retrieve all transactions for a sending requesting FSP via multiple requests.

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
<code-block title="GET">
<<< @/code-snippets/php/p2pTransfer/viewAccountTransactions.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="GET">
<<< @/code-snippets/nodejs/p2pTransfer/viewAccountTransactions.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="GET">
<<< @/code-snippets/java/p2pTransfer/viewAccountTransactions.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="GET">
<<< @/code-snippets/android/p2pTransfer/viewAccountTransactions.java
</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="GET">
<<< @/code-snippets/javascript/p2pTransfer/viewAccountTransactions.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
  sequenceDiagram
    participant Requesting FSP
    participant FSP
    Requesting FSP->>FSP: GET /accounts/{identifierType}/{identifier}/transactions?offset=0&limit=20
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) The Requesting FSP requests up to<br>20 transactions for their account<br>from the FSP.
    FSP-->>Requesting FSP: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
    Note right of FSP: (2) The FSP returns an array of 20<br>transactions and indicates via a<br>response header that there are 40<br>records available in total.
    Requesting FSP->>FSP: GET /accounts/{identifierType}/{identifier}/transactions?offset=20&limit=20
    Note right of FSP: (3) The Requesting FSP requests the<br>remaining transactions from the<br>account from the Receiving FSP.
    FSP-->>Requesting FSP: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
    deactivate Requesting FSP
    deactivate FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7n" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1wE" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Check for Service Availability

The Heartbeat API is used for monitoring purposes and establishes whether the FSP is in a state that enables a client to submit a request for processing.

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
<code-block title="GET">
<<< @/code-snippets/php/p2pTransfer/viewServiceAvailability.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="GET">
<<< @/code-snippets/nodejs/p2pTransfer/viewServiceAvailability.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="GET">
<<< @/code-snippets/java/p2pTransfer/viewServiceAvailability.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="GET">
<<< @/code-snippets/android/p2pTransfer/viewServiceAvailability.java
</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="GET">
<<< @/code-snippets/javascript/p2pTransfer/viewServiceAvailability.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
  sequenceDiagram
    participant Requesting FSP
    participant FSP
    Requesting FSP->>FSP: GET /heartbeat
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) The Requesting FSP requests the<br>availability of the service from the FSP.
    FSP-->>Requesting FSP: HTTP 200 (Heartbeat Object)
    Note right of FSP: (2) The FSP returns the availability of<br>the service - available, unavailable<br>or degraded.
    deactivate Requesting FSP
    deactivate FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7p" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzCQbS8z" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Retrieve a Missing API Response

This API can be used by the sending FSP to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the receiving FSP.

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
<code-block title="GET">
<<< @/code-snippets/php/p2pTransfer/viewResponse.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="GET">
<<< @/code-snippets/nodejs/p2pTransfer/viewResponse.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="GET">
<<< @/code-snippets/java/p2pTransfer/viewResponse.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="GET">
<<< @/code-snippets/android/p2pTransfer/viewResponse.java
</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="GET">
<<< @/code-snippets/javascript/p2pTransfer/viewResponse.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
  sequenceDiagram
    participant Sending FSP
    participant Receiving FSP
    Sending FSP->>Receiving FSP: GET /responses{clientCorrelationId}
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (1) Using the Sending FSP's<br>clientCorrelationId, a request for the<br>missing API response is sent.
    Sending FSP-->>Receiving FSP: HTTP 200 (Responses Object)
    Note right of Receiving FSP: (2) A Responses object is returned<br>containing a link to the missing<br>resource.
    Sending FSP->>Receiving FSP: GET /{link}
    Note right of Receiving FSP: (3) The Sending FSP uses the link to<br>obtain a representation of the missing<br>resource.
    Receiving FSP-->>Sending FSP: HTTP 200 (Requested Object)
    deactivate Receiving FSP
    deactivate Sending FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF7v" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoF1rj" target="_blank">Open Postman Collection with Authentication</a>
</div>

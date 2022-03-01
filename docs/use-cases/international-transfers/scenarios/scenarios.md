---
sidebarDepth: 1
pageClass: api-page has-code-panel
title: International Transfers - Use Case Scenarios
---
<!-- required page classes .api-page .has-code-panel -->


<side-code-panel/>
<!-- required component to open-close right-side panel -->



# About Use Case Scenarios

The GSMA Simulator for the Mobile Money API is a simulated API implementation developed by the GSMA to facilitate API adoption and testing, thereby decreasing implementation effort and time to market for Mobile Money Providers and ecosystem Service Providers. Developers can navigate through Use Case Scenarios providing access to a set of pre-defined Postman Collections for the Simulator to try out some of the most common mobile money API use cases, or directly access the OAS interface for the API Specification and use the API Try It Out functionality from there.



## International Transfer via Hub

In this diagram, a hub is used by the sending FSP to obtain a quotation and perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return the quotation and the confirmation of the transfer.

This flow can also be used for bilateral international transfers.

<code-main-group>
<code-block title="View">

<code-group>
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
Body Parameters:
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
    "type": "inttransfer",
    "subType": "abc",
    "chosenDeliveryMethod": "agent",
    "senderKyc": {
        "nationality": "GB",
        "dateOfBirth": "2000-11-20",
        "occupation": "Manager",
        "employerName": "MFX",
        "contactPhone": "+447125588999",
        "gender": "m",
        "emailAddress": "luke.skywalkeraaabbb@gmail.com",
        "birthCountry": "GB",
        "idDocument": [
            {
                "idType": "nationalidcard",
                "idNumber": "1234567",
                "issueDate": "2018-11-20",
                "expiryDate": "2018-11-20",
                "issuer": "UKPA",
                "issuerPlace": "GB",
                "issuerCountry": "GB",
                "otherIdDescription": "test"
            }
        ],
        "postalAddress": {
            "country": "GB",
            "addressLine1": "111 ABC Street",
            "city": "New York",
            "stateProvince": "New York",
            "postalCode": "ABCD"
        },
        "subjectName": {
            "title": "Mr",
            "firstName": "Luke",
            "middleName": "R",
            "lastName": "Skywalker",
            "fullName": "Luke R Skywalker",
            "nativeName": "ABC"
        }        
    },    
    "customData": [
        {
        "key": "keytest",
        "value": "keyvalue"
        }
    ],    
  "sendingServiceProviderCountry": "AD",
  "originCountry": "AD",
  "receivingCountry": "AD"
}
```

</code-block>

<code-block title="POST">

```json{1}
POST .../transactions/type/inttransfer
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
        "originCountry": "GB",
        "quotationReference": "{{quotationReference}}",
        "quoteId": "{{quoteId}}",
        "receivingCountry": "RW",
        "remittancePurpose": "personal",
        "relationshipSender": "none",
        "deliveryMethod": "agent",
        "sendingServiceProviderCountry": "AD"           
   },    
    "senderKyc": {
        "nationality": "GB",
        "dateOfBirth": "2000-11-20",
        "occupation": "Manager",
        "employerName": "MFX",
        "contactPhone": "+447125588999",
        "gender": "m",
        "emailAddress": "luke.skywalkeraaabbb@gmail.com",
        "birthCountry": "GB",
        "idDocument": [
            {
                "idType": "nationalidcard",
                "idNumber": "1234567",
                "issueDate": "2018-11-20",
                "expiryDate": "2018-11-20",
                "issuer": "UKPA",
                "issuerPlace": "GB",
                "issuerCountry": "GB",
                "otherIdDescription": "test"
            }
        ],
        "postalAddress": {
            "country": "GB",
            "addressLine1": "111 ABC Street",
            "city": "New York",
            "stateProvince": "New York",
            "postalCode": "ABCD"
        },
        "subjectName": {
            "title": "Mr",
            "firstName": "Luke",
            "middleName": "R",
            "lastName": "Skywalker",
            "fullName": "Luke R Skywalker",
            "nativeName": "ABC"
        }        
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
<code-block title="createQuotation">
<<< @/code-snippets/php/internationalTransfer/createQuotation.php
</code-block>

<code-block title="createInternationalTransaction">
<<< @/code-snippets/php/internationalTransfer/viewRequestState.php
</code-block>

<code-block title="viewQuotation">
<<< @/code-snippets/php/internationalTransfer/viewTransaction.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="createQuotation">
<<< @/code-snippets/nodejs/internationalTransfer/createQuotation.js
</code-block>

<code-block title="createInternationalTransaction">
<<< @/code-snippets/nodejs/internationalTransfer/viewRequestState.js
</code-block>

<code-block title="viewQuotation">
<<< @/code-snippets/nodejs/internationalTransfer/viewTransaction.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="createQuotation">
<<< @/code-snippets/java/internationalTransfer/createQuotation.java
</code-block>

<code-block title="createInternationalTransaction">
<<< @/code-snippets/java/internationalTransfer/viewRequestState.java
</code-block>

<code-block title="viewQuotation">
<<< @/code-snippets/java/internationalTransfer/viewTransaction.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="createQuotation">

</code-block>

<code-block title="createInternationalTransaction">

</code-block>

<code-block title="viewQuotation">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="createQuotation">
<<< @/code-snippets/javascript/internationalTransfer/createQuotation.js
</code-block>

<code-block title="createInternationalTransaction">
<<< @/code-snippets/javascript/internationalTransfer/viewRequestState.js
</code-block>

<code-block title="viewQuotation">
<<< @/code-snippets/javascript/internationalTransfer/viewTransaction.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
  sequenceDiagram
      participant Sending FSP
      participant International Transfer Hub
      participant Receiving FSP   
      Sending FSP->>International Transfer Hub: POST /quotations
      activate Sending FSP
      activate International Transfer Hub
      activate Receiving FSP
      Note right of International Transfer Hub: (1) The Sending FSP submits a quotation request to<br>the International Remittance Hub. The Hub will return the<br>Request State object to indicate that the request<br>is 'pending'.
      International Transfer Hub-->>Sending FSP: HTTP 202 (Request State  Object)      
      deactivate Sending FSP    
      International Transfer Hub->>Sending FSP: PUT {Callback URL} (Quotations Object)
      activate Sending FSP
      Note right of International Transfer Hub: (2) The Hub returns the quotation to the Sending FSP.
      Sending FSP-->>International Transfer Hub: HTTP 204     
      deactivate International Transfer Hub
      deactivate Sending FSP      
      Sending FSP->>International Transfer Hub: POST /transactions/type/inttransfer
      activate International Transfer Hub
      activate Sending FSP
      activate Receiving FSP
      Note right of International Transfer Hub: (3) Subject to sender confirmation, the Sending FSP submits a transaction<br>request to the International Remittance Hub. The Hub will return the<br>Request State object to indicate that the request is 'pending'.
      International Transfer Hub->>Receiving FSP: POST /transactions/type/inttransfer
      Note right of Receiving FSP: (4) The Hub in turn submits the transaction request to the<br>Receiving FSP. The Receiving FSP will return the<br>Request State object to indicate that the request is<br>'pending'.
      Receiving FSP-->>International Transfer Hub: HTTP 202 (Request State Object)
      International Transfer Hub-->>Sending FSP: HTTP 202 (Request State Object)    
      deactivate International Transfer Hub
      deactivate Sending FSP     
      Receiving FSP->>International Transfer Hub: PUT {Callback URL} (Transactions Object)
      activate International Transfer Hub
      activate Sending FSP
      Note right of Receiving FSP: (5) The FSP informs the Hub that the transaction<br>has been successfully completed by returning<br>the final representation of the transaction.
      International Transfer Hub-->>Receiving FSP: HTTP 204
      deactivate Receiving FSP
      International Transfer Hub->>Sending FSP: PUT {Callback URL} (Transactions Object)
      Note right of International Transfer Hub: (6) The Hub in turn informs the Sending FSP that the<br>transaction has been successfully completed<br>by returning the final representation of the transaction.
      Sending FSP-->>International Transfer Hub: HTTP 204      
      deactivate International Transfer Hub
      deactivate Sending FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcFuk7" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfnE" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Bilateral International Transfer

In this diagram, the sending FSP connects directly with the receiving FSP to obtain a quotation and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer.

<code-main-group>
<code-block title="View">

<code-group>
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
Body Parameters:
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
    "type": "inttransfer",
    "subType": "abc",
    "chosenDeliveryMethod": "agent",
    "senderKyc": {
        "nationality": "GB",
        "dateOfBirth": "2000-11-20",
        "occupation": "Manager",
        "employerName": "MFX",
        "contactPhone": "+447125588999",
        "gender": "m",
        "emailAddress": "luke.skywalkeraaabbb@gmail.com",
        "birthCountry": "GB",
        "idDocument": [
            {
                "idType": "nationalidcard",
                "idNumber": "1234567",
                "issueDate": "2018-11-20",
                "expiryDate": "2018-11-20",
                "issuer": "UKPA",
                "issuerPlace": "GB",
                "issuerCountry": "GB",
                "otherIdDescription": "test"
            }
        ],
        "postalAddress": {
            "country": "GB",
            "addressLine1": "111 ABC Street",
            "city": "New York",
            "stateProvince": "New York",
            "postalCode": "ABCD"
        },
        "subjectName": {
            "title": "Mr",
            "firstName": "Luke",
            "middleName": "R",
            "lastName": "Skywalker",
            "fullName": "Luke R Skywalker",
            "nativeName": "ABC"
        }        
    },    
    "customData": [
        {
        "key": "keytest",
        "value": "keyvalue"
        }
    ],    
  "sendingServiceProviderCountry": "AD",
  "originCountry": "AD",
  "receivingCountry": "AD"
}
```

</code-block>

<code-block title="POST">

```json{1}
POST .../transactions/type/inttransfer
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
        "originCountry": "GB",
        "quotationReference": "{{quotationReference}}",
        "quoteId": "{{quoteId}}",
        "receivingCountry": "RW",
        "remittancePurpose": "personal",
        "relationshipSender": "none",
        "deliveryMethod": "agent",
        "sendingServiceProviderCountry": "AD"           
   },    
    "senderKyc": {
        "nationality": "GB",
        "dateOfBirth": "2000-11-20",
        "occupation": "Manager",
        "employerName": "MFX",
        "contactPhone": "+447125588999",
        "gender": "m",
        "emailAddress": "luke.skywalkeraaabbb@gmail.com",
        "birthCountry": "GB",
        "idDocument": [
            {
                "idType": "nationalidcard",
                "idNumber": "1234567",
                "issueDate": "2018-11-20",
                "expiryDate": "2018-11-20",
                "issuer": "UKPA",
                "issuerPlace": "GB",
                "issuerCountry": "GB",
                "otherIdDescription": "test"
            }
        ],
        "postalAddress": {
            "country": "GB",
            "addressLine1": "111 ABC Street",
            "city": "New York",
            "stateProvince": "New York",
            "postalCode": "ABCD"
        },
        "subjectName": {
            "title": "Mr",
            "firstName": "Luke",
            "middleName": "R",
            "lastName": "Skywalker",
            "fullName": "Luke R Skywalker",
            "nativeName": "ABC"
        }        
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
<code-block title="createQuotation">
<<< @/code-snippets/php/internationalTransfer/createQuotation.php
</code-block>

<code-block title="createInternationalTransaction">
<<< @/code-snippets/php/internationalTransfer/viewRequestState.php
</code-block>

<code-block title="viewQuotation">
<<< @/code-snippets/php/internationalTransfer/viewTransaction.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="createQuotation">
<<< @/code-snippets/nodejs/internationalTransfer/createQuotation.js
</code-block>

<code-block title="createInternationalTransaction">
<<< @/code-snippets/nodejs/internationalTransfer/viewRequestState.js
</code-block>

<code-block title="viewQuotation">
<<< @/code-snippets/nodejs/internationalTransfer/viewTransaction.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="createQuotation">
<<< @/code-snippets/java/internationalTransfer/createQuotation.java
</code-block>

<code-block title="createInternationalTransaction">
<<< @/code-snippets/java/internationalTransfer/viewRequestState.java
</code-block>

<code-block title="viewQuotation">
<<< @/code-snippets/java/internationalTransfer/viewTransaction.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="createQuotation">

</code-block>

<code-block title="createInternationalTransaction">

</code-block>

<code-block title="viewQuotation">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="createQuotation">
<<< @/code-snippets/javascript/internationalTransfer/createQuotation.js
</code-block>

<code-block title="createInternationalTransaction">
<<< @/code-snippets/javascript/internationalTransfer/viewRequestState.js
</code-block>

<code-block title="viewQuotation">
<<< @/code-snippets/javascript/internationalTransfer/viewTransaction.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Sending FSP
    participant Receiving FSP
    Sending FSP->>Receiving FSP: POST /quotations
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (1) The Sending FSP submits a quotation request to the<br>Receiving FSP. The Receiving FSP will return the Request<br>State object to indicate that the request is 'pending'.
    Receiving FSP-->>Sending FSP: HTTP 202 (Request State  Object)
    deactivate Sending FSP  
    Receiving FSP->>Sending FSP: PUT {Callback URL} (Quotations Object)
    activate Sending FSP
    Note right of Receiving FSP: (2) The Receiving FSP returns the quotation to the Sending<br>FSP.
    Sending FSP-->>Receiving FSP: HTTP 204
    deactivate Sending FSP
    deactivate Receiving FSP   
    Sending FSP->>Receiving FSP: POST /transactions/type/inttransfer
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (3) Subject to sender confirmation, the Sending FSP submits a transaction<br>request to the Receiving FSP. The Receiving FSP will return the Request<br>State object to indicate that the request is 'pending'.
    Receiving FSP-->>Sending FSP: HTTP 202 (Request State Object)
    deactivate Sending FSP
    deactivate Receiving FSP   
    Receiving FSP->>Sending FSP: PUT {Callback URL} (Transactions Object)
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (4) The FSP in turn informs the Sending FSP that the<br>transation has been successfully completed by<br>returning the final representation of the transaction. 
    Sending FSP-->>Receiving FSP: HTTP 204  
    deactivate Sending FSP
    deactivate Receiving FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDcFuk7" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDfnE" target="_blank">Open Postman Collection with Authentication</a>
</div>



## International Transfer Failure

The failure of a transfer is reflected by the return of an error object in the callback from the receiving FSP. The same pattern would also apply to a quotation failure.

<mermaid>
sequenceDiagram
    participant Sending FSP
    participant Receiving FSP
    Sending FSP->>Receiving FSP: POST /quotations
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (1) The Sending FSP submits a quotation request to the<br>Receiving FSP. The Receiving FSP will return the Request<br>State object to indicate that the request is 'pending'.
    Receiving FSP-->>Sending FSP: HTTP 202 (Request State  Object)
    deactivate Sending FSP
    Receiving FSP->>Sending FSP: PUT {Callback URL} (Quotations Object)
    activate Sending FSP
    Note right of Receiving FSP: (2) The Receiving FSP returns the quotation to the Sending<br>FSP.
    Sending FSP-->>Receiving FSP: HTTP 204
    deactivate Sending FSP
    deactivate Receiving FSP
    Sending FSP->>Receiving FSP: POST /transactions/type/inttransfer
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (3) Subject to sender confirmation, the Sending FSP submits a transaction<br>request to the Receiving FSP. The Receiving FSP will return the Request<br>State object to indicate that the request is 'pending'.
    Receiving FSP-->>Sending FSP: HTTP 202 (Request State Object)
    deactivate Sending FSP
    deactivate Receiving FSP   
    Receiving FSP->>Sending FSP: PUT {Callback URL} (Error Object)
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (4) The FSP in turn informs the Sending FSP that the<br>transation has been failed by returning an Error<br>object containing the reason for failure. 
    Sending FSP-->>Receiving FSP: HTTP 204   
    deactivate Sending FSP
    deactivate Receiving FSP
</mermaid>



## International Transfer Reversal

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
Body Parameters:
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
<<< @/code-snippets/php/internationalTransfer/createReversal.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="createReversal">
<<< @/code-snippets/nodejs/internationalTransfer/createReversal.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="createReversal">
<<< @/code-snippets/java/internationalTransfer/createReversal.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="createReversal">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="createReversal">
<<< @/code-snippets/javascript/internationalTransfer/createReversal.js
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
    Note right of Receiving FSP: (1) The Sending FSP submits the reversal request for<br>processing to the Receiving FSP - passing the reference of<br>the transaction that is to be reversed. The Receiving FSP<br>will return the Request State object to indicate the the<br>request is "pending".
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
<code-block title="viewAccountBalance">
<<< @/code-snippets/php/internationalTransfer/viewAccountBalance.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="viewAccountBalance">
<<< @/code-snippets/nodejs/internationalTransfer/viewAccountBalance.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="viewAccountBalance">
<<< @/code-snippets/java/internationalTransfer/viewAccountBalance.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="viewAccountBalance">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="viewAccountBalance">
<<< @/code-snippets/javascript/internationalTransfer/viewAccountBalance.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Sending FSP
    participant Receiving FSP  
    Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/balance
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (1) Obtain the balance of the<br>Receiving FSP's account with<br>the Sending FSP.
    Receiving FSP-->>Sending FSP: HTTP 200 (Balance Object)
    deactivate Sending FSP
    deactivate Receiving FSP
</mermaid>

<div class="buttons-holder content-center">
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TWDamF3U" target="_blank">Open Postman Collection</a>
  <a class="btn btn--accent" href="https://documenter.getpostman.com/view/4336524/TzJoDL9M" target="_blank">Open Postman Collection with Authentication</a>
</div>



## Retrieve Transactions for an FSP

This diagram illustrates use of a cursor mechanism to retrieve all transactions for a sending FSP via multiple requests.
 
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
<<< @/code-snippets/php/internationalTransfer/viewAccountTransactions.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="viewAccountTransactions">
<<< @/code-snippets/nodejs/internationalTransfer/viewAccountTransactions.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="viewAccountTransactions">
<<< @/code-snippets/java/internationalTransfer/viewAccountTransactions.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="viewAccountTransactions">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="viewAccountTransactions">
<<< @/code-snippets/javascript/internationalTransfer/viewAccountTransactions.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Sending FSP
    participant Receiving FSP  
    Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/transactions?offset=0&limit=20
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (1) The Sending FSP requests up to 20<br>transactions for their account from<br>the Receiving FSP.
    Receiving FSP-->>Sending FSP: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
    Note right of Receiving FSP: (2) The Receiving FSP returns an array<br>of 20 transactions and indicates via a<br>response header that there are 40<br>records available in total.   
    Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/transactions?offset=20&limit=20
    Note right of Receiving FSP: (3) The Sending FSP requests the<br>remaining transactions from the<br>account from the Receiving FSP.
    Receiving FSP-->>Sending FSP: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)   
    deactivate Sending FSP
    deactivate Receiving FSP
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
<code-block title="viewServiceAvailability">
<<< @/code-snippets/php/internationalTransfer/viewServiceAvailability.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="viewServiceAvailability">
<<< @/code-snippets/nodejs/internationalTransfer/viewServiceAvailability.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="viewServiceAvailability">
<<< @/code-snippets/java/internationalTransfer/viewServiceAvailability.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="viewServiceAvailability">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="viewServiceAvailability">
<<< @/code-snippets/javascript/internationalTransfer/viewServiceAvailability.js
</code-block>
</code-group>

</code-block>
</code-main-group>

<mermaid>
sequenceDiagram
    participant Sending FSP
    participant Receiving FSP 
    Sending FSP->>Receiving FSP: GET /heartbeat
    activate Sending FSP
    activate Receiving FSP
    Note right of Receiving FSP: (1) The Sending FSP requests the<br>availability of the service from the<br>Receiving FSP.
    Receiving FSP-->>Sending FSP: HTTP 200 (Heartbeat Object)
    Note right of Receiving FSP: (2) The Receiving FSP returns the<br>availability of the service - available,<br>unavailable or degraded.   
    deactivate Sending FSP
    deactivate Receiving FSP
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
<code-block title="viewResponse">
<<< @/code-snippets/php/internationalTransfer/viewResponse.php
</code-block>
</code-group>

<code-group title="NodeJS">
<code-block title="viewResponse">
<<< @/code-snippets/nodejs/internationalTransfer/viewResponse.js
</code-block>
</code-group>

<code-group title="Java">
<code-block title="viewResponse">
<<< @/code-snippets/java/internationalTransfer/viewResponse.java
</code-block>
</code-group>

<code-group title="Android">
<code-block title="viewResponse">

</code-block>
</code-group>

<code-group title="Javascript">
<code-block title="viewResponse">
<<< @/code-snippets/javascript/internationalTransfer/viewResponse.js
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
    Receiving FSP-->>Sending FSP: HTTP 200 (Responses Object)
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

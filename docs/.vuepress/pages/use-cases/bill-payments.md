<template>

## Introduction

The Bill Payments Mobile Money APIs allow service providers to accept bill payments from mobile money customers.

For further reading, please refer to the following:

- **Getting Started**. Specifies the design principles, behaviours, and error handling of the Mobile Money API.
- **API Service Definition**. Documents all Mobile Money API endpoints, fields, objects, and enumerations.

All documentation can be found on the [GSMA Mobile Money API Developer Portal](../../api-versions-1.2/).

## Intended Audience

| **Audience** | **Usage** | **Role** |
|:--------|:------|:-----|
| **Mobile Money Providers** | To understand how to implement the Mobile Money API to make bill payments to service providers. | API Consumer |
| **Service Providers** | To understand how to implement the Mobile Money API to accept bill payments from Mobile Money Providers. | API Provider |

<h3 class="h3">Use case scenarios</h3>

<accordion>
<accordion-item businessPage>
<template v-slot:header>
Successful Retrieval of Bills
</template>
<template v-slot:body>
<p>This diagram illustrates how a mobile money provider can retrieve bills for a given service provider customer account.</p>

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

  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Unsuccessful Retrieval of Bills
</template>
<template v-slot:body>
<p>This diagram illustrates the return of an error object where a service provider is unable to return bill details to a mobile money provider.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Make a Successful Bill Payment with Callback
</template>
<template v-slot:body>
<p>This diagram illustrates how a mobile money provider can make a bill payment to a service provider using the asynchronous callback method. To illustrate the end to end flow, a leg has been added to describe how a third payment provider can initiate a bill payment request to a mobile money provider.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Make an Unsuccessful Bill Payment with Callback
</template>
<template v-slot:body>
<p>This diagram illustrates the return of an error object where a service provider fails to process a bill payment request.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Make a Bill Payment with Polling
</template>
<template v-slot:body>
<p>This diagram illustrates how a mobile money provider can make a bill payment to a service provider using the asynchronous polling method.</p>
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
  </template>
 </accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Retrieval of Bill Payments
</template>
<template v-slot:body>
<p>This diagram illustrates how a mobile money provider can retrieve payments against a given bill for a given service provider customer account.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Check for Service Availability
</template>
<template v-slot:body>
<p>The Heartbeat API is used for monitoring purposes and establishes whether the Service Provider is in a state that enables an FSP to submit a request for processing.</p>
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
              </template>
            </accordion-item>
          </accordion>

</template>

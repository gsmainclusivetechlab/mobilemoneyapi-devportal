<template>
<h3 class="h3">Use case scenarios</h3>

<accordion>
<accordion-item businessPage>
<template v-slot:header>
Setup an Account Link
</template>
<template v-slot:body>
<p>This diagram illustrates the setting-up of an account link. The requesting FSP initiates the request which is authorised by the account holding customer. In this diagram, an asynchronous flow is used with a final callback.</p>

<mermaid>
sequenceDiagram
    participant Requesting FPS
    participant FSP 
    participant Account Holder  
    Requesting FPS->>FSP: POST /accounts/{identifierType}/{identifier}/links
    activate Requesting FPS
    activate FSP
    Note right of FSP: (1) The requesting FPS submits the debit mandate request for<br>processing to the FSP. The FSP will return the Request<br>State object to indicate that the request is 'pending'.
    FSP-->>Requesting FPS: HTTP 202 (Request State Object)
    FSP->>Account Holder: Obtain Customer Authorisation
    activate Account Holder
    Note right of Account Holder: (2) The account holder is requested by the<br>FSP to authorise the link. This can be<br>achieved through a number of means<br>including USSD Push and One Time Code.<br>OpenId can also be used to secure<br>customer authorisation.
    Account Holder-->>FSP: (Authorised)   
    deactivate Account Holder
    FSP->>Requesting FPS: PUT {Callback URL} (Debit Mandates Object)
    Note right of FSP: (3) The FSP informs the requesting FPS that the<br>link has been successfully created by<br>returning the final representation of the link.
    Requesting FPS-->>FSP: HTTP 204
    deactivate Requesting FPS
    deactivate FSP 
</mermaid>

</template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Setup an Account Link Failure
</template>
<template v-slot:body>
<p>In this diagram, the account holder declines to provide authorisation to setup the account link. The requesting FSP receives a callback containing an error object detailing the reason for failure.</p>
<mermaid>
sequenceDiagram
    participant Requesting FPS
    participant FSP 
    participant Account Holder  
    Requesting FPS->>FSP: POST /accounts/{identifierType}/{identifier}/links
    activate Requesting FPS
    activate FSP
    Note right of FSP: (1) The requesting FPS submits the debit mandate request for<br>processing to the FSP. The FSP will return the Request<br>State object to indicate that the request is 'pending'.
    FSP-->>Requesting FPS: HTTP 202 (Request State Object)
    FSP->>Account Holder: Obtain Customer Authorisation
    activate Account Holder
    Note right of Account Holder: (2) The account holder declines the link<br>request.
    Account Holder-->>FSP: (Declined)   
    deactivate Account Holder
    FSP->>Requesting FPS: PUT {Callback URL} (Error Object)
    Note right of FSP: (3) The FSP informs the requesting FPS that the<br>link has been declined by returning an error<br>object.
    Requesting FPS-->>FSP: HTTP 204
    deactivate Requesting FPS
    deactivate FSP
</mermaid>
</template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Perform a Transfer for a Linked Account
</template>
<template v-slot:body>
<p>In this diagram, the requesting FSP initiates a transfer to the FSP using an established link.</p>
<mermaid>
sequenceDiagram
    participant Requesting FSP
    participant FSP 
    Requesting FSP->>FSP: POST /transactions/type/transfer
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) The requesting FSP submits the transfer request for<br>processing to the FSP, ensuring that a link reference<br>is provided for the transfer. The FSP will return the Request<br>State object to indicate that the request is 'pending'.
    FSP-->>Requesting FSP: HTTP 202 (Request State Object)  
    deactivate Requesting FSP
    FSP->>Requesting FSP: PUT {Callback URL} (Transactions Object)
    activate Requesting FSP
    Note right of FSP: (2) The FSP informs the requesting FSP that the<br>transfer has been successfully completed by<br>returning the final representation of the<br>transaction.
    Requesting FSP-->>FSP: HTTP 204
    deactivate Requesting FSP
    deactivate FSP
</mermaid>
</template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Perform a Transfer for a Linked Account - Failure
</template>
<template v-slot:body>
<p>In this diagram, the requesting FSP initiates a transfer to the FSP using an established link. The FSP is unable to process the transfer and returns a callback containing the error object.</p>
<mermaid>
sequenceDiagram
    participant Requesting FSP
    participant FSP 
    Requesting FSP->>FSP: POST /transactions/type/transfer
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) The requesting FSP submits the transfer request for<br>processing to the FSP, ensuring that a link reference is<br>provided for the transfer. The FSP will return the Request<br>State object to indicate that the request is 'pending'.
    FSP-->>Requesting FSP: HTTP 202 (Request State Object) 
    deactivate Requesting FSP
    FSP->>Requesting FSP: PUT {Callback URL} (Error Object)
    activate Requesting FSP
    Note right of FSP: (2) The FSP informs the requesting FSP that the<br>transfer has failed and returns the error object<br>detailing the reason for failure.
    Requesting FSP-->>FSP: HTTP 204
    deactivate Requesting FSP
    deactivate FSP
</mermaid>
</template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Perform a Transfer using an Account Link via the Polling Method
</template>
<template v-slot:body>
<p>In this example, an asynchronous flow is used with the polling method. The client polls against the request state object to determine the outcome of the transfer request.</p>
<mermaid>
sequenceDiagram
    participant Requesting FSP
    participant FSP 
    Requesting FSP->>FSP: POST /transactions/type/transfer
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) The requesting FSP submits the transfer request for<br>processing to the FSP, ensuring that a link reference is<br>provided for the transfer. The FSP will return the Request<br>State object to indicate that the request is 'pending'.
    FSP-->>Requesting FSP: HTTP 202 (Request State Object)  
    deactivate Requesting FSP
    loop
        activate Requesting FSP
        Requesting FSP->>FSP: GET /requeststates/{serverCorrelationId}
        Note right of FSP: (2) The requesting FSP polls the FSP for the Request State<br>until the transaction is authorised or declied or until the<br>polling limit is reached.
        FSP-->>Requesting FSP: HTTP 200 (Request State Object)
    end  
    deactivate FSP
    opt
        activate FSP
        Requesting FSP->>FSP: GET /transactions/transactionReference
        Note right of FSP: (3) The requesting FSP can use the objectReference returned in<br>the Request State to retrieve a representation of the<br>completed transfer.
        FSP-->>Requesting FSP: HTTP 200 (Transactions Object)
    end
    deactivate Requesting FSP
    deactivate FSP
</mermaid>
</template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Perform a Transfer Reversal
</template>
<template v-slot:body>
<p>In some failure scenarios, a requesting FSP may need to reverse a transaction. This diagram illustrates a reversal with the final result communicated via the callback.</p>
<mermaid>
sequenceDiagram
    participant Requesting FSP
    participant FSP 
    Requesting FSP->>FSP: POST /transactions/{original transaction reference}/reversals
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) The requesting FSP submits the reversal request for<br>processing to the FSP - passing the reference of the<br>transaction that is to be reversed. The FSP will return the<br>Request State object to indicate that the request is<br>'pending'.
    FSP-->>Requesting FSP: HTTP 202 (Request State Object)
    FSP->>Requesting FSP: PUT {Callback URL} (Reversal Object)
    Note right of FSP: (2) The FSP informs the Requesting FSP that the<br>reversal has been successfully completed by<br>returning the final representation of the<br>reversal transaction.
    Requesting FSP-->>FSP: HTTP 204
    deactivate Requesting FSP
    deactivate FSP
</mermaid>
</template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Obtain a Financial Service Provider Balance
</template>
<template v-slot:body>
<mermaid>
sequenceDiagram
    participant Requesting FSP
    participant FSP   
    Requesting FSP->>FSP: GET /accounts/{identifierType}/{identifier}/balance
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) Obtain the balance of the<br>requested account.
    FSP-->>Requesting FSP: HTTP 200 (Balance Object) 
    deactivate Requesting FSP
    deactivate FSP
</mermaid>
</template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Retrieve Transfers for a Financial Service Provider
</template>
<template v-slot:body>
<p>This diagram illustrates use of a cursor mechanism to retrieve all transfers for a financial service provider via multiple requests.</p>
<mermaid>
sequenceDiagram
    participant Requesting FSP
    participant FSP 
    Requesting FSP->>FSP: GET /accounts/{identifierType}/{identifier}/transactions?offset=0&limit=20
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) The requesting FSP requests<br>up to 20 transactions for the<br>account from the FSP.
    FSP-->>Requesting FSP: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
    Note right of FSP: (2) The FSP returns an array of<br>20 transactions and indicates<br>via a response header that<br>there are 40 records<br>available in total.   
    Requesting FSP->>FSP: GET /accounts/{identifierType}/{identifier}/transactions?offset=20&limit=20
    Note right of FSP: (3) The requesting FSP requests<br>the remaining transactions for<br>the account from the FSP.
    FSP-->>Requesting FSP: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)
    deactivate Requesting FSP
    deactivate FSP
</mermaid>
</template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Check for Service Availability
</template>
<template v-slot:body>
<p>The Heartbeat API is used for monitoring purposes and establishes whether the FSP is in a state that enables a client to submit a request for processing.</p>
<mermaid>
sequenceDiagram
    participant Requesting FSP
    participant FSP 
    Requesting FSP->>FSP: GET /heartbeat
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) The requesting FSP requests the<br>availability of the service from the FSP.
    FSP-->>Requesting FSP: HTTP 200 (Heartbeat Object)
    Note right of FSP: (2) The FSP returns the availability of<br>the service - available, unavailable<br>or degraded.    
    deactivate Requesting FSP
    deactivate FSP
</mermaid>
</template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Retrieve a Missing API Response
</template>
<template v-slot:body>
<p>This API can be used by the requesting FSP to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the FSP.</p>
<mermaid>
sequenceDiagram
    participant Requesting FSP
    participant FSP    
    Requesting FSP->>FSP: GET /responses{clientCorrelationId}
    activate Requesting FSP
    activate FSP
    Note right of FSP: (1) Using the requesting FSP's<br>clientCorrelationId, a request for the<br>missing API response is sent.
    FSP-->>Requesting FSP: HTTP 200 (Responses Object)
    Note right of FSP: (2) A Responses object is returned<br>containing a link to the missing<br>resource.   
    Requesting FSP->>FSP: GET /{link}
    Note right of FSP: (3) The requesting FSP uses the link to<br>obtain a representation of the missing<br>resource.
    FSP-->>Requesting FSP: HTTP 200 (Requested Object)   
    deactivate FSP
    deactivate Requesting FSP
</mermaid>
              </template>
            </accordion-item>
          </accordion>

</template>

<template>
<h3 class="h3">Use case scenarios</h3>

<accordion>
<accordion-item businessPage>
<template v-slot:header>
International Transfer via Hub
</template>
<template v-slot:body>
<p>In this diagram, a hub is used by the sending FSP to obtain a quotation and perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return the quotation and the confirmation of the transfer.</p>
<p>This flow can also be used for bilateral international transfers.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Bilateral International Transfer
</template>
<template v-slot:body>
<p>In this diagram, the sending FSP connects directly with the receiving FSP to obtain a quotation and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
International Transfer Failure
</template>
<template v-slot:body>
<p>The failure of a transfer is reflected by the return of an error object in the callback from the receiving FSP. The same pattern would also apply to a quotation failure.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
International Transfer Reversal
</template>
<template v-slot:body>
<p>In some failure scenarios, a transfer may need to be reversed. This diagram illustrates an reversal with the final result communicated via the callback.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Obtain an FSP Balance
</template>
<template v-slot:body>
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
  </template>
 </accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Retrieve Transactions for an FSP
</template>
<template v-slot:body>
<p>This diagram illustrates use of a cursor mechanism to retrieve all transactions for a sending FSP via multiple requests.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Retrieve a Missing API Response
</template>
<template v-slot:body>
<p>This API can be used by the sending FSP to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the receiving FSP.</p>
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
              </template>
            </accordion-item>
          </accordion>

</template>

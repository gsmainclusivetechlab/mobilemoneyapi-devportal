<template>
<h3 class="h3">Use case scenarios</h3>

<accordion>
<accordion-item businessPage>
<template v-slot:header>
Agent-initiated Cash-out
</template>
<template v-slot:body>
<p>In this example, an asynchronous cash-out flow is used with a final callback.</p>

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

  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Agent-initiated Cash-out Failure
</template>
<template v-slot:body>
<p>In this example, an asynchronous cash-out flow is used with a final callback that contains the reason for failure.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Agent-initiated Cash-out using the Polling Method
</template>
<template v-slot:body>
<p>In this example, an asynchronous cash-out flow is used with the polling method. The client polls against the request state object to determine the outcome of the cash-out request.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Customer-initiated Cash-out
</template>
<template v-slot:body>
<p>In this example, an asynchronous cash-out flow is used with a final callback.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Customer-initiated Cash-out Failure
</template>
<template v-slot:body>
<p>In this example, an asynchronous cash-out flow is used with a final callback that contains the reason for failure.</p>
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
  </template>
 </accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Customer Cash-out at an ATM using an Authorisation Code
</template>
<template v-slot:body>
<p>In this example the /authorisationcodes API is used to obtain a pre-authorised code. This in turn is presented by the withdrawing customer to the ATM which then initiates the cash-out request. Both flows in the diagram result in a callback.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Agent-initiated Customer Cash-in
</template>
<template v-slot:body>
<p>In this diagram, the agent firstly checks that the depositing customer’s name is correct and will then submit the cash-in request. The final result is returned in the callback.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Cash-out Reversal
</template>
<template v-slot:body>
<p>In some failure scenarios, an agent may need to reverse a transaction. This diagram illustrates a reversal with the final result communicated via the callback.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Register a Customer Mobile Money Account
</template>
<template v-slot:body>
<p>In this diagram, an agent registers a new mobile money customer on behalf of a mobile money provider.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Verify a Customer’s KYC
</template>
<template v-slot:body>
<p>In this diagram, an agent verifies the physical KYC provided by the customer against details held by the mobile money provider and informs the provider that the KYC has been successfully verified.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Obtain an Agent Balance
</template>
<template v-slot:body>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Retrieve Transactions for an Agent
</template>
<template v-slot:body>
<p>This diagram illustrates use of a cursor mechanism to retrieve all transactions for an agent via multiple requests.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Check for Service Availability
</template>
<template v-slot:body>
<p>The Heartbeat API is used for monitoring purposes and establishes whether the mobile money provider is in a state that enables a client to submit a request for processing.</p>
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
  </template>
</accordion-item>
<accordion-item businessPage>
<template v-slot:header>
Retrieve a Missing API Response
</template>
<template v-slot:body>
<p>This API can be used by the agent to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the mobile money provider.</p>
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
              </template>
            </accordion-item>
          </accordion>

</template>

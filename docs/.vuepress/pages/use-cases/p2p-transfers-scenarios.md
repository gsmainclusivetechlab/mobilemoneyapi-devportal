<template>
<h3 class="h3">Use case scenarios</h3>

<accordion>
            <accordion-item businessPage>
              <template v-slot:header>
                P2P Transfer via Switch
              </template>
  <template v-slot:body>
<p>In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and and to (3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.</p>
<mermaid>
sequenceDiagram
    participant Sending FSP
    participant Switch
    participant Receiving FSP
    Sending FSP->>Switch: GET /accounts/{identifierType}/{identifier}/accountname
    activate Sending FSP
    activate Switch
    activate Receiving FSP
    Note right of Switch: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP via the Switch.
    Switch->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname
    Receiving FSP-->>Switch: HTTP 200 (Account Holder Name Object)
    Switch-->>Sending FSP: HTTP 200 (Account Holder Name Object)
    deactivate Sending FSP
    deactivate Switch
    deactivate Receiving FSP
    Sending FSP->>Switch: POST /quotations
    activate Sending FSP
    activate Switch
    activate Receiving FSP
    Note right of Switch: (2) Subject to sender confirmation of the name returned in step 1, the Sending FSP submits a quotation<br>request to the Switch. The Switch will return the Request State object to indicate that the request<br>is 'pending'.
    Switch->>Receiving FSP: POST /quotations
    Note right of Receiving FSP: (3) The Swith in turn submits the quotation request to the Receiving FSP.<br>The Receiving FSP will return the Request State object to indicate<br>that the request is 'pending'.
    Receiving FSP-->>Switch: HTTP 200 (Request State Object)
    Switch-->>Sending FSP: HTTP 200 (Request State  Object)
    deactivate Sending FSP
    deactivate Switch
    Receiving FSP->>Switch: PUT {Callback URL} (Quotations Object)
    activate Switch
    activate Sending FSP
    Note right of Receiving FSP: (4) The FSP informs the Switch that the quotation has been successfully<br>created by returning the final representation of the quotation.
    Switch-->>Receiving FSP: HTTP 204
    deactivate Receiving FSP
    Switch->>Sending FSP: PUT {Callback URL} (Quotations Object)
    Note right of Switch: (5) The Swith in turn informs the Sending FSP that the transaction has succesfully complteted<br>by returning the final representation of the transaction.
    Sending FSP-->>Switch: HTTP 204
    deactivate Switch
    deactivate Sending FSP
    Sending FSP->>Switch: POST /transactions/type/transfer
    activate Switch
    activate Sending FSP
    activate Receiving FSP
    Note right of Switch: (6) Subject to sender confirmation, the Sending FSP submits a transfer request to the Swith. The Switch<br>will return the Request State object to indicate that the request is 'pending'.
    Switch->>Receiving FSP: POST /transactions/type/transfer
    Note right of Receiving FSP: (7) The Switch in turn submits the transaction request to the<br>Receiving FSP. The Receiving FSP will return the Request State object<br>to indicate that the request is 'pending'.
    Receiving FSP-->>Switch: HTTP 202 (Request State Object)
    Switch-->>Sending FSP: HTTP 202 (Request State Object)
    deactivate Switch
    deactivate Sending FSP
    Receiving FSP->>Switch: PUT {Callback URL} (Transactions Object)
    activate Switch
    activate Sending FSP
    Note right of Receiving FSP: (8) The FSP informs the Switch that the transaction has been <br> successfully completed by returning the final representation of the<br>transaction.
    Switch-->>Receiving FSP: HTTP 204
    deactivate Receiving FSP
    Switch->>Sending FSP: PUT {Callback URL} (Transactions Object)
    Note right of Switch: (9) The Swith in turn informs the Sending FSP that the transaction has been successfully completed<br>by returning the final representation of the transaction.
    Sending FSP-->>Switch: HTTP 204
    deactivate Switch
    deactivate Sending FSP
</mermaid>

  </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                Bilateral P2P Transfer
              </template>
              <template v-slot:body>
                <p>In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.</p>
                <Mermaid>
                  sequenceDiagram
                  participant Sending FSP
                  participant Receiving FSP
                  Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname
                  activate Sending FSP
                  activate Receiving FSP
                  Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP.
                  Receiving FSP-->>Sending FSP: HTTP 200 (Account Holder Name Object)
                  deactivate Receiving FSP
                  Sending FSP->>Receiving FSP: POST /transactions/type/transfer
                  activate Receiving FSP
                  Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP submits a transfer request. <br>The Receiving FSP will return the Request State object to indicate that the request is "pending".
                  Receiving FSP-->>Sending FSP: HTTP 202 (Request State Object)
                  deactivate Sending FSP
                  deactivate Receiving FSP
                  Receiving FSP->>Sending FSP: PUT {Callback URL} (Transaction Object)
                  activate Sending FSP
                  activate Receiving FSP
                  Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the transation has been succesfully completed<br>by returning the final representation of the transaction.
                  Sending FSP-->>Receiving FSP: HTTP 204
                  deactivate Sending FSP
                  deactivate Receiving FSP
                </Mermaid>
              </template>
            </accordion-item>
          <accordion-item businessPage>
              <template v-slot:header>
                ???On-us??? P2P Transfer Initiated by a Third Party Provider
              </template>
              <template v-slot:body>
                <p>In this diagram, A third party provider enables a sender to transfer money to a recipient in the same FSP. The third party provider (1) confirms the recipient name, (2) requests a quotation and (3) performs the transfer with the FSP. A callback is provided by the FSP to return confirmation of the transfer.</p>
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
              </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                P2P Transfer Failure
              </template>
              <template v-slot:body>
                <p>In some failure scenarios, a transfer may need to be reversed. This diagram illustrates an reversal with the final result communicated via the callback.</p>
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
              </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                P2P Transfer Reversal
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
    Note right of Receiving FSP: (1) The Sending FSP submits the reversal request for<br>processing to the Receiving FSP - passing the reference of<br>the transaction that is to bve reversed. The Receiving FSP<br>will return the Request State object to indicate the the<br>request is "pending".
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
              </template>
            </accordion-item>
            <accordion-item businessPage>
              <template v-slot:header>
                Retrieve Transactions for an FSP
              </template>
              <template v-slot:body>
                <p>This diagram illustrates use of a cursor mechanism to retrieve all transactions for a sending requesting FSP via multiple requests.</p>
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
    Note right of FSP: (1) The Requesting FSP requests the<br>availability of the service from the FSP.
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
                <p>This API can be used by the sending FSP to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the receiving FSP.</p>
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
              </template>
            </accordion-item>
          </accordion>

</template>

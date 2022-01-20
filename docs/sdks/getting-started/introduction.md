---
sidebarDepth: 2
pageClass: api-page
title: Introduction
---

## Transaction Status Update

Introduced the ability to update the _transactionStatus_ of mobile money transactions through a new API - _PATCH /transactions/{transactionReference}_. This supports a number of scenarios including:

*   **Resolution of doubt transactions**. Some mobile money providers will put transactions into ‘doubt’ where communication is interrupted. This may then require a subsequent API request from the client to inform the provider of the final outcome to the transaction.
*   **Two stage transaction processing**. Some systems require two steps to create a transaction:
1.  The client submits the request to the provider to create the transaction. The provider then performs necessary checks on the transaction and returns a response indicating that the transaction is pending confirmation.
2.  The client then must provide an explicit request to ‘confirm’ the transaction. Upon receiving the request, the provider will complete the transaction.

## Test diagram

<mermaid>
sequenceDiagram
    participant Merchant
    participant Mobile Money Provider
    participant Payer
    Merchant->>+Mobile Money Provider: POST /transactions/type/merchantpay <b>important</b> <a href='http://google.com'>link</a>
    Note right of Mobile Money Provider: (1) The merchant submits the payment request for processing<br>to the MMP. The MMP will return the Request State object<br>to indicate that the request is "pending".
    Mobile Money Provider-->>-Merchant: HTTP 202 (Request State Object)
    Mobile Money Provider->>+Payer: Obtain Customer Authorisation 
    Note right of Payer: (2) The Payer is requested by the MMP to<br>authorise the payment. This can be<br>achieved through a number of means<br>including USSD Push and One Time Code.<br>OpenId can also be used for Payer<br>authorisation. 
    Payer-->>-Mobile Money Provider: (Authorised)
    Mobile Money Provider->>+Merchant: PUT (Callback URL) (transctions Object)
    Note right of Mobile Money Provider: (3) The MMP informs the Merchant that the<br>transaction has been successfully completed<br>by returning the final representation of the<br>transaction.
    Merchant-->>-Mobile Money Provider: HTTP 204

</mermaid>

---
sidebarDepth: 2
pageClass: api-page
title: SDK Initialization
---

## Transaction Status Update

Introduced the ability to update the _transactionStatus_ of mobile money transactions through a new API - _PATCH /transactions/{transactionReference}_. This supports a number of scenarios including:

*   **Resolution of doubt transactions**. Some mobile money providers will put transactions into ‘doubt’ where communication is interrupted. This may then require a subsequent API request from the client to inform the provider of the final outcome to the transaction.
*   **Two stage transaction processing**. Some systems require two steps to create a transaction:
  1.  The client submits the request to the provider to create the transaction. The provider then performs necessary checks on the transaction and returns a response indicating that the transaction is pending confirmation.
  2.  The client then must provide an explicit request to ‘confirm’ the transaction. Upon receiving the request, the provider will complete the transaction.

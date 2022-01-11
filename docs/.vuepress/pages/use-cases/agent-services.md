<template>

## Introduction

Agent Services comprises of the following:
<br><br>

**Cash-in and Cash-out Services**

- **Agent-initiated Cash-out**. The agent initiates the cash-out and the mobile money customer is requested to authenticate the cash-out by the mobile money provider.
- **Customer-initiated Cash-out**. The mobile money customer initiates the payment by specifying the agent that is to be performing the cash-out.
- **Cash-out via Authorisation Code**. The customer generates an authorisation code up to a maximum amount. The agent then enters or scans (if rendered as a QR code) the code to perform the withdrawal.
- **Cash-in**. The agent initiates the cash-in by entering the customer account identifier(s).

Closed loop and open-loop agent cash-in and cash-out are supported by the Mobile Money API. Closed loop cash-in/cash-out occurs where the agent and customer accounts reside with the same mobile money provider. Open loop cash-in/cash-out occurs where the agent and customer accounts reside with different mobile money providers.

Agents can be physical agents, i.e. customers that are serviced by an human, or can be an ATM.
<br><br>

**Customer Account Services**

- **Customer Registration**. Agents can register new customers for mobile money.
- **KYC Verification**. Agents that provide KYC verification services can confirm that they have verified customer KYC.
  <br><br>

**Further Reading**

For further reading, please refer to the following:

- **Getting Started**. Specifies the design principles, behaviours, and error handling of the Mobile Money API.
- **API Service Definition**. Documents all Mobile Money API endpoints, fields, objects, and enumerations.

All documentation can be found on the [GSMA Mobile Money API Developer Portal](../../api-versions-1.2/).

## Intended Audience

| **Audience** | **Usage** | **Role** |
|:--------|:------|:-----|
| **Mobile Money Providers** | To understand how to implement the Mobile Money API to allow agents to perform cash-in, cash-out, customer registration and customer KYC verification services on behalf of mobile money customers. | API Provider |
| **Agents** | To understand how to implement the Mobile Money API to service customer requests for cash-in, cash-out, registration and KYC verification. | API Consumer |
</template>

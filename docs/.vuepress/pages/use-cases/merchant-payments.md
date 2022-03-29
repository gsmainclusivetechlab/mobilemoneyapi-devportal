<template>

## Introduction
The Merchant Payment Mobile Money APIs allow merchants to accept payments from mobile money customers. Supported payment mechanisms include:

- **Payee-initiated merchant payment.** The merchant initiates the payment and the payer is requested to authenticate to confirm acceptance by the mobile money provider.
- **Payer-initiated merchant payment.** The payer initiates the payment by specifying the merchant that is to be paid.
- **Merchant payment via pre-authorised payment code.** The payer generates a payment authorisation code up to a maximum payment amount. The merchant then enters or scans (if rendered as a QR code) the payer’s code to perform the payment.

Closed loop and open-loop merchant payments are supported by the Mobile Money API. Closed loop merchant payments occur where the payer and payee accounts reside with the same mobile money provider. Open loop payments occur where the payer and payee accounts reside with different mobile money providers.
For further reading, please refer to the following:

- **Getting Started.** Specifies the design principles, behaviours, and error handling of the Mobile Money API.
- **API Service Definition.** Documents all Mobile Money API endpoints, fields, objects, and enumerations.

All documentation can be found on the [GSMA Mobile Money API Developer Portal](../../api-versions-1.2/).

## Intended Audience
| **Audience** | **Usage** | **Role** |
|:--------|:------|:-----|
| **Mobile Money Providers** | To understand how to implement the Mobile Money API to receive payments from merchants. | API Provider |
| **Merchants** | To understand how to implement the Mobile Money API to accept mobile money payments. | API Consumer |
</template>

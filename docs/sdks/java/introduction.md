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

## Bill Payment Without Bill Reference

New endpoints have been created to allow a bill payment to be accepted by a service provider without a bill reference:

*   _POST /accounts/{identifierType}/{identifier}/bills/payments_.
*   _POST /accounts/{Account Identifiers}/bills/payments_.

## Retrieval of Bill Payments

Added new endpoints to allow API clients to retrieve a bill payment:

*   _GET /accounts/{identifierType}/{identifier}/bills/{billReference}/payments_.
*   _GET /accounts/{Account Identifiers}/bills/{billReference}/payments_.

Standard query string parameters and response headers have been included to enabled filtering of bill payments:

*   _X-Records-Available-Count_ response header. Informs the client the number of records that can be returned.
*   _X-Records-Returned-Count_ response header. Informs the client how many records have been returned.
*   _limit_ query string. Used by the client to constrain the number of records returned.
*   _offset_ query string. Used by the client to indicate the position from where records are to be returned.
*   _fromdatetime_ query string. Used by the client to return records within a date range based on _creationDate_.
*   _todatetime_ query string. Used by the client to return records within a date range based on _creationDate_.

## Retrieval of Multiple Authorisation Codes

Allows multiple authorisation codes to be retrieved for a given account via the following new endpoints:

*   _GET_ _/accounts/{identifierType}/{identifier}/authorisationcodes_.
*   _GET_ _/accounts/{Account Identifiers}/authorisationcodes_.

Standard query string parameters and response headers have been included to enabled filtering of authorisation codes:

*   _X-Records-Available-Count_ response header. Informs the client the number of records that can be returned.
*   _X-Records-Returned-Count_ response header. Informs the client how many records have been returned.
*   _limit_ query string. Used by the client to constrain the number of records returned.
*   _offset_ query string. Used by the client to indicate the position from where records are to be returned.
*   _fromdatetime_ query string. Used by the client to return records within a date range.
*   _todatetime_ query string. Used by the client to return records within a date range.

Also added a ‘_codestate_’ filter to return authorisation codes for a given state.

## Mobile Money Customer Account Creation

Added new endpoints and associated objects to allow account creation for mobile money customers:

*   _POST /accounts/{identityType}_. Allows for account creation. The identity type initially supports ‘individual’ only, but in future could be extended to support creation of other types such as ‘merchant’.
*   _GET /accounts/{accountIdentifierType}/{identifier}_. Allows for a specific account and associated identities to be retrieved for a given account.
*   _GET /accounts/{Account Identifiers}_. As per above, but supports identification of the account using one, two or three identifiers.

## Mobile Money Customer Account Modification

Added new endpoints to enable the update of customer mobile money account and associated account identity information:

*   _PATCH /accounts/{identifierType}/{identifier}_. Allows account modification for a given account identifier/type.
*   _PATCH /accounts/{Account Identifiers}_. As per above, but supports identification of the account using one, two or three identifiers.
*   _PATCH /accounts/{identifierType}/{identifier}/identities/{identityId}_. Allows identity modification for a given account identifier/type.
*   _PATCH /accounts/{Account Identifiers}/identities/{identityId}_. As per above, but supports identification of the account using one, two or three identifiers.

The following fields are modifiable:

*   Account Fields

*   accountStatus
*   accountSubstatus
*   Account Identity Fields

*   identityStatus
*   kycVerificationStatus
*   kycVerificationEntity
*   kycLevel

## Addition of Custom Data Array

Added a key/value array that can accept and return provider-specific data to all relevant endpoints:

The following objects have been modified to accept _customData_:

*   Transaction
*   Reversal
*   Batch Transaction
*   Batch Rejection
*   Batch Completion
*   Statement Entry
*   Bill
*   Bill Payment
*   Debit Mandate
*   Link
*   Authorisation Code
*   Quotation
*   Account

## Debit Mandate Identification

The /debitmandates endpoints have been modified to explicitly identify the payee for a debit mandate as per the following example:

```javascript
  "payee": [
    {
      "key": "msisdn",
      "value": "+33555123456"
    }
  ],
```

The _payer_ (subject of the mandate) will always be identified in the path.

## Apply Consistent Usage of Date Fields

Added the following missing fields to the following objects to provide consistency across objects.

| **Object** | **requestDate** | **creationDate** | **modificationDate** |
|------------|-----------------|------------------|----------------------|
| Batch Transaction | Add |  | Add |
| Bill Payment | Add | Add | Add |
| Link | Add | Add | Add |
| Authorisation Code |  | Add | Add |


_requestDate_ is optional on request and response.

_creationDate_ is not applicable on request and optional on response.

_modificationDate_ is not applicable on request and optional on response.

Modified all object implementations of the above fields to ensure optionality is correct and consistent across all objects/APIs.

## Add Cursor Mechanism for Bills Retrieval

Applied standard MM API response headers and query strings on the _accounts/{accountId}/bills_ and _/accounts/{identifierType}/{identifier}/bills_ endpoints:

*   _X-Records-Available-Count_ response header. Informs the client the number of records that can be returned.
*   _X-Records-Returned-Count_ response header. Informs the client how many records have been returned.
*   _limit_ query string. Used by the client to constrain the number of records returned.
*   _offset_ query string. Used by the client to indicate the position from where records are to be returned.
*   _fromdatetime_ query string. Used by the client to return records within a date range.
*   _todatetime_ query string. Used by the client to return records within a date range.

The _creationDate_ field has also been added to the bills object.

## Add Country Information to Quotations

Added _originCountry_ and _receivingCountry_ to the Quotation object so that they can be populated when using the _/quotations_ endpoints. _receivingCountry_ and _originCountry_ are optional in the request and response as they only apply to international quotations.

To clearly differentiate between the country in which the transaction originated and the country in which the sending service provider resides, created a new optional field – _sendingServiceProviderCountry_ and added this to the Quotation Object and the International Transfer Information object.

## Add Requesting Organisation to Transactions and Quotations

Added _requestingOrganisation_ to all objects that can be created or updated for complete consistency. For clarity these are:

*   Transaction
*   Batch Transaction
*   Reversal
*   Quotation.
*   Link
*   Debit Mandate
*   Authorisation Code

Note that _requestingOrganisation_ already exists on Bill Payment and is unchanged.

The new _requestingOrganisation_ field is an object and consists of the following sub-fields:

*   _requestingorganisationIdentifierType_ (can be _swiftbic_, _lei_, or _organisationid_)
*   _requestingorganisationIdentifier_

As a result of the inclusion of the _requestingOrganisation_ field and also the introduction of _X-Account-Holding-Institution-Identifier_ in v1.1, there is no longer a need for _requestingLei_ and _receivingLei_ fields in the transaction object. As such, these fields have been marked as deprecated for final removal in the next major release.

## Code Lifetime Minimum Value for Authorisation Codes

Added minimum value to ensure that _codeLifetime_ is greater than zero when supplied on _/debitmandates_ APIs.

## Miscellaneous Changes

*   The _/transactions_ API has been marked as deprecated and will be removed in the next major release. Use _/transactions/type/{type}_ instead.
*   Request and Response fields have been reordered for readability.
*   Regular expression for account identifier verification has been simplified. This change also removes issues when using a YAML parser to verify the OAS specification.
*   Reconstructed the conditionality of debitParty and creditParty in the transactions OAS objects to make correct use of the allOf and anyOf OAS keywords.
*   Added additional textual information to OAS schema fields and APIs to align with the document version more closely.

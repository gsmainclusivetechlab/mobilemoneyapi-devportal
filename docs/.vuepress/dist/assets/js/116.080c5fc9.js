(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{577:function(e,t,i){"use strict";i.r(t);var n=i(20),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h2",{attrs:{id:"transaction-status-update"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#transaction-status-update"}},[e._v("#")]),e._v(" Transaction Status Update")]),e._v(" "),i("p",[e._v("Introduced the ability to update the "),i("em",[e._v("transactionStatus")]),e._v(" of mobile money transactions through a new API - "),i("em",[e._v("PATCH /transactions/{transactionReference}")]),e._v(". This supports a number of scenarios including:")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Resolution of doubt transactions")]),e._v(". Some mobile money providers will put transactions into ‘doubt’ where communication is interrupted. This may then require a subsequent API request from the client to inform the provider of the final outcome to the transaction.")]),e._v(" "),i("li",[i("strong",[e._v("Two stage transaction processing")]),e._v(". Some systems require two steps to create a transaction:")])]),e._v(" "),i("ol",[i("li",[e._v("The client submits the request to the provider to create the transaction. The provider then performs necessary checks on the transaction and returns a response indicating that the transaction is pending confirmation.")]),e._v(" "),i("li",[e._v("The client then must provide an explicit request to ‘confirm’ the transaction. Upon receiving the request, the provider will complete the transaction.")])]),e._v(" "),i("h2",{attrs:{id:"bill-payment-without-bill-reference"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bill-payment-without-bill-reference"}},[e._v("#")]),e._v(" Bill Payment Without Bill Reference")]),e._v(" "),i("p",[e._v("New endpoints have been created to allow a bill payment to be accepted by a service provider without a bill reference:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("POST /accounts/{identifierType}/{identifier}/bills/payments")]),e._v(".")]),e._v(" "),i("li",[i("em",[e._v("POST /accounts/{Account Identifiers}/bills/payments")]),e._v(".")])]),e._v(" "),i("h2",{attrs:{id:"retrieval-of-bill-payments"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#retrieval-of-bill-payments"}},[e._v("#")]),e._v(" Retrieval of Bill Payments")]),e._v(" "),i("p",[e._v("Added new endpoints to allow API clients to retrieve a bill payment:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("GET /accounts/{identifierType}/{identifier}/bills/{billReference}/payments")]),e._v(".")]),e._v(" "),i("li",[i("em",[e._v("GET /accounts/{Account Identifiers}/bills/{billReference}/payments")]),e._v(".")])]),e._v(" "),i("p",[e._v("Standard query string parameters and response headers have been included to enabled filtering of bill payments:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("X-Records-Available-Count")]),e._v(" response header. Informs the client the number of records that can be returned.")]),e._v(" "),i("li",[i("em",[e._v("X-Records-Returned-Count")]),e._v(" response header. Informs the client how many records have been returned.")]),e._v(" "),i("li",[i("em",[e._v("limit")]),e._v(" query string. Used by the client to constrain the number of records returned.")]),e._v(" "),i("li",[i("em",[e._v("offset")]),e._v(" query string. Used by the client to indicate the position from where records are to be returned.")]),e._v(" "),i("li",[i("em",[e._v("fromdatetime")]),e._v(" query string. Used by the client to return records within a date range based on "),i("em",[e._v("creationDate")]),e._v(".")]),e._v(" "),i("li",[i("em",[e._v("todatetime")]),e._v(" query string. Used by the client to return records within a date range based on "),i("em",[e._v("creationDate")]),e._v(".")])]),e._v(" "),i("h2",{attrs:{id:"retrieval-of-multiple-authorisation-codes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#retrieval-of-multiple-authorisation-codes"}},[e._v("#")]),e._v(" Retrieval of Multiple Authorisation Codes")]),e._v(" "),i("p",[e._v("Allows multiple authorisation codes to be retrieved for a given account via the following new endpoints:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("GET")]),e._v(" "),i("em",[e._v("/accounts/{identifierType}/{identifier}/authorisationcodes")]),e._v(".")]),e._v(" "),i("li",[i("em",[e._v("GET")]),e._v(" "),i("em",[e._v("/accounts/{Account Identifiers}/authorisationcodes")]),e._v(".")])]),e._v(" "),i("p",[e._v("Standard query string parameters and response headers have been included to enabled filtering of authorisation codes:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("X-Records-Available-Count")]),e._v(" response header. Informs the client the number of records that can be returned.")]),e._v(" "),i("li",[i("em",[e._v("X-Records-Returned-Count")]),e._v(" response header. Informs the client how many records have been returned.")]),e._v(" "),i("li",[i("em",[e._v("limit")]),e._v(" query string. Used by the client to constrain the number of records returned.")]),e._v(" "),i("li",[i("em",[e._v("offset")]),e._v(" query string. Used by the client to indicate the position from where records are to be returned.")]),e._v(" "),i("li",[i("em",[e._v("fromdatetime")]),e._v(" query string. Used by the client to return records within a date range.")]),e._v(" "),i("li",[i("em",[e._v("todatetime")]),e._v(" query string. Used by the client to return records within a date range.")])]),e._v(" "),i("p",[e._v("Also added a ‘"),i("em",[e._v("codestate")]),e._v("’ filter to return authorisation codes for a given state.")]),e._v(" "),i("h2",{attrs:{id:"mobile-money-customer-account-creation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mobile-money-customer-account-creation"}},[e._v("#")]),e._v(" Mobile Money Customer Account Creation")]),e._v(" "),i("p",[e._v("Added new endpoints and associated objects to allow account creation for mobile money customers:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("POST /accounts/{identityType}")]),e._v(". Allows for account creation. The identity type initially supports ‘individual’ only, but in future could be extended to support creation of other types such as ‘merchant’.")]),e._v(" "),i("li",[i("em",[e._v("GET /accounts/{accountIdentifierType}/{identifier}")]),e._v(". Allows for a specific account and associated identities to be retrieved for a given account.")]),e._v(" "),i("li",[i("em",[e._v("GET /accounts/{Account Identifiers}")]),e._v(". As per above, but supports identification of the account using one, two or three identifiers.")])]),e._v(" "),i("h2",{attrs:{id:"mobile-money-customer-account-modification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mobile-money-customer-account-modification"}},[e._v("#")]),e._v(" Mobile Money Customer Account Modification")]),e._v(" "),i("p",[e._v("Added new endpoints to enable the update of customer mobile money account and associated account identity information:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("PATCH /accounts/{identifierType}/{identifier}")]),e._v(". Allows account modification for a given account identifier/type.")]),e._v(" "),i("li",[i("em",[e._v("PATCH /accounts/{Account Identifiers}")]),e._v(". As per above, but supports identification of the account using one, two or three identifiers.")]),e._v(" "),i("li",[i("em",[e._v("PATCH /accounts/{identifierType}/{identifier}/identities/{identityId}")]),e._v(". Allows identity modification for a given account identifier/type.")]),e._v(" "),i("li",[i("em",[e._v("PATCH /accounts/{Account Identifiers}/identities/{identityId}")]),e._v(". As per above, but supports identification of the account using one, two or three identifiers.")])]),e._v(" "),i("p",[e._v("The following fields are modifiable:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Account Fields")])]),e._v(" "),i("li",[i("p",[e._v("accountStatus")])]),e._v(" "),i("li",[i("p",[e._v("accountSubstatus")])]),e._v(" "),i("li",[i("p",[e._v("Account Identity Fields")])]),e._v(" "),i("li",[i("p",[e._v("identityStatus")])]),e._v(" "),i("li",[i("p",[e._v("kycVerificationStatus")])]),e._v(" "),i("li",[i("p",[e._v("kycVerificationEntity")])]),e._v(" "),i("li",[i("p",[e._v("kycLevel")])])]),e._v(" "),i("h2",{attrs:{id:"addition-of-custom-data-array"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#addition-of-custom-data-array"}},[e._v("#")]),e._v(" Addition of Custom Data Array")]),e._v(" "),i("p",[e._v("Added a key/value array that can accept and return provider-specific data to all relevant endpoints:")]),e._v(" "),i("p",[e._v("The following objects have been modified to accept "),i("em",[e._v("customData")]),e._v(":")]),e._v(" "),i("ul",[i("li",[e._v("Transaction")]),e._v(" "),i("li",[e._v("Reversal")]),e._v(" "),i("li",[e._v("Batch Transaction")]),e._v(" "),i("li",[e._v("Batch Rejection")]),e._v(" "),i("li",[e._v("Batch Completion")]),e._v(" "),i("li",[e._v("Statement Entry")]),e._v(" "),i("li",[e._v("Bill")]),e._v(" "),i("li",[e._v("Bill Payment")]),e._v(" "),i("li",[e._v("Debit Mandate")]),e._v(" "),i("li",[e._v("Link")]),e._v(" "),i("li",[e._v("Authorisation Code")]),e._v(" "),i("li",[e._v("Quotation")]),e._v(" "),i("li",[e._v("Account")])]),e._v(" "),i("h2",{attrs:{id:"debit-mandate-identification"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#debit-mandate-identification"}},[e._v("#")]),e._v(" Debit Mandate Identification")]),e._v(" "),i("p",[e._v("The /debitmandates endpoints have been modified to explicitly identify the payee for a debit mandate as per the following example:")]),e._v(" "),i("div",{staticClass:"language-javascript extra-class"},[i("pre",{pre:!0,attrs:{class:"language-javascript"}},[i("code",[e._v("  "),i("span",{pre:!0,attrs:{class:"token string"}},[e._v('"payee"')]),i("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),i("span",{pre:!0,attrs:{class:"token string"}},[e._v('"key"')]),i("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),i("span",{pre:!0,attrs:{class:"token string"}},[e._v('"msisdn"')]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),i("span",{pre:!0,attrs:{class:"token string"}},[e._v('"value"')]),i("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),i("span",{pre:!0,attrs:{class:"token string"}},[e._v('"+33555123456"')]),e._v("\n    "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),i("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),i("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),i("p",[e._v("The "),i("em",[e._v("payer")]),e._v(" (subject of the mandate) will always be identified in the path.")]),e._v(" "),i("h2",{attrs:{id:"apply-consistent-usage-of-date-fields"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#apply-consistent-usage-of-date-fields"}},[e._v("#")]),e._v(" Apply Consistent Usage of Date Fields")]),e._v(" "),i("p",[e._v("Added the following missing fields to the following objects to provide consistency across objects.")]),e._v(" "),i("table",[i("thead",[i("tr",[i("th",[i("strong",[e._v("Object")])]),e._v(" "),i("th",[i("strong",[e._v("requestDate")])]),e._v(" "),i("th",[i("strong",[e._v("creationDate")])]),e._v(" "),i("th",[i("strong",[e._v("modificationDate")])])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("Batch Transaction")]),e._v(" "),i("td",[e._v("Add")]),e._v(" "),i("td"),e._v(" "),i("td",[e._v("Add")])]),e._v(" "),i("tr",[i("td",[e._v("Bill Payment")]),e._v(" "),i("td",[e._v("Add")]),e._v(" "),i("td",[e._v("Add")]),e._v(" "),i("td",[e._v("Add")])]),e._v(" "),i("tr",[i("td",[e._v("Link")]),e._v(" "),i("td",[e._v("Add")]),e._v(" "),i("td",[e._v("Add")]),e._v(" "),i("td",[e._v("Add")])]),e._v(" "),i("tr",[i("td",[e._v("Authorisation Code")]),e._v(" "),i("td"),e._v(" "),i("td",[e._v("Add")]),e._v(" "),i("td",[e._v("Add")])])])]),e._v(" "),i("p",[i("em",[e._v("requestDate")]),e._v(" is optional on request and response.")]),e._v(" "),i("p",[i("em",[e._v("creationDate")]),e._v(" is not applicable on request and optional on response.")]),e._v(" "),i("p",[i("em",[e._v("modificationDate")]),e._v(" is not applicable on request and optional on response.")]),e._v(" "),i("p",[e._v("Modified all object implementations of the above fields to ensure optionality is correct and consistent across all objects/APIs.")]),e._v(" "),i("h2",{attrs:{id:"add-cursor-mechanism-for-bills-retrieval"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#add-cursor-mechanism-for-bills-retrieval"}},[e._v("#")]),e._v(" Add Cursor Mechanism for Bills Retrieval")]),e._v(" "),i("p",[e._v("Applied standard MM API response headers and query strings on the "),i("em",[e._v("accounts/{accountId}/bills")]),e._v(" and "),i("em",[e._v("/accounts/{identifierType}/{identifier}/bills")]),e._v(" endpoints:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("X-Records-Available-Count")]),e._v(" response header. Informs the client the number of records that can be returned.")]),e._v(" "),i("li",[i("em",[e._v("X-Records-Returned-Count")]),e._v(" response header. Informs the client how many records have been returned.")]),e._v(" "),i("li",[i("em",[e._v("limit")]),e._v(" query string. Used by the client to constrain the number of records returned.")]),e._v(" "),i("li",[i("em",[e._v("offset")]),e._v(" query string. Used by the client to indicate the position from where records are to be returned.")]),e._v(" "),i("li",[i("em",[e._v("fromdatetime")]),e._v(" query string. Used by the client to return records within a date range.")]),e._v(" "),i("li",[i("em",[e._v("todatetime")]),e._v(" query string. Used by the client to return records within a date range.")])]),e._v(" "),i("p",[e._v("The "),i("em",[e._v("creationDate")]),e._v(" field has also been added to the bills object.")]),e._v(" "),i("h2",{attrs:{id:"add-country-information-to-quotations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#add-country-information-to-quotations"}},[e._v("#")]),e._v(" Add Country Information to Quotations")]),e._v(" "),i("p",[e._v("Added "),i("em",[e._v("originCountry")]),e._v(" and "),i("em",[e._v("receivingCountry")]),e._v(" to the Quotation object so that they can be populated when using the "),i("em",[e._v("/quotations")]),e._v(" endpoints. "),i("em",[e._v("receivingCountry")]),e._v(" and "),i("em",[e._v("originCountry")]),e._v(" are optional in the request and response as they only apply to international quotations.")]),e._v(" "),i("p",[e._v("To clearly differentiate between the country in which the transaction originated and the country in which the sending service provider resides, created a new optional field – "),i("em",[e._v("sendingServiceProviderCountry")]),e._v(" and added this to the Quotation Object and the International Transfer Information object.")]),e._v(" "),i("h2",{attrs:{id:"add-requesting-organisation-to-transactions-and-quotations"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#add-requesting-organisation-to-transactions-and-quotations"}},[e._v("#")]),e._v(" Add Requesting Organisation to Transactions and Quotations")]),e._v(" "),i("p",[e._v("Added "),i("em",[e._v("requestingOrganisation")]),e._v(" to all objects that can be created or updated for complete consistency. For clarity these are:")]),e._v(" "),i("ul",[i("li",[e._v("Transaction")]),e._v(" "),i("li",[e._v("Batch Transaction")]),e._v(" "),i("li",[e._v("Reversal")]),e._v(" "),i("li",[e._v("Quotation.")]),e._v(" "),i("li",[e._v("Link")]),e._v(" "),i("li",[e._v("Debit Mandate")]),e._v(" "),i("li",[e._v("Authorisation Code")])]),e._v(" "),i("p",[e._v("Note that "),i("em",[e._v("requestingOrganisation")]),e._v(" already exists on Bill Payment and is unchanged.")]),e._v(" "),i("p",[e._v("The new "),i("em",[e._v("requestingOrganisation")]),e._v(" field is an object and consists of the following sub-fields:")]),e._v(" "),i("ul",[i("li",[i("em",[e._v("requestingorganisationIdentifierType")]),e._v(" (can be "),i("em",[e._v("swiftbic")]),e._v(", "),i("em",[e._v("lei")]),e._v(", or "),i("em",[e._v("organisationid")]),e._v(")")]),e._v(" "),i("li",[i("em",[e._v("requestingorganisationIdentifier")])])]),e._v(" "),i("p",[e._v("As a result of the inclusion of the "),i("em",[e._v("requestingOrganisation")]),e._v(" field and also the introduction of "),i("em",[e._v("X-Account-Holding-Institution-Identifier")]),e._v(" in v1.1, there is no longer a need for "),i("em",[e._v("requestingLei")]),e._v(" and "),i("em",[e._v("receivingLei")]),e._v(" fields in the transaction object. As such, these fields have been marked as deprecated for final removal in the next major release.")]),e._v(" "),i("h2",{attrs:{id:"code-lifetime-minimum-value-for-authorisation-codes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#code-lifetime-minimum-value-for-authorisation-codes"}},[e._v("#")]),e._v(" Code Lifetime Minimum Value for Authorisation Codes")]),e._v(" "),i("p",[e._v("Added minimum value to ensure that "),i("em",[e._v("codeLifetime")]),e._v(" is greater than zero when supplied on "),i("em",[e._v("/debitmandates")]),e._v(" APIs.")]),e._v(" "),i("h2",{attrs:{id:"miscellaneous-changes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#miscellaneous-changes"}},[e._v("#")]),e._v(" Miscellaneous Changes")]),e._v(" "),i("ul",[i("li",[e._v("The "),i("em",[e._v("/transactions")]),e._v(" API has been marked as deprecated and will be removed in the next major release. Use "),i("em",[e._v("/transactions/type/{type}")]),e._v(" instead.")]),e._v(" "),i("li",[e._v("Request and Response fields have been reordered for readability.")]),e._v(" "),i("li",[e._v("Regular expression for account identifier verification has been simplified. This change also removes issues when using a YAML parser to verify the OAS specification.")]),e._v(" "),i("li",[e._v("Reconstructed the conditionality of debitParty and creditParty in the transactions OAS objects to make correct use of the allOf and anyOf OAS keywords.")]),e._v(" "),i("li",[e._v("Added additional textual information to OAS schema fields and APIs to align with the document version more closely.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);
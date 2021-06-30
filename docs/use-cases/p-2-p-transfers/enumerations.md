---
pageClass: api-page
---

## ISO Currency Codes

The three-character alphabetic code for currency as defined by ISO 4217 is to be used for all currency fields. The full list of codes is maintained by Swiss Interbank Clearing on behalf of the International Organisation for Standardisation. This list can be obtained via the following website - [http://www.currency-iso.org/en/home/tables/table-a1.html](http://www.currency-iso.org/en/home/tables/table-a1.html).


## Transaction Types

| Code | Description |
|:--|:--|
| transfer | Transfer of funds between mobile money provider and another provider or financial institution in the same country. |
| reversal | Reversal of a prior transaction to return funds to the payer. |

## ID Types

The ID Types enumeration contains accepted identification types. Due to the wide international variation in accepted types of identification, a catch-all type of ‘otherid’ is included.

| ID Type | Description |
|:--|:--|
| passport | Payment of bill from a business for goods and/or services. |
| nationalregistration | National Registration Number. |
| othered | Catch-all for IDs not on the list. |
| drivinglicence | Driving Licence Number. |
| socialsecurity | Social Security Number. |
| alienregistration | Alien Registration ID. |
| nationalidcard | National Identity Card. |
| employer | Employers Identification. |
| taxid | Tax Identification Number. |
| seniorcitizenscard | Senior Citizens ID Card. |
| marriagecertificate | Marriage Certificate. |
| birthcertificate | Birth Certificate. |
| healthcard | Health Card. |
| votersid | Voters Identification. |
| villageelderletter | Letter of confirmation from village elder. |
| pancard | Credit/debit card number (Primary Account Number). |
| officialletter | Official letter confirming identity. |

## Account Identifiers

The Account Identifier enumeration lists all possible means to identify a target account. Identifiers can be combined if necessary, to provide a unique identifier for the target account.

| Code | Short Description | Type | Description |
|:--|:--|:--|:--|
| accountcategory | Account Category | string | Can be used to identify the sources of funds category where there are multiple accounts (wallets) held against an account holder. |
| bankaccountno | Bank Account Number | string | Financial institution account number that is typically known by the account holder. |
| accountrank | Account Rank | string | Is used to identify the rank of the source of funds where there are multiple accounts (wallets) held against an account holder. |
| identityalias | Identity Alias | string | An alias for the identity, e.g. short code for an agent till. |
| iban | IBAN | string | Internationally agreed system of identifying bank accounts across national borders to facilitate the communication and processing of cross border transactions. Can contain up to 34 alphanumeric characters. |
| accountid | Account Holder Identity | string | Identifier for the account holder. |
| msisdn | MSISDN | string | Must contain between 6 and 15 consecutive digits <br> First character can contain a ‘+’ or digit <br> Can contain spaces. |
| swiftbic | SWIFTBIC | string | A bank identifier code (BIC) is a unique identifier for a specific financial institution. A BIC is composed of a 4-character bank code, a 2-character country code, a 2-character location code and an optional 3-character branch code. BICs are used by financial institutions for letters of credit, payments and securities transactions and other business messages between banks. Please refer to [ISO 9362](https://www.iso.org/standard/60390.html) for further information. |
| sortcode | Bank Sort Code | string | Sort code to identify the financial institution holding the account. |
| organisationid | Organisation Account Identifier | string | Used to identify the organisation for which a payment is to be made. |
| username | Username | string | Used to identify target account via an associated username. |
| walletid | Wallet Identifier | string | A means to identify a mobile money wallet, particularly where multiple wallets can be held against an MSISDN. typically used in conjunction with MSISDN or identity alias to identify a particular wallet. |
| linkref | Link Reference | string | A means to uniquely identify an account via an account to account link. E.g. wallet account link to bank account. |
| consumerno | Consumer Number | String | Identifies the consumer associated with the account. |
| serviceprovider | Service Provider | String | Provides a reference for a Service Provider. |
| storeid | Store ID | String | Identifies the transacting store / retail outlet. |
| bankname | Bank Name | String | Name of the bank. |
| bankaccounttitle | Bank Account Title | String | The title of the bank account. |
| emailaddress | Email Address | String | emailaddress of the party. |
| mandatereference | Debit Mandate Reference | String | A means to identify an account via a debit mandate reference. |

## ISO Country Codes

The two-character alphabetic code for country as defined by ISO 3166 is to be used for all fields specifying a country or nationality. The full list of codes is maintained by the International Organisation for Standardisation. The list can be obtained via the following website - [http://www.iso.org/iso/country_codes](http://www.iso.org/iso/country_codes).
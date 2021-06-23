---
pageClass: api-page
goBacKBtn: kek
---

## API Fundamentals

##### URI

The Mobile Money API uses the following URI format:

**{…]/{version}/mm/{Resource}**

Where:

- … is defined upon implementation of the API by the API provider.
- **version** is as per standards defined in the API Versioning section.
- **mm** is literal for ‘Mobile Money’.
- **resource** identifies the object and resource that is the subject of the API.

##### Methods

The specification supports the following request methods:

- **POST**. Used to create a resource 
- **PATCH**. Used to update a resource
- **GET**. Used to return a representation of a resource or a collection of resources.

##### Patch Specifics

Updates to resources are accomplished by use of the HTTP PATCH method. The PATCH format is based upon [IETF RFC 6902.](https://tools.ietf.org/html/rfc6902). IETF RFC 6902.  The replace operation replaces the value of the target property with the supplied value. An example of a replace operation is *[{ "op": "replace", "path": "/XYZ", "value": “test” }]* where XYZ is the target property.

##### Resource Naming

The resource part of the URI path identifies the type of resource and if applicable, the specific resource for which an operation is to be performed. Resources are reflected in plural and by use of nouns, for example, */accounts/bills*.

##### Client Correlation ID

A client correlation id can be supplied by the API client on HTTP POST and PATCH requests. The client correlation id is a UUID that enables the client to correlate the API request with the resource created/updated by the provider. The client correlation id is specified in the [HTTP Request Header.](https://developer.mobilemoneyapi.io/1.2/content/getting-started#APIFundamentals8) When a provider issues a callback, the provider should ensure that the original correlation id provided by the client is placed in request header.
  
<br>

The client correlation ID supports safe operations. A POST request that is submitted with a correlation ID that has already been supplied will be rejected as unsafe, thus avoiding transaction duplication.

##### Use Case Flow Patterns

All use cases supported by the API are built on standardised flow patterns. Flow patterns exist for viewing, updating, and creating resources. 

There are two standard flows:

- **Synchronous Flow**. The final resource is always provided in response to an API request. There is no interim response. Can be used with POST, PATCH and GET requests.
- **Asynchronous Flow**. An interim response is always provided in response to an API request in the form of a Request State object. The final response is then provided via a callback or alternatively can be accessed via polling on Request State. Can be used with POST and PATCH requests.

More detail can be found in the [API Behavioural Model](https://developer.mobilemoneyapi.io/1.2/content/getting-started#APIBehaviourErrorHandling1) section.

##### Case Sensitivity

TBD.

##### HTTP Header Information

TBD.

###### Standard Request Headers

TBD.

###### Standard Response Headers

TBD.

###### Custom Request Headers

TBD.

###### Custom Response Headers

TBD.

##### API Versioning

TBD.

##### Amount Validation

TBD.

## API Behaviour & Error Handling

TBD.

### API Behavioural Model

TBD.

#### Overview

TBD.

#### Request State Object

TBD.

#### Generic API Sequence Diagrams

TBD.

### API Error Handling

TBD.

#### Summary of HTTP Response Codes

TBD.

#### HTTP Error Response Codes

TBD.

#### Errors Object Definition

TBD.

##### Error Parameters Object

TBD.

#### API Error Codes

TBD.

### API Heartbeat

TBD.

### Missing Response Retrieval

TBD.
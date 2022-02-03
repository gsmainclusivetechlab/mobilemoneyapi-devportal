(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{593:function(e,t,a){"use strict";a.r(t);var r=a(24),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("side-code-panel"),e._v(" "),a("h1",{attrs:{id:"about-use-case-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-use-case-scenarios"}},[e._v("#")]),e._v(" About Use Case Scenarios")]),e._v(" "),a("p",[e._v("The GSMA Simulator for the Mobile Money API is a simulated API implementation developed by the GSMA to facilitate API adoption and testing, thereby decreasing implementation effort and time to market for Mobile Money Providers and ecosystem Service Providers. Developers can navigate through Use Case Scenarios providing access to a set of pre-defined Postman Collections for the Simulator to try out some of the most common mobile money API use cases, or directly access the OAS interface for the API Specification and use the API Try It Out functionality from there.")]),e._v(" "),a("h2",{attrs:{id:"successful-retrieval-of-bills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#successful-retrieval-of-bills"}},[e._v("#")]),e._v(" Successful Retrieval of Bills")]),e._v(" "),a("p",[e._v("This diagram illustrates how a mobile money provider can retrieve bills for a given service provider customer account.")]),e._v(" "),a("code-main-group",[a("code-block",{attrs:{title:"View"}},[a("code-group",[a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("GET .../accounts/accountid/"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/bills?offset="),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("&limit="),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("\n---\nParams"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"offset"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("                \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])],1)],1),e._v(" "),a("code-block",{attrs:{title:"Code"}},[a("code-group",{attrs:{title:"JavaScript"}},[a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some JavaScript code here")]),e._v("\n")])])])])],1),e._v(" "),a("code-group",{attrs:{title:"PHP"}},[a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some PHP code here ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("?>")])]),e._v("\n")])])])])],1)],1)],1),e._v(" "),a("mermaid",[e._v("\nsequenceDiagram\n    participant Mobile Money Provider\n    participant Service Provider  \n    Mobile Money Provider->>Service Provider: GET /accounts/{identifierType}/{identifier}/bills\n    activate Mobile Money Provider\n    activate Service Provider\n    Note right of Service Provider: (1) Obtain all bills of a given account.\n    Service Provider--\x3e>Mobile Money Provider: HTTP 200 (Bills Object)  \n    deactivate Mobile Money Provider\n    deactivate Service Provider   \n")]),e._v(" "),a("div",{staticClass:"buttons-holder content-center"},[a("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TWDcEEVK",target:"_blank"}},[e._v("Open Postman Collection")]),e._v(" "),a("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TzJoF1rp",target:"_blank"}},[e._v("Open Postman Collection with Authentication")])]),e._v(" "),a("h2",{attrs:{id:"unsuccessful-retrieval-of-bills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unsuccessful-retrieval-of-bills"}},[e._v("#")]),e._v(" Unsuccessful Retrieval of Bills")]),e._v(" "),a("p",[e._v("This diagram illustrates the return of an error object where a service provider is unable to return bill details to a mobile money provider.")]),e._v(" "),a("mermaid",[e._v("\nsequenceDiagram\n    participant Mobile Money Provider\n    participant Service Provider  \n    Mobile Money Provider->>Service Provider: GET /accounts/{identifierType}/{identifier}/bills\n    activate Mobile Money Provider\n    activate Service Provider\n    Note right of Service Provider: (1) Retrieve all bills for a given account.   \n    Service Provider--\x3e>Mobile Money Provider: HTTP 4xx/5xx (Error Object)\n    Note right of Service Provider: (2) Return the error object providing"),a("br"),e._v("detais of the failure reason.   \n    deactivate Mobile Money Provider\n    deactivate Service Provider\n")]),e._v(" "),a("h2",{attrs:{id:"make-a-successful-bill-payment-with-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-a-successful-bill-payment-with-callback"}},[e._v("#")]),e._v(" Make a Successful Bill Payment with Callback")]),e._v(" "),a("p",[e._v("This diagram illustrates how a mobile money provider can make a bill payment to a service provider using the asynchronous callback method. To illustrate the end to end flow, a leg has been added to describe how a third payment provider can initiate a bill payment request to a mobile money provider.")]),e._v(" "),a("code-main-group",[a("code-block",{attrs:{title:"View"}},[a("code-group",[a("code-block",{attrs:{title:"POST"}},[a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("POST .../accounts/accountid/"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/bills/REF"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("-000001")]),e._v("/payments\n---\nHeaders"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"X-CorrelationID"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Please enter your UUID here"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"X-Callback-URL"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Please enter your callback URL here"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n---\nBody parameters"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"currency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GBP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"amountPaid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"5.30"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])],1)],1),e._v(" "),a("code-block",{attrs:{title:"Code"}},[a("code-group",{attrs:{title:"JavaScript"}},[a("code-block",{attrs:{title:"POST"}},[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some JavaScript code here")]),e._v("\n")])])])])],1),e._v(" "),a("code-group",{attrs:{title:"PHP"}},[a("code-block",{attrs:{title:"POST"}},[a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some PHP code here ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("?>")])]),e._v("\n")])])])])],1)],1)],1),e._v(" "),a("mermaid",[e._v("\nsequenceDiagram\n    participant Third Party Payment Provider\n    participant Mobile Money Provider\n    participant Service Provider\n    Note right of Third Party Payment Provider: (1) The provider that enables the payer to pay"),a("br"),e._v("bills submits a payment request to the MMP.\n    Third Party Payment Provider->>Mobile Money Provider: POST /transactions/type/billpay\n    activate Third Party Payment Provider\n    activate Mobile Money Provider\n    Mobile Money Provider--\x3e>Third Party Payment Provider: HTTP 202 (Request State Object)  \n    deactivate Third Party Payment Provider\n    Mobile Money Provider->>Service Provider: POST /accounts/{identifierType}/{identifier}/bills/{billReference}/payments\n    activate Service Provider\n    Note right of Service Provider: (2) The MMP submits the bill payment request"),a("br"),e._v("for processing to the Service Provider. The"),a("br"),e._v("Service Provider will return the Request State"),a("br"),e._v("object to indicate that the request is 'pending'.  \n    Service Provider--\x3e>Mobile Money Provider: HTTP 202 (Request State Object)  \n    deactivate Mobile Money Provider\n    Service Provider->>Mobile Money Provider: PUT {Callback URL} (Bill Payments Object)\n    activate Mobile Money Provider\n    Note right of Service Provider: (3) The Service Provider informs the MMP"),a("br"),e._v("that the request has been succesfully"),a("br"),e._v("completed by returning the final"),a("br"),e._v("representation of the bill payment. \n    Mobile Money Provider--\x3e>Service Provider: HTTP 204\n    deactivate Service Provider\n    Note right of Third Party Payment Provider: (4) The MMP informs the third party payment provider that the"),a("br"),e._v("request has been succesfully completed by returning the"),a("br"),e._v("final representation of the transactions object. \n    Mobile Money Provider->>Third Party Payment Provider: PUT {Callback URL} (Transactions Object)\n    activate Third Party Payment Provider\n    Third Party Payment Provider--\x3e> Mobile Money Provider: HTTP 204\n    deactivate Mobile Money Provider\n    deactivate Third Party Payment Provider\n")]),e._v(" "),a("div",{staticClass:"buttons-holder content-center"},[a("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TWDcEZfc",target:"_blank"}},[e._v("Open Postman Collection")]),e._v(" "),a("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TzJoDKzZ",target:"_blank"}},[e._v("Open Postman Collection with Authentication")])]),e._v(" "),a("h2",{attrs:{id:"make-an-unsuccessful-bill-payment-with-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-an-unsuccessful-bill-payment-with-callback"}},[e._v("#")]),e._v(" Make an Unsuccessful Bill Payment with Callback")]),e._v(" "),a("p",[e._v("This diagram illustrates the return of an error object where a service provider fails to process a bill payment request.")]),e._v(" "),a("mermaid",[e._v("\nsequenceDiagram\n    participant Mobile Money Provider\n    participant Service Provider\n    Mobile Money Provider->>Service Provider: POST /accounts/{identifierType}/{identifier}/bills/{billReference}/payments\n    activate Service Provider\n    activate Mobile Money Provider\n    Note right of Service Provider: (1) The MMP submits the bill payment request"),a("br"),e._v("for processing to the Service Provider. The"),a("br"),e._v("Service Provider will return the Request State"),a("br"),e._v("object to indicate that the request is 'pending'.  \n    Service Provider--\x3e>Mobile Money Provider: HTTP 202 (Request State Object)   \n    deactivate Mobile Money Provider\n    Service Provider->>Mobile Money Provider: PUT {Callback URL} (Error Object)\n    activate Mobile Money Provider\n    Note right of Service Provider: (2) The Service Provider informs the MMP"),a("br"),e._v("that the request failed by returning a"),a("br"),e._v("representation of the error object. \n    Mobile Money Provider--\x3e>Service Provider: HTTP 204\n    deactivate Service Provider\n    deactivate Mobile Money Provider\n")]),e._v(" "),a("h2",{attrs:{id:"make-a-bill-payment-with-polling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-a-bill-payment-with-polling"}},[e._v("#")]),e._v(" Make a Bill Payment with Polling")]),e._v(" "),a("p",[e._v("This diagram illustrates how a mobile money provider can make a bill payment to a service provider using the asynchronous polling method.")]),e._v(" "),a("code-main-group",[a("code-block",{attrs:{title:"View"}},[a("code-group",[a("code-block",{attrs:{title:"POST"}},[a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("POST .../accounts/accountid/"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/bills/REF"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("-000001")]),e._v("/payments\n---\nHeaders"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"X-CorrelationID"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Please enter your UUID here"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Content-Type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"application/json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n---\nBody parameters"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"currency"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"GBP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"amountPaid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"5.30"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("GET .../accounts/accountid/"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2000")]),e._v("/bills/REF"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("-000001")]),e._v("/payments?limit="),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n---\nParams"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("5")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("GET .../requestStates/Place the Server Correlation Id here\n")])])])])],1)],1),e._v(" "),a("code-block",{attrs:{title:"Code"}},[a("code-group",{attrs:{title:"JavaScript"}},[a("code-block",{attrs:{title:"POST"}},[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some JavaScript code here")]),e._v("\n")])])])]),e._v(" "),a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some JavaScript code here")]),e._v("\n")])])])]),e._v(" "),a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some JavaScript code here")]),e._v("\n")])])])])],1),e._v(" "),a("code-group",{attrs:{title:"PHP"}},[a("code-block",{attrs:{title:"POST"}},[a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some PHP code here ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("?>")])]),e._v("\n")])])])]),e._v(" "),a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some PHP code here ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("?>")])]),e._v("\n")])])])]),e._v(" "),a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some PHP code here ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("?>")])]),e._v("\n")])])])])],1)],1)],1),e._v(" "),a("mermaid",[e._v("\nsequenceDiagram\n    participant Mobile Money Provider\n    participant Service Provider\n    Mobile Money Provider->>Service Provider: POST /accounts/{identifierType}/{identifier}/bills/{billReference}/payments\n    activate Service Provider\n    activate Mobile Money Provider\n    Note right of Service Provider: (1) The MMP submits the bill payment request for processing"),a("br"),e._v("to the Service Provider. The Service Provider will return"),a("br"),e._v("the Request State object to indicate that the request is"),a("br"),e._v("'pending'.  \n    Service Provider--\x3e>Mobile Money Provider: HTTP 202 (Request State Object)  \n    deactivate Mobile Money Provider\n    loop\n        activate Mobile Money Provider\n        Mobile Money Provider->>Service Provider: GET /requeststates/{serverCorrelationId}\n        Note right of Service Provider: (2) The MMP polls the Service Provider for the Request State"),a("br"),e._v("until the bill payment is processed or until the polling limit is"),a("br"),e._v("reached. The request state will return the final status of the"),a("br"),e._v("required, i.e. completed or failed.\n        Service Provider--\x3e>Mobile Money Provider: HTTP 200 (Request State Object)\n    end\n    deactivate Service Provider\n    deactivate Mobile Money Provider\n")]),e._v(" "),a("div",{staticClass:"buttons-holder content-center"},[a("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TWDcEZk1",target:"_blank"}},[e._v("Open Postman Collection")]),e._v(" "),a("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TzJoDL4x",target:"_blank"}},[e._v("Open Postman Collection with Authentication")])]),e._v(" "),a("h2",{attrs:{id:"retrieval-of-bill-payments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieval-of-bill-payments"}},[e._v("#")]),e._v(" Retrieval of Bill Payments")]),e._v(" "),a("p",[e._v("This diagram illustrates how a mobile money provider can retrieve payments against a given bill for a given service provider customer account.")]),e._v(" "),a("code-main-group",[a("code-block",{attrs:{title:"View"}},[a("code-group",[a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("GET .../accounts/accountid/"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("/bills/REF"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("-000001")]),e._v("/payments?offset="),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("&limit="),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("\n---\nParams"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"offset"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])])],1)],1),e._v(" "),a("code-block",{attrs:{title:"Code"}},[a("code-group",{attrs:{title:"JavaScript"}},[a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some JavaScript code here")]),e._v("\n")])])])])],1),e._v(" "),a("code-group",{attrs:{title:"PHP"}},[a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some PHP code here ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("?>")])]),e._v("\n")])])])])],1)],1)],1),e._v(" "),a("mermaid",[e._v("\nsequenceDiagram\n    participant Mobile Money Provider\n    participant Service Provider    \n    Mobile Money Provider->>Service Provider: GET /accounts/{identifierType}/{identifier}/bills/{billReference}/payments?offset=0&limit=10\n    activate Mobile Money Provider\n    activate Service Provider\n    Note right of Service Provider: (1) The MMP requests up to 10 bill"),a("br"),e._v("payments for the account from the"),a("br"),e._v("Service Provider.\n    Service Provider--\x3e>Mobile Money Provider: HTTP 200 (Bill Payments Array) (X-Records-Available-Count=20)\n    Note right of Service Provider: (2) The Service Provider returns an array"),a("br"),e._v("of 10 bill payments and indicates via a"),a("br"),e._v("response header that there are 20"),a("br"),e._v("records available in total.   \n    Mobile Money Provider->>Service Provider: GET /accounts/{identifierType}/{identifier}/bills/{billReference}/payments?offset=10&limit=10\n    Note right of Service Provider: (3) The MMP requests the remaining"),a("br"),e._v("bill payments for the account"),a("br"),e._v("from the Service Provider.\n    Service Provider--\x3e>Mobile Money Provider: HTTP 200 (Bill Payments Array) (X-Records-Available-Count=20)    \n    deactivate Mobile Money Provider\n    deactivate Service Provider\n")]),e._v(" "),a("div",{staticClass:"buttons-holder content-center"},[a("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TWDcFaQw",target:"_blank"}},[e._v("Open Postman Collection")]),e._v(" "),a("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TzJoF1rm",target:"_blank"}},[e._v("Open Postman Collection with Authentication")])]),e._v(" "),a("h2",{attrs:{id:"check-for-service-availability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-for-service-availability"}},[e._v("#")]),e._v(" Check for Service Availability")]),e._v(" "),a("p",[e._v("The Heartbeat API is used for monitoring purposes and establishes whether the Service Provider is in a state that enables an FSP to submit a request for processing.")]),e._v(" "),a("code-main-group",[a("code-block",{attrs:{title:"View"}},[a("code-group",[a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[e._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("GET .../heartbeat\n")])])])])],1)],1),e._v(" "),a("code-block",{attrs:{title:"Code"}},[a("code-group",{attrs:{title:"JavaScript"}},[a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some JavaScript code here")]),e._v("\n")])])])])],1),e._v(" "),a("code-group",{attrs:{title:"PHP"}},[a("code-block",{attrs:{title:"GET"}},[a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("<?php")]),e._v(" \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("//some PHP code here ")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token delimiter important"}},[e._v("?>")])]),e._v("\n")])])])])],1)],1)],1),e._v(" "),a("mermaid",[e._v("\nsequenceDiagram\n    participant Mobile Money Provider\n    participant Service Provider\n    Mobile Money Provider->>Service Provider: GET /heartbeat\n    activate Mobile Money Provider\n    activate Service Provider\n    Note right of Service Provider: (1) The MMP requests the availability of the"),a("br"),e._v("service from the Service Provider.\n    Service Provider--\x3e>Mobile Money Provider: HTTP 200 (Heartbeat Object)\n    Note right of Service Provider: (2) The Service Provider returns the"),a("br"),e._v("availability of the service - available,"),a("br"),e._v("unavailable or degraded.   \n    deactivate Mobile Money Provider\n    deactivate Service Provider\n")]),e._v(" "),a("div",{staticClass:"buttons-holder content-center"},[a("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TWDamF7p",target:"_blank"}},[e._v("Open Postman Collection")]),e._v(" "),a("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TzCQbS8z",target:"_blank"}},[e._v("Open Postman Collection with Authentication")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);
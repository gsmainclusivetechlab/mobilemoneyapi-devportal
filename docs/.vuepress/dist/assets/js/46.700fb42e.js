(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{387:function(e,t,n){"use strict";t.a={created:function(){this.activeTabName=this.tabs.length?this.tabs[0]:""},methods:{handleTabSwitch:function(e){this.activeTabName=e,this.$forceUpdate()},isActiveTab:function(e){return e===this.activeTabName}}}},514:function(e,t,n){"use strict";n.r(t);var o=n(389),i=n.n(o),r=(n(390),n(391),n(387)),a={components:{VueSlickCarousel:i.a},data:function(){return{options:{dots:!0,arrows:!0,dotsClass:"testimonials__dots",infinite:!1,speed:500,slidesToShow:1},borderedLink:!1,accentLink:{text:"Start developing",link:"/examples"},tabs:["Agent Services"],activeTabName:""}},mixins:[r.a]},s=n(17),c=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("IndustryHeroSection",{attrs:{imageSrc:"/images/industry-hero.jpg",imageAlt:"image alt"},scopedSlots:e._u([{key:"description",fn:function(){return[n("p",[e._v("Mobile money agents are the primary point of contact for mobile money account holders. Agents provide a support service where account holders can register for the mobile money service, cash-in and cash-out from their account.")])]},proxy:!0}])}),e._v(" "),[n("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro"},[n("h2",{attrs:{id:"use-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")])]),e._v(" "),n("div",{staticClass:"tabs-buttons"},e._l(e.tabs,(function(t,o){return n("button",{key:"tab-button-"+o,staticClass:"btn btn-bordered",class:{"btn--accent":e.isActiveTab(t),"btn--inactive":!e.isActiveTab(t)},attrs:{type:"button"},on:{click:function(n){return e.handleTabSwitch(t)}}},[e._v("\n          "+e._s(t)+"\n        ")])})),0),e._v(" "),n("div",{staticClass:"tabs-holder"},[e.isActiveTab("Agent Services")?n("TabSection",{key:"1"},[[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[e._v("Agent Services comprises of the following:\n"),n("br"),n("br")]),e._v(" "),n("p",[n("strong",[e._v("Cash-in and Cash-out Services")])]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Agent-initiated Cash-out")]),e._v(". The agent initiates the cash-out and the mobile money customer is requested to authenticate the cash-out by the mobile money provider.")]),e._v(" "),n("li",[n("strong",[e._v("Customer-initiated Cash-out")]),e._v(". The mobile money customer initiates the payment by specifying the agent that is to be performing the cash-out.")]),e._v(" "),n("li",[n("strong",[e._v("Cash-out via Authorisation Code")]),e._v(". The customer generates an authorisation code up to a maximum amount. The agent then enters or scans (if rendered as a QR code) the code to perform the withdrawal.")]),e._v(" "),n("li",[n("strong",[e._v("Cash-in")]),e._v(". The agent initiates the cash-in by entering the customer account identifier(s).")])]),e._v(" "),n("p",[e._v("Closed loop and open-loop agent cash-in and cash-out are supported by the Mobile Money API. Closed loop cash-in/cash-out occurs where the agent and customer accounts reside with the same mobile money provider. Open loop cash-in/cash-out occurs where the agent and customer accounts reside with different mobile money providers.")]),e._v(" "),n("p",[e._v("Agents can be physical agents, i.e. customers that are serviced by an human, or can be an ATM.\n"),n("br"),n("br")]),e._v(" "),n("p",[n("strong",[e._v("Customer Account Services")])]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Customer Registration")]),e._v(". Agents can register new customers for mobile money.")]),e._v(" "),n("li",[n("strong",[e._v("KYC Verification")]),e._v(". Agents that provide KYC verification services can confirm that they have verified customer KYC.\n"),n("br"),n("br")])]),e._v(" "),n("p",[n("strong",[e._v("Further Reading")])]),e._v(" "),n("p",[e._v("For further reading, please refer to the following:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Getting Started")]),e._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),e._v(" "),n("li",[n("strong",[e._v("API Service Definition")]),e._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),e._v(" "),n("p",[e._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[e._v("GSMA Mobile Money API Developer Portal")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"intended-audience"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience"}},[e._v("#")]),e._v(" Intended Audience")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Audience")])]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Usage")])]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Role")])])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Mobile Money Providers")])]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("To understand how to implement the Mobile Money API to allow agents to perform cash-in, cash-out, customer registration and customer KYC verification services on behalf of mobile money customers.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("API Provider")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Agents")])]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("To understand how to implement the Mobile Money API to service customer requests for cash-in, cash-out, registration and KYC verification.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("API Consumer")])])])]),e._v(" "),n("h3",{staticClass:"h3"},[e._v("Use case scenarios")]),e._v(" "),n("accordion",[n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nAgent-initiated Cash-out\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this example, an asynchronous cash-out flow is used with a final callback.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent\n    participant Mobile Money Provider \n    participant Customer  \n    Agent->>Mobile Money Provider: POST /transactions/type/withdrawal\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The Agent submits the payment request for processing to"),n("br"),e._v("the MMP. The MMP will return the Request State object to"),n("br"),e._v("indicate that the request is 'pending'.\n    Mobile Money Provider--\x3e>Agent: HTTP 202 (Request State Object)\n    deactivate Agent\n    Mobile Money Provider->>Customer: Obtain Customer Authorisation\n    activate Customer\n    Note right of Customer: (2) The customer is requested by the MMP to"),n("br"),e._v("authorise the cash-out. This can be"),n("br"),e._v("achieved through a number of means"),n("br"),e._v("including USSD Push and One Time Code."),n("br"),e._v("OpenId can also be used for cash-out"),n("br"),e._v("authorisation.\n    Customer--\x3e>Mobile Money Provider: (Authorised)   \n    deactivate Customer\n    Mobile Money Provider->>Agent: PUT {Callback URL} (Transactions Object)\n    activate Agent\n    Note right of Mobile Money Provider: (3) The MMP informs the agent that the cash-out"),n("br"),e._v("has been successfully completed by returning"),n("br"),e._v("the final representation of the transaction.\n    Agent--\x3e>Mobile Money Provider: HTTP 204\n    deactivate Agent\n    deactivate Mobile Money Provider\n")])]},proxy:!0}],null,!1,1210822766)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nAgent-initiated Cash-out Failure\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this example, an asynchronous cash-out flow is used with a final callback that contains the reason for failure.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent\n    participant Mobile Money Provider \n    participant Customer  \n    Agent->>Mobile Money Provider: POST /transactions/type/withdrawal\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The Agent submits the payment request for processing to"),n("br"),e._v("the MMP. The MMP will return the Request State object to"),n("br"),e._v("indicate that the request is 'pending'.\n    Mobile Money Provider--\x3e>Agent: HTTP 202 (Request State Object)\n    deactivate Agent\n    Mobile Money Provider->>Customer: Obtain Customer Authorisation\n    activate Customer\n    Note right of Customer: (2) The customer is requested by the MMP to"),n("br"),e._v("authorise the cash-out. The customer"),n("br"),e._v("declines the request or the request times-"),n("br"),e._v("out.\n    Customer--\x3e>Mobile Money Provider: (Declined or Timeout)  \n    deactivate Customer\n    Mobile Money Provider->>Agent: PUT {Callback URL} (Error Object)\n    activate Agent\n    Note right of Mobile Money Provider: (3) The MMP informs the agent that the cash-out"),n("br"),e._v("has failed and returns the error object detailing"),n("br"),e._v("the reason for failure.\n    Agent--\x3e>Mobile Money Provider: HTTP 204\n    deactivate Agent\n    deactivate Mobile Money Provider\n")])]},proxy:!0}],null,!1,1299580124)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nAgent-initiated Cash-out using the Polling Method\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this example, an asynchronous cash-out flow is used with the polling method. The client polls against the request state object to determine the outcome of the cash-out request.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent\n    participant Mobile Money Provider \n    participant Customer\n    Agent->>Mobile Money Provider: POST /transactions/type/withdrawal\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The agent submits the cash-out request for processing to"),n("br"),e._v("the MMP. The MMP will return the Request State object to"),n("br"),e._v("indicate that the request is 'pending'.\n    Mobile Money Provider--\x3e>Agent: HTTP 202 (Request State Object)\n    deactivate Agent       \n    par\n        loop \n            activate Agent\n            Agent->>Mobile Money Provider: GET /requeststates/{serverCorrelationId}\n            Note right of Mobile Money Provider: (2) The agent polls the MMP for the Request State until the"),n("br"),e._v("transaction is authorised or declined or until the polling limit"),n("br"),e._v("is reached.\n            Mobile Money Provider--\x3e>Agent: HTTP 200 (Request State Object)\n        end\n    and\n        Mobile Money Provider->>Customer: Obtain Customer Authorisation\n        activate Customer\n        Note right of Customer: (3) The Customer is requested to the MMP to"),n("br"),e._v("authorise the cash-out. This can be"),n("br"),e._v("achieved through a number of means"),n("br"),e._v("including USSD Push and One Time Code."),n("br"),e._v("OpenId can also be used for cash-out"),n("br"),e._v("authorisation.\n        Customer--\x3e>Mobile Money Provider: (Authorised)\n    end\n    deactivate Agent\n    deactivate Customer\n    deactivate Mobile Money Provider\n    opt\n        activate Mobile Money Provider\n        activate Agent\n        Agent->>Mobile Money Provider: GET /transactions/transactionsReference\n        Note right of Mobile Money Provider: (4) The agent can use the objectReference returned in the"),n("br"),e._v("Request State to retrieve a representation of the complete"),n("br"),e._v("cash-out transaction.\n        Mobile Money Provider--\x3e>Agent: HTTP 200 (Transactions Object)\n    end   \n    deactivate Agent\n    deactivate Mobile Money Provider\n")])]},proxy:!0}],null,!1,3922166902)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nCustomer-initiated Cash-out\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this example, an asynchronous cash-out flow is used with a final callback.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Customer  \n    participant Mobile Money Provider  \n    participant Agent\n    Customer->>Mobile Money Provider: POST /transactions/type/withdrawal\n    activate Customer\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The customer's channel (e.g. Mobile Money App) submits"),n("br"),e._v("the cash-out request for processing to the MMP. The MMP"),n("br"),e._v("will return the Request State object to indicate that the"),n("br"),e._v("request is 'pending'.\n    Mobile Money Provider--\x3e>Customer: HTTP 202 (Request State Object)\n    deactivate Customer  \n    Mobile Money Provider->>Customer: PUT {Callback URL} (Transactions Object)\n    activate Customer\n    Note right of Mobile Money Provider: (2) The MMP informs the customer's channel that"),n("br"),e._v("the cash-out has been successfully completed"),n("br"),e._v("by returning the final representation of the"),n("br"),e._v("transaction.\n    Customer--\x3e>Mobile Money Provider: HTTP 204   \n    deactivate Customer\n    activate Agent\n    Mobile Money Provider->>Agent: Notify\n    Note right of Agent: (3) The MMP notifies the agent tha the cash-"),n("br"),e._v("out has successfully compeleted.\n    deactivate Mobile Money Provider\n    deactivate Agent\n")])]},proxy:!0}],null,!1,299909161)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nCustomer-initiated Cash-out Failure\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this example, an asynchronous cash-out flow is used with a final callback that contains the reason for failure.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Customer  \n    participant Mobile Money Provider  \n    participant Agent\n    Customer->>Mobile Money Provider: POST /transactions/type/withdrawal\n    activate Customer\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The customer's channel (e.g. Mobile Money App) submits"),n("br"),e._v("the cash-out request for processing to the MMP. The MMP"),n("br"),e._v("will return the Request State object to indicate that the"),n("br"),e._v("request is 'pending'.\n    Mobile Money Provider--\x3e>Customer: HTTP 202 (Request State Object)\n    deactivate Customer  \n    Mobile Money Provider->>Customer: PUT {Callback URL} (Error Object)\n    activate Customer\n    Note right of Mobile Money Provider: (2) The MMP informs the customer's channel that"),n("br"),e._v("the cash-out has failed and returns the error"),n("br"),e._v("object detailing the reason for failure.\n    Customer--\x3e>Mobile Money Provider: HTTP 204   \n    deactivate Customer\n    activate Agent\n    Mobile Money Provider->>Agent: Notify\n    Note right of Agent: (3) The MMP notifies the agent tha the cash-"),n("br"),e._v("out has failed.\n    deactivate Mobile Money Provider\n    deactivate Agent\n")])]},proxy:!0}],null,!1,305400870)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nCustomer Cash-out at an ATM using an Authorisation Code\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this example the /authorisationcodes API is used to obtain a pre-authorised code. This in turn is presented by the withdrawing customer to the ATM which then initiates the cash-out request. Both flows in the diagram result in a callback.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram    \n    participant Customer  \n    participant ATM\n    participant Mobile Money Provider    \n    Customer->>Mobile Money Provider: POST /accounts/{identifierType}/{identifier}/authorisationcodes\n    activate Customer\n    activate Mobile Money Provider \n    Note right of Mobile Money Provider: (1) The customer's channel (e.g. Mobile Money App)"),n("br"),e._v("submits the request to generate an authorisation code"),n("br"),e._v("to the MMP. The MMP will return the Request State"),n("br"),e._v("object to indicate that the request is 'pending'.\n    Mobile Money Provider--\x3e>Customer: HTTP 202 (Request State Object)\n    Mobile Money Provider->>Customer: PUT {Callback URL} (Authorisation Codes Object)\n    Note right of Mobile Money Provider: (2) The MMP informs the customer's channel that"),n("br"),e._v("the request has been successfully completed by"),n("br"),e._v("returing the final representation of the"),n("br"),e._v("authorisation code.\n    Customer--\x3e>Mobile Money Provider: HTTP 204\n    deactivate Customer\n    deactivate Mobile Money Provider    \n    Note right of Customer: (3) The customer enters the code into the ATM. \n    Customer->>ATM: Code Entry\n    activate Customer\n    activate ATM\n    activate Mobile Money Provider \n    ATM->>Mobile Money Provider: POST /transactions/type/withdrawal\n    Note right of Mobile Money Provider: (4) The ATM submits the cash-out request for processing"),n("br"),e._v("to the MMP. The request will contain the authorisation"),n("br"),e._v("code. The MMP will return the Request State object to"),n("br"),e._v("indicate that the request is 'pending'.\n    Mobile Money Provider--\x3e>ATM: HTTP 202 (Request State Object)\n    deactivate ATM\n    Mobile Money Provider->>ATM: PUT {Callback URL} (Transactions Object)\n    activate ATM\n    Note right of Mobile Money Provider: (5) The MMP informs the ATM that the cash-out"),n("br"),e._v("has been successfully completed by returning"),n("br"),e._v("the final representation of the transaction.\n    ATM--\x3e>Mobile Money Provider: HTTP 204\n    deactivate Mobile Money Provider \n    ATM->>Customer: Notify\n    deactivate Customer\n    deactivate ATM\n")])]},proxy:!0}],null,!1,3998088095)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nAgent-initiated Customer Cash-in\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, the agent firstly checks that the depositing customer’s name is correct and will then submit the cash-in request. The final result is returned in the callback.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent  \n    participant Mobile Money Provider  \n    participant Customer\n    Agent->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/accountname\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The agent retrieves the name of the depositing customer"),n("br"),e._v("and will check that the name is correct.\n    Mobile Money Provider--\x3e>Agent: HTTP 200 (Account Holder Name Object)\n    Agent->>Mobile Money Provider: POST /transactions/type/deposit\n    Note right of Mobile Money Provider: (2) The agent submits the cash-in request for processing to"),n("br"),e._v("the MMP. The MMP will return the Request State object to"),n("br"),e._v("indicate that the request is 'pending'.\n    Mobile Money Provider--\x3e>Agent: HTTP 202 (Request State Object)\n    deactivate Agent   \n    Mobile Money Provider->>Agent: PUT {Callback URL} (Transactions Object)\n    activate Agent\n    Note right of Mobile Money Provider: (3) The MMP informs the agent that the cash-in"),n("br"),e._v("has been successfully completed by returning"),n("br"),e._v("the final representation of the transaction.\n    Agent--\x3e>Mobile Money Provider: HTTP 204  \n    deactivate Agent\n    activate Customer\n    Mobile Money Provider->>Customer: Notify\n    Note right of Customer: (4) The MMP notifies the customer that the"),n("br"),e._v("cash-in has successfully compeleted.\n    deactivate Mobile Money Provider\n    deactivate Customer\n")])]},proxy:!0}],null,!1,2022257185)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nCash-out Reversal\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In some failure scenarios, an agent may need to reverse a transaction. This diagram illustrates a reversal with the final result communicated via the callback.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent\n    participant Mobile Money Provider \n    Agent->>Mobile Money Provider: POST /transactions/{original transaction reference}/reversals\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The agent submits the reversal request for processing to"),n("br"),e._v("the MMP - passing the reference of the transaction that is"),n("br"),e._v("to be reversed. The MMP will return the Request State"),n("br"),e._v("object to indicate that the request is 'pending'.\n    Mobile Money Provider--\x3e>Agent: HTTP 202 (Request State Object)\n    Mobile Money Provider->>Agent: PUT {Callback URL} (Reversal Object)\n    Note right of Mobile Money Provider: (2) The MMP informs the Agent that the reversal"),n("br"),e._v("has been successfully completed by returning"),n("br"),e._v("the final representation of the reversal"),n("br"),e._v("transaction.\n    Agent--\x3e>Mobile Money Provider: HTTP 204\n    deactivate Agent\n    deactivate Mobile Money Provider\n")])]},proxy:!0}],null,!1,3146980999)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nRegister a Customer Mobile Money Account\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, an agent registers a new mobile money customer on behalf of a mobile money provider.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent\n    participant Mobile Money Provider \n    Agent->>Mobile Money Provider: POST /accounts/individual\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The agent submits the account"),n("br"),e._v("registration request for processing"),n("br"),e._v("to the MMP. The MMP will return"),n("br"),e._v("the Request State object to"),n("br"),e._v("indicate that the request is"),n("br"),e._v("'pending'.\n    Mobile Money Provider--\x3e>Agent: HTTP 202 (Request State Object)\n    Mobile Money Provider->>Agent: PUT {Callback URL} (Account Object)\n    Note right of Mobile Money Provider: (2) The MMP informs the agent that"),n("br"),e._v("the reversal has been successfully"),n("br"),e._v("registered by returning the final"),n("br"),e._v("representation of the account.\n    Agent--\x3e>Mobile Money Provider: HTTP 204\n    deactivate Agent\n    deactivate Mobile Money Provider\n")])]},proxy:!0}],null,!1,1512677179)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nVerify a Customer’s KYC\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, an agent verifies the physical KYC provided by the customer against details held by the mobile money provider and informs the provider that the KYC has been successfully verified.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent\n    participant Mobile Money Provider \n    Agent->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The agent retrieves account"),n("br"),e._v("information from the MMP which"),n("br"),e._v("includes the customer's KYC"),n("br"),e._v("details.\n    Mobile Money Provider--\x3e>Agent: HTTP 200 (Account Object)\n    Agent->>Mobile Money Provider: PATCH /accounts/{identifierType}/{identifier}/identities/{identityId}\n    Note right of Mobile Money Provider: (2) The agent submits the KYC"),n("br"),e._v("verification request for processing"),n("br"),e._v("to the MMP. The MMP will return"),n("br"),e._v("the Request State object to"),n("br"),e._v("indicate that the request is"),n("br"),e._v("'pending'.\n    Mobile Money Provider--\x3e>Agent: HTTP 202 (Request State Object)\n    Mobile Money Provider->>Agent: PUT {Callback URL} (Success)\n    Note right of Mobile Money Provider: (3) The MMP informs the agent that"),n("br"),e._v("the verification request has been"),n("br"),e._v("successfully processed.\n    Agent--\x3e>Mobile Money Provider: HTTP 204\n    deactivate Agent\n    deactivate Mobile Money Provider\n")])]},proxy:!0}],null,!1,39885153)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nObtain an Agent Balance\n")]},proxy:!0},{key:"body",fn:function(){return[n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent\n    participant Mobile Money Provider \n    Agent->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/balance\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) Obtain the balance of the"),n("br"),e._v("requested account.\n    Mobile Money Provider--\x3e>Agent: HTTP 200 (Balance Object)\n    deactivate Agent\n    deactivate Mobile Money Provider\n")])]},proxy:!0}],null,!1,3258070738)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nRetrieve Transactions for an Agent\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("This diagram illustrates use of a cursor mechanism to retrieve all transactions for an agent via multiple requests.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent\n    participant Mobile Money Provider \n    Agent->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/transactions?offset=0&limit=20\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The agent requests up to 20"),n("br"),e._v("transactions for the account"),n("br"),e._v("from the MMP.\n    Mobile Money Provider--\x3e>Agent: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)\n    Note right of Mobile Money Provider: (2) The MMP returns an array of"),n("br"),e._v("20 transactions and indicates"),n("br"),e._v("via a response header that"),n("br"),e._v("there are 40 records"),n("br"),e._v("available in total.    \n    Agent->>Mobile Money Provider: GET /accounts/{identifierType}/{identifier}/transactions?offset=20&limit=20\n    Note right of Mobile Money Provider: (3) The agent requests the"),n("br"),e._v("remaining transactions for"),n("br"),e._v("the account from the MMP.\n    Mobile Money Provider--\x3e>Agent: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)\n    deactivate Agent\n    deactivate Mobile Money Provider\n")])]},proxy:!0}],null,!1,2435905135)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nCheck for Service Availability\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("The Heartbeat API is used for monitoring purposes and establishes whether the mobile money provider is in a state that enables a client to submit a request for processing.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent\n    participant Mobile Money Provider \n    Agent->>Mobile Money Provider: GET /heartbeat\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) The agent requests the availability"),n("br"),e._v("of the service from the MMP.\n    Mobile Money Provider--\x3e>Agent: HTTP 200 (Heartbeat Object)\n    Note right of Mobile Money Provider: (2) The MMP returns the availability of"),n("br"),e._v("the service - available, unavailable"),n("br"),e._v("or degraded.\n    deactivate Agent\n    deactivate Mobile Money Provider\n")])]},proxy:!0}],null,!1,1588109284)}),e._v(" "),n("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\nRetrieve a Missing API Response\n")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("This API can be used by the agent to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the mobile money provider.")]),e._v(" "),n("mermaid",[e._v("\nsequenceDiagram\n    participant Agent\n    participant Mobile Money Provider \n    Agent->>Mobile Money Provider: GET /responses{clientCorrelationId}\n    activate Agent\n    activate Mobile Money Provider\n    Note right of Mobile Money Provider: (1) Using the agent's"),n("br"),e._v("clientCorrelationId, a request for the"),n("br"),e._v("missing API response is sent.\n    Mobile Money Provider--\x3e>Agent: HTTP 200 (Responses Object) \n    Note right of Mobile Money Provider: (2) A Responses object is returned"),n("br"),e._v("containing a link to the missing"),n("br"),e._v("resource.    \n    Agent->>Mobile Money Provider: GET /{link}\n    Note right of Mobile Money Provider: (3) The Agent uses the link to obtain"),n("br"),e._v("a representation of the missing"),n("br"),e._v("resource.\n    Mobile Money Provider--\x3e>Agent: HTTP 200 (Requested Object)\n    deactivate Agent\n    deactivate Mobile Money Provider\n")])]},proxy:!0}],null,!1,761184561)})],1)],e._v(" "),n("router-link",{staticClass:"btn btn--transparent",attrs:{to:"/use-cases/agent-services/"}},[e._v("Start developing")])],2):e._e()],1)])])],e._v(" "),[n("section",{staticClass:"get-started-section section--p-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro section-intro--narrow text-center"},[n("h2",{attrs:{id:"ready-to-explore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-explore"}},[e._v("#")]),e._v(" Ready to explore?")]),e._v(" "),n("div",{staticClass:"section-description"},[e._v("Find our latest API documentation.\n        ")])]),e._v(" "),n("div",{staticClass:"buttons-holder content-center get-started__btn-holder"},[e.borderedLink?n("router-link",{staticClass:"btn",attrs:{to:e.borderedLink.link}},[e._v(" "+e._s(e.borderedLink.text)+"\n        ")]):e._e(),e._v(" "),e.accentLink?n("router-link",{staticClass:"btn btn--accent",attrs:{to:e.accentLink.link}},[e._v(" "+e._s(e.accentLink.text)+"\n        ")]):e._e()],1)])])]],2)}),[],!1,null,null,null);t.default=c.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1,30,37,50],{317:function(e,t,n){var i=n(1),a=n(3),r=n(68),s=[].slice,c=function(e){return function(t,n){var i=arguments.length>2,a=i?s.call(arguments,2):void 0;return e(i?function(){("function"==typeof t?t:Function(t)).apply(this,a)}:t,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:c(a.setTimeout),setInterval:c(a.setInterval)})},318:function(e,t,n){"use strict";n.r(t);n(317);var i={name:"accordion-item",props:["expanded"],data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var e=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},a=n(24),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"accordion__item",class:{"accordion__item--active":e.isOpened}},[n("div",{staticClass:"accordion__item-wrapper"},[n("div",{staticClass:"accordion__item-header",on:{click:e.openClose}},[n("div",{staticClass:"title"},[e._t("header")],2),e._v(" "),n("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),e._v(" "),n("div",{staticClass:"accordion__item-body",style:{height:e.isOpened?e.itemElementHeig:"0px"}},[n("div",{staticClass:"accordion__item-body-content"},[e._t("body")],2)])])])}),[],!1,null,null,null);t.default=r.exports},319:function(e,t,n){"use strict";n.r(t);var i={name:"accordion",data:function(){return{isOpened:!1}}},a=n(24),r=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"accordion"},[t("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=r.exports},320:function(e,t,n){"use strict";n.r(t);n(10),n(12),n(14);var i={beforeMount:function(){n.e(125).then(n.t.bind(null,423,7)).then((function(e){e.initialize({startOnLoad:!0,securityLevel:"loose",er:{useMaxWidth:!1}}),e.init()}))}},a=n(24),r=Object(a.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"mermaid"},[this._t("default")],2)}),[],!1,null,null,null);t.default=r.exports},418:function(e,t,n){"use strict";n.r(t);var i=n(319),a=n(318),r=n(320),s={name:"p2p-transfers-tab",props:["isActive"],components:{accordion:i.default,accordionItem:a.default,Mermaid:r.default},data:function(){return{tabTitle:"P2P Transfers"}}},c=n(24),o=Object(c.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":e.isActive}},[n("div",{staticClass:"tab-content"},[n("div",{staticClass:"text-box"},[n("p",[e._v("The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer\n        funds from an account holding individual to another account holding individual or to a non-account\n        holding individual (known as an unregistered customer). The API supports a wide number of financial\n        service providers including mobile money providers, banks, and micro-finance institutions.\n        The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’\n        P2P transfers (accounts held in different FSPs).\n        Bilateral and Switch-based transfers can be supported.\n      ")]),e._v(" "),n("p",[e._v("For further reading, please refer to the following:")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("router-link",{staticClass:"btn btn--transparent",attrs:{to:"#"}},[e._v("\n        Start developing\n      ")])],1),e._v(" "),n("h3",{staticClass:"h3"},[e._v("Use case scenarios")]),e._v(" "),n("accordion",[n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and  and to(3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Switch\n              participant Receiving FSP\n              \n              Sending FSP->>Switch: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Switch\n              activate Receiving FSP\n              Note right of Switch: (1) The Sending FSP retrieves the name of the intended"),n("br"),e._v("recipient from the Receiving FSP via the Switch.\n              Switch->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              Receiving FSP--\x3e>Switch: HTTP 200 (Account Holder Name Object)\n              Switch--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Sending FSP\n              deactivate Switch\n              deactivate Receiving FSP\n            \n              Sending FSP->>Switch: POST /quotations\n              activate Sending FSP\n              activate Switch\n              activate Receiving FSP\n              Note right of Switch: (2) Subject to sender confirmation of the name returned in step 1, the Sending FSP"),n("br"),e._v("submits a quotation request to the Switch. The Switch will return the Request"),n("br"),e._v("State object to indicate that the request is 'pending'. \n              Switch->>Receiving FSP: POST /quotations\n              Note right of Receiving FSP: (3) The Swith in turn submits the quotation request to the"),n("br"),e._v("Receiving FSP. The Receiving FSP will return the"),n("br"),e._v("Request State object to indicate that the request is"),n("br"),e._v("'pending'.\n              Receiving FSP--\x3e>Switch: HTTP 202 (Request State Object)\n              Switch--\x3e>Sending FSP: HTTP 202 (Request State  Object)\n              deactivate Sending FSP\n              deactivate Switch\n              \n              Receiving FSP->>Switch: PUT {Callback URL} (Quotations Object)\n              activate Switch\n              activate Sending FSP\n              Note right of Receiving FSP: (4) The FSP informs the Switch that the quotation"),n("br"),e._v("has been successfully created by returning the"),n("br"),e._v("final representation of the quotation. \n              Switch--\x3e>Receiving FSP: HTTP 204\n              deactivate Receiving FSP\n              Switch->>Sending FSP: PUT {Callback URL} (Quotations Object)\n              Note right of Switch: (5) The Swith in turn informs the Sending FSP that the quotation"),n("br"),e._v(" has successfully created by returning the final representation"),n("br"),e._v("of the quotation.\n              Sending FSP--\x3e>Switch: HTTP 204\n              deactivate Switch\n              deactivate Sending FSP\n              \n              Sending FSP->>Switch: POST /transactions/type/transfer\n              activate Switch\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Switch: (6) Subject to sender confirmation, the Sending FSP submits a transfer"),n("br"),e._v("request to the Swith. The Switch will return the Request State object to"),n("br"),e._v("indicate that the request is 'pending'.\n              Switch->>Receiving FSP: POST /transactions/type/transfer\n              Note right of Receiving FSP: (7) The Switch in turn submits the transaction request to the"),n("br"),e._v("Receiving FSP. The Receiving FSP will return the"),n("br"),e._v("Request State object to indicate that the request is"),n("br"),e._v("'pending'.\n              Receiving FSP--\x3e>Switch: HTTP 202 (Request State Object)\n              Switch--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Switch\n              deactivate Sending FSP\n              \n              Receiving FSP->>Switch: PUT {Callback URL} (Transactions Object)\n              activate Switch\n              activate Sending FSP\n              Note right of Receiving FSP: (8) The FSP informs the Switch that the"),n("br"),e._v("transaction has been successfully completed"),n("br"),e._v("by returning the final representation of the"),n("br"),e._v("transaction.\n              Switch--\x3e>Receiving FSP: HTTP 204\n              deactivate Receiving FSP\n              Switch->>Sending FSP: PUT {Callback URL} (Transactions Object)\n              Note right of Switch: (9) The Swith in turn informs the Sending FSP that the"),n("br"),e._v("transaction has been successfully completed"),n("br"),e._v("by returning the final representation of the"),n("br"),e._v("transaction.\n              Sending FSP--\x3e>Switch: HTTP 204\n              deactivate Switch\n              deactivate Sending FSP\n          ")]),e._v(" "),n("div",{staticClass:"buttons-holder content-center"},[n("router-link",{staticClass:"btn btn--accent",attrs:{to:"/use-cases/p-2-p-transfers/scenarios/scenarios.html#p2p-transfer-via-switch"}},[e._v("\n              Start developing\n            ")])],1)]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Bilateral P2P Transfer\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Receiving FSP\n              \n              Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the"),n("br"),e._v("intended recipient from the Receiving FSP.\n              Receiving FSP--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Receiving FSP\n              \n              Sending FSP->>Receiving FSP: POST /transactions/type/transfer\n              activate Receiving FSP\n              Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP"),n("br"),e._v("submits a transfer request. The Receiving FSP will"),n("br"),e._v("return the Request State object to indicate that the"),n("br"),e._v('request is "pending".\n              Receiving FSP--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Sending FSP\n              deactivate Receiving FSP\n              \n              Receiving FSP->>Sending FSP: PUT {Callback URL} (Transaction Object)\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the'),n("br"),e._v("transation has been succesfully completed by"),n("br"),e._v("returning the final representation of the transaction. \n              Sending FSP--\x3e>Receiving FSP: HTTP 204\n              deactivate Sending FSP\n              deactivate Receiving FSP\n          ")]),e._v(" "),n("div",{staticClass:"buttons-holder content-center"},[n("router-link",{staticClass:"btn btn--accent",attrs:{to:"/use-cases/p-2-p-transfers/scenarios/scenarios.html#bilateral-p2p-transfer"}},[e._v("\n              Start developing\n            ")])],1)]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          ‘On-us’ P2P Transfer Initiated by a Third Party Provider\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, A third party provider enables a sender to transfer money to a recipient in the same FSP. The third party provider (1) confirms the recipient name, (2) requests a quotation and (3) performs the transfer with the FSP. A callback is provided by the FSP to return confirmation of the transfer.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Third Party Provider\n              participant FSP\n              \n              Third Party Provider->>FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Third Party Provider\n              activate FSP\n              Note right of FSP: (1) The Third Party Provider retrieves the name of the"),n("br"),e._v("intended recipient from the FSP.\n              FSP--\x3e>Third Party Provider: HTTP 200 (Account Holder Name Object)\n              deactivate Third Party Provider\n              deactivate FSP\n              \n              Third Party Provider->>FSP: POST /quotations\n              activate Third Party Provider\n              activate FSP\n              Note right of FSP: (2) Subject to sender confirmation, the Third Party Provider"),n("br"),e._v("submits a quotation request. The FSP will return the"),n("br"),e._v("Request State object to indicate that the request is"),n("br"),e._v("'pending'.\n              Third Party Provider--\x3e>FSP: HTTP 202 (Request State Object)\n              deactivate Third Party Provider\n              deactivate FSP\n\n              FSP->>Third Party Provider: PUT {Callback URL} (Quotations Object)\n              activate Third Party Provider\n              activate FSP\n              Note right of FSP: (3) The FSP in turn informs the Third Party Provider that"),n("br"),e._v("the quotation has been successfully completed by"),n("br"),e._v("returning the final representation of the quotation.\n              Third Party Provider--\x3e>FSP: HTTP 204\n              deactivate Third Party Provider\n              deactivate FSP\n\n              Third Party Provider->>FSP: POST /transactions/type/transfer\n              activate Third Party Provider\n              activate FSP\n              Note right of FSP: (4) Subject to sender confirmation, the Third Party Provider"),n("br"),e._v("submits a transfer request. The FSP will return the"),n("br"),e._v("Request State object to indicate that the request is"),n("br"),e._v("'pending'.\n              Third Party Provider--\x3e>FSP: HTTP 202 (Request State Object)\n              deactivate Third Party Provider\n              deactivate FSP\n\n              FSP->>Third Party Provider: PUT {Callback URL} (Transactions Object)\n              activate Third Party Provider\n              activate FSP\n              Note right of FSP: (5) The FSP in turn informs the Third Party Provider that"),n("br"),e._v("the transaction has been successfully completed by"),n("br"),e._v("returning the final representation of the transaction.\n              Third Party Provider--\x3e>FSP: HTTP 204\n              deactivate Third Party Provider\n              deactivate FSP\n          ")]),e._v(" "),n("div",{staticClass:"buttons-holder content-center"},[n("router-link",{staticClass:"btn btn--accent",attrs:{to:"/use-cases/p-2-p-transfers/scenarios/scenarios.html#on-us-p2p-transfer-initiated-by-a-third-party-provider"}},[e._v("\n              Start developing\n            ")])],1)]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer Failure\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In some failure scenarios, a transfer may need to be reversed. This diagram illustrates an reversal with the final result communicated via the callback.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Receiving FSP\n              \n              Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the"),n("br"),e._v("intended recipient from the Receiving FSP.\n              Receiving FSP--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Receiving FSP\n              \n              Sending FSP->>Receiving FSP: POST /transactions/type/transfer\n              activate Receiving FSP\n              Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP"),n("br"),e._v("submits a transfer request. The Receiving FSP will"),n("br"),e._v("return the Request State object to indicate that the"),n("br"),e._v('request is "pending".\n              Receiving FSP--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Sending FSP\n              deactivate Receiving FSP\n              \n              Receiving FSP->>Sending FSP: PUT {Callback URL} (Error Object)\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the'),n("br"),e._v("transation has been failed by returning an Error"),n("br"),e._v("object containing the reason for failure. \n              Sending FSP--\x3e>Receiving FSP: HTTP 204\n              deactivate Sending FSP\n              deactivate Receiving FSP\n          ")]),e._v(" "),n("div",{staticClass:"buttons-holder content-center"},[n("router-link",{staticClass:"btn btn--accent",attrs:{to:"/use-cases/p-2-p-transfers/scenarios/scenarios.html#p2p-transfer-failure"}},[e._v("\n              Start developing\n            ")])],1)]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer Reversal\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In some failure scenarios, a transfer may need to be reversed. This diagram illustrates an reversal with the final result communicated via the callback.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Receiving FSP\n              \n              Sending FSP->>Receiving FSP: POST /transactions/{original transaction reference}/reversals\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (1) The Sending FSP submits the reversal request for"),n("br"),e._v("processing to the Receiving FSP - passing the reference of"),n("br"),e._v("the transaction that is to bve reversed. The Receiving FSP"),n("br"),e._v("will return the Request State object to indicate the the"),n("br"),e._v('request is "pending".\n              Receiving FSP--\x3e>Sending FSP: HTTP 202 (Request State Object)\n\n              Receiving FSP->>Sending FSP: PUT {Callback URL} (Reversal Object)\n              Note right of Receiving FSP: (2) The Receiving FSP informs the Sending FSP'),n("br"),e._v("that the reversal has been successully"),n("br"),e._v("completed by returning the final representation"),n("br"),e._v("of the reversal transaction.\n              Sending FSP--\x3e>Receiving FSP: HTTP 204\n              deactivate Sending FSP\n              deactivate Receiving FSP\n          ")]),e._v(" "),n("div",{staticClass:"buttons-holder content-center"},[n("router-link",{staticClass:"btn btn--accent",attrs:{to:"/use-cases/p-2-p-transfers/scenarios/scenarios.html#p2p-transfer-reversal"}},[e._v("\n              Start developing\n            ")])],1)]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Obtain an FSP Balance\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("Obtain an FSP Balance")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Requesting FSP\n              participant FSP\n              \n              Requesting FSP->>FSP: GET /accounts/{identifierType}/{identifier}/balance\n              activate Requesting FSP\n              activate FSP\n              Note right of FSP: (1) Obtain the balance of the"),n("br"),e._v("Requesting FSP's account.\n              FSP--\x3e>Requesting FSP: HTTP 200 (Balance Object)\n              deactivate Requesting FSP\n              deactivate FSP\n          ")]),e._v(" "),n("div",{staticClass:"buttons-holder content-center"},[n("router-link",{staticClass:"btn btn--accent",attrs:{to:"/use-cases/p-2-p-transfers/scenarios/scenarios.html#obtain-an-fsp-balance"}},[e._v("\n              Start developing\n            ")])],1)]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Retrieve Transactions for an FSP\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("This diagram illustrates use of a cursor mechanism to retrieve all transactions for a sending requesting FSP via multiple requests.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Requesting FSP\n              participant FSP\n              \n              Requesting FSP->>FSP: GET /accounts/{identifierType}/{identifier}/transactions?offset=0&limit=20\n              activate Requesting FSP\n              activate FSP\n              Note right of FSP: (1) The Requesting FSP requests up to"),n("br"),e._v("20 transactions for their account"),n("br"),e._v("from the FSP.\n              FSP--\x3e>Requesting FSP: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)\n              Note right of FSP: (2) The FSP returns an array of 20"),n("br"),e._v("transactions and indicates via a"),n("br"),e._v("response header that there are 40"),n("br"),e._v("records available in total.\n              \n              Requesting FSP->>FSP: GET /accounts/{identifierType}/{identifier}/transactions?offset=20&limit=20\n              Note right of FSP: (3) The Requesting FSP requests the"),n("br"),e._v("remaining transactions from the"),n("br"),e._v("account from the Receiving FSP.\n              FSP--\x3e>Requesting FSP: HTTP 200 (Transactions Array) (X-Records-Available-Count=40)\n              deactivate Requesting FSP\n              deactivate FSP\n          ")]),e._v(" "),n("div",{staticClass:"buttons-holder content-center"},[n("router-link",{staticClass:"btn btn--accent",attrs:{to:"/use-cases/p-2-p-transfers/scenarios/scenarios.html#retrieve-transactions-for-an-fsp"}},[e._v("\n              Start developing\n            ")])],1)]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Check for Service Availability\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("The Heartbeat API is used for monitoring purposes and establishes whether the FSP is in a state that enables a client to submit a request for processing")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Requesting FSP\n              participant FSP\n              \n              Requesting FSP->>FSP: GET /heartbeat\n              activate Requesting FSP\n              activate FSP\n              Note right of FSP: (1) The Requesting FSP requests the"),n("br"),e._v("availability of the service from the FSP.\n              FSP--\x3e>Requesting FSP: HTTP 200 (Heartbeat Object)\n              Note right of FSP: (2) The FSP returns the availability of"),n("br"),e._v("the service - available, unavailable"),n("br"),e._v("or degraded.\n              deactivate Requesting FSP\n              deactivate FSP\n          ")]),e._v(" "),n("div",{staticClass:"buttons-holder content-center"},[n("router-link",{staticClass:"btn btn--accent",attrs:{to:"/use-cases/p-2-p-transfers/scenarios/scenarios.html#check-for-service-availability"}},[e._v("\n              Start developing\n            ")])],1)]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Retrieve a Missing API Response\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("This API can be used by the sending FSP to retrieve a link to the final representation of the resource for which it attempted to create. Use this API when a callback is not received from the receiving FSP.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Receiving FSP\n              \n              Sending FSP->>Receiving FSP: GET /responses{clientCorrelationId}\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (1) Using the Sending FSP's"),n("br"),e._v("clientCorrelationId, a request for the"),n("br"),e._v("missing API response is sent.\n              Sending FSP--\x3e>Receiving FSP: HTTP 200 (Responses Object)\n              Note right of Receiving FSP: (2) A Responses object is returned"),n("br"),e._v("containing a link to the missing"),n("br"),e._v("resource.\n              \n              Sending FSP->>Receiving FSP: GET /{link}\n              Note right of Receiving FSP: (3) The Sending FSP uses the link to"),n("br"),e._v("obtain a representation of the missing"),n("br"),e._v("resource.\n              Receiving FSP--\x3e>Sending FSP: HTTP 200 (Requested Object)\n              deactivate Receiving FSP\n              deactivate Sending FSP\n          ")]),e._v(" "),n("div",{staticClass:"buttons-holder content-center"},[n("router-link",{staticClass:"btn btn--accent",attrs:{to:"/use-cases/p-2-p-transfers/scenarios/scenarios.html#retrieve-a-missing-api-response"}},[e._v("\n              Start developing\n            ")])],1)]},proxy:!0}])})],1)],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"dotted-list"},[t("li",[t("b",[this._v("Getting Started.")]),this._v(" Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),this._v(" "),t("li",[t("b",[this._v("API Service Definition.")]),this._v(" Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        All documentation can be found on the\n        "),t("a",{staticClass:"external",attrs:{href:"https://developer.mobilemoneyapi.io/",target:"_blank"}},[this._v("GSMA Mobile Money API Developer Portal.")])])}],!1,null,null,null);t.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14,42,44,65,66],{336:function(e,t,n){"use strict";n.r(t);var i={name:"TabSection",props:["isActive"],data:function(){return{tabTitle:"Bill Payments"}}},a=n(11),r=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[t("div",{staticClass:"tab-content"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=r.exports},337:function(e,t,n){"use strict";n.r(t);n(101);var i={name:"accordion-item",props:{expanded:{type:Boolean}},data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null,showElement:!0}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var e=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},a=n(11),r=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:!e.showElement,expression:"!showElement"}],staticClass:"accordion__item",class:{"accordion__item--active":e.isOpened}},[n("div",{staticClass:"accordion__item-wrapper"},[n("div",{staticClass:"accordion__item-header",on:{click:e.openClose}},[n("div",{staticClass:"title"},[e._t("header")],2),e._v(" "),n("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),e._v(" "),n("div",{staticClass:"accordion__item-body",style:{height:e.isOpened?e.itemElementHeig:"0px"}},[n("div",{staticClass:"accordion__item-body-content"},[e._t("body")],2)])])])}),[],!1,null,null,null);t.default=r.exports},338:function(e,t,n){"use strict";n.r(t);var i={name:"accordion",data:function(){return{isOpened:!1}}},a=n(11),r=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"accordion"},[t("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=r.exports},339:function(e,t,n){"use strict";n.r(t);n(12),n(13),n(16);var i={beforeMount:function(){n.e(147).then(n.t.bind(null,445,7)).then((function(e){e.initialize({startOnLoad:!0,securityLevel:"loose",er:{useMaxWidth:!1}}),e.init()}))}},a=n(11),r=Object(a.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"mermaid"},[this._t("default")],2)}),[],!1,null,null,null);t.default=r.exports},342:function(e,t,n){"use strict";n.r(t);var i=n(338),a=n(337),r=n(339),c={name:"p2p-transfers-tab",props:["isActive"],components:{TabSection:n(336).default,accordion:i.default,accordionItem:a.default,Mermaid:r.default},data:function(){return{tabTitle:"P2P Transfers"}}},o=n(11),s=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TabSection",{attrs:{isActive:e.isActive}},[n("div",{staticClass:"text-box"},[n("p",[e._v("The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer\n        funds from an account holding individual to another account holding individual or to a non-account\n        holding individual (known as an unregistered customer). The API supports a wide number of financial\n        service providers including mobile money providers, banks, and micro-finance institutions.\n        The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’\n        P2P transfers (accounts held in different FSPs).\n        Bilateral and Switch-based transfers can be supported.\n      ")]),e._v(" "),n("p",[e._v("For further reading, please refer to the following:")]),e._v(" "),n("ul",{staticClass:"dotted-list"},[n("li",[n("b",[e._v("Getting Started.")]),e._v(" Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),e._v(" "),n("li",[n("b",[e._v("API Service Definition.")]),e._v(" Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),e._v(" "),n("p",[e._v("\n        All documentation can be found on the\n        "),n("a",{staticClass:"external",attrs:{href:"https://developer.mobilemoneyapi.io/",target:"_blank"}},[e._v("GSMA Mobile Money API Developer Portal.")])]),e._v(" "),n("router-link",{staticClass:"btn btn--transparent",attrs:{to:"#"}},[e._v("\n        Start developing\n      ")])],1),e._v(" "),n("h3",{staticClass:"h3"},[e._v("Use case scenarios")]),e._v(" "),n("accordion",[n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and and to (3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Switch\n              participant Receiving FSP\n              Sending FSP->>Switch: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Switch\n              activate Receiving FSP\n              Note right of Switch: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP via the Switch.\n              Switch->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              Receiving FSP--\x3e>Switch: HTTP 200 (Account Holder Name Object)\n              Switch--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Sending FSP\n              deactivate Switch\n              deactivate Receiving FSP\n\n              Sending FSP->>Switch: POST /quotations\n              activate Sending FSP\n              activate Switch\n              activate Receiving FSP\n              Note right of Switch: (2) Subject to sender confirmation of the name returned in step 1, the Sending FSP submits a quotation"),n("br"),e._v("request to the Switch. The Switch will return the Request State object to indicate that the request"),n("br"),e._v("is 'pending'.\n              Switch->>Receiving FSP: POST /quotations\n              Note right of Receiving FSP: (3) The Swith in turn submits the quotation request to the Receiving FSP."),n("br"),e._v("The Receiving FSP will return the Request State object to indicate"),n("br"),e._v("that the request is 'pending'.\n              Receiving FSP--\x3e>Switch: HTTP 200 (Request State Object)\n              Switch--\x3e>Sending FSP: HTTP 200 (Request State  Object)\n              deactivate Sending FSP\n              deactivate Switch\n\n              Receiving FSP->>Switch: PUT {Callback URL} (Quotations Object)\n              activate Switch\n              activate Sending FSP\n              Note right of Receiving FSP: (4) The FSP informs the Switch that the quotation has been successfully"),n("br"),e._v("created by returning the final representation of the quotation.\n              Switch--\x3e>Receiving FSP: HTTP 204\n              deactivate Receiving FSP\n              Switch->>Sending FSP: PUT {Callback URL} (Quotations Object)\n              Note right of Switch: (5) The Swith in turn informs the Sending FSP that the transaction has succesfully complteted"),n("br"),e._v("by returning the final representation of the transaction.\n              Sending FSP--\x3e>Switch: HTTP 204\n              deactivate Switch\n              deactivate Sending FSP\n\n              Sending FSP->>Switch: POST /transactions/type/transfer\n              activate Switch\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Switch: (6) Subject to sender confirmation, the Sending FSP submits a transfer request to the Swith. The Switch"),n("br"),e._v("will return the Request State object to indicate that the request is 'pending'.\n              Switch->>Receiving FSP: POST /transactions/type/transfer\n              Note right of Receiving FSP: (7) The Switch in turn submits the transaction request to the"),n("br"),e._v("Receiving FSP. The Receiving FSP will return the Request State object"),n("br"),e._v("to indicate that the request is 'pending'.\n              Receiving FSP--\x3e>Switch: HTTP 202 (Request State Object)\n              Switch--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Switch\n              deactivate Sending FSP\n\n              Receiving FSP->>Switch: PUT {Callback URL} (Transactions Object)\n              activate Switch\n              activate Sending FSP\n              Note right of Receiving FSP: (8) The FSP informs the Switch that the transaction has been"),n("br"),e._v("successfully completed by returning the final representation of the"),n("br"),e._v("transaction.\n              Switch--\x3e>Receiving FSP: HTTP 204\n              deactivate Receiving FSP\n\n              Switch->>Sending FSP: PUT {Callback URL} (Transactions Object)\n              Note right of Switch: (9) The Swith in turn informs the Sending FSP that the transaction has been successfully completed"),n("br"),e._v("by returning the final representation of the transaction.\n              Sending FSP--\x3e>Switch: HTTP 204\n              deactivate Switch\n              deactivate Sending FSP\n          ")])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Bilateral P2P Transfer\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Receiving FSP\n              Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP.\n              Receiving FSP--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Receiving FSP\n              Sending FSP->>Receiving FSP: POST /transactions/type/transfer\n              activate Receiving FSP\n              Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP submits a transfer request. "),n("br"),e._v('The Receiving FSP will return the Request State object to indicate that the request is "pending".\n              Receiving FSP--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Sending FSP\n              deactivate Receiving FSP\n              Receiving FSP->>Sending FSP: PUT {Callback URL} (Transaction Object)\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the transation has been succesfully completed'),n("br"),e._v("by returning the final representation of the transaction.\n              Sending FSP--\x3e>Receiving FSP: HTTP 204\n              deactivate Sending FSP\n              deactivate Receiving FSP\n          ")])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          'On-us' P2P Transfer Initiated by a Third Party Provider\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("\"'On-us' P2P Transfer Initiated by a Third Party Provider\" item content will be here")])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer Failure\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"P2P Transfer Failure" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer Reversal\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"P2P Transfer Reversal" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Obtain an FSP Balance\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Obtain an FSP Balance" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Retrieve Transactions for an FSP\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Retrieve Transactions for an FSP" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Check for Service Availability" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Retrieve a Missing API Response\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Retrieve a Missing API Response" item content will be here')])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=s.exports}}]);
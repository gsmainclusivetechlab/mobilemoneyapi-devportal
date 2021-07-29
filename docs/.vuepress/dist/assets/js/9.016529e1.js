(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12,39,61,62,73,74],{329:function(e,t,n){"use strict";n.r(t);var i={name:"accordion",data:function(){return{isOpened:!1}}},a=n(20),c=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"accordion"},[t("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=c.exports},330:function(e,t,n){"use strict";n.r(t);n(102);var i={name:"accordion-item",props:["expanded"],data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var e=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},a=n(20),c=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"accordion__item",class:{"accordion__item--active":e.isOpened}},[n("div",{staticClass:"accordion__item-wrapper"},[n("div",{staticClass:"accordion__item-header",on:{click:e.openClose}},[n("div",{staticClass:"title"},[e._t("header")],2),e._v(" "),n("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),e._v(" "),n("div",{staticClass:"accordion__item-body",style:{height:e.isOpened?e.itemElementHeig:"0px"}},[n("div",{staticClass:"accordion__item-body-content"},[e._t("body")],2)])])])}),[],!1,null,null,null);t.default=c.exports},331:function(e,t,n){"use strict";n.r(t);n(11),n(12),n(14);var i={beforeMount:function(){n.e(148).then(n.t.bind(null,437,7)).then((function(e){e.initialize({startOnLoad:!0,securityLevel:"loose",er:{useMaxWidth:!1}}),e.init()}))}},a=n(20),c=Object(a.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"mermaid"},[this._t("default")],2)}),[],!1,null,null,null);t.default=c.exports},334:function(e,t,n){"use strict";n.r(t);var i=n(329),a=n(330),c=n(331),r={name:"p2p-transfers-tab",props:["isActive"],components:{accordion:i.default,accordionItem:a.default,Mermaid:c.default},data:function(){return{tabTitle:"P2P Transfers"}}},s=n(20),o=Object(s.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":e.isActive}},[n("div",{staticClass:"tab-content"},[n("div",{staticClass:"text-box"},[n("p",[e._v("The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer\n        funds from an account holding individual to another account holding individual or to a non-account\n        holding individual (known as an unregistered customer). The API supports a wide number of financial\n        service providers including mobile money providers, banks, and micro-finance institutions.\n        The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’\n        P2P transfers (accounts held in different FSPs).\n        Bilateral and Switch-based transfers can be supported.\n      ")]),e._v(" "),n("p",[e._v("For further reading, please refer to the following:")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("router-link",{staticClass:"btn btn--transparent",attrs:{to:"#"}},[e._v("\n        Start developing\n      ")])],1),e._v(" "),n("h3",{staticClass:"h3"},[e._v("Use case scenarios")]),e._v(" "),n("accordion",[n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and and to (3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Switch\n              participant Receiving FSP\n              Sending FSP->>Switch: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Switch\n              activate Receiving FSP\n              Note right of Switch: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP via the Switch.\n              Switch->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              Receiving FSP--\x3e>Switch: HTTP 200 (Account Holder Name Object)\n              Switch--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Sending FSP\n              deactivate Switch\n              deactivate Receiving FSP\n              \n              Sending FSP->>Switch: POST /quotations\n              activate Sending FSP\n              activate Switch\n              activate Receiving FSP\n              Note right of Switch: (2) Subject to sender confirmation of the name returned in step 1, the Sending FSP submits a quotation"),n("br"),e._v("request to the Switch. The Switch will return the Request State object to indicate that the request"),n("br"),e._v("is 'pending'. \n              Switch->>Receiving FSP: POST /quotations\n              Note right of Receiving FSP: (3) The Swith in turn submits the quotation request to the Receiving FSP."),n("br"),e._v("The Receiving FSP will return the Request State object to indicate"),n("br"),e._v("that the request is 'pending'.\n              Receiving FSP--\x3e>Switch: HTTP 200 (Request State Object)\n              Switch--\x3e>Sending FSP: HTTP 200 (Request State  Object)\n              deactivate Sending FSP\n              deactivate Switch\n\n              Receiving FSP->>Switch: PUT {Callback URL} (Quotations Object)\n              activate Switch\n              activate Sending FSP\n              Note right of Receiving FSP: (4) The FSP informs the Switch that the quotation has been successfully"),n("br"),e._v("created by returning the final representation of the quotation. \n              Switch--\x3e>Receiving FSP: HTTP 204\n              deactivate Receiving FSP\n              Switch->>Sending FSP: PUT {Callback URL} (Quotations Object)\n              Note right of Switch: (5) The Swith in turn informs the Sending FSP that the transaction has succesfully complteted"),n("br"),e._v("by returning the final representation of the transaction.\n              Sending FSP--\x3e>Switch: HTTP 204\n              deactivate Switch\n              deactivate Sending FSP\n\n              Sending FSP->>Switch: POST /transactions/type/transfer\n              activate Switch\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Switch: (6) Subject to sender confirmation, the Sending FSP submits a transfer request to the Swith. The Switch"),n("br"),e._v("will return the Request State object to indicate that the request is 'pending'.\n              Switch->>Receiving FSP: POST /transactions/type/transfer\n              Note right of Receiving FSP: (7) The Switch in turn submits the transaction request to the"),n("br"),e._v("Receiving FSP. The Receiving FSP will return the Request State object"),n("br"),e._v("to indicate that the request is 'pending'.\n              Receiving FSP--\x3e>Switch: HTTP 202 (Request State Object)\n              Switch--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Switch\n              deactivate Sending FSP\n\n              Receiving FSP->>Switch: PUT {Callback URL} (Transactions Object)\n              activate Switch\n              activate Sending FSP\n              Note right of Receiving FSP: (8) The FSP informs the Switch that the transaction has been"),n("br"),e._v("successfully completed by returning the final representation of the"),n("br"),e._v("transaction.\n              Switch--\x3e>Receiving FSP: HTTP 204\n              deactivate Receiving FSP\n\n              Switch->>Sending FSP: PUT {Callback URL} (Transactions Object)\n              Note right of Switch: (9) The Swith in turn informs the Sending FSP that the transaction has been successfully completed"),n("br"),e._v("by returning the final representation of the transaction.\n              Sending FSP--\x3e>Switch: HTTP 204\n              deactivate Switch\n              deactivate Sending FSP\n          ")])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Bilateral P2P Transfer\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Receiving FSP\n              Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP.\n              Receiving FSP--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Receiving FSP\n              Sending FSP->>Receiving FSP: POST /transactions/type/transfer\n              activate Receiving FSP\n              Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP submits a transfer request. "),n("br"),e._v('The Receiving FSP will return the Request State object to indicate that the request is "pending".\n              Receiving FSP--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Sending FSP\n              deactivate Receiving FSP\n              Receiving FSP->>Sending FSP: PUT {Callback URL} (Transaction Object)\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the transation has been succesfully completed'),n("br"),e._v("by returning the final representation of the transaction. \n              Sending FSP--\x3e>Receiving FSP: HTTP 204\n              deactivate Sending FSP\n              deactivate Receiving FSP\n          ")])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          'On-us' P2P Transfer Initiated by a Third Party Provider\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("\"'On-us' P2P Transfer Initiated by a Third Party Provider\" item content will be here")])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer Failure\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"P2P Transfer Failure" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer Reversal\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"P2P Transfer Reversal" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Obtain an FSP Balance\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Obtain an FSP Balance" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Retrieve Transactions for an FSP\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Retrieve Transactions for an FSP" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Check for Service Availability" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Retrieve a Missing API Response\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Retrieve a Missing API Response" item content will be here')])]},proxy:!0}])})],1)],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"dotted-list"},[t("li",[t("b",[this._v("Getting Started.")]),this._v(" Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),this._v(" "),t("li",[t("b",[this._v("API Service Definition.")]),this._v(" Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        All documentation can be found on the\n        "),t("a",{staticClass:"external",attrs:{href:"https://developer.mobilemoneyapi.io/",target:"_blank"}},[this._v("GSMA Mobile Money API Developer Portal.")])])}],!1,null,null,null);t.default=o.exports},339:function(e,t,n){"use strict";n.r(t);var i={name:"international-transfers-tab",props:["isActive"],data:function(){return{tabTitle:"International Transfers"}}},a=n(20),c=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[t("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (3)\n  ")])])}),[],!1,null,null,null);t.default=c.exports},340:function(e,t,n){"use strict";n.r(t);var i={name:"merchant-payments-tab",props:["isActive"],data:function(){return{tabTitle:"Merchant Payments"}}},a=n(20),c=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[t("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (1)\n  ")])])}),[],!1,null,null,null);t.default=c.exports},478:function(e,t,n){"use strict";n.r(t);n(72);var i=n(340),a=n(339),c=n(334),r={merchantPaymentsTab:i.default,internationalTransfersTab:a.default,p2pTransfersCaseTab:c.default},s={name:"use-cases-payment-service-providers-payment-aggregators-with-tabs",components:r,props:["defaultTab"],data:function(){return{tabs:r,activeTabName:""}},created:function(){this.setStartActiveTab()},methods:{handleTabSwitch:function(e){this.activeTabName=e},getTabTitle:function(e){return e.data().tabTitle},setStartActiveTab:function(){this.activeTabName=this.getTabTitle(this.tabs["".concat(Object.keys(this.tabs)[this.defaultTab?this.defaultTab-1:0])])}}},o=n(20),l=Object(o.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[e._m(0),e._v(" "),n("div",{staticClass:"tabs-buttons"},e._l(e.tabs,(function(t,i){return n("button",{key:"tab-button-"+i,staticClass:"btn btn-bordered",class:{"btn--accent":e.getTabTitle(t)===e.activeTabName,"btn--inactive":e.getTabTitle(t)!==e.activeTabName},attrs:{type:"button"},on:{click:function(n){e.handleTabSwitch(e.getTabTitle(t))}}},[e._v("\n        "+e._s(e.getTabTitle(t))+"\n      ")])})),0),e._v(" "),e._l(e.tabs,(function(t,i){return n("div",{key:"tab-"+i,staticClass:"tabs-holder"},[e.getTabTitle(t)===e.activeTabName?n(t,{tag:"component",attrs:{isActive:e.getTabTitle(t)===e.activeTabName}}):e._e()],1)}))],2)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"section-intro"},[t("h2",{staticClass:"h2 section-title"},[this._v("Use cases")])])}],!1,null,null,null);t.default=l.exports}}]);
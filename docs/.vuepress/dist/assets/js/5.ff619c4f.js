(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11,32,39,58,65,66,67,68,69,70,71],{317:function(t,e,n){var i=n(1),a=n(3),s=n(68),c=[].slice,r=function(t){return function(e,n){var i=arguments.length>2,a=i?c.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,a)}:e,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:r(a.setTimeout),setInterval:r(a.setInterval)})},318:function(t,e,n){"use strict";n.r(e);var i={name:"accordion",data:function(){return{isOpened:!1}}},a=n(24),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"accordion"},[e("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=s.exports},319:function(t,e,n){"use strict";n.r(e);n(317);var i={name:"accordion-item",props:["expanded"],data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var t=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout((function(){t.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},a=n(24),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accordion__item",class:{"accordion__item--active":t.isOpened}},[n("div",{staticClass:"accordion__item-wrapper"},[n("div",{staticClass:"accordion__item-header",on:{click:t.openClose}},[n("div",{staticClass:"title"},[t._t("header")],2),t._v(" "),n("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),t._v(" "),n("div",{staticClass:"accordion__item-body",style:{height:t.isOpened?t.itemElementHeig:"0px"}},[n("div",{staticClass:"accordion__item-body-content"},[t._t("body")],2)])])])}),[],!1,null,null,null);e.default=s.exports},320:function(t,e,n){"use strict";n.r(e);n(10),n(12),n(14);var i={beforeMount:function(){n.e(143).then(n.t.bind(null,427,7)).then((function(t){t.initialize({startOnLoad:!0,securityLevel:"loose",er:{useMaxWidth:!1}}),t.init()}))}},a=n(24),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"mermaid"},[this._t("default")],2)}),[],!1,null,null,null);e.default=s.exports},321:function(t,e,n){"use strict";n.r(e);var i=n(318),a=n(319),s=n(320),c={name:"p2p-transfers-tab",props:["isActive"],components:{accordion:i.default,accordionItem:a.default,Mermaid:s.default},data:function(){return{tabTitle:"P2P Transfers"}}},r=n(24),o=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":t.isActive}},[n("div",{staticClass:"tab-content"},[n("div",{staticClass:"text-box"},[n("p",[t._v("The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer\n        funds from an account holding individual to another account holding individual or to a non-account\n        holding individual (known as an unregistered customer). The API supports a wide number of financial\n        service providers including mobile money providers, banks, and micro-finance institutions.\n        The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’\n        P2P transfers (accounts held in different FSPs).\n        Bilateral and Switch-based transfers can be supported.\n      ")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("router-link",{staticClass:"btn btn--transparent",attrs:{to:"#"}},[t._v("\n        Start developing\n      ")])],1),t._v(" "),n("h3",{staticClass:"h3"},[t._v("Use case scenarios")]),t._v(" "),n("accordion",[n("accordion-item",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[t._v("In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and and to (3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.")]),t._v(" "),n("Mermaid",[t._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Switch\n              participant Receiving FSP\n              Sending FSP->>Switch: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Switch\n              activate Receiving FSP\n              Note right of Switch: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP via the Switch.\n              Switch->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              Receiving FSP--\x3e>Switch: HTTP 200 (Account Holder Name Object)\n              Switch--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Sending FSP\n              deactivate Switch\n              deactivate Receiving FSP\n              \n              Sending FSP->>Switch: POST /quotations\n              activate Sending FSP\n              activate Switch\n              activate Receiving FSP\n              Note right of Switch: (2) Subject to sender confirmation of the name returned in step 1, the Sending FSP submits a quotation"),n("br"),t._v("request to the Switch. The Switch will return the Request State object to indicate that the request"),n("br"),t._v("is 'pending'. \n              Switch->>Receiving FSP: POST /quotations\n              Note right of Receiving FSP: (3) The Swith in turn submits the quotation request to the Receiving FSP."),n("br"),t._v("The Receiving FSP will return the Request State object to indicate"),n("br"),t._v("that the request is 'pending'.\n              Receiving FSP--\x3e>Switch: HTTP 200 (Request State Object)\n              Switch--\x3e>Sending FSP: HTTP 200 (Request State  Object)\n              deactivate Sending FSP\n              deactivate Switch\n\n              Receiving FSP->>Switch: PUT {Callback URL} (Quotations Object)\n              activate Switch\n              activate Sending FSP\n              Note right of Receiving FSP: (4) The FSP informs the Switch that the quotation has been successfully"),n("br"),t._v("created by returning the final representation of the quotation. \n              Switch--\x3e>Receiving FSP: HTTP 204\n              deactivate Receiving FSP\n              Switch->>Sending FSP: PUT {Callback URL} (Quotations Object)\n              Note right of Switch: (5) The Swith in turn informs the Sending FSP that the transaction has succesfully complteted"),n("br"),t._v("by returning the final representation of the transaction.\n              Sending FSP--\x3e>Switch: HTTP 204\n              deactivate Switch\n              deactivate Sending FSP\n\n              Sending FSP->>Switch: POST /transactions/type/transfer\n              activate Switch\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Switch: (6) Subject to sender confirmation, the Sending FSP submits a transfer request to the Swith. The Switch"),n("br"),t._v("will return the Request State object to indicate that the request is 'pending'.\n              Switch->>Receiving FSP: POST /transactions/type/transfer\n              Note right of Receiving FSP: (7) The Switch in turn submits the transaction request to the"),n("br"),t._v("Receiving FSP. The Receiving FSP will return the Request State object"),n("br"),t._v("to indicate that the request is 'pending'.\n              Receiving FSP--\x3e>Switch: HTTP 202 (Request State Object)\n              Switch--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Switch\n              deactivate Sending FSP\n\n              Receiving FSP->>Switch: PUT {Callback URL} (Transactions Object)\n              activate Switch\n              activate Sending FSP\n              Note right of Receiving FSP: (8) The FSP informs the Switch that the transaction has been"),n("br"),t._v("successfully completed by returning the final representation of the"),n("br"),t._v("transaction.\n              Switch--\x3e>Receiving FSP: HTTP 204\n              deactivate Receiving FSP\n\n              Switch->>Sending FSP: PUT {Callback URL} (Transactions Object)\n              Note right of Switch: (9) The Swith in turn informs the Sending FSP that the transaction has been successfully completed"),n("br"),t._v("by returning the final representation of the transaction.\n              Sending FSP--\x3e>Switch: HTTP 204\n              deactivate Switch\n              deactivate Sending FSP\n          ")])]},proxy:!0}])}),t._v(" "),n("accordion-item",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          Bilateral P2P Transfer\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[t._v("In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.")]),t._v(" "),n("Mermaid",[t._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Receiving FSP\n              Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP.\n              Receiving FSP--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Receiving FSP\n              Sending FSP->>Receiving FSP: POST /transactions/type/transfer\n              activate Receiving FSP\n              Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP submits a transfer request. "),n("br"),t._v('The Receiving FSP will return the Request State object to indicate that the request is "pending".\n              Receiving FSP--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Sending FSP\n              deactivate Receiving FSP\n              Receiving FSP->>Sending FSP: PUT {Callback URL} (Transaction Object)\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the transation has been succesfully completed'),n("br"),t._v("by returning the final representation of the transaction. \n              Sending FSP--\x3e>Receiving FSP: HTTP 204\n              deactivate Sending FSP\n              deactivate Receiving FSP\n          ")])]},proxy:!0}])}),t._v(" "),n("accordion-item",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          'On-us' P2P Transfer Initiated by a Third Party Provider\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[t._v("\"'On-us' P2P Transfer Initiated by a Third Party Provider\" item content will be here")])]},proxy:!0}])}),t._v(" "),n("accordion-item",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          P2P Transfer Failure\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[t._v('"P2P Transfer Failure" item content will be here')])]},proxy:!0}])}),t._v(" "),n("accordion-item",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          P2P Transfer Reversal\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[t._v('"P2P Transfer Reversal" item content will be here')])]},proxy:!0}])}),t._v(" "),n("accordion-item",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          Obtain an FSP Balance\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[t._v('"Obtain an FSP Balance" item content will be here')])]},proxy:!0}])}),t._v(" "),n("accordion-item",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          Retrieve Transactions for an FSP\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[t._v('"Retrieve Transactions for an FSP" item content will be here')])]},proxy:!0}])}),t._v(" "),n("accordion-item",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[t._v('"Check for Service Availability" item content will be here')])]},proxy:!0}])}),t._v(" "),n("accordion-item",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n          Retrieve a Missing API Response\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[t._v('"Retrieve a Missing API Response" item content will be here')])]},proxy:!0}])})],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"dotted-list"},[e("li",[e("b",[this._v("Getting Started.")]),this._v(" Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),this._v(" "),e("li",[e("b",[this._v("API Service Definition.")]),this._v(" Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        All documentation can be found on the\n        "),e("a",{staticClass:"external",attrs:{href:"https://developer.mobilemoneyapi.io/",target:"_blank"}},[this._v("GSMA Mobile Money API Developer Portal.")])])}],!1,null,null,null);e.default=o.exports},322:function(t,e,n){"use strict";n.r(e);var i={name:"bill-payments-tab",props:["isActive"],data:function(){return{tabTitle:"Bill Payments"}}},a=n(24),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (7)\n  ")])])}),[],!1,null,null,null);e.default=s.exports},323:function(t,e,n){"use strict";n.r(e);var i={name:"recurring-payments-tab",props:["isActive"],data:function(){return{tabTitle:"Recurring Payments"}}},a=n(24),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (5)\n  ")])])}),[],!1,null,null,null);e.default=s.exports},325:function(t,e,n){"use strict";n.r(e);var i={name:"disbursements-tab",props:["isActive"],data:function(){return{tabTitle:"Disbursements"}}},a=n(24),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (2)\n  ")])])}),[],!1,null,null,null);e.default=s.exports},326:function(t,e,n){"use strict";n.r(e);var i={name:"international-transfers-tab",props:["isActive"],data:function(){return{tabTitle:"International Transfers"}}},a=n(24),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (3)\n  ")])])}),[],!1,null,null,null);e.default=s.exports},327:function(t,e,n){"use strict";n.r(e);var i={name:"merchant-payments-tab",props:["isActive"],data:function(){return{tabTitle:"Merchant Payments"}}},a=n(24),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (1)\n  ")])])}),[],!1,null,null,null);e.default=s.exports},329:function(t,e,n){"use strict";n.r(e);var i={name:"agent-services-tab",props:["isActive"],data:function(){return{tabTitle:"Agent Services"}}},a=n(24),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"text-box"},[e("p",[this._v("The Merchant Payment Mobile Money APIs allow merchants to accept payments from mobile money customers. Supported payment mechanisms include:")]),this._v(" "),this._m(0),this._v(" "),e("router-link",{staticClass:"btn btn--transparent",attrs:{to:"#"}},[this._v("\n        Start developing\n      ")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("Payee-initiated merchant payment.")]),this._v(" The merchant initiates the payment and the payer is requested to authenticate to confirm acceptance by the mobile money provider. "),e("br"),this._v(" "),e("b",[this._v("Payer-initiated merchant payment.")]),this._v(" The payer initiates the payment by specifying the merchant that is to be paid.\n      "),e("b",[this._v("Merchant payment via pre-authorised payment code.")]),this._v(" The payer generates a payment authorisation code up to a maximum payment amount. The merchant then enters or scans (if rendered as a QR code) the payer’s code to perform the payment.")])}],!1,null,null,null);e.default=s.exports},361:function(t,e,n){"use strict";n.r(e);var i={name:"account-linking-tab",props:["isActive"],data:function(){return{tabTitle:"Account Linking"}}},a=n(24),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (6)\n  ")])])}),[],!1,null,null,null);e.default=s.exports},439:function(t,e,n){"use strict";n.r(e);n(96);var i=n(327),a=n(325),s=n(326),c=n(321),r=n(323),o=n(361),l=n(322),u=n(329),h={merchantPaymentsTab:i.default,disbursementsTab:a.default,internationalTransfersTab:s.default,p2pTransfersCaseTab:c.default,recurringPaymentsTab:r.default,accountLinkingTab:o.default,billPaymentsTab:l.default,agentServicesTab:u.default},d={name:"use-cases-with-tabs",components:h,props:["defaultTab"],data:function(){return{tabs:h,activeTabName:""}},created:function(){this.setStartActiveTab()},methods:{handleTabSwitch:function(t){this.activeTabName=t},getTabTitle:function(t){return t.data().tabTitle},setStartActiveTab:function(){this.activeTabName=this.getTabTitle(this.tabs["".concat(Object.keys(this.tabs)[this.defaultTab?this.defaultTab-1:0])])}}},v=n(24),f=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[t._m(0),t._v(" "),n("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(e,i){return n("button",{key:"tab-button-"+i,staticClass:"btn btn-bordered",class:{"btn--accent":t.getTabTitle(e)===t.activeTabName,"btn--inactive":t.getTabTitle(e)!==t.activeTabName},attrs:{type:"button"},on:{click:function(n){t.handleTabSwitch(t.getTabTitle(e))}}},[t._v("\n        "+t._s(t.getTabTitle(e))+"\n      ")])})),0),t._v(" "),t._l(t.tabs,(function(e,i){return n("div",{key:"tab-"+i,staticClass:"tabs-holder"},[t.getTabTitle(e)===t.activeTabName?n(e,{tag:"component",attrs:{isActive:t.getTabTitle(e)===t.activeTabName}}):t._e()],1)}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-intro"},[e("h2",{staticClass:"h2 section-title"},[this._v("Use cases")])])}],!1,null,null,null);e.default=f.exports}}]);
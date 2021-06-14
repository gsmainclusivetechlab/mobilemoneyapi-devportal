(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5,14,20,29,34,35],{314:function(e,t,n){var i=n(0),a=n(2),s=n(69),r=[].slice,c=function(e){return function(t,n){var i=arguments.length>2,a=i?r.call(arguments,2):void 0;return e(i?function(){("function"==typeof t?t:Function(t)).apply(this,a)}:t,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:c(a.setTimeout),setInterval:c(a.setInterval)})},315:function(e,t,n){"use strict";n.r(t);n(314);var i={name:"accordion-item",props:["expanded"],data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var e=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},a=n(24),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"accordion__item",class:{"accordion__item--active":e.isOpened}},[n("div",{staticClass:"accordion__item-wrapper"},[n("div",{staticClass:"accordion__item-header",on:{click:e.openClose}},[n("div",{staticClass:"title"},[e._t("header")],2),e._v(" "),n("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),e._v(" "),n("div",{staticClass:"accordion__item-body",style:{height:e.isOpened?e.itemElementHeig:"0px"}},[n("div",{staticClass:"accordion__item-body-content"},[e._t("body")],2)])])])}),[],!1,null,null,null);t.default=s.exports},316:function(e,t,n){"use strict";n.r(t);var i={name:"accordion",data:function(){return{isOpened:!1}}},a=n(24),s=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"accordion"},[t("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=s.exports},319:function(e,t,n){"use strict";n.r(t);n(9),n(11),n(15);var i={beforeMount:function(){n.e(45).then(n.t.bind(null,404,7)).then((function(e){e.initialize({startOnLoad:!0,securityLevel:"loose"}),e.init()}))}},a=n(24),s=Object(a.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"mermaid"},[this._t("default")],2)}),[],!1,null,null,null);t.default=s.exports},348:function(e,t,n){"use strict";n.r(t);var i={name:"agent-services-tab",props:["isActive"],data:function(){return{tabTitle:"Agent Services"}}},a=n(24),s=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[t("div",{staticClass:"tab-content"},[t("div",{staticClass:"text-box"},[t("p",[this._v("The Merchant Payment Mobile Money APIs allow merchants to accept payments from mobile money customers. Supported payment mechanisms include:")]),this._v(" "),this._m(0),this._v(" "),t("router-link",{staticClass:"btn btn--transparent",attrs:{to:"#"}},[this._v("\n        Start developing\n      ")])],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("b",[this._v("Payee-initiated merchant payment.")]),this._v(" The merchant initiates the payment and the payer is requested to authenticate to confirm acceptance by the mobile money provider. "),t("br"),this._v(" "),t("b",[this._v("Payer-initiated merchant payment.")]),this._v(" The payer initiates the payment by specifying the merchant that is to be paid.\n      "),t("b",[this._v("Merchant payment via pre-authorised payment code.")]),this._v(" The payer generates a payment authorisation code up to a maximum payment amount. The merchant then enters or scans (if rendered as a QR code) the payer’s code to perform the payment.")])}],!1,null,null,null);t.default=s.exports},349:function(e,t,n){"use strict";n.r(t);var i={name:"account-linking-tab",props:["isActive"],data:function(){return{tabTitle:"Account Linking"}}},a=n(24),s=Object(a.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[t("div",{staticClass:"tab-content"},[this._v("\n    Account Linking tab content will be here\n  ")])])}),[],!1,null,null,null);t.default=s.exports},350:function(e,t,n){"use strict";n.r(t);var i=n(316),a=n(315),s=n(319),r={name:"merchant-payments-case-tab",props:["isActive"],components:{accordion:i.default,accordionItem:a.default,Mermaid:s.default},data:function(){return{tabTitle:"P2P Transfers"}}},c=n(24),o=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":e.isActive}},[n("div",{staticClass:"tab-content"},[n("div",{staticClass:"text-box"},[n("p",[e._v("The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer\n        funds from an account holding individual to another account holding individual or to a non-account\n        holding individual (known as an unregistered customer). The API supports a wide number of financial\n        service providers including mobile money providers, banks, and micro-finance institutions.\n        The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’\n        P2P transfers (accounts held in different FSPs).\n        Bilateral and Switch-based transfers can be supported.\n      ")]),e._v(" "),n("p",[e._v("For further reading, please refer to the following:")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("router-link",{staticClass:"btn btn--transparent",attrs:{to:"#"}},[e._v("\n        Start developing\n      ")])],1),e._v(" "),n("h3",{staticClass:"h3"},[e._v("Use case scenarios")]),e._v(" "),n("accordion",[n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"P2P Transfer via Switch" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Bilateral P2P Transfer\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Receiving FSP\n              Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP.\n              Receiving FSP--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Receiving FSP\n              Sending FSP->>Receiving FSP: POST /transactions/type/transfer\n              activate Receiving FSP\n              Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP submits a transfer request. "),n("br"),e._v('The Receiving FSP will return the Request State object to indicate that the request is "pending".\n              Receiving FSP--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Sending FSP\n              deactivate Receiving FSP\n              Receiving FSP->>Sending FSP: PUT {Callback URL} (Transaction Object)\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the transation has been succesfully completed'),n("br"),e._v("by returning the final representation of the transaction. \n              Sending FSP--\x3e>Receiving FSP: HTTP 204\n              deactivate Sending FSP\n              deactivate Receiving FSP\n          ")])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          'On-us' P2P Transfer Initiated by a Third Party Provider\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("\"'On-us' P2P Transfer Initiated by a Third Party Provider\" item content will be here")])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer Failure\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"P2P Transfer Failure" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer Reversal\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"P2P Transfer Reversal" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Obtain an FSP Balance\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Obtain an FSP Balance" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Retrieve Transactions for an FSP\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Retrieve Transactions for an FSP" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Check for Service Availability" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n          Retrieve a Missing API Response\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Retrieve a Missing API Response" item content will be here')])]},proxy:!0}])})],1)],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"dotted-list"},[t("li",[t("b",[this._v("Getting Started.")]),this._v(" Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),this._v(" "),t("li",[t("b",[this._v("API Service Definition.")]),this._v(" Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        All documentation can be found on the\n        "),t("a",{staticClass:"external",attrs:{href:"https://developer.mobilemoneyapi.io/",target:"_blank"}},[this._v("GSMA Mobile Money API Developer Portal.")])])}],!1,null,null,null);t.default=o.exports},408:function(e,t,n){"use strict";n.r(t);n(98);var i=n(350),a=n(349),s=n(348),r={p2pTransfersCaseTab:i.default,accountLinkingTab:a.default,agentServicesTab:s.default},c={name:"use-cases-with-tabs",components:r,props:["defaultTab"],data:function(){return{tabs:r,activeTabName:""}},created:function(){this.setStartActiveTab()},methods:{handleTabSwitch:function(e){this.activeTabName=e},getTabTitle:function(e){return e.data().tabTitle},setStartActiveTab:function(){this.activeTabName=this.getTabTitle(this.tabs["".concat(Object.keys(this.tabs)[this.defaultTab?this.defaultTab-1:0])])}}},o=n(24),l=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[e._m(0),e._v(" "),n("div",{staticClass:"tabs-buttons"},e._l(e.tabs,(function(t,i){return n("button",{key:"tab-button-"+i,staticClass:"btn btn-bordered",class:{"btn--accent":e.getTabTitle(t)===e.activeTabName,"btn--inactive":e.getTabTitle(t)!==e.activeTabName},attrs:{type:"button"},on:{click:function(n){e.handleTabSwitch(e.getTabTitle(t))}}},[e._v("\n        "+e._s(e.getTabTitle(t))+"\n      ")])})),0),e._v(" "),e._l(e.tabs,(function(t,i){return n("div",{key:"tab-"+i,staticClass:"tabs-holder"},[n("transition",{attrs:{name:"fade"}},[e.getTabTitle(t)===e.activeTabName?n(t,{tag:"component",attrs:{isActive:e.getTabTitle(t)===e.activeTabName}}):e._e()],1)],1)}))],2)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"section-intro"},[t("h2",{staticClass:"h2 section-title"},[this._v("Use cases")])])}],!1,null,null,null);t.default=l.exports}}]);
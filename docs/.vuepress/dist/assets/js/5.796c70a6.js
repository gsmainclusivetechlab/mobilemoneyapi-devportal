(window.webpackJsonp=window.webpackJsonp||[]).push([[5,12,18,25],{314:function(e,t,n){var i=n(0),r=n(3),o=n(70),a=[].slice,s=function(e){return function(t,n){var i=arguments.length>2,r=i?a.call(arguments,2):void 0;return e(i?function(){("function"==typeof t?t:Function(t)).apply(this,r)}:t,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:s(r.setTimeout),setInterval:s(r.setInterval)})},315:function(e,t,n){"use strict";n.r(t);n(314);var i={name:"accordion-item",props:["expanded"],data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var e=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},r=n(24),o=Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"accordion__item",class:{"accordion__item--active":e.isOpened}},[n("div",{staticClass:"accordion__item-wrapper"},[n("div",{staticClass:"accordion__item-haeder",on:{click:e.openClose}},[n("div",{staticClass:"title"},[e._t("heaeder")],2),e._v(" "),n("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),e._v(" "),n("div",{staticClass:"accordion__item-body",style:{height:e.isOpened?e.itemElementHeig:"0px"}},[n("div",{staticClass:"accordion__item-body-content"},[e._t("body")],2)])])])}),[],!1,null,null,null);t.default=o.exports},316:function(e,t,n){"use strict";n.r(t);var i={name:"accordion",data:function(){return{isOpened:!1}}},r=n(24),o=Object(r.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"accordion"},[t("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=o.exports},318:function(e,t,n){"use strict";n.r(t);n(9),n(11),n(13);var i={beforeMount:function(){n.e(36).then(n.t.bind(null,400,7)).then((function(e){e.initialize({startOnLoad:!0,securityLevel:"loose"}),e.init()}))}},r=n(24),o=Object(r.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"mermaid"},[this._t("default")],2)}),[],!1,null,null,null);t.default=o.exports},349:function(e,t,n){"use strict";n.r(t);var i=n(316),r=n(315),o=n(318),a={name:"merchant-payments-case-tab",props:["isActive"],components:{accordion:i.default,accordionItem:r.default,Mermaid:o.default},data:function(){return{tabTitle:"P2P Transfers"}}},s=n(24),c=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":e.isActive}},[n("div",{staticClass:"tab-content"},[n("div",{staticClass:"text-box"},[n("p",[e._v("The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer\n        funds from an account holding individual to another account holding individual or to a non-account\n        holding individual (known as an unregistered customer). The API supports a wide number of financial\n        service providers including mobile money providers, banks, and micro-finance institutions.\n        The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’\n        P2P transfers (accounts held in different FSPs).\n        Bilateral and Switch-based transfers can be supported.\n      ")]),e._v(" "),n("p",[e._v("For further reading, please refer to the following:")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),n("router-link",{attrs:{to:"#"}},[e._v("\n        Start developing\n      ")])],1),e._v(" "),n("h3",{staticClass:"h3"},[e._v("Use case scenarios")]),e._v(" "),n("accordion",[n("accordion-item",{scopedSlots:e._u([{key:"heaeder",fn:function(){return[e._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"P2P Transfer via Switch" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"heaeder",fn:function(){return[e._v("\n          Bilateral P2P Transfer\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.")]),e._v(" "),n("Mermaid",[e._v("\n            sequenceDiagram\n              participant Sending FSP\n              participant Receiving FSP\n              Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP.\n              Receiving FSP--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n              deactivate Receiving FSP\n              Sending FSP->>Receiving FSP: POST /transactions/type/transfer\n              activate Receiving FSP\n              Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP submits a transfer request. "),n("br"),e._v('The Receiving FSP will return the Request State object to indicate that the request is "pending".\n              Receiving FSP--\x3e>Sending FSP: HTTP 202 (Request State Object)\n              deactivate Sending FSP\n              deactivate Receiving FSP\n              Receiving FSP->>Sending FSP: PUT {Callback URL} (Transaction Object)\n              activate Sending FSP\n              activate Receiving FSP\n              Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the transation has been succesfully completed'),n("br"),e._v("by returning the final representation of the transaction. \n              Sending FSP--\x3e>Receiving FSP: HTTP 204\n              deactivate Sending FSP\n              deactivate Receiving FSP\n          ")])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"heaeder",fn:function(){return[e._v("\n          'On-us' P2P Transfer Initiated by a Third Party Provider\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v("\"'On-us' P2P Transfer Initiated by a Third Party Provider\" item content will be here")])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"heaeder",fn:function(){return[e._v("\n          P2P Transfer Failure\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"P2P Transfer Failure" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"heaeder",fn:function(){return[e._v("\n          P2P Transfer Reversal\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"P2P Transfer Reversal" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"heaeder",fn:function(){return[e._v("\n          Obtain an FSP Balance\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Obtain an FSP Balance" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"heaeder",fn:function(){return[e._v("\n          Retrieve Transactions for an FSP\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Retrieve Transactions for an FSP" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"heaeder",fn:function(){return[e._v("\n          P2P Transfer via Switch\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Check for Service Availability" item content will be here')])]},proxy:!0}])}),e._v(" "),n("accordion-item",{scopedSlots:e._u([{key:"heaeder",fn:function(){return[e._v("\n          Retrieve a Missing API Response\n        ")]},proxy:!0},{key:"body",fn:function(){return[n("p",[e._v('"Retrieve a Missing API Response" item content will be here')])]},proxy:!0}])})],1)],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("ul",{staticClass:"dotted-list"},[t("li",[t("b",[this._v("Getting Started.")]),this._v(" Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),this._v(" "),t("li",[t("b",[this._v("API Service Definition.")]),this._v(" Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n        All documentation can be found on the\n        "),t("a",{staticClass:"external",attrs:{href:"https://developer.mobilemoneyapi.io/",target:"_blank"}},[this._v("GSMA Mobile Money API Developer Portal.")])])}],!1,null,null,null);t.default=c.exports}}]);
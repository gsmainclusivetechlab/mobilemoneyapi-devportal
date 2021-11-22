(window.webpackJsonp=window.webpackJsonp||[]).push([[13,60,63,64],{407:function(e,n,t){"use strict";t.r(n);var o={name:"accordion",data:function(){return{isOpened:!1}}},i=t(15),s=Object(i.a)(o,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"accordion"},[n("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);n.default=s.exports},408:function(e,n,t){"use strict";t.r(n);t(123);var o={name:"accordion-item",props:{expanded:{type:Boolean},businessPage:{type:Boolean}},data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null,showElement:!0}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var e=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},i=t(15),s=Object(i.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{directives:[{name:"show",rawName:"v-show",value:!e.showElement||e.businessPage,expression:"!showElement || businessPage"}],staticClass:"accordion__item",class:{"accordion__item--active":e.isOpened}},[t("div",{staticClass:"accordion__item-wrapper"},[t("div",{staticClass:"accordion__item-header",on:{click:e.openClose}},[t("div",{staticClass:"title"},[e._t("header")],2),e._v(" "),t("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),e._v(" "),t("div",{staticClass:"accordion__item-body",style:{height:e.isOpened?e.itemElementHeig:"0px"}},[t("div",{staticClass:"accordion__item-body-content"},[e._t("body")],2)])])])}),[],!1,null,null,null);n.default=s.exports},418:function(e,n,t){"use strict";t.r(n);var o={name:"search-section",props:["title","description"],data:function(){return{filterInput:""}},methods:{handleSearch:function(){this.$emit("on-search",this.filterInput)}}},i=t(15),s=Object(i.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"search-section section--p-gap has-bg"},[t("div",{staticClass:"container container--thin"},[t("div",{staticClass:"section-intro"},[t("h1",{staticClass:"hero-section__title text-center"},[e._t("title")],2),e._v(" "),t("div",{staticClass:"hero-section__description text-center"},[e._t("description")],2)]),e._v(" "),t("div",{staticClass:"search-input-holder"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.filterInput,expression:"filterInput"}],staticClass:"input input--search",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.filterInput},on:{input:[function(n){n.target.composing||(e.filterInput=n.target.value)},e.handleSearch]}})])])])}),[],!1,null,null,null);n.default=s.exports},420:function(e,n,t){"use strict";var o=t(2),i=t(44).every;o({target:"Array",proto:!0,forced:!t(45)("every")},{every:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},549:function(e,n,t){"use strict";t.r(n);var o=t(46),i=(t(88),t(35),t(36),t(218),t(219),t(420),t(418)),s=t(407),r=t(408),a={components:{accordion:s.default,accordionItem:r.default,searchSection:i.default},data:function(){return{filteredDaqData:{},notFoundResults:!1,notFoundResult1s:{container1:!1,container2:!1,container3:!1},searchString:"",containersVisible:{1:!1,2:!1,3:!1}}},mounted:function(){this.applyFilter()},watch:{searchString:function(e){this.applyFilter(e),this.hiddenTitle()}},methods:{applyFilter:function(){var e=this,n=this.$refs["accordion-container-1"].$children,t=this.$refs["accordion-container-2"].$children,i=this.$refs["accordion-container-3"].$children,s=[].concat(Object(o.a)(n),Object(o.a)(t),Object(o.a)(i));s.forEach((function(n){n.showElement=!n.$el.innerText.toLowerCase().includes(e.searchString.toLowerCase())})),this.notFoundResults=!(null==s||!s.every((function(e){return e.showElement})))},hiddenTitle:function(){var e,n,t,o,i,s;this.containersVisible[1]=null===(e=this.$refs["accordion-container-1"])||void 0===e||null===(n=e.$children)||void 0===n?void 0:n.every((function(e){return e.showElement})),this.containersVisible[2]=null===(t=this.$refs["accordion-container-2"])||void 0===t||null===(o=t.$children)||void 0===o?void 0:o.every((function(e){return e.showElement})),this.containersVisible[3]=null===(i=this.$refs["accordion-container-3"])||void 0===i||null===(s=i.$children)||void 0===s?void 0:s.every((function(e){return e.showElement}))}}},c=t(15),d=Object(c.a)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[[t("div",{staticClass:"faq"},[t("search-section",{on:{"on-search":function(n){e.searchString=n}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n        FAQ\n      ")]},proxy:!0},{key:"description",fn:function(){return[e._v('\n        Browse our frequently asked questions site from common\n        questions as well as "how to" instructions.\n      ')]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"search-results-section"},[t("div",{staticClass:"container container--narrow"},[t("h2",{directives:[{name:"show",rawName:"v-show",value:e.notFoundResults,expression:"notFoundResults"}],staticClass:"no-results text-center"},[e._v("No results found.")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.notFoundResults,expression:"!notFoundResults"}]},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.containersVisible[1],expression:"!containersVisible[1]"}],staticClass:"faq-results__item"},[t("h2",{attrs:{id:"general"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[e._v("#")]),e._v(" General")]),e._v(" "),t("accordion",{ref:"accordion-container-1"},[t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  What is the Mobile Money API?\n                ")]},proxy:!0},{key:"body",fn:function(){return[e._v("\n                  The GSMA Mobile Money API is an initiative developed through collaboration between\n                  the mobile money industry and the GSMA, which provides a harmonised API\n                  Specification for all the common mobile money use cases which is both easy to use\n                  and secure.\n                ")]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Who created and maintains the Mobile Money API?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    The API is a GSMA-led industry initiative, for and by the Mobile Money industry,\n                    mobile money operators and their technology platform providers. It is maintained\n                    by the GSMA working with the industry as it continues to evolve and grow.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Who can use the Mobile Money API?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    The API is designed to be used by any party in the Mobile Money industry. This\n                    includes Mobile Money Operators, other Payment Service Providers, Retail and\n                    eCommerce Merchants, Application Developers, companies receiving Bill Payments,\n                    and others.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Which use cases does the Mobile Money API support?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    The GSMA Mobile Money API is an initiative developed through collaboration\n                    between the mobile money industry and the GSMA, which provides a harmonised API\n                    Specification for all the common mobile money use cases which is both easy to\n                    use and secure.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  What are the advantages of the Mobile Money API?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    Adoption of the Mobile Money API leads to key benefits including growth of your\n                    mobile money ecosystem from faster partner on-boarding as partners will only\n                    have to integrate to one common API. Adopting a harmonised API also leads to\n                    easier maintenance and evolution of your common Mobile Money operations by\n                    providing support for advanced features such as multi-wallets and batch\n                    payments.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Is the GSMA Mobile Money API free to use?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    Yes, the GSMA represents the interests of mobile operators worldwide, uniting\n                    more than 750 operators with almost 400 companies in the broader mobile\n                    ecosystem and the assets we maintain are there to support our members and our\n                    industry. We encourage use of the harmonised API and place no restrictions on\n                    its use.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Are there any alternative API standards?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    There is no other harmonised API that supports the range of Mobile Money use\n                    cases provided by the GSMA Mobile Money API.\n                  ")])]},proxy:!0}])})],1)],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.containersVisible[2],expression:"!containersVisible[2]"}],staticClass:"faq-results__item"},[t("h2",{attrs:{id:"technical"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#technical"}},[e._v("#")]),e._v(" Technical")]),e._v(" "),t("accordion",{ref:"accordion-container-2"},[t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Which API Version should we implement?\n                ")]},proxy:!0},{key:"body",fn:function(){return[e._v("\n                  The current version of the Mobile Money API is v1.1 and this version should be\n                  implemented by all new adopters. We encourage existing adopters who have\n                  implemented the previous version of the API to migrate to the latest version which\n                  is backwards compatible.\n                ")]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  How did you decide on which APIs to include in the current Specification?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    The current set of APIs have been selected to cover the most common mobile money\n                    use cases that are used in the industry today.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Can I implement only some of the APIs and still conform to the API Specification?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    Yes, you can implement only the APIs which are relevant for your business.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Is the Mobile Money API easy to implement?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    Yes, the Mobile Money API is simple to implement as the API is based upon\n                    REST/JSON which is used extensively by the developer community, and most of the\n                    APIs are simply defined and only require a small number of mandatory fields.\n                    Developers can additionally use Swagger Codegen to rapidly generate Mobile Money\n                    API stubs for development and testing, and the GSMA can also support you in\n                    implementing the API.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Why are only REST and JSON supported over other API designs and data formats?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    The design decision was based on REST and JSON being the best options for an API\n                    in terms of simplicity, ease of development, and because they are the most\n                    commonly used and understood architecture and data format today for all kinds of\n                    APIs.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Why was OAS chosen as the API definition framework over other API frameworks?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    OAS was chosen as it provides the best modelling flexibility and includes a\n                    comprehensive toolset to facilitate API implementation including client and\n                    server side SDKs.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Does the API support synchronous and asynchronous patterns?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    Yes, the API supports synchronous and asynchronous patterns for resource\n                    creation and update requests, and synchronous patterns only for read requests,\n                    which provides support for the most commonly used request paradigms.\n                  ")])]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Can you add support for a Mobile Money use case which is not included in the\n                  Specification?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    Please contact us to let us know if you use APIs which are not currently\n                    included in the API Specification. We have a living roadmap and will continue to\n                    update the Spec over time.\n                  ")])]},proxy:!0}])})],1)],1),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.containersVisible[3],expression:"!containersVisible[3]"}],staticClass:"faq-results__item"},[t("h2",{attrs:{id:"security"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),t("accordion",{ref:"accordion-container-3"},[t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Are there security recommendations to consider when implementing the Mobile Money\n                  API?\n                ")]},proxy:!0},{key:"body",fn:function(){return[e._v("\n                  Yes, we provide a comprehensive set of security guidelines, please see our latest\n                  Security Design and Implementation guidelines in the Developer Portal here.\n                ")]},proxy:!0}])}),e._v(" "),t("accordion-item",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                  Do I need to implement an API Gateway to host the Mobile Money API?\n                ")]},proxy:!0},{key:"body",fn:function(){return[t("div",[e._v("\n                    No. However we recommend you use an API Gateway as this enables efficient\n                    developer on-boarding processes, making the implementation process simpler and\n                    allowing third parties to more rapidly exploit the benefits of the API. Off the\n                    shelf API Gateways do support the Mobile Money API security guidelines,\n                    including OAuth2.\n                  ")])]},proxy:!0}])})],1)],1)])])])],1)]],2)}),[],!1,null,null,null);n.default=d.exports}}]);
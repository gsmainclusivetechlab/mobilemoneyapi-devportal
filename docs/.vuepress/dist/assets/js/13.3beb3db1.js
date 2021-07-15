(window.webpackJsonp=window.webpackJsonp||[]).push([[13,34,58,61],{318:function(e,t,i){var n=i(2),o=i(4),s=i(69),a=[].slice,r=function(e){return function(t,i){var n=arguments.length>2,o=n?a.call(arguments,2):void 0;return e(n?function(){("function"==typeof t?t:Function(t)).apply(this,o)}:t,i)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:r(o.setTimeout),setInterval:r(o.setInterval)})},319:function(e,t,i){"use strict";i.r(t);var n={name:"accordion",data:function(){return{isOpened:!1}}},o=i(25),s=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"accordion"},[t("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=s.exports},320:function(e,t,i){"use strict";i.r(t);i(318);var n={name:"accordion-item",props:["expanded"],data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var e=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},o=i(25),s=Object(o.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"accordion__item",class:{"accordion__item--active":e.isOpened}},[i("div",{staticClass:"accordion__item-wrapper"},[i("div",{staticClass:"accordion__item-header",on:{click:e.openClose}},[i("div",{staticClass:"title"},[e._t("header")],2),e._v(" "),i("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),e._v(" "),i("div",{staticClass:"accordion__item-body",style:{height:e.isOpened?e.itemElementHeig:"0px"}},[i("div",{staticClass:"accordion__item-body-content"},[e._t("body")],2)])])])}),[],!1,null,null,null);t.default=s.exports},332:function(e,t,i){"use strict";i.r(t);var n={name:"search-section",props:["title","description"],data:function(){return{filterInput:""}},methods:{handleSearch:function(){this.$emit("on-search",this.filterInput)}}},o=i(25),s=Object(o.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"search-section section--p-gap has-bg"},[i("div",{staticClass:"container container--thin"},[i("div",{staticClass:"section-intro"},[i("h1",{staticClass:"hero-section__title text-center"},[e._v(e._s(e.title))]),e._v(" "),i("div",{staticClass:"hero-section__description text-center"},[e._v(e._s(e.description))])]),e._v(" "),i("div",{staticClass:"search-input-holder"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.filterInput,expression:"filterInput"}],staticClass:"input input--search",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.filterInput},on:{input:[function(t){t.target.composing||(e.filterInput=t.target.value)},e.handleSearch]}})])])])}),[],!1,null,null,null);t.default=s.exports},436:function(e,t,i){"use strict";i.r(t);i(99),i(100),i(174),i(175);var n=i(319),o=i(320),s=i(332),a=[{title:"General",items:[{title:"What is the Mobile Money API?",text:"The GSMA Mobile Money API is an initiative developed through collaboration between the mobile money industry and the GSMA, which provides a harmonised API Specification for all the common mobile money use cases which is both easy to use and secure."},{title:"Who created and maintains the Mobile Money API?",text:"The API is a GSMA-led industry initiative, for and by the Mobile Money industry, mobile money operators and their technology platform providers. It is maintained by the GSMA working with the industry as it continues to evolve and grow."},{title:"Who can use the Mobile Money API?",text:"The API is designed to be used by any party in the Mobile Money industry. This includes Mobile Money Operators, other Payment Service Providers, Retail and eCommerce Merchants, Application Developers, companies receiving Bill Payments, and others."},{title:"Which use cases does the Mobile Money API support?",text:"The Mobile Money API supports many use cases, including Domestic and International Remittance, Merchant Payments, Bill Payments, Authorisation to Debit and Direct Debits, Linking Mobile Money accounts to other financial institution accounts, and Ability to view Account and Account Holder Information, and others."},{title:"What are the advantages of the Mobile Money API?",text:"Adoption of the Mobile Money API leads to key benefits including growth of your mobile money ecosystem from faster partner on-boarding as partners will only have to integrate to one common API. Adopting a harmonised API also leads to easier maintenance and evolution of your common Mobile Money operations by providing support for advanced features such as multi-wallets and batch payments."},{title:"Is the GSMA Mobile Money API free to use?",text:"Yes, the GSMA represents the interests of mobile operators worldwide, uniting more than 750 operators with almost 400 companies in the broader mobile ecosystem and the assets we maintain are there to support our members and our industry. We encourage use of the harmonised API and place no restrictions on its use."},{title:"Are there any alternative API standards?",text:"There is no other harmonised API that supports the range of Mobile Money use cases provided by the GSMA Mobile Money API."}]},{title:"Technical",items:[{title:"Which API Version should we implement?",text:"The current version of the Mobile Money API is v1.1 and this version should be implemented by all new adopters.  We encourage existing adopters who have implemented the previous version of the API to migrate to the latest version which is backwards compatible."},{title:"How did you decide on which APIs to include in the current Specification?",text:"The current set of APIs have been selected to cover the most common mobile money use cases that are used in the industry today."},{title:"Can I implement only some of the APIs and still conform to the API Specification?",text:"Yes, you can implement only the APIs which are relevant for your business."},{title:"Is the Mobile Money API easy to implement?",text:"Yes, the Mobile Money API is simple to implement as the API is based upon REST/JSON which is used extensively by the developer community, and most of the APIs are simply defined and only require a small number of mandatory fields. Developers can additionally use Swagger Codegen to rapidly generate Mobile Money API stubs for development and testing, and the GSMA can also support you in implementing the API."},{title:"Why are only REST and JSON supported over other API designs and data formats?",text:"The design decision was based on REST and JSON being the best options for an API in terms of simplicity, ease of development, and because they are the most commonly used and understood architecture and data format today for all kinds of APIs."},{title:"Why was OAS chosen as the API definition framework over other API frameworks?",text:"OAS was chosen as it provides the best modelling flexibility and includes a comprehensive toolset to facilitate API implementation including client and server side SDKs."},{title:"Does the API support synchronous and asynchronous patterns?",text:"Yes, the API supports synchronous and asynchronous patterns for resource creation and update requests, and synchronous patterns only for read requests, which provides support for the most commonly used request paradigms."},{title:"Can you add support for a Mobile Money use case which is not included in the Specification?",text:"Please contact us to let us know if you use APIs which are not currently included in the API Specification. We have a living roadmap and will continue to update the Spec over time."}]},{title:"Security",items:[{title:"Are there security recommendations to consider when implementing the Mobile Money API?",text:"Yes, we provide a comprehensive set of security guidelines, please see our latest Security Design and Implementation guidelines in the Developer Portal here."},{title:"Do I need to implement an API Gateway to host the Mobile Money API?",text:"No. However we recommend you use an API Gateway as this enables efficient developer on-boarding processes, making the implementation process simpler and allowing third parties to more rapidly exploit the benefits of the API. Off the shelf API Gateways do support the Mobile Money API security guidelines, including OAuth2."}]}],r={name:"faq-page",components:{accordion:n.default,accordionItem:o.default,searchSection:s.default},props:["title","description"],data:function(){return{faqDataSource:null,filteredDaqData:{}}},created:function(){this.faqDataSource=a,this.applyFilter("")},methods:{applyFilter:function(e){var t=this;this.filteredDaqData={},this.faqDataSource.forEach((function(i){i.items.forEach((function(n){(n.title.toLowerCase().includes(e.toLowerCase())||n.text.toLowerCase().includes(e.toLowerCase()))&&(t.filteredDaqData[i.title]||(t.filteredDaqData[i.title]=[]),t.filteredDaqData[i.title].push(n))}))}))}}},l=i(25),c=Object(l.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"faq"},[i("search-section",{attrs:{title:e.title,description:e.description},on:{"on-search":e.applyFilter}}),e._v(" "),i("div",{staticClass:"search-results-section"},[i("div",{staticClass:"container container--narrow"},[Object.keys(e.filteredDaqData).length?e._l(e.filteredDaqData,(function(t,n){return i("div",{key:"category-"+n,staticClass:"faq-results__item"},[i("h2",{staticClass:"h2 faq-results__item-title"},[e._v(e._s(n))]),e._v(" "),i("accordion",e._l(t,(function(t,n){return i("accordion-item",{key:"category-item-"+n,scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                "+e._s(t.title)+"\n              ")]},proxy:!0},{key:"body",fn:function(){return[i("div",{domProps:{innerHTML:e._s(t.text)}})]},proxy:!0}],null,!0)})})),1)],1)})):i("h2",{staticClass:"no-results text-center"},[e._v("No results found.")])],2)])],1)}),[],!1,null,null,null);t.default=c.exports}}]);
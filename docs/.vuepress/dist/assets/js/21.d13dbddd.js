(window.webpackJsonp=window.webpackJsonp||[]).push([[21,62,63,69],{433:function(t,e,n){"use strict";n.r(e);var s={name:"search-section",props:["title","description"],data:function(){return{filterInput:""}},methods:{handleSearch:function(){this.$emit("on-search",this.filterInput)}}},r=n(15),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-section section--p-gap has-bg"},[n("div",{staticClass:"container container--thin"},[n("div",{staticClass:"section-intro"},[n("h1",{staticClass:"hero-section__title text-center"},[t._t("title")],2),t._v(" "),n("div",{staticClass:"hero-section__description text-center"},[t._t("description")],2)]),t._v(" "),n("div",{staticClass:"search-input-holder"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filterInput,expression:"filterInput"}],staticClass:"input input--search",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.filterInput},on:{input:[function(e){e.target.composing||(t.filterInput=e.target.value)},t.handleSearch]}})])])])}),[],!1,null,null,null);e.default=i.exports},467:function(t,e,n){"use strict";n.r(e);var s={name:"glossary-item",data:function(){return{showElement:!0}}},r=n(15),i=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.showElement,expression:"showElement"}],staticClass:"glossary-results__item"},[this._t("title"),this._v(" "),e("div",{staticClass:"glossary-results__item-text"},[this._t("description")],2)],2)}),[],!1,null,null,null);e.default=i.exports},468:function(t,e,n){"use strict";n.r(e);var s={name:"glossary-container"},r=n(15),i=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"glossary-results"},[this._t("default")],2)}),[],!1,null,"0001cbd4",null);e.default=i.exports},537:function(t,e,n){"use strict";n.r(e);n(35),n(36),n(216),n(217),n(233),n(219);var s=n(433),r=n(467),i=n(468),a=["All","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],o={name:"glossary-page",components:{GlossaryContainer:i.default,GlossaryItem:r.default,searchSection:s.default},props:["title","description"],data:function(){return{alphabetFilterLetters:a,activeLetter:"All",searchebleValue:"",visibleResults:!0}},mounted:function(){this.applyFilters()},methods:{applySearchFilter:function(){var t,e,n=this;null===(t=this.$refs["glossary-co"])||void 0===t||null===(e=t.$children)||void 0===e||e.forEach((function(t){t.showElement&&(t.showElement=t.$el.innerText.toLowerCase().substring(2).includes(n.searchebleValue.toLowerCase()))}))},applyLetterFilter:function(){var t,e,n=this;null===(t=this.$refs["glossary-co"])||void 0===t||null===(e=t.$children)||void 0===e||e.forEach((function(t){"All"!==n.activeLetter?t.showElement=t.$el.innerText.toLowerCase().substring(2).startsWith(n.activeLetter.toLowerCase()):t.showElement=!0}))},setActiveLetter:function(t){this.activeLetter=t},setSearchebleValue:function(t){this.searchebleValue=t},setVisibleResults:function(){var t,e;this.visibleResults=null===(t=this.$refs["glossary-co"])||void 0===t||null===(e=t.$children)||void 0===e?void 0:e.some((function(t){return t.showElement}))},applyFilters:function(){this.applyLetterFilter(),this.applySearchFilter(),this.setVisibleResults()}},watch:{activeLetter:function(){this.applyFilters()},searchebleValue:function(){this.applyFilters()}}},c=n(15),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[[n("div",{staticClass:"glossary"},[n("search-section",{on:{"on-search":t.setSearchebleValue},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        Glossary\n      ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n        Browse our glossary to find specific words.\n      ")]},proxy:!0}])}),t._v(" "),n("div",{staticClass:"search-results-section"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"alphabet-box"},[n("ul",{staticClass:"alphabet__list"},t._l(t.alphabetFilterLetters,(function(e){return n("li",{key:e+"-filter-key",staticClass:"alphabet__list-item"},[n("button",{staticClass:"alphabet-filter__btn",class:{active:e===t.activeLetter},attrs:{type:"button"},on:{click:function(n){return t.setActiveLetter(e)}}},[t._v("\n                "+t._s(e)+"\n              ")])])})),0),t._v(" "),n("select",{staticClass:"alphabet__select",on:{change:function(e){return t.setActiveLetter(e.target.value)}}},t._l(t.alphabetFilterLetters,(function(e){return n("option",{key:e+"-option-filter-key",domProps:{selected:e===t.activeLetter,value:e}},[t._v(t._s(e)+"\n            ")])})),0)]),t._v(" "),n("h2",{directives:[{name:"show",rawName:"v-show",value:!t.visibleResults,expression:"!visibleResults"}],staticClass:"no-results text-center"},[t._v("No results found.")]),t._v(" "),n("glossary-container",{directives:[{name:"show",rawName:"v-show",value:t.visibleResults,expression:"visibleResults"}],ref:"glossary-co"},[n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"atm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#atm"}},[t._v("#")]),t._v(" ATM")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Automated Teller Machine. Enables customer to be able to\nperform financial transactions without the need for a human cashier. For mobile money,\nthe ATM machine can be considered as an automated agent, allowing withdrawals and some\ncase deposits from and to the customer’s wallet.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"agent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#agent"}},[t._v("#")]),t._v(" Agent")])]},proxy:!0},{key:"description",fn:function(){return[t._v("A person or business that is contracted to facilitate\ntransactions for users. The most important of these are cash-in and cash-out (i.e.\nloading value into the mobile money system, and then converting it back to cash\nagain); in many instances, agents register new customers too.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"api-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api-service"}},[t._v("#")]),t._v(" API Service")])]},proxy:!0},{key:"description",fn:function(){return[t._v("An API Service comprises of a URI which when combined with\na HTTP Operation (GET, PATCH, POST) enables a specified operation to be conducted on a\nspecific resource or set of resources.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"application-programming-interfaces-apis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-programming-interfaces-apis"}},[t._v("#")]),t._v(" Application Programming Interfaces (APIs)")])]},proxy:!0},{key:"description",fn:function(){return[t._v("In computer programming, an application programming\ninterface (API) is a set of routines, protocols, and tools for building software\napplications. An API expresses a software component in terms of its operations,\ninputs, outputs, and underlying types.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"authentication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" Authentication")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Confirms the identity of the entity that is requesting the\nservice by verifying supplied credential(s). In this document, the requesting entity\nis typically referred to as the initiator or sender.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"authorisation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authorisation"}},[t._v("#")]),t._v(" Authorisation")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Authorisation provides an authenticated identity with\naccess to the system resources/services to which they are entitled. In the context of\nthis document, the requesting entity (initiator) is provided with a defined set of\nservices and functions that they can perform over API.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"business"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#business"}},[t._v("#")]),t._v(" Business")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Describes an entity such as a public limited or limited\ncompany that uses mobile money as a service. This includes taking bill payments,\nmaking bill payments and disbursing salaries.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[t._v("#")]),t._v(" Client")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Describes the calling system/party that initiates and\ninteracts with the API service. The Client may or may not be the debit or credit\nparty.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"guid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#guid"}},[t._v("#")]),t._v(" GUID")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Globally Unique Identifier. GUIDs are usually stored as\n128-bit values and are used for as the datatype for correlation IDs in the mobile\nmoney API.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"http"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Acronym for Hyper Text Transfer Protocol. HTTP is the\nfoundation of data communication for the World Wide Web. HTTP is the protocol to\nexchange or transfer hypertext.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"iso"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iso"}},[t._v("#")]),t._v(" ISO")])]},proxy:!0},{key:"description",fn:function(){return[t._v("International Organisation for Standardisation. A number of\nISO standards are used with the mobile money API.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"itu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#itu"}},[t._v("#")]),t._v(" ITU")])]},proxy:!0},{key:"description",fn:function(){return[t._v("International Telecommunications Agency. ITU MSISDN format\nstandards have been adopted for the mobile money API.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[t._v("#")]),t._v(" JSON")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Acronym for JavaScript Object Notation. Used to transmit\ndata objects containing attribute/value pairs. One of two protocols (the other being\nXML) considered as the basis for a Data Exchange format for mobile money API\nharmonisation.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"merchant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#merchant"}},[t._v("#")]),t._v(" Merchant")])]},proxy:!0},{key:"description",fn:function(){return[t._v("A retail merchant that accepts e-Money from mobile money\ncustomers in exchange for goods and/or services.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"msisdn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#msisdn"}},[t._v("#")]),t._v(" MSISDN")])]},proxy:!0},{key:"description",fn:function(){return[t._v("A number uniquely identifying a subscription in a GSM or a\nUMTS mobile network. Analogous with a mobile phone number.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[t._v("#")]),t._v(" Object")])]},proxy:!0},{key:"description",fn:function(){return[t._v("An object holds a set of properties. Objects can be\ncombined or used in isolation to provide a representation of a resource.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"organisation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#organisation"}},[t._v("#")]),t._v(" Organisation")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Describes a non-business entity such as a charity or\ngovernment department that uses mobile money as a service. This includes taking bill\npayments, making bill payments and disbursing salaries.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"provider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[t._v("#")]),t._v(" Provider")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Hosts the Mobile Money API services (or subset of).\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"resource"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[t._v("#")]),t._v(" Resource")])]},proxy:!0},{key:"description",fn:function(){return[t._v("A resource is the target for an API operation as identified\nin the API request. Resources are conceptually different from the representations that\nare returned to the client.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"rest-based-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rest-based-api"}},[t._v("#")]),t._v(" REST-based API")])]},proxy:!0},{key:"description",fn:function(){return[t._v("In computing, Representational State Transfer (REST) is the\nsoftware architectural style adopted by many organisations that offer APIs. REST\nstipulates that interacting systems exhibit the following characteristics:\nClient-Server. Responsibilities between clients and servers are explicitly defined.\nStateless. No context is stored between client and server during communication.\nCacheable. As on the World Wide Web, clients and intermediaries can cache responses\nLayered System. A client cannot ordinarily tell whether it is connected directly to\nthe end server, or to an intermediary along the way. Uniform Interface. A uniform\ninterface simplifies and decouples the architecture, which enables each part to evolve\nindependently.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"uri"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[t._v("#")]),t._v(" URI")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Acronym for Uniform Resource Identifier. The URI is a\nstring of characters used to identify a resource (such as an account, for example). In\nAPIs a URI is represented in the form of a URL which is generally used to identify the\nservice to invoke.\n")]},proxy:!0}])}),t._v(" "),n("glossary-item",{scopedSlots:t._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wallet"}},[t._v("#")]),t._v(" Wallet")])]},proxy:!0},{key:"description",fn:function(){return[t._v("Term used in this document to describe the store of value\nthat identities (customers, agents, merchants and businesses) use to store e-Money. In\ngeneral, the document uses the term Account in place of Wallet.\n")]},proxy:!0}])})],1)],1)])],1)]],2)}),[],!1,null,null,null);e.default=l.exports}}]);
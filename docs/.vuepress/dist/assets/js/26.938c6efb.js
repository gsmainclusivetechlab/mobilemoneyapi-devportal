(window.webpackJsonp=window.webpackJsonp||[]).push([[26,60,61,63],{410:function(e,t,n){"use strict";n.r(t);var s={name:"search-section",props:["title","description"],data:function(){return{filterInput:""}},methods:{handleSearch:function(){this.$emit("on-search",this.filterInput)}}},r=n(24),i=Object(r.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-section section--p-gap has-bg"},[n("div",{staticClass:"container container--thin"},[n("div",{staticClass:"section-intro"},[n("h1",{staticClass:"hero-section__title text-center"},[e._t("title")],2),e._v(" "),n("div",{staticClass:"hero-section__description text-center"},[e._t("description")],2)]),e._v(" "),n("div",{staticClass:"search-input-holder"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.filterInput,expression:"filterInput"}],staticClass:"input input--search",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.filterInput},on:{input:[function(t){t.target.composing||(e.filterInput=t.target.value)},e.handleSearch]}})])])])}),[],!1,null,null,null);t.default=i.exports},437:function(e,t,n){"use strict";n.r(t);var s={name:"glossary-item",data:function(){return{showElement:!0}}},r=n(24),i=Object(r.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.showElement,expression:"showElement"}],staticClass:"glossary-results__item"},[this._t("title"),this._v(" "),t("div",{staticClass:"glossary-results__item-text"},[this._t("description")],2)],2)}),[],!1,null,null,null);t.default=i.exports},438:function(e,t,n){"use strict";n.r(t);var s={name:"glossary-container"},r=n(24),i=Object(r.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"glossary-results"},[this._t("default")],2)}),[],!1,null,null,null);t.default=i.exports},504:function(e,t,n){"use strict";n.r(t);n(44),n(45),n(131),n(132),n(230),n(219);var s=n(410),r=n(437),i=n(438),a=["All","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],o={name:"glossary-page",components:{GlossaryContainer:i.default,GlossaryItem:r.default,searchSection:s.default},props:["title","description"],data:function(){return{alphabetFilterLetters:a,activeLetter:"All",searchebleValue:"",visibleResults:!0}},mounted:function(){this.applyFilters()},methods:{applySearchFilter:function(){var e,t,n=this;null===(e=this.$refs["glossary-co"])||void 0===e||null===(t=e.$children)||void 0===t||t.forEach((function(e){e.showElement&&(e.showElement=e.$el.innerText.toLowerCase().substring(2).includes(n.searchebleValue.toLowerCase()))}))},applyLetterFilter:function(){var e,t,n=this;null===(e=this.$refs["glossary-co"])||void 0===e||null===(t=e.$children)||void 0===t||t.forEach((function(e){"All"!==n.activeLetter?e.showElement=e.$el.innerText.toLowerCase().substring(2).startsWith(n.activeLetter.toLowerCase()):e.showElement=!0}))},setActiveLetter:function(e){this.activeLetter=e},setSearchebleValue:function(e){this.searchebleValue=e},setVisibleResults:function(){var e,t;this.visibleResults=null===(e=this.$refs["glossary-co"])||void 0===e||null===(t=e.$children)||void 0===t?void 0:t.some((function(e){return e.showElement}))},applyFilters:function(){this.applyLetterFilter(),this.applySearchFilter(),this.setVisibleResults()}},watch:{activeLetter:function(){this.applyFilters()},searchebleValue:function(){this.applyFilters()}}},c=n(24),l=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[[n("div",{staticClass:"glossary"},[n("search-section",{on:{"on-search":e.setSearchebleValue},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n        Glossary\n      ")]},proxy:!0},{key:"description",fn:function(){return[e._v("\n        Browse our glossary to find specific words.\n      ")]},proxy:!0}])}),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('<div class="search-results-section">\n  <div class="container container--narrow">\n    <div class="alphabet-box">\n      <ul class="alphabet__list">\n        <li class="alphabet__list-item" v-for="letter in alphabetFilterLetters":key="`${letter}-filter-key`">\n          <button type="button"\n                  class="alphabet-filter__btn"\n                  :class="{\'active\': letter === activeLetter}"\n                  @click="setActiveLetter(letter)"\n          >\n            '+e._s(e.letter)+'\n          </button>\n        </li>\n      </ul>\n      <select class="alphabet__select" @change="setActiveLetter($event.target.value)">\n        <option :selected="letter === activeLetter" v-for="letter in alphabetFilterLetters"\n                :value="letter" :key="`${letter}-option-filter-key`">'+e._s(e.letter)+'\n        </option>\n      </select>\n    </div>\n    <h2 v-show="!visibleResults" class="no-results text-center">No results found.</h2>\n    <glossary-container ref="glossary-co" v-show="visibleResults">\n')])])]),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"atm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#atm"}},[e._v("#")]),e._v(" ATM")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Automated Teller Machine. Enables customer to be able to\nperform financial transactions without the need for a human cashier. For mobile money,\nthe ATM machine can be considered as an automated agent, allowing withdrawals and some\ncase deposits from and to the customer’s wallet.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"agent"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#agent"}},[e._v("#")]),e._v(" Agent")])]},proxy:!0},{key:"description",fn:function(){return[e._v("A person or business that is contracted to facilitate\ntransactions for users. The most important of these are cash-in and cash-out (i.e.\nloading value into the mobile money system, and then converting it back to cash\nagain); in many instances, agents register new customers too.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"api-service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api-service"}},[e._v("#")]),e._v(" API Service")])]},proxy:!0},{key:"description",fn:function(){return[e._v("An API Service comprises of a URI which when combined with\na HTTP Operation (GET, PATCH, POST) enables a specified operation to be conducted on a\nspecific resource or set of resources.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"application-programming-interfaces-apis"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-programming-interfaces-apis"}},[e._v("#")]),e._v(" Application Programming Interfaces (APIs)")])]},proxy:!0},{key:"description",fn:function(){return[e._v("In computer programming, an application programming\ninterface (API) is a set of routines, protocols, and tools for building software\napplications. An API expresses a software component in terms of its operations,\ninputs, outputs, and underlying types.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"authentication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Confirms the identity of the entity that is requesting the\nservice by verifying supplied credential(s). In this document, the requesting entity\nis typically referred to as the initiator or sender.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"authorisation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#authorisation"}},[e._v("#")]),e._v(" Authorisation")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Authorisation provides an authenticated identity with\naccess to the system resources/services to which they are entitled. In the context of\nthis document, the requesting entity (initiator) is provided with a defined set of\nservices and functions that they can perform over API.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"business"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#business"}},[e._v("#")]),e._v(" Business")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Describes an entity such as a public limited or limited\ncompany that uses mobile money as a service. This includes taking bill payments,\nmaking bill payments and disbursing salaries.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"client"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#client"}},[e._v("#")]),e._v(" Client")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Describes the calling system/party that initiates and\ninteracts with the API service. The Client may or may not be the debit or credit\nparty.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"guid"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#guid"}},[e._v("#")]),e._v(" GUID")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Globally Unique Identifier. GUIDs are usually stored as\n128-bit values and are used for as the datatype for correlation IDs in the mobile\nmoney API.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"http"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[e._v("#")]),e._v(" HTTP")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Acronym for Hyper Text Transfer Protocol. HTTP is the\nfoundation of data communication for the World Wide Web. HTTP is the protocol to\nexchange or transfer hypertext.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"iso"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iso"}},[e._v("#")]),e._v(" ISO")])]},proxy:!0},{key:"description",fn:function(){return[e._v("International Organisation for Standardisation. A number of\nISO standards are used with the mobile money API.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"itu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#itu"}},[e._v("#")]),e._v(" ITU")])]},proxy:!0},{key:"description",fn:function(){return[e._v("International Telecommunications Agency. ITU MSISDN format\nstandards have been adopted for the mobile money API.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"json"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#json"}},[e._v("#")]),e._v(" JSON")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Acronym for JavaScript Object Notation. Used to transmit\ndata objects containing attribute/value pairs. One of two protocols (the other being\nXML) considered as the basis for a Data Exchange format for mobile money API\nharmonisation.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"merchant"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#merchant"}},[e._v("#")]),e._v(" Merchant")])]},proxy:!0},{key:"description",fn:function(){return[e._v("A retail merchant that accepts e-Money from mobile money\ncustomers in exchange for goods and/or services.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"msisdn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#msisdn"}},[e._v("#")]),e._v(" MSISDN")])]},proxy:!0},{key:"description",fn:function(){return[e._v("A number uniquely identifying a subscription in a GSM or a\nUMTS mobile network. Analogous with a mobile phone number.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"object"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[e._v("#")]),e._v(" Object")])]},proxy:!0},{key:"description",fn:function(){return[e._v("An object holds a set of properties. Objects can be\ncombined or used in isolation to provide a representation of a resource.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"organisation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#organisation"}},[e._v("#")]),e._v(" Organisation")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Describes a non-business entity such as a charity or\ngovernment department that uses mobile money as a service. This includes taking bill\npayments, making bill payments and disbursing salaries.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"provider"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#provider"}},[e._v("#")]),e._v(" Provider")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Hosts the Mobile Money API services (or subset of).\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"resource"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[e._v("#")]),e._v(" Resource")])]},proxy:!0},{key:"description",fn:function(){return[e._v("A resource is the target for an API operation as identified\nin the API request. Resources are conceptually different from the representations that\nare returned to the client.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"rest-based-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rest-based-api"}},[e._v("#")]),e._v(" REST-based API")])]},proxy:!0},{key:"description",fn:function(){return[e._v("In computing, Representational State Transfer (REST) is the\nsoftware architectural style adopted by many organisations that offer APIs. REST\nstipulates that interacting systems exhibit the following characteristics:\nClient-Server. Responsibilities between clients and servers are explicitly defined.\nStateless. No context is stored between client and server during communication.\nCacheable. As on the World Wide Web, clients and intermediaries can cache responses\nLayered System. A client cannot ordinarily tell whether it is connected directly to\nthe end server, or to an intermediary along the way. Uniform Interface. A uniform\ninterface simplifies and decouples the architecture, which enables each part to evolve\nindependently.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"uri"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uri"}},[e._v("#")]),e._v(" URI")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Acronym for Uniform Resource Identifier. The URI is a\nstring of characters used to identify a resource (such as an account, for example). In\nAPIs a URI is represented in the form of a URL which is generally used to identify the\nservice to invoke.\n")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[n("h5",{attrs:{id:"wallet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wallet"}},[e._v("#")]),e._v(" Wallet")])]},proxy:!0},{key:"description",fn:function(){return[e._v("Term used in this document to describe the store of value\nthat identities (customers, agents, merchants and businesses) use to store e-Money. In\ngeneral, the document uses the term Account in place of Wallet.\n")]},proxy:!0}])}),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("  </div>\n</div>\n")])])])],1)]],2)}),[],!1,null,null,null);t.default=l.exports}}]);
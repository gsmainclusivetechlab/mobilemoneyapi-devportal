(window.webpackJsonp=window.webpackJsonp||[]).push([[19,59,60,66],{348:function(e,t,n){"use strict";n.r(t);var s={name:"search-section",props:["title","description"],data:function(){return{filterInput:""}},methods:{handleSearch:function(){this.$emit("on-search",this.filterInput)}}},i=n(11),r=Object(i.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-section section--p-gap has-bg"},[n("div",{staticClass:"container container--thin"},[n("div",{staticClass:"section-intro"},[n("h1",{staticClass:"hero-section__title text-center"},[e._t("title")],2),e._v(" "),n("div",{staticClass:"hero-section__description text-center"},[e._t("description")],2)]),e._v(" "),n("div",{staticClass:"search-input-holder"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.filterInput,expression:"filterInput"}],staticClass:"input input--search",attrs:{type:"text",placeholder:"Search"},domProps:{value:e.filterInput},on:{input:[function(t){t.target.composing||(e.filterInput=t.target.value)},e.handleSearch]}})])])])}),[],!1,null,null,null);t.default=r.exports},357:function(e,t,n){"use strict";n.r(t);var s={name:"glossary-container"},i=n(11),r=Object(i.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"glossary-results"},[this._t("default")],2)}),[],!1,null,"0001cbd4",null);t.default=r.exports},358:function(e,t,n){"use strict";n.r(t);var s={name:"glossary-item",data:function(){return{showElement:!0}}},i=n(11),r=Object(i.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.showElement,expression:"showElement"}],staticClass:"glossary-results__item"},[this._t("title"),this._v(" "),t("div",{staticClass:"glossary-results__item-text"},[this._t("description")],2)],2)}),[],!1,null,null,null);t.default=r.exports},485:function(e,t,n){"use strict";n.r(t);n(33),n(34),n(182),n(183),n(190),n(184);var s=n(348),i=n(358),r=n(357),o=["All","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],a={name:"glossary-page",components:{GlossaryContainer:r.default,GlossaryItem:i.default,searchSection:s.default},props:["title","description"],data:function(){return{alphabetFilterLetters:o,activeLetter:"All",searchebleValue:"",visibleResults:!0}},mounted:function(){this.applyFilters()},methods:{applySearchFilter:function(){var e,t,n=this;null===(e=this.$refs["glossary-co"])||void 0===e||null===(t=e.$children)||void 0===t||t.forEach((function(e){e.showElement&&(e.showElement=e.$el.innerText.toLowerCase().includes(n.searchebleValue.toLowerCase()))}))},applyLetterFilter:function(){var e,t,n=this;null===(e=this.$refs["glossary-co"])||void 0===e||null===(t=e.$children)||void 0===t||t.forEach((function(e){"All"!==n.activeLetter?e.showElement=e.$el.innerText.toLowerCase().startsWith(n.activeLetter.toLowerCase()):e.showElement=!0}))},setActiveLetter:function(e){this.activeLetter=e},setSearchebleValue:function(e){this.searchebleValue=e},setVisibleResults:function(){var e,t;this.visibleResults=null===(e=this.$refs["glossary-co"])||void 0===e||null===(t=e.$children)||void 0===t?void 0:t.some((function(e){return e.showElement}))},applyFilters:function(){this.applyLetterFilter(),this.applySearchFilter(),this.setVisibleResults()}},watch:{activeLetter:function(){this.applyFilters()},searchebleValue:function(){this.applyFilters()}}},c=n(11),l=Object(c.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"glossary"},[n("search-section",{on:{"on-search":e.setSearchebleValue},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      Glossary\n    ")]},proxy:!0},{key:"description",fn:function(){return[e._v("\n      Browse our glossary to find specific words.\n    ")]},proxy:!0}])}),e._v(" "),n("div",{staticClass:"search-results-section"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"alphabet-box"},[n("ul",{staticClass:"alphabet__list"},e._l(e.alphabetFilterLetters,(function(t){return n("li",{key:t+"-filter-key",staticClass:"alphabet__list-item"},[n("button",{staticClass:"alphabet-filter__btn",class:{active:t===e.activeLetter},attrs:{type:"button"},on:{click:function(n){return e.setActiveLetter(t)}}},[e._v("\n              "+e._s(t)+"\n            ")])])})),0),e._v(" "),n("select",{staticClass:"alphabet__select",on:{change:function(t){return e.setActiveLetter(t.target.value)}}},e._l(e.alphabetFilterLetters,(function(t){return n("option",{key:t+"-option-filter-key",domProps:{selected:t===e.activeLetter,value:t}},[e._v(e._s(t)+"\n          ")])})),0)]),e._v(" "),n("h2",{directives:[{name:"show",rawName:"v-show",value:!e.visibleResults,expression:"!visibleResults"}],staticClass:"no-results text-center"},[e._v("No results found.")]),e._v(" "),n("glossary-container",{directives:[{name:"show",rawName:"v-show",value:e.visibleResults,expression:"visibleResults"}],ref:"glossary-co"},[n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("ATM")]},proxy:!0},{key:"description",fn:function(){return[e._v("Automated Teller Machine. Enables customer to be able to\n            perform financial transactions without the need for a human cashier. For mobile money,\n            the ATM machine can be considered as an automated agent, allowing withdrawals and some\n            case deposits from and to the customer’s wallet.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Agent")]},proxy:!0},{key:"description",fn:function(){return[e._v("A person or business that is contracted to facilitate\n            transactions for users. The most important of these are cash-in and cash-out (i.e.\n            loading value into the mobile money system, and then converting it back to cash\n            again); in many instances, agents register new customers too.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("API Service")]},proxy:!0},{key:"description",fn:function(){return[e._v("An API Service comprises of a URI which when combined with\n            a HTTP Operation (GET, PATCH, POST) enables a specified operation to be conducted on a\n            specific resource or set of resources.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Application Programming Interfaces (APIs)")]},proxy:!0},{key:"description",fn:function(){return[e._v("In computer programming, an application programming\n            interface (API) is a set of routines, protocols, and tools for building software\n            applications. An API expresses a software component in terms of its operations,\n            inputs, outputs, and underlying types.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Authentication")]},proxy:!0},{key:"description",fn:function(){return[e._v("Confirms the identity of the entity that is requesting the\n            service by verifying supplied credential(s). In this document, the requesting entity\n            is typically referred to as the initiator or sender.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Authorisation")]},proxy:!0},{key:"description",fn:function(){return[e._v("Authorisation provides an authenticated identity with\n            access to the system resources/services to which they are entitled. In the context of\n            this document, the requesting entity (initiator) is provided with a defined set of\n            services and functions that they can perform over API.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Business")]},proxy:!0},{key:"description",fn:function(){return[e._v("Describes an entity such as a public limited or limited\n            company that uses mobile money as a service. This includes taking bill payments,\n            making bill payments and disbursing salaries.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Client")]},proxy:!0},{key:"description",fn:function(){return[e._v("Describes the calling system/party that initiates and\n            interacts with the API service. The Client may or may not be the debit or credit\n            party.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("GUID")]},proxy:!0},{key:"description",fn:function(){return[e._v("Globally Unique Identifier. GUIDs are usually stored as\n            128-bit values and are used for as the datatype for correlation IDs in the mobile\n            money API.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("HTTP")]},proxy:!0},{key:"description",fn:function(){return[e._v("Acronym for Hyper Text Transfer Protocol. HTTP is the\n            foundation of data communication for the World Wide Web. HTTP is the protocol to\n            exchange or transfer hypertext.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("ISO")]},proxy:!0},{key:"description",fn:function(){return[e._v("International Organisation for Standardisation. A number of\n            ISO standards are used with the mobile money API.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("ITU")]},proxy:!0},{key:"description",fn:function(){return[e._v("International Telecommunications Agency. ITU MSISDN format\n            standards have been adopted for the mobile money API.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("JSON")]},proxy:!0},{key:"description",fn:function(){return[e._v("Acronym for JavaScript Object Notation. Used to transmit\n            data objects containing attribute/value pairs. One of two protocols (the other being\n            XML) considered as the basis for a Data Exchange format for mobile money API\n            harmonisation.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Merchant")]},proxy:!0},{key:"description",fn:function(){return[e._v("A retail merchant that accepts e-Money from mobile money\n            customers in exchange for goods and/or services.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("MSISDN")]},proxy:!0},{key:"description",fn:function(){return[e._v("A number uniquely identifying a subscription in a GSM or a\n            UMTS mobile network. Analogous with a mobile phone number.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Object")]},proxy:!0},{key:"description",fn:function(){return[e._v("An object holds a set of properties. Objects can be\n            combined or used in isolation to provide a representation of a resource.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Organisation")]},proxy:!0},{key:"description",fn:function(){return[e._v("Describes a non-business entity such as a charity or\n            government department that uses mobile money as a service. This includes taking bill\n            payments, making bill payments and disbursing salaries.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Provider")]},proxy:!0},{key:"description",fn:function(){return[e._v("Hosts the Mobile Money API services (or subset of).\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Resource")]},proxy:!0},{key:"description",fn:function(){return[e._v("A resource is the target for an API operation as identified\n            in the API request. Resources are conceptually different from the representations that\n            are returned to the client.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("REST-based API")]},proxy:!0},{key:"description",fn:function(){return[e._v("In computing, Representational State Transfer (REST) is the\n            software architectural style adopted by many organisations that offer APIs. REST\n            stipulates that interacting systems exhibit the following characteristics:\n            Client-Server. Responsibilities between clients and servers are explicitly defined.\n            Stateless. No context is stored between client and server during communication.\n            Cacheable. As on the World Wide Web, clients and intermediaries can cache responses\n            Layered System. A client cannot ordinarily tell whether it is connected directly to\n            the end server, or to an intermediary along the way. Uniform Interface. A uniform\n            interface simplifies and decouples the architecture, which enables each part to evolve\n            independently.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("URI")]},proxy:!0},{key:"description",fn:function(){return[e._v("Acronym for Uniform Resource Identifier. The URI is a\n            string of characters used to identify a resource (such as an account, for example). In\n            APIs a URI is represented in the form of a URL which is generally used to identify the\n            service to invoke.\n          ")]},proxy:!0}])}),e._v(" "),n("glossary-item",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Wallet")]},proxy:!0},{key:"description",fn:function(){return[e._v("Term used in this document to describe the store of value\n            that identities (customers, agents, merchants and businesses) use to store e-Money. In\n            general, the document uses the term Account in place of Wallet.\n          ")]},proxy:!0}])})],1)],1)])],1)}),[],!1,null,null,null);t.default=l.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14,41,63,64],{406:function(e,t,i){"use strict";i.r(t);i(123);var n={name:"accordion-item",props:{expanded:{type:Boolean},businessPage:{type:Boolean}},data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null,showElement:!0}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var e=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},a=i(15),s=Object(a.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:!e.showElement||e.businessPage,expression:"!showElement || businessPage"}],staticClass:"accordion__item",class:{"accordion__item--active":e.isOpened}},[i("div",{staticClass:"accordion__item-wrapper"},[i("div",{staticClass:"accordion__item-header",on:{click:e.openClose}},[i("div",{staticClass:"title"},[e._t("header")],2),e._v(" "),i("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),e._v(" "),i("div",{staticClass:"accordion__item-body",style:{height:e.isOpened?e.itemElementHeig:"0px"}},[i("div",{staticClass:"accordion__item-body-content"},[e._t("body")],2)])])])}),[],!1,null,null,null);t.default=s.exports},407:function(e,t,i){"use strict";i.r(t);var n={name:"accordion",data:function(){return{isOpened:!1}}},a=i(15),s=Object(a.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"accordion"},[t("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=s.exports},408:function(e,t,i){"use strict";i.r(t);var n={name:"TabSection"},a=i(15),s=Object(a.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"use-case-tab tabs__item tabs__item--active"},[t("div",{staticClass:"tab-content"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=s.exports},536:function(e,t,i){"use strict";i.r(t);var n=i(409),a=i.n(n),s=(i(410),i(411),i(408)),r=i(407),c=i(406),o={components:{VueSlickCarousel:a.a,AccordionItem:c.default,Accordion:r.default,TabSection:s.default},data:function(){return{options:{dots:!0,arrows:!0,dotsClass:"testimonials__dots",infinite:!1,speed:500,slidesToShow:1},borderedLink:!1,accentLink:{text:"Start developing",link:"/examples"},tabs:["P2P Transfers","Disbursements"],activeTabName:""}},created:function(){this.activeTabName=this.tabs.length?this.tabs[0]:""},methods:{handleTabSwitch:function(e){this.activeTabName=e},isActiveTab:function(e){return e===this.activeTabName}}},l=i(15),d=Object(l.a)(o,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("IndustryHeroSection",{attrs:{imageSrc:"/images/industry-hero.jpg",imageAlt:"image alt"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n  Humanitarian Agencies\n  ")]},proxy:!0},{key:"description",fn:function(){return[e._v("\n  Humanitarian organisations help to ensure that there is swift, efficient humanitarian assistance available when sudden natural disasters strike or wars occur or in connection with long-term conflicts.\n  ")]},proxy:!0}])}),e._v(" "),[i("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"section-intro"},[i("h2",{attrs:{id:"use-cases"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")])]),e._v(" "),i("div",{staticClass:"tabs-buttons"},e._l(e.tabs,(function(t,n){return i("button",{key:"tab-button-"+n,staticClass:"btn btn-bordered",class:{"btn--accent":e.isActiveTab(t),"btn--inactive":!e.isActiveTab(t)},attrs:{type:"button"},on:{click:function(i){return e.handleTabSwitch(t)}}},[e._v("\n          "+e._s(t)+"\n        ")])})),0),e._v(" "),i("div",{staticClass:"tabs-holder"},[i("TabSection",{directives:[{name:"show",rawName:"v-show",value:e.isActiveTab("P2P Transfers"),expression:"isActiveTab('P2P Transfers')"}]},[i("div",{staticClass:"text-box"},[i("p",[e._v("The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer\n              funds from an account holding individual to another account holding individual or to a non-account\n              holding individual (known as an unregistered customer). The API supports a wide number of financial\n              service providers including mobile money providers, banks, and micro-finance institutions.\n              The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’\n              P2P transfers (accounts held in different FSPs).\n              Bilateral and Switch-based transfers can be supported.\n            ")]),e._v(" "),i("p",[e._v("For further reading, please refer to the following:")]),e._v(" "),i("ul",{staticClass:"dotted-list"},[i("li",[i("b",[e._v("Getting Started.")]),e._v(" Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),e._v(" "),i("li",[i("b",[e._v("API Service Definition.")]),e._v(" Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),e._v(" "),i("p",[e._v("\n              All documentation can be found on the\n              "),i("a",{staticClass:"external",attrs:{href:"https://developer.mobilemoneyapi.io/",target:"_blank"}},[e._v("GSMA Mobile Money API Developer Portal.")])]),e._v(" "),i("router-link",{staticClass:"btn btn--transparent",attrs:{to:"#"}},[e._v("\n              Start developing\n            ")])],1),e._v(" "),i("h3",{staticClass:"h3"},[e._v("Use case scenarios")]),e._v(" "),i("accordion",[i("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                P2P Transfer via Switch\n              ")]},proxy:!0},{key:"body",fn:function(){return[i("p",[e._v("In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and and to (3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.")]),e._v(" "),i("mermaid",[e._v("\nsequenceDiagram\n    participant Sending FSP\n    participant Switch\n    participant Receiving FSP\n    Sending FSP->>Switch: GET /accounts/{identifierType}/{identifier}/accountname\n    activate Sending FSP\n    activate Switch\n    activate Receiving FSP\n    Note right of Switch: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP via the Switch.\n    Switch->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n    Receiving FSP--\x3e>Switch: HTTP 200 (Account Holder Name Object)\n    Switch--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n    deactivate Sending FSP\n    deactivate Switch\n    deactivate Receiving FSP\n    Sending FSP->>Switch: POST /quotations\n    activate Sending FSP\n    activate Switch\n    activate Receiving FSP\n    Note right of Switch: (2) Subject to sender confirmation of the name returned in step 1, the Sending FSP submits a quotation"),i("br"),e._v("request to the Switch. The Switch will return the Request State object to indicate that the request"),i("br"),e._v("is 'pending'.\n    Switch->>Receiving FSP: POST /quotations\n    Note right of Receiving FSP: (3) The Swith in turn submits the quotation request to the Receiving FSP."),i("br"),e._v("The Receiving FSP will return the Request State object to indicate"),i("br"),e._v("that the request is 'pending'.\n    Receiving FSP--\x3e>Switch: HTTP 200 (Request State Object)\n    Switch--\x3e>Sending FSP: HTTP 200 (Request State  Object)\n    deactivate Sending FSP\n    deactivate Switch\n    Receiving FSP->>Switch: PUT {Callback URL} (Quotations Object)\n    activate Switch\n    activate Sending FSP\n    Note right of Receiving FSP: (4) The FSP informs the Switch that the quotation has been successfully"),i("br"),e._v("created by returning the final representation of the quotation.\n    Switch--\x3e>Receiving FSP: HTTP 204\n    deactivate Receiving FSP\n    Switch->>Sending FSP: PUT {Callback URL} (Quotations Object)\n    Note right of Switch: (5) The Swith in turn informs the Sending FSP that the transaction has succesfully complteted"),i("br"),e._v("by returning the final representation of the transaction.\n    Sending FSP--\x3e>Switch: HTTP 204\n    deactivate Switch\n    deactivate Sending FSP\n    Sending FSP->>Switch: POST /transactions/type/transfer\n    activate Switch\n    activate Sending FSP\n    activate Receiving FSP\n    Note right of Switch: (6) Subject to sender confirmation, the Sending FSP submits a transfer request to the Swith. The Switch"),i("br"),e._v("will return the Request State object to indicate that the request is 'pending'.\n    Switch->>Receiving FSP: POST /transactions/type/transfer\n    Note right of Receiving FSP: (7) The Switch in turn submits the transaction request to the"),i("br"),e._v("Receiving FSP. The Receiving FSP will return the Request State object"),i("br"),e._v("to indicate that the request is 'pending'.\n    Receiving FSP--\x3e>Switch: HTTP 202 (Request State Object)\n    Switch--\x3e>Sending FSP: HTTP 202 (Request State Object)\n    deactivate Switch\n    deactivate Sending FSP\n    Receiving FSP->>Switch: PUT {Callback URL} (Transactions Object)\n    activate Switch\n    activate Sending FSP\n    Note right of Receiving FSP: (8) The FSP informs the Switch that the transaction has been "),i("br"),e._v(" successfully completed by returning the final representation of the"),i("br"),e._v("transaction.\n    Switch--\x3e>Receiving FSP: HTTP 204\n    deactivate Receiving FSP\n    Switch->>Sending FSP: PUT {Callback URL} (Transactions Object)\n    Note right of Switch: (9) The Swith in turn informs the Sending FSP that the transaction has been successfully completed"),i("br"),e._v("by returning the final representation of the transaction.\n    Sending FSP--\x3e>Switch: HTTP 204\n    deactivate Switch\n    deactivate Sending FSP\n")])]},proxy:!0}])}),e._v(" "),i("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                Bilateral P2P Transfer\n              ")]},proxy:!0},{key:"body",fn:function(){return[i("p",[e._v("In this diagram, the sending FSP connects directly with the receiving FSP to confirm the recipient name and to perform the transfer. A callback is provided by the receiving FSP to return confirmation of the transfer. In this example, a quotation is not requested.")]),e._v(" "),i("Mermaid",[e._v("\n                  sequenceDiagram\n                  participant Sending FSP\n                  participant Receiving FSP\n                  Sending FSP->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n                  activate Sending FSP\n                  activate Receiving FSP\n                  Note right of Receiving FSP: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP.\n                  Receiving FSP--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n                  deactivate Receiving FSP\n                  Sending FSP->>Receiving FSP: POST /transactions/type/transfer\n                  activate Receiving FSP\n                  Note right of Receiving FSP: (2) Subject to sender confirmation, the Sending FSP submits a transfer request. "),i("br"),e._v('The Receiving FSP will return the Request State object to indicate that the request is "pending".\n                  Receiving FSP--\x3e>Sending FSP: HTTP 202 (Request State Object)\n                  deactivate Sending FSP\n                  deactivate Receiving FSP\n                  Receiving FSP->>Sending FSP: PUT {Callback URL} (Transaction Object)\n                  activate Sending FSP\n                  activate Receiving FSP\n                  Note right of Receiving FSP: (3) The FSP in turn informs the Sending FSP that the transation has been succesfully completed'),i("br"),e._v("by returning the final representation of the transaction.\n                  Sending FSP--\x3e>Receiving FSP: HTTP 204\n                  deactivate Sending FSP\n                  deactivate Receiving FSP\n                ")])]},proxy:!0}])}),e._v(" "),i("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                'On-us' P2P Transfer Initiated by a Third Party Provider\n              ")]},proxy:!0},{key:"body",fn:function(){return[i("p",[e._v("\"'On-us' P2P Transfer Initiated by a Third Party Provider\" item content will be here")])]},proxy:!0}])}),e._v(" "),i("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                P2P Transfer Failure\n              ")]},proxy:!0},{key:"body",fn:function(){return[i("p",[e._v('"P2P Transfer Failure" item content will be here')])]},proxy:!0}])}),e._v(" "),i("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                P2P Transfer Reversal\n              ")]},proxy:!0},{key:"body",fn:function(){return[i("p",[e._v('"P2P Transfer Reversal" item content will be here')])]},proxy:!0}])}),e._v(" "),i("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                Obtain an FSP Balance\n              ")]},proxy:!0},{key:"body",fn:function(){return[i("p",[e._v('"Obtain an FSP Balance" item content will be here')])]},proxy:!0}])}),e._v(" "),i("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                Retrieve Transactions for an FSP\n              ")]},proxy:!0},{key:"body",fn:function(){return[i("p",[e._v('"Retrieve Transactions for an FSP" item content will be here')])]},proxy:!0}])}),e._v(" "),i("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                P2P Transfer via Switch\n              ")]},proxy:!0},{key:"body",fn:function(){return[i("p",[e._v('"Check for Service Availability" item content will be here')])]},proxy:!0}])}),e._v(" "),i("accordion-item",{attrs:{businessPage:""},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n                Retrieve a Missing API Response\n              ")]},proxy:!0},{key:"body",fn:function(){return[i("p",[e._v('"Retrieve a Missing API Response" item content will be here')])]},proxy:!0}])})],1)],1),e._v(" "),i("TabSection",{directives:[{name:"show",rawName:"v-show",value:e.isActiveTab("Disbursements"),expression:"isActiveTab('Disbursements')"}]},[e._v("\n          tab content will be here (2)\n        ")])],1)])])],e._v(" "),[i("section",{staticClass:"special-grid-section section--m-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"special-grid__container"},[i("div",{staticClass:"special-grid__block"},[i("div",{staticClass:"special-grid__image-holder"},[i("img",{attrs:{src:"/images/succeed-use-case.jpg",alt:"image alt"}})]),e._v(" "),i("div",{staticClass:"special-grid__content-holder"},[i("div",{staticClass:"section-intro__column"},[i("h2",{attrs:{id:"succeed-case-study"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#succeed-case-study"}},[e._v("#")]),e._v(" Succeed case study")]),e._v(" "),i("div",{staticClass:"section-description"},[e._v("\n                Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere\n                amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et\n                neque.\n              ")]),e._v(" "),i("ul",{staticClass:"case-list"},[i("li",{staticClass:"case-list__item"},[i("div",{staticClass:"bullet",staticStyle:{color:"#00568F"}}),e._v("\n                  Increased conversion\n                ")]),e._v(" "),i("li",{staticClass:"case-list__item"},[i("div",{staticClass:"bullet",staticStyle:{color:"#FF6600"}}),e._v("\n                  Important point\n                ")]),e._v(" "),i("li",{staticClass:"case-list__item"},[i("div",{staticClass:"bullet",staticStyle:{color:"#00A182"}}),e._v("\n                  Reduced errors\n                ")]),e._v(" "),i("li",{staticClass:"case-list__item"},[i("div",{staticClass:"bullet",staticStyle:{color:"#FCBB2C"}}),e._v("\n                  Important point\n                ")])])])])])])])])],e._v(" "),[i("section",{staticClass:"testimonials-section section--m-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"section-intro section-intro--one-column"},[i("h2",{attrs:{id:"testimonials"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#testimonials"}},[e._v("#")]),e._v(" Testimonials")])]),e._v(" "),i("div",{staticClass:"testimonials__slider-wrapper"},[i("VueSlickCarousel",e._b({ref:"slider",scopedSlots:e._u([{key:"prevArrow",fn:function(){return[i("div",{staticClass:"testimonials__arrow testimonials__arrow-prev"},[i("svg",{attrs:{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z",fill:"#242529"}})])])]},proxy:!0},{key:"nextArrow",fn:function(){return[i("div",{staticClass:"testimonials__arrow testimonials__arrow-next"},[i("svg",{attrs:{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z",fill:"#242529"}})])])]},proxy:!0}])},"VueSlickCarousel",e.options,!1),[i("div",[i("div",{staticClass:"testimonials__slide"},[i("div",{staticClass:"testimonials__content-holder"},[i("div",{staticClass:"testimonials__description"},[i("p",[e._v("Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.\n                    Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices\n                    ultrices integer urna, pharetra.")])]),e._v(" "),i("div",{staticClass:"testimonials__author"},[i("span",{staticClass:"testimonials__author--name"},[e._v("\n                    John Smith\n                  ")]),e._v(" "),i("span",{staticClass:"testimonials__author--position"},[e._v("\n                    Developer at Porto\n                  ")])])]),e._v(" "),i("div",{staticClass:"testimonials__image-holder"},[i("div",{staticClass:"testimonials__image-holder--container"},[i("div",{staticClass:"testimonials__icon-holder"},[i("svg",{attrs:{width:"64",height:"46",viewBox:"0 0 64 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z",fill:"#99CCCC"}})])]),e._v(" "),i("img",{attrs:{src:"/images/slide-item-1.jpg",alt:"John Smith"}})])])])])])],1)])])],e._v(" "),[i("section",{staticClass:"get-started-section section--p-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"section-intro section-intro--narrow text-center"},[i("h2",{attrs:{id:"ready-to-explore"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-explore"}},[e._v("#")]),e._v(" Ready to explore?")]),e._v(" "),i("div",{staticClass:"section-description"},[e._v("Find our latest API documentation.\n        ")])]),e._v(" "),i("div",{staticClass:"buttons-holder content-center get-started__btn-holder"},[e.borderedLink?i("router-link",{staticClass:"btn",attrs:{to:e.borderedLink.link}},[e._v(" "+e._s(e.borderedLink.text)+"\n        ")]):e._e(),e._v(" "),e.accentLink?i("router-link",{staticClass:"btn btn--accent",attrs:{to:e.accentLink.link}},[e._v(" "+e._s(e.accentLink.text)+"\n        ")]):e._e()],1)])])]],2)}),[],!1,null,null,null);t.default=d.exports}}]);
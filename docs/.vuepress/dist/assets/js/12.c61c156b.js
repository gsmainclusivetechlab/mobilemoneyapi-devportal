(window.webpackJsonp=window.webpackJsonp||[]).push([[12,48,71,72],{410:function(t,e,i){"use strict";e.a={created:function(){this.activeTabName=this.tabs.length?this.tabs[0]:""},methods:{handleTabSwitch:function(t){this.activeTabName=t},isActiveTab:function(t){return t===this.activeTabName}}}},411:function(t,e,i){"use strict";i.r(e);var n={name:"TabSection"},s=i(15),o=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item tabs__item--active"},[e("div",{staticClass:"tab-content"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=o.exports},412:function(t,e,i){"use strict";i.r(e);var n={name:"accordion",data:function(){return{isOpened:!1}}},s=i(15),o=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"accordion"},[e("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=o.exports},413:function(t,e,i){"use strict";i.r(e);i(125);var n={name:"accordion-item",props:{expanded:{type:Boolean},businessPage:{type:Boolean}},data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null,showElement:!0}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var t=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout((function(){t.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},s=i(15),o=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:!t.showElement||t.businessPage,expression:"!showElement || businessPage"}],staticClass:"accordion__item",class:{"accordion__item--active":t.isOpened}},[i("div",{staticClass:"accordion__item-wrapper"},[i("div",{staticClass:"accordion__item-header",on:{click:t.openClose}},[i("div",{staticClass:"title"},[t._t("header")],2),t._v(" "),i("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),t._v(" "),i("div",{staticClass:"accordion__item-body",style:{height:t.isOpened?t.itemElementHeig:"0px"}},[i("div",{staticClass:"accordion__item-body-content"},[t._t("body")],2)])])])}),[],!1,null,null,null);e.default=o.exports},562:function(t,e,i){"use strict";i.r(e);var n=i(414),s=i.n(n),o=(i(415),i(416),i(411)),a=i(412),r=i(413),c=i(410),l={components:{VueSlickCarousel:s.a,AccordionItem:r.default,Accordion:a.default,TabSection:o.default},data:function(){return{options:{dots:!0,arrows:!0,dotsClass:"testimonials__dots",infinite:!1,speed:500,slidesToShow:1},borderedLink:!1,accentLink:{text:"Start developing",link:"/examples"},tabs:["P2P Transfers","Account Linking","Agent Services"],activeTabName:""}},mixins:[c.a]},d=i(15),v=Object(d.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("industry-hero-section",{attrs:{imageSrc:"/images/industry-hero.jpg",imageAlt:"image alt"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n  Banks &  Microfinance Institutions\n  ")]},proxy:!0},{key:"description",fn:function(){return[i("p",[t._v("Bank and Microfinance Institutions that provide financial services such as loans and savings to customers with mobile money wallets can use the GSMA API Specification to integrate their system with the with the mobile money provider.")]),t._v(" "),i("p",[t._v("Customers will be able to make money transfers between their bank account and their mobile money wallet in a seamless manner.")])]},proxy:!0}])}),t._v(" "),[i("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"section-intro"},[i("h2",{attrs:{id:"use-cases"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")])]),t._v(" "),i("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(e,n){return i("button",{key:"tab-button-"+n,staticClass:"btn btn-bordered",class:{"btn--accent":t.isActiveTab(e),"btn--inactive":!t.isActiveTab(e)},attrs:{type:"button"},on:{click:function(i){return t.handleTabSwitch(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),i("div",{staticClass:"tabs-holder"},[i("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("P2P Transfers"),expression:"isActiveTab('P2P Transfers')"}]},[[i("h2",{attrs:{id:"introduction"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),i("p",[t._v("The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer funds from an account holding individual to another account holding individual or to a non-account holding individual (known as an unregistered customer). The API supports a wide number of financial service providers including mobile money providers, banks, and micro-finance institutions. The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’ P2P transfers (accounts held in different FSPs). Bilateral and Switch-based transfers can be supported.")]),t._v(" "),i("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),i("li",[i("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),i("p",[t._v("All documentation can be found on the "),i("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1)]],2),t._v(" "),i("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Account Linking"),expression:"isActiveTab('Account Linking')"}]},[[i("h2",{attrs:{id:"introduction-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction-2"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),i("p",[t._v("The Account Linking Mobile Money APIs allow financial service providers to link customer accounts to mobile money accounts, thus allowing their customers to push funds to and pull funds from mobile money. Conversely, mobile money providers can use the APIs to link their customers mobile money accounts to financial service providers.")]),t._v(" "),i("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),i("li",[i("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.\nAll documentation can be found on the "),i("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1)]),t._v(" "),i("h2",{attrs:{id:"intended-audience"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Audience")])]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Usage")])]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Role")])])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("FSP - Mobile Money Providers")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to accept account linking requests from other financial service providers.")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to request linking of accounts to other financial service providers.")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("FSP Banks and Microfinance Institutions")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to accept account linking requests mobile money providers.")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}}),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to request linking of accounts to mobile money providers.")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])])]],2),t._v(" "),i("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Agent Services"),expression:"isActiveTab('Agent Services')"}]},[[i("h2",{attrs:{id:"introduction-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#introduction-3"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),i("p",[t._v("Agent Services comprises of the following:\n"),i("br"),i("br")]),t._v(" "),i("p",[i("strong",[t._v("Cash-in and Cash-out Services")])]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Agent-initiated Cash-out")]),t._v(". The agent initiates the cash-out and the mobile money customer is requested to authenticate the cash-out by the mobile money provider.")]),t._v(" "),i("li",[i("strong",[t._v("Customer-initiated Cash-out")]),t._v(". The mobile money customer initiates the payment by specifying the agent that is to be performing the cash-out.")]),t._v(" "),i("li",[i("strong",[t._v("Cash-out via Authorisation Code")]),t._v(". The customer generates an authorisation code up to a maximum amount. The agent then enters or scans (if rendered as a QR code) the code to perform the withdrawal.")]),t._v(" "),i("li",[i("strong",[t._v("Cash-in")]),t._v(". The agent initiates the cash-in by entering the customer account identifier(s).")])]),t._v(" "),i("p",[t._v("Closed loop and open-loop agent cash-in and cash-out are supported by the Mobile Money API. Closed loop cash-in/cash-out occurs where the agent and customer accounts reside with the same mobile money provider. Open loop cash-in/cash-out occurs where the agent and customer accounts reside with different mobile money providers.")]),t._v(" "),i("p",[t._v("Agents can be physical agents, i.e. customers that are serviced by an human, or can be an ATM.\n"),i("br"),i("br")]),t._v(" "),i("p",[i("strong",[t._v("Customer Account Services")])]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Customer Registration")]),t._v(". Agents can register new customers for mobile money.")]),t._v(" "),i("li",[i("strong",[t._v("KYC Verification")]),t._v(". Agents that provide KYC verification services can confirm that they have verified customer KYC.\n"),i("br"),i("br")])]),t._v(" "),i("p",[i("strong",[t._v("Further Reading")])]),t._v(" "),i("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),i("li",[i("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),i("p",[t._v("All documentation can be found on the "),i("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),i("h2",{attrs:{id:"intended-audience-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience-2"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Audience")])]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Usage")])]),t._v(" "),i("th",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Role")])])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Mobile Money Providers")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to allow agents to perform cash-in, cash-out, customer registration and customer KYC verification services on behalf of mobile money customers.")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"left"}},[i("strong",[t._v("Agents")])]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to service customer requests for cash-in, cash-out, registration and KYC verification.")]),t._v(" "),i("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])])]],2)],1)])])],t._v(" "),[i("section",{staticClass:"testimonials-section section--m-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"section-intro section-intro--one-column"},[i("h2",{attrs:{id:"testimonials"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#testimonials"}},[t._v("#")]),t._v(" Testimonials")])]),t._v(" "),i("div",{staticClass:"testimonials__slider-wrapper"},[i("VueSlickCarousel",t._b({ref:"slider",scopedSlots:t._u([{key:"prevArrow",fn:function(){return[i("div",{staticClass:"testimonials__arrow testimonials__arrow-prev"},[i("svg",{attrs:{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z",fill:"#242529"}})])])]},proxy:!0},{key:"nextArrow",fn:function(){return[i("div",{staticClass:"testimonials__arrow testimonials__arrow-next"},[i("svg",{attrs:{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z",fill:"#242529"}})])])]},proxy:!0}])},"VueSlickCarousel",t.options,!1),[i("div",[i("div",{staticClass:"testimonials__slide"},[i("div",{staticClass:"testimonials__content-holder"},[i("svg",{attrs:{width:"64",height:"46",viewBox:"0 0 64 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z",fill:"#99CCCC"}})]),t._v(" "),i("div",{staticClass:"testimonials__description"},[i("p",[t._v("As a financial service provider operating in a country where the majority of the population have access to banking services through their mobile phones, establishing partnerships and integrating with MMPs has benefited us when extending services to the financially exclude")])]),t._v(" "),i("svg",{attrs:{width:"64",height:"46",viewBox:"0 0 64 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z",fill:"#99CCCC"}})])]),t._v(" "),i("div",{staticClass:"testimonials__info-holder"},[i("div",{staticClass:"testimonials__info-holder--container"},[i("div",[i("p",{staticClass:"testimonials__info-holder--company"},[t._v("Musoni")]),t._v(" "),i("p",{staticClass:"testimonials__info-holder--organisation"},[t._v("Banks and MFIs")])]),t._v(" "),i("div",[i("p",[i("router-link",{attrs:{to:"/use-cases/account-linking/"}},[t._v("Account Linking")])],1),t._v(" "),i("p",[i("router-link",{attrs:{to:"/use-cases/agent-services/"}},[t._v("Agent Services")])],1)])])])])])])],1)])])],t._v(" "),[i("section",{staticClass:"get-started-section section--p-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"section-intro section-intro--narrow text-center"},[i("h2",{attrs:{id:"ready-to-explore"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-explore"}},[t._v("#")]),t._v(" Ready to explore?")]),t._v(" "),i("div",{staticClass:"section-description"},[t._v("Find our latest API documentation.\n        ")])]),t._v(" "),i("div",{staticClass:"buttons-holder content-center get-started__btn-holder"},[t.borderedLink?i("router-link",{staticClass:"btn",attrs:{to:t.borderedLink.link}},[t._v(" "+t._s(t.borderedLink.text)+"\n        ")]):t._e(),t._v(" "),t.accentLink?i("router-link",{staticClass:"btn btn--accent",attrs:{to:t.accentLink.link}},[t._v(" "+t._s(t.accentLink.text)+"\n        ")]):t._e()],1)])])]],2)}),[],!1,null,null,null);e.default=v.exports}}]);
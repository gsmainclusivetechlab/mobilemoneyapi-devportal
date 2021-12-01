(window.webpackJsonp=window.webpackJsonp||[]).push([[16,48,70,71],{406:function(t,e,n){"use strict";e.a={created:function(){this.activeTabName=this.tabs.length?this.tabs[0]:""},methods:{handleTabSwitch:function(t){this.activeTabName=t},isActiveTab:function(t){return t===this.activeTabName}}}},407:function(t,e,n){"use strict";n.r(e);n(125);var i={name:"accordion-item",props:{expanded:{type:Boolean},businessPage:{type:Boolean}},data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null,showElement:!0}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var t=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout((function(){t.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},o=n(15),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showElement||t.businessPage,expression:"!showElement || businessPage"}],staticClass:"accordion__item",class:{"accordion__item--active":t.isOpened}},[n("div",{staticClass:"accordion__item-wrapper"},[n("div",{staticClass:"accordion__item-header",on:{click:t.openClose}},[n("div",{staticClass:"title"},[t._t("header")],2),t._v(" "),n("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),t._v(" "),n("div",{staticClass:"accordion__item-body",style:{height:t.isOpened?t.itemElementHeig:"0px"}},[n("div",{staticClass:"accordion__item-body-content"},[t._t("body")],2)])])])}),[],!1,null,null,null);e.default=a.exports},408:function(t,e,n){"use strict";n.r(e);var i={name:"accordion",data:function(){return{isOpened:!1}}},o=n(15),a=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"accordion"},[e("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=a.exports},409:function(t,e,n){"use strict";n.r(e);var i={name:"TabSection"},o=n(15),a=Object(o.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item tabs__item--active"},[e("div",{staticClass:"tab-content"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=a.exports},568:function(t,e,n){"use strict";n.r(e);var i=n(410),o=n.n(i),a=(n(411),n(412),n(409)),s=n(408),r=n(407),l=n(406),c={components:{VueSlickCarousel:o.a,AccordionItem:r.default,Accordion:s.default,TabSection:a.default},data:function(){return{options:{dots:!0,arrows:!0,dotsClass:"testimonials__dots",infinite:!1,speed:500,slidesToShow:1},borderedLink:!1,accentLink:{text:"Start developing",link:"/examples"},tabs:["P2P Transfers","Merchant Payments","Disbursements","International Transfers","Recurring Payments","Account Linking","Bill Payments","Agent Services"],activeTabName:""}},mixins:[l.a]},d=n(15),v=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("IndustryHeroSection",{attrs:{imageSrc:"/images/industry-hero.jpg",imageAlt:"image alt"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n  Mobile Money Providers\n  ")]},proxy:!0},{key:"description",fn:function(){return[n("p",[t._v("Mobile Money providers are companies that operate an electronic wallet which allows users to send, receive and store money using their mobile phone.")]),t._v(" "),n("p",[t._v("Mobile Money providers can use the GSMA API specification to simplify the integration process and to connect with many third party service providers at scale enabling further revenue streams.")])]},proxy:!0}])}),t._v(" "),[n("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro"},[n("h2",{attrs:{id:"use-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")])]),t._v(" "),n("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(e,i){return n("button",{key:"tab-button-"+i,staticClass:"btn btn-bordered",class:{"btn--accent":t.isActiveTab(e),"btn--inactive":!t.isActiveTab(e)},attrs:{type:"button"},on:{click:function(n){return t.handleTabSwitch(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),n("div",{staticClass:"tabs-holder"},[n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("P2P Transfers"),expression:"isActiveTab('P2P Transfers')"}]},[[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer funds from an account holding individual to another account holding individual or to a non-account holding individual (known as an unregistered customer). The API supports a wide number of financial service providers including mobile money providers, banks, and micro-finance institutions. The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’ P2P transfers (accounts held in different FSPs). Bilateral and Switch-based transfers can be supported.")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1)]],2),t._v(" "),n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Merchant Payments"),expression:"isActiveTab('Merchant Payments')"}]},[[n("h2",{attrs:{id:"introduction-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-2"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The Merchant Payment Mobile Money APIs allow merchants to accept payments from mobile money customers. Supported payment mechanisms include:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Payee-initiated merchant payment.")]),t._v(" The merchant initiates the payment and the payer is requested to authenticate to confirm acceptance by the mobile money provider.")]),t._v(" "),n("li",[n("strong",[t._v("Payer-initiated merchant payment.")]),t._v(" The payer initiates the payment by specifying the merchant that is to be paid.")]),t._v(" "),n("li",[n("strong",[t._v("Merchant payment via pre-authorised payment code.")]),t._v(" The payer generates a payment authorisation code up to a maximum payment amount. The merchant then enters or scans (if rendered as a QR code) the payer’s code to perform the payment.")])]),t._v(" "),n("p",[t._v("Closed loop and open-loop merchant payments are supported by the Mobile Money API. Closed loop merchant payments occur where the payer and payee accounts reside with the same mobile money provider. Open loop payments occur where the payer and payee accounts reside with different mobile money providers.\nFor further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started.")]),t._v(" Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition.")]),t._v(" Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"intended-audience"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to receive payments from merchants.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Merchants")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to accept mobile money payments.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])])]],2),t._v(" "),n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Disbursements"),expression:"isActiveTab('Disbursements')"}]},[[n("h2",{attrs:{id:"introduction-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-3"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The Disbursement Mobile Money APIs allow organisations to disburse funds to mobile money recipients.")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started.")]),t._v(" Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition.")]),t._v(" Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"intended-audience-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience-2"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to allow organisations to disburse payments in singular and in bulk.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("NGOs")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to provide aid payments to mobile money recipients.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Government Departments")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to provide social credit payments to mobile money recipients.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Employers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to provide salary payments to mobile money recipients.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])])]],2),t._v(" "),n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("International Transfers"),expression:"isActiveTab('International Transfers')"}]},[[n("h2",{attrs:{id:"introduction-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-4"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The International Transfer Mobile Money APIs allow financial service providers to perform cross-border mobile money transfers, including remittances.")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[t._v("Getting Started. Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[t._v("API Service Definition. Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"intended-audience-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience-3"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("FSP - Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to receive International transfers from other FSPs.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}}),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to send international transfers to other FSPs.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("FSP – International Remittance Organisations")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to receive international remittances from Mobile Money Providers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}}),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to send international remittances to Mobile Money Providers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("International Transfer Hubs")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money APIs to receive international transfers from FSPs.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}}),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money APIs to send international transfers to FSPs.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])])]],2),t._v(" "),n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Recurring Payments"),expression:"isActiveTab('Recurring Payments')"}]},[[n("h2",{attrs:{id:"introduction-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-5"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The Recurring Payments Mobile Money APIs allow service providers to setup electronic payment mandates for mobile money customers and initiate payments against payment mandates.")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"intended-audience-4"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience-4"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to receive recurring payment requests from service providers."),n("br"),t._v("- To understand how to implement the Mobile Money API to create recurring payment requests initiated by customers using a channel (e.g. app) provided by the mobile money provider.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Service Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to request recurring payment mandates against mobile money accounts.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])])]],2),t._v(" "),n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Account Linking"),expression:"isActiveTab('Account Linking')"}]},[[n("h2",{attrs:{id:"introduction-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-6"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The Account Linking Mobile Money APIs allow financial service providers to link customer accounts to mobile money accounts, thus allowing their customers to push funds to and pull funds from mobile money. Conversely, mobile money providers can use the APIs to link their customers mobile money accounts to financial service providers.")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.\nAll documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1)]),t._v(" "),n("h2",{attrs:{id:"intended-audience-5"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience-5"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("FSP - Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to accept account linking requests from other financial service providers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}}),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to request linking of accounts to other financial service providers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("FSP Banks and Microfinance Institutions")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to accept account linking requests mobile money providers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}}),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to request linking of accounts to mobile money providers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])])]],2),t._v(" "),n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Bill Payments"),expression:"isActiveTab('Bill Payments')"}]},[[n("h2",{attrs:{id:"introduction-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-7"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The Bill Payments Mobile Money APIs allow service providers to accept bill payments from mobile money customers.")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"intended-audience-6"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience-6"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to make bill payments to service providers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Service Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to accept bill payments from Mobile Money Providers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])])])])]],2),t._v(" "),n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Agent Services"),expression:"isActiveTab('Agent Services')"}]},[[n("h2",{attrs:{id:"introduction-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-8"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("Agent Services comprises of the following:\n"),n("br"),n("br")]),t._v(" "),n("p",[n("strong",[t._v("Cash-in and Cash-out Services")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Agent-initiated Cash-out")]),t._v(". The agent initiates the cash-out and the mobile money customer is requested to authenticate the cash-out by the mobile money provider.")]),t._v(" "),n("li",[n("strong",[t._v("Customer-initiated Cash-out")]),t._v(". The mobile money customer initiates the payment by specifying the agent that is to be performing the cash-out.")]),t._v(" "),n("li",[n("strong",[t._v("Cash-out via Authorisation Code")]),t._v(". The customer generates an authorisation code up to a maximum amount. The agent then enters or scans (if rendered as a QR code) the code to perform the withdrawal.")]),t._v(" "),n("li",[n("strong",[t._v("Cash-in")]),t._v(". The agent initiates the cash-in by entering the customer account identifier(s).")])]),t._v(" "),n("p",[t._v("Closed loop and open-loop agent cash-in and cash-out are supported by the Mobile Money API. Closed loop cash-in/cash-out occurs where the agent and customer accounts reside with the same mobile money provider. Open loop cash-in/cash-out occurs where the agent and customer accounts reside with different mobile money providers.")]),t._v(" "),n("p",[t._v("Agents can be physical agents, i.e. customers that are serviced by an human, or can be an ATM.\n"),n("br"),n("br")]),t._v(" "),n("p",[n("strong",[t._v("Customer Account Services")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Customer Registration")]),t._v(". Agents can register new customers for mobile money.")]),t._v(" "),n("li",[n("strong",[t._v("KYC Verification")]),t._v(". Agents that provide KYC verification services can confirm that they have verified customer KYC.\n"),n("br"),n("br")])]),t._v(" "),n("p",[n("strong",[t._v("Further Reading")])]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"intended-audience-7"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience-7"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("TTo understand how to implement the Mobile Money API to allow agents to perform cash-in, cash-out, customer registration and customer KYC verification services on behalf of mobile money customers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Agents")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to service customer requests for cash-in, cash-out, registration and KYC verification.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])])]],2)],1)])])],t._v(" "),[n("section",{staticClass:"special-grid-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"special-grid__container"},[n("div",{staticClass:"special-grid__block"},[n("div",{staticClass:"special-grid__image-holder"},[n("img",{attrs:{src:"/images/succeed-use-case.jpg",alt:"image alt"}})]),t._v(" "),n("div",{staticClass:"special-grid__content-holder"},[n("div",{staticClass:"section-intro__column"},[n("h2",{attrs:{id:"succeed-case-study"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#succeed-case-study"}},[t._v("#")]),t._v(" Succeed case study")]),t._v(" "),n("div",{staticClass:"section-description"},[t._v("\n                Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere\n                amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et\n                neque.\n              ")]),t._v(" "),n("ul",{staticClass:"case-list"},[n("li",{staticClass:"case-list__item"},[n("div",{staticClass:"bullet",staticStyle:{color:"#00568F"}}),t._v("\n                  Increased conversion\n                ")]),t._v(" "),n("li",{staticClass:"case-list__item"},[n("div",{staticClass:"bullet",staticStyle:{color:"#FF6600"}}),t._v("\n                  Important point\n                ")]),t._v(" "),n("li",{staticClass:"case-list__item"},[n("div",{staticClass:"bullet",staticStyle:{color:"#00A182"}}),t._v("\n                  Reduced errors\n                ")]),t._v(" "),n("li",{staticClass:"case-list__item"},[n("div",{staticClass:"bullet",staticStyle:{color:"#FCBB2C"}}),t._v("\n                  Important point\n                ")])])])])])])])])],t._v(" "),[n("section",{staticClass:"get-started-section section--p-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro section-intro--narrow text-center"},[n("h2",{attrs:{id:"ready-to-explore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-explore"}},[t._v("#")]),t._v(" Ready to explore?")]),t._v(" "),n("div",{staticClass:"section-description"},[t._v("Find our latest API documentation.\n        ")])]),t._v(" "),n("div",{staticClass:"buttons-holder content-center get-started__btn-holder"},[t.borderedLink?n("router-link",{staticClass:"btn",attrs:{to:t.borderedLink.link}},[t._v(" "+t._s(t.borderedLink.text)+"\n        ")]):t._e(),t._v(" "),t.accentLink?n("router-link",{staticClass:"btn btn--accent",attrs:{to:t.accentLink.link}},[t._v(" "+t._s(t.accentLink.text)+"\n        ")]):t._e()],1)])])]],2)}),[],!1,null,null,null);e.default=v.exports}}]);
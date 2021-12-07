(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{410:function(t,e,n){"use strict";e.a={created:function(){this.activeTabName=this.tabs.length?this.tabs[0]:""},methods:{handleTabSwitch:function(t){this.activeTabName=t},isActiveTab:function(t){return t===this.activeTabName}}}},579:function(t,e,n){"use strict";n.r(e);var s=n(414),i=n.n(s),a=(n(415),n(416),n(410)),r={components:{VueSlickCarousel:i.a},data:function(){return{options:{dots:!0,arrows:!0,dotsClass:"testimonials__dots",infinite:!1,speed:500,slidesToShow:1},borderedLink:!1,accentLink:{text:"Start developing",link:"/examples"},tabs:["Recurring Payments","Bill Payments"],activeTabName:""}},mixins:[a.a]},o=n(15),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("IndustryHeroSection",{attrs:{imageSrc:"/images/industry-hero.jpg",imageAlt:"image alt"},scopedSlots:t._u([{key:"description",fn:function(){return[n("p",[t._v("Companies in the energy, Utilities and Agritech industries can use the GSMA API specification to support their customers save time by automating the bill payment process.\n  As an example, monthly utility payments can be set up which saves time for customers and resources for companies as this type of set up removes the need for manual payment processing.\n  ")])]},proxy:!0}])}),t._v(" "),[n("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro"},[n("h2",{attrs:{id:"use-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")])]),t._v(" "),n("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(e,s){return n("button",{key:"tab-button-"+s,staticClass:"btn btn-bordered",class:{"btn--accent":t.isActiveTab(e),"btn--inactive":!t.isActiveTab(e)},attrs:{type:"button"},on:{click:function(n){return t.handleTabSwitch(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),n("div",{staticClass:"tabs-holder"},[n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Recurring Payments"),expression:"isActiveTab('Recurring Payments')"}]},[[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The Recurring Payments Mobile Money APIs allow service providers to setup electronic payment mandates for mobile money customers and initiate payments against payment mandates.")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"intended-audience"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("- To understand how to implement the Mobile Money API to receive recurring payment requests from service providers."),n("br"),t._v("- To understand how to implement the Mobile Money API to create recurring payment requests initiated by customers using a channel (e.g. app) provided by the mobile money provider.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Service Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to request recurring payment mandates against mobile money accounts.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])]),t._v(" "),n("router-link",{staticClass:"btn btn--transparent",attrs:{to:"/use-cases/recurring-payments/"}},[t._v("Start developing")])]],2),t._v(" "),n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Bill Payments"),expression:"isActiveTab('Bill Payments')"}]},[[n("h2",{attrs:{id:"introduction-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-2"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The Bill Payments Mobile Money APIs allow service providers to accept bill payments from mobile money customers.")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"intended-audience-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience-2"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to make bill payments to service providers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Service Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to accept bill payments from Mobile Money Providers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])])])]),t._v(" "),n("router-link",{staticClass:"btn btn--transparent",attrs:{to:"/use-cases/bill-payments/"}},[t._v("Start developing")])]],2)],1)])])],t._v(" "),[n("section",{staticClass:"special-grid-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro section-intro--one-column"},[n("h2",{attrs:{id:"succeed-case-study"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#succeed-case-study"}},[t._v("#")]),t._v(" Succeed case study")])]),t._v(" "),n("case-study",{attrs:{imageLink:"/images/test.jpg"},scopedSlots:t._u([{key:"main-description",fn:function(){return[t._v("\nAs an energy provider whose business is mainly in rural areas, partnerships with MNOs are of extreme importance to its operations. Mobile Money is regarded an enabler of its business.\nMost of the third-party service provider’s consumers are pay-as-you go customers and by being directly integrated with over 10 MNO partners, it facilitates faster and smoother payments.\n        ")]},proxy:!0},{key:"first-description",fn:function(){return[t._v("\nAlthough the process of direct integrations has improved since its first integration over seven years ago, the provider are still experiences some challenges when integrating with new partners, particularly the length of integration.\nThe energy provider has previously considered using aggregators; however, the costs proved to be significantly high.\n        ")]},proxy:!0},{key:"second-description",fn:function(){return[t._v("\nThe business has stated it would be beneficial to use a Standardised API, as will allow the provider to connect with more MNOs and expand services it offers at a faster rate. One of the provider’s struggles has been maintaining the multiple MNO API connections, which can be minimised by using a Standard API. \n        ")]},proxy:!0},{key:"title",fn:function(){return[t._v("\nEngie\n        ")]},proxy:!0},{key:"org-type",fn:function(){return[t._v("\nEnergy Provider\n        ")]},proxy:!0},{key:"use-case-links",fn:function(){return[n("p",[n("router-link",{attrs:{to:"/use-cases/bill-payments/"}},[t._v("Bill Payments")])],1),t._v(" "),n("p",[n("router-link",{attrs:{to:"/use-cases/recurring-payments/"}},[t._v("Recurring Payments")])],1),t._v(" "),n("p",[n("router-link",{attrs:{to:"/use-cases/disbursements/"}},[t._v("Disbursements")])],1)]},proxy:!0}])})],1)])],t._v(" "),[n("section",{staticClass:"get-started-section section--p-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro section-intro--narrow text-center"},[n("h2",{attrs:{id:"ready-to-explore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-explore"}},[t._v("#")]),t._v(" Ready to explore?")]),t._v(" "),n("div",{staticClass:"section-description"},[t._v("Find our latest API documentation.\n        ")])]),t._v(" "),n("div",{staticClass:"buttons-holder content-center get-started__btn-holder"},[t.borderedLink?n("router-link",{staticClass:"btn",attrs:{to:t.borderedLink.link}},[t._v(" "+t._s(t.borderedLink.text)+"\n        ")]):t._e(),t._v(" "),t.accentLink?n("router-link",{staticClass:"btn btn--accent",attrs:{to:t.accentLink.link}},[t._v(" "+t._s(t.accentLink.text)+"\n        ")]):t._e()],1)])])]],2)}),[],!1,null,null,null);e.default=c.exports}}]);
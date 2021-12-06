(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{410:function(e,t,n){"use strict";t.a={created:function(){this.activeTabName=this.tabs.length?this.tabs[0]:""},methods:{handleTabSwitch:function(e){this.activeTabName=e},isActiveTab:function(e){return e===this.activeTabName}}}},564:function(e,t,n){"use strict";n.r(t);var i=n(414),s=n.n(i),a=(n(415),n(416),n(410)),r={components:{VueSlickCarousel:s.a},data:function(){return{options:{dots:!0,arrows:!0,dotsClass:"testimonials__dots",infinite:!1,speed:500,slidesToShow:1},borderedLink:!1,accentLink:{text:"Start developing",link:"/examples"},tabs:["Recurring Payments","Bill Payments"],activeTabName:""}},mixins:[a.a]},o=n(15),c=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("IndustryHeroSection",{attrs:{imageSrc:"/images/industry-hero.jpg",imageAlt:"image alt"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n  FinTech Providers (Insurance Savings Loans)\n  ")]},proxy:!0},{key:"description",fn:function(){return[n("p",[e._v("Fintech companies that provide services such as insurance and other digital financial services can use the GSMA API specification to enable their customer to make one-off bill payments or set up recurring payments for services such as subscriptions.")])]},proxy:!0}])}),e._v(" "),[n("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro"},[n("h2",{attrs:{id:"use-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")])]),e._v(" "),n("div",{staticClass:"tabs-buttons"},e._l(e.tabs,(function(t,i){return n("button",{key:"tab-button-"+i,staticClass:"btn btn-bordered",class:{"btn--accent":e.isActiveTab(t),"btn--inactive":!e.isActiveTab(t)},attrs:{type:"button"},on:{click:function(n){return e.handleTabSwitch(t)}}},[e._v("\n          "+e._s(t)+"\n        ")])})),0),e._v(" "),n("div",{staticClass:"tabs-holder"},[n("TabSection",{directives:[{name:"show",rawName:"v-show",value:e.isActiveTab("Recurring Payments"),expression:"isActiveTab('Recurring Payments')"}]},[[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[e._v("The Recurring Payments Mobile Money APIs allow service providers to setup electronic payment mandates for mobile money customers and initiate payments against payment mandates.")]),e._v(" "),n("p",[e._v("For further reading, please refer to the following:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Getting Started")]),e._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),e._v(" "),n("li",[n("strong",[e._v("API Service Definition")]),e._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),e._v(" "),n("p",[e._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[e._v("GSMA Mobile Money API Developer Portal")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"intended-audience"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience"}},[e._v("#")]),e._v(" Intended Audience")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Audience")])]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Usage")])]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Role")])])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Mobile Money Providers")])]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("- To understand how to implement the Mobile Money API to receive recurring payment requests from service providers."),n("br"),e._v("- To understand how to implement the Mobile Money API to create recurring payment requests initiated by customers using a channel (e.g. app) provided by the mobile money provider.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("API Provider")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Service Providers")])]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("To understand how to implement the Mobile Money API to request recurring payment mandates against mobile money accounts.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("API Consumer")])])])])]],2),e._v(" "),n("TabSection",{directives:[{name:"show",rawName:"v-show",value:e.isActiveTab("Bill Payments"),expression:"isActiveTab('Bill Payments')"}]},[[n("h2",{attrs:{id:"introduction-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-2"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),n("p",[e._v("The Bill Payments Mobile Money APIs allow service providers to accept bill payments from mobile money customers.")]),e._v(" "),n("p",[e._v("For further reading, please refer to the following:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Getting Started")]),e._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),e._v(" "),n("li",[n("strong",[e._v("API Service Definition")]),e._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),e._v(" "),n("p",[e._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[e._v("GSMA Mobile Money API Developer Portal")]),e._v(".")],1),e._v(" "),n("h2",{attrs:{id:"intended-audience-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience-2"}},[e._v("#")]),e._v(" Intended Audience")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Audience")])]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Usage")])]),e._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Role")])])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Mobile Money Providers")])]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("To understand how to implement the Mobile Money API to make bill payments to service providers.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("API Consumer")])]),e._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[e._v("Service Providers")])]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("To understand how to implement the Mobile Money API to accept bill payments from Mobile Money Providers.")]),e._v(" "),n("td",{staticStyle:{"text-align":"left"}},[e._v("API Provider")])])])])]],2)],1)])])],e._v(" "),[n("section",{staticClass:"special-grid-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro section-intro--one-column"},[n("h2",{attrs:{id:"succeed-case-study"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#succeed-case-study"}},[e._v("#")]),e._v(" Succeed case study")])]),e._v(" "),n("case-study",{attrs:{imageLink:"/images/test.jpg"},scopedSlots:e._u([{key:"main-description",fn:function(){return[e._v("\nThe third party provides inclusive insurance services to multiple countries within the Sub-Saharan region. Services available include health, life, funeral and property insurance. The insurance provider is currently directly integrated with five MMPs, and working on expanding integrations with other MMPs. Working with MMPs, is expanding the reach of the insurance provider as the MMPs’ distributions tend to be higher, enabling the insurer to distribute services to consumers that have been traditionally excluded.\n        ")]},proxy:!0},{key:"first-description",fn:function(){return[e._v("\nThe drawback for the third-party insurance provider when dealing with multiple MMP integrations has included maintenance, costs and speed of integrations as the expectations tend to vary on a partner basis.\n        ")]},proxy:!0},{key:"second-description",fn:function(){return[e._v("\nTo continue reaching low income people, the insurance provider would benefit from integrating with a larger range of MMPs, enabling higher distribution. In addition, offering insurance as part of a bundle package can also increase mobile money usage as MMPs can cross-sell other services. \nCurrently, there is no Standardised API available for the Insurance Provider; however, having access to one will enable it to offer inclusive insurance to a wider range of users, particularly those in remote areas.\n        ")]},proxy:!0},{key:"title",fn:function(){return[e._v("\nInclusivity\n        ")]},proxy:!0},{key:"org-type",fn:function(){return[e._v("\nInsurance Provider\n        ")]},proxy:!0},{key:"use-case-links",fn:function(){return[n("p",[n("router-link",{attrs:{to:"/use-cases/bill-payments/"}},[e._v("Bill Payments")])],1),e._v(" "),n("p",[n("router-link",{attrs:{to:"/use-cases/recurring-payments/"}},[e._v("Recurring Payments")])],1)]},proxy:!0}])})],1)])],e._v(" "),[n("section",{staticClass:"get-started-section section--p-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro section-intro--narrow text-center"},[n("h2",{attrs:{id:"ready-to-explore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-explore"}},[e._v("#")]),e._v(" Ready to explore?")]),e._v(" "),n("div",{staticClass:"section-description"},[e._v("Find our latest API documentation.\n        ")])]),e._v(" "),n("div",{staticClass:"buttons-holder content-center get-started__btn-holder"},[e.borderedLink?n("router-link",{staticClass:"btn",attrs:{to:e.borderedLink.link}},[e._v(" "+e._s(e.borderedLink.text)+"\n        ")]):e._e(),e._v(" "),e.accentLink?n("router-link",{staticClass:"btn btn--accent",attrs:{to:e.accentLink.link}},[e._v(" "+e._s(e.accentLink.text)+"\n        ")]):e._e()],1)])])]],2)}),[],!1,null,null,null);t.default=c.exports}}]);
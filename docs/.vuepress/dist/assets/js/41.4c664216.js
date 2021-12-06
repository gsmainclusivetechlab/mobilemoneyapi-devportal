(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{410:function(t,e,n){"use strict";e.a={created:function(){this.activeTabName=this.tabs.length?this.tabs[0]:""},methods:{handleTabSwitch:function(t){this.activeTabName=t},isActiveTab:function(t){return t===this.activeTabName}}}},572:function(t,e,n){"use strict";n.r(e);var i=n(414),s=n.n(i),o=(n(415),n(416),n(410)),a={components:{VueSlickCarousel:s.a},data:function(){return{options:{dots:!0,arrows:!0,dotsClass:"testimonials__dots",infinite:!1,speed:500,slidesToShow:1},borderedLink:!1,accentLink:{text:"Start developing",link:"/examples"},tabs:["Agent Services"],activeTabName:""}},mixins:[o.a]},r=n(15),c=Object(r.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("IndustryHeroSection",{attrs:{imageSrc:"/images/industry-hero.jpg",imageAlt:"image alt"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n  Mobile Money Agents\n  ")]},proxy:!0},{key:"description",fn:function(){return[n("p",[t._v("Mobile money agents are the primary point of contact for mobile money account holders. Agents provide a support service where account holders can register for the mobile money service, cash-in and cash-out from their account.")])]},proxy:!0}])}),t._v(" "),[n("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro"},[n("h2",{attrs:{id:"use-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")])]),t._v(" "),n("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(e,i){return n("button",{key:"tab-button-"+i,staticClass:"btn btn-bordered",class:{"btn--accent":t.isActiveTab(e),"btn--inactive":!t.isActiveTab(e)},attrs:{type:"button"},on:{click:function(n){return t.handleTabSwitch(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),n("div",{staticClass:"tabs-holder"},[n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Agent Services"),expression:"isActiveTab('Agent Services')"}]},[[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("Agent Services comprises of the following:\n"),n("br"),n("br")]),t._v(" "),n("p",[n("strong",[t._v("Cash-in and Cash-out Services")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Agent-initiated Cash-out")]),t._v(". The agent initiates the cash-out and the mobile money customer is requested to authenticate the cash-out by the mobile money provider.")]),t._v(" "),n("li",[n("strong",[t._v("Customer-initiated Cash-out")]),t._v(". The mobile money customer initiates the payment by specifying the agent that is to be performing the cash-out.")]),t._v(" "),n("li",[n("strong",[t._v("Cash-out via Authorisation Code")]),t._v(". The customer generates an authorisation code up to a maximum amount. The agent then enters or scans (if rendered as a QR code) the code to perform the withdrawal.")]),t._v(" "),n("li",[n("strong",[t._v("Cash-in")]),t._v(". The agent initiates the cash-in by entering the customer account identifier(s).")])]),t._v(" "),n("p",[t._v("Closed loop and open-loop agent cash-in and cash-out are supported by the Mobile Money API. Closed loop cash-in/cash-out occurs where the agent and customer accounts reside with the same mobile money provider. Open loop cash-in/cash-out occurs where the agent and customer accounts reside with different mobile money providers.")]),t._v(" "),n("p",[t._v("Agents can be physical agents, i.e. customers that are serviced by an human, or can be an ATM.\n"),n("br"),n("br")]),t._v(" "),n("p",[n("strong",[t._v("Customer Account Services")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Customer Registration")]),t._v(". Agents can register new customers for mobile money.")]),t._v(" "),n("li",[n("strong",[t._v("KYC Verification")]),t._v(". Agents that provide KYC verification services can confirm that they have verified customer KYC.\n"),n("br"),n("br")])]),t._v(" "),n("p",[n("strong",[t._v("Further Reading")])]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"intended-audience"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to allow agents to perform cash-in, cash-out, customer registration and customer KYC verification services on behalf of mobile money customers.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Agents")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to service customer requests for cash-in, cash-out, registration and KYC verification.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])])]],2)],1)])])],t._v(" "),[n("section",{staticClass:"get-started-section section--p-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro section-intro--narrow text-center"},[n("h2",{attrs:{id:"ready-to-explore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-explore"}},[t._v("#")]),t._v(" Ready to explore?")]),t._v(" "),n("div",{staticClass:"section-description"},[t._v("Find our latest API documentation.\n        ")])]),t._v(" "),n("div",{staticClass:"buttons-holder content-center get-started__btn-holder"},[t.borderedLink?n("router-link",{staticClass:"btn",attrs:{to:t.borderedLink.link}},[t._v(" "+t._s(t.borderedLink.text)+"\n        ")]):t._e(),t._v(" "),t.accentLink?n("router-link",{staticClass:"btn btn--accent",attrs:{to:t.accentLink.link}},[t._v(" "+t._s(t.accentLink.text)+"\n        ")]):t._e()],1)])])]],2)}),[],!1,null,null,null);e.default=c.exports}}]);
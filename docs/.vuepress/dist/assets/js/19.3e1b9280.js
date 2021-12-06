(window.webpackJsonp=window.webpackJsonp||[]).push([[19,48,71,72],{411:function(t,e,n){"use strict";n.r(e);var i={name:"TabSection"},s=n(15),a=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item tabs__item--active"},[e("div",{staticClass:"tab-content"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=a.exports},412:function(t,e,n){"use strict";n.r(e);var i={name:"accordion",data:function(){return{isOpened:!1}}},s=n(15),a=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"accordion"},[e("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=a.exports},413:function(t,e,n){"use strict";n.r(e);n(125);var i={name:"accordion-item",props:{expanded:{type:Boolean},businessPage:{type:Boolean}},data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null,showElement:!0}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var t=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout((function(){t.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},s=n(15),a=Object(s.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:!t.showElement||t.businessPage,expression:"!showElement || businessPage"}],staticClass:"accordion__item",class:{"accordion__item--active":t.isOpened}},[n("div",{staticClass:"accordion__item-wrapper"},[n("div",{staticClass:"accordion__item-header",on:{click:t.openClose}},[n("div",{staticClass:"title"},[t._t("header")],2),t._v(" "),n("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),t._v(" "),n("div",{staticClass:"accordion__item-body",style:{height:t.isOpened?t.itemElementHeig:"0px"}},[n("div",{staticClass:"accordion__item-body-content"},[t._t("body")],2)])])])}),[],!1,null,null,null);e.default=a.exports},575:function(t,e,n){"use strict";n.r(e);var i=n(414),s=n.n(i),a=(n(415),n(416),n(411)),o=n(412),r=n(413),c={components:{VueSlickCarousel:s.a,AccordionItem:r.default,Accordion:o.default,TabSection:a.default},data:function(){return{options:{dots:!0,arrows:!0,dotsClass:"testimonials__dots",infinite:!1,speed:500,slidesToShow:1},borderedLink:!1,accentLink:{text:"Start developing",link:"/examples"},tabs:["P2P Transfers","Disbursements"],activeTabName:""}},created:function(){this.activeTabName=this.tabs.length?this.tabs[0]:""},methods:{handleTabSwitch:function(t){this.activeTabName=t},isActiveTab:function(t){return t===this.activeTabName}}},l=n(15),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("IndustryHeroSection",{attrs:{imageSrc:"/images/industry-hero.jpg",imageAlt:"image alt"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n  Humanitarian Agencies\n  ")]},proxy:!0},{key:"description",fn:function(){return[n("p",[t._v("Humanitarian agencies such as non-governmental organisations (NGOs) can use the GSMA Mobile Money API specification to increase the speed, efficiency, accountability and transparency on how cash disbursements are delivered.")])]},proxy:!0}])}),t._v(" "),[n("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro"},[n("h2",{attrs:{id:"use-cases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")])]),t._v(" "),n("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(e,i){return n("button",{key:"tab-button-"+i,staticClass:"btn btn-bordered",class:{"btn--accent":t.isActiveTab(e),"btn--inactive":!t.isActiveTab(e)},attrs:{type:"button"},on:{click:function(n){return t.handleTabSwitch(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),n("div",{staticClass:"tabs-holder"},[n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("P2P Transfers"),expression:"isActiveTab('P2P Transfers')"}]},[[n("h2",{attrs:{id:"introduction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The P2P Transfer Mobile Money APIs allow financial service providers (FSPs) to transfer funds from an account holding individual to another account holding individual or to a non-account holding individual (known as an unregistered customer). The API supports a wide number of financial service providers including mobile money providers, banks, and micro-finance institutions. The API supports ‘on-us’ P2P transfers (both accounts held within one FSP) and ‘off-us’ P2P transfers (accounts held in different FSPs). Bilateral and Switch-based transfers can be supported.")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started")]),t._v(". Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition")]),t._v(". Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1)]],2),t._v(" "),n("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Disbursements"),expression:"isActiveTab('Disbursements')"}]},[[n("h2",{attrs:{id:"introduction-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introduction-2"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),n("p",[t._v("The Disbursement Mobile Money APIs allow organisations to disburse funds to mobile money recipients.")]),t._v(" "),n("p",[t._v("For further reading, please refer to the following:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Getting Started.")]),t._v(" Specifies the design principles, behaviours, and error handling of the Mobile Money API.")]),t._v(" "),n("li",[n("strong",[t._v("API Service Definition.")]),t._v(" Documents all Mobile Money API endpoints, fields, objects, and enumerations.")])]),t._v(" "),n("p",[t._v("All documentation can be found on the "),n("RouterLink",{attrs:{to:"/api-versions-1.2/"}},[t._v("GSMA Mobile Money API Developer Portal")]),t._v(".")],1),t._v(" "),n("h2",{attrs:{id:"intended-audience"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intended-audience"}},[t._v("#")]),t._v(" Intended Audience")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Audience")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Usage")])]),t._v(" "),n("th",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Role")])])])]),t._v(" "),n("tbody",[n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Mobile Money Providers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to allow organisations to disburse payments in singular and in bulk.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Provider")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("NGOs")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to provide aid payments to mobile money recipients.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Government Departments")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to provide social credit payments to mobile money recipients.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])]),t._v(" "),n("tr",[n("td",{staticStyle:{"text-align":"left"}},[n("strong",[t._v("Employers")])]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("To understand how to implement the Mobile Money API to provide salary payments to mobile money recipients.")]),t._v(" "),n("td",{staticStyle:{"text-align":"left"}},[t._v("API Consumer")])])])])]],2)],1)])])],t._v(" "),[n("section",{staticClass:"special-grid-section section--m-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro section-intro--one-column"},[n("h2",{attrs:{id:"succeed-case-study"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#succeed-case-study"}},[t._v("#")]),t._v(" Succeed case study")])]),t._v(" "),n("case-study",{attrs:{imageLink:"/images/test.jpg"},scopedSlots:t._u([{key:"main-description",fn:function(){return[t._v("\nThe disbursement process has to be efficient and being directly integrated with the MNOs results in faster and more successful outreach. A lot of humanitarian work will be in non-urban areas, which might be more difficult to reach physically.  \nBeing able to distribute money via mobile wallets, which can be easily facilitated through integrations with MNOs, offers lot of convenience to the organisation’s disbursement process. The organisation is currently directly integrated with over 30 MNOs in various regions, mainly in the Sub-Saharan African region.\nAs an organisation, it works with two types of beneficiaries, those that receive a large chunk of money as a response to a disaster, and those that receive recurring payments, such as supplementary income. \n        ")]},proxy:!0},{key:"first-description",fn:function(){return[t._v("\nThe pandemic intensified the need for MNO integrations, for instance, it was easier to disburse money to women in slums in East Africa. Additionally, the advantages of disbursing directly to mobile wallets has been felt particularly when dealing with vulnerable women, who can access funds discreetly.\n        ")]},proxy:!0},{key:"second-description",fn:function(){return[t._v("\nOverall, the process is fast and secure. \nThe organisation favours API integrations is it feels it lowers the security risk associated with physical distribution, for both the beneficiary and the humanitarian worker. As an organisation that response to global crises, it would benefit from a Standard API which can allow it to connect to more MNOs in various regions globally.\n        ")]},proxy:!0},{key:"title",fn:function(){return[t._v("\nCellulant\n        ")]},proxy:!0},{key:"org-type",fn:function(){return[t._v("\nPayment Service Provider\n        ")]},proxy:!0},{key:"use-case-links",fn:function(){return[n("p",[n("router-link",{attrs:{to:"/use-cases/disbursements/"}},[t._v("Disbursements")])],1),t._v(" "),n("p",[n("router-link",{attrs:{to:"/use-cases/p-2-p-transfers/"}},[t._v("P2P transfers")])],1)]},proxy:!0}])})],1)])],t._v(" "),[n("section",{staticClass:"get-started-section section--p-gap"},[n("div",{staticClass:"container container--narrow"},[n("div",{staticClass:"section-intro section-intro--narrow text-center"},[n("h2",{attrs:{id:"ready-to-explore"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-explore"}},[t._v("#")]),t._v(" Ready to explore?")]),t._v(" "),n("div",{staticClass:"section-description"},[t._v("Find our latest API documentation.\n        ")])]),t._v(" "),n("div",{staticClass:"buttons-holder content-center get-started__btn-holder"},[t.borderedLink?n("router-link",{staticClass:"btn",attrs:{to:t.borderedLink.link}},[t._v(" "+t._s(t.borderedLink.text)+"\n        ")]):t._e(),t._v(" "),t.accentLink?n("router-link",{staticClass:"btn btn--accent",attrs:{to:t.accentLink.link}},[t._v(" "+t._s(t.accentLink.text)+"\n        ")]):t._e()],1)])])]],2)}),[],!1,null,null,null);e.default=d.exports}}]);
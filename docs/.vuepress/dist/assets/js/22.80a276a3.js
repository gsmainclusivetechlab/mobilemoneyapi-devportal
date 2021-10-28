(window.webpackJsonp=window.webpackJsonp||[]).push([[22,54,77,78],{336:function(t,e,s){"use strict";s.r(e);var i={name:"TabSection"},a=s(11),n=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item tabs__item--active"},[e("div",{staticClass:"tab-content"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=n.exports},337:function(t,e,s){"use strict";s.r(e);var i={name:"accordion",data:function(){return{isOpened:!1}}},a=s(11),n=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"accordion"},[e("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=n.exports},338:function(t,e,s){"use strict";s.r(e);s(101);var i={name:"accordion-item",props:{expanded:{type:Boolean},businessPage:{type:Boolean}},data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null,showElement:!0}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var t=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout((function(){t.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},a=s(11),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:!t.showElement||t.businessPage,expression:"!showElement || businessPage"}],staticClass:"accordion__item",class:{"accordion__item--active":t.isOpened}},[s("div",{staticClass:"accordion__item-wrapper"},[s("div",{staticClass:"accordion__item-header",on:{click:t.openClose}},[s("div",{staticClass:"title"},[t._t("header")],2),t._v(" "),s("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),t._v(" "),s("div",{staticClass:"accordion__item-body",style:{height:t.isOpened?t.itemElementHeig:"0px"}},[s("div",{staticClass:"accordion__item-body-content"},[t._t("body")],2)])])])}),[],!1,null,null,null);e.default=n.exports},486:function(t,e,s){"use strict";s.r(e);var i=s(340),a=s.n(i),n=(s(341),s(342),s(336)),o=s(337),c=s(338),r={components:{VueSlickCarousel:a.a,AccordionItem:c.default,Accordion:o.default,TabSection:n.default},data:function(){return{options:{dots:!0,arrows:!0,dotsClass:"testimonials__dots",infinite:!1,speed:500,slidesToShow:1},borderedLink:!1,accentLink:{text:"Start developing",link:"/examples"},tabs:["Merchant Payments","Recurring Payments"],activeTabName:""}},created:function(){this.activeTabName=this.tabs.length?this.tabs[0]:""},methods:{handleTabSwitch:function(t){this.activeTabName=t},isActiveTab:function(t){return t===this.activeTabName}}},l=s(11),d=Object(l.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("IndustryHeroSection",{attrs:{imageSrc:"/images/industry-hero.jpg",imageAlt:"image alt"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n  Merchants & Service Providers\n  ")]},proxy:!0},{key:"description",fn:function(){return[t._v("\n  A merchant service provider or merchant account provider is a \n  company or \n  service that gives you access to all the tools you need to handle those all-important transactions.\n  ")]},proxy:!0}])}),t._v(" "),[s("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[s("div",{staticClass:"container container--narrow"},[s("div",{staticClass:"section-intro"},[s("h2",{attrs:{id:"use-cases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")])]),t._v(" "),s("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(e,i){return s("button",{key:"tab-button-"+i,staticClass:"btn btn-bordered",class:{"btn--accent":t.isActiveTab(e),"btn--inactive":!t.isActiveTab(e)},attrs:{type:"button"},on:{click:function(s){return t.handleTabSwitch(e)}}},[t._v("\n          "+t._s(e)+"\n        ")])})),0),t._v(" "),s("div",{staticClass:"tabs-holder"},[s("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Merchant Payments"),expression:"isActiveTab('Merchant Payments')"}]},[t._v("\n          tab content will be here (1)\n        ")]),t._v(" "),s("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Recurring Payments"),expression:"isActiveTab('Recurring Payments')"}]},[t._v("\n          tab content will be here (5)\n        ")])],1)])])],t._v(" "),[s("section",{staticClass:"special-grid-section section--m-gap"},[s("div",{staticClass:"container container--narrow"},[s("div",{staticClass:"special-grid__container"},[s("div",{staticClass:"special-grid__block"},[s("div",{staticClass:"special-grid__image-holder"},[s("img",{attrs:{src:"/images/succeed-use-case.jpg",alt:"image alt"}})]),t._v(" "),s("div",{staticClass:"special-grid__content-holder"},[s("div",{staticClass:"section-intro__column"},[s("h2",{attrs:{id:"succeed-case-study"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#succeed-case-study"}},[t._v("#")]),t._v(" Succeed case study")]),t._v(" "),s("div",{staticClass:"section-description"},[t._v("\n                Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere\n                amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et\n                neque.\n              ")]),t._v(" "),s("ul",{staticClass:"case-list"},[s("li",{staticClass:"case-list__item"},[s("div",{staticClass:"bullet",staticStyle:{color:"#00568F"}}),t._v("\n                  Increased conversion\n                ")]),t._v(" "),s("li",{staticClass:"case-list__item"},[s("div",{staticClass:"bullet",staticStyle:{color:"#FF6600"}}),t._v("\n                  Important point\n                ")]),t._v(" "),s("li",{staticClass:"case-list__item"},[s("div",{staticClass:"bullet",staticStyle:{color:"#00A182"}}),t._v("\n                  Reduced errors\n                ")]),t._v(" "),s("li",{staticClass:"case-list__item"},[s("div",{staticClass:"bullet",staticStyle:{color:"#FCBB2C"}}),t._v("\n                  Important point\n                ")])])])])])])])])],t._v(" "),[s("section",{staticClass:"testimonials-section section--m-gap"},[s("div",{staticClass:"container container--narrow"},[s("div",{staticClass:"section-intro section-intro--one-column"},[s("h2",{attrs:{id:"testimonials"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#testimonials"}},[t._v("#")]),t._v(" Testimonials")])]),t._v(" "),s("div",{staticClass:"testimonials__slider-wrapper"},[s("VueSlickCarousel",t._b({ref:"slider",scopedSlots:t._u([{key:"prevArrow",fn:function(){return[s("div",{staticClass:"testimonials__arrow testimonials__arrow-prev"},[s("svg",{attrs:{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z",fill:"#242529"}})])])]},proxy:!0},{key:"nextArrow",fn:function(){return[s("div",{staticClass:"testimonials__arrow testimonials__arrow-next"},[s("svg",{attrs:{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z",fill:"#242529"}})])])]},proxy:!0}])},"VueSlickCarousel",t.options,!1),[s("div",[s("div",{staticClass:"testimonials__slide"},[s("div",{staticClass:"testimonials__content-holder"},[s("div",{staticClass:"testimonials__description"},[s("p",[t._v("Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.\n                    Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices\n                    ultrices integer urna, pharetra.")])]),t._v(" "),s("div",{staticClass:"testimonials__author"},[s("span",{staticClass:"testimonials__author--name"},[t._v("\n                    John Smith\n                  ")]),t._v(" "),s("span",{staticClass:"testimonials__author--position"},[t._v("\n                    Developer at Porto\n                  ")])])]),t._v(" "),s("div",{staticClass:"testimonials__image-holder"},[s("div",{staticClass:"testimonials__image-holder--container"},[s("div",{staticClass:"testimonials__icon-holder"},[s("svg",{attrs:{width:"64",height:"46",viewBox:"0 0 64 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z",fill:"#99CCCC"}})])]),t._v(" "),s("img",{attrs:{src:"/images/slide-item-1.jpg",alt:"John Smith"}})])])])])])],1)])])],t._v(" "),[s("section",{staticClass:"get-started-section section--p-gap"},[s("div",{staticClass:"container container--narrow"},[s("div",{staticClass:"section-intro section-intro--narrow text-center"},[s("h2",{attrs:{id:"ready-to-explore"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-explore"}},[t._v("#")]),t._v(" Ready to explore?")]),t._v(" "),s("div",{staticClass:"section-description"},[t._v("Find our latest API documentation.\n        ")])]),t._v(" "),s("div",{staticClass:"buttons-holder content-center get-started__btn-holder"},[t.borderedLink?s("router-link",{staticClass:"btn",attrs:{to:t.borderedLink.link}},[t._v(" "+t._s(t.borderedLink.text)+"\n        ")]):t._e(),t._v(" "),t.accentLink?s("router-link",{staticClass:"btn btn--accent",attrs:{to:t.accentLink.link}},[t._v(" "+t._s(t.accentLink.text)+"\n        ")]):t._e()],1)])])]],2)}),[],!1,null,null,null);e.default=d.exports}}]);
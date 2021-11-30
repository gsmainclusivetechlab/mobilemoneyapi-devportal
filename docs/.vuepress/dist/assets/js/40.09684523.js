(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{406:function(t,s,i){"use strict";s.a={created:function(){this.activeTabName=this.tabs.length?this.tabs[0]:""},methods:{handleTabSwitch:function(t){this.activeTabName=t},isActiveTab:function(t){return t===this.activeTabName}}}},547:function(t,s,i){"use strict";i.r(s);var e=i(410),a=i.n(e),n=(i(411),i(412),i(406)),o={components:{VueSlickCarousel:a.a},data:function(){return{options:{dots:!0,arrows:!0,dotsClass:"testimonials__dots",infinite:!1,speed:500,slidesToShow:1},borderedLink:!1,accentLink:{text:"Start developing",link:"/examples"},tabs:["Recurring Payments","Bill Payments"],activeTabName:""}},mixins:[n.a]},r=i(15),c=Object(r.a)(o,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("IndustryHeroSection",{attrs:{imageSrc:"/images/industry-hero.jpg",imageAlt:"image alt"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n  FinTech Providers (Insurance Savings Loans)\n  ")]},proxy:!0},{key:"description",fn:function(){return[i("p",[t._v("Fintech companies that provide services such as insurance and other digital financial services can use the GSMA API specification to enable their customer to make one-off bill payments or set up recurring payments for services such as subscriptions.")])]},proxy:!0}])}),t._v(" "),[i("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"section-intro"},[i("h2",{attrs:{id:"use-cases"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")])]),t._v(" "),i("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(s,e){return i("button",{key:"tab-button-"+e,staticClass:"btn btn-bordered",class:{"btn--accent":t.isActiveTab(s),"btn--inactive":!t.isActiveTab(s)},attrs:{type:"button"},on:{click:function(i){return t.handleTabSwitch(s)}}},[t._v("\n          "+t._s(s)+"\n        ")])})),0),t._v(" "),i("div",{staticClass:"tabs-holder"},[i("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Recurring Payments"),expression:"isActiveTab('Recurring Payments')"}]},[[t._v("\n  tab content will be here (5)\n")]],2),t._v(" "),i("TabSection",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("Bill Payments"),expression:"isActiveTab('Bill Payments')"}]},[[t._v("\n  tab content will be here (7)\n")]],2)],1)])])],t._v(" "),[i("section",{staticClass:"special-grid-section section--m-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"special-grid__container"},[i("div",{staticClass:"special-grid__block"},[i("div",{staticClass:"special-grid__image-holder"},[i("img",{attrs:{src:"/images/succeed-use-case.jpg",alt:"image alt"}})]),t._v(" "),i("div",{staticClass:"special-grid__content-holder"},[i("div",{staticClass:"section-intro__column"},[i("h2",{attrs:{id:"succeed-case-study"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#succeed-case-study"}},[t._v("#")]),t._v(" Succeed case study")]),t._v(" "),i("div",{staticClass:"section-description"},[t._v("\n                Dictumst habitasse ultrices elementum, consequat ultrices purus volutpat. Posuere\n                amet amet, cum justo bibendum morbi. Auctor interdum morbi non platea justo, et\n                neque.\n              ")]),t._v(" "),i("ul",{staticClass:"case-list"},[i("li",{staticClass:"case-list__item"},[i("div",{staticClass:"bullet",staticStyle:{color:"#00568F"}}),t._v("\n                  Increased conversion\n                ")]),t._v(" "),i("li",{staticClass:"case-list__item"},[i("div",{staticClass:"bullet",staticStyle:{color:"#FF6600"}}),t._v("\n                  Important point\n                ")]),t._v(" "),i("li",{staticClass:"case-list__item"},[i("div",{staticClass:"bullet",staticStyle:{color:"#00A182"}}),t._v("\n                  Reduced errors\n                ")]),t._v(" "),i("li",{staticClass:"case-list__item"},[i("div",{staticClass:"bullet",staticStyle:{color:"#FCBB2C"}}),t._v("\n                  Important point\n                ")])])])])])])])])],t._v(" "),[i("section",{staticClass:"testimonials-section section--m-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"section-intro section-intro--one-column"},[i("h2",{attrs:{id:"testimonials"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#testimonials"}},[t._v("#")]),t._v(" Testimonials")])]),t._v(" "),i("div",{staticClass:"testimonials__slider-wrapper"},[i("VueSlickCarousel",t._b({ref:"slider",scopedSlots:t._u([{key:"prevArrow",fn:function(){return[i("div",{staticClass:"testimonials__arrow testimonials__arrow-prev"},[i("svg",{attrs:{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z",fill:"#242529"}})])])]},proxy:!0},{key:"nextArrow",fn:function(){return[i("div",{staticClass:"testimonials__arrow testimonials__arrow-next"},[i("svg",{attrs:{width:"24",height:"20",viewBox:"0 0 24 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M14 0L12.57 1.393L20.15 9H0V11H20.15L12.57 18.573L14 20L24 10L14 0Z",fill:"#242529"}})])])]},proxy:!0}])},"VueSlickCarousel",t.options,!1),[i("div",[i("div",{staticClass:"testimonials__slide"},[i("div",{staticClass:"testimonials__content-holder"},[i("div",{staticClass:"testimonials__description"},[i("p",[t._v("Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.\n                    Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices\n                    ultrices integer urna, pharetra.")])]),t._v(" "),i("div",{staticClass:"testimonials__author"},[i("span",{staticClass:"testimonials__author--name"},[t._v("\n                    John Smith\n                  ")]),t._v(" "),i("span",{staticClass:"testimonials__author--position"},[t._v("\n                    Developer at Porto\n                  ")])])]),t._v(" "),i("div",{staticClass:"testimonials__image-holder"},[i("div",{staticClass:"testimonials__image-holder--container"},[i("div",{staticClass:"testimonials__icon-holder"},[i("svg",{attrs:{width:"64",height:"46",viewBox:"0 0 64 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z",fill:"#99CCCC"}})])]),t._v(" "),i("img",{attrs:{src:"/images/slide-item-1.jpg",alt:"John Smith"}})])])])]),t._v(" "),i("div",[i("div",{staticClass:"testimonials__slide"},[i("div",{staticClass:"testimonials__content-holder"},[i("div",{staticClass:"testimonials__description"},[i("p",[t._v("Quisque bibendum elit purus ultricies. Nam imperdiet praesent cursus congue euismod volutpat.\n                    Scelerisque hendrerit sagittis, sit aliquet id sodales dictum pellentesque quis. Lobortis ultrices\n                    ultrices integer urna, pharetra.")])]),t._v(" "),i("div",{staticClass:"testimonials__author"},[i("span",{staticClass:"testimonials__author--name"},[t._v("\n                    John Smith\n                  ")]),t._v(" "),i("span",{staticClass:"testimonials__author--position"},[t._v("\n                    Developer at Porto\n                  ")])])]),t._v(" "),i("div",{staticClass:"testimonials__image-holder"},[i("div",{staticClass:"testimonials__image-holder--container"},[i("div",{staticClass:"testimonials__icon-holder"},[i("svg",{attrs:{width:"64",height:"46",viewBox:"0 0 64 46",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M35.9646 46V26.7143C35.9646 17.5714 38.1357 10.9048 42.4779 6.71428C46.9145 2.42857 53.4749 0.190479 62.1593 0L64 9C53.9941 9.95238 49.3687 14.6667 50.1239 23.1429H58.9027V46H35.9646ZM0 46V26.7143C0 17.5714 2.17109 10.9048 6.51328 6.71428C10.9499 2.42857 17.5103 0.190479 26.1947 0L28.0354 9C18.0295 9.95238 13.4041 14.6667 14.1593 23.1429H22.9381V46H0Z",fill:"#99CCCC"}})])]),t._v(" "),i("img",{attrs:{src:"/images/slide-item-1.jpg",alt:"John Smith"}})])])])])])],1)])])],t._v(" "),[i("section",{staticClass:"get-started-section section--p-gap"},[i("div",{staticClass:"container container--narrow"},[i("div",{staticClass:"section-intro section-intro--narrow text-center"},[i("h2",{attrs:{id:"ready-to-explore"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ready-to-explore"}},[t._v("#")]),t._v(" Ready to explore?")]),t._v(" "),i("div",{staticClass:"section-description"},[t._v("Find our latest API documentation.\n        ")])]),t._v(" "),i("div",{staticClass:"buttons-holder content-center get-started__btn-holder"},[t.borderedLink?i("router-link",{staticClass:"btn",attrs:{to:t.borderedLink.link}},[t._v(" "+t._s(t.borderedLink.text)+"\n        ")]):t._e(),t._v(" "),t.accentLink?i("router-link",{staticClass:"btn btn--accent",attrs:{to:t.accentLink.link}},[t._v(" "+t._s(t.accentLink.text)+"\n        ")]):t._e()],1)])])]],2)}),[],!1,null,null,null);s.default=c.exports}}]);
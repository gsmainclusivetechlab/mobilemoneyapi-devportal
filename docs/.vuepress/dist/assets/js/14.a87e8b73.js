(window.webpackJsonp=window.webpackJsonp||[]).push([[14,30,42,77],{337:function(t,e,a){"use strict";a.r(e);var i={name:"TabSection",props:["isActive"],data:function(){return{tabTitle:"Bill Payments"}}},s=a(11),n=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=n.exports},341:function(t,e,a){"use strict";a.r(e);var i={name:"bill-payments-tab",components:{TabSection:a(337).default},props:["isActive"],data:function(){return{tabTitle:"Bill Payments"}}},s=a(11),n=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("TabSection",{attrs:{isActive:this.isActive}},[this._v("\n  tab content will be here (7)\n")])}),[],!1,null,null,null);e.default=n.exports},342:function(t,e,a){"use strict";a.r(e);var i={name:"recurring-payments-tab",props:["isActive"],data:function(){return{tabTitle:"Recurring Payments"}}},s=a(11),n=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("TabSection",{attrs:{isActive:this.isActive}},[this._v("\n  tab content will be here (5)\n")])}),[],!1,null,null,null);e.default=n.exports},491:function(t,e,a){"use strict";a.r(e);a(75);var i=a(342),s=a(341),n={recurringPaymentsTab:i.default,billPaymentsTab:s.default},c={name:"use-cases-energy-utilities-agritech-with-tabs",components:n,props:["defaultTab"],data:function(){return{tabs:n,activeTabName:""}},created:function(){this.setStartActiveTab()},methods:{handleTabSwitch:function(t){this.activeTabName=t},getTabTitle:function(t){return t.data().tabTitle},setStartActiveTab:function(){this.activeTabName=this.getTabTitle(this.tabs["".concat(Object.keys(this.tabs)[this.defaultTab?this.defaultTab-1:0])])}}},l=a(11),r=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[a("div",{staticClass:"container container--narrow"},[t._m(0),t._v(" "),a("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(e,i){return a("button",{key:"tab-button-"+i,staticClass:"btn btn-bordered",class:{"btn--accent":t.getTabTitle(e)===t.activeTabName,"btn--inactive":t.getTabTitle(e)!==t.activeTabName},attrs:{type:"button"},on:{click:function(a){t.handleTabSwitch(t.getTabTitle(e))}}},[t._v("\n        "+t._s(t.getTabTitle(e))+"\n      ")])})),0),t._v(" "),t._l(t.tabs,(function(e,i){return a("div",{key:"tab-"+i,staticClass:"tabs-holder"},[t.getTabTitle(e)===t.activeTabName?a(e,{tag:"component",attrs:{isActive:t.getTabTitle(e)===t.activeTabName}}):t._e()],1)}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-intro"},[e("h2",{staticClass:"h2 section-title"},[this._v("Use cases")])])}],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14,53,57],{320:function(t,e,a){"use strict";a.r(e);var s={name:"bill-payments-tab",props:["isActive"],data:function(){return{tabTitle:"Bill Payments"}}},i=a(24),n=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (7)\n  ")])])}),[],!1,null,null,null);e.default=n.exports},321:function(t,e,a){"use strict";a.r(e);var s={name:"recurring-payments-tab",props:["isActive"],data:function(){return{tabTitle:"Recurring Payments"}}},i=a(24),n=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (5)\n  ")])])}),[],!1,null,null,null);e.default=n.exports},433:function(t,e,a){"use strict";a.r(e);a(96);var s=a(321),i=a(320),n={recurringPaymentsTab:s.default,billPaymentsTab:i.default},c={name:"use-cases-energy-utilities-agritech-with-tabs",components:n,props:["defaultTab"],data:function(){return{tabs:n,activeTabName:""}},created:function(){this.setStartActiveTab()},methods:{handleTabSwitch:function(t){this.activeTabName=t},getTabTitle:function(t){return t.data().tabTitle},setStartActiveTab:function(){this.activeTabName=this.getTabTitle(this.tabs["".concat(Object.keys(this.tabs)[this.defaultTab?this.defaultTab-1:0])])}}},l=a(24),b=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[a("div",{staticClass:"container container--narrow"},[t._m(0),t._v(" "),a("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(e,s){return a("button",{key:"tab-button-"+s,staticClass:"btn btn-bordered",class:{"btn--accent":t.getTabTitle(e)===t.activeTabName,"btn--inactive":t.getTabTitle(e)!==t.activeTabName},attrs:{type:"button"},on:{click:function(a){t.handleTabSwitch(t.getTabTitle(e))}}},[t._v("\n        "+t._s(t.getTabTitle(e))+"\n      ")])})),0),t._v(" "),t._l(t.tabs,(function(e,s){return a("div",{key:"tab-"+s,staticClass:"tabs-holder"},[t.getTabTitle(e)===t.activeTabName?a(e,{tag:"component",attrs:{isActive:t.getTabTitle(e)===t.activeTabName}}):t._e()],1)}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-intro"},[e("h2",{staticClass:"h2 section-title"},[this._v("Use cases")])])}],!1,null,null,null);e.default=b.exports}}]);
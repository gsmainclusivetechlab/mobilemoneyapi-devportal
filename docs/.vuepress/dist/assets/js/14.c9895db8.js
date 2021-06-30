(window.webpackJsonp=window.webpackJsonp||[]).push([[14,53,54],{359:function(t,e,a){"use strict";a.r(e);var i={name:"account-linking-tab",props:["isActive"],data:function(){return{tabTitle:"Account Linking"}}},s=a(24),n=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[this._v("\n    tab content will be here (6)\n  ")])])}),[],!1,null,null,null);e.default=n.exports},362:function(t,e,a){"use strict";a.r(e);var i={name:"agent-services-tab",props:["isActive"],data:function(){return{tabTitle:"Agent Services"}}},s=a(24),n=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"use-case-tab tabs__item",class:{"tabs__item--active":this.isActive}},[e("div",{staticClass:"tab-content"},[e("div",{staticClass:"text-box"},[e("p",[this._v("The Merchant Payment Mobile Money APIs allow merchants to accept payments from mobile money customers. Supported payment mechanisms include:")]),this._v(" "),this._m(0),this._v(" "),e("router-link",{staticClass:"btn btn--transparent",attrs:{to:"#"}},[this._v("\n        Start developing\n      ")])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("b",[this._v("Payee-initiated merchant payment.")]),this._v(" The merchant initiates the payment and the payer is requested to authenticate to confirm acceptance by the mobile money provider. "),e("br"),this._v(" "),e("b",[this._v("Payer-initiated merchant payment.")]),this._v(" The payer initiates the payment by specifying the merchant that is to be paid.\n      "),e("b",[this._v("Merchant payment via pre-authorised payment code.")]),this._v(" The payer generates a payment authorisation code up to a maximum payment amount. The merchant then enters or scans (if rendered as a QR code) the payer’s code to perform the payment.")])}],!1,null,null,null);e.default=n.exports},440:function(t,e,a){"use strict";a.r(e);a(96);var i=a(415),s=a(359),n=a(362),c={p2pTransfersCaseTab:i.default,accountLinkingTab:s.default,agentServicesTab:n.default},r={name:"use-cases-banks-microfinance-institutions-with-tabs",components:c,props:["defaultTab"],data:function(){return{tabs:c,activeTabName:""}},created:function(){this.setStartActiveTab()},methods:{handleTabSwitch:function(t){this.activeTabName=t},getTabTitle:function(t){return t.data().tabTitle},setStartActiveTab:function(){this.activeTabName=this.getTabTitle(this.tabs["".concat(Object.keys(this.tabs)[this.defaultTab?this.defaultTab-1:0])])}}},o=a(24),l=Object(o.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"use-cases-tabs-section tabs-section section--m-gap"},[a("div",{staticClass:"container container--narrow"},[t._m(0),t._v(" "),a("div",{staticClass:"tabs-buttons"},t._l(t.tabs,(function(e,i){return a("button",{key:"tab-button-"+i,staticClass:"btn btn-bordered",class:{"btn--accent":t.getTabTitle(e)===t.activeTabName,"btn--inactive":t.getTabTitle(e)!==t.activeTabName},attrs:{type:"button"},on:{click:function(a){t.handleTabSwitch(t.getTabTitle(e))}}},[t._v("\n        "+t._s(t.getTabTitle(e))+"\n      ")])})),0),t._v(" "),t._l(t.tabs,(function(e,i){return a("div",{key:"tab-"+i,staticClass:"tabs-holder"},[t.getTabTitle(e)===t.activeTabName?a(e,{tag:"component",attrs:{isActive:t.getTabTitle(e)===t.activeTabName}}):t._e()],1)}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-intro"},[e("h2",{staticClass:"h2 section-title"},[this._v("Use cases")])])}],!1,null,null,null);e.default=l.exports}}]);
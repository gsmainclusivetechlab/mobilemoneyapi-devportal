(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{326:function(t,a,e){"use strict";e.r(a);var s={name:"dashboard-modal",data:function(){return{tooltipPopupIsVisible:!1,items:["GSMA Mobile Money API v1.2 OAuth_Simulator","GSMA Mobile Money API v1.1 OAuth_Simulator","GSMA Mobile Money API v1.0 OAuth_Simulator"]}},methods:{handleModalClose:function(){this.$emit("close-modal")}}},o=e(24),i=Object(o.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-modal"},[e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"modal-container"},[e("button",{staticClass:"close-btn",on:{click:t.handleModalClose}}),t._v(" "),e("span",{staticClass:"modal-title"},[t._v("Create app")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"input-wrap input-wrapper__custom-select"},[e("label",{attrs:{for:"product-name"}},[t._v("Product\n          "),e("div",{staticClass:"tooltip-wrap"},[e("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(a){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(a){t.tooltipPopupIsVisible=!1}}},[t._v("?")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])])]),t._v(" "),e("v-select",{attrs:{"return-object":"",id:"product-name",name:"country",clearable:!1,options:t.items,placeholder:"Select product"}})],1),t._v(" "),e("div",{staticClass:"btn-row"},[e("button",{staticClass:"cancel-btn btn btn--link",attrs:{type:"button"},on:{click:t.handleModalClose}},[t._v("Cancel")]),t._v(" "),e("button",{staticClass:"btn btn btn--accent",attrs:{type:"button"}},[t._v("Create app")])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-wrap"},[a("label",{attrs:{for:"app-name"}},[this._v("App name")]),this._v(" "),a("input",{attrs:{id:"app-name",type:"text",placeholder:"Enter app name"}})])}],!1,null,null,null);a.default=i.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{419:function(t,e,a){"use strict";a.r(e);var o=a(35),s=(a(85),{name:"dashboard-modal",data:function(){return{tooltipPopupIsVisible:!1,items:["GSMA Mobile Money API v1.2 OAuth_Simulator","GSMA Mobile Money API v1.1 OAuth_Simulator","GSMA Mobile Money API v1.0 OAuth_Simulator"],form:{appName:"",usagePlan:""}}},methods:{handleModalClose:function(){this.$emit("close-modal")},createApp:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("post-app"),e.next=3,t.$store.dispatch("application/postApp",t.form).then((function(){})).catch((function(){console.log("error")}));case 3:case"end":return e.stop()}}),e)})))()}}}),n=a(15),r=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-modal"},[a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"modal-container"},[a("button",{staticClass:"close-btn",on:{click:t.handleModalClose}}),t._v(" "),a("span",{staticClass:"modal-title"},[t._v("Create app")]),t._v(" "),a("ValidationObserver",{ref:"create-app",scopedSlots:t._u([{key:"default",fn:function(e){var o=e.invalid,s=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),s(t.createApp)}}},[a("ValidationProvider",{staticClass:"input-wrap",attrs:{vid:"app-name",rules:{required:{allowFalse:!1},min:2},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[a("label",{attrs:{for:"app-name"}},[t._v("\n              App name\n              "),a("span",{directives:[{name:"show",rawName:"v-show",value:o[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(o[0])+")")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.appName,expression:"form.appName"}],attrs:{type:"text",id:"app-name",placeholder:"Enter app name"},domProps:{value:t.form.appName},on:{input:function(e){e.target.composing||t.$set(t.form,"appName",e.target.value)}}})]}}],null,!0)}),t._v(" "),a("ValidationProvider",{staticClass:"input-wrap input-wrapper__custom-select",attrs:{vid:"product-name",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[a("label",{attrs:{for:"product-name"}},[t._v("Product\n              "),a("div",{staticClass:"tooltip-wrap"},[a("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(e){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(e){t.tooltipPopupIsVisible=!1}}},[t._v("?\n                ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:o[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(o[0])+")")])]),t._v(" "),a("v-select",{attrs:{"return-object":"",id:"product-name",name:"country",clearable:!1,options:t.items,placeholder:"Select product"},model:{value:t.form.usagePlan,callback:function(e){t.$set(t.form,"usagePlan",e)},expression:"form.usagePlan"}})]}}],null,!0)}),t._v(" "),a("div",{staticClass:"btn-row"},[a("button",{staticClass:"cancel-btn btn btn--link",attrs:{type:"button"},on:{click:t.handleModalClose}},[t._v("Cancel")]),t._v(" "),a("button",{staticClass:"btn btn btn--accent",attrs:{disabled:o,type:"submit"}},[t._v("Create app")])])],1)]}}])})],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);
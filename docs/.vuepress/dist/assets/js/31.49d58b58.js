(window.webpackJsonp=window.webpackJsonp||[]).push([[31,57,62],{388:function(e,t,a){"use strict";a.r(t);var i={name:"spinner-component",props:{table:{type:Boolean,default:!1}}},n=a(17),s=Object(n.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"icon-spinner",class:{"icon-spinner--table":this.table}})}),[],!1,null,null,null);t.default=s.exports},409:function(e,t,a){"use strict";a.r(t);a(125);var i={name:"DashboardCopyButton",data:function(){return{copyActive:!1}},props:["value"],methods:{copyToClipboard:function(){var e=this;navigator.clipboard.writeText(this.value).then((function(){e.copyActive=!0,setTimeout((function(){e.copyActive=!1}),1e3)})).catch((function(e){console.error("Async: Could not copy text: ",e)}))}}},n=a(17),s=Object(n.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("button",{staticClass:"copy-btn",attrs:{type:"button"},on:{click:this.copyToClipboard}},[t("img",{attrs:{src:"/images/copy-icon.svg",alt:""}})]),this._v(" "),t("span",{staticClass:"copy-popup",class:{"copy-popup__active":this.copyActive}},[this._v("Copied to clipboard!")])])}),[],!1,null,null,null);t.default=s.exports},446:function(e,t,a){"use strict";a.r(t);var i=a(7),n=a(3),s=(a(125),a(33),a(409)),o=a(91),c=a(388),p=a(37),l={name:"applications-child",components:{SpinnerComponent:c.default,DashboardCopyButton:s.default},data:function(){return{tabTitle:"Applications child",editBtnEnabled:!0,tooltipPopupIsVisible:!1,form:{appName:"",usagePlan:""},waitingResponseUpdate:!1,waitingResponseDelete:!1}},computed:Object(n.a)(Object(n.a)({},Object(o.b)("usagePlans",["getPublishedUsagePlans"])),Object(o.c)("application",["selectedApplication"])),created:function(){this.form.appName=this.selectedApplication.appName,this.form.usagePlan=this.selectedApplication.usagePlan},beforeDestroy:function(){this.$store.commit("application/clearSelectedApplication")},methods:{editApp:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.waitingResponseUpdate=!0,t.prev=1,e.waitingResponseUpdate=!0,t.next=5,e.$store.dispatch("application/updateAppById",e.form);case 5:e.handleEditClick(!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:return t.prev=11,e.waitingResponseUpdate=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},handleEditClick:function(e){this.editBtnEnabled=e},copyToClipboard:function(e){var t=e.currentTarget.getAttribute("data-bind");navigator.clipboard.writeText(this[t]).then((function(){}),(function(e){console.error("Async: Could not copy text: ",e)}));var a=document.querySelectorAll('span[data-bind="'.concat(t,'"]'));a[0].style.opacity=1,setTimeout((function(){a[0].style.transition="opacity ease-in-out 1.5s"}),0),setTimeout((function(){a[0].style.opacity=0}),0),a[0].style.transition="none"},deleteApplication:function(e){var t=this;return Object(i.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.waitingResponseDelete=!0,a.next=3,p.a.openDialog();case 3:if(!a.sent){a.next=8;break}return a.next=7,t.$store.dispatch("application/deleteAppById");case 7:t.$emit("close-application",e);case 8:t.waitingResponseDelete=!1;case 9:case"end":return a.stop()}}),a)})))()}}},r=a(17),u=Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-content"},[a("div",{staticClass:"application-flex-container"},[a("div",{staticClass:"application-title-info-wrap"},[a("h3",{staticClass:"content-title"},[e._v(e._s(e.selectedApplication.appName))]),e._v(" "),a("div",{staticClass:"applications-title-info"},[a("div",{staticClass:"item"},[a("span",{staticClass:"item-title"},[e._v("Created")]),e._v(" "),a("span",{staticClass:"item-value"},[e._v(e._s(e.selectedApplication.keyIssued))])]),e._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"item-title"},[e._v("Expire")]),e._v(" "),a("span",{staticClass:"item-value"},[e._v(e._s(e.selectedApplication.expires))])])])]),e._v(" "),a("div",{staticClass:"application-info-container"},[a("div",{staticClass:"application-info-title-wrap"},[a("span",{staticClass:"application-info-title"},[e._v("Application details")]),e._v(" "),e.editBtnEnabled?a("button",{staticClass:"btn btn--transparent edit-btn",attrs:{type:"button"},on:{click:function(t){return e.handleEditClick(!1)}}},[e._v("Edit\n        ")]):e._e()]),e._v(" "),a("div",{staticClass:"fields-wrap"},[a("ValidationObserver",{ref:"application-details",scopedSlots:e._u([{key:"default",fn:function(t){t.invalid;var i=t.handleSubmit;return[a("form",{on:{submit:function(t){return t.preventDefault(),i(e.editApp)}}},[a("ValidationProvider",{staticClass:"input-group",attrs:{vid:"appName",rules:{required:{allowFalse:!1},min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("label",{attrs:{for:"appName"}},[e._v("\n                App name\n                "),a("span",{directives:[{name:"show",rawName:"v-show",value:i[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(i[0])+")")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.appName,expression:"form.appName"}],attrs:{type:"text",id:"appName",disabled:e.editBtnEnabled,placeholder:"Enter app name"},domProps:{value:e.form.appName},on:{input:function(t){t.target.composing||e.$set(e.form,"appName",t.target.value)}}})]}}],null,!0)}),e._v(" "),a("ValidationProvider",{staticClass:"input-group input-wrapper__custom-select",attrs:{vid:"product",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.errors;return[a("label",{attrs:{for:"product"}},[e._v("Product\n                "),a("div",{staticClass:"tooltip-wrap"},[a("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(t){e.tooltipPopupIsVisible=!e.tooltipPopupIsVisible},focusout:function(t){e.tooltipPopupIsVisible=!1}}},[e._v("?\n                  ")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[e._v("Here you can select product version")])]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:i[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(i[0])+")")])]),e._v(" "),a("v-select",{attrs:{"return-object":"",id:"product",name:"product",clearable:!1,options:e.getPublishedUsagePlans,disabled:e.editBtnEnabled,reduce:function(e){return e.value},placeholder:"Select product"},model:{value:e.form.usagePlan,callback:function(t){e.$set(e.form,"usagePlan",t)},expression:"form.usagePlan"}})]}}],null,!0)}),e._v(" "),a("div",{staticClass:"update-btn-wrap"},[e.editBtnEnabled?e._e():a("button",{staticClass:"btn btn--accent update-btn",attrs:{type:"submit",disabled:e.waitingResponseUpdate}},[e.waitingResponseUpdate?a("spinner-component"):a("span",[e._v("Update")])],1)])],1)]}}])}),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"input-group key-group"},[a("label",{attrs:{for:"consumerKey"}},[e._v("Consumer key")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedApplication.consumerKey,expression:"selectedApplication.consumerKey"}],attrs:{type:"text",id:"consumerKey",readonly:""},domProps:{value:e.selectedApplication.consumerKey},on:{input:function(t){t.target.composing||e.$set(e.selectedApplication,"consumerKey",t.target.value)}}}),e._v(" "),a("dashboard-copy-button",{model:{value:e.selectedApplication.consumerKey,callback:function(t){e.$set(e.selectedApplication,"consumerKey",t)},expression:"selectedApplication.consumerKey"}})],1),e._v(" "),a("div",{staticClass:"input-group key-group"},[a("label",{attrs:{for:"consumerSecret"}},[e._v("Consumer secret")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedApplication.consumerSecret,expression:"selectedApplication.consumerSecret"}],attrs:{type:"text",id:"consumerSecret",readonly:""},domProps:{value:e.selectedApplication.consumerSecret},on:{input:function(t){t.target.composing||e.$set(e.selectedApplication,"consumerSecret",t.target.value)}}}),e._v(" "),a("dashboard-copy-button",{model:{value:e.selectedApplication.consumerSecret,callback:function(t){e.$set(e.selectedApplication,"consumerSecret",t)},expression:"selectedApplication.consumerSecret"}})],1),e._v(" "),a("div",{staticClass:"input-group key-group"},[a("label",{attrs:{for:"apiKey"}},[e._v("API key")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedApplication.apiKey,expression:"selectedApplication.apiKey"}],attrs:{type:"text",id:"apiKey",readonly:""},domProps:{value:e.selectedApplication.apiKey},on:{input:function(t){t.target.composing||e.$set(e.selectedApplication,"apiKey",t.target.value)}}}),e._v(" "),a("dashboard-copy-button",{model:{value:e.selectedApplication.apiKey,callback:function(t){e.$set(e.selectedApplication,"apiKey",t)},expression:"selectedApplication.apiKey"}})],1)],1)]),e._v(" "),a("div",{staticClass:"application-control-buttons"},[a("button",{staticClass:"delete-btn btn btn--accent",attrs:{type:"button",disabled:e.waitingResponseDelete},on:{click:e.deleteApplication}},[e.waitingResponseDelete?a("spinner-component"):a("span",[e._v("Delete")])],1)])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"info-text"},[t("p",[this._v("\n            Below are keys you can use to access the Product (Usage Plan) associated with this application. The actual keys are capable of accessing any of the URIS defined in the Product (Usage\n            Plan).\n          ")])])}],!1,null,null,null);t.default=u.exports}}]);
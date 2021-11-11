(window.webpackJsonp=window.webpackJsonp||[]).push([[27,47],{413:function(t,e,a){"use strict";a.r(e);a(121);var s={name:"DashboardCopyButton",data:function(){return{copyActive:!1}},props:["value"],methods:{copyToClipboard:function(){var t=this;navigator.clipboard.writeText(this.value).then((function(){t.copyActive=!0,setTimeout((function(){t.copyActive=!1}),1e3)})).catch((function(t){console.error("Async: Could not copy text: ",t)}))}}},i=a(15),o=Object(i.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("button",{staticClass:"copy-btn",attrs:{type:"button"},on:{click:this.copyToClipboard}},[e("img",{attrs:{src:"/images/copy-icon.svg",alt:""}})]),this._v(" "),e("span",{staticClass:"copy-popup",class:{"copy-popup__active":this.copyActive}},[this._v("Copied to clipboard!")])])}),[],!1,null,null,null);e.default=o.exports},444:function(t,e,a){"use strict";a.r(e);var s=a(34),i=(a(121),a(83),{name:"applications-child",components:{DashboardCopyButton:a(413).default},data:function(){return{tabTitle:"Applications child",items:["GSMA Mobile Money API v1.2 OAuth_Simulator","GSMA Mobile Money API v1.1 OAuth_Simulator","GSMA Mobile Money API v1.0 OAuth_Simulator"],appDetailsDisabled:!0,editBtnEnabled:!0,appNameVar:this.appName,productBindVar:this.usagePlan,tooltipPopupIsVisible:!1,form:{appName:"",usagePlan:""}}},props:["appName","keyIssue","expires","usagePlan","consumerKey","consumerSecret","apiKey"],created:function(){this.form.appName=this.appName,this.form.usagePlan=this.usagePlan},methods:{editApp:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("put-app"),"123","456",e.next=5,t.$store.dispatch("application/updateAppByID",{data:t.form,developerId:"123",appId:"456"}).then((function(){})).catch((function(){console.log("error")}));case 5:case"end":return e.stop()}}),e)})))()},handleEditClick:function(){this.appDetailsDisabled=!this.appDetailsDisabled,this.editBtnEnabled=!1},handleUpdateClick:function(){this.$emit("update-data"),this.appDetailsDisabled=!0,this.editBtnEnabled=!0},copyToClipboard:function(t){var e=t.currentTarget.getAttribute("data-bind");navigator.clipboard.writeText(this[e]).then((function(){}),(function(t){console.error("Async: Could not copy text: ",t)}));var a=document.querySelectorAll('span[data-bind="'.concat(e,'"]'));a[0].style.opacity=1,setTimeout((function(){a[0].style.transition="opacity ease-in-out 1.5s"}),0),setTimeout((function(){a[0].style.opacity=0}),0),a[0].style.transition="none"}}}),o=a(15),n=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content"},[a("div",{staticClass:"application-flex-container"},[a("div",{staticClass:"application-title-info-wrap"},[a("h3",{staticClass:"content-title"},[t._v(t._s(t.appName))]),t._v(" "),a("div",{staticClass:"applications-title-info"},[a("div",{staticClass:"item"},[a("span",{staticClass:"item-title"},[t._v("Created")]),t._v(" "),a("span",{staticClass:"item-value"},[t._v(t._s(t.keyIssue))])]),t._v(" "),a("div",{staticClass:"item"},[a("span",{staticClass:"item-title"},[t._v("Expire")]),t._v(" "),a("span",{staticClass:"item-value"},[t._v(t._s(t.expires))])])])]),t._v(" "),a("div",{staticClass:"application-info-container"},[a("div",{staticClass:"application-info-title-wrap"},[a("span",{staticClass:"application-info-title"},[t._v("Application details")]),t._v(" "),t.editBtnEnabled?a("button",{staticClass:"btn btn--transparent edit-btn",attrs:{type:"button"},on:{click:function(e){return t.handleEditClick()}}},[t._v("Edit\n        ")]):t._e()]),t._v(" "),a("div",{staticClass:"fields-wrap"},[a("ValidationObserver",{ref:"application-details",scopedSlots:t._u([{key:"default",fn:function(e){e.invalid;var s=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),s(t.editApp)}}},[a("ValidationProvider",{staticClass:"input-group",attrs:{vid:"appName",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:"appName"}},[t._v("\n                App name\n                "),a("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.appName,expression:"form.appName"}],attrs:{type:"text",id:"appName",disabled:t.appDetailsDisabled,placeholder:"Enter app name"},domProps:{value:t.form.appName},on:{input:function(e){e.target.composing||t.$set(t.form,"appName",e.target.value)}}})]}}],null,!0)}),t._v(" "),a("ValidationProvider",{staticClass:"input-group input-wrapper__custom-select",attrs:{vid:"product",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:"product"}},[t._v("Product\n                "),a("div",{staticClass:"tooltip-wrap"},[a("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(e){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(e){t.tooltipPopupIsVisible=!1}}},[t._v("?\n                  ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),a("v-select",{attrs:{"return-object":"",id:"product",name:"product",clearable:!1,options:t.items,disabled:t.appDetailsDisabled,placeholder:"Select product"},model:{value:t.form.usagePlan,callback:function(e){t.$set(t.form,"usagePlan",e)},expression:"form.usagePlan"}})]}}],null,!0)}),t._v(" "),a("div",{staticClass:"update-btn-wrap"},[t.editBtnEnabled?t._e():a("button",{staticClass:"btn btn--accent update-btn",attrs:{type:"submit"}},[t._v("Update\n              ")])])],1)]}}])}),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"input-group key-group"},[a("label",{attrs:{for:"consumerKey"}},[t._v("Consumer key")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.consumerKey,expression:"consumerKey"}],attrs:{type:"text",id:"consumerKey",readonly:""},domProps:{value:t.consumerKey},on:{input:function(e){e.target.composing||(t.consumerKey=e.target.value)}}}),t._v(" "),a("dashboard-copy-button",{model:{value:t.consumerKey,callback:function(e){t.consumerKey=e},expression:"consumerKey"}})],1),t._v(" "),a("div",{staticClass:"input-group key-group"},[a("label",{attrs:{for:"consumerSecret"}},[t._v("Consumer secret")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.consumerSecret,expression:"consumerSecret"}],attrs:{type:"text",id:"consumerSecret",readonly:""},domProps:{value:t.consumerSecret},on:{input:function(e){e.target.composing||(t.consumerSecret=e.target.value)}}}),t._v(" "),a("dashboard-copy-button",{model:{value:t.consumerSecret,callback:function(e){t.consumerSecret=e},expression:"consumerSecret"}})],1),t._v(" "),a("div",{staticClass:"input-group key-group"},[a("label",{attrs:{for:"apiKey"}},[t._v("API key")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.apiKey,expression:"apiKey"}],attrs:{type:"text",id:"apiKey",readonly:""},domProps:{value:t.apiKey},on:{input:function(e){e.target.composing||(t.apiKey=e.target.value)}}}),t._v(" "),a("dashboard-copy-button",{model:{value:t.apiKey,callback:function(e){t.apiKey=e},expression:"apiKey"}})],1)],1)]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"info-text"},[e("p",[this._v("\n            Below are keys you can use to access the Product (Usage Plan) associated with this application. The actual keys are capable of accessing any of the URIS defined in the Product (Usage Plan).\n          ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"application-control-buttons"},[e("button",{staticClass:"delete-btn btn btn--transparent",attrs:{type:"button"}},[this._v("Delete")])])}],!1,null,null,null);e.default=n.exports}}]);
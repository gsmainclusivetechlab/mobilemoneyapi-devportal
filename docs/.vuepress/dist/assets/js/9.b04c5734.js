(window.webpackJsonp=window.webpackJsonp||[]).push([[9,19,20,48,49,50,51],{346:function(t,a,e){"use strict";e.r(a);var i={name:"card-links-section"},s=e(11),n=Object(s.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"links-cards"},[e("span",{staticClass:"links-cards-title"},[t._v("Useful links")]),t._v(" "),e("div",{staticClass:"cards-wrap"},[e("div",{staticClass:"card"},[e("span",{staticClass:"card-title"},[t._v("Getting started")]),t._v(" "),e("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),e("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/get-started.html"}},[t._v("Get started")])]),t._v(" "),e("div",{staticClass:"card"},[e("span",{staticClass:"card-title"},[t._v("API Endpoints")]),t._v(" "),e("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),e("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/api-service-definition.html"}},[t._v("Go to API Endpoints")])]),t._v(" "),e("div",{staticClass:"card"},[e("span",{staticClass:"card-title"},[t._v("Open OAS UI")]),t._v(" "),e("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),e("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/open-oas3-ui.html"}},[t._v("Open OAS UI")])]),t._v(" "),e("div",{staticClass:"card"},[e("span",{staticClass:"card-title"},[t._v("Security")]),t._v(" "),e("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),e("a",{staticClass:"btn btn--link",attrs:{href:"/security/"}},[t._v("Go to Security")])])])])}],!1,null,null,null);a.default=n.exports},347:function(t,a,e){"use strict";e.r(a);var i={name:"dashboard-modal",data:function(){return{tooltipPopupIsVisible:!1,items:["GSMA Mobile Money API v1.2 OAuth_Simulator","GSMA Mobile Money API v1.1 OAuth_Simulator","GSMA Mobile Money API v1.0 OAuth_Simulator"]}},methods:{handleModalClose:function(){this.$emit("close-modal")}}},s=e(11),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-modal"},[e("div",{staticClass:"content-wrap"},[e("div",{staticClass:"modal-container"},[e("button",{staticClass:"close-btn",on:{click:t.handleModalClose}}),t._v(" "),e("span",{staticClass:"modal-title"},[t._v("Create app")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"input-wrap input-wrapper__custom-select"},[e("label",{attrs:{for:"product-name"}},[t._v("Product\n          "),e("div",{staticClass:"tooltip-wrap"},[e("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(a){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(a){t.tooltipPopupIsVisible=!1}}},[t._v("?")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])])]),t._v(" "),e("v-select",{attrs:{"return-object":"",id:"product-name",name:"country",clearable:!1,options:t.items,placeholder:"Select product"}})],1),t._v(" "),e("div",{staticClass:"btn-row"},[e("button",{staticClass:"cancel-btn btn btn--link",attrs:{type:"button"},on:{click:t.handleModalClose}},[t._v("Cancel")]),t._v(" "),e("button",{staticClass:"btn btn btn--accent",attrs:{type:"button"}},[t._v("Create app")])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"input-wrap"},[a("label",{attrs:{for:"app-name"}},[this._v("App name")]),this._v(" "),a("input",{attrs:{id:"app-name",type:"text",placeholder:"Enter app name"}})])}],!1,null,null,null);a.default=n.exports},354:function(t,a,e){"use strict";var i=e(0);i="default"in i?i.default:i;/^2\./.test(i.version)||i.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+i.version);var s="_vue_clickaway_handler";function n(t,a,e){o(t);var i=e.context,n=a.value;if("function"==typeof n){var c=!1;setTimeout((function(){c=!0}),0),t[s]=function(a){var e=a.path||(a.composedPath?a.composedPath():void 0);if(c&&(e?e.indexOf(t)<0:!t.contains(a.target)))return n.call(i,a)},document.documentElement.addEventListener("click",t[s],!1)}}function o(t){document.documentElement.removeEventListener("click",t[s],!1),delete t[s]}var c={bind:n,update:function(t,a){a.value!==a.oldValue&&n(t,a)},unbind:o},l={directives:{onClickaway:c}};a.version="2.2.2",a.directive=c,a.mixin=l},385:function(t,a,e){"use strict";e.r(a);e(102);var i={name:"applications-child",data:function(){return{tabTitle:"Applications child",items:["GSMA Mobile Money API v1.2 OAuth_Simulator","GSMA Mobile Money API v1.1 OAuth_Simulator","GSMA Mobile Money API v1.0 OAuth_Simulator"],appDetailsDisabled:!0,editBtnEnabled:!0,updateBtnEnabled:!1,appNameVar:this.appName,productBindVar:this.productBind,tooltipPopupIsVisible:!1}},props:["applicationChildItem","appName","appDefault","appCreated","appExpire","appStatus","productBind","consumerKey","consumerSecret","apiKey"],methods:{handleEditClick:function(){this.appDetailsDisabled=!this.appDetailsDisabled,this.editBtnEnabled=!1,this.updateBtnEnabled=!0},handleUpdateClick:function(){this.$emit("update-data",this.appNameVar,this.productBindVar),this.appDetailsDisabled=!0,this.editBtnEnabled=!0,this.updateBtnEnabled=!1},copyToClipboard:function(t){var a=t.currentTarget.getAttribute("data-bind");navigator.clipboard.writeText(this[a]).then((function(){}),(function(t){console.error("Async: Could not copy text: ",t)}));var e=document.querySelectorAll('span[data-bind="'.concat(a,'"]'));e[0].style.opacity=1,setTimeout((function(){e[0].style.transition="opacity ease-in-out 1.5s"}),0),setTimeout((function(){e[0].style.opacity=0}),0),e[0].style.transition="none"}}},s=e(11),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-content"},[e("div",{staticClass:"application-flex-container"},[e("div",{staticClass:"application-title-info-wrap"},[e("h3",{staticClass:"content-title"},[t._v(t._s(t.appName))]),t._v(" "),e("div",{staticClass:"applications-title-info"},[e("div",{staticClass:"item"},[e("span",{staticClass:"item-title"},[t._v("Created")]),t._v(" "),e("span",{staticClass:"item-value"},[t._v(t._s(t.appCreated))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"item-title"},[t._v("Expire")]),t._v(" "),e("span",{staticClass:"item-value"},[t._v(t._s(t.appExpire))])]),t._v(" "),e("div",{staticClass:"item"},[e("span",{staticClass:"item-title"},[t._v("Status")]),t._v(" "),e("span",{staticClass:"item-value"},[t._v(t._s(t.appStatus))])])])]),t._v(" "),e("div",{staticClass:"application-info-container"},[e("div",{staticClass:"application-info-title-wrap"},[e("span",{staticClass:"application-info-title"},[t._v("Application details")]),t._v(" "),t.editBtnEnabled?e("button",{staticClass:"btn btn--transparent edit-btn",attrs:{type:"button"},on:{click:function(a){return t.handleEditClick()}}},[t._v("Edit")]):t._e()]),t._v(" "),e("div",{staticClass:"fields-wrap"},[e("div",{staticClass:"input-group"},[e("label",{attrs:{for:"appName"}},[t._v("App name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.appNameVar,expression:"appNameVar"}],attrs:{type:"text",id:"appName",disabled:t.appDetailsDisabled},domProps:{value:t.appNameVar},on:{input:function(a){a.target.composing||(t.appNameVar=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group input-wrapper__custom-select"},[e("label",{attrs:{for:"product"}},[t._v("\n            Product\n            "),e("div",{staticClass:"tooltip-wrap"},[e("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(a){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(a){t.tooltipPopupIsVisible=!1}}},[t._v("?")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])])]),t._v(" "),e("v-select",{attrs:{"return-object":"",id:"product",name:"country",clearable:!1,options:t.items,disabled:t.appDetailsDisabled},model:{value:t.productBindVar,callback:function(a){t.productBindVar=a},expression:"productBindVar"}})],1),t._v(" "),e("div",{staticClass:"update-btn-wrap"},[t.updateBtnEnabled?e("button",{staticClass:"btn btn--accent update-btn",attrs:{type:"button"},on:{click:function(a){return t.handleUpdateClick()}}},[t._v("Update")]):t._e()]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"input-group key-group"},[e("label",{attrs:{for:"consumerKey"}},[t._v("Consumer key")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.consumerKey,expression:"consumerKey"}],attrs:{type:"text",id:"consumerKey",readonly:""},domProps:{value:t.consumerKey},on:{input:function(a){a.target.composing||(t.consumerKey=a.target.value)}}}),t._v(" "),e("button",{staticClass:"copy-btn",attrs:{"data-bind":"consumerKey"},on:{click:function(a){return a.preventDefault(),t.copyToClipboard(a)}}},[e("img",{attrs:{src:"/images/copy-icon.svg",alt:""}})]),t._v(" "),e("span",{staticClass:"copy-popup",attrs:{"data-bind":"consumerKey"}},[t._v("Copied to clipboard!")])]),t._v(" "),e("div",{staticClass:"input-group key-group"},[e("label",{attrs:{for:"consumerSecret"}},[t._v("Consumer secret")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.consumerSecret,expression:"consumerSecret"}],attrs:{type:"text",id:"consumerSecret",readonly:""},domProps:{value:t.consumerSecret},on:{input:function(a){a.target.composing||(t.consumerSecret=a.target.value)}}}),t._v(" "),e("button",{staticClass:"copy-btn",attrs:{"data-bind":"consumerSecret"},on:{click:function(a){return a.preventDefault(),t.copyToClipboard(a)}}},[e("img",{attrs:{src:"/images/copy-icon.svg",alt:""}})]),t._v(" "),e("span",{staticClass:"copy-popup",attrs:{"data-bind":"consumerSecret"}},[t._v("Copied to clipboard!")])]),t._v(" "),e("div",{staticClass:"input-group key-group"},[e("label",{attrs:{for:"apiKey"}},[t._v("API key")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.apiKey,expression:"apiKey"}],attrs:{type:"text",id:"apiKey",readonly:""},domProps:{value:t.apiKey},on:{input:function(a){a.target.composing||(t.apiKey=a.target.value)}}}),t._v(" "),e("button",{staticClass:"copy-btn",attrs:{"data-bind":"apiKey"},on:{click:function(a){return a.preventDefault(),t.copyToClipboard(a)}}},[e("img",{attrs:{src:"/images/copy-icon.svg",alt:""}})]),t._v(" "),e("span",{staticClass:"copy-popup",attrs:{"data-bind":"apiKey"}},[t._v("Copied to clipboard!")])])])]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"info-text"},[a("p",[this._v("Below are keys you can use to access the Product (Usage Plan) associated with this application. The actual keys are capable of accessing any of the URIS defined in the Product (Usage Plan).")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"application-control-buttons"},[a("button",{staticClass:"delete-btn btn btn--transparent",attrs:{type:"button"}},[this._v("Delete")]),this._v(" "),a("button",{staticClass:"btn btn--accent set-default-btn",attrs:{type:"button"}},[this._v("Set as default app")])])}],!1,null,null,null);a.default=n.exports},386:function(t,a,e){"use strict";e.r(a);var i={name:"my-account-tab",data:function(){return{tabTitle:"My account",tabIcon:'\n  <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">\n    <path d="M7.5 9C11.642 9 15 10.567 15 12.5V15H0V12.5C0 10.567 3.358 9 7.5 9ZM14 12.5C14 11.12 11.09 10 7.5 10C3.91 10 1 11.12 1 12.5V14H14V12.5ZM7.5 0C8.42826 0 9.3185 0.368749 9.97487 1.02513C10.6313 1.6815 11 2.57174 11 3.5C11 4.42826 10.6313 5.3185 9.97487 5.97487C9.3185 6.63125 8.42826 7 7.5 7C6.57174 7 5.6815 6.63125 5.02513 5.97487C4.36875 5.3185 4 4.42826 4 3.5C4 2.57174 4.36875 1.6815 5.02513 1.02513C5.6815 0.368749 6.57174 0 7.5 0ZM7.5 1C6.83696 1 6.20107 1.26339 5.73223 1.73223C5.26339 2.20107 5 2.83696 5 3.5C5 4.16304 5.26339 4.79893 5.73223 5.26777C6.20107 5.73661 6.83696 6 7.5 6C8.16304 6 8.79893 5.73661 9.26777 5.26777C9.73661 4.79893 10 4.16304 10 3.5C10 2.83696 9.73661 2.20107 9.26777 1.73223C8.79893 1.26339 8.16304 1 7.5 1Z"/>\n  </svg>\n',accountEditBtnEnabled:!0,accountDetailsDisabled:!0,accountUpdateBtnEnabled:!1,accountSecurityBtnEnabled:!0,accountSecurityDisabled:!0,accountSecurityUpdateBtnEnabled:!1,accountDB:{fullName:"Thomas Ride",company:"Porto",timezone:"GMT+3",email:"thomas.ride@mail.com",password:"12345678"},items:["GMT+1","GMT+2","GMT+4"]}},methods:{handleAccountDetailsEdit:function(){this.accountDetailsDisabled=!this.accountDetailsDisabled,this.accountEditBtnEnabled=!1,this.accountUpdateBtnEnabled=!0},handleAccountSecurityEdit:function(){this.accountSecurityDisabled=!this.accountSecurityDisabled,this.accountSecurityBtnEnabled=!1,this.accountSecurityUpdateBtnEnabled=!0},handleAccountDetailsUpdate:function(){this.accountDetailsDisabled=!0,this.accountEditBtnEnabled=!0,this.accountUpdateBtnEnabled=!1},handleAccountSecurityUpdate:function(){this.accountSecurityDisabled=!0,this.accountSecurityBtnEnabled=!0,this.accountSecurityUpdateBtnEnabled=!1}}},s=e(11),n=Object(s.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-content"},[e("div",{staticClass:"account-flex-container"},[t._m(0),t._v(" "),e("div",{staticClass:"account-info-container"},[e("div",{staticClass:"account-info-title-wrap"},[e("span",{staticClass:"account-info-title"},[t._v("Personal information")]),t._v(" "),t.accountEditBtnEnabled?e("button",{staticClass:"btn btn--transparent edit-btn",attrs:{type:"button"},on:{click:function(a){return t.handleAccountDetailsEdit()}}},[t._v("Edit")]):t._e()]),t._v(" "),e("div",{staticClass:"fields-wrap"},[e("div",{staticClass:"input-group"},[e("label",{attrs:{for:"fullName"}},[t._v("Full name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountDB.fullName,expression:"accountDB.fullName"}],attrs:{type:"text",id:"fullName",disabled:t.accountDetailsDisabled},domProps:{value:t.accountDB.fullName},on:{input:function(a){a.target.composing||t.$set(t.accountDB,"fullName",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",{attrs:{for:"company"}},[t._v("Company")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountDB.company,expression:"accountDB.company"}],attrs:{type:"text",id:"company",disabled:t.accountDetailsDisabled},domProps:{value:t.accountDB.company},on:{input:function(a){a.target.composing||t.$set(t.accountDB,"company",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group input-wrapper__custom-select"},[e("label",{attrs:{for:"timezone"}},[t._v("Timezone")]),t._v(" "),e("v-select",{attrs:{"return-object":"",id:"timezone",name:"timezone",clearable:!1,options:t.items,disabled:t.accountDetailsDisabled},model:{value:t.accountDB.timezone,callback:function(a){t.$set(t.accountDB,"timezone",a)},expression:"accountDB.timezone"}})],1),t._v(" "),e("div",{staticClass:"update-btn-wrap"},[t.accountUpdateBtnEnabled?e("button",{staticClass:"btn btn--accent update-btn",attrs:{type:"button"},on:{click:function(a){return t.handleAccountDetailsUpdate()}}},[t._v("Update")]):t._e()])])]),t._v(" "),e("div",{staticClass:"account-info-container"},[e("div",{staticClass:"account-info-title-wrap"},[e("span",{staticClass:"account-info-title"},[t._v("Security")]),t._v(" "),t.accountSecurityBtnEnabled?e("button",{staticClass:"btn btn--transparent edit-btn",attrs:{type:"button"},on:{click:function(a){return t.handleAccountSecurityEdit()}}},[t._v("Edit")]):t._e()]),t._v(" "),e("div",{staticClass:"fields-wrap"},[e("div",{staticClass:"input-group"},[e("label",{attrs:{for:"email"}},[t._v("E-mail")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountDB.email,expression:"accountDB.email"}],attrs:{type:"email",id:"email",disabled:t.accountSecurityDisabled},domProps:{value:t.accountDB.email},on:{input:function(a){a.target.composing||t.$set(t.accountDB,"email",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",{attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountDB.password,expression:"accountDB.password"}],attrs:{type:"password",id:"password",disabled:t.accountSecurityDisabled},domProps:{value:t.accountDB.password},on:{input:function(a){a.target.composing||t.$set(t.accountDB,"password",a.target.value)}}})]),t._v(" "),e("div",{staticClass:"update-btn-wrap"},[t.accountSecurityUpdateBtnEnabled?e("button",{staticClass:"btn btn--accent update-btn",attrs:{type:"button"},on:{click:function(a){return t.handleAccountSecurityUpdate()}}},[t._v("Update")]):t._e()])])])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"account-title-info-wrap"},[a("h3",{staticClass:"content-title"},[this._v("My account")])])}],!1,null,null,null);a.default=n.exports},387:function(t,a,e){"use strict";e.r(a);var i=e(347),s=e(346),n={name:"applications-tab",components:{dashboardModal:i.default,cardLinksSection:s.default},data:function(){return{tabTitle:"Applications",tabIcon:'\n  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1.60016 0.160156C0.810699 0.160156 0.160156 0.810698 0.160156 1.60016V7.84016C0.160156 8.62961 0.810699 9.28016 1.60016 9.28016H7.84016C8.62961 9.28016 9.28016 8.62961 9.28016 7.84016V1.60016C9.28016 0.810698 8.62961 0.160156 7.84016 0.160156H1.60016ZM12.1602 0.160156C11.3707 0.160156 10.7202 0.810698 10.7202 1.60016V7.84016C10.7202 8.62961 11.3707 9.28016 12.1602 9.28016H18.4002C19.1896 9.28016 19.8402 8.62961 19.8402 7.84016V1.60016C19.8402 0.810698 19.1896 0.160156 18.4002 0.160156H12.1602ZM1.60016 1.12016H7.84016C8.11438 1.12016 8.32016 1.32593 8.32016 1.60016V7.84016C8.32016 8.11438 8.11438 8.32016 7.84016 8.32016H1.60016C1.32593 8.32016 1.12016 8.11438 1.12016 7.84016V1.60016C1.12016 1.32593 1.32593 1.12016 1.60016 1.12016ZM12.1602 1.12016H18.4002C18.6744 1.12016 18.8802 1.32593 18.8802 1.60016V7.84016C18.8802 8.11438 18.6744 8.32016 18.4002 8.32016H12.1602C11.8859 8.32016 11.6802 8.11438 11.6802 7.84016V1.60016C11.6802 1.32593 11.8859 1.12016 12.1602 1.12016ZM15.2277 10.7127C15.1084 10.7258 14.9983 10.7831 14.9192 10.8733C14.84 10.9636 14.7976 11.0802 14.8002 11.2002V14.8002H11.2002C11.1852 14.7995 11.1701 14.7995 11.1552 14.8002C11.0921 14.8031 11.0303 14.8184 10.9732 14.8453C10.916 14.8721 10.8648 14.91 10.8223 14.9566C10.7798 15.0033 10.7469 15.0579 10.7255 15.1172C10.7041 15.1766 10.6946 15.2396 10.6976 15.3027C10.7005 15.3657 10.7159 15.4275 10.7427 15.4847C10.7696 15.5418 10.8074 15.593 10.8541 15.6355C10.9008 15.678 10.9553 15.7109 11.0147 15.7323C11.0741 15.7536 11.1371 15.7631 11.2002 15.7602H14.8002V19.3602C14.7993 19.4238 14.811 19.4869 14.8347 19.5459C14.8584 19.605 14.8937 19.6587 14.9383 19.704C14.983 19.7493 15.0362 19.7852 15.0949 19.8098C15.1536 19.8344 15.2165 19.847 15.2802 19.847C15.3438 19.847 15.4067 19.8344 15.4654 19.8098C15.5241 19.7852 15.5773 19.7493 15.622 19.704C15.6667 19.6587 15.7019 19.605 15.7256 19.5459C15.7493 19.4869 15.7611 19.4238 15.7602 19.3602V15.7602H19.3602C19.4238 15.7611 19.4869 15.7493 19.5459 15.7256C19.605 15.7019 19.6587 15.6667 19.704 15.622C19.7493 15.5773 19.7852 15.5241 19.8098 15.4654C19.8344 15.4067 19.847 15.3438 19.847 15.2802C19.847 15.2165 19.8344 15.1536 19.8098 15.0949C19.7852 15.0362 19.7493 14.983 19.704 14.9383C19.6587 14.8937 19.605 14.8584 19.5459 14.8347C19.4869 14.811 19.4238 14.7993 19.3602 14.8002H15.7602V11.2002C15.7616 11.1318 15.7485 11.064 15.7216 11.0011C15.6948 10.9383 15.6548 10.8819 15.6044 10.8357C15.554 10.7896 15.4943 10.7547 15.4293 10.7335C15.3643 10.7123 15.2956 10.7052 15.2277 10.7127ZM1.60016 10.7202C0.810699 10.7202 0.160156 11.3707 0.160156 12.1602V18.4002C0.160156 19.1896 0.810699 19.8402 1.60016 19.8402H7.84016C8.62961 19.8402 9.28016 19.1896 9.28016 18.4002V12.1602C9.28016 11.3707 8.62961 10.7202 7.84016 10.7202H1.60016ZM1.60016 11.6802H7.84016C8.11438 11.6802 8.32016 11.8859 8.32016 12.1602V18.4002C8.32016 18.6744 8.11438 18.8802 7.84016 18.8802H1.60016C1.32593 18.8802 1.12016 18.6744 1.12016 18.4002V12.1602C1.12016 11.8859 1.32593 11.6802 1.60016 11.6802Z"/>\n  </svg>\n',children:!0,modalIsVisible:!1,dashboardApplicationsDB:{0:{appName:"Application 1",appDefault:!0,appCreated:"Jan 19, 2021",appExpire:"Never",appStatus:"Approved",productBind:"GSMA Mobile Money API v1.0 OAuth_Simulator",consumerKey:"jhfpq8934frtp8g534rft",consumerSecret:"098213jufvn8930",apiKey:"4jb5089gh324f"},1:{appName:"Application 2",appDefault:!1,appCreated:"Jun 05, 2021",appExpire:"",appStatus:"",productBind:"GSMA Mobile Money API v1.2 OAuth_Simulator",consumerKey:"7bg4568fb2384bh",consumerSecret:"vfbhsk478fg597e",apiKey:"153cd623df76gvbf4578g"}}}},methods:{toggleModal:function(){this.modalIsVisible=!this.modalIsVisible},handleAppClick:function(t){this.$emit("app-click",t,this.tabTitle)}}},o=e(11),c=Object(o.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-content"},[e("h3",{staticClass:"content-title"},[t._v("My applications")]),t._v(" "),e("div",{staticClass:"applications-list-wrap"},[e("ul",{staticClass:"applications-list"},t._l(t.dashboardApplicationsDB,(function(a,i){return e("li",{staticClass:"applications-list-item",on:{click:function(a){return t.handleAppClick(i)}}},[e("div",{staticClass:"info-box"},[e("div",{staticClass:"title-wrap"},[e("span",{staticClass:"application-title"},[t._v(t._s(a.appName))]),t._v(" "),e("span",{staticClass:"creation-date"},[t._v(t._s(a.appCreated))])]),t._v(" "),a.appDefault?e("div",{staticClass:"label-wrap"},[e("span",{staticClass:"default-label"},[t._v("Default app")])]):t._e()]),t._v(" "),e("span",{staticClass:"link-text"},[t._v("View details")])])})),0),t._v(" "),e("div",{staticClass:"btn-row"},[e("button",{staticClass:"btn btn--accent",attrs:{type:"button"},on:{click:t.toggleModal}},[t._v("Create app")])])]),t._v(" "),e("card-links-section"),t._v(" "),t.modalIsVisible?e("dashboard-modal",{on:{"close-modal":function(a){t.modalIsVisible=!1}}}):t._e()],1)}),[],!1,null,null,null);a.default=c.exports},388:function(t,a,e){"use strict";e.r(a);var i=e(347),s=e(346),n={name:"dashboard-tab",components:{dashboardModal:i.default,cardLinksSection:s.default},data:function(){return{tabTitle:"Dashboard",tabIcon:'\n  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1.60016 0.160156C0.810699 0.160156 0.160156 0.810698 0.160156 1.60016V7.84016C0.160156 8.62961 0.810699 9.28016 1.60016 9.28016H7.84016C8.62961 9.28016 9.28016 8.62961 9.28016 7.84016V1.60016C9.28016 0.810698 8.62961 0.160156 7.84016 0.160156H1.60016ZM12.1602 0.160156C11.3707 0.160156 10.7202 0.810698 10.7202 1.60016V7.84016C10.7202 8.62961 11.3707 9.28016 12.1602 9.28016H18.4002C19.1896 9.28016 19.8402 8.62961 19.8402 7.84016V1.60016C19.8402 0.810698 19.1896 0.160156 18.4002 0.160156H12.1602ZM1.60016 1.12016H7.84016C8.11438 1.12016 8.32016 1.32593 8.32016 1.60016V7.84016C8.32016 8.11438 8.11438 8.32016 7.84016 8.32016H1.60016C1.32593 8.32016 1.12016 8.11438 1.12016 7.84016V1.60016C1.12016 1.32593 1.32593 1.12016 1.60016 1.12016ZM12.1602 1.12016H18.4002C18.6744 1.12016 18.8802 1.32593 18.8802 1.60016V7.84016C18.8802 8.11438 18.6744 8.32016 18.4002 8.32016H12.1602C11.8859 8.32016 11.6802 8.11438 11.6802 7.84016V1.60016C11.6802 1.32593 11.8859 1.12016 12.1602 1.12016ZM1.60016 10.7202C0.810699 10.7202 0.160156 11.3707 0.160156 12.1602V18.4002C0.160156 19.1896 0.810699 19.8402 1.60016 19.8402H7.84016C8.62961 19.8402 9.28016 19.1896 9.28016 18.4002V12.1602C9.28016 11.3707 8.62961 10.7202 7.84016 10.7202H1.60016ZM1.60016 11.6802H7.84016C8.11438 11.6802 8.32016 11.8859 8.32016 12.1602V18.4002C8.32016 18.6744 8.11438 18.8802 7.84016 18.8802H1.60016C1.32593 18.8802 1.12016 18.6744 1.12016 18.4002V12.1602C1.12016 11.8859 1.32593 11.6802 1.60016 11.6802Z"/>\n    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1602 10.7202C11.3707 10.7202 10.7202 11.3707 10.7202 12.1602V18.4002C10.7202 19.1896 11.3707 19.8402 12.1602 19.8402H18.4002C19.1896 19.8402 19.8402 19.1896 19.8402 18.4002V12.1602C19.8402 11.3707 19.1896 10.7202 18.4002 10.7202H12.1602ZM12.1501 11.6802C11.8906 11.6802 11.6801 11.8907 11.6801 12.1502V18.4102C11.6801 18.6698 11.8906 18.8802 12.1501 18.8802H18.4102C18.6697 18.8802 18.8802 18.6698 18.8802 18.4102V12.1502C18.8802 11.8907 18.6697 11.6802 18.4102 11.6802H12.1501Z"/>\n  </svg>\n',modalIsVisible:!1}},methods:{toggleModal:function(){this.modalIsVisible=!this.modalIsVisible},handleMenuClose:function(){this.$emit("close-menu")}}},o=e(11),c=Object(o.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-content",on:{click:t.handleMenuClose}},[e("div",{staticClass:"create-app-banner"},[t._m(0),t._v(" "),e("div",{staticClass:"btn-wrap"},[e("button",{staticClass:"btn btn--accent",attrs:{type:"button"},on:{click:t.toggleModal}},[t._v("Create app")]),t._v(" "),e("a",{staticClass:"btn btn--link",attrs:{href:""}},[t._v("Learn more")])])]),t._v(" "),e("card-links-section"),t._v(" "),t.modalIsVisible?e("dashboard-modal",{on:{"close-modal":function(a){t.modalIsVisible=!1}}}):t._e()],1)}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"flex-container"},[e("div",{staticClass:"content-box"},[e("span",{staticClass:"create-app-banner-title"},[t._v("Create an app")]),t._v(" "),e("div",{staticClass:"create-app-banner-text"},[e("span",[t._v("Welcome on Portal! Here you can arcu eget ultrices. Diam sollicitudin quis ut gravida sed lacus aliquet. Id etiam tortor morbi at sagittis nisi, nisl:")]),t._v(" "),e("ol",{staticClass:"create-app-banner-list"},[e("li",[t._v("Tincidunt aenean eget tincidunt in fringilla congue.")]),t._v(" "),e("li",[t._v("Egestas lectus nisi diam felis, tortor.")]),t._v(" "),e("li",[t._v("Sed vitae est a, consectetur viverra fringilla non.")])])])]),t._v(" "),e("div",{staticClass:"content-box"},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:"/images/create-app-img.svg",alt:""}})])])])}],!1,null,null,null);a.default=c.exports},477:function(t,a,e){"use strict";e.r(a);e(102),e(34),e(35),e(75);var i=e(388),s=e(387),n=e(386),o=e(385),c=e(354),l={dashboardTab:i.default,applicationsTab:s.default,myAccountTab:n.default},r={name:"dashboard-section",components:{applicationsChild:o.default},mixins:[c.mixin],data:function(){return{tabs:l,applicationsChild:o.default,activeTabName:"",sidebarOpened:!1,tabsActive:!0,applicationsChildActive:!1,applicationChildItem:[]}},created:function(){this.setStartActiveTab()},methods:{handleTabSwitch:function(t,a,e){this.activeTabName=t,this.toggleApplicationChildTab(!1),e&&a.target.closest("li").classList.contains("item-closed")?setTimeout((function(){a.target.closest("li").classList.remove("item-closed")}),50):(e&&a.target.closest("li").classList.add("item-closed"),e||this.closeSidebar(),this.$refs.sidebarChildItem.forEach((function(t){t.classList.remove("active")})))},getTabTitle:function(t){return t.data().tabTitle},getTabIcon:function(t){return t.data().tabIcon},isTabHaveChildren:function(t){return t.data().children},getTabChildren:function(t){return t.data().dashboardApplicationsDB},setStartActiveTab:function(){this.activeTabName=this.getTabTitle(this.tabs["".concat(Object.keys(this.tabs)[this.defaultTab?this.defaultTab-1:0])])},openSidebar:function(){this.sidebarOpened=!0},closeSidebar:function(){this.sidebarOpened=!1},toggleApplicationChildTab:function(t,a,e){a&&(a.stopPropagation(),this.$refs.sidebarChildItem.forEach((function(t){t.classList.remove("active")})),a.target.classList.add("active"),this.applicationChildItem=e),this.tabsActive=!t,this.applicationsChildActive=t,this.applicationsChildActive&&this.closeSidebar()},handleAppClick:function(t,a){this.$refs.sidebarChildItem[t].click(),this.$refs.sidebarListItem.forEach((function(t){t.getAttribute("data-name")===a&&t.classList.remove("item-closed")}))},handleUdateClick:function(t){console.log("appName 1",this.applicationChildItem.appName),this.applicationChildItem.appName=t,console.log("appName 2",this.applicationChildItem.appName)}}},p=e(11),d=Object(p.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-section"},[e("v-touch",{on:{swiperight:t.openSidebar,swipeleft:t.closeSidebar}},[e("div",{staticClass:"aside-menu-swipe-area"},[t._v("← Swipe to show/hide menu →")])]),t._v(" "),e("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeSidebar,expression:"closeSidebar"}],staticClass:"dashboard-sidebar",class:{"show-sidebar":t.sidebarOpened}},[e("span",{staticClass:"dashboard-title"},[t._v("Developer Portal")]),t._v(" "),e("ul",{staticClass:"sidebar-list"},t._l(t.tabs,(function(a,i){return e("li",{key:"tab-button-"+i,ref:"sidebarListItem",refInFor:!0,staticClass:"sidebar-item",class:{active:t.getTabTitle(a)===t.activeTabName,"children item-closed":t.isTabHaveChildren(a)},attrs:{"data-name":t.getTabTitle(a)},on:{click:function(e){t.handleTabSwitch(t.getTabTitle(a),e,t.isTabHaveChildren(a))}}},[e("div",{staticClass:"sidebar-item-main-btn"},[e("div",{staticClass:"icon-wrap",domProps:{innerHTML:t._s(t.getTabIcon(a))}}),t._v(" "),e("span",{staticClass:"sidebar-item-text"},[t._v(t._s(t.getTabTitle(a)))])]),t._v(" "),t.isTabHaveChildren(a)?e("ul",{staticClass:"sidebar-child-list"},t._l(t.getTabChildren(a),(function(a,i){return e("li",{ref:"sidebarChildItem",refInFor:!0,staticClass:"sidebar-child-item",on:{click:function(e){return t.toggleApplicationChildTab(!0,e,a)}}},[t._v(t._s(a.appName))])})),0):t._e()])})),0)]),t._v(" "),t._l(t.tabs,(function(a){return[t.getTabTitle(a)===t.activeTabName&&t.tabsActive?e(a,{tag:"component",on:{"close-menu":function(a){t.sidebarOpened=!1},"app-click":t.handleAppClick}}):t._e()]})),t._v(" "),t.applicationsChildActive?e("applications-child",{attrs:{"app-name":t.applicationChildItem.appName,"app-default":t.applicationChildItem.appName,"app-created":t.applicationChildItem.appCreated,"app-expire":t.applicationChildItem.appExpire,"app-status":t.applicationChildItem.appStatus,"product-bind":t.applicationChildItem.productBind,"consumer-key":t.applicationChildItem.consumerKey,"consumer-secret":t.applicationChildItem.consumerSecret,apiKey:t.applicationChildItem.apiKey},on:{"update-data":t.handleUdateClick}}):t._e()],2)}),[],!1,null,null,null);a.default=d.exports}}]);
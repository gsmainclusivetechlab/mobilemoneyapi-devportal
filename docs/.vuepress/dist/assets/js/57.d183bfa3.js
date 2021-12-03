(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{469:function(t,a,e){"use strict";e.r(a);var s={name:"my-account-tab",data:function(){return{accountEdit:!1,accountDB:{firstName:"Thomas",lastName:"Ride",username:"thomasride-96",email:"thomas.ride@mail.com",password:""}}},methods:{updateAccountData:function(){this.accountEdit=!1}}},r=e(15),o=Object(r.a)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-content"},[e("ValidationObserver",{ref:"edit-profile",scopedSlots:t._u([{key:"default",fn:function(a){a.invalid;var s=a.handleSubmit;return[e("form",{on:{submit:function(a){return a.preventDefault(),s(t.updateAccountData)}}},[e("div",{staticClass:"account-flex-container"},[e("div",{staticClass:"account-title-info-wrap"},[e("h3",{staticClass:"content-title"},[t._v("My account")])]),t._v(" "),e("div",{staticClass:"account-info-container"},[e("div",{staticClass:"account-info-title-wrap"},[e("span",{staticClass:"account-info-title"},[t._v("Personal information")]),t._v(" "),t.accountEdit?t._e():e("button",{staticClass:"btn btn--transparent edit-btn",attrs:{type:"button"},on:{click:function(a){t.accountEdit=!0}}},[t._v("Edit\n            ")])]),t._v(" "),e("div",{staticClass:"fields-wrap"},[e("ValidationProvider",{staticClass:"input-group",attrs:{vid:"lastName",rules:{required:{allowFalse:!1},alpha:!0,min:2},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("label",{attrs:{for:"lastName"}},[t._v("Last name"),e("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountDB.lastName,expression:"accountDB.lastName"}],attrs:{type:"text",id:"lastName",placeholder:"Enter last name",disabled:!t.accountEdit},domProps:{value:t.accountDB.lastName},on:{input:function(a){a.target.composing||t.$set(t.accountDB,"lastName",a.target.value)}}})]}}],null,!0)}),t._v(" "),e("ValidationProvider",{staticClass:"input-group",attrs:{vid:"firstName",rules:{required:{allowFalse:!1},alpha:!0,min:2},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("label",{attrs:{for:"firstName"}},[t._v("First name"),e("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountDB.firstName,expression:"accountDB.firstName"}],attrs:{type:"text",id:"firstName",placeholder:"Enter first name",disabled:!t.accountEdit},domProps:{value:t.accountDB.firstName},on:{input:function(a){a.target.composing||t.$set(t.accountDB,"firstName",a.target.value)}}})]}}],null,!0)}),t._v(" "),e("ValidationProvider",{staticClass:"input-group",attrs:{vid:"username",rules:{required:{allowFalse:!1},min:2},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("label",{attrs:{for:"username"}},[t._v("Username"),e("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountDB.username,expression:"accountDB.username"}],attrs:{type:"text",id:"username",placeholder:"Enter username",disabled:!t.accountEdit},domProps:{value:t.accountDB.username},on:{input:function(a){a.target.composing||t.$set(t.accountDB,"username",a.target.value)}}})]}}],null,!0)})],1)]),t._v(" "),e("div",{staticClass:"account-info-container"},[e("div",{staticClass:"account-info-title-wrap"},[e("span",{staticClass:"account-info-title"},[t._v("Security")])]),t._v(" "),e("div",{staticClass:"fields-wrap"},[e("ValidationProvider",{staticClass:"input-group",attrs:{vid:"email",rules:{required:{allowFalse:!1},email:!0},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("label",{attrs:{for:"email"}},[t._v("E-mail"),e("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountDB.email,expression:"accountDB.email"}],attrs:{type:"email",id:"email",placeholder:"Enter email",disabled:!t.accountEdit},domProps:{value:t.accountDB.email},on:{input:function(a){a.target.composing||t.$set(t.accountDB,"email",a.target.value)}}})]}}],null,!0)}),t._v(" "),e("ValidationProvider",{staticClass:"input-group",attrs:{vid:"password",rules:{required:{allowFalse:!1},verify_password:!0,min:8},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("label",{attrs:{for:"password"}},[t._v("Password"),e("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),t.accountEdit?e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountDB.password,expression:"accountDB.password"}],attrs:{type:"password",id:"password",placeholder:"Enter password",disabled:!t.accountEdit},domProps:{value:t.accountDB.password},on:{input:function(a){a.target.composing||t.$set(t.accountDB,"password",a.target.value)}}}):e("input",{attrs:{type:"password",value:"••••••••",placeholder:"••••••••",disabled:!t.accountEdit}})]}}],null,!0)}),t._v(" "),e("div",{staticClass:"update-btn-wrap"},[t.accountEdit?e("button",{staticClass:"btn btn--accent update-btn",attrs:{type:"submit"}},[t._v("\n                Update\n              ")]):t._e()])],1)])])])]}}])})],1)}),[],!1,null,null,null);a.default=o.exports}}]);
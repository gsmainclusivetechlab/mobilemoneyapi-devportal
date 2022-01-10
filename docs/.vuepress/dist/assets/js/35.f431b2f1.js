(window.webpackJsonp=window.webpackJsonp||[]).push([[35,62],{383:function(e,t,a){"use strict";a.r(t);var s={name:"spinner-component"},n=a(20),r=Object(n.a)(s,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"icon-spinner"})}),[],!1,null,null,null);t.default=r.exports},443:function(e,t,a){"use strict";a.r(t);var s=a(16),n=a(3),r=(a(45),a(12),a(90)),i={name:"my-account-tab",components:{SpinnerComponent:a(383).default},data:function(){return{accountEdit:!1,waitingResponse:!1,user:{timeZone:"",firstName:"",lastName:"",email:"",companyName:""}}},computed:Object(n.a)({},Object(r.c)("user",["userData"])),created:function(){this.user=Object(n.a)(Object(n.a)({},this.userData),{},{timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone})},methods:{updateAccountData:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.waitingResponse=!0,t.next=3,e.$store.dispatch("user/updateUserData",e.user).then((function(){e.accountEdit=!1})).finally((function(){e.waitingResponse=!1}));case 3:case"end":return t.stop()}}),t)})))()}}},o=a(20),l=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"dashboard-content"},[a("ValidationObserver",{ref:"edit-profile",scopedSlots:e._u([{key:"default",fn:function(t){var s=t.invalid,n=t.handleSubmit;return[a("form",{on:{submit:function(t){return t.preventDefault(),n(e.updateAccountData)}}},[a("div",{staticClass:"account-flex-container"},[a("div",{staticClass:"account-title-info-wrap"},[a("h3",{staticClass:"content-title"},[e._v("My account")])]),e._v(" "),a("div",{staticClass:"account-info-container"},[a("div",{staticClass:"account-info-title-wrap"},[a("span",{staticClass:"account-info-title"},[e._v("Personal information")]),e._v(" "),e.accountEdit?e._e():a("button",{staticClass:"btn btn--transparent edit-btn",attrs:{type:"button"},on:{click:function(t){e.accountEdit=!0}}},[e._v("Edit\n            ")])]),e._v(" "),a("div",{staticClass:"fields-wrap"},[a("ValidationProvider",{staticClass:"input-group",attrs:{vid:"lastName",rules:{required:{allowFalse:!1},alpha:!0,min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("label",{attrs:{for:"lastName"}},[e._v("Last name"),a("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(s[0])+")")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],attrs:{type:"text",id:"lastName",placeholder:"Enter last name",disabled:!e.accountEdit},domProps:{value:e.user.lastName},on:{input:function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)}}})]}}],null,!0)}),e._v(" "),a("ValidationProvider",{staticClass:"input-group",attrs:{vid:"firstName",rules:{required:{allowFalse:!1},alpha:!0,min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("label",{attrs:{for:"firstName"}},[e._v("First name"),a("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(s[0])+")")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],attrs:{type:"text",id:"firstName",placeholder:"Enter first name",disabled:!e.accountEdit},domProps:{value:e.user.firstName},on:{input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}})]}}],null,!0)}),e._v(" "),a("ValidationProvider",{staticClass:"input-group",attrs:{vid:"companyName",rules:{required:{allowFalse:!1},min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("label",{attrs:{for:"companyName"}},[e._v("Company"),a("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(s[0])+")")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.companyName,expression:"user.companyName"}],attrs:{type:"text",id:"companyName",placeholder:"Enter company name",disabled:!e.accountEdit},domProps:{value:e.user.companyName},on:{input:function(t){t.target.composing||e.$set(e.user,"companyName",t.target.value)}}})]}}],null,!0)})],1)]),e._v(" "),a("div",{staticClass:"account-info-container"},[a("div",{staticClass:"account-info-title-wrap"},[a("span",{staticClass:"account-info-title"},[e._v("Security")])]),e._v(" "),a("div",{staticClass:"fields-wrap"},[a("ValidationProvider",{staticClass:"input-group",attrs:{vid:"email",rules:{required:{allowFalse:!1},email:!0},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.errors;return[a("label",{attrs:{for:"email"}},[e._v("E-mail"),a("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(s[0])+")")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"email",id:"email",placeholder:"Enter email",disabled:!e.accountEdit},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]}}],null,!0)}),e._v(" "),a("div",{staticClass:"update-btn-wrap"},[e.accountEdit?a("button",{staticClass:"btn btn--accent update-btn",attrs:{type:"submit",disabled:s||e.waitingResponse}},[e.waitingResponse?a("spinner-component"):a("span",[e._v("Update")])],1):e._e()])],1)])])])]}}])})],1)}),[],!1,null,null,null);t.default=l.exports}}]);
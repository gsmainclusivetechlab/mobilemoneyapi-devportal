(window.webpackJsonp=window.webpackJsonp||[]).push([[41,62],{391:function(e,r,a){"use strict";a.r(r);var t={name:"spinner-component",props:{table:{type:Boolean,default:!1}}},s=a(24),o=Object(s.a)(t,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"icon-spinner",class:{"icon-spinner--table":this.table}})}),[],!1,null,null,null);r.default=o.exports},533:function(e,r,a){"use strict";a.r(r);var t=a(2),s=a(11),o=(a(34),a(391)),n=a(6),i=a(5),l={name:"signup-section",components:{SpinnerComponent:o.default},data:function(){return{form:{email:"",firstName:"",lastName:"",userName:"",companyName:"",timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},privacyCheckbox:!1,waitingResponse:!1,errorMessage:"",successSignUp:!1}},methods:{clearForm:function(e){for(var r in e)e[r]="";this.privacyCheckbox=!1,this.form.timeZone=Intl.DateTimeFormat().resolvedOptions().timeZone},signUp:function(){var e=this;return Object(s.a)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.successSignUp=!1,e.waitingResponse=!0,e.errorMessage="",r.next=5,e.$store.dispatch(Object(n.a)(i.d,"signUp"),e.form);case 5:(a=r.sent).status?(e.successSignUp=!0,e.clearForm(e.form),e.$refs.form.reset()):a.errorField?e.$refs.form.setErrors(Object(t.a)({},a.errorField,a.errorMessage)):e.errorMessage=a.errorMessage,e.waitingResponse=!1;case 8:case"end":return r.stop()}}),r)})))()}}},c=a(24),m=Object(c.a)(l,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"auth-section section"},[a("div",{staticClass:"container container--thin"},[a("div",{staticClass:"section-intro"},[a("router-link",{staticClass:"btn-link-back",attrs:{to:"/"}},[a("svg",{attrs:{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M5 0L5.715 0.6965L1.925 4.5H12V5.5H1.925L5.715 9.2865L5 10L0 5L5 0Z",fill:"currentColor"}})])]),e._v(" "),a("h1",{staticClass:"auth-section__title"},[e._v("Sign up")])],1),e._v(" "),a("div",{staticClass:"form-wrap"},[a("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(r){var t=r.invalid,s=r.handleSubmit;return[a("form",{on:{submit:function(r){return r.preventDefault(),s(e.signUp)}}},[a("ValidationProvider",{staticClass:"form-row",attrs:{vid:"first-name",rules:{required:{allowFalse:!1},alpha_with_dash:!0,min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("label",{attrs:{for:"first-name"}},[e._v("\n              First name\n              "),a("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstName,expression:"form.firstName"}],attrs:{type:"text",id:"first-name",placeholder:"Enter first name"},domProps:{value:e.form.firstName},on:{input:function(r){r.target.composing||e.$set(e.form,"firstName",r.target.value)}}})]}}],null,!0)}),e._v(" "),a("ValidationProvider",{staticClass:"form-row",attrs:{vid:"last-name",rules:{required:{allowFalse:!1},alpha_with_dash:!0,min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("label",{attrs:{for:"last-name"}},[e._v("Last name\n              "),a("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastName,expression:"form.lastName"}],attrs:{type:"text",id:"last-name",placeholder:"Enter last name"},domProps:{value:e.form.lastName},on:{input:function(r){r.target.composing||e.$set(e.form,"lastName",r.target.value)}}})]}}],null,!0)}),e._v(" "),a("ValidationProvider",{staticClass:"form-row",attrs:{vid:"userName",rules:{required:{allowFalse:!1},min:3,without_space:!0},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("label",{attrs:{for:"userName"}},[e._v("Username\n              "),a("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.userName,expression:"form.userName"}],attrs:{type:"text",id:"userName",placeholder:"Enter username"},domProps:{value:e.form.userName},on:{input:function(r){r.target.composing||e.$set(e.form,"userName",r.target.value)}}})]}}],null,!0)}),e._v(" "),a("ValidationProvider",{staticClass:"form-row",attrs:{vid:"companyName",rules:{required:{allowFalse:!1},min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("label",{attrs:{for:"companyName"}},[e._v("Company name\n              "),a("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.companyName,expression:"form.companyName"}],attrs:{type:"text",id:"companyName",placeholder:"Enter company name"},domProps:{value:e.form.companyName},on:{input:function(r){r.target.composing||e.$set(e.form,"companyName",r.target.value)}}})]}}],null,!0)}),e._v(" "),a("ValidationProvider",{staticClass:"form-row",attrs:{vid:"email",rules:{required:{allowFalse:!1},email:!0},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("label",{attrs:{for:"email"}},[e._v("E-mail\n              "),a("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",id:"email",placeholder:"Enter e-mail"},domProps:{value:e.form.email},on:{input:function(r){r.target.composing||e.$set(e.form,"email",r.target.value)}}})]}}],null,!0)}),e._v(" "),a("ValidationProvider",{staticClass:"form-row privacy-row",attrs:{vid:"privacy-checkbox",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("input",{directives:[{name:"model",rawName:"v-model",value:e.privacyCheckbox,expression:"privacyCheckbox"}],attrs:{type:"checkbox",id:"privacy-checkbox"},domProps:{checked:Array.isArray(e.privacyCheckbox)?e._i(e.privacyCheckbox,null)>-1:e.privacyCheckbox},on:{change:function(r){var a=e.privacyCheckbox,t=r.target,s=!!t.checked;if(Array.isArray(a)){var o=e._i(a,null);t.checked?o<0&&(e.privacyCheckbox=a.concat([null])):o>-1&&(e.privacyCheckbox=a.slice(0,o).concat(a.slice(o+1)))}else e.privacyCheckbox=s}}}),e._v(" "),a("label",{staticClass:"privacy-checkbox",class:[t[0]?"form-row__error-checkbox":""],attrs:{for:"privacy-checkbox"}},[e._v("\n              I agree with\n              "),a("a",{attrs:{href:"https://www.gsma.com/aboutus/legal",target:"_blank"}},[e._v("\n                GSMA Terms and Conditions\n              ")]),e._v("\n              and have read the\n              "),a("a",{attrs:{href:"https://www.gsma.com/aboutus/legal/privacy",target:"_blank"}},[e._v("GSMA Privacy Statement")]),e._v(".")])]}}],null,!0)}),e._v(" "),e.errorMessage?a("p",{staticClass:"form-row__error"},[e._v(e._s(e.errorMessage))]):e._e(),e._v(" "),a("div",{staticClass:"button-holder"},[a("button",{staticClass:"btn btn--accent",attrs:{type:"submit",disabled:t||e.waitingResponse}},[e.waitingResponse?a("spinner-component"):a("span",[e._v("Sign up")])],1),e._v(" "),e.successSignUp?a("span",{staticClass:"bottom-row"},[e._v("\n              Successful registration! Please check your email and\n              "),a("router-link",{attrs:{to:"/login"}},[e._v("go to Log in")]),e._v("!\n            ")],1):a("span",{staticClass:"bottom-row"},[a("router-link",{attrs:{to:"/login"}},[e._v("Log in")]),e._v(" instead?\n            ")],1)])],1)]}}])})],1)])])}),[],!1,null,null,null);r.default=m.exports}}]);
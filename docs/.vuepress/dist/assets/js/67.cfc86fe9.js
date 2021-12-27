(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{533:function(e,a,r){"use strict";r.r(a);var t=r(42),s=(r(88),r(97)),o={name:"signup-section",data:function(){return{form:{email:"",firstName:"",lastName:"",userName:"",companyName:"",timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},privacyCheckbox:!1}},methods:{signUp:function(){var e=this;return Object(t.a)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.signUp(e.form).then((function(){e.$router.push({path:"/login/"})})).catch((function(e){console.log(e)}));case 2:case"end":return a.stop()}}),a)})))()}}},n=r(19),i=Object(n.a)(o,(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("div",{staticClass:"auth-section section"},[r("div",{staticClass:"container container--thin"},[r("div",{staticClass:"section-intro"},[r("router-link",{staticClass:"btn-link-back",attrs:{to:"/"}},[r("svg",{attrs:{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M5 0L5.715 0.6965L1.925 4.5H12V5.5H1.925L5.715 9.2865L5 10L0 5L5 0Z",fill:"currentColor"}})])]),e._v(" "),r("h1",{staticClass:"auth-section__title"},[e._v("Sign up")])],1),e._v(" "),r("div",{staticClass:"form-wrap"},[r("ValidationObserver",{ref:"form",scopedSlots:e._u([{key:"default",fn:function(a){var t=a.invalid,s=a.handleSubmit;return[r("form",{on:{submit:function(a){return a.preventDefault(),s(e.signUp)}}},[r("ValidationProvider",{staticClass:"form-row",attrs:{vid:"first-name",rules:{required:{allowFalse:!1},alpha:!0,min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.errors;return[r("label",{attrs:{for:"first-name"}},[e._v("\n              First name\n              "),r("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.firstName,expression:"form.firstName"}],attrs:{type:"text",id:"first-name",placeholder:"Enter first name"},domProps:{value:e.form.firstName},on:{input:function(a){a.target.composing||e.$set(e.form,"firstName",a.target.value)}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form-row",attrs:{vid:"last-name",rules:{required:{allowFalse:!1},alpha:!0,min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.errors;return[r("label",{attrs:{for:"last-name"}},[e._v("Last name\n              "),r("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.lastName,expression:"form.lastName"}],attrs:{type:"text",id:"last-name",placeholder:"Enter last name"},domProps:{value:e.form.lastName},on:{input:function(a){a.target.composing||e.$set(e.form,"lastName",a.target.value)}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form-row",attrs:{vid:"userName",rules:{required:{allowFalse:!1},min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.errors;return[r("label",{attrs:{for:"userName"}},[e._v("Username\n              "),r("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.userName,expression:"form.userName"}],attrs:{type:"text",id:"userName",placeholder:"Enter username"},domProps:{value:e.form.userName},on:{input:function(a){a.target.composing||e.$set(e.form,"userName",a.target.value)}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form-row",attrs:{vid:"companyName",rules:{required:{allowFalse:!1},min:2},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.errors;return[r("label",{attrs:{for:"companyName"}},[e._v("Company name\n              "),r("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.companyName,expression:"form.companyName"}],attrs:{type:"text",id:"companyName",placeholder:"Enter company name"},domProps:{value:e.form.companyName},on:{input:function(a){a.target.composing||e.$set(e.form,"companyName",a.target.value)}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form-row",attrs:{vid:"email",rules:{required:{allowFalse:!1},email:!0},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.errors;return[r("label",{attrs:{for:"email"}},[e._v("E-mail\n              "),r("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"email",id:"email",placeholder:"Enter e-mail"},domProps:{value:e.form.email},on:{input:function(a){a.target.composing||e.$set(e.form,"email",a.target.value)}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form-row privacy-row",attrs:{vid:"privacy-checkbox",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(a){var t=a.errors;return[r("input",{directives:[{name:"model",rawName:"v-model",value:e.privacyCheckbox,expression:"privacyCheckbox"}],attrs:{type:"checkbox",id:"privacy-checkbox"},domProps:{checked:Array.isArray(e.privacyCheckbox)?e._i(e.privacyCheckbox,null)>-1:e.privacyCheckbox},on:{change:function(a){var r=e.privacyCheckbox,t=a.target,s=!!t.checked;if(Array.isArray(r)){var o=e._i(r,null);t.checked?o<0&&(e.privacyCheckbox=r.concat([null])):o>-1&&(e.privacyCheckbox=r.slice(0,o).concat(r.slice(o+1)))}else e.privacyCheckbox=s}}}),e._v(" "),r("label",{staticClass:"privacy-checkbox",class:[t[0]?"form-row__error-checkbox":""],attrs:{for:"privacy-checkbox"}},[e._v("\n              I agree with\n              "),r("a",{attrs:{href:"https://www.gsma.com/aboutus/legal",target:"_blank"}},[e._v("\n                GSMA Terms and Conditions\n              ")]),e._v(" and have read the "),r("a",{attrs:{href:"https://www.gsma.com/aboutus/legal/privacy",target:"_blank"}},[e._v("GSMA Privacy\n              Statement")]),e._v(".")])]}}],null,!0)}),e._v(" "),r("div",{staticClass:"button-holder"},[r("button",{staticClass:"btn btn--accent",attrs:{type:"submit",disabled:t}},[e._v("Sign up")]),e._v(" "),r("span",{staticClass:"bottom-row"},[r("router-link",{attrs:{to:"/login"}},[e._v("Log in")]),e._v(" instead?\n          ")],1)])],1)]}}])})],1)])])}),[],!1,null,null,null);a.default=i.exports}}]);
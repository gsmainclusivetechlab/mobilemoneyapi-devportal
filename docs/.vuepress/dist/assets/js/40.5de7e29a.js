(window.webpackJsonp=window.webpackJsonp||[]).push([[40,62],{391:function(e,s,r){"use strict";r.r(s);var t={name:"spinner-component",props:{table:{type:Boolean,default:!1}}},n=r(24),a=Object(n.a)(t,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"icon-spinner",class:{"icon-spinner--table":this.table}})}),[],!1,null,null,null);s.default=a.exports},531:function(e,s,r){"use strict";r.r(s);var t=r(11),n=(r(34),r(18),r(59),r(95)),a={name:"set-new-password",components:{SpinnerComponent:r(391).default},data:function(){return{form:{newPassword:""},confirmPassword:"",waitingResponse:!1}},methods:{setNewPassword:function(){var e=this;return Object(t.a)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e.waitingResponse=!0,s.next=3,n.a.setNewPassword(e.$route.query.userName,e.form).then((function(s){var r=s.data;if(r.name&&r.code)return Promise.reject(!1);e.$router.push({path:"/login/"})})).catch((function(e){console.log(e)})).finally((function(){e.waitingResponse=!1}));case 3:case"end":return s.stop()}}),s)})))()}}},o=r(24),i=Object(o.a)(a,(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"auth-section section"},[r("div",{staticClass:"container container--thin"},[e._m(0),e._v(" "),r("div",{staticClass:"form-wrap"},[r("ValidationObserver",{ref:"set-new-password",scopedSlots:e._u([{key:"default",fn:function(s){var t=s.invalid,n=s.handleSubmit;return[r("form",{on:{submit:function(s){return s.preventDefault(),n(e.setNewPassword)}}},[r("ValidationProvider",{staticClass:"form-row",attrs:{vid:"newPassword",rules:{required:{allowFalse:!1},verify_password:!0,min:8},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(s){var t=s.errors;return[r("label",{attrs:{for:"newPassword"}},[e._v("Password\n              "),r("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.newPassword,expression:"form.newPassword"}],attrs:{type:"password",id:"newPassword",placeholder:"Enter password"},domProps:{value:e.form.newPassword},on:{input:function(s){s.target.composing||e.$set(e.form,"newPassword",s.target.value)}}})]}}],null,!0)}),e._v(" "),r("ValidationProvider",{staticClass:"form-row",attrs:{vid:"confirmPassword",rules:{required:{allowFalse:!1},verify_password:!0,min:8,confirmed:"newPassword"},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(s){var t=s.errors;return[r("label",{attrs:{for:"confirmPassword"}},[e._v("\n              Password confirmation\n              "),r("span",{directives:[{name:"show",rawName:"v-show",value:t[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(t[0])+")")])]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password",id:"confirmPassword",placeholder:"Enter password confirmation"},domProps:{value:e.confirmPassword},on:{input:function(s){s.target.composing||(e.confirmPassword=s.target.value)}}})]}}],null,!0)}),e._v(" "),r("div",{staticClass:"button-holder"},[r("button",{staticClass:"btn btn--accent",attrs:{type:"submit",disabled:t||e.waitingResponse}},[e.waitingResponse?r("spinner-component"):r("span",[e._v("Set new password")])],1),e._v(" "),r("span",{staticClass:"bottom-row"})])],1)]}}])})],1)])])}),[function(){var e=this.$createElement,s=this._self._c||e;return s("div",{staticClass:"section-intro"},[s("h1",{staticClass:"auth-section__title"},[this._v("Set new password")])])}],!1,null,"20e58b79",null);s.default=i.exports}}]);
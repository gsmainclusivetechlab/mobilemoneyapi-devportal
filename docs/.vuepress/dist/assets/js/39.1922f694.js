(window.webpackJsonp=window.webpackJsonp||[]).push([[39,62],{383:function(e,t,s){"use strict";s.r(t);var n={name:"spinner-component"},r=s(20),a=Object(r.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"icon-spinner"})}),[],!1,null,null,null);t.default=a.exports},532:function(e,t,s){"use strict";s.r(t);var n=s(16),r=(s(45),s(12),s(48),s(98)),a={name:"set-new-password",components:{SpinnerComponent:s(383).default},data:function(){return{form:{newPassword:""},waitingResponse:!1}},methods:{setNewPassword:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.waitingResponse=!0,t.next=3,r.a.setNewPassword(e.$route.query.userName,e.form).then((function(t){var s=t.data;if(s.name&&s.code)return Promise.reject(!1);e.$router.push({path:"/login/"})})).catch((function(e){console.log(e)})).finally((function(){e.waitingResponse=!1}));case 3:case"end":return t.stop()}}),t)})))()}}},o=s(20),i=Object(o.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"auth-section section"},[s("div",{staticClass:"container container--thin"},[e._m(0),e._v(" "),s("div",{staticClass:"form-wrap"},[s("ValidationObserver",{ref:"set-new-password",scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid,r=t.handleSubmit;return[s("form",{on:{submit:function(t){return t.preventDefault(),r(e.setNewPassword)}}},[s("ValidationProvider",{staticClass:"form-row",attrs:{vid:"password",rules:{required:{allowFalse:!1},verify_password:!0,min:8},tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[s("label",{attrs:{for:"password"}},[e._v("Password\n              "),s("span",{directives:[{name:"show",rawName:"v-show",value:n[0],expression:"errors[0]"}],staticClass:"form-row__error"},[e._v("("+e._s(n[0])+")")])]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.form.newPassword,expression:"form.newPassword"}],attrs:{type:"password",id:"password",placeholder:"Enter password"},domProps:{value:e.form.newPassword},on:{input:function(t){t.target.composing||e.$set(e.form,"newPassword",t.target.value)}}})]}}],null,!0)}),e._v(" "),s("div",{staticClass:"button-holder"},[s("button",{staticClass:"btn btn--accent",attrs:{type:"submit",disabled:n||e.waitingResponse}},[e.waitingResponse?s("spinner-component"):s("span",[e._v("Set new password")])],1),e._v(" "),s("span",{staticClass:"bottom-row"})])],1)]}}])})],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"section-intro"},[t("h1",{staticClass:"auth-section__title"},[this._v("Set new password")])])}],!1,null,"65d0f342",null);t.default=i.exports}}]);
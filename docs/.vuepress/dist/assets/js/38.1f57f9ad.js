(window.webpackJsonp=window.webpackJsonp||[]).push([[38,62],{391:function(t,e,n){"use strict";n.r(e);var s={name:"spinner-component",props:{table:{type:Boolean,default:!1}}},r=n(24),a=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"icon-spinner",class:{"icon-spinner--table":this.table}})}),[],!1,null,null,null);e.default=a.exports},528:function(t,e,n){"use strict";n.r(e);var s=n(10),r=(n(38),n(17),n(22),n(29),n(101)),a={name:"forgot-password-section",components:{SpinnerComponent:n(391).default},data:function(){return{form:{userName:""},waitingResponse:!1}},methods:{forgotPassword:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.waitingResponse=!0,e.next=3,r.a.forgotPassword(t.form).then((function(){window.location.replace("/forgot-password/confirmation.html?userName=".concat(t.form.userName))})).catch((function(t){console.log(t)})).finally((function(){t.waitingResponse=!1}));case 3:case"end":return e.stop()}}),e)})))()}}},o=n(24),i=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auth-section section"},[n("div",{staticClass:"container container--thin"},[t._m(0),t._v(" "),n("div",{staticClass:"form-wrap"},[n("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid,r=e.handleSubmit;return[n("form",{on:{submit:function(e){return e.preventDefault(),r(t.forgotPassword)}}},[n("ValidationProvider",{staticClass:"form-row",attrs:{vid:"userName",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[n("label",{attrs:{for:"userName"}},[t._v("\n              Username\n              "),n("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.userName,expression:"form.userName"}],attrs:{type:"text",id:"userName",placeholder:"Enter username"},domProps:{value:t.form.userName},on:{input:function(e){e.target.composing||t.$set(t.form,"userName",e.target.value)}}})]}}],null,!0)}),t._v(" "),n("div",{staticClass:"button-holder"},[n("button",{staticClass:"btn btn--accent",attrs:{type:"submit",disabled:s||t.waitingResponse}},[t.waitingResponse?n("spinner-component"):n("span",[t._v("Recover password")])],1),t._v(" "),n("span",{staticClass:"bottom-row"},[n("router-link",{staticClass:"bold-grey-link",attrs:{to:"/login"}},[t._v("Go back to Sign in page")])],1)])],1)]}}])})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-intro"},[e("h1",{staticClass:"auth-section__title"},[this._v("Forgot password?")]),this._v(" "),e("span",{staticClass:"auth-section__sub-title"},[this._v("Please, enter your username")])])}],!1,null,null,null);e.default=i.exports}}]);
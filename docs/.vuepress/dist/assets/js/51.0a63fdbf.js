(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{552:function(t,e,s){"use strict";s.r(e);var a=s(34),r=(s(85),{name:"forgot-password-section",data:function(){return{form:{email:""}}},methods:{forgotPassword:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("forgot-password"),t.$router.push("/login/");case 2:case"end":return e.stop()}}),e)})))()}}}),o=s(15),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth-section section"},[s("div",{staticClass:"container container--thin"},[t._m(0),t._v(" "),s("div",{staticClass:"form-wrap"},[s("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid,r=e.handleSubmit;return[s("form",{on:{submit:function(e){return e.preventDefault(),r(t.forgotPassword)}}},[s("ValidationProvider",{staticClass:"form-row",attrs:{vid:"email",rules:{required:{allowFalse:!1},email:!0},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("label",{attrs:{for:"email"}},[t._v("\n              E-mail\n              "),s("span",{directives:[{name:"show",rawName:"v-show",value:a[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(a[0])+")")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],attrs:{type:"email",id:"email",placeholder:"Enter e-mail"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})]}}],null,!0)}),t._v(" "),s("div",{staticClass:"button-holder"},[s("button",{staticClass:"btn btn--accent",attrs:{type:"submit",disabled:a}},[t._v("Recover password")]),t._v(" "),s("span",{staticClass:"bottom-row"},[s("router-link",{staticClass:"bold-grey-link",attrs:{to:"/login"}},[t._v("Go back to Sign in page")])],1)])],1)]}}])})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-intro"},[e("h1",{staticClass:"auth-section__title"},[this._v("Forgot password?")]),this._v(" "),e("span",{staticClass:"auth-section__sub-title"},[this._v("Please, enter your email address")])])}],!1,null,null,null);e.default=i.exports}}]);
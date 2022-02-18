(window.webpackJsonp=window.webpackJsonp||[]).push([[22,35,58,62],{392:function(t,e,a){"use strict";a.r(e);var s={name:"spinner-component",props:{table:{type:Boolean,default:!1}}},n=a(24),i=Object(n.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"icon-spinner",class:{"icon-spinner--table":this.table}})}),[],!1,null,null,null);e.default=i.exports},405:function(t,e,a){"use strict";a.r(e);var s=a(11),n=a(7),i=(a(34),a(44),a(45),a(222),a(98)),o=a(392),r=a(5),l=a(10),c=a(6),p=a(8),u=a(4),d={name:"dashboard-modal",components:{SpinnerComponent:o.default},data:function(){return{tooltipPopupIsVisible:!1,waitingResponse:!1,myErrors:[],form:{appName:"",usagePlanName:""}}},computed:Object(n.a)({},Object(i.c)(r.b,{getPublishedUsagePlans:l.g})),created:function(){this.getData()},methods:{handleModalClose:function(){this.$emit("close-modal")},onChangeAppName:function(){var t=this;this.myErrors.forEach((function(e,a){e.error===u.d&&t.myErrors.splice(a,1)}))},createApp:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.waitingResponse=!0,e.next=3,t.$store.dispatch(Object(c.a)(r.f,p.d),t.form);case 3:201===(a=e.sent).status?t.handleModalClose():t.myErrors.push(a.data),t.waitingResponse=!1;case 6:case"end":return e.stop()}}),e)})))()},getData:function(){return this.$store.dispatch(Object(c.a)(r.b,p.b))}}},v=a(24),m=Object(v.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-modal"},[a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"modal-container"},[a("button",{staticClass:"close-btn",on:{click:t.handleModalClose}}),t._v(" "),a("span",{staticClass:"h3 modal-title"},[t._v("Create app")]),t._v(" "),a("ValidationObserver",{ref:"create-app",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid,n=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),n(t.createApp)}}},[a("ValidationProvider",{staticClass:"input-wrap",attrs:{vid:"app-name",rules:{required:{allowFalse:!1},min:2,check_same_name:[].concat(t.myErrors)},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:"app-name"}},[t._v("\n              App name\n              "),a("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.appName,expression:"form.appName"}],attrs:{type:"text",id:"app-name",placeholder:"Enter app name"},domProps:{value:t.form.appName},on:{change:t.onChangeAppName,input:function(e){e.target.composing||t.$set(t.form,"appName",e.target.value)}}})]}}],null,!0)}),t._v(" "),a("ValidationProvider",{staticClass:"input-wrap input-wrapper__custom-select",attrs:{vid:"product-name",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:"product-name"}},[t._v("Product\n              "),a("div",{staticClass:"tooltip-wrap"},[a("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(e){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(e){t.tooltipPopupIsVisible=!1}}},[t._v("\n                  ?\n                ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),a("v-select",{attrs:{"return-object":"",id:"product-name",name:"country",clearable:!1,options:t.getPublishedUsagePlans,placeholder:"Select product",reduce:function(t){return t.label}},model:{value:t.form.usagePlanName,callback:function(e){t.$set(t.form,"usagePlanName",e)},expression:"form.usagePlanName"}})]}}],null,!0)}),t._v(" "),a("div",{staticClass:"btn-row"},[a("button",{staticClass:"cancel-btn btn btn--link",attrs:{type:"button"},on:{click:t.handleModalClose}},[t._v("\n              Cancel\n            ")]),t._v(" "),a("button",{staticClass:"btn btn btn--accent",attrs:{disabled:s||t.waitingResponse,type:"submit"}},[t.waitingResponse?a("spinner-component"):a("span",[t._v("Create app")])],1)])],1)]}}])})],1)])])}),[],!1,null,null,null);e.default=m.exports},407:function(t,e,a){"use strict";a.r(e);var s={name:"card-links-section"},n=a(24),i=Object(n.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"links-cards"},[a("h3",{staticClass:"links-cards-title"},[t._v("Useful links")]),t._v(" "),a("div",{staticClass:"cards-wrap"},[a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Getting started")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/get-started.html"}},[t._v("Get started")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("API Endpoints")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/api-service-definition.html"}},[t._v("Go to API Endpoints")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Open OAS UI")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/open-oas3-ui.html"}},[t._v("Open OAS UI")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Security")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/security/"}},[t._v("Go to Security")])])])])}],!1,null,null,null);e.default=i.exports},442:function(t,e,a){"use strict";a.r(e);var s=a(405),n=a(407),i={name:"dashboard-tab",components:{dashboardModal:s.default,cardLinksSection:n.default},data:function(){return{modalIsVisible:!1}},methods:{toggleModal:function(){this.modalIsVisible=!this.modalIsVisible},handleMenuClose:function(){this.$emit("close-menu")}}},o=a(24),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content",on:{click:t.handleMenuClose}},[a("div",{staticClass:"create-app-banner"},[t._m(0),t._v(" "),a("div",{staticClass:"btn-wrap"},[a("button",{staticClass:"btn btn--accent",attrs:{type:"button"},on:{click:t.toggleModal}},[t._v("Create app")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:""}},[t._v("Learn more")])])]),t._v(" "),a("card-links-section"),t._v(" "),t.modalIsVisible?a("dashboard-modal",{on:{"close-modal":function(e){t.modalIsVisible=!1}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex-container"},[a("div",{staticClass:"content-box"},[a("span",{staticClass:"h3 create-app-banner-title"},[t._v("Create an app")]),t._v(" "),a("div",{staticClass:"create-app-banner-text"},[a("span",[t._v("Welcome on Portal! Here you can arcu eget ultrices. Diam sollicitudin quis ut gravida\n            sed lacus aliquet. Id etiam tortor morbi at sagittis nisi, nisl:")]),t._v(" "),a("ol",{staticClass:"create-app-banner-list"},[a("li",[t._v("Tincidunt aenean eget tincidunt in fringilla congue.")]),t._v(" "),a("li",[t._v("Egestas lectus nisi diam felis, tortor.")]),t._v(" "),a("li",[t._v("Sed vitae est a, consectetur viverra fringilla non.")])])])]),t._v(" "),a("div",{staticClass:"content-box"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:"/images/create-app-img.svg",alt:""}})])])])}],!1,null,null,null);e.default=r.exports}}]);
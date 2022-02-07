(window.webpackJsonp=window.webpackJsonp||[]).push([[22,35,58,62],{391:function(t,e,s){"use strict";s.r(e);var a={name:"spinner-component",props:{table:{type:Boolean,default:!1}}},n=s(24),i=Object(n.a)(a,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"icon-spinner",class:{"icon-spinner--table":this.table}})}),[],!1,null,null,null);e.default=i.exports},404:function(t,e,s){"use strict";s.r(e);var a=s(9),n=s(5),i=(s(38),s(17),s(97)),o=s(391),r=s(8),l=s(11),c=s(19),p=s(6),u={name:"dashboard-modal",components:{SpinnerComponent:o.default},data:function(){return{tooltipPopupIsVisible:!1,waitingResponse:!1,form:{appName:"",usagePlan:""}}},computed:Object(n.a)(Object(n.a)({},Object(i.c)(r.b,{getPublishedUsagePlans:l.g})),Object(i.c)(r.f,{getApplicationsList:l.b})),created:function(){this.getData()},methods:{handleModalClose:function(){this.$emit("close-modal")},createApp:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.waitingResponse=!0,e.next=3,t.$store.dispatch(Object(c.a)(r.f,p.d),t.form).then((function(){t.handleModalClose()})).finally((function(){t.waitingResponse=!1}));case 3:case"end":return e.stop()}}),e)})))()},getData:function(){return this.$store.dispatch(Object(c.a)(r.b,p.b))}}},d=s(24),v=Object(d.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-modal"},[s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"modal-container"},[s("button",{staticClass:"close-btn",on:{click:t.handleModalClose}}),t._v(" "),s("span",{staticClass:"h3 modal-title"},[t._v("Create app")]),t._v(" "),s("ValidationObserver",{ref:"create-app",scopedSlots:t._u([{key:"default",fn:function(e){var a=e.invalid,n=e.handleSubmit;return[s("form",{on:{submit:function(e){return e.preventDefault(),n(t.createApp)}}},[s("ValidationProvider",{staticClass:"input-wrap",attrs:{vid:"app-name",rules:{required:{allowFalse:!1},min:2,check_same_name:t.getApplicationsList},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("label",{attrs:{for:"app-name"}},[t._v("\n              App name\n              "),s("span",{directives:[{name:"show",rawName:"v-show",value:a[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(a[0])+")")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.appName,expression:"form.appName"}],attrs:{type:"text",id:"app-name",placeholder:"Enter app name"},domProps:{value:t.form.appName},on:{input:function(e){e.target.composing||t.$set(t.form,"appName",e.target.value)}}})]}}],null,!0)}),t._v(" "),s("ValidationProvider",{staticClass:"input-wrap input-wrapper__custom-select",attrs:{vid:"product-name",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.errors;return[s("label",{attrs:{for:"product-name"}},[t._v("Product\n              "),s("div",{staticClass:"tooltip-wrap"},[s("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(e){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(e){t.tooltipPopupIsVisible=!1}}},[t._v("?\n                ")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:a[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(a[0])+")")])]),t._v(" "),s("v-select",{attrs:{"return-object":"",id:"product-name",name:"country",clearable:!1,options:t.getPublishedUsagePlans,placeholder:"Select product",reduce:function(t){return t.value}},model:{value:t.form.usagePlan,callback:function(e){t.$set(t.form,"usagePlan",e)},expression:"form.usagePlan"}})]}}],null,!0)}),t._v(" "),s("div",{staticClass:"btn-row"},[s("button",{staticClass:"cancel-btn btn btn--link",attrs:{type:"button"},on:{click:t.handleModalClose}},[t._v("Cancel")]),t._v(" "),s("button",{staticClass:"btn btn btn--accent",attrs:{disabled:a||t.waitingResponse,type:"submit"}},[t.waitingResponse?s("spinner-component"):s("span",[t._v("Create app")])],1)])],1)]}}])})],1)])])}),[],!1,null,null,null);e.default=v.exports},406:function(t,e,s){"use strict";s.r(e);var a={name:"card-links-section"},n=s(24),i=Object(n.a)(a,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"links-cards"},[s("h3",{staticClass:"links-cards-title"},[t._v("Useful links")]),t._v(" "),s("div",{staticClass:"cards-wrap"},[s("div",{staticClass:"card"},[s("span",{staticClass:"card-title"},[t._v("Getting started")]),t._v(" "),s("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),s("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/get-started.html"}},[t._v("Get started")])]),t._v(" "),s("div",{staticClass:"card"},[s("span",{staticClass:"card-title"},[t._v("API Endpoints")]),t._v(" "),s("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),s("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/api-service-definition.html"}},[t._v("Go to API Endpoints")])]),t._v(" "),s("div",{staticClass:"card"},[s("span",{staticClass:"card-title"},[t._v("Open OAS UI")]),t._v(" "),s("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),s("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/open-oas3-ui.html"}},[t._v("Open OAS UI")])]),t._v(" "),s("div",{staticClass:"card"},[s("span",{staticClass:"card-title"},[t._v("Security")]),t._v(" "),s("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),s("a",{staticClass:"btn btn--link",attrs:{href:"/security/"}},[t._v("Go to Security")])])])])}],!1,null,null,null);e.default=i.exports},441:function(t,e,s){"use strict";s.r(e);var a=s(404),n=s(406),i={name:"dashboard-tab",components:{dashboardModal:a.default,cardLinksSection:n.default},data:function(){return{modalIsVisible:!1}},methods:{toggleModal:function(){this.modalIsVisible=!this.modalIsVisible},handleMenuClose:function(){this.$emit("close-menu")}}},o=s(24),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-content",on:{click:t.handleMenuClose}},[s("div",{staticClass:"create-app-banner"},[t._m(0),t._v(" "),s("div",{staticClass:"btn-wrap"},[s("button",{staticClass:"btn btn--accent",attrs:{type:"button"},on:{click:t.toggleModal}},[t._v("Create app")]),t._v(" "),s("a",{staticClass:"btn btn--link",attrs:{href:""}},[t._v("Learn more")])])]),t._v(" "),s("card-links-section"),t._v(" "),t.modalIsVisible?s("dashboard-modal",{on:{"close-modal":function(e){t.modalIsVisible=!1}}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex-container"},[s("div",{staticClass:"content-box"},[s("span",{staticClass:"h3 create-app-banner-title"},[t._v("Create an app")]),t._v(" "),s("div",{staticClass:"create-app-banner-text"},[s("span",[t._v("Welcome on Portal! Here you can arcu eget ultrices. Diam sollicitudin quis ut gravida sed lacus aliquet. Id etiam tortor morbi at sagittis nisi, nisl:")]),t._v(" "),s("ol",{staticClass:"create-app-banner-list"},[s("li",[t._v("Tincidunt aenean eget tincidunt in fringilla congue.")]),t._v(" "),s("li",[t._v("Egestas lectus nisi diam felis, tortor.")]),t._v(" "),s("li",[t._v("Sed vitae est a, consectetur viverra fringilla non.")])])])]),t._v(" "),s("div",{staticClass:"content-box"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:"/images/create-app-img.svg",alt:""}})])])])}],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[20,35,55,57,61],{394:function(t,e,a){"use strict";a.r(e);var s={name:"spinner-component",props:{table:{type:Boolean,default:!1}}},n=a(23),i=Object(n.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"icon-spinner",class:{"icon-spinner--table":this.table}})}),[],!1,null,null,null);e.default=i.exports},407:function(t,e,a){"use strict";a.r(e);var s=a(10),n=a(6),i=(a(34),a(18),a(97)),o=a(394),l=a(4),r=a(13),c=a(9),p=a(7),u={name:"dashboard-modal",components:{SpinnerComponent:o.default},data:function(){return{tooltipPopupIsVisible:!1,waitingResponse:!1,form:{appName:"",usagePlan:""}}},computed:Object(n.a)(Object(n.a)({},Object(i.c)(l.b,{getPublishedUsagePlans:r.g})),Object(i.c)(l.f,{getApplicationsList:r.b})),methods:{handleModalClose:function(){this.$emit("close-modal")},createApp:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.waitingResponse=!0,e.next=3,t.$store.dispatch(Object(c.a)(l.f,p.d),t.form).then((function(){t.handleModalClose()})).finally((function(){t.waitingResponse=!1}));case 3:case"end":return e.stop()}}),e)})))()}}},d=a(23),v=Object(d.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-modal"},[a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"modal-container"},[a("button",{staticClass:"close-btn",on:{click:t.handleModalClose}}),t._v(" "),a("span",{staticClass:"h3 modal-title"},[t._v("Create app")]),t._v(" "),a("ValidationObserver",{ref:"create-app",scopedSlots:t._u([{key:"default",fn:function(e){var s=e.invalid,n=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),n(t.createApp)}}},[a("ValidationProvider",{staticClass:"input-wrap",attrs:{vid:"app-name",rules:{required:{allowFalse:!1},min:2,check_same_name:t.getApplicationsList},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:"app-name"}},[t._v("\n              App name\n              "),a("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.appName,expression:"form.appName"}],attrs:{type:"text",id:"app-name",placeholder:"Enter app name"},domProps:{value:t.form.appName},on:{input:function(e){e.target.composing||t.$set(t.form,"appName",e.target.value)}}})]}}],null,!0)}),t._v(" "),a("ValidationProvider",{staticClass:"input-wrap input-wrapper__custom-select",attrs:{vid:"product-name",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.errors;return[a("label",{attrs:{for:"product-name"}},[t._v("Product\n              "),a("div",{staticClass:"tooltip-wrap"},[a("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(e){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(e){t.tooltipPopupIsVisible=!1}}},[t._v("?\n                ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:s[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(s[0])+")")])]),t._v(" "),a("v-select",{attrs:{"return-object":"",id:"product-name",name:"country",clearable:!1,options:t.getPublishedUsagePlans,placeholder:"Select product",reduce:function(t){return t.value}},model:{value:t.form.usagePlan,callback:function(e){t.$set(t.form,"usagePlan",e)},expression:"form.usagePlan"}})]}}],null,!0)}),t._v(" "),a("div",{staticClass:"btn-row"},[a("button",{staticClass:"cancel-btn btn btn--link",attrs:{type:"button"},on:{click:t.handleModalClose}},[t._v("Cancel")]),t._v(" "),a("button",{staticClass:"btn btn btn--accent",attrs:{disabled:s||t.waitingResponse,type:"submit"}},[t.waitingResponse?a("spinner-component"):a("span",[t._v("Create app")])],1)])],1)]}}])})],1)])])}),[],!1,null,null,null);e.default=v.exports},408:function(t,e,a){"use strict";a.r(e);var s={name:"card-links-section"},n=a(23),i=Object(n.a)(s,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"links-cards"},[a("h3",{staticClass:"links-cards-title"},[t._v("Useful links")]),t._v(" "),a("div",{staticClass:"cards-wrap"},[a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Getting started")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/get-started.html"}},[t._v("Get started")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("API Endpoints")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/api-service-definition.html"}},[t._v("Go to API Endpoints")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Open OAS UI")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/open-oas3-ui.html"}},[t._v("Open OAS UI")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Security")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/security/"}},[t._v("Go to Security")])])])])}],!1,null,null,null);e.default=i.exports},411:function(t,e,a){"use strict";a.r(e);var s=a(6),n=a(97),i=a(9),o=a(7),l=a(4),r=a(13),c=a(5),p={name:"dashboard-table-bottom",props:{module:{type:String}},computed:Object(s.a)({},Object(n.c)(l.g,{getTokenNextPage:r.h,getTokenPrevPage:r.i,getCurrentPage:r.e})),methods:Object(s.a)(Object(s.a)({},Object(n.d)(l.g,{setCurrentPage:c.e})),{},{nextPage:function(){this.getData(this.getTokenNextPage(this.module)),this.setCurrentPage({page:this.getCurrentPage(this.module)-1,module:this.module})},prevPage:function(){this.getData(this.getTokenPrevPage(this.module)),this.setCurrentPage({page:this.getCurrentPage(this.module)+1,module:this.module})},getData:function(t){this.$store.dispatch(Object(i.a)(this.module,o.b),t)}})},u=a(23),d=Object(u.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.getTokenNextPage(this.module)?a("div",{staticClass:"dashboard-table-bottom"},[a("div",[a("button",{staticClass:"dashboard-table__pagination-arrow dashboard-table__pagination-arrow--left",class:{"dashboard-table__pagination-arrow--inactive":1===t.getCurrentPage(t.module)},attrs:{type:"button"},on:{click:t.prevPage}},[t._v("\n      < Prev\n    ")]),t._v(" "),a("button",{staticClass:"dashboard-table__pagination-arrow dashboard-table__pagination-arrow--right",class:{"dashboard-table__pagination-arrow--inactive":!t.getTokenNextPage(t.module)},attrs:{type:"button"},on:{click:t.nextPage}},[t._v("\n      Next >\n    ")])])]):t._e()}),[],!1,null,null,null);e.default=d.exports},446:function(t,e,a){"use strict";a.r(e);var s=a(6),n=a(407),i=a(408),o=a(97),l=a(411),r=a(4),c=a(13),p={name:"applications-tab",components:{DashboardTableBottom:l.default,dashboardModal:n.default,cardLinksSection:i.default},data:function(){return{tabTitle:"Applications",modalIsVisible:!1,module:r.f}},computed:Object(s.a)({},Object(o.c)(r.f,{getApplicationsList:c.b})),methods:{toggleModal:function(){this.modalIsVisible=!this.modalIsVisible},handleAppClick:function(t){this.$emit("app-click",t,this.tabTitle)}}},u=a(23),d=Object(u.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content"},[a("div",{staticClass:"dashboard-content__title-block"},[a("h3",{staticClass:"content-title"},[t._v("My applications")]),t._v(" "),a("button",{staticClass:"btn btn--accent",attrs:{type:"button"},on:{click:t.toggleModal}},[t._v("Create app")])]),t._v(" "),a("div",{staticClass:"applications-list-wrap"},[a("ul",{staticClass:"applications-list"},t._l(t.getApplicationsList,(function(e,s){return a("li",{key:s,staticClass:"applications-list-item",on:{click:function(e){return t.handleAppClick(s)}}},[a("div",{staticClass:"info-box"},[a("div",{staticClass:"title-wrap"},[a("span",{staticClass:"application-title"},[t._v(t._s(e.appName))]),t._v(" "),a("span",{staticClass:"creation-date"},[t._v(t._s(e.keyIssued))])])]),t._v(" "),a("span",{staticClass:"link-text"},[t._v("View details")])])})),0),t._v(" "),t.getApplicationsList.length?a("dashboard-table-bottom",{attrs:{module:t.module}}):t._e()],1),t._v(" "),a("card-links-section"),t._v(" "),t.modalIsVisible?a("dashboard-modal",{on:{"close-modal":function(e){t.modalIsVisible=!1}}}):t._e()],1)}),[],!1,null,null,null);e.default=d.exports}}]);
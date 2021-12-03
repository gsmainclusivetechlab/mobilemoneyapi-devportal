(window.webpackJsonp=window.webpackJsonp||[]).push([[24,54,56],{419:function(t,s,a){"use strict";a.r(s);var e=a(35),n=(a(85),{name:"dashboard-modal",data:function(){return{tooltipPopupIsVisible:!1,items:["GSMA Mobile Money API v1.2 OAuth_Simulator","GSMA Mobile Money API v1.1 OAuth_Simulator","GSMA Mobile Money API v1.0 OAuth_Simulator"],form:{appName:"",usagePlan:""}}},methods:{handleModalClose:function(){this.$emit("close-modal")},createApp:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return console.log("post-app"),s.next=3,t.$store.dispatch("application/postApp",t.form).then((function(){})).catch((function(){console.log("error")}));case 3:case"end":return s.stop()}}),s)})))()}}}),i=a(15),o=Object(i.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard-modal"},[a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"modal-container"},[a("button",{staticClass:"close-btn",on:{click:t.handleModalClose}}),t._v(" "),a("span",{staticClass:"modal-title"},[t._v("Create app")]),t._v(" "),a("ValidationObserver",{ref:"create-app",scopedSlots:t._u([{key:"default",fn:function(s){var e=s.invalid,n=s.handleSubmit;return[a("form",{on:{submit:function(s){return s.preventDefault(),n(t.createApp)}}},[a("ValidationProvider",{staticClass:"input-wrap",attrs:{vid:"app-name",rules:{required:{allowFalse:!1},min:2},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.errors;return[a("label",{attrs:{for:"app-name"}},[t._v("\n              App name\n              "),a("span",{directives:[{name:"show",rawName:"v-show",value:e[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(e[0])+")")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.appName,expression:"form.appName"}],attrs:{type:"text",id:"app-name",placeholder:"Enter app name"},domProps:{value:t.form.appName},on:{input:function(s){s.target.composing||t.$set(t.form,"appName",s.target.value)}}})]}}],null,!0)}),t._v(" "),a("ValidationProvider",{staticClass:"input-wrap input-wrapper__custom-select",attrs:{vid:"product-name",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(s){var e=s.errors;return[a("label",{attrs:{for:"product-name"}},[t._v("Product\n              "),a("div",{staticClass:"tooltip-wrap"},[a("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(s){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(s){t.tooltipPopupIsVisible=!1}}},[t._v("?\n                ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(e[0])+")")])]),t._v(" "),a("v-select",{attrs:{"return-object":"",id:"product-name",name:"country",clearable:!1,options:t.items,placeholder:"Select product"},model:{value:t.form.usagePlan,callback:function(s){t.$set(t.form,"usagePlan",s)},expression:"form.usagePlan"}})]}}],null,!0)}),t._v(" "),a("div",{staticClass:"btn-row"},[a("button",{staticClass:"cancel-btn btn btn--link",attrs:{type:"button"},on:{click:t.handleModalClose}},[t._v("Cancel")]),t._v(" "),a("button",{staticClass:"btn btn btn--accent",attrs:{disabled:e,type:"submit"}},[t._v("Create app")])])],1)]}}])})],1)])])}),[],!1,null,null,null);s.default=o.exports},420:function(t,s,a){"use strict";a.r(s);var e={name:"card-links-section"},n=a(15),i=Object(n.a)(e,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"links-cards"},[a("span",{staticClass:"links-cards-title"},[t._v("Useful links")]),t._v(" "),a("div",{staticClass:"cards-wrap"},[a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Getting started")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/get-started.html"}},[t._v("Get started")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("API Endpoints")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/api-service-definition.html"}},[t._v("Go to API Endpoints")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Open OAS UI")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/open-oas3-ui.html"}},[t._v("Open OAS UI")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Security")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/security/"}},[t._v("Go to Security")])])])])}],!1,null,null,null);s.default=i.exports},470:function(t,s,a){"use strict";a.r(s);var e=a(35),n=(a(85),a(419)),i=a(420),o={name:"applications-tab",components:{dashboardModal:n.default,cardLinksSection:i.default},data:function(){return{tabTitle:"Applications",modalIsVisible:!1,dashboardApplicationsDB:{0:{appName:"Application 1",keyIssue:"Jan 19, 2021",expires:"Never",usagePlan:"GSMA Mobile Money API v1.0 OAuth_Simulator",consumerKey:"jhfpq8934frtp8g534rft",consumerSecret:"098213jufvn8930",apiKey:"4jb5089gh324f"},1:{appName:"Application 2",keyIssue:"Jun 05, 2021",expires:"Jan 19, 2023",usagePlan:"GSMA Mobile Money API v1.2 OAuth_Simulator",consumerKey:"7bg4568fb2384bh",consumerSecret:"vfbhsk478fg597e",apiKey:"153cd623df76gvbf4578g"}}}},created:function(){this.getApps()},methods:{toggleModal:function(){this.modalIsVisible=!this.modalIsVisible},handleAppClick:function(t){this.$emit("app-click",t,this.tabTitle)},getApps:function(){var t=this;return Object(e.a)(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return console.log("get-apps"),s.next=3,t.$store.dispatch("application/getApps").then((function(){})).catch((function(){console.log("error")}));case 3:case"end":return s.stop()}}),s)})))()}}},r=a(15),l=Object(r.a)(o,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard-content"},[a("h3",{staticClass:"content-title"},[t._v("My applications")]),t._v(" "),a("div",{staticClass:"applications-list-wrap"},[a("ul",{staticClass:"applications-list"},t._l(t.dashboardApplicationsDB,(function(s,e){return a("li",{staticClass:"applications-list-item",on:{click:function(s){return t.handleAppClick(e)}}},[a("div",{staticClass:"info-box"},[a("div",{staticClass:"title-wrap"},[a("span",{staticClass:"application-title"},[t._v(t._s(s.appName))]),t._v(" "),a("span",{staticClass:"creation-date"},[t._v(t._s(s.keyIssue))])])]),t._v(" "),a("span",{staticClass:"link-text"},[t._v("View details")])])})),0),t._v(" "),a("div",{staticClass:"btn-row"},[a("button",{staticClass:"btn btn--accent",attrs:{type:"button"},on:{click:t.toggleModal}},[t._v("Create app")])])]),t._v(" "),a("card-links-section"),t._v(" "),t.modalIsVisible?a("dashboard-modal",{on:{"close-modal":function(s){t.modalIsVisible=!1}}}):t._e()],1)}),[],!1,null,null,null);s.default=l.exports}}]);
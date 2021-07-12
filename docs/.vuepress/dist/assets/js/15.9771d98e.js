(window.webpackJsonp=window.webpackJsonp||[]).push([[15,46,48],{326:function(t,s,a){"use strict";a.r(s);var e={name:"dashboard-modal",data:function(){return{tooltipPopupIsVisible:!1,items:["GSMA Mobile Money API v1.2 OAuth_Simulator","GSMA Mobile Money API v1.1 OAuth_Simulator","GSMA Mobile Money API v1.0 OAuth_Simulator"]}},methods:{handleModalClose:function(){this.$emit("close-modal")}}},i=a(24),l=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard-modal"},[a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"modal-container"},[a("button",{staticClass:"close-btn",on:{click:t.handleModalClose}}),t._v(" "),a("span",{staticClass:"modal-title"},[t._v("Create app")]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"input-wrap input-wrapper__custom-select"},[a("label",{attrs:{for:"product-name"}},[t._v("Product\n          "),a("div",{staticClass:"tooltip-wrap"},[a("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(s){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(s){t.tooltipPopupIsVisible=!1}}},[t._v("?")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])])]),t._v(" "),a("v-select",{attrs:{"return-object":"",id:"product-name",name:"country",clearable:!1,options:t.items,placeholder:"Select product"}})],1),t._v(" "),a("div",{staticClass:"btn-row"},[a("button",{staticClass:"cancel-btn btn btn--link",attrs:{type:"button"},on:{click:t.handleModalClose}},[t._v("Cancel")]),t._v(" "),a("button",{staticClass:"btn btn btn--accent",attrs:{type:"button"}},[t._v("Create app")])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-wrap"},[s("label",{attrs:{for:"app-name"}},[this._v("App name")]),this._v(" "),s("input",{attrs:{id:"app-name",type:"text",placeholder:"Enter app name"}})])}],!1,null,null,null);s.default=l.exports},327:function(t,s,a){"use strict";a.r(s);var e={name:"card-links-section"},i=a(24),l=Object(i.a)(e,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"links-cards"},[a("span",{staticClass:"links-cards-title"},[t._v("Useful links")]),t._v(" "),a("div",{staticClass:"cards-wrap"},[a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Getting started")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/get-started.html"}},[t._v("Get started")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("API Endpoints")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/api-service-definition.html"}},[t._v("Go to API Endpoints")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Open OAS UI")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/api-versions-1.2/resources/open-oas3-ui.html"}},[t._v("Open OAS UI")])]),t._v(" "),a("div",{staticClass:"card"},[a("span",{staticClass:"card-title"},[t._v("Security")]),t._v(" "),a("span",{staticClass:"card-text"},[t._v("We offer a comlete set of tools to support most business models.")]),t._v(" "),a("a",{staticClass:"btn btn--link",attrs:{href:"/security/"}},[t._v("Go to Security")])])])])}],!1,null,null,null);s.default=l.exports},364:function(t,s,a){"use strict";a.r(s);var e=a(326),i=a(327),l={name:"applications-tab",components:{dashboardModal:e.default,cardLinksSection:i.default},data:function(){return{tabTitle:"Applications",tabIcon:'\n  <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1.60016 0.160156C0.810699 0.160156 0.160156 0.810698 0.160156 1.60016V7.84016C0.160156 8.62961 0.810699 9.28016 1.60016 9.28016H7.84016C8.62961 9.28016 9.28016 8.62961 9.28016 7.84016V1.60016C9.28016 0.810698 8.62961 0.160156 7.84016 0.160156H1.60016ZM12.1602 0.160156C11.3707 0.160156 10.7202 0.810698 10.7202 1.60016V7.84016C10.7202 8.62961 11.3707 9.28016 12.1602 9.28016H18.4002C19.1896 9.28016 19.8402 8.62961 19.8402 7.84016V1.60016C19.8402 0.810698 19.1896 0.160156 18.4002 0.160156H12.1602ZM1.60016 1.12016H7.84016C8.11438 1.12016 8.32016 1.32593 8.32016 1.60016V7.84016C8.32016 8.11438 8.11438 8.32016 7.84016 8.32016H1.60016C1.32593 8.32016 1.12016 8.11438 1.12016 7.84016V1.60016C1.12016 1.32593 1.32593 1.12016 1.60016 1.12016ZM12.1602 1.12016H18.4002C18.6744 1.12016 18.8802 1.32593 18.8802 1.60016V7.84016C18.8802 8.11438 18.6744 8.32016 18.4002 8.32016H12.1602C11.8859 8.32016 11.6802 8.11438 11.6802 7.84016V1.60016C11.6802 1.32593 11.8859 1.12016 12.1602 1.12016ZM15.2277 10.7127C15.1084 10.7258 14.9983 10.7831 14.9192 10.8733C14.84 10.9636 14.7976 11.0802 14.8002 11.2002V14.8002H11.2002C11.1852 14.7995 11.1701 14.7995 11.1552 14.8002C11.0921 14.8031 11.0303 14.8184 10.9732 14.8453C10.916 14.8721 10.8648 14.91 10.8223 14.9566C10.7798 15.0033 10.7469 15.0579 10.7255 15.1172C10.7041 15.1766 10.6946 15.2396 10.6976 15.3027C10.7005 15.3657 10.7159 15.4275 10.7427 15.4847C10.7696 15.5418 10.8074 15.593 10.8541 15.6355C10.9008 15.678 10.9553 15.7109 11.0147 15.7323C11.0741 15.7536 11.1371 15.7631 11.2002 15.7602H14.8002V19.3602C14.7993 19.4238 14.811 19.4869 14.8347 19.5459C14.8584 19.605 14.8937 19.6587 14.9383 19.704C14.983 19.7493 15.0362 19.7852 15.0949 19.8098C15.1536 19.8344 15.2165 19.847 15.2802 19.847C15.3438 19.847 15.4067 19.8344 15.4654 19.8098C15.5241 19.7852 15.5773 19.7493 15.622 19.704C15.6667 19.6587 15.7019 19.605 15.7256 19.5459C15.7493 19.4869 15.7611 19.4238 15.7602 19.3602V15.7602H19.3602C19.4238 15.7611 19.4869 15.7493 19.5459 15.7256C19.605 15.7019 19.6587 15.6667 19.704 15.622C19.7493 15.5773 19.7852 15.5241 19.8098 15.4654C19.8344 15.4067 19.847 15.3438 19.847 15.2802C19.847 15.2165 19.8344 15.1536 19.8098 15.0949C19.7852 15.0362 19.7493 14.983 19.704 14.9383C19.6587 14.8937 19.605 14.8584 19.5459 14.8347C19.4869 14.811 19.4238 14.7993 19.3602 14.8002H15.7602V11.2002C15.7616 11.1318 15.7485 11.064 15.7216 11.0011C15.6948 10.9383 15.6548 10.8819 15.6044 10.8357C15.554 10.7896 15.4943 10.7547 15.4293 10.7335C15.3643 10.7123 15.2956 10.7052 15.2277 10.7127ZM1.60016 10.7202C0.810699 10.7202 0.160156 11.3707 0.160156 12.1602V18.4002C0.160156 19.1896 0.810699 19.8402 1.60016 19.8402H7.84016C8.62961 19.8402 9.28016 19.1896 9.28016 18.4002V12.1602C9.28016 11.3707 8.62961 10.7202 7.84016 10.7202H1.60016ZM1.60016 11.6802H7.84016C8.11438 11.6802 8.32016 11.8859 8.32016 12.1602V18.4002C8.32016 18.6744 8.11438 18.8802 7.84016 18.8802H1.60016C1.32593 18.8802 1.12016 18.6744 1.12016 18.4002V12.1602C1.12016 11.8859 1.32593 11.6802 1.60016 11.6802Z"/>\n  </svg>\n',children:!0,modalIsVisible:!1,dashboardApplicationsDB:{0:{appName:"Application 1",appDefault:!0,appCreated:"1.06.21",appExpire:"",appStatus:"",productBind:"GSMA Mobile Money API v1.0 OAuth_Simulator",consumerKey:"jhfpq8934frtp8g534rft",consumerSecret:"098213jufvn8930",apiKey:"4jb5089gh324f"},1:{appName:"Application 2",appDefault:!1,appCreated:"8.05.21",appExpire:"",appStatus:"",productBind:"GSMA Mobile Money API v1.2 OAuth_Simulator",consumerKey:"7bg4568fb2384bh",consumerSecret:"vfbhsk478fg597e",apiKey:"153cd623df76gvbf4578g"}}}},methods:{toggleModal:function(){this.modalIsVisible=!this.modalIsVisible},handleAppClick:function(t){this.$emit("app-click",t,this.tabTitle)}}},n=a(24),o=Object(n.a)(l,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"dashboard-content"},[a("h3",{staticClass:"content-title"},[t._v("My applications")]),t._v(" "),a("div",{staticClass:"applications-list-wrap"},[a("ul",{staticClass:"applications-list"},t._l(t.dashboardApplicationsDB,(function(s,e){return a("li",{staticClass:"applications-list-item",on:{click:function(s){return t.handleAppClick(e)}}},[a("div",{staticClass:"info-box"},[a("div",{staticClass:"title-wrap"},[a("span",{staticClass:"application-title"},[t._v(t._s(s.appName))]),t._v(" "),a("span",{staticClass:"creation-date"},[t._v(t._s(s.appCreated))])]),t._v(" "),s.appDefault?a("div",{staticClass:"label-wrap"},[a("span",{staticClass:"default-label"},[t._v("Default app")])]):t._e()]),t._v(" "),a("span",{staticClass:"link-text"},[t._v("View details")])])})),0),t._v(" "),a("div",{staticClass:"btn-row"},[a("button",{staticClass:"btn btn--accent",attrs:{type:"button"},on:{click:t.toggleModal}},[t._v("Create app")])])]),t._v(" "),a("card-links-section"),t._v(" "),t.modalIsVisible?a("dashboard-modal",{on:{"close-modal":function(s){t.modalIsVisible=!1}}}):t._e()],1)}),[],!1,null,null,null);s.default=o.exports}}]);
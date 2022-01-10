(window.webpackJsonp=window.webpackJsonp||[]).push([[2,11,33,34,62,69],{384:function(t,e,a){"use strict";a.r(e);var n={name:"spinner-component",props:{table:{type:Boolean,default:!1}}},s=a(17),r=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"icon-spinner",class:{"icon-spinner--table":this.table}})}),[],!1,null,null,null);e.default=r.exports},395:function(t,e,a){"use strict";var n=a(1);n="default"in n?n.default:n;/^2\./.test(n.version)||n.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+n.version);var s="_vue_clickaway_handler";function r(t,e,a){i(t);var n=a.context,r=e.value;if("function"==typeof r){var o=!1;setTimeout((function(){o=!0}),0),t[s]=function(e){var a=e.path||(e.composedPath?e.composedPath():void 0);if(o&&(a?a.indexOf(t)<0:!t.contains(e.target)))return r.call(n,e)},document.documentElement.addEventListener("click",t[s],!1)}}function i(t){document.documentElement.removeEventListener("click",t[s],!1),delete t[s]}var o={bind:r,update:function(t,e){e.value!==e.oldValue&&r(t,e)},unbind:i},l={directives:{onClickaway:o}};e.version="2.2.2",e.directive=o,e.mixin=l},396:function(t,e,a){"use strict";a.r(e);var n=a(13),s=a(3),r=(a(45),a(11),a(90)),i={name:"dashboard-modal",components:{SpinnerComponent:a(384).default},data:function(){return{tooltipPopupIsVisible:!1,waitingResponse:!1,form:{appName:"",usagePlan:""}}},computed:Object(s.a)(Object(s.a)({},Object(r.b)("usagePlans",["getPublishedUsagePlans"])),Object(r.b)("application",["getApplicationsList"])),methods:{handleModalClose:function(){this.$emit("close-modal")},createApp:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.waitingResponse=!0,e.next=3,t.$store.dispatch("application/postApp",t.form).then((function(){t.handleModalClose()})).finally((function(){t.waitingResponse=!1}));case 3:case"end":return e.stop()}}),e)})))()}}},o=a(17),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-modal"},[a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"modal-container"},[a("button",{staticClass:"close-btn",on:{click:t.handleModalClose}}),t._v(" "),a("span",{staticClass:"modal-title"},[t._v("Create app")]),t._v(" "),a("ValidationObserver",{ref:"create-app",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.invalid,s=e.handleSubmit;return[a("form",{on:{submit:function(e){return e.preventDefault(),s(t.createApp)}}},[a("ValidationProvider",{staticClass:"input-wrap",attrs:{vid:"app-name",rules:{required:{allowFalse:!1},min:2,check_same_name:t.getApplicationsList},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("label",{attrs:{for:"app-name"}},[t._v("\n              App name\n              "),a("span",{directives:[{name:"show",rawName:"v-show",value:n[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(n[0])+")")])]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.appName,expression:"form.appName"}],attrs:{type:"text",id:"app-name",placeholder:"Enter app name"},domProps:{value:t.form.appName},on:{input:function(e){e.target.composing||t.$set(t.form,"appName",e.target.value)}}})]}}],null,!0)}),t._v(" "),a("ValidationProvider",{staticClass:"input-wrap input-wrapper__custom-select",attrs:{vid:"product-name",rules:{required:{allowFalse:!1}},tag:"div"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("label",{attrs:{for:"product-name"}},[t._v("Product\n              "),a("div",{staticClass:"tooltip-wrap"},[a("button",{staticClass:"tooltip-btn",attrs:{tabindex:"0"},on:{click:function(e){t.tooltipPopupIsVisible=!t.tooltipPopupIsVisible},focusout:function(e){t.tooltipPopupIsVisible=!1}}},[t._v("?\n                ")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.tooltipPopupIsVisible,expression:"tooltipPopupIsVisible"}],staticClass:"tooltip-popup"},[t._v("Here you can select product version")])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:n[0],expression:"errors[0]"}],staticClass:"form-row__error"},[t._v("("+t._s(n[0])+")")])]),t._v(" "),a("v-select",{attrs:{"return-object":"",id:"product-name",name:"country",clearable:!1,options:t.getPublishedUsagePlans,placeholder:"Select product",reduce:function(t){return t.value}},model:{value:t.form.usagePlan,callback:function(e){t.$set(t.form,"usagePlan",e)},expression:"form.usagePlan"}})]}}],null,!0)}),t._v(" "),a("div",{staticClass:"btn-row"},[a("button",{staticClass:"cancel-btn btn btn--link",attrs:{type:"button"},on:{click:t.handleModalClose}},[t._v("Cancel")]),t._v(" "),a("button",{staticClass:"btn btn btn--accent",attrs:{disabled:n||t.waitingResponse,type:"submit"}},[t.waitingResponse?a("spinner-component"):a("span",[t._v("Create app")])],1)])],1)]}}])})],1)])])}),[],!1,null,null,null);e.default=l.exports},399:function(t,e,a){"use strict";var n=a(411),s=a(412);t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),s)},404:function(t,e,a){"use strict";a.r(e);a(405),a(11),a(399),a(21),a(24);var n=a(446),s=a(447),r={name:"dashboard-table",components:{DashboardModal:a(396).default,DashboardTableTop:s.default,DashboardTableBottom:n.default},props:{tableHeadersData:{type:Array,default:function(){return[]}},isCenterHeader:{type:Boolean,default:!1},indexCenter:{type:Number,default:0},tableTitle:{type:String,default:""},tableClass:{type:String,default:""},hideFilter:{type:Boolean,default:!1},filterData:{type:Set},dataLength:{type:Number,default:1},pagesCount:{type:Number,default:1},currentPage:{type:Number,default:1},perPage:{type:Number,default:1},isCreateButton:{type:Boolean,default:!1},pageType:{type:String,default:""}},data:function(){return{modalIsVisible:!1,confirmationModal:!1}},methods:{toggleModal:function(){this.modalIsVisible=!this.modalIsVisible}}},i=a(17),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-content dashboard-content__table",class:[t.tableClass]},[a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("h3",[t._v(t._s(t.tableTitle))]),t._v(" "),t.isCreateButton?a("div",{staticClass:"btn-row"},[a("button",{staticClass:"btn btn--accent btn__create",attrs:{type:"button"},on:{click:t.toggleModal}},[t._v("Create")])]):t._e()]),t._v(" "),a("div",{staticClass:"table-block"},[a("dashboard-table-top",{attrs:{hideFilter:t.hideFilter,filterData:t.filterData,pageType:t.pageType},on:{"search-value":function(e){return t.$emit("search-value",e)},"filter-value":function(e){return t.$emit("filter-value",e)},"sort-value":function(e){return t.$emit("sort-value",e)}}}),t._v(" "),a("table",{staticClass:"dashboard-table"},[a("tr",{staticClass:"dashboard-table__row"},[t._l(t.tableHeadersData,(function(e,n){return a("th",{key:n,staticClass:"dashboard-table__cell dashboard-table__cell--heading",class:{"dashboard-table__cell--center":!!t.isCenterHeader&&n===t.indexCenter}},[t._v("\n            "+t._s(e)+"\n          ")])})),t._v(" "),"plans"!==t.pageType?a("th",{staticClass:"dashboard-table__cell dashboard-table__cell--heading"}):t._e()],2),t._v(" "),t._t("default")],2),t._v(" "),a("dashboard-table-bottom",{attrs:{dataLength:t.dataLength,"pages-count":t.pagesCount,"current-page":t.currentPage,"per-page":t.perPage},on:{"set-current-page":function(e){return t.$emit("set-current-page",e)}}})],1),t._v(" "),t.modalIsVisible?a("dashboard-modal",{on:{"close-modal":function(e){t.modalIsVisible=!1}}}):t._e()],1)}),[],!1,null,null,null);e.default=o.exports},405:function(t,e,a){"use strict";var n=a(15),s=a(9),r=a(93),i=a(26),o=a(19),l=a(49),u=a(219),c=a(72),p=a(8),d=a(54),f=a(73).f,v=a(41).f,b=a(18).f,h=a(222).trim,m=s.Number,_=m.prototype,g="Number"==l(d(_)),y=function(t){var e,a,n,s,r,i,o,l,u=c(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=h(u)).charCodeAt(0))||45===e){if(88===(a=u.charCodeAt(2))||120===a)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+u}for(i=(r=u.slice(2)).length,o=0;o<i;o++)if((l=r.charCodeAt(o))<48||l>s)return NaN;return parseInt(r,n)}return+u};if(r("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var C,w=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof w&&(g?p((function(){_.valueOf.call(a)})):"Number"!=l(a))?u(new m(y(e)),a,w):y(e)},x=n?f(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;x.length>k;k++)o(m,C=x[k])&&!o(w,C)&&b(w,C,v(m,C));w.prototype=_,_.constructor=w,i(s,"Number",w)}},408:function(t,e,a){"use strict";a.r(e);var n={name:"sort-by-block",props:{value:{type:String,default:""},pageType:{type:String,default:""}},computed:{getValues:function(){return"users"===this.pageType?this.valuesUsers:"applications"===this.pageType?this.valuesApplications:"plans"===this.pageType?this.valuesPlans:[]}},data:function(){return{valuesUsers:[{title:"Newest",value:"Newest"},{title:"Oldest",value:"Oldest"},{title:"First name",value:"firstName"},{title:"Active",value:"Active"},{title:"Inactive",value:"Inactive"},{title:"Blocked",value:"Blocked"}],valuesApplications:[{title:"Key Issue Date",value:"keyIssued"},{title:"Author",value:"userName"},{title:"Usage plan",value:"usagePlan"}],valuesPlans:[{title:"Unpublish",value:"unpublished"},{title:"Publish",value:"published"}]}},methods:{setSortValue:function(t){this.$emit("input",t),this.$emit("hide-sort-block")}}},s=a(17),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sort-by-options"},t._l(t.getValues,(function(e){return a("button",{key:e.title,staticClass:"sort-by-options__button",class:{"sort-by-options__button--active":e.value===t.value},attrs:{type:"button"},on:{click:function(a){return t.setSortValue(e.value)}}},[t._v("\n    "+t._s(e.title)+"\n  ")])})),0)}),[],!1,null,null,null);e.default=r.exports},411:function(t,e,a){"use strict";var n=a(4),s=a(9),r=a(93),i=a(26),o=a(216),l=a(215),u=a(213),c=a(14),p=a(8),d=a(130),f=a(70),v=a(219);t.exports=function(t,e,a){var b=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),m=b?"set":"add",_=s[t],g=_&&_.prototype,y=_,C={},w=function(t){var e=g[t];i(g,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!c(t))&&e.call(this,0===t?0:t)}:function(t,a){return e.call(this,0===t?0:t,a),this})};if(r(t,"function"!=typeof _||!(h||g.forEach&&!p((function(){(new _).entries().next()})))))y=a.getConstructor(e,t,b,m),o.REQUIRED=!0;else if(r(t,!0)){var x=new y,k=x[m](h?{}:-0,1)!=x,S=p((function(){x.has(1)})),N=d((function(t){new _(t)})),P=!h&&p((function(){for(var t=new _,e=5;e--;)t[m](e,e);return!t.has(-0)}));N||((y=e((function(e,a){u(e,y,t);var n=v(new _,e,y);return null!=a&&l(a,n[m],{that:n,AS_ENTRIES:b}),n}))).prototype=g,g.constructor=y),(S||P)&&(w("delete"),w("has"),b&&w("get")),(P||k)&&w(m),h&&g.clear&&delete g.clear}return C[t]=y,n({global:!0,forced:y!=_},C),f(y,t),h||a.setStrong(y,t,b),y}},412:function(t,e,a){"use strict";var n=a(18).f,s=a(54),r=a(220),i=a(71),o=a(213),l=a(215),u=a(127),c=a(128),p=a(15),d=a(216).fastKey,f=a(46),v=f.set,b=f.getterFor;t.exports={getConstructor:function(t,e,a,u){var c=t((function(t,n){o(t,c,e),v(t,{type:e,index:s(null),first:void 0,last:void 0,size:0}),p||(t.size=0),null!=n&&l(n,t[u],{that:t,AS_ENTRIES:a})})),f=b(e),h=function(t,e,a){var n,s,r=f(t),i=m(t,e);return i?i.value=a:(r.last=i={index:s=d(e,!0),key:e,value:a,previous:n=r.last,next:void 0,removed:!1},r.first||(r.first=i),n&&(n.next=i),p?r.size++:t.size++,"F"!==s&&(r.index[s]=i)),t},m=function(t,e){var a,n=f(t),s=d(e);if("F"!==s)return n.index[s];for(a=n.first;a;a=a.next)if(a.key==e)return a};return r(c.prototype,{clear:function(){for(var t=f(this),e=t.index,a=t.first;a;)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete e[a.index],a=a.next;t.first=t.last=void 0,p?t.size=0:this.size=0},delete:function(t){var e=f(this),a=m(this,t);if(a){var n=a.next,s=a.previous;delete e.index[a.index],a.removed=!0,s&&(s.next=n),n&&(n.previous=s),e.first==a&&(e.first=n),e.last==a&&(e.last=s),p?e.size--:this.size--}return!!a},forEach:function(t){for(var e,a=f(this),n=i(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:a.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!m(this,t)}}),r(c.prototype,a?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),p&&n(c.prototype,"size",{get:function(){return f(this).size}}),c},setStrong:function(t,e,a){var n=e+" Iterator",s=b(e),r=b(n);u(t,e,(function(t,e){v(this,{type:n,target:t,state:s(t),kind:e,last:void 0})}),(function(){for(var t=r(this),e=t.kind,a=t.last;a&&a.removed;)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),c(e)}}},446:function(t,e,a){"use strict";a.r(e);a(405);var n={name:"dashboard-table-bottom",props:{dataLength:{type:Number,default:1},pagesCount:{type:Number,default:1},currentPage:{type:Number,default:1},perPage:{type:Number,default:1}}},s=a(17),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-table-bottom"},[a("span",[t._v("Showing "+t._s(t.perPage*(t.currentPage-1)+1)+" to "+t._s(t.currentPage===t.pagesCount?t.dataLength:t.perPage*t.currentPage)+" of "+t._s(t.dataLength)+" entries")]),t._v(" "),a("div",[a("button",{staticClass:"dashboard-table__pagination-arrow dashboard-table__pagination-arrow--left",class:{"dashboard-table__pagination-arrow--inactive":1===t.currentPage},attrs:{type:"button"},on:{click:function(e){return t.$emit("set-current-page",t.currentPage-1)}}},[t._v("\n      < Prev\n    ")]),t._v(" "),t._l(t.pagesCount,(function(e){return a("button",{key:e,staticClass:"dashboard-table__pagination-item",class:{"dashboard-table__pagination-item--active":e===t.currentPage},attrs:{type:"button"},on:{click:function(a){return t.$emit("set-current-page",e)}}},[t._v(t._s(e)+"\n    ")])})),t._v(" "),a("button",{staticClass:"dashboard-table__pagination-arrow dashboard-table__pagination-arrow--right",class:{"dashboard-table__pagination-arrow--inactive":t.currentPage===t.pagesCount},attrs:{type:"button"},on:{click:function(e){return t.$emit("set-current-page",t.currentPage+1)}}},[t._v("\n      Next >\n    ")])],2)])}),[],!1,null,"e2979a4e",null);e.default=r.exports},447:function(t,e,a){"use strict";a.r(e);var n=a(52),s=(a(11),a(399),a(21),a(24),a(29),a(92),a(408)),r=a(395),i={name:"dashboard-table-top",components:{SortByBlock:s.default},props:{hideFilter:{type:Boolean,default:!1},filterData:{type:Set},pageType:{type:String,default:""}},data:function(){return{activeSortOptions:!1,filterSelected:"",searchValue:"",sortValue:""}},watch:{searchValue:function(t){this.$emit("search-value",t)},filterSelected:function(t){this.$emit("filter-value",t)},sortValue:function(t){this.$emit("sort-value",t)}},computed:{getFilterData:function(){return this.filterData?["All Companies"].concat(Object(n.a)(this.filterData)).map((function(t){return{label:t}})):[]}},mixins:[r.mixin],created:function(){"applications"===this.pageType&&(this.sortValue="keyIssued"),"plans"===this.pageType&&(this.sortValue="published"),"users"===this.pageType&&(this.sortValue="Active")},methods:{showSortByOptions:function(){this.activeSortOptions=!0},hideSortByOptions:function(){this.activeSortOptions=!1}}},o=a(17),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-table-top"},[a("div",{staticClass:"search-block"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search-block__input",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}})]),t._v(" "),t.hideFilter?t._e():a("div",{staticClass:"dashboard-table__select-block"},[t._v("\n    Filter:\n    "),a("v-select",{staticClass:"vs-custom-style",attrs:{options:t.getFilterData,placeholder:"Company name",reduce:function(t){return t.label},clearable:!1},scopedSlots:t._u([{key:"open-indicator",fn:function(e){var n=e.attributes;return[a("img",t._b({staticClass:"expand-arrow",attrs:{src:"/images/expand_arrow.svg",alt:""}},"img",n,!1))]}}],null,!1,4272290012),model:{value:t.filterSelected,callback:function(e){t.filterSelected=e},expression:"filterSelected"}})],1),t._v(" "),a("div",{staticClass:"dashboard-table__sort-by"},[a("button",{staticClass:"dashboard-table__button",attrs:{type:"button"},on:{click:t.showSortByOptions}},[t._v("\n      Sort by\n      "),a("img",{staticClass:"expand-arrow",class:{"expand-arrow--revert":t.activeSortOptions},attrs:{src:"/images/expand_arrow.svg",alt:""}})]),t._v(" "),t.activeSortOptions?a("sort-by-block",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.hideSortByOptions,expression:"hideSortByOptions"}],attrs:{pageType:t.pageType},on:{"hide-sort-block":t.hideSortByOptions},model:{value:t.sortValue,callback:function(e){t.sortValue=e},expression:"sortValue"}}):t._e()],1)])}),[],!1,null,"0b78eb00",null);e.default=l.exports}}]);
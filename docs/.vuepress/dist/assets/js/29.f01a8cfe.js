(window.webpackJsonp=window.webpackJsonp||[]).push([[29,67],{403:function(t,e,s){"use strict";var a=s(2);a="default"in a?a.default:a;/^2\./.test(a.version)||a.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+a.version);var i="_vue_clickaway_handler";function o(t,e,s){n(t);var a=s.context,o=e.value;if("function"==typeof o){var r=!1;setTimeout((function(){r=!0}),0),t[i]=function(e){var s=e.path||(e.composedPath?e.composedPath():void 0);if(r&&(s?s.indexOf(t)<0:!t.contains(e.target)))return o.call(a,e)},document.documentElement.addEventListener("click",t[i],!1)}}function n(t){document.documentElement.removeEventListener("click",t[i],!1),delete t[i]}var r={bind:o,update:function(t,e){e.value!==e.oldValue&&o(t,e)},unbind:n},l={directives:{onClickaway:r}};e.version="2.2.2",e.directive=r,e.mixin=l},412:function(t,e,s){"use strict";s.r(e);var a={name:"sort-by-block",props:{value:{type:String,default:""},pageType:{type:String,default:""}},computed:{getValues:function(){return"users"===this.pageType?this.valuesUsers:"applications"===this.pageType?this.valuesApplications:"plans"===this.pageType?this.valuesPlans:[]}},data:function(){return{valuesUsers:[{title:"Newest",value:"Newest"},{title:"Oldest",value:"Oldest"},{title:"First name",value:"firstName"}],valuesApplications:[{title:"Key Issue Date",value:"keyIssued"},{title:"Author",value:"author"},{title:"Usage plan",value:"usagePlan"}],valuesPlans:[{title:"Unpublish",value:"unPublish"},{title:"Publish",value:"publish"}]}},methods:{setSortValue:function(t){this.$emit("input",t),this.$emit("hide-sort-block")}}},i=s(24),o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sort-by-options"},t._l(t.getValues,(function(e){return s("button",{key:e.title,staticClass:"sort-by-options__button",class:{"sort-by-options__button--active":e.value===t.value},attrs:{type:"button"},on:{click:function(s){return t.setSortValue(e.value)}}},[t._v("\n    "+t._s(e.title)+"\n  ")])})),0)}),[],!1,null,null,null);e.default=o.exports},446:function(t,e,s){"use strict";s.r(e);s(129);var a=s(412),i=s(403),o=s(19),n=s(6),r=s(3),l={name:"dashboard-table-top",components:{SortByBlock:a.default},props:{hideFilter:{type:Boolean,default:!1},searchBy:{type:Array,default:function(){return[]}},pageType:{type:String,default:""},module:{type:String,default:""}},data:function(){return{activeSortOptions:!1,searchRequest:!1,timer:null}},computed:{sortValue:function(){return this.$store.state[this.module].sortValue},searchField:function(){return this.$store.state[this.module].searchField},searchValue:function(){return this.$store.state[this.module].searchValue}},mixins:[i.mixin],created:function(){var t=this;this.$store.commit(Object(o.a)(this.module,r.c)),this.$store.commit(Object(o.a)(this.module,r.h),0),this.$store.commit(Object(o.a)(this.module,r.l),""),this.setSearchField(this.searchBy[0].value),this.$emit("start-getting-data"),this.getData().then((function(){t.$emit("end-getting-data")}))},methods:{showSortByOptions:function(){this.activeSortOptions=!0},hideSortByOptions:function(){this.activeSortOptions=!1},setSortValue:function(t){this.$store.commit(Object(o.a)(this.module,r.n),t),this.getData()},setSearchValue:function(t){var e=this;this.$store.commit(Object(o.a)(this.module,r.l),t),this.searchRequest?(this.searchRequest=!1,clearInterval(this.timer),this.setSearchValue(t)):(this.searchRequest=!0,this.timer=setTimeout((function(){e.$store.commit(Object(o.a)(e.module,r.c)),e.$store.commit(Object(o.a)(e.module,r.h),0),e.getData(),e.searchRequest=!1}),700))},setSearchField:function(t){this.$store.commit(Object(o.a)(this.module,r.k),t)},getData:function(){return this.$store.dispatch(Object(o.a)(this.module,n.b))}}},u=s(24),c=Object(u.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-table-top"},[s("div",{staticClass:"search-block"},[s("input",{staticClass:"search-block__input",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchValue},on:{input:function(e){return t.setSearchValue(e.target.value)}}})]),t._v(" "),t.hideFilter?t._e():s("div",{staticClass:"dashboard-table__select-block"},[t._v("\n    Search by:\n    "),s("v-select",{staticClass:"vs-custom-style",attrs:{value:t.searchField,options:t.searchBy,placeholder:"Company name",reduce:function(t){return t.value},clearable:!1},on:{input:t.setSearchField},scopedSlots:t._u([{key:"open-indicator",fn:function(e){var a=e.attributes;return[s("img",t._b({staticClass:"expand-arrow",attrs:{src:"/images/expand_arrow.svg",alt:""}},"img",a,!1))]}}],null,!1,4272290012)})],1),t._v(" "),s("div",{staticClass:"dashboard-table__sort-by"},[s("button",{staticClass:"dashboard-table__button",attrs:{type:"button"},on:{click:t.showSortByOptions}},[t._v("\n      Sort by\n      "),s("img",{staticClass:"expand-arrow",class:{"expand-arrow--revert":t.activeSortOptions},attrs:{src:"/images/expand_arrow.svg",alt:""}})]),t._v(" "),t.activeSortOptions?s("sort-by-block",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.hideSortByOptions,expression:"hideSortByOptions"}],attrs:{pageType:t.pageType,value:t.sortValue},on:{"hide-sort-block":t.hideSortByOptions,input:t.setSortValue}}):t._e()],1)])}),[],!1,null,"6f6b9eae",null);e.default=c.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{413:function(t,e,s){"use strict";s.r(e);var l={name:"sort-by-block",props:{value:{type:String,default:""},pageType:{type:String,default:""}},computed:{getValues:function(){return"users"===this.pageType?this.valuesUsers:"applications"===this.pageType?this.valuesApplications:"plans"===this.pageType?this.valuesPlans:[]}},data:function(){return{valuesUsers:[{title:"Newest",value:"Newest"},{title:"Oldest",value:"Oldest"},{title:"First name",value:"firstName"}],valuesApplications:[{title:"Key Issue Date",value:"keyIssued"},{title:"Author",value:"author"},{title:"Usage plan",value:"usagePlanName"}],valuesPlans:[{title:"Unpublish",value:"unPublish"},{title:"Publish",value:"publish"}]}},methods:{setSortValue:function(t){this.$emit("input",t),this.$emit("hide-sort-block")}}},a=s(24),u=Object(a.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sort-by-options"},t._l(t.getValues,(function(e){return s("button",{key:e.title,staticClass:"sort-by-options__button",class:{"sort-by-options__button--active":e.value===t.value},attrs:{type:"button"},on:{click:function(s){return t.setSortValue(e.value)}}},[t._v("\n    "+t._s(e.title)+"\n  ")])})),0)}),[],!1,null,null,null);e.default=u.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{351:function(t,e,i){"use strict";i.r(e);var n={name:"search-section",props:["title","description"],data:function(){return{filterInput:""}},created:function(){console.log("faq gage created")},methods:{handleSearch:function(){this.$emit("on-search",this.filterInput)}}},s=i(24),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search-section section--p-gap has-bg"},[i("div",{staticClass:"container container--thin"},[i("div",{staticClass:"section-intro"},[i("h1",{staticClass:"hero-section__title text-center"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"hero-section__description text-center"},[t._v(t._s(t.description))])]),t._v(" "),i("div",{staticClass:"search-input-holder"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.filterInput,expression:"filterInput"}],staticClass:"input input--search",attrs:{type:"text"},domProps:{value:t.filterInput},on:{input:[function(e){e.target.composing||(t.filterInput=e.target.value)},t.handleSearch]}})])])])}),[],!1,null,null,null);e.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{401:function(t,e,s){"use strict";s.r(e);s(129);var o={name:"dashboard-cell",props:["value"],data:function(){return{isCopied:!1,successTimeout:void 0}},methods:{copyToClipboard:function(){var t=this;navigator.clipboard.writeText(this.value).then((function(){t.setSuccessCopy()})).catch((function(t){console.error("Async: Could not copy text: ",t)}))},setSuccessCopy:function(){var t=this;clearTimeout(this.successTimeout),this.isCopied=!0,this.successTimeout=setTimeout((function(){t.isCopied=!1}),500)}}},i=s(24),c=Object(i.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticClass:"dashboard-table__cell"},[s("tippy",{staticStyle:{"max-width":"100%"},attrs:{interactive:"",delay:"600",zIndex:"1"},scopedSlots:t._u([{key:"trigger",fn:function(){return[s("div",{staticClass:"dashboard-table__cell-content"},[t._v(t._s(t.value))])]},proxy:!0}])},[t._v(" "),s("span",{staticClass:"tooltip-text",class:{"tooltip-text--copied":t.isCopied},on:{click:t.copyToClipboard}},[t._v("\n          "+t._s(t.value)+"\n        ")])])],1)}),[],!1,null,"3f3b76a4",null);e.default=c.exports}}]);
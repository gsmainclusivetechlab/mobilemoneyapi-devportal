(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{314:function(t,e,i){var n=i(0),o=i(2),s=i(69),c=[].slice,a=function(t){return function(e,i){var n=arguments.length>2,o=n?c.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,i)}};n({global:!0,bind:!0,forced:/MSIE .\./.test(s)},{setTimeout:a(o.setTimeout),setInterval:a(o.setInterval)})},315:function(t,e,i){"use strict";i.r(e);i(314);var n={name:"accordion-item",props:["expanded"],data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var t=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout((function(){t.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},o=i(24),s=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"accordion__item",class:{"accordion__item--active":t.isOpened}},[i("div",{staticClass:"accordion__item-wrapper"},[i("div",{staticClass:"accordion__item-header",on:{click:t.openClose}},[i("div",{staticClass:"title"},[t._t("header")],2),t._v(" "),i("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),t._v(" "),i("div",{staticClass:"accordion__item-body",style:{height:t.isOpened?t.itemElementHeig:"0px"}},[i("div",{staticClass:"accordion__item-body-content"},[t._t("body")],2)])])])}),[],!1,null,null,null);e.default=s.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{343:function(t,i,e){"use strict";e.r(i);var n=e(344),s=(e(336),{name:"lightbox",components:{CoolLightBox:n.a},props:["videoSrc","videoThumbSrc"],data:function(){return{index:null,items:[{title:"",description:"",thumb:this.videoThumbSrc,src:this.videoSrc}]}}}),o=e(24),c=Object(o.a)(s,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"lightbox-holder"},[e("CoolLightBox",{attrs:{items:t.items,index:t.index},on:{close:function(i){t.index=null}}}),t._v(" "),e("div",{staticClass:"images-wrapper"},t._l(t.items,(function(i,n){return e("div",{key:n,staticClass:"image",on:{click:function(i){t.index=n}}},[e("img",{attrs:{src:i.thumb}})])})),0)],1)}),[],!1,null,null,null);i.default=c.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[12,25],{316:function(t,i,e){"use strict";e.r(i);var s=e(324),n=(e(322),{name:"lightbox",components:{CoolLightBox:s.a},props:["videoSrc","videoThumbSrc"],data:function(){return{index:null,items:[{title:"",description:"",thumb:this.videoThumbSrc,src:this.videoSrc}]}}}),c=e(24),o=Object(c.a)(n,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"lightbox-holder"},[e("CoolLightBox",{attrs:{items:t.items,index:t.index},on:{close:function(i){t.index=null}}}),t._v(" "),e("div",{staticClass:"images-wrapper"},t._l(t.items,(function(i,s){return e("div",{key:s,staticClass:"image",on:{click:function(i){t.index=s}}},[e("img",{attrs:{src:i.thumb}})])})),0)],1)}),[],!1,null,null,null);i.default=o.exports},416:function(t,i,e){"use strict";e.r(i);var s={name:"industry-hero-section",components:{lightbox:e(316).default},props:["title","description","imageSrc","imageAlt"]},n=e(24),c=Object(n.a)(s,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"industry-hero-section hero-section section section--m-gap"},[e("div",{staticClass:"container"},[e("div",{staticClass:"section-intro"},[e("h1",{staticClass:"hero-section__title text-center"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"hero-section__description text-center"},[t._v(t._s(t.description))])])]),t._v(" "),e("div",{staticClass:"hero-image-holder"},[t.imageSrc?e("div",{staticClass:"images-wrapper"},[e("img",{attrs:{src:t.imageSrc,alt:t.imageAlt}})]):t._e()])])}),[],!1,null,null,null);i.default=c.exports}}]);
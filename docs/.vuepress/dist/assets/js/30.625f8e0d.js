(window.webpackJsonp=window.webpackJsonp||[]).push([[30,64],{473:function(t,e,i){"use strict";i.r(e);var s=i(474),n=(i(455),{name:"lightbox",components:{CoolLightBox:s.a},props:["videoSrc","videoThumbSrc"],data:function(){return{index:null,items:[{title:"",description:"",thumb:this.videoThumbSrc,src:this.videoSrc}]}}}),c=i(15),o=Object(c.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lightbox-holder"},[i("CoolLightBox",{attrs:{items:t.items,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),i("div",{staticClass:"images-wrapper"},t._l(t.items,(function(e,s){return i("div",{key:s,staticClass:"image",on:{click:function(e){t.index=s}}},[i("img",{attrs:{src:e.thumb}})])})),0)],1)}),[],!1,null,null,null);e.default=o.exports},569:function(t,e,i){"use strict";i.r(e);var s={name:"IndustryHeroSection",components:{lightbox:i(473).default},props:["imageSrc","imageAlt"]},n=i(15),c=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"industry-hero-section hero-section section section--m-gap"},[i("div",{staticClass:"container"},[i("div",{staticClass:"section-intro"},[i("h1",{staticClass:"hero-section__title text-center"},[t._t("title")],2),t._v(" "),i("div",{staticClass:"hero-section__description text-center"},[t._t("description")],2)])]),t._v(" "),i("div",{staticClass:"hero-image-holder"},[t.imageSrc?i("div",{staticClass:"images-wrapper"},[i("img",{attrs:{src:t.imageSrc,alt:t.imageAlt}})]):t._e()])])}),[],!1,null,null,null);e.default=c.exports}}]);
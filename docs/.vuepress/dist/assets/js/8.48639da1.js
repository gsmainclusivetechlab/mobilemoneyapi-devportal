(window.webpackJsonp=window.webpackJsonp||[]).push([[8,16],{343:function(t,n,e){"use strict";e.r(n);var i=e(344),s=(e(336),{name:"lightbox",components:{CoolLightBox:i.a},props:["videoSrc","videoThumbSrc"],data:function(){return{index:null,items:[{title:"",description:"",thumb:this.videoThumbSrc,src:this.videoSrc}]}}}),c=e(24),r=Object(c.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"lightbox-holder"},[e("CoolLightBox",{attrs:{items:t.items,index:t.index},on:{close:function(n){t.index=null}}}),t._v(" "),e("div",{staticClass:"images-wrapper"},t._l(t.items,(function(n,i){return e("div",{key:i,staticClass:"image",on:{click:function(n){t.index=i}}},[e("img",{attrs:{src:n.thumb}})])})),0)],1)}),[],!1,null,null,null);n.default=r.exports},403:function(t,n,e){"use strict";e.r(n);var i={name:"hero-section",components:{lightbox:e(343).default},props:["title","description","videoSrc","videoThumbSrc","imageSrc","imageAlt","accentLink","transparentLink"]},s=e(24),c=Object(s.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hero-section"},[e("div",{staticClass:"container container--thin"},[e("div",{staticClass:"section-intro"},[e("h1",{staticClass:"hero-section__title text-center"},[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"hero-section__description text-center"},[t._v(t._s(t.description))])]),t._v(" "),e("div",{staticClass:"buttons-holder content-center"},[t.accentLink.text?e("a",{staticClass:"btn btn--accent",attrs:{href:t.accentLink.link?t.accentLink.link:"#"}},[t._v("\n        "+t._s(t.accentLink.text)+"\n      ")]):t._e(),t._v(" "),t.transparentLink.text?e("a",{staticClass:"btn btn--transparent",attrs:{href:t.transparentLink.link?t.transparentLink.link:"#"}},[t._v("\n        "+t._s(t.transparentLink.text)+"\n      ")]):t._e()]),t._v(" "),t.videoSrc?e("lightbox",{attrs:{videoSrc:t.videoSrc,videoThumbSrc:t.videoThumbSrc}}):t._e()],1)])}),[],!1,null,null,null);n.default=c.exports}}]);
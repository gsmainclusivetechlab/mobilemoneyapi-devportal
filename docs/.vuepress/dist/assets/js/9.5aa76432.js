(window.webpackJsonp=window.webpackJsonp||[]).push([[9,22],{314:function(t,e,i){"use strict";i.r(e);var n=i(320),s=(i(318),{name:"lightbox",components:{CoolLightBox:n.a},props:["videoSrc","videoThumbSrc"],data:function(){return{index:null,items:[{title:"",description:"",thumb:this.videoThumbSrc,src:this.videoSrc}]}}}),r=i(24),c=Object(r.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lightbox-holder"},[i("CoolLightBox",{attrs:{items:t.items,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),i("div",{staticClass:"images-wrapper"},t._l(t.items,(function(e,n){return i("div",{key:n,staticClass:"image",on:{click:function(e){t.index=n}}},[i("img",{attrs:{src:e.thumb}})])})),0)],1)}),[],!1,null,null,null);e.default=c.exports},406:function(t,e,i){"use strict";i.r(e);var n={name:"hero-section",components:{lightbox:i(314).default},props:["title","description","videoSrc","videoThumbSrc","imageSrc","imageAlt","accentLink","transparentLink"]},s=i(24),r=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero-section section section--m-gap"},[i("div",{staticClass:"container container--thin"},[i("div",{staticClass:"section-intro"},[i("h1",{staticClass:"hero-section__title text-center"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"hero-section__description text-center"},[t._v(t._s(t.description))])]),t._v(" "),i("div",{staticClass:"buttons-holder content-center"},[t.accentLink.text?i("router-link",{staticClass:"btn btn--accent",attrs:{to:t.accentLink.link?t.accentLink.link:"#"}},[t._v("\n        "+t._s(t.accentLink.text)+"\n      ")]):t._e(),t._v(" "),t.transparentLink.text?i("router-link",{staticClass:"btn btn--bordered",attrs:{to:t.transparentLink.link?t.transparentLink.link:"#"}},[t._v("\n        "+t._s(t.transparentLink.text)+"\n      ")]):t._e()],1),t._v(" "),t.videoSrc?i("lightbox",{attrs:{videoSrc:t.videoSrc,videoThumbSrc:t.videoThumbSrc}}):t._e(),t._v(" "),i("div",{staticClass:"hero-image-holder"},[t.imageSrc&&!t.videoSrc?i("div",{staticClass:"images-wrapper"},[i("img",{attrs:{src:t.imageSrc,alt:t.imageAlt}})]):t._e()])],1)])}),[],!1,null,null,null);e.default=r.exports}}]);
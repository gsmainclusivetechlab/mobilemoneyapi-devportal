(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{408:function(t,e,i){"use strict";var n=i(219),r=i(23),a=i(35),s=i(48),c=i(221),l=i(220);n("match",1,(function(t,e,i){return[function(e){var i=s(this),n=null==e?void 0:e[t];return void 0!==n?n.call(e,i):new RegExp(e)[t](String(i))},function(t){var n=i(e,t,this);if(n.done)return n.value;var s=r(t),o=String(this);if(!s.global)return l(s,o);var u=s.unicode;s.lastIndex=0;for(var d,v=[],p=0;null!==(d=l(s,o));){var f=String(d[0]);v[p]=f,""===f&&(s.lastIndex=c(o,a(s.lastIndex),u)),p++}return 0===p?null:v}]}))},529:function(t,e,i){"use strict";i.r(e);i(134),i(97),i(22),i(408);var n={name:"hero-section",props:{title:{type:String,default:""},description:{type:String,default:""},videoSrc:{type:String,default:""},imageSrc:{type:String,default:""},imageAlt:{type:String,default:""},accentLink:{type:Object,default:null},transparentLink:{type:Object,default:null}},methods:{parseVideoLink:function(t){if(!t)return!1;var e;if(-1!==t.indexOf("vimeo.com/")){var i=t.indexOf("vimeo.com/")+"vimeo.com/".length,n=-1!==t.slice(i).indexOf("?")?t.slice(i).indexOf("?")+i:null;return e=n?t.slice(i,n):t.slice(i),"https://player.vimeo.com/video/".concat(e)}if(-1!==t.indexOf("youtube")||-1!==t.indexOf("youtu.be")){return e=t.match(/^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/)[1],"https://www.youtube.com/embed/".concat(e)}return!1}}},r=i(24),a=Object(r.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hero-section section section--m-gap"},[i("div",{staticClass:"container container--thin"},[i("div",{staticClass:"section-intro"},[i("h1",{staticClass:"hero-section__title text-center"},[t._t("title")],2),t._v(" "),i("div",{staticClass:"hero-section__description text-center"},[t._t("description")],2)]),t._v(" "),i("div",{staticClass:"buttons-holder content-center"},[t.transparentLink.text?i("router-link",{staticClass:"btn",attrs:{to:t.transparentLink.link?t.transparentLink.link:"#"}},[t._v("\n        "+t._s(t.transparentLink.text)+"\n      ")]):t._e(),t._v(" "),t.accentLink.text?i("router-link",{staticClass:"btn btn--accent",attrs:{to:t.accentLink.link?t.accentLink.link:"#"}},[t._v("\n        "+t._s(t.accentLink.text)+"\n      ")]):t._e()],1),t._v(" "),t.videoSrc?i("div",{staticClass:"hero-iframe-holder"},[i("div",{staticClass:"iframe-wrapper"},[t.parseVideoLink(t.videoSrc)?i("iframe",{staticClass:"iframe",attrs:{src:t.parseVideoLink(t.videoSrc),frameborder:"0",allowfullscreen:""}}):t._e()])]):t._e(),t._v(" "),t.imageSrc?i("div",{staticClass:"hero-image-holder"},[t.imageSrc&&!t.videoSrc?i("div",{staticClass:"images-wrapper"},[i("img",{attrs:{src:t.imageSrc,alt:t.imageAlt}})]):t._e()]):t._e()])])}),[],!1,null,null,null);e.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[22,65,66],{337:function(e,t,i){"use strict";i.r(t);i(101);var n={name:"accordion-item",props:{expanded:{type:Boolean}},data:function(){return{isOpened:!1,itemElement:null,itemElementHeig:"auto",timeout:null,showElement:!0}},created:function(){this.isOpened=!!this.expanded},mounted:function(){var e=this;this.itemElement=this.$el.getElementsByClassName("accordion__item-body-content")[0],this.detectItemHeigth(),window.addEventListener("resize",(function(){e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){e.detectItemHeigth()}),20)}))},methods:{openClose:function(){this.detectItemHeigth(),this.isOpened=!this.isOpened},detectItemHeigth:function(){this.itemElementHeig="auto",this.itemElementHeig="".concat(this.itemElement.offsetHeight,"px")}}},s=i(11),o=Object(s.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:!e.showElement,expression:"!showElement"}],staticClass:"accordion__item",class:{"accordion__item--active":e.isOpened}},[i("div",{staticClass:"accordion__item-wrapper"},[i("div",{staticClass:"accordion__item-header",on:{click:e.openClose}},[i("div",{staticClass:"title"},[e._t("header")],2),e._v(" "),i("svg",{staticClass:"arrow-icon",attrs:{width:"17",height:"11",viewBox:"0 0 17 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M1.42413 10.0384L8.19336 3.26916L14.9626 10.0384L16.1934 8.80762L9.42413 2.0384L8.19336 0.807629L6.96259 2.0384L0.193366 8.80762L1.42413 10.0384Z",fill:"#DE002B"}})])]),e._v(" "),i("div",{staticClass:"accordion__item-body",style:{height:e.isOpened?e.itemElementHeig:"0px"}},[i("div",{staticClass:"accordion__item-body-content"},[e._t("body")],2)])])])}),[],!1,null,null,null);t.default=o.exports},338:function(e,t,i){"use strict";i.r(t);var n={name:"accordion",data:function(){return{isOpened:!1}}},s=i(11),o=Object(s.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"accordion"},[t("div",{staticClass:"accordion-wrapper"},[this._t("default")],2)])}),[],!1,null,null,null);t.default=o.exports},494:function(e,t,i){"use strict";i.r(t);var n=i(338),s={name:"faq-item",components:{AccordionItem:i(337).default,Accordion:n.default},props:["itemKey","item"]},o=i(11),a=Object(o.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"faq-results__item"},[i("h2",{staticClass:"h2 faq-results__item-title"},[e._v(e._s(e.itemKey))]),e._v(" "),i("accordion",e._l(e.item,(function(t,n){return i("accordion-item",{key:"category-item-"+n,scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n        "+e._s(t.title)+"\n      ")]},proxy:!0},{key:"body",fn:function(){return[i("div",{domProps:{innerHTML:e._s(t.text)}})]},proxy:!0}],null,!0)})})),1)],1)}),[],!1,null,"56e41910",null);t.default=a.exports}}]);
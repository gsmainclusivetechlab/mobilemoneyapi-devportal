(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{564:function(t,n,a){"use strict";a.r(n);var e=a(114),s=(a(125),{name:"code-language-selector",data:function(){return{activeLanguage:"vue",languages:[],isListOpened:!1}},mounted:function(){var t=this;setTimeout((function(){t.latnguageTabsInit(),document.addEventListener("click",(function(n){n.target.closest(".lang-select-box")||(t.isListOpened=!1)}))}),300)},methods:{latnguageTabsInit:function(){var t,n=Object(e.a)(this.$children);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.languages.push(a.title)}}catch(t){n.e(t)}finally{n.f()}this.activeLanguage=this.languages[0]},changeLanguage:function(t){this.activeLanguage=t}}}),i=a(15),l=Object(i.a)(s,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"lang-content-box"},[a("div",{staticClass:"lang-select-box",class:{opened:t.isListOpened},on:{click:function(n){t.isListOpened=!t.isListOpened}}},[a("div",{staticClass:"active-lang"},[a("div",{staticClass:"text"},[t._v(t._s(t.activeLanguage))]),t._v(" "),a("div",{staticClass:"icon"},[a("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M8 13.9999L4.5 10.4999L5.205 9.79492L8 12.5849L10.795 9.79492L11.5 10.4999L8 13.9999Z",fill:"white"}}),t._v(" "),a("path",{attrs:{d:"M8 2L11.5 5.5L10.795 6.205L8 3.415L5.205 6.205L4.5 5.5L8 2Z",fill:"white"}})])])]),t._v(" "),a("ul",{staticClass:"lang-list"},t._l(t.languages,(function(n){return a("li",{key:"lang-"+n,staticClass:"lang-list__item",on:{click:function(a){return t.changeLanguage(n)}}},[t._v("\n        "+t._s(n)+"\n      ")])})),0)]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);n.default=l.exports}}]);
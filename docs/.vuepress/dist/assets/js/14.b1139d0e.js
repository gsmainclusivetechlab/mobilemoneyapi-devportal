(window.webpackJsonp=window.webpackJsonp||[]).push([[14,30],{351:function(s,e,t){"use strict";t.r(e);var i={name:"use-case-card",props:["cardItem"]},a=t(24),n=Object(a.a)(i,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("router-link",{staticClass:"use-case-card",attrs:{to:s.cardItem.link}},[t("div",{staticClass:"use-case-card__header"},[t("div",{staticClass:"use-case-card__icon"},[s.cardItem.icon?t("img",{attrs:{src:s.cardItem.icon,alt:"use case icon"}}):s._e()]),s._v(" "),t("h5",{staticClass:"use-case-card__title"},[s._v(s._s(s.cardItem.title))])]),s._v(" "),t("div",{staticClass:"use-case-card__content"},[t("div",{staticClass:"use-case-card__description"},[t("p",[s._v(" "+s._s(s.cardItem.description)+" ")])])]),s._v(" "),t("div",{staticClass:"use-case-card__footer"},[t("svg",{attrs:{width:"18",height:"15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M10.5 0L9.428 1.045l5.684 5.705H0v1.5h15.113l-5.685 5.68L10.5 15 18 7.5 10.5 0z",fill:"#242529"}})])])])}),[],!1,null,null,null);e.default=n.exports},421:function(s,e,t){"use strict";t.r(e);var i={name:"use-case",components:{useCaseCard:t(351).default},props:{sectionTitle:String,sectionDescription:String},data:function(){return{useCases:[{link:"/examples/",icon:"/images/use-case-1.png",title:"Merchant payments",description:"Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut."},{link:"/examples/",icon:"/images/use-case-2.png",title:"Disbursements",description:"Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit."},{link:"/examples/",icon:"images/use-case-3.png",title:"International transfers",description:"Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit."},{link:"/examples/",icon:"/images/use-case-4.png",title:"P2P transfers",description:"Facilisis rutrum diam imperdiet euismod tincidunt id volutpat egestas. Fermentum ornare blandit."},{link:"/examples/",icon:"/images/use-case-1.png",title:"Reccuring payments",description:"Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut."},{link:"/examples/",icon:"/images/use-case-5.png",title:"Account linking",description:"Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut."},{link:"/examples/",icon:"/images/use-case-2.png",title:"Bill payments",description:"Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut."},{link:"/examples/",icon:"/images/use-case-6.png",title:"Agent Services",description:"Ut hendrerit nunc id amet mollis. Cras urna dolor nibh a ut cursus ut."}]}}},a=t(24),n=Object(a.a)(i,(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"use-case-section section--m-gap"},[t("div",{staticClass:"container"},[t("div",{staticClass:"section-intro section-intro--one-column"},[t("h2",{staticClass:"h2 section-title"},[s._v(" "+s._s(s.sectionTitle)+" ")]),s._v(" "),t("div",{staticClass:"section-description"},[s._v(" "+s._s(s.sectionDescription)+" ")])]),s._v(" "),t("div",{staticClass:"use-case-grid"},[t("div",{staticClass:"cards-grid"},s._l(s.useCases,(function(s,e){return t("div",{key:"case-"+e,staticClass:"cards-grid__item"},[t("use-case-card",{attrs:{"card-item":s}})],1)})),0)])])])}),[],!1,null,null,null);e.default=n.exports}}]);
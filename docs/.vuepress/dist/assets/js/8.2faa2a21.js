(window.webpackJsonp=window.webpackJsonp||[]).push([[8,23,50,70,76],{412:function(e,a,n){"use strict";var t=n(0);t="default"in t?t.default:t;/^2\./.test(t.version)||t.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+t.version);var o="_vue_clickaway_handler";function i(e,a,n){c(e);var t=n.context,i=a.value;if("function"==typeof i){var d=!1;setTimeout((function(){d=!0}),0),e[o]=function(a){var n=a.path||(a.composedPath?a.composedPath():void 0);if(d&&(n?n.indexOf(e)<0:!e.contains(a.target)))return i.call(t,a)},document.documentElement.addEventListener("click",e[o],!1)}}function c(e){document.documentElement.removeEventListener("click",e[o],!1),delete e[o]}var d={bind:i,update:function(e,a){a.value!==a.oldValue&&i(e,a)},unbind:c},s={directives:{onClickaway:d}};a.version="2.2.2",a.directive=d,a.mixin=s},416:function(e,a,n){"use strict";n.d(a,"a",(function(){return t})),n.d(a,"c",(function(){return o})),n.d(a,"b",(function(){return i}));var t=[{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"Andorra",code:"AD"},{name:"United Arab Emirates",code:"AE"},{name:"Afghanistan",code:"AF"},{name:"Antigua and Barbuda",code:"AG"},{name:"Anguilla",code:"AI"},{name:"Albania",code:"AL"},{name:"Armenia",code:"AM"},{name:"Angola",code:"AO"},{name:"Antarctica",code:"AQ"},{name:"Argentina",code:"AR"},{name:"American Samoa",code:"AS"},{name:"Austria",code:"AT"},{name:"Australia",code:"AU"},{name:"Aruba",code:"AW"},{name:"Åland",code:"AX"},{name:"Azerbaijan",code:"AZ"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Barbados",code:"BB"},{name:"Bangladesh",code:"BD"},{name:"Belgium",code:"BE"},{name:"Burkina Faso",code:"BF"},{name:"Bulgaria",code:"BG"},{name:"Bahrain",code:"BH"},{name:"Burundi",code:"BI"},{name:"Benin",code:"BJ"},{name:"Saint Barthélemy",code:"BL"},{name:"Bermuda",code:"BM"},{name:"Brunei",code:"BN"},{name:"Bolivia",code:"BO"},{name:"Bonaire",code:"BQ"},{name:"Brazil",code:"BR"},{name:"Bahamas",code:"BS"},{name:"Bhutan",code:"BT"},{name:"Bouvet Island",code:"BV"},{name:"Botswana",code:"BW"},{name:"Belarus",code:"BY"},{name:"Belize",code:"BZ"},{name:"Canada",code:"CA"},{name:"Cocos [Keeling] Islands",code:"CC"},{name:"Democratic Republic of the Congo",code:"CD"},{name:"Central African Republic",code:"CF"},{name:"Republic of the Congo",code:"CG"},{name:"Switzerland",code:"CH"},{name:"Ivory Coast",code:"CI"},{name:"Cook Islands",code:"CK"},{name:"Chile",code:"CL"},{name:"Cameroon",code:"CM"},{name:"China",code:"CN"},{name:"Colombia",code:"CO"},{name:"Costa Rica",code:"CR"},{name:"Cuba",code:"CU"},{name:"Cape Verde",code:"CV"},{name:"Curacao",code:"CW"},{name:"Christmas Island",code:"CX"},{name:"Cyprus",code:"CY"},{name:"Czechia",code:"CZ"},{name:"Germany",code:"DE"},{name:"Djibouti",code:"DJ"},{name:"Denmark",code:"DK"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Algeria",code:"DZ"},{name:"Ecuador",code:"EC"},{name:"Estonia",code:"EE"},{name:"Egypt",code:"EG"},{name:"Western Sahara",code:"EH"},{name:"Eritrea",code:"ER"},{name:"Spain",code:"ES"},{name:"Ethiopia",code:"ET"},{name:"Finland",code:"FI"},{name:"Fiji",code:"FJ"},{name:"Falkland Islands",code:"FK"},{name:"Micronesia",code:"FM"},{name:"Faroe Islands",code:"FO"},{name:"France",code:"FR"},{name:"Gabon",code:"GA"},{name:"Grenada",code:"GD"},{name:"Georgia",code:"GE"},{name:"French Guiana",code:"GF"},{name:"Guernsey",code:"GG"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greenland",code:"GL"},{name:"Gambia",code:"GM"},{name:"Guinea",code:"GN"},{name:"Guadeloupe",code:"GP"},{name:"Equatorial Guinea",code:"GQ"},{name:"Greece",code:"GR"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Guatemala",code:"GT"},{name:"Guam",code:"GU"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Hong Kong",code:"HK"},{name:"Heard Island and McDonald Islands",code:"HM"},{name:"Honduras",code:"HN"},{name:"Croatia",code:"HR"},{name:"Haiti",code:"HT"},{name:"Hungary",code:"HU"},{name:"Indonesia",code:"ID"},{name:"Ireland",code:"IE"},{name:"Israel",code:"IL"},{name:"Isle of Man",code:"IM"},{name:"India",code:"IN"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Iraq",code:"IQ"},{name:"Iran",code:"IR"},{name:"Iceland",code:"IS"},{name:"Italy",code:"IT"},{name:"Jersey",code:"JE"},{name:"Jamaica",code:"JM"},{name:"Jordan",code:"JO"},{name:"Japan",code:"JP"},{name:"Kenya",code:"KE"},{name:"Kyrgyzstan",code:"KG"},{name:"Cambodia",code:"KH"},{name:"Kiribati",code:"KI"},{name:"Comoros",code:"KM"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"North Korea",code:"KP"},{name:"South Korea",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Cayman Islands",code:"KY"},{name:"Kazakhstan",code:"KZ"},{name:"Laos",code:"LA"},{name:"Lebanon",code:"LB"},{name:"Saint Lucia",code:"LC"},{name:"Liechtenstein",code:"LI"},{name:"Sri Lanka",code:"LK"},{name:"Liberia",code:"LR"},{name:"Lesotho",code:"LS"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Latvia",code:"LV"},{name:"Libya",code:"LY"},{name:"Morocco",code:"MA"},{name:"Monaco",code:"MC"},{name:"Moldova",code:"MD"},{name:"Montenegro",code:"ME"},{name:"Saint Martin",code:"MF"},{name:"Madagascar",code:"MG"},{name:"Marshall Islands",code:"MH"},{name:"Macedonia",code:"MK"},{name:"Mali",code:"ML"},{name:"Myanmar [Burma]",code:"MM"},{name:"Mongolia",code:"MN"},{name:"Macao",code:"MO"},{name:"Northern Mariana Islands",code:"MP"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Montserrat",code:"MS"},{name:"Malta",code:"MT"},{name:"Mauritius",code:"MU"},{name:"Maldives",code:"MV"},{name:"Malawi",code:"MW"},{name:"Mexico",code:"MX"},{name:"Malaysia",code:"MY"},{name:"Mozambique",code:"MZ"},{name:"Namibia",code:"NA"},{name:"New Caledonia",code:"NC"},{name:"Niger",code:"NE"},{name:"Norfolk Island",code:"NF"},{name:"Nigeria",code:"NG"},{name:"Nicaragua",code:"NI"},{name:"Netherlands",code:"NL"},{name:"Norway",code:"NO"},{name:"Nepal",code:"NP"},{name:"Nauru",code:"NR"},{name:"Niue",code:"NU"},{name:"New Zealand",code:"NZ"},{name:"Oman",code:"OM"},{name:"Panama",code:"PA"},{name:"Peru",code:"PE"},{name:"French Polynesia",code:"PF"},{name:"Papua New Guinea",code:"PG"},{name:"Philippines",code:"PH"},{name:"Pakistan",code:"PK"},{name:"Poland",code:"PL"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Pitcairn Islands",code:"PN"},{name:"Puerto Rico",code:"PR"},{name:"Palestine",code:"PS"},{name:"Portugal",code:"PT"},{name:"Palau",code:"PW"},{name:"Paraguay",code:"PY"},{name:"Qatar",code:"QA"},{name:"Réunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Serbia",code:"RS"},{name:"Russia",code:"RU"},{name:"Rwanda",code:"RW"},{name:"Saudi Arabia",code:"SA"},{name:"Solomon Islands",code:"SB"},{name:"Seychelles",code:"SC"},{name:"Sudan",code:"SD"},{name:"Sweden",code:"SE"},{name:"Singapore",code:"SG"},{name:"Saint Helena",code:"SH"},{name:"Slovenia",code:"SI"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Slovakia",code:"SK"},{name:"Sierra Leone",code:"SL"},{name:"San Marino",code:"SM"},{name:"Senegal",code:"SN"},{name:"Somalia",code:"SO"},{name:"Suriname",code:"SR"},{name:"South Sudan",code:"SS"},{name:"São Tomé and Príncipe",code:"ST"},{name:"El Salvador",code:"SV"},{name:"Sint Maarten",code:"SX"},{name:"Syria",code:"SY"},{name:"Swaziland",code:"SZ"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Chad",code:"TD"},{name:"French Southern Territories",code:"TF"},{name:"Togo",code:"TG"},{name:"Thailand",code:"TH"},{name:"Tajikistan",code:"TJ"},{name:"Tokelau",code:"TK"},{name:"East Timor",code:"TL"},{name:"Turkmenistan",code:"TM"},{name:"Tunisia",code:"TN"},{name:"Tonga",code:"TO"},{name:"Turkey",code:"TR"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tuvalu",code:"TV"},{name:"Taiwan",code:"TW"},{name:"Tanzania",code:"TZ"},{name:"Ukraine",code:"UA"},{name:"Uganda",code:"UG"},{name:"U.S. Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vatican City",code:"VA"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Venezuela",code:"VE"},{name:"British Virgin Islands",code:"VG"},{name:"U.S. Virgin Islands",code:"VI"},{name:"Vietnam",code:"VN"},{name:"Vanuatu",code:"VU"},{name:"Wallis and Futuna",code:"WF"},{name:"Samoa",code:"WS"},{name:"Kosovo",code:"XK"},{name:"Yemen",code:"YE"},{name:"Mayotte",code:"YT"},{name:"South Africa",code:"ZA"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],o=["NAME","EMAIL","COMPANY","STATUS","ROLE"],i=["PLAN","STATE"]},417:function(e,a,n){"use strict";n.r(a);var t={name:"sort-by-block"},o=n(15),i=Object(o.a)(t,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"sort-by-options"},[n("button",{staticClass:"sort-by-options__button",attrs:{type:"button"}},[e._v("\n    Newest\n  ")]),e._v(" "),n("button",{staticClass:"sort-by-options__button",attrs:{type:"button"}},[e._v("\n    Oldest\n  ")]),e._v(" "),n("button",{staticClass:"sort-by-options__button",attrs:{type:"button"}},[e._v("\n    Active\n  ")]),e._v(" "),n("button",{staticClass:"sort-by-options__button",attrs:{type:"button"}},[e._v("\n    Inactive\n  ")]),e._v(" "),n("button",{staticClass:"sort-by-options__button",attrs:{type:"button"}},[e._v("\n    Blocked\n  ")])])}],!1,null,"8efdee16",null);a.default=i.exports},419:function(e,a,n){"use strict";n.r(a);var t={name:"dashboard-table-bottom"},o=n(15),i=Object(o.a)(t,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"dashboard-table-bottom"},[n("span",[e._v("Showing 1 to 11 of 120 entries")]),e._v(" "),n("div",[n("button",{staticClass:"dashboard-table__pagination-arrow dashboard-table__pagination-arrow--left dashboard-table__pagination-arrow--inactive",attrs:{type:"button"}},[e._v("\n      < Prev\n    ")]),e._v(" "),n("button",{staticClass:"dashboard-table__pagination-item dashboard-table__pagination-item--active",attrs:{type:"button"}},[e._v("1")]),e._v(" "),n("button",{staticClass:"dashboard-table__pagination-item",attrs:{type:"button"}},[e._v("2")]),e._v(" "),n("button",{staticClass:"dashboard-table__pagination-item",attrs:{type:"button"}},[e._v("3")]),e._v(" "),n("button",{staticClass:"dashboard-table__pagination-item",attrs:{type:"button"}},[e._v("4")]),e._v(" "),n("button",{staticClass:"dashboard-table__pagination-item",attrs:{type:"button"}},[e._v("5")]),e._v(" "),n("button",{staticClass:"dashboard-table__pagination-arrow dashboard-table__pagination-arrow--right",attrs:{type:"button"}},[e._v("\n      Next >\n    ")])])])}],!1,null,"329fd833",null);a.default=i.exports},420:function(e,a,n){"use strict";n.r(a);var t=n(417),o=n(412),i={name:"dashboard-table-top",components:{SortByBlock:t.default},props:{hideFilter:{type:Boolean,default:!1}},data:function(){return{activeSortOptions:!1,filterSelected:"company",filterOptions:[{label:"Name",code:"name"},{label:"Email",code:"email"},{label:"Company name",code:"company"},{label:"Status",code:"status"},{label:"Role",code:"role"}]}},mixins:[o.mixin],methods:{showSortByOptions:function(){this.activeSortOptions=!0},hideSortByOptions:function(){this.activeSortOptions=!1}}},c=n(15),d=Object(c.a)(i,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"dashboard-table-top"},[e._m(0),e._v(" "),e.hideFilter?e._e():n("div",{staticClass:"dashboard-table__select-block"},[e._v("\n    Filter:\n    "),n("v-select",{staticClass:"vs-custom-style",attrs:{options:e.filterOptions,reduce:function(e){return e.code},clearable:!1},scopedSlots:e._u([{key:"open-indicator",fn:function(a){var t=a.attributes;return[n("img",e._b({staticClass:"expand-arrow",attrs:{src:"/images/expand_arrow.svg",alt:""}},"img",t,!1))]}}],null,!1,4272290012),model:{value:e.filterSelected,callback:function(a){e.filterSelected=a},expression:"filterSelected"}})],1),e._v(" "),n("div",{staticClass:"dashboard-table__sort-by"},[n("button",{staticClass:"dashboard-table__button",attrs:{type:"button"},on:{click:e.showSortByOptions}},[e._v("\n      Sort by\n      "),n("img",{staticClass:"expand-arrow",class:{"expand-arrow--revert":e.activeSortOptions},attrs:{src:"/images/expand_arrow.svg",alt:""}})]),e._v(" "),e.activeSortOptions?n("sort-by-block",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.hideSortByOptions,expression:"hideSortByOptions"}]}):e._e()],1)])}),[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"search-block"},[a("input",{staticClass:"search-block__input",attrs:{type:"text",placeholder:"Search"}})])}],!1,null,"516ba4aa",null);a.default=d.exports},421:function(e,a,n){"use strict";n.r(a);var t={name:"user-options-block"},o=n(15),i=Object(o.a)(t,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"user-options"},[a("button",{staticClass:"user-options__button user-options__button--delete",attrs:{type:"button"}},[this._v("\n    Delete\n  ")]),this._v(" "),a("button",{staticClass:"user-options__button user-options__button--change",attrs:{type:"button"}},[this._v("\n    Change role\n  ")]),this._v(" "),a("button",{staticClass:"user-options__button user-options__button--edit",attrs:{type:"button"}},[this._v("\n    Edit\n  ")]),this._v(" "),a("button",{staticClass:"user-options__button user-options__button--unblock",attrs:{type:"button"}},[this._v("\n    Unblock\n  ")])])}],!1,null,"267d40a2",null);a.default=i.exports},427:function(e){e.exports=JSON.parse('[{"id":0,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":0},{"id":1,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":0},{"id":2,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":0},{"id":3,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":1},{"id":4,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":1},{"id":5,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":0},{"id":6,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":0},{"id":7,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":0},{"id":8,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":1},{"id":9,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":1},{"id":10,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":1},{"id":11,"planName":"GSMA Mobile Money API v1.1 OAuth_Simulator","state":1}]')},453:function(e,a,n){"use strict";n.r(a);var t=n(416),o=n(427),i=n(421),c=n(412),d=n(420),s={name:"plans-tab",components:{DashboardTableBottom:n(419).default,DashboardTableTop:d.default,UserOptionsBlock:i.default},data:function(){return{allPlansHeaderTitles:t.b,plans:o,activeOptionsPlanId:-1}},mixins:[c.mixin],methods:{getPlanStatusLabelClass:function(e){return 0===e?"dashboard-table__state-label--inactive":"dashboard-table__state-label--active"},getPlanStatus:function(e){return 0===e?"Unpublish":"Publish"},showUserOptions:function(e){this.activeOptionsPlanId=e},hideUserOptions:function(){this.activeOptionsPlanId=-1}}},r=n(15),l=Object(r.a)(s,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"dashboard-content dashboard-content__table dashboard-content__table-plans"},[n("h3",[e._v("All registered users")]),e._v(" "),n("div",{staticClass:"table-block"},[n("dashboard-table-top",{attrs:{"hide-filter":""}}),e._v(" "),n("table",{staticClass:"dashboard-table"},[n("tr",{staticClass:"dashboard-table__row"},[e._l(e.allPlansHeaderTitles,(function(a,t){return n("th",{key:t,staticClass:"dashboard-table__cell",class:{"dashboard-table__cell--center":1===t}},[e._v("\n          "+e._s(a)+"\n        ")])})),e._v(" "),n("th",{staticClass:"dashboard-table__cell"})],2),e._v(" "),e._l(e.plans,(function(a){return n("tr",{key:a.id,staticClass:"dashboard-table__row"},[n("td",{staticClass:"dashboard-table__cell"},[e._v("\n          "+e._s(a.planName)+"\n        ")]),e._v(" "),n("td",{staticClass:"dashboard-table__cell dashboard-table__cell--center dashboard-table__cell--state"},[n("span",{staticClass:"dashboard-table__state-label",class:[e.getPlanStatusLabelClass(a.state)]},[e._v(e._s(e.getPlanStatus(a.state)))])]),e._v(" "),n("td",{staticClass:"dashboard-table__cell dashboard-table__cell--options"},[n("button",{staticClass:"dashboard-table__button",attrs:{type:"button"},on:{click:function(n){return e.showUserOptions(a.id)}}},[n("svg",{attrs:{width:"2",height:"10",viewBox:"0 0 2 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"1",cy:"1",r:"1",transform:"rotate(90 1 1)",fill:"#7C7C7F"}}),e._v(" "),n("circle",{attrs:{cx:"1",cy:"5",r:"1",transform:"rotate(90 1 5)",fill:"#7C7C7F"}}),e._v(" "),n("circle",{attrs:{cx:"1",cy:"9",r:"1",transform:"rotate(90 1 9)",fill:"#7C7C7F"}})])]),e._v(" "),a.id===e.activeOptionsPlanId?n("user-options-block",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.hideUserOptions,expression:"hideUserOptions"}]}):e._e()],1)])}))],2),e._v(" "),n("dashboard-table-bottom")],1)])}),[],!1,null,"55c9a55e",null);a.default=l.exports}}]);
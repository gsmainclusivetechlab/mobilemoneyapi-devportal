(window.webpackJsonp=window.webpackJsonp||[]).push([[9,57],{418:function(e,a,n){var t=n(22),o=Date.prototype,c=o.toString,i=o.getTime;new Date(NaN)+""!="Invalid Date"&&t(o,"toString",(function(){var e=i.call(this);return e==e?c.call(this):"Invalid Date"}))},419:function(e,a,n){"use strict";var t=n(2),o=n(46).findIndex,c=n(126),i=!0;"findIndex"in[]&&Array(1).findIndex((function(){i=!1})),t({target:"Array",proto:!0,forced:i},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),c("findIndex")},420:function(e,a,n){"use strict";n.d(a,"a",(function(){return t})),n.d(a,"d",(function(){return o})),n.d(a,"c",(function(){return c})),n.d(a,"b",(function(){return i}));var t=[{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"Andorra",code:"AD"},{name:"United Arab Emirates",code:"AE"},{name:"Afghanistan",code:"AF"},{name:"Antigua and Barbuda",code:"AG"},{name:"Anguilla",code:"AI"},{name:"Albania",code:"AL"},{name:"Armenia",code:"AM"},{name:"Angola",code:"AO"},{name:"Antarctica",code:"AQ"},{name:"Argentina",code:"AR"},{name:"American Samoa",code:"AS"},{name:"Austria",code:"AT"},{name:"Australia",code:"AU"},{name:"Aruba",code:"AW"},{name:"Åland",code:"AX"},{name:"Azerbaijan",code:"AZ"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Barbados",code:"BB"},{name:"Bangladesh",code:"BD"},{name:"Belgium",code:"BE"},{name:"Burkina Faso",code:"BF"},{name:"Bulgaria",code:"BG"},{name:"Bahrain",code:"BH"},{name:"Burundi",code:"BI"},{name:"Benin",code:"BJ"},{name:"Saint Barthélemy",code:"BL"},{name:"Bermuda",code:"BM"},{name:"Brunei",code:"BN"},{name:"Bolivia",code:"BO"},{name:"Bonaire",code:"BQ"},{name:"Brazil",code:"BR"},{name:"Bahamas",code:"BS"},{name:"Bhutan",code:"BT"},{name:"Bouvet Island",code:"BV"},{name:"Botswana",code:"BW"},{name:"Belarus",code:"BY"},{name:"Belize",code:"BZ"},{name:"Canada",code:"CA"},{name:"Cocos [Keeling] Islands",code:"CC"},{name:"Democratic Republic of the Congo",code:"CD"},{name:"Central African Republic",code:"CF"},{name:"Republic of the Congo",code:"CG"},{name:"Switzerland",code:"CH"},{name:"Ivory Coast",code:"CI"},{name:"Cook Islands",code:"CK"},{name:"Chile",code:"CL"},{name:"Cameroon",code:"CM"},{name:"China",code:"CN"},{name:"Colombia",code:"CO"},{name:"Costa Rica",code:"CR"},{name:"Cuba",code:"CU"},{name:"Cape Verde",code:"CV"},{name:"Curacao",code:"CW"},{name:"Christmas Island",code:"CX"},{name:"Cyprus",code:"CY"},{name:"Czechia",code:"CZ"},{name:"Germany",code:"DE"},{name:"Djibouti",code:"DJ"},{name:"Denmark",code:"DK"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Algeria",code:"DZ"},{name:"Ecuador",code:"EC"},{name:"Estonia",code:"EE"},{name:"Egypt",code:"EG"},{name:"Western Sahara",code:"EH"},{name:"Eritrea",code:"ER"},{name:"Spain",code:"ES"},{name:"Ethiopia",code:"ET"},{name:"Finland",code:"FI"},{name:"Fiji",code:"FJ"},{name:"Falkland Islands",code:"FK"},{name:"Micronesia",code:"FM"},{name:"Faroe Islands",code:"FO"},{name:"France",code:"FR"},{name:"Gabon",code:"GA"},{name:"Grenada",code:"GD"},{name:"Georgia",code:"GE"},{name:"French Guiana",code:"GF"},{name:"Guernsey",code:"GG"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greenland",code:"GL"},{name:"Gambia",code:"GM"},{name:"Guinea",code:"GN"},{name:"Guadeloupe",code:"GP"},{name:"Equatorial Guinea",code:"GQ"},{name:"Greece",code:"GR"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Guatemala",code:"GT"},{name:"Guam",code:"GU"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Hong Kong",code:"HK"},{name:"Heard Island and McDonald Islands",code:"HM"},{name:"Honduras",code:"HN"},{name:"Croatia",code:"HR"},{name:"Haiti",code:"HT"},{name:"Hungary",code:"HU"},{name:"Indonesia",code:"ID"},{name:"Ireland",code:"IE"},{name:"Israel",code:"IL"},{name:"Isle of Man",code:"IM"},{name:"India",code:"IN"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Iraq",code:"IQ"},{name:"Iran",code:"IR"},{name:"Iceland",code:"IS"},{name:"Italy",code:"IT"},{name:"Jersey",code:"JE"},{name:"Jamaica",code:"JM"},{name:"Jordan",code:"JO"},{name:"Japan",code:"JP"},{name:"Kenya",code:"KE"},{name:"Kyrgyzstan",code:"KG"},{name:"Cambodia",code:"KH"},{name:"Kiribati",code:"KI"},{name:"Comoros",code:"KM"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"North Korea",code:"KP"},{name:"South Korea",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Cayman Islands",code:"KY"},{name:"Kazakhstan",code:"KZ"},{name:"Laos",code:"LA"},{name:"Lebanon",code:"LB"},{name:"Saint Lucia",code:"LC"},{name:"Liechtenstein",code:"LI"},{name:"Sri Lanka",code:"LK"},{name:"Liberia",code:"LR"},{name:"Lesotho",code:"LS"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Latvia",code:"LV"},{name:"Libya",code:"LY"},{name:"Morocco",code:"MA"},{name:"Monaco",code:"MC"},{name:"Moldova",code:"MD"},{name:"Montenegro",code:"ME"},{name:"Saint Martin",code:"MF"},{name:"Madagascar",code:"MG"},{name:"Marshall Islands",code:"MH"},{name:"Macedonia",code:"MK"},{name:"Mali",code:"ML"},{name:"Myanmar [Burma]",code:"MM"},{name:"Mongolia",code:"MN"},{name:"Macao",code:"MO"},{name:"Northern Mariana Islands",code:"MP"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Montserrat",code:"MS"},{name:"Malta",code:"MT"},{name:"Mauritius",code:"MU"},{name:"Maldives",code:"MV"},{name:"Malawi",code:"MW"},{name:"Mexico",code:"MX"},{name:"Malaysia",code:"MY"},{name:"Mozambique",code:"MZ"},{name:"Namibia",code:"NA"},{name:"New Caledonia",code:"NC"},{name:"Niger",code:"NE"},{name:"Norfolk Island",code:"NF"},{name:"Nigeria",code:"NG"},{name:"Nicaragua",code:"NI"},{name:"Netherlands",code:"NL"},{name:"Norway",code:"NO"},{name:"Nepal",code:"NP"},{name:"Nauru",code:"NR"},{name:"Niue",code:"NU"},{name:"New Zealand",code:"NZ"},{name:"Oman",code:"OM"},{name:"Panama",code:"PA"},{name:"Peru",code:"PE"},{name:"French Polynesia",code:"PF"},{name:"Papua New Guinea",code:"PG"},{name:"Philippines",code:"PH"},{name:"Pakistan",code:"PK"},{name:"Poland",code:"PL"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Pitcairn Islands",code:"PN"},{name:"Puerto Rico",code:"PR"},{name:"Palestine",code:"PS"},{name:"Portugal",code:"PT"},{name:"Palau",code:"PW"},{name:"Paraguay",code:"PY"},{name:"Qatar",code:"QA"},{name:"Réunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Serbia",code:"RS"},{name:"Russia",code:"RU"},{name:"Rwanda",code:"RW"},{name:"Saudi Arabia",code:"SA"},{name:"Solomon Islands",code:"SB"},{name:"Seychelles",code:"SC"},{name:"Sudan",code:"SD"},{name:"Sweden",code:"SE"},{name:"Singapore",code:"SG"},{name:"Saint Helena",code:"SH"},{name:"Slovenia",code:"SI"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Slovakia",code:"SK"},{name:"Sierra Leone",code:"SL"},{name:"San Marino",code:"SM"},{name:"Senegal",code:"SN"},{name:"Somalia",code:"SO"},{name:"Suriname",code:"SR"},{name:"South Sudan",code:"SS"},{name:"São Tomé and Príncipe",code:"ST"},{name:"El Salvador",code:"SV"},{name:"Sint Maarten",code:"SX"},{name:"Syria",code:"SY"},{name:"Swaziland",code:"SZ"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Chad",code:"TD"},{name:"French Southern Territories",code:"TF"},{name:"Togo",code:"TG"},{name:"Thailand",code:"TH"},{name:"Tajikistan",code:"TJ"},{name:"Tokelau",code:"TK"},{name:"East Timor",code:"TL"},{name:"Turkmenistan",code:"TM"},{name:"Tunisia",code:"TN"},{name:"Tonga",code:"TO"},{name:"Turkey",code:"TR"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tuvalu",code:"TV"},{name:"Taiwan",code:"TW"},{name:"Tanzania",code:"TZ"},{name:"Ukraine",code:"UA"},{name:"Uganda",code:"UG"},{name:"U.S. Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vatican City",code:"VA"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Venezuela",code:"VE"},{name:"British Virgin Islands",code:"VG"},{name:"U.S. Virgin Islands",code:"VI"},{name:"Vietnam",code:"VN"},{name:"Vanuatu",code:"VU"},{name:"Wallis and Futuna",code:"WF"},{name:"Samoa",code:"WS"},{name:"Kosovo",code:"XK"},{name:"Yemen",code:"YE"},{name:"Mayotte",code:"YT"},{name:"South Africa",code:"ZA"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],o=["NAME","EMAIL","COMPANY","STATUS","ROLE"],c=["PLAN","STATE"],i=["NAME","AUTHOR","COMPANY","USAGE PLAN","CONSUMER KEY","CONSUMER SECRET","API KEY","KEY ISSUED DATE"]},424:function(e,a,n){"use strict";n.r(a);n(421),n(216),n(217);var t={name:"user-options-block",props:{userStatus:{type:Number,default:0},allowOptions:{type:Array,default:function(){return[]}}},data:function(){return{tempStatus:1}},methods:{changeStatus:function(){2!==this.userStatus&&(this.tempStatus=this.userStatus),this.$emit("changeStatus",2===this.userStatus?this.tempStatus:2)},isAllowOption:function(e){return this.allowOptions.includes(e)}}},o=n(15),c=Object(o.a)(t,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"user-options"},[e.isAllowOption("delete")?n("button",{staticClass:"user-options__button user-options__button--delete",attrs:{type:"button"},on:{click:function(a){return e.$emit("deleteUser")}}},[e._v("\n    Delete\n  ")]):e._e(),e._v(" "),e.isAllowOption("block")?n("button",{staticClass:"user-options__button user-options__button--unblock",attrs:{type:"button"},on:{click:e.changeStatus}},[e._v("\n    "+e._s(2===e.userStatus?"Unblock":"Block")+"\n  ")]):e._e()])}),[],!1,null,null,null);a.default=c.exports},425:function(e,a,n){"use strict";n.r(a);n(125);var t={name:"dashboard-cell",props:["value"],data:function(){return{isCopied:!1,successTimeout:void 0}},methods:{copyToClipboard:function(){var e=this;navigator.clipboard.writeText(this.value).then((function(){e.setSuccessCopy()})).catch((function(e){console.error("Async: Could not copy text: ",e)}))},setSuccessCopy:function(){var e=this;clearTimeout(this.successTimeout),this.isCopied=!0,this.successTimeout=setTimeout((function(){e.isCopied=!1}),500)}}},o=n(15),c=Object(o.a)(t,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("td",{staticClass:"dashboard-table__cell"},[n("tippy",{staticStyle:{"max-width":"100%"},attrs:{interactive:"",delay:"600"},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("div",{staticClass:"dashboard-table__cell-content"},[e._v(e._s(e.value))])]},proxy:!0}])},[e._v(" "),n("span",{staticClass:"tooltip-text",class:{"tooltip-text--copied":e.isCopied},on:{click:e.copyToClipboard}},[e._v("\n          "+e._s(e.value)+"\n        ")])])],1)}),[],!1,null,"5d85995c",null);a.default=c.exports},426:function(e,a,n){"use strict";var t=n(2),o=n(129),c=n(63),i=n(25),r=n(19),s=n(128),d=n(68),l=n(69)("splice"),u=Math.max,m=Math.min;t({target:"Array",proto:!0,forced:!l},{splice:function(e,a){var n,t,l,h,p,S,b=r(this),f=i(b.length),g=o(e,f),M=arguments.length;if(0===M?n=t=0:1===M?(n=0,t=f-g):(n=M-2,t=m(u(c(a),0),f-g)),f+n-t>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(l=s(b,t),h=0;h<t;h++)(p=g+h)in b&&d(l,h,b[p]);if(l.length=t,n<t){for(h=g;h<f-t;h++)S=h+n,(p=h+t)in b?b[S]=b[p]:delete b[S];for(h=f;h>f-t+n;h--)delete b[h-1]}else if(n>t)for(h=f-t;h>g;h--)S=h+n-1,(p=h+t-1)in b?b[S]=b[p]:delete b[S];for(h=0;h<n;h++)b[h+g]=arguments[h+2];return b.length=f-t+n,l}})},428:function(e,a,n){"use strict";n(38),n(216),n(217),n(418),n(10),n(221),n(86);var t=n(47),o=(n(430),function(e,a){var n="Newest"===a?1:-1,o="Newest"===a?-1:1;return Object(t.a)(e).sort((function(e,a){return new Date(e.registerDate)<new Date(a.registerDate)?n:new Date(e.registerDate)>new Date(a.registerDate)?o:0}))}),c=function(e,a){return Object(t.a)(e).sort((function(e,n){return e[a].localeCompare(n[a],[],{numeric:!0,caseFirst:"upper"})}))};a.a={data:function(){return{searchValue:"",filterValue:"",sortValue:"",perPage:12,currentPage:1}},computed:{getSortedTableData:function(){return"Newest"===this.sortValue||"Oldest"===this.sortValue?o(this.getTableDataWithSearch,this.sortValue):"Active"===this.sortValue||"Inactive"===this.sortValue||"Blocked"===this.sortValue?(e=this.getTableDataWithSearch,a=this.sortValue,n="Inactive"===a?0:"Active"===a?1:2,Object(t.a)(e).sort((function(e){return e.status===n?-1:1}))):"Unpublish"===this.sortValue||"Publish"===this.sortValue?function(e,a){var n="Unpublish"===a?0:1;return Object(t.a)(e).sort((function(e){return e.state===n?-1:1}))}(this.getTableDataWithSearch,this.sortValue):"Date"===this.sortValue?o(this.getTableDataWithSearch,"Newest"):"Author"===this.sortValue?c(this.getTableDataWithSearch,"authorName"):"Usage plan"===this.sortValue?c(this.getTableDataWithSearch,"usagePlan"):"Key Issue Date"===this.sortValue?function(e){return Object(t.a)(e).sort((function(e,a){return new Date(e.keyIssuedDate)<new Date(a.keyIssuedDate)?-1:new Date(e.keyIssuedDate)>new Date(a.keyIssuedDate)?1:0}))}(this.getTableDataWithSearch):this.getTableDataWithSearch;var e,a,n},getTableDataWithSearch:function(){var e=this;return this.getTableDataWithFilter.filter((function(a){if(""===e.searchValue)return!0;for(var n in a)if("id"!==n){var t=a[n];if("status"===n&&(0===a[n]&&(t="Inactive"),1===a[n]&&(t="Active"),2===a[n]&&(t="Blocked")),"role"===n&&(0===a[n]&&(t="User"),1===a[n]&&(t="Admin"),2===a[n]&&(t="Superadmin")),"state"===n&&(0===a[n]&&(t="Unpublish"),1===a[n]&&(t="Publish")),t.toString().toLowerCase().includes(e.searchValue.toLowerCase()))return!0}return!1}))},getTableDataWithFilter:function(){var e=this;return this.tableData.filter((function(a){return""===e.filterValue||"All Companies"===e.filterValue||a.company===e.filterValue}))},getTableData:function(){return this.getSortedTableData.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},getPages:function(){return Math.ceil(this.getSortedTableData.length/this.perPage)}},methods:{setSearchValue:function(e){this.searchValue=e},setFilterValue:function(e){this.filterValue=e},setSortValue:function(e){this.sortValue=e},setCurrentPage:function(e){this.currentPage=e}}}},430:function(e,a,n){"use strict";var t=n(2),o=n(31),c=n(19),i=n(3),r=n(49),s=[],d=s.sort,l=i((function(){s.sort(void 0)})),u=i((function(){s.sort(null)})),m=r("sort");t({target:"Array",proto:!0,forced:l||!u||!m},{sort:function(e){return void 0===e?d.call(c(this)):d.call(c(this),o(e))}})},439:function(e){e.exports=JSON.parse('[{"id":0,"appName":"Test 001","authorName":"GSMA admin 2","usagePlan":"GSMA Mobile Money API v1.0 OAuth_Simulator","consumerKey":"4f9tpq2l92c3vridsf4452","consumerSecret":"14na92she1enhnwer32hr543","apiKey":"a4db08b7-5729-2342asdf-23h2","keyIssuedDate":"2022-02-24T14:01:23.000Z","company":"Apple"},{"id":1,"appName":"Test 002","authorName":"GSMA admin 3","usagePlan":"GSMA Mobile Money API v1.0 OAuth_Simulator","consumerKey":"4f9tpq2l92c3vridsf4452","consumerSecret":"14na92she1enhnwer32hr543","apiKey":"a4db08b7-5729-2342asdf-23h2","keyIssuedDate":"2023-03-24T14:01:23.000Z","company":"Samsung"},{"id":2,"appName":"Test 003","authorName":"GSMA admin 1","usagePlan":"GSMA Mobile Money API v1.1 OAuth_Simulator","consumerKey":"4f9tpq2l92c3vridsf4452","consumerSecret":"14na92she1enhnwer32hr543","apiKey":"a4db08b7-5729-2342asdf-23h2","keyIssuedDate":"2022-03-16T14:01:23.000Z","company":"Ebay"},{"id":3,"appName":"Test 004","authorName":"GSMA admin 7","usagePlan":"GSMA Mobile Money API v1.2 OAuth_Simulator","consumerKey":"4f9tpq2l92c3vridsf4452","consumerSecret":"14na92she1enhnwer32hr543","apiKey":"a4db08b7-5729-2342asdf-23h2","keyIssuedDate":"2022-03-27T14:01:23.000Z","company":"Apple"},{"id":4,"appName":"Test 005","authorName":"GSMA admin 9","usagePlan":"GSMA Mobile Money API v1.1 OAuth_Simulator","consumerKey":"4f9tpq2l92c3vridsf4452","consumerSecret":"14na92she1enhnwer32hr543","apiKey":"a4db08b7-5729-2342asdf-23h2","keyIssuedDate":"2022-08-24T14:01:23.000Z","company":"Tesla"},{"id":5,"appName":"Test 006","authorName":"GSMA admin 8","usagePlan":"GSMA Mobile Money API v1.1 OAuth_Simulator","consumerKey":"4f9tpq2l92c3vridsf4452","consumerSecret":"14na92she1enhnwer32hr543","apiKey":"a4db08b7-5729-2342asdf-23h2","keyIssuedDate":"2026-03-24T14:01:23.000Z","company":"Tesla"},{"id":6,"appName":"Test 007","authorName":"GSMA admin 65","usagePlan":"GSMA Mobile Money API v1.2 OAuth_Simulator","consumerKey":"4f9tpq2l92c3vridsf4452","consumerSecret":"14na92she1enhnwer32hr543","apiKey":"a4db08b7-5729-2342asdf-23h2","keyIssuedDate":"2022-01-24T14:01:23.000Z","company":"Microsoft"},{"id":7,"appName":"Test 008","authorName":"GSMA admin","usagePlan":"GSMA Mobile Money API v1.0 OAuth_Simulator","consumerKey":"4f9tpq2l92c3vridsf4452","consumerSecret":"14na92she1enhnwer32hr543","apiKey":"a4db08b7-5729-2342asdf-23h2","keyIssuedDate":"2022-03-16T14:01:23.000Z","company":"Apple"}]')},476:function(e,a,n){"use strict";n.r(a);n(419),n(426);var t=n(420),o=n(439),c=n(424),i=n(417),r=n(428),s=n(432),d={name:"all-applications-tab",components:{DashboardCell:n(425).default,DashboardTable:s.default,UserOptionsBlock:c.default},data:function(){return{allApplicationsHeaderTitles:t.b,tableData:o,activeOptionsUserId:-1}},mixins:[i.mixin,r.a],methods:{showUserOptions:function(e){this.activeOptionsUserId=e},hideUserOptions:function(){this.activeOptionsUserId=-1},deleteApplication:function(e){var a=this.tableData.findIndex((function(a){return a.id===e}));this.tableData.splice(a,1)}}},l=n(15),u=Object(l.a)(d,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("dashboard-table",{attrs:{"table-title":"All applications","table-class":"dashboard-content__table-applications",tableHeadersData:e.allApplicationsHeaderTitles,"data-length":e.getSortedTableData.length,"pages-count":e.getPages,"current-page":e.currentPage,"per-page":e.perPage,"page-type":"applications","is-create-button":""},on:{"search-value":e.setSearchValue,"sort-value":e.setSortValue,"set-current-page":e.setCurrentPage}},e._l(e.getTableData,(function(a){return n("tr",{key:a.id,staticClass:"dashboard-table__row"},[n("dashboard-cell",{attrs:{value:a.appName}}),e._v(" "),n("dashboard-cell",{attrs:{value:a.authorName}}),e._v(" "),n("dashboard-cell",{attrs:{value:a.company}}),e._v(" "),n("dashboard-cell",{attrs:{value:a.usagePlan}}),e._v(" "),n("dashboard-cell",{attrs:{value:a.consumerKey}}),e._v(" "),n("dashboard-cell",{attrs:{value:a.consumerSecret}}),e._v(" "),n("dashboard-cell",{attrs:{value:a.apiKey}}),e._v(" "),n("dashboard-cell",{attrs:{value:a.keyIssuedDate}}),e._v(" "),n("td",{staticClass:"dashboard-table__cell dashboard-table__cell--options"},[n("tippy",{staticStyle:{overflow:"visible"},attrs:{trigger:"click",interactive:"",arrow:"",offset:"0,-30"},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("button",{staticClass:"dashboard-table__button",attrs:{type:"button"},on:{click:function(n){return e.showUserOptions(a.id)}}},[n("svg",{attrs:{width:"2",height:"10",viewBox:"0 0 2 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"1",cy:"1",r:"1",transform:"rotate(90 1 1)",fill:"#7C7C7F"}}),e._v(" "),n("circle",{attrs:{cx:"1",cy:"5",r:"1",transform:"rotate(90 1 5)",fill:"#7C7C7F"}}),e._v(" "),n("circle",{attrs:{cx:"1",cy:"9",r:"1",transform:"rotate(90 1 9)",fill:"#7C7C7F"}})])])]},proxy:!0}],null,!0)},[e._v(" "),n("user-options-block",{attrs:{allowOptions:["delete"]},on:{deleteUser:function(n){return e.deleteApplication(a.id)}}})],1)],1)],1)})),0)}),[],!1,null,"1f3951bc",null);a.default=u.exports}}]);
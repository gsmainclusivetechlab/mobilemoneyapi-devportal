(window.webpackJsonp=window.webpackJsonp||[]).push([[3,56],{418:function(e,a,n){var t=n(22),o=Date.prototype,i=o.toString,r=o.getTime;new Date(NaN)+""!="Invalid Date"&&t(o,"toString",(function(){var e=r.call(this);return e==e?i.call(this):"Invalid Date"}))},419:function(e,a,n){"use strict";var t=n(2),o=n(46).findIndex,i=n(126),r=!0;"findIndex"in[]&&Array(1).findIndex((function(){r=!1})),t({target:"Array",proto:!0,forced:r},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("findIndex")},420:function(e,a,n){"use strict";n.d(a,"a",(function(){return t})),n.d(a,"d",(function(){return o})),n.d(a,"c",(function(){return i})),n.d(a,"b",(function(){return r}));var t=[{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"Andorra",code:"AD"},{name:"United Arab Emirates",code:"AE"},{name:"Afghanistan",code:"AF"},{name:"Antigua and Barbuda",code:"AG"},{name:"Anguilla",code:"AI"},{name:"Albania",code:"AL"},{name:"Armenia",code:"AM"},{name:"Angola",code:"AO"},{name:"Antarctica",code:"AQ"},{name:"Argentina",code:"AR"},{name:"American Samoa",code:"AS"},{name:"Austria",code:"AT"},{name:"Australia",code:"AU"},{name:"Aruba",code:"AW"},{name:"Åland",code:"AX"},{name:"Azerbaijan",code:"AZ"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Barbados",code:"BB"},{name:"Bangladesh",code:"BD"},{name:"Belgium",code:"BE"},{name:"Burkina Faso",code:"BF"},{name:"Bulgaria",code:"BG"},{name:"Bahrain",code:"BH"},{name:"Burundi",code:"BI"},{name:"Benin",code:"BJ"},{name:"Saint Barthélemy",code:"BL"},{name:"Bermuda",code:"BM"},{name:"Brunei",code:"BN"},{name:"Bolivia",code:"BO"},{name:"Bonaire",code:"BQ"},{name:"Brazil",code:"BR"},{name:"Bahamas",code:"BS"},{name:"Bhutan",code:"BT"},{name:"Bouvet Island",code:"BV"},{name:"Botswana",code:"BW"},{name:"Belarus",code:"BY"},{name:"Belize",code:"BZ"},{name:"Canada",code:"CA"},{name:"Cocos [Keeling] Islands",code:"CC"},{name:"Democratic Republic of the Congo",code:"CD"},{name:"Central African Republic",code:"CF"},{name:"Republic of the Congo",code:"CG"},{name:"Switzerland",code:"CH"},{name:"Ivory Coast",code:"CI"},{name:"Cook Islands",code:"CK"},{name:"Chile",code:"CL"},{name:"Cameroon",code:"CM"},{name:"China",code:"CN"},{name:"Colombia",code:"CO"},{name:"Costa Rica",code:"CR"},{name:"Cuba",code:"CU"},{name:"Cape Verde",code:"CV"},{name:"Curacao",code:"CW"},{name:"Christmas Island",code:"CX"},{name:"Cyprus",code:"CY"},{name:"Czechia",code:"CZ"},{name:"Germany",code:"DE"},{name:"Djibouti",code:"DJ"},{name:"Denmark",code:"DK"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Algeria",code:"DZ"},{name:"Ecuador",code:"EC"},{name:"Estonia",code:"EE"},{name:"Egypt",code:"EG"},{name:"Western Sahara",code:"EH"},{name:"Eritrea",code:"ER"},{name:"Spain",code:"ES"},{name:"Ethiopia",code:"ET"},{name:"Finland",code:"FI"},{name:"Fiji",code:"FJ"},{name:"Falkland Islands",code:"FK"},{name:"Micronesia",code:"FM"},{name:"Faroe Islands",code:"FO"},{name:"France",code:"FR"},{name:"Gabon",code:"GA"},{name:"Grenada",code:"GD"},{name:"Georgia",code:"GE"},{name:"French Guiana",code:"GF"},{name:"Guernsey",code:"GG"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greenland",code:"GL"},{name:"Gambia",code:"GM"},{name:"Guinea",code:"GN"},{name:"Guadeloupe",code:"GP"},{name:"Equatorial Guinea",code:"GQ"},{name:"Greece",code:"GR"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Guatemala",code:"GT"},{name:"Guam",code:"GU"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Hong Kong",code:"HK"},{name:"Heard Island and McDonald Islands",code:"HM"},{name:"Honduras",code:"HN"},{name:"Croatia",code:"HR"},{name:"Haiti",code:"HT"},{name:"Hungary",code:"HU"},{name:"Indonesia",code:"ID"},{name:"Ireland",code:"IE"},{name:"Israel",code:"IL"},{name:"Isle of Man",code:"IM"},{name:"India",code:"IN"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Iraq",code:"IQ"},{name:"Iran",code:"IR"},{name:"Iceland",code:"IS"},{name:"Italy",code:"IT"},{name:"Jersey",code:"JE"},{name:"Jamaica",code:"JM"},{name:"Jordan",code:"JO"},{name:"Japan",code:"JP"},{name:"Kenya",code:"KE"},{name:"Kyrgyzstan",code:"KG"},{name:"Cambodia",code:"KH"},{name:"Kiribati",code:"KI"},{name:"Comoros",code:"KM"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"North Korea",code:"KP"},{name:"South Korea",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Cayman Islands",code:"KY"},{name:"Kazakhstan",code:"KZ"},{name:"Laos",code:"LA"},{name:"Lebanon",code:"LB"},{name:"Saint Lucia",code:"LC"},{name:"Liechtenstein",code:"LI"},{name:"Sri Lanka",code:"LK"},{name:"Liberia",code:"LR"},{name:"Lesotho",code:"LS"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Latvia",code:"LV"},{name:"Libya",code:"LY"},{name:"Morocco",code:"MA"},{name:"Monaco",code:"MC"},{name:"Moldova",code:"MD"},{name:"Montenegro",code:"ME"},{name:"Saint Martin",code:"MF"},{name:"Madagascar",code:"MG"},{name:"Marshall Islands",code:"MH"},{name:"Macedonia",code:"MK"},{name:"Mali",code:"ML"},{name:"Myanmar [Burma]",code:"MM"},{name:"Mongolia",code:"MN"},{name:"Macao",code:"MO"},{name:"Northern Mariana Islands",code:"MP"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Montserrat",code:"MS"},{name:"Malta",code:"MT"},{name:"Mauritius",code:"MU"},{name:"Maldives",code:"MV"},{name:"Malawi",code:"MW"},{name:"Mexico",code:"MX"},{name:"Malaysia",code:"MY"},{name:"Mozambique",code:"MZ"},{name:"Namibia",code:"NA"},{name:"New Caledonia",code:"NC"},{name:"Niger",code:"NE"},{name:"Norfolk Island",code:"NF"},{name:"Nigeria",code:"NG"},{name:"Nicaragua",code:"NI"},{name:"Netherlands",code:"NL"},{name:"Norway",code:"NO"},{name:"Nepal",code:"NP"},{name:"Nauru",code:"NR"},{name:"Niue",code:"NU"},{name:"New Zealand",code:"NZ"},{name:"Oman",code:"OM"},{name:"Panama",code:"PA"},{name:"Peru",code:"PE"},{name:"French Polynesia",code:"PF"},{name:"Papua New Guinea",code:"PG"},{name:"Philippines",code:"PH"},{name:"Pakistan",code:"PK"},{name:"Poland",code:"PL"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Pitcairn Islands",code:"PN"},{name:"Puerto Rico",code:"PR"},{name:"Palestine",code:"PS"},{name:"Portugal",code:"PT"},{name:"Palau",code:"PW"},{name:"Paraguay",code:"PY"},{name:"Qatar",code:"QA"},{name:"Réunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Serbia",code:"RS"},{name:"Russia",code:"RU"},{name:"Rwanda",code:"RW"},{name:"Saudi Arabia",code:"SA"},{name:"Solomon Islands",code:"SB"},{name:"Seychelles",code:"SC"},{name:"Sudan",code:"SD"},{name:"Sweden",code:"SE"},{name:"Singapore",code:"SG"},{name:"Saint Helena",code:"SH"},{name:"Slovenia",code:"SI"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Slovakia",code:"SK"},{name:"Sierra Leone",code:"SL"},{name:"San Marino",code:"SM"},{name:"Senegal",code:"SN"},{name:"Somalia",code:"SO"},{name:"Suriname",code:"SR"},{name:"South Sudan",code:"SS"},{name:"São Tomé and Príncipe",code:"ST"},{name:"El Salvador",code:"SV"},{name:"Sint Maarten",code:"SX"},{name:"Syria",code:"SY"},{name:"Swaziland",code:"SZ"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Chad",code:"TD"},{name:"French Southern Territories",code:"TF"},{name:"Togo",code:"TG"},{name:"Thailand",code:"TH"},{name:"Tajikistan",code:"TJ"},{name:"Tokelau",code:"TK"},{name:"East Timor",code:"TL"},{name:"Turkmenistan",code:"TM"},{name:"Tunisia",code:"TN"},{name:"Tonga",code:"TO"},{name:"Turkey",code:"TR"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tuvalu",code:"TV"},{name:"Taiwan",code:"TW"},{name:"Tanzania",code:"TZ"},{name:"Ukraine",code:"UA"},{name:"Uganda",code:"UG"},{name:"U.S. Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vatican City",code:"VA"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Venezuela",code:"VE"},{name:"British Virgin Islands",code:"VG"},{name:"U.S. Virgin Islands",code:"VI"},{name:"Vietnam",code:"VN"},{name:"Vanuatu",code:"VU"},{name:"Wallis and Futuna",code:"WF"},{name:"Samoa",code:"WS"},{name:"Kosovo",code:"XK"},{name:"Yemen",code:"YE"},{name:"Mayotte",code:"YT"},{name:"South Africa",code:"ZA"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],o=["NAME","EMAIL","COMPANY","STATUS","ROLE"],i=["PLAN","STATE"],r=["NAME","AUTHOR","COMPANY","USAGE PLAN","CONSUMER KEY","CONSUMER SECRET","API KEY","KEY ISSUED DATE"]},424:function(e,a,n){"use strict";n.r(a);n(421),n(216),n(217);var t={name:"user-options-block",props:{userStatus:{type:Number,default:0},allowOptions:{type:Array,default:function(){return[]}}},data:function(){return{tempStatus:1}},methods:{changeStatus:function(){2!==this.userStatus&&(this.tempStatus=this.userStatus),this.$emit("changeStatus",2===this.userStatus?this.tempStatus:2)},isAllowOption:function(e){return this.allowOptions.includes(e)}}},o=n(15),i=Object(o.a)(t,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"user-options"},[e.isAllowOption("delete")?n("button",{staticClass:"user-options__button user-options__button--delete",attrs:{type:"button"},on:{click:function(a){return e.$emit("deleteUser")}}},[e._v("\n    Delete\n  ")]):e._e(),e._v(" "),e.isAllowOption("block")?n("button",{staticClass:"user-options__button user-options__button--unblock",attrs:{type:"button"},on:{click:e.changeStatus}},[e._v("\n    "+e._s(2===e.userStatus?"Unblock":"Block")+"\n  ")]):e._e()])}),[],!1,null,null,null);a.default=i.exports},425:function(e,a,n){"use strict";n.r(a);n(125);var t={name:"dashboard-cell",props:["value"],data:function(){return{isCopied:!1,successTimeout:void 0}},methods:{copyToClipboard:function(){var e=this;navigator.clipboard.writeText(this.value).then((function(){e.setSuccessCopy()})).catch((function(e){console.error("Async: Could not copy text: ",e)}))},setSuccessCopy:function(){var e=this;clearTimeout(this.successTimeout),this.isCopied=!0,this.successTimeout=setTimeout((function(){e.isCopied=!1}),500)}}},o=n(15),i=Object(o.a)(t,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("td",{staticClass:"dashboard-table__cell"},[n("tippy",{staticStyle:{"max-width":"100%"},attrs:{interactive:"",delay:"600"},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("div",{staticClass:"dashboard-table__cell-content"},[e._v(e._s(e.value))])]},proxy:!0}])},[e._v(" "),n("span",{staticClass:"tooltip-text",class:{"tooltip-text--copied":e.isCopied},on:{click:e.copyToClipboard}},[e._v("\n          "+e._s(e.value)+"\n        ")])])],1)}),[],!1,null,"5d85995c",null);a.default=i.exports},426:function(e,a,n){"use strict";var t=n(2),o=n(129),i=n(63),r=n(25),s=n(19),c=n(128),d=n(68),l=n(69)("splice"),m=Math.max,u=Math.min;t({target:"Array",proto:!0,forced:!l},{splice:function(e,a){var n,t,l,h,p,g,b=s(this),S=r(b.length),f=o(e,S),y=arguments.length;if(0===y?n=t=0:1===y?(n=0,t=S-f):(n=y-2,t=u(m(i(a),0),S-f)),S+n-t>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(l=c(b,t),h=0;h<t;h++)(p=f+h)in b&&d(l,h,b[p]);if(l.length=t,n<t){for(h=f;h<S-t;h++)g=h+n,(p=h+t)in b?b[g]=b[p]:delete b[g];for(h=S;h>S-t+n;h--)delete b[h-1]}else if(n>t)for(h=S-t;h>f;h--)g=h+n-1,(p=h+t-1)in b?b[g]=b[p]:delete b[g];for(h=0;h<n;h++)b[h+f]=arguments[h+2];return b.length=S-t+n,l}})},428:function(e,a,n){"use strict";n(38),n(216),n(217),n(418),n(10),n(221),n(86);var t=n(47),o=(n(430),function(e,a){var n="Newest"===a?1:-1,o="Newest"===a?-1:1;return Object(t.a)(e).sort((function(e,a){return new Date(e.registerDate)<new Date(a.registerDate)?n:new Date(e.registerDate)>new Date(a.registerDate)?o:0}))}),i=function(e,a){return Object(t.a)(e).sort((function(e,n){return e[a].localeCompare(n[a],[],{numeric:!0,caseFirst:"upper"})}))};a.a={data:function(){return{searchValue:"",filterValue:"",sortValue:"",perPage:12,currentPage:1}},computed:{getSortedTableData:function(){return"Newest"===this.sortValue||"Oldest"===this.sortValue?o(this.getTableDataWithSearch,this.sortValue):"Active"===this.sortValue||"Inactive"===this.sortValue||"Blocked"===this.sortValue?(e=this.getTableDataWithSearch,a=this.sortValue,n="Inactive"===a?0:"Active"===a?1:2,Object(t.a)(e).sort((function(e){return e.status===n?-1:1}))):"Unpublish"===this.sortValue||"Publish"===this.sortValue?function(e,a){var n="Unpublish"===a?0:1;return Object(t.a)(e).sort((function(e){return e.state===n?-1:1}))}(this.getTableDataWithSearch,this.sortValue):"Date"===this.sortValue?o(this.getTableDataWithSearch,"Newest"):"Author"===this.sortValue?i(this.getTableDataWithSearch,"authorName"):"Usage plan"===this.sortValue?i(this.getTableDataWithSearch,"usagePlan"):this.getTableDataWithSearch;var e,a,n},getTableDataWithSearch:function(){var e=this;return this.getTableDataWithFilter.filter((function(a){if(""===e.searchValue)return!0;for(var n in a)if("id"!==n){var t=a[n];if("status"===n&&(0===a[n]&&(t="Inactive"),1===a[n]&&(t="Active"),2===a[n]&&(t="Blocked")),"role"===n&&(0===a[n]&&(t="User"),1===a[n]&&(t="Admin"),2===a[n]&&(t="Superadmin")),"state"===n&&(0===a[n]&&(t="Unpublish"),1===a[n]&&(t="Publish")),t.toString().toLowerCase().includes(e.searchValue.toLowerCase()))return!0}return!1}))},getTableDataWithFilter:function(){var e=this;return this.tableData.filter((function(a){return""===e.filterValue||"All Companies"===e.filterValue||a.company===e.filterValue}))},getTableData:function(){return this.getSortedTableData.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},getPages:function(){return Math.ceil(this.getSortedTableData.length/this.perPage)}},methods:{setSearchValue:function(e){this.searchValue=e},setFilterValue:function(e){this.filterValue=e},setSortValue:function(e){this.sortValue=e},setCurrentPage:function(e){this.currentPage=e}}}},430:function(e,a,n){"use strict";var t=n(2),o=n(31),i=n(19),r=n(3),s=n(49),c=[],d=c.sort,l=r((function(){c.sort(void 0)})),m=r((function(){c.sort(null)})),u=s("sort");t({target:"Array",proto:!0,forced:l||!m||!u},{sort:function(e){return void 0===e?d.call(i(this)):d.call(i(this),o(e))}})},518:function(e){e.exports=JSON.parse('[{"id":0,"name":"Esther Howard","email":"sara.cruz@example.com","company":"Starbucks","status":2,"role":0,"registerDate":"2020-03-24T14:01:23.000Z"},{"id":1,"name":"Cameron Williamson","email":"tim.jennings@example.com","company":"eBay","status":0,"role":0,"registerDate":"2021-05-24T14:01:23.000Z"},{"id":2,"name":"Brooklyn Simmons","email":"tanya.hill@example.com","company":"Apple","status":1,"role":0,"registerDate":"2020-03-24T14:01:23.000Z"},{"id":3,"name":"Jenny Wilson","email":"tim.jennings@example.com","company":"Louis Vuitton","status":1,"role":0,"registerDate":"2021-05-24T14:01:23.000Z"},{"id":4,"name":"Brooklyn Simmons","email":"felicia.reid@example.com","company":"Apple","status":0,"role":0,"registerDate":"2020-03-24T14:01:23.000Z"},{"id":5,"name":"Guy Hawkins","email":"tim.jennings@example.com","company":"Johnson & Johnson","status":1,"role":1,"registerDate":"2020-03-24T14:01:23.000Z"},{"id":6,"name":"Robert Fox","email":"tanya.hill@example.com","company":"Louis Vuitton","status":1,"role":0,"registerDate":"2021-05-24T14:01:23.000Z"},{"id":7,"name":"Jacob Jones","email":"felicia.reid@example.com","company":"Apple","status":1,"role":0,"registerDate":"2021-08-24T14:01:23.000Z"},{"id":8,"name":"Kristin Watson","email":"tim.jennings@example.com","company":"Johnson & Johnson","status":1,"role":0,"registerDate":"2020-03-24T14:01:23.000Z"},{"id":9,"name":"Savannah Nguyen","email":"tanya.hill@example.com","company":"Apple","status":0,"role":0,"registerDate":"2021-08-24T14:01:23.000Z"},{"id":10,"name":"Ralph Edwards","email":"jackson.graham@example.com","company":"eBay","status":0,"role":2,"registerDate":"2020-03-24T14:01:23.000Z"},{"id":11,"name":"Savannah Nguyen","email":"tim.jennings@example.com","company":"Louis Vuitton","status":0,"role":0,"registerDate":"2021-08-24T14:01:23.000Z"},{"id":12,"name":"Ralph Edwards","email":"tanya.hill@example.com","company":"eBay","status":0,"role":0,"registerDate":"2020-03-24T14:01:23.000Z"},{"id":13,"name":"Savannah Nguyen","email":"felicia.reid@example.com","company":"Apple","status":0,"role":0,"registerDate":"2021-10-11T14:01:23.000Z"},{"id":14,"name":"Ralph Edwards","email":"tim.jennings@example.com","company":"Johnson & Johnson","status":0,"role":0,"registerDate":"2021-10-11T14:01:23.000Z"},{"id":15,"name":"Savannah Nguyen","email":"tanya.hill@example.com","company":"eBay","status":0,"role":0,"registerDate":"2021-10-11T14:01:23.000Z"},{"id":16,"name":"Ralph Edwards","email":"felicia.reid@example.com","company":"Apple","status":1,"role":0,"registerDate":"2020-03-24T14:01:23.000Z"},{"id":17,"name":"Kristin Watson","email":"tim.jennings@example.com","company":"Louis Vuitton","status":1,"role":0,"registerDate":"2020-05-24T14:01:23.000Z"},{"id":18,"name":"Brooklyn Simmons","email":"tanya.hill@example.com","company":"Louis Vuitton","status":1,"role":0,"registerDate":"2020-05-24T14:01:23.000Z"},{"id":19,"name":"Jenny Wilson","email":"tim.jennings@example.com","company":"eBay","status":2,"role":0,"registerDate":"2021-10-11T14:01:23.000Z"}]')},524:function(e,a,n){"use strict";n.r(a);n(10),n(431),n(16),n(17),n(45),n(419),n(426),n(35),n(36);var t=n(420),o=n(518),i=n(424),r=n(417),s=n(428),c=n(432),d={name:"all-users-tab",components:{DashboardCell:n(425).default,DashboardTable:c.default,UserOptionsBlock:i.default},data:function(){return{allUsersHeaderTitles:t.d,tableData:o,activeOptionsUserId:-1}},computed:{getCompanies:function(){return new Set(this.tableData.map((function(e){return e.company})))},getUserAccessToken:function(){return this.$store.state.auth.token_access},isAdminRole:function(){return"ADMIN"===this.getUserAccessToken},isSuperAdminRole:function(){return"SUPERADMIN"===this.getUserAccessToken}},mixins:[r.mixin,s.a],methods:{getUserStatusLabelClass:function(e){return 0===e?"dashboard-table__status-label--inactive":1===e?"dashboard-table__status-label--active":"dashboard-table__status-label--blocked"},getUserStatus:function(e){return 0===e?"Inactive":1===e?"Active":"Blocked"},getUserRole:function(e){return 0===e?"USER":1===e?"ADMIN":"SUPERADMIN"},showUserOptions:function(e){this.activeOptionsUserId=e},hideUserOptions:function(){this.activeOptionsUserId=-1},deleteUser:function(e){var a=this.tableData.findIndex((function(a){return a.id===e}));this.tableData.splice(a,1)},changeStatus:function(e,a){this.tableData.forEach((function(n){n.id===e&&(n.status=a)}))},changeUserRole:function(e){this.tableData.forEach((function(a){a.id===e&&2!==a.role&&(a.role=0===a.role?1:0)}))}}},l=n(15),m=Object(l.a)(d,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("dashboard-table",{attrs:{"table-title":"All registered users","table-class":"dashboard-content__table-users","table-headers-data":e.allUsersHeaderTitles,"filter-data":e.getCompanies,"data-length":e.getSortedTableData.length,"pages-count":e.getPages,"current-page":e.currentPage,"per-page":e.perPage,"page-type":"users"},on:{"search-value":e.setSearchValue,"filter-value":e.setFilterValue,"sort-value":e.setSortValue,"set-current-page":e.setCurrentPage}},e._l(e.getTableData,(function(a){return n("tr",{key:a.id,staticClass:"dashboard-table__row"},[n("dashboard-cell",{attrs:{value:a.name}}),e._v(" "),n("dashboard-cell",{attrs:{value:a.email}}),e._v(" "),n("dashboard-cell",{attrs:{value:a.company}}),e._v(" "),n("td",{staticClass:"dashboard-table__cell"},[n("span",{staticClass:"dashboard-table__status-label",class:[e.getUserStatusLabelClass(a.status)]}),e._v("\n      "+e._s(e.getUserStatus(a.status))+"\n    ")]),e._v(" "),n("td",{staticClass:"dashboard-table__cell"},[e.isAdminRole?[n("span",{staticClass:"dashboard-table__role dashboard-table__role--red"},[e._v("\n          "+e._s(e.getUserRole(a.role))+"\n        ")])]:e._e(),e._v(" "),e.isSuperAdminRole?[n("button",{staticClass:"dashboard-table__role dashboard-table__role--red dashboard-table__role--button",on:{dblclick:function(n){return e.changeUserRole(a.id)}}},[e._v("\n          "+e._s(e.getUserRole(a.role))+"\n        ")])]:e._e()],2),e._v(" "),n("td",{staticClass:"dashboard-table__cell dashboard-table__cell--options"},[n("tippy",{staticStyle:{overflow:"visible"},attrs:{trigger:"click",interactive:"",arrow:"",offset:"0,-30"},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("button",{staticClass:"dashboard-table__button",attrs:{type:"button"},on:{click:function(n){return e.showUserOptions(a.id)}}},[n("svg",{attrs:{width:"2",height:"10",viewBox:"0 0 2 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{cx:"1",cy:"1",r:"1",transform:"rotate(90 1 1)",fill:"#7C7C7F"}}),e._v(" "),n("circle",{attrs:{cx:"1",cy:"5",r:"1",transform:"rotate(90 1 5)",fill:"#7C7C7F"}}),e._v(" "),n("circle",{attrs:{cx:"1",cy:"9",r:"1",transform:"rotate(90 1 9)",fill:"#7C7C7F"}})])])]},proxy:!0}],null,!0)},[e._v(" "),n("user-options-block",{attrs:{allowOptions:["delete","block"],userStatus:a.status},on:{deleteUser:function(n){return e.deleteUser(a.id)},changeStatus:function(n){return e.changeStatus(a.id,n)}}})],1)],1)],1)})),0)}),[],!1,null,"e0e5d7d0",null);a.default=m.exports}}]);
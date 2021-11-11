(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{419:function(u,e,t){"use strict";t(454),t(211),t(85);var n=t(409),D={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(n.b)(this.item.link)},exact:function(){var u=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===u.link})):"/"===this.link},isNonHttpURI:function(){return Object(n.g)(this.link)||Object(n.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isDownload:function(){return"download"===this.target},downloadLink:function(){return this.item.link},isInternal:function(){return!Object(n.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(n.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},i=t(15),s=Object(i.a)(D,(function(){var u=this,e=u.$createElement,t=u._self._c||e;return u.isInternal&&!u.isDownload?t("RouterLink",{staticClass:"nav-link",attrs:{to:u.link,exact:u.exact},nativeOn:{focusout:function(e){return u.focusoutAction(e)}}},[u._v("\n  "+u._s(u.item.text)+"\n")]):u.isDownload?t("a",{staticClass:"nav-link external",attrs:{href:u.downloadLink,rel:u.rel,download:""}},[u._v("\n  "+u._s(u.item.text)+"\n")]):t("a",{staticClass:"nav-link external",attrs:{href:u.link,target:u.target,rel:u.rel},on:{focusout:u.focusoutAction}},[u._v("\n  "+u._s(u.item.text)+"\n  "),u.isBlankTarget?t("OutboundLink"):u._e()],1)}),[],!1,null,null,null);e.a=s.exports},425:function(u,e,t){},434:function(u,e,t){},436:function(u,e,t){},442:function(u,e,t){"use strict";t.r(e);t(211);var n=t(409),D={name:"SidebarGroup",components:{DropdownTransition:t(449).a},data:function(){return{open:!0}},props:["item","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=t(442).default},methods:{isActive:n.e,toggle:function(){this.open=!this.open}}},i=(t(485),t(15));function s(u,e){if("group"===e.type){var t=e.path&&Object(n.e)(u,e.path),D=e.children.some((function(e){return"group"===e.type?s(u,e):"page"===e.type&&Object(n.e)(u,e.path)}));return t||D}return!1}var r={name:"SidebarLinks",components:{SidebarGroup:Object(i.a)(D,(function(){var u=this,e=u.$createElement,t=u._self._c||e;return t("section",{staticClass:"sidebar-group",class:[{collapsable:u.collapsable,"is-sub-group":0!==u.depth},"depth-"+u.depth]},[u.item.path?t("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:u.open,active:u.isActive(u.$route,u.item.path)},attrs:{to:u.item.path},nativeOn:{click:function(e){return u.toggle(e)}}},[t("span",[u._v(u._s(u.item.title))]),u._v(" "),u.collapsable?t("span",{staticClass:"arrow",class:u.open?"down":"right"}):u._e()]):t("p",{staticClass:"sidebar-heading",class:{open:u.open},on:{click:u.toggle}},[t("span",[u._v(u._s(u.item.title))]),u._v(" "),u.collapsable?t("span",{staticClass:"arrow",class:u.open?"down":"right"}):u._e()]),u._v(" "),t("DropdownTransition",[u.open||!u.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:u.item.children,"sidebar-depth":u.item.sidebarDepth,"initial-open-group-index":u.item.initialOpenGroupIndex,depth:u.depth+1}}):u._e()],1)],1)}),[],!1,null,null,null).exports,SidebarLink:t(500).a},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var u=function(u,e){for(var t=0;t<e.length;t++){var n=e[t];if(s(u,n))return t}return-1}(this.$route,this.items);u>-1&&(this.openGroupIndex=u)},toggleGroup:function(u){this.openGroupIndex=u===this.openGroupIndex?-1:u},isActive:function(u){return Object(n.e)(this.$route,u.regularPath)}}},o=Object(i.a)(r,(function(){var u=this,e=u.$createElement,t=u._self._c||e;return u.items.length?t("ul",{staticClass:"sidebar-links"},u._l(u.items,(function(e,n){return t("li",{key:n},["group"===e.type?t("SidebarGroup",{attrs:{item:e,collapsable:e.collapsable||e.collapsible,depth:u.depth}}):t("SidebarLink",{attrs:{"sidebar-depth":u.sidebarDepth,item:e}})],1)})),0):u._e()}),[],!1,null,null,null);e.default=o.exports},474:function(u,e,t){"use strict";t(425)},485:function(u,e,t){"use strict";t(434)},487:function(u,e,t){"use strict";t(436)},498:function(u,e,t){"use strict";t(230);var n=t(59),D=t(9),i=t(34),s=(t(83),t(37),t(42),t(416),t(8),t(121),t(412),t(41),t(216),t(123),t(214),t(215),t(87),t(458),t(421),t(422),t(17),t(18),t(460),t(84),t(46)),r=(t(86),t(464),t(466),t(222),t(417),t(424),t(467),t(122),t(469),t(471)),o=t.n(r),a=t(472),l=t.n(a),c=null,F=null,C=null,h=null,d=/[\|\u3131-\u3163\uAC00-\uD7A3]|[\u3400-\u4DB5\u4E00-\u9FCC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|(?:[\uD840-\uD868](?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|(?:\uD869(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDED6\uDF00-\uDFFF])|(?:[\uD86A-\uD86C](?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])|(?:\uD86D(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDF34\uDF40-\uDFFF])|(?:\uD86E(?![\uDC00-\uDFFF]))(?:(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDC1D])|[\u3041-\u3096]|[\u30A1-\u30FA]/gi,A={buildIndex:function(u,e){var t=u.filter((function(u){return!u.frontmatter||!1!==u.frontmatter.search})),n={encode:e.encode||"simple",tokenize:e.tokenize||"full",split:e.split||/\W+/,async:!0,doc:{id:"key",field:["title","headersStr","content"]}};(c=new o.a(n)).add(t);var i=t.filter((function(u){return u.charsets.cyrillic})),s=t.filter((function(u){return u.charsets.cjk}));i.length&&(F=new o.a(Object(D.a)(Object(D.a)({},n),{},{encode:"icase",split:/\s+/,tokenize:"forward"}))).add(i),s.length&&(C=new o.a(Object(D.a)(Object(D.a)({},n),{},{encode:!1,tokenize:function(u){var e=[],t=null;do{(t=d.exec(u))&&e.push(t[0])}while(t);return e}}))).add(s),h=l.a.keyBy(t,"path")},match:function(u,e){var t=arguments;return Object(i.a)(regeneratorRuntime.mark((function n(){var i,r,o,a,h,d,A,g;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.length>2&&void 0!==t[2]?t[2]:7,r=[{field:"title",query:u,limit:i,boost:10},{field:"headersStr",query:u,limit:i,boost:7},{field:"content",query:u,limit:i}],n.next=4,c.search(r);case 4:if(o=n.sent,!F){n.next=11;break}return n.next=8,F.search(r);case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=[];case 12:if(a=n.t0,!C){n.next=19;break}return n.next=16,C.search(r);case 16:n.t1=n.sent,n.next=20;break;case 19:n.t1=[];case 20:return h=n.t1,d=l.a.uniqBy([].concat(Object(s.a)(o),Object(s.a)(a),Object(s.a)(h)),"path"),A=d.map((function(t){return Object(D.a)(Object(D.a)({},t),{},{parentPageTitle:E(t)},f(t,m(u),e))})),g=l.a.groupBy(A,"parentPageTitle"),n.abrupt("return",l.a.values(g).map((function(u){return u.map((function(u,e){return 0===e?u:Object(D.a)(Object(D.a)({},u),{},{parentPageTitle:null})}))})).flat());case 25:case"end":return n.stop()}}),n)})))()},normalizeString:m};function E(u){var e=u.path.split("/"),t="/";return e[1]&&(t="/".concat(e[1],"/")),(h[t]||u).title}function f(u,e,t){var n=function(u,e,t){var n=t.map((function(e){return p(u,e)||B(u,e)})).filter((function(u){return u}));if(0===n.length)return null;if(n.every((function(u){return null!=u.headerIndex})))return p(u,e)||n[0];return B(u,e)||n.find((function(u){return null==u.headerIndex}))}(u,e.toLowerCase(),t);if(!n)return Object(D.a)(Object(D.a)({},g(u)),{},{slug:"",contentStr:null});if(null!=n.headerIndex)return Object(D.a)(Object(D.a)({},g(u,n.headerIndex,n)),{},{slug:"#"+u.headers[n.headerIndex].slug,contentStr:null});var i=Math.min.apply(Math,Object(s.a)((u.headers||[]).filter((function(u){return null!=u.charIndex&&u.charIndex<n.charIndex})).map((function(u){return n.charIndex-u.charIndex})))),r=(u.headers||[]).findIndex((function(u){return null!=u.charIndex&&u.charIndex<n.charIndex&&n.charIndex-u.charIndex===i}));return-1===r&&(r=null),Object(D.a)(Object(D.a)({},g(u,r)),{},{slug:null==r?"":"#"+u.headers[r].slug},function(u,e){var t=e.charIndex,n=e.termLength,D=u.content.lastIndexOf("\n",t),i=u.content.indexOf("\n",t);-1===D&&(D=0);-1===i&&(i=u.content.length);var s=u.content.slice(D,i),r=t-D,o=[r,n];if(120>=s.length)return{contentStr:s,contentHighlight:o};var a=l.a.round((120-n)/2),c=Math.max(r-a,0),F=Math.min(c+120,s.length),C=s.slice(c,F);o[0]=o[0]-c,c>0&&(C="..."+C,o[0]=o[0]+3);F<s.length&&(C+="...");return{contentStr:C,contentHighlight:o}}(u,n))}function g(u,e,t){if(null==e)return{headingStr:u.title};for(var n=[],D=function(){var t=u.headers[e];n.unshift(t),-1===(e=l.a.findLastIndex(u.headers,(function(u){return u.level===t.level-1}),e-1))&&(e=null)};null!=e;)D();var i=n.map((function(u){return u.title})).join(" > "),s=n.slice(0,-1),r=l.a.sum(s.map((function(u){return(u.title||"").length})))+3*s.length;return{headingStr:i,headingHighlight:t&&null!=t.headerIndex&&[t.charIndex+r,t.termLength]}}function p(u,e){if(!u.headers)return null;for(var t=0;t<u.headers.length;t++){var n=u.headers[t].normalizedTitle.indexOf(e);if(-1!==n)return{headerIndex:t,charIndex:n,termLength:e.length}}return null}function B(u,e){if(!u.normalizedContent)return null;var t=u.normalizedContent.indexOf(e);return-1===t?null:{headerIndex:null,charIndex:t,termLength:e.length}}function m(u){return u?u.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""):u}var v=t(473);function b(u,e){if(!u)return{};if(!e)return{prefix:u};var t=Object(n.a)(e,2),D=t[0],i=D+t[1];return{prefix:u.slice(0,D),highlightedContent:u.slice(D,i),suffix:u.slice(i)}}var x={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0,suggestions:null}},computed:{queryTerms:function(){return this.query?A.normalizeString(this.query).split(/(?:(?![0-9A-Z_a-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])[\s\S])+/i).filter((function(u){return u})):[]},showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},watch:{query:function(){this.getSuggestions()}},created:function(){var u=this;this.$router.options.scrollBehavior=function(e,t,n){var D=u.$vuepress.$get("disableScrollBehavior");if(e.hash&&!D)return new Promise((function(u,t){setTimeout((function(){u({selector:e.hash,behavior:"smooth"})}),500)}))}},mounted:function(){A.buildIndex(this.$site.pages,{hooks:{type:"Buffer",data:[47,47,32,47,100,111,99,115,47,46,118,117,101,112,114,101,115,115,47,115,101,97,114,99,104,72,111,111,107,115,46,106,115,10,10,101,120,112,111,114,116,32,100,101,102,97,117,108,116,32,123,10,32,32,47,47,32,97,115,121,110,99,32,112,114,111,99,101,115,115,83,117,103,103,101,115,116,105,111,110,115,40,115,117,103,103,101,115,116,105,111,110,115,44,32,113,117,101,114,121,83,116,114,105,110,103,44,32,113,117,101,114,121,84,101,114,109,115,41,32,123,10,32,32,47,47,32,32,32,105,102,32,40,113,117,101,114,121,83,116,114,105,110,103,41,32,123,10,32,32,47,47,32,32,32,32,32,47,47,32,97,100,100,32,97,32,115,117,103,103,101,115,116,105,111,110,32,116,111,32,115,116,97,114,116,32,97,32,115,101,97,114,99,104,32,105,110,32,97,110,32,101,120,116,101,114,110,97,108,32,115,101,114,118,105,99,101,10,32,32,47,47,32,32,32,32,32,115,117,103,103,101,115,116,105,111,110,115,46,112,117,115,104,40,123,10,32,32,47,47,32,32,32,32,32,32,32,112,97,116,104,58,32,39,104,116,116,112,115,58,47,47,115,111,117,114,99,101,103,114,97,112,104,46,99,111,109,47,115,101,97,114,99,104,63,112,97,116,116,101,114,110,84,121,112,101,61,108,105,116,101,114,97,108,38,113,61,39,44,10,32,32,47,47,32,32,32,32,32,32,32,115,108,117,103,58,32,113,117,101,114,121,83,116,114,105,110,103,44,10,32,32,47,47,32,32,32,32,32,32,32,112,97,114,101,110,116,80,97,103,101,84,105,116,108,101,58,32,39,83,111,117,114,99,101,103,114,97,112,104,39,44,10,32,32,47,47,32,32,32,32,32,32,32,116,105,116,108,101,58,32,39,83,101,97,114,99,104,32,99,111,100,101,39,44,10,32,32,47,47,32,32,32,32,32,32,32,99,111,110,116,101,110,116,83,116,114,58,32,39,83,101,97,114,99,104,32,102,111,114,32,34,39,32,43,32,113,117,101,114,121,83,116,114,105,110,103,32,43,32,39,34,32,111,110,32,83,111,117,114,99,101,103,114,97,112,104,39,44,10,32,32,47,47,32,32,32,32,32,32,32,101,120,116,101,114,110,97,108,58,32,116,114,117,101,44,10,32,32,47,47,32,32,32,32,32,125,41,10,32,32,47,47,32,32,32,125,10,32,32,47,47,32,32,32,114,101,116,117,114,110,32,115,117,103,103,101,115,116,105,111,110,115,10,32,32,47,47,32,125,44,10,32,32,97,115,121,110,99,32,111,110,71,111,84,111,83,117,103,103,101,115,116,105,111,110,40,105,110,100,101,120,44,32,115,117,103,103,101,115,116,105,111,110,44,32,113,117,101,114,121,83,116,114,105,110,103,44,32,113,117,101,114,121,84,101,114,109,115,41,32,123,10,32,32,32,32,47,47,32,99,111,110,115,111,108,101,46,108,111,103,40,39,105,110,100,101,120,58,32,39,44,32,105,110,100,101,120,41,59,10,32,32,32,32,47,47,32,99,111,110,115,111,108,101,46,108,111,103,40,39,115,117,103,103,101,115,116,105,111,110,58,32,39,44,32,115,117,103,103,101,115,116,105,111,110,41,59,10,32,32,32,32,47,47,32,99,111,110,115,111,108,101,46,108,111,103,40,39,113,117,101,114,121,83,116,114,105,110,103,58,32,39,44,32,113,117,101,114,121,83,116,114,105,110,103,41,59,10,32,32,32,32,47,47,32,99,111,110,115,111,108,101,46,108,111,103,40,39,113,117,101,114,121,84,101,114,109,115,58,32,39,44,32,113,117,101,114,121,84,101,114,109,115,41,59,10,32,32,32,32,47,47,32,101,46,103,46,32,99,114,101,97,116,101,32,97,110,32,97,110,97,108,121,116,105,99,115,32,101,118,101,110,116,10,32,32,32,32,108,111,99,97,108,83,116,111,114,97,103,101,46,115,101,116,73,116,101,109,40,39,100,101,108,97,121,65,102,116,101,114,83,101,97,114,99,104,39,44,32,39,116,114,117,101,39,41,10,32,32,32,32,115,101,116,84,105,109,101,111,117,116,40,40,41,61,62,32,123,10,32,32,32,32,32,32,108,111,99,97,108,83,116,111,114,97,103,101,46,115,101,116,73,116,101,109,40,39,100,101,108,97,121,65,102,116,101,114,83,101,97,114,99,104,39,44,32,39,102,97,108,115,101,39,41,10,32,32,32,32,125,44,32,53,48,48,41,10,32,32,125,44,10,125,10]}}||{}),this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey);var u=this.urlParams();if(u){var e=u.get("query");e&&(this.query=decodeURI(e),this.focused=!0)}},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getSuggestions:function(){var u=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u.query&&u.queryTerms.length){e.next=3;break}return u.suggestions=[],e.abrupt("return");case 3:return e.next=5,A.match(u.query,u.queryTerms,u.$site.themeConfig.searchMaxSuggestions||5);case 5:if(t=e.sent,!v.a.processSuggestions){e.next=10;break}return e.next=9,v.a.processSuggestions(t,u.query,u.queryTerms);case 9:t=e.sent;case 10:u.suggestions=t.map((function(u){return Object(D.a)(Object(D.a)({},u),{},{headingDisplay:b(u.headingStr,u.headingHighlight),contentDisplay:b(u.contentStr,u.contentHighlight)})}));case 11:case"end":return e.stop()}}),e)})))()},getPageLocalePath:function(u){for(var e in this.$site.locales||{})if("/"!==e&&0===u.path.indexOf(e))return e;return"/"},isSearchable:function(u){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return u.path.match(e)})).length>0},onHotkey:function(u){u.srcElement===document.body&&["s","/"].includes(u.key)&&(this.$refs.input.focus(),u.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(u){if(this.showSuggestions){if(v.a.onGoToSuggestion)if(!0===v.a.onGoToSuggestion(u,this.suggestions[u],this.query,this.queryTerms))return;if(this.suggestions[u].external)window.open(this.suggestions[u].path+this.suggestions[u].slug,"_blank");else{this.$router.push(this.suggestions[u].path+this.suggestions[u].slug).catch((function(u){if("NavigationDuplicated"!==u.name)throw u})),this.query="",this.focusIndex=0;var e=this.urlParams();if(e){e.delete("query");var t=e.toString(),n=window.location.pathname+(t?"?".concat(t):"");history.pushState(null,"",n)}}}},focus:function(u){this.focusIndex=u},unfocus:function(){this.focusIndex=-1},urlParams:function(){return window.location.search?new URLSearchParams(window.location.search):null}}},k=(t(474),t(15)),w=Object(k.a)(x,(function(){var u=this,e=u.$createElement,t=u._self._c||e;return t("div",{staticClass:"search-box"},[t("input",{ref:"input",class:{focused:u.focused},attrs:{"aria-label":"Search",placeholder:u.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:u.query},on:{input:function(e){u.query=e.target.value},focus:function(e){u.focused=!0},blur:function(e){u.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"enter",13,e.key,"Enter")?null:u.go(u.focusIndex)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:u.onUp(e)},function(e){return!e.type.indexOf("key")&&u._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:u.onDown(e)}]}}),u._v(" "),u.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":u.alignRight},on:{mouseleave:u.unfocus}},u._l(u.suggestions,(function(e,n){return t("li",{key:n,staticClass:"suggestion",class:{focused:n===u.focusIndex},on:{mousedown:function(e){return u.go(n)},mouseenter:function(e){return u.focus(n)}}},[t("a",{attrs:{href:e.path+e.slug},on:{click:function(u){u.preventDefault()}}},[e.parentPageTitle?t("div",{staticClass:"parent-page-title",domProps:{innerHTML:u._s(e.parentPageTitle)}}):u._e(),u._v(" "),t("div",{staticClass:"suggestion-row"},[t("div",{staticClass:"page-title"},[u._v(u._s(e.title||e.path))]),u._v(" "),t("div",{staticClass:"suggestion-content"},[e.headingStr?t("div",{staticClass:"header"},[u._v("\n              "+u._s(e.headingDisplay.prefix)),t("span",{staticClass:"highlight"},[u._v(u._s(e.headingDisplay.highlightedContent))]),u._v(u._s(e.headingDisplay.suffix)+"\n            ")]):u._e(),u._v(" "),e.contentStr?t("div",[u._v("\n              "+u._s(e.contentDisplay.prefix)),t("span",{staticClass:"highlight"},[u._v(u._s(e.contentDisplay.highlightedContent))]),u._v(u._s(e.contentDisplay.suffix)+"\n            ")]):u._e()])])])])})),0):u._e()])}),[],!1,null,null,null).exports,_=t(501),y=t(443),I=t(418);function L(u,e){return u.ownerDocument.defaultView.getComputedStyle(u,null)[e]}var O={name:"Navbar",components:{SearchBox:w,NavLinks:y.a,SidebarButton:_.a},mixins:[I.mixin],data:function(){return{linksWrapMaxWidth:null,isMobileSearchOpened:!1,loggedInUser:!1,loggedInDropdownOpened:!1}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var u=this,e=parseInt(L(this.$el,"paddingLeft"))+parseInt(L(this.$el,"paddingRight")),t=function(){document.documentElement.clientWidth<979?u.linksWrapMaxWidth=null:u.linksWrapMaxWidth=u.$el.offsetWidth-e-(u.$refs.siteName&&u.$refs.siteName.offsetWidth||0)};t(),window.addEventListener("resize",t,!1)},created:function(){var u=this;this.$root.$on("log-user-in",(function(){u.loggedInUser=!0}))},methods:{toggleMobileSearch:function(){this.isMobileSearchOpened=!this.isMobileSearchOpened},closeLoginDropdown:function(){this.loggedInDropdownOpened=!1},toggleLoginDropdown:function(){this.loggedInDropdownOpened=!this.loggedInDropdownOpened},handleLogOut:function(){this.loggedInUser=!1,this.$router.push({path:"/"}).catch((function(){}))}}},S=Object(k.a)(O,(function(){var u=this,e=u.$createElement,t=u._self._c||e;return t("header",{staticClass:"navbar main-header",class:{"mobile-search-opened":u.isMobileSearchOpened}},[t("SidebarButton",{on:{"toggle-sidebar":function(e){return u.$emit("toggle-sidebar")}}}),u._v(" "),t("div",{staticClass:"main-header__box"},[t("div",{staticClass:"logo-holder"},[t("RouterLink",{staticClass:"home-link",attrs:{to:u.$localePath}},[u.$site.themeConfig.logo?t("img",{staticClass:"logo",attrs:{src:u.$withBase(u.$site.themeConfig.logo),alt:u.$siteTitle}}):u._e()]),u._v(" "),t("div",{staticClass:"branding-text"},[u._v("\n        mobile money api\n      ")])],1),u._v(" "),t("NavLinks",{staticClass:"can-hide"}),u._v(" "),t("SearchBox"),u._v(" "),t("button",{staticClass:"mobile-search-opener",attrs:{type:"button"},on:{click:function(e){return u.toggleMobileSearch()}}}),u._v(" "),u.loggedInUser?u._e():t("div",{staticClass:"login-links"},[t("a",{staticClass:"btn btn--transparent btn--register",attrs:{href:"/signup/"}},[u._v("Sign up")]),u._v(" "),t("a",{staticClass:"btn btn--accent",attrs:{href:"/login/"}},[u._v("Log in")])]),u._v(" "),u.loggedInUser?t("div",{staticClass:"logged-in-links"},[t("span",{staticClass:"logged-in-name"},[u._v("Thomas Ride")]),u._v(" "),t("button",{staticClass:"logged-in-account-btn"},[t("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 15 15",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M7.5 9C11.642 9 15 10.567 15 12.5V15H0V12.5C0 10.567 3.358 9 7.5 9ZM14 12.5C14 11.12 11.09 10 7.5 10C3.91 10 1 11.12 1 12.5V14H14V12.5ZM7.5 0C8.42826 0 9.3185 0.368749 9.97487 1.02513C10.6313 1.6815 11 2.57174 11 3.5C11 4.42826 10.6313 5.3185 9.97487 5.97487C9.3185 6.63125 8.42826 7 7.5 7C6.57174 7 5.6815 6.63125 5.02513 5.97487C4.36875 5.3185 4 4.42826 4 3.5C4 2.57174 4.36875 1.6815 5.02513 1.02513C5.6815 0.368749 6.57174 0 7.5 0ZM7.5 1C6.83696 1 6.20107 1.26339 5.73223 1.73223C5.26339 2.20107 5 2.83696 5 3.5C5 4.16304 5.26339 4.79893 5.73223 5.26777C6.20107 5.73661 6.83696 6 7.5 6C8.16304 6 8.79893 5.73661 9.26777 5.26777C9.73661 4.79893 10 4.16304 10 3.5C10 2.83696 9.73661 2.20107 9.26777 1.73223C8.79893 1.26339 8.16304 1 7.5 1Z"}})])]),u._v(" "),t("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:u.closeLoginDropdown,expression:"closeLoginDropdown"}],staticClass:"logged-in-dropdown-wrap"},[t("button",{staticClass:"logged-in-dropdown-btn",class:{active:u.loggedInDropdownOpened},on:{click:function(e){return u.toggleLoginDropdown(!1)}}},[t("svg",{attrs:{width:"8",height:"5",viewBox:"0 0 8 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M7.06 0L4 3.09042L0.94 0L0 0.951417L4 5L8 0.951417L7.06 0Z",fill:"#242529"}})])]),u._v(" "),t("ul",{staticClass:"logged-in-dropdown-list",class:{active:u.loggedInDropdownOpened}},[t("li",[t("button",{staticClass:"logged-in-logout-btn",on:{click:function(e){return e.preventDefault(),u.handleLogOut(e)}}},[u._v("Log out")])])])])]):u._e()],1)],1)}),[],!1,null,null,null);e.a=S.exports},499:function(u,e,t){"use strict";var n=t(46),D=(t(85),t(35),t(36),t(214),t(215),t(442)),i=t(443),s={name:"Sidebar",components:{SidebarLinks:D.default,NavLinks:i.a},data:function(){return{sidebarItems:Object(n.a)(this.items),backLink:null}},props:["items"],methods:{getBackLink:function(){var u=this,e=Object.keys(this.$site.themeConfig.sidebar);this.backLink=null,e.forEach((function(e){u.$route.path.includes(e)&&(u.backLink=u.$site.themeConfig.sidebar[e][0].backLink)}))}},mounted:function(){this.getBackLink()},watch:{$route:function(u,e){this.getBackLink()}}},r=(t(487),t(15)),o=Object(r.a)(s,(function(){var u=this,e=u.$createElement,t=u._self._c||e;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),u._v(" "),u._t("top"),u._v(" "),u.backLink&&u.backLink.path!==u.$route.path?t("router-link",{staticClass:"sidebar__back-btn",attrs:{to:{path:u.backLink.path}}},[t("div",{staticClass:"icon"},[t("svg",{attrs:{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M5 0L5.715 0.6965L1.925 4.5H12V5.5H1.925L5.715 9.2865L5 10L0 5L5 0Z",fill:"currentColor"}})])]),u._v(" "),t("div",{staticClass:"text-holder"},[u._v("\n      Back to "+u._s(u.backLink.title)+"\n    ")])]):u._e(),u._v(" "),t("SidebarLinks",{attrs:{depth:0,items:u.items}}),u._v(" "),u._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports},507:function(u,e,t){"use strict";t.r(e);var n=t(497),D=t(202),i=(t(84),t(37),t(211),t(42),t(122),t(488)),s={mounted:function(){window.addEventListener("scroll",this.onScroll)},methods:{onScroll:t.n(i)()((function(){this.setActiveHash()}),300),setActiveHash:function(){var u=this,e=[].slice.call(document.querySelectorAll(".sidebar-link")),t=[].slice.call(document.querySelectorAll(".header-anchor"));e.length&&(t=t.filter((function(u){return e.some((function(e){return e.hash===u.hash}))})));for(var n=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),D=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),i=window.innerHeight+n,s=JSON.parse(localStorage.getItem("delayAfterSearch")),r=0;r<t.length;r++){var o=t[r],a=t[r+1],l=0===r&&0===n||n>=o.parentElement.offsetTop+10&&(!a||n<a.parentElement.offsetTop-10),c=decodeURIComponent(this.$route.hash);if(!s&&l&&c!==decodeURIComponent(o.hash)){var F=o;if(i===D)for(var C=r+1;C<t.length;C++)if(c===decodeURIComponent(t[C].hash))return;return this.$vuepress.$set("disableScrollBehavior",!0),void this.$router.replace(decodeURIComponent(F.hash),(function(){u.$nextTick((function(){u.$vuepress.$set("disableScrollBehavior",!1)}))}))}}}},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll)}},r={components:{Layout:n.a,Footer:D.a},mixins:[s]},o=t(15),a=Object(o.a)(r,(function(){var u=this.$createElement,e=this._self._c||u;return e("Layout",[e("template",{slot:"page-bottom"})],2)}),[],!1,null,null,null);e.default=a.exports}}]);
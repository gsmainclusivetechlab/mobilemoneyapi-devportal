(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{414:function(e,t,a){"use strict";a.r(t);var r=a(12),n=a(7),o=(a(33),a(6)),s=a(9),c=a(3),i=a(10),u=a(5),g=a(100),b={name:"dashboard-table-bottom",props:{module:{type:String}},data:function(){return{isActive:!0}},computed:Object(n.a)(Object(n.a)({getCurrentPage:function(){return this.$store.state[u.g].currentPage}},Object(g.e)(u.g,{tokens:"tokens"})),Object(g.c)(u.g,{getTokenNextPage:i.i,hasPages:i.e})),methods:{nextPage:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isActive=!1,e.$store.commit(Object(o.a)(u.g,c.h),e.getCurrentPage+1),t.next=5,e.getData();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:e.isActive=!0;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},prevPage:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.isActive=!1,e.$store.commit(Object(o.a)(u.g,c.h),e.getCurrentPage-1),e.$store.commit(Object(o.a)(u.g,c.e)),t.next=6,e.getData();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:e.isActive=!0;case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getData:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch(Object(o.a)(e.module,s.b));case 2:case"end":return t.stop()}}),t)})))()}}},p=a(25),l=Object(p.a)(b,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.hasPages?a("div",{staticClass:"dashboard-table-bottom"},[a("span",[e._v("Current Page "+e._s(e.getCurrentPage+1))]),e._v(" "),a("div",[a("button",{staticClass:"dashboard-table__pagination-arrow dashboard-table__pagination-arrow--left",class:{"dashboard-table__pagination-arrow--inactive":0===e.getCurrentPage||!e.isActive},attrs:{type:"button"},on:{click:e.prevPage}},[e._v("\n      < Prev\n    ")]),e._v(" "),a("button",{staticClass:"dashboard-table__pagination-arrow dashboard-table__pagination-arrow--right",class:{"dashboard-table__pagination-arrow--inactive":!e.isActive||"last"===e.getTokenNextPage},attrs:{type:"button"},on:{click:e.nextPage}},[e._v("\n      Next >\n    ")])])]):e._e()}),[],!1,null,null,null);t.default=l.exports}}]);
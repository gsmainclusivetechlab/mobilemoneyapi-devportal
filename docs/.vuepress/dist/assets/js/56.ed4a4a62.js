(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{409:function(t,e,a){"use strict";a.r(e);var n=a(19),o=a(6),s=a(3),r={name:"dashboard-table-bottom",props:{module:{type:String}},computed:{hasPages:function(){return!(0===this.getCurrentPage&&("last"===this.getTokenNextPage||!this.getTokenNextPage))},getTokenNextPage:function(){return this.$store.getters[Object(n.a)(this.module,"getNextPageToken")]},getTokenPrevPage:function(){return this.$store.getters[Object(n.a)(this.module,"getPrevPageToken")]},getCurrentPage:function(){return this.$store.state[this.module].currentPage}},methods:{nextPage:function(){this.$store.commit(Object(n.a)(this.module,s.h),this.getCurrentPage+1),this.getData()},prevPage:function(){this.$store.commit(Object(n.a)(this.module,s.h),this.getCurrentPage-1),this.$store.commit(Object(n.a)(this.module,s.f)),this.getData()},getData:function(){this.$store.dispatch(Object(n.a)(this.module,o.b))}}},i=a(24),g=Object(i.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.hasPages?a("div",{staticClass:"dashboard-table-bottom"},[a("span",[t._v("Current Page "+t._s(t.getCurrentPage+1))]),t._v(" "),a("div",[a("button",{staticClass:"dashboard-table__pagination-arrow dashboard-table__pagination-arrow--left",class:{"dashboard-table__pagination-arrow--inactive":0===t.getCurrentPage},attrs:{type:"button"},on:{click:t.prevPage}},[t._v("\n      < Prev\n    ")]),t._v(" "),a("button",{staticClass:"dashboard-table__pagination-arrow dashboard-table__pagination-arrow--right",class:{"dashboard-table__pagination-arrow--inactive":!t.getTokenNextPage||"last"===t.getTokenNextPage},attrs:{type:"button"},on:{click:t.nextPage}},[t._v("\n      Next >\n    ")])])]):t._e()}),[],!1,null,null,null);e.default=g.exports}}]);
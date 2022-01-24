(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{579:function(t,e,n){"use strict";n.r(e);var o=n(23),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"transaction-status-update"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaction-status-update"}},[t._v("#")]),t._v(" Transaction Status Update")]),t._v(" "),n("p",[t._v("Introduced the ability to update the "),n("em",[t._v("transactionStatus")]),t._v(" of mobile money transactions through a new API - "),n("em",[t._v("PATCH /transactions/{transactionReference}")]),t._v(". This supports a number of scenarios including:")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("Resolution of doubt transactions")]),t._v(". Some mobile money providers will put transactions into ‘doubt’ where communication is interrupted. This may then require a subsequent API request from the client to inform the provider of the final outcome to the transaction.")]),t._v(" "),n("li",[n("strong",[t._v("Two stage transaction processing")]),t._v(". Some systems require two steps to create a transaction:")])]),t._v(" "),n("ol",[n("li",[t._v("The client submits the request to the provider to create the transaction. The provider then performs necessary checks on the transaction and returns a response indicating that the transaction is pending confirmation.")]),t._v(" "),n("li",[t._v("The client then must provide an explicit request to ‘confirm’ the transaction. Upon receiving the request, the provider will complete the transaction.")])])])}),[],!1,null,null,null);e.default=s.exports}}]);
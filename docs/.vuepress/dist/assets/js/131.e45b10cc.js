(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{530:function(t,e,n){"use strict";n.r(e);var i=n(24),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"p2p-transfer-via-switch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2p-transfer-via-switch"}},[t._v("#")]),t._v(" P2P Transfer via Switch")]),t._v(" "),n("p",[t._v("In this diagram, a switch is used by the sending FSP to (1) confirm the recipient name, (2) request a quotation and  and to(3) perform the transfer with the receiving FSP. A callback is provided by the receiving FSP to return confirmation of the transfer.")]),t._v(" "),n("mermaid",[t._v("\n  sequenceDiagram\n    participant Sending FSP\n    participant Switch\n    participant Receiving FSP\n    Sending FSP->>Switch: GET /accounts/{identifierType}/{identifier}/accountname\n    activate Sending FSP\n    activate Switch\n    activate Receiving FSP\n    Note right of Switch: (1) The Sending FSP retrieves the name of the intended recipient from the Receiving FSP via the Switch.\n    Switch->>Receiving FSP: GET /accounts/{identifierType}/{identifier}/accountname\n    Receiving FSP--\x3e>Switch: HTTP 200 (Account Holder Name Object)\n    Switch--\x3e>Sending FSP: HTTP 200 (Account Holder Name Object)\n    deactivate Sending FSP\n    deactivate Switch\n    deactivate Receiving FSP\n    Sending FSP->>Switch: POST /quotations\n    activate Sending FSP\n    activate Switch\n    activate Receiving FSP\n    Note right of Switch: (2) Subject to sender confirmation of the name returned in step 1, the Sending FSP submits a quotation"),n("br"),t._v("request to the Switch. The Switch will return the Request State object to indicate that the request"),n("br"),t._v("is 'pending'. \n    Switch->>Receiving FSP: POST /quotations\n    Note right of Receiving FSP: (3) The Swith in turn submits the quotation request to the Receiving FSP."),n("br"),t._v("The Receiving FSP will return the Request State object to indicate"),n("br"),t._v("that the request is 'pending'.\n    Receiving FSP--\x3e>Switch: HTTP 200 (Request State Object)\n    Switch--\x3e>Sending FSP: HTTP 200 (Request State  Object)\n    deactivate Sending FSP\n    deactivate Switch\n    Receiving FSP->>Switch: PUT {Callback URL} (Quotations Object)\n    activate Switch\n    activate Sending FSP\n    Note right of Receiving FSP: (4) The FSP informs the Switch that the quotation has been successfully"),n("br"),t._v("created by returning the final representation of the quotation. \n    Switch--\x3e>Receiving FSP: HTTP 204\n    deactivate Receiving FSP\n    Switch->>Sending FSP: PUT {Callback URL} (Quotations Object)\n    Note right of Switch: (5) The Swith in turn informs the Sending FSP that the transaction has succesfully complteted"),n("br"),t._v("by returning the final representation of the transaction.\n    Sending FSP--\x3e>Switch: HTTP 204\n    deactivate Switch\n    deactivate Sending FSP\n    Sending FSP->>Switch: POST /transactions/type/transfer\n    activate Switch\n    activate Sending FSP\n    activate Receiving FSP\n    Note right of Switch: (6) Subject to sender confirmation, the Sending FSP submits a transfer request to the Swith. The Switch"),n("br"),t._v("will return the Request State object to indicate that the request is 'pending'.\n    Switch->>Receiving FSP: POST /transactions/type/transfer\n    Note right of Receiving FSP: (7) The Switch in turn submits the transaction request to the"),n("br"),t._v("Receiving FSP. The Receiving FSP will return the Request State object"),n("br"),t._v("to indicate that the request is 'pending'.\n    Receiving FSP--\x3e>Switch: HTTP 202 (Request State Object)\n    Switch--\x3e>Sending FSP: HTTP 202 (Request State Object)\n    deactivate Switch\n    deactivate Sending FSP\n    Receiving FSP->>Switch: PUT {Callback URL} (Transactions Object)\n    activate Switch\n    activate Sending FSP\n    Note right of Receiving FSP: (8) The FSP informs the Switch that the transaction has been"),n("br"),t._v("successfully completed by returning the final representation of the"),n("br"),t._v("transaction.\n    Switch--\x3e>Receiving FSP: HTTP 204\n    deactivate Receiving FSP\n    Switch->>Sending FSP: PUT {Callback URL} (Transactions Object)\n    Note right of Switch: (9) The Swith in turn informs the Sending FSP that the transaction has been successfully completed"),n("br"),t._v("by returning the final representation of the transaction.\n    Sending FSP--\x3e>Switch: HTTP 204\n    deactivate Switch\n    deactivate Sending FSP\n")]),t._v(" "),n("div",{staticClass:"buttons-holder content-center"},[n("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TWDdjZhR",target:"_blank"}},[t._v("Open Postman Collection")]),t._v(" "),n("a",{staticClass:"btn btn--accent",attrs:{href:"https://documenter.getpostman.com/view/4336524/TzJoDLNf",target:"_blank"}},[t._v("Open Postman Collection with Authentication")])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{512:function(t,e,s){"use strict";s.r(e);s(35),s(36);var n={name:"Block",mounted:function(){this.resolveLayout(),this.$parent.$parent.$emit("addBlock",this)},methods:{resolveLayout:function(){var t=this,e=this.$el.querySelector("h1, h2, h3, h4, h5, h6");e&&this.$refs["heading-box"].appendChild(e);var s=this.$refs["cont-box"].querySelectorAll(".examples");s&&s.forEach((function(e){t.$refs["example-box"].appendChild(e)}))}}},o=s(15),a=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-block"},[e("div",{ref:"heading-box",staticClass:"content-block__heading"}),this._v(" "),e("div",{staticClass:"content-block__body"},[e("div",{ref:"cont-box",staticClass:"content-block__cont"},[this._t("default")],2),this._v(" "),e("div",{ref:"example-box",staticClass:"content-block__examples"},[e("div",{staticClass:"example"},[this._t("example")],2)])])])}),[],!1,null,null,null);e.default=a.exports}}]);
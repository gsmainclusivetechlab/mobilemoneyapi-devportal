(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{502:function(t,e,o){function n(t){return-1!==t.type.indexOf("mouse")?t.clientX:t.touches[0].clientX}function s(t){return-1!==t.type.indexOf("mouse")?t.clientY:t.touches[0].clientY}var i=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),a=0,c={install:function(t,e){var o=Object.assign({},{disableClick:!1,tapTolerance:10,swipeTolerance:30,touchHoldTolerance:400,longTapTimeInterval:400,touchClass:"",namespace:"touch"},e);function c(t){var e=this.$$touchObj,o=t.type.indexOf("touch")>=0,i=t.type.indexOf("mouse")>=0,c=this;o&&(a=t.timeStamp),i&&a&&t.timeStamp-a<350||e.touchStarted||(p(this),e.touchStarted=!0,e.touchMoved=!1,e.swipeOutBounded=!1,e.startX=n(t),e.startY=s(t),e.currentX=0,e.currentY=0,e.touchStartTime=t.timeStamp,e.touchHoldTimer=setTimeout((function(){e.touchHoldTimer=null,v(t,c,"touchhold")}),e.options.touchHoldTolerance),v(t,this,"start"))}function r(t){var e=this.$$touchObj;if(e.currentX=n(t),e.currentY=s(t),e.touchMoved){if(!e.swipeOutBounded){var o=e.options.swipeTolerance;e.swipeOutBounded=Math.abs(e.startX-e.currentX)>o&&Math.abs(e.startY-e.currentY)>o}}else{var i=e.options.tapTolerance;e.touchMoved=Math.abs(e.startX-e.currentX)>i||Math.abs(e.startY-e.currentY)>i,e.touchMoved&&(f(e),v(t,this,"moved"))}e.touchMoved&&v(t,this,"moving")}function u(){var t=this.$$touchObj;f(t),m(this),t.touchStarted=t.touchMoved=!1,t.startX=t.startY=0}function l(t){var e=this.$$touchObj,o=t.type.indexOf("touch")>=0,n=t.type.indexOf("mouse")>=0;o&&(a=t.timeStamp);var s=o&&!e.touchHoldTimer;if(f(e),e.touchStarted=!1,m(this),!(n&&a&&t.timeStamp-a<350))if(v(t,this,"end"),e.touchMoved){if(!e.swipeOutBounded){var i,c=e.options.swipeTolerance,r=Math.abs(e.startY-e.currentY),u=Math.abs(e.startX-e.currentX);(r>c||u>c)&&(i=r>c?e.startY>e.currentY?"top":"bottom":e.startX>e.currentX?"left":"right",e.callbacks["swipe."+i]?v(t,this,"swipe."+i,i):v(t,this,"swipe",i))}}else if(e.callbacks.longtap&&t.timeStamp-e.touchStartTime>e.options.longTapTimeInterval)t.cancelable&&t.preventDefault(),v(t,this,"longtap");else{if(e.callbacks.touchhold&&s)return void(t.cancelable&&t.preventDefault());v(t,this,"tap")}}function h(){p(this)}function d(){m(this)}function v(t,e,o,n){var s=e.$$touchObj,i=s&&s.callbacks[o]||[];if(0===i.length)return null;for(var a=0;a<i.length;a++){var c=i[a];c.modifiers.stop&&t.stopPropagation(),c.modifiers.prevent&&t.cancelable&&t.preventDefault(),c.modifiers.self&&t.target!==t.currentTarget||"function"==typeof c.value&&(n?c.value(n,t):c.value(t))}}function p(t){var e=t.$$touchObj.options.touchClass;e&&t.classList.add(e)}function m(t){var e=t.$$touchObj.options.touchClass;e&&t.classList.remove(e)}function f(t){t.touchHoldTimer&&(clearTimeout(t.touchHoldTimer),t.touchHoldTimer=null)}function b(t,e){var n=t.$$touchObj||{callbacks:{},hasBindTouchEvents:!1,options:o};return e&&(n.options=Object.assign({},n.options,e)),t.$$touchObj=n,t.$$touchObj}t.directive(o.namespace,{bind:function(t,e){var o=b(t),n=!!i&&{passive:!0},s=e.arg||"tap";switch(s){case"swipe":var a=e.modifiers;if(a.left||a.right||a.top||a.bottom){for(var v in e.modifiers)if(["left","right","top","bottom"].indexOf(v)>=0){var p="swipe."+v;o.callbacks[p]=o.callbacks[p]||[],o.callbacks[p].push(e)}}else o.callbacks.swipe=o.callbacks.swipe||[],o.callbacks.swipe.push(e);break;case"start":case"moving":e.modifiers.disablePassive&&(n=!1);default:o.callbacks[s]=o.callbacks[s]||[],o.callbacks[s].push(e)}o.hasBindTouchEvents||(t.addEventListener("touchstart",c,n),t.addEventListener("touchmove",r,n),t.addEventListener("touchcancel",u),t.addEventListener("touchend",l),o.options.disableClick||(t.addEventListener("mousedown",c),t.addEventListener("mousemove",r),t.addEventListener("mouseup",l),t.addEventListener("mouseenter",h),t.addEventListener("mouseleave",d)),o.hasBindTouchEvents=!0)},unbind:function(t){t.removeEventListener("touchstart",c),t.removeEventListener("touchmove",r),t.removeEventListener("touchcancel",u),t.removeEventListener("touchend",l),t.$$touchObj&&!t.$$touchObj.options.disableClick&&(t.removeEventListener("mousedown",c),t.removeEventListener("mousemove",r),t.removeEventListener("mouseup",l),t.removeEventListener("mouseenter",h),t.removeEventListener("mouseleave",d)),delete t.$$touchObj}}),t.directive(o.namespace+"-class",{bind:function(t,e){b(t,{touchClass:e.value})}}),t.directive(o.namespace+"-options",{bind:function(t,e){b(t,e.value)}})}};t.exports=c}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{486:function(t,e,n){var i;
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */!function(s,r,o,a){"use strict";var h,c=["","webkit","Moz","MS","ms","o"],u=r.createElement("div"),p=Math.round,l=Math.abs,f=Date.now;function d(t,e,n){return setTimeout(b(t,n),e)}function v(t,e,n){return!!Array.isArray(t)&&(m(t,n[e],n),!0)}function m(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(void 0!==t.length)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function g(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=s.console&&(s.console.warn||s.console.log);return r&&r.call(s.console,i,n),t.apply(this,arguments)}}h="function"!=typeof Object.assign?function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(null!=i)for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e}:Object.assign;var y=g((function(t,e,n){for(var i=Object.keys(e),s=0;s<i.length;)(!n||n&&void 0===t[i[s]])&&(t[i[s]]=e[i[s]]),s++;return t}),"extend","Use `assign`."),T=g((function(t,e){return y(t,e,!0)}),"merge","Use `assign`.");function E(t,e,n){var i,s=e.prototype;(i=t.prototype=Object.create(s)).constructor=t,i._super=s,n&&h(i,n)}function b(t,e){return function(){return t.apply(e,arguments)}}function w(t,e){return"function"==typeof t?t.apply(e&&e[0]||void 0,e):t}function A(t,e){return void 0===t?e:t}function I(t,e,n){m(_(e),(function(e){t.addEventListener(e,n,!1)}))}function z(t,e,n){m(_(e),(function(e){t.removeEventListener(e,n,!1)}))}function O(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function C(t,e){return t.indexOf(e)>-1}function _(t){return t.trim().split(/\s+/g)}function S(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function x(t){return Array.prototype.slice.call(t,0)}function P(t,e,n){for(var i=[],s=[],r=0;r<t.length;){var o=e?t[r][e]:t[r];S(s,o)<0&&i.push(t[r]),s[r]=o,r++}return n&&(i=e?i.sort((function(t,n){return t[e]>n[e]})):i.sort()),i}function D(t,e){for(var n,i,s=e[0].toUpperCase()+e.slice(1),r=0;r<c.length;){if((i=(n=c[r])?n+s:e)in t)return i;r++}}var R=1;function M(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||s}var N="ontouchstart"in s,X=void 0!==D(s,"PointerEvent"),Y=N&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),k=["x","y"],F=["clientX","clientY"];function W(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){w(t.options.enable,[t])&&n.handler(e)},this.init()}function j(t,e,n){var i=n.pointers.length,s=n.changedPointers.length,r=1&e&&i-s==0,o=12&e&&i-s==0;n.isFirst=!!r,n.isFinal=!!o,r&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,s=i.length;n.firstInput||(n.firstInput=q(e));s>1&&!n.firstMultiple?n.firstMultiple=q(e):1===s&&(n.firstMultiple=!1);var r=n.firstInput,o=n.firstMultiple,a=o?o.center:r.center,h=e.center=L(i);e.timeStamp=f(),e.deltaTime=e.timeStamp-r.timeStamp,e.angle=G(a,h),e.distance=V(a,h),function(t,e){var n=e.center,i=t.offsetDelta||{},s=t.prevDelta||{},r=t.prevInput||{};1!==e.eventType&&4!==r.eventType||(s=t.prevDelta={x:r.deltaX||0,y:r.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y});e.deltaX=s.x+(n.x-i.x),e.deltaY=s.y+(n.y-i.y)}(n,e),e.offsetDirection=U(e.deltaX,e.deltaY);var c=H(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=l(c.x)>l(c.y)?c.x:c.y,e.scale=o?(u=o.pointers,p=i,V(p[0],p[1],F)/V(u[0],u[1],F)):1,e.rotation=o?function(t,e){return G(e[1],e[0],F)+G(t[1],t[0],F)}(o.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,s,r,o=t.lastInterval||e,a=e.timeStamp-o.timeStamp;if(8!=e.eventType&&(a>25||void 0===o.velocity)){var h=e.deltaX-o.deltaX,c=e.deltaY-o.deltaY,u=H(a,h,c);i=u.x,s=u.y,n=l(u.x)>l(u.y)?u.x:u.y,r=U(h,c),t.lastInterval=e}else n=o.velocity,i=o.velocityX,s=o.velocityY,r=o.direction;e.velocity=n,e.velocityX=i,e.velocityY=s,e.direction=r}(n,e);var u,p;var d=t.element;O(e.srcEvent.target,d)&&(d=e.srcEvent.target);e.target=d}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function q(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:p(t.pointers[n].clientX),clientY:p(t.pointers[n].clientY)},n++;return{timeStamp:f(),pointers:e,center:L(e),deltaX:t.deltaX,deltaY:t.deltaY}}function L(t){var e=t.length;if(1===e)return{x:p(t[0].clientX),y:p(t[0].clientY)};for(var n=0,i=0,s=0;s<e;)n+=t[s].clientX,i+=t[s].clientY,s++;return{x:p(n/e),y:p(i/e)}}function H(t,e,n){return{x:e/t||0,y:n/t||0}}function U(t,e){return t===e?1:l(t)>=l(e)?t<0?2:4:e<0?8:16}function V(t,e,n){n||(n=k);var i=e[n[0]]-t[n[0]],s=e[n[1]]-t[n[1]];return Math.sqrt(i*i+s*s)}function G(t,e,n){n||(n=k);var i=e[n[0]]-t[n[0]],s=e[n[1]]-t[n[1]];return 180*Math.atan2(s,i)/Math.PI}W.prototype={handler:function(){},init:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(M(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&z(this.element,this.evEl,this.domHandler),this.evTarget&&z(this.target,this.evTarget,this.domHandler),this.evWin&&z(M(this.element),this.evWin,this.domHandler)}};var $={mousedown:1,mousemove:2,mouseup:4};function B(){this.evEl="mousedown",this.evWin="mousemove mouseup",this.pressed=!1,W.apply(this,arguments)}E(B,W,{handler:function(t){var e=$[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var Z={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},J={2:"touch",3:"pen",4:"mouse",5:"kinect"},K="pointerdown",Q="pointermove pointerup pointercancel";function tt(){this.evEl=K,this.evWin=Q,W.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}s.MSPointerEvent&&!s.PointerEvent&&(K="MSPointerDown",Q="MSPointerMove MSPointerUp MSPointerCancel"),E(tt,W,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),s=Z[i],r=J[t.pointerType]||t.pointerType,o="touch"==r,a=S(e,t.pointerId,"pointerId");1&s&&(0===t.button||o)?a<0&&(e.push(t),a=e.length-1):12&s&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,s,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),n&&e.splice(a,1))}});var et={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function nt(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,W.apply(this,arguments)}function it(t,e){var n=x(t.touches),i=x(t.changedTouches);return 12&e&&(n=P(n.concat(i),"identifier",!0)),[n,i]}E(nt,W,{handler:function(t){var e=et[t.type];if(1===e&&(this.started=!0),this.started){var n=it.call(this,t,e);12&e&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var st={touchstart:1,touchmove:2,touchend:4,touchcancel:8};function rt(){this.evTarget="touchstart touchmove touchend touchcancel",this.targetIds={},W.apply(this,arguments)}function ot(t,e){var n=x(t.touches),i=this.targetIds;if(3&e&&1===n.length)return i[n[0].identifier]=!0,[n,n];var s,r,o=x(t.changedTouches),a=[],h=this.target;if(r=n.filter((function(t){return O(t.target,h)})),1===e)for(s=0;s<r.length;)i[r[s].identifier]=!0,s++;for(s=0;s<o.length;)i[o[s].identifier]&&a.push(o[s]),12&e&&delete i[o[s].identifier],s++;return a.length?[P(r.concat(a),"identifier",!0),a]:void 0}E(rt,W,{handler:function(t){var e=st[t.type],n=ot.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});function at(){W.apply(this,arguments);var t=b(this.handler,this);this.touch=new rt(this.manager,t),this.mouse=new B(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function ht(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,ct.call(this,e)):12&t&&ct.call(this,e)}function ct(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout((function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)}),2500)}}function ut(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var s=this.lastTouches[i],r=Math.abs(e-s.x),o=Math.abs(n-s.y);if(r<=25&&o<=25)return!0}return!1}E(at,W,{handler:function(t,e,n){var i="touch"==n.pointerType,s="mouse"==n.pointerType;if(!(s&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)ht.call(this,e,n);else if(s&&ut.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var pt=D(u.style,"touchAction"),lt=void 0!==pt,ft=function(){if(!lt)return!1;var t={},e=s.CSS&&s.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){t[n]=!e||s.CSS.supports("touch-action",n)})),t}();function dt(t,e){this.manager=t,this.set(e)}dt.prototype={set:function(t){"compute"==t&&(t=this.compute()),lt&&this.manager.element.style&&ft[t]&&(this.manager.element.style[pt]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return m(this.manager.recognizers,(function(e){w(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(C(t,"none"))return"none";var e=C(t,"pan-x"),n=C(t,"pan-y");if(e&&n)return"none";if(e||n)return e?"pan-x":"pan-y";if(C(t,"manipulation"))return"manipulation";return"auto"}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,s=C(i,"none")&&!ft.none,r=C(i,"pan-y")&&!ft["pan-y"],o=C(i,"pan-x")&&!ft["pan-x"];if(s){var a=1===t.pointers.length,h=t.distance<2,c=t.deltaTime<250;if(a&&h&&c)return}if(!o||!r)return s||r&&6&n||o&&24&n?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};function vt(t){this.options=h({},this.defaults,t||{}),this.id=R++,this.manager=null,this.options.enable=A(this.options.enable,!0),this.state=1,this.simultaneous={},this.requireFail=[]}function mt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}function gt(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}function yt(t,e){var n=e.manager;return n?n.get(t):t}function Tt(){vt.apply(this,arguments)}function Et(){Tt.apply(this,arguments),this.pX=null,this.pY=null}function bt(){Tt.apply(this,arguments)}function wt(){vt.apply(this,arguments),this._timer=null,this._input=null}function At(){Tt.apply(this,arguments)}function It(){Tt.apply(this,arguments)}function zt(){vt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function Ot(t,e){return(e=e||{}).recognizers=A(e.recognizers,Ot.defaults.preset),new Ct(t,e)}vt.prototype={defaults:{},set:function(t){return h(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(v(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=yt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return v(t,"dropRecognizeWith",this)||(t=yt(t,this),delete this.simultaneous[t.id]),this},requireFailure:function(t){if(v(t,"requireFailure",this))return this;var e=this.requireFail;return-1===S(e,t=yt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(v(t,"dropRequireFailure",this))return this;t=yt(t,this);var e=S(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<8&&i(e.options.event+mt(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=8&&i(e.options.event+mt(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},recognize:function(t){var e=h({},t);if(!w(this.options.enable,[this,e]))return this.reset(),void(this.state=32);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},E(Tt,vt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=6&e,s=this.attrTest(t);return i&&(8&n||!s)?16|e:i||s?4&n?8|e:2&e?4|e:2:32}}),E(Et,Tt,{defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push("pan-y"),24&t&&e.push("pan-x"),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,s=t.direction,r=t.deltaX,o=t.deltaY;return s&e.direction||(6&e.direction?(s=0===r?1:r<0?2:4,n=r!=this.pX,i=Math.abs(t.deltaX)):(s=0===o?1:o<0?8:16,n=o!=this.pY,i=Math.abs(t.deltaY))),t.direction=s,n&&i>e.threshold&&s&e.direction},attrTest:function(t){return Tt.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=gt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),E(bt,Tt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),E(wt,vt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return["auto"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime>e.time;if(this._input=t,!i||!n||12&t.eventType&&!s)this.reset();else if(1&t.eventType)this.reset(),this._timer=d((function(){this.state=8,this.tryEmit()}),e.time,this);else if(4&t.eventType)return 8;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))}}),E(At,Tt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return["none"]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),E(It,Tt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return Et.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return 30&n?e=t.overallVelocity:6&n?e=t.overallVelocityX:24&n&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&l(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=gt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),E(zt,vt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return["manipulation"]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,s=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(i&&s&&n){if(4!=t.eventType)return this.failTimeout();var r=!this.pTime||t.timeStamp-this.pTime<e.interval,o=!this.pCenter||V(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,o&&r?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=d((function(){this.state=8,this.tryEmit()}),e.interval,this),2):8}return 32},failTimeout:function(){return this._timer=d((function(){this.state=32}),this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),Ot.VERSION="2.0.7",Ot.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[At,{enable:!1}],[bt,{enable:!1},["rotate"]],[It,{direction:6}],[Et,{direction:6},["swipe"]],[zt],[zt,{event:"doubletap",taps:2},["tap"]],[wt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function Ct(t,e){var n;this.options=h({},Ot.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(X?tt:Y?rt:N?at:B))(n,j),this.touchAction=new dt(this,this.options.touchAction),_t(this,!0),m(this.options.recognizers,(function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}function _t(t,e){var n,i=t.element;i.style&&(m(t.options.cssProps,(function(s,r){n=D(i.style,r),e?(t.oldCssProps[n]=i.style[n],i.style[n]=s):i.style[n]=t.oldCssProps[n]||""})),e||(t.oldCssProps={}))}Ct.prototype={set:function(t){return h(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,s=e.curRecognizer;(!s||s&&8&s.state)&&(s=e.curRecognizer=null);for(var r=0;r<i.length;)n=i[r],2===e.stopped||s&&n!=s&&!n.canRecognizeWith(s)?n.reset():n.recognize(t),!s&&14&n.state&&(s=e.curRecognizer=n),r++}},get:function(t){if(t instanceof vt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(v(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(v(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=S(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(void 0!==t&&void 0!==e){var n=this.handlers;return m(_(t),(function(t){n[t]=n[t]||[],n[t].push(e)})),this}},off:function(t,e){if(void 0!==t){var n=this.handlers;return m(_(t),(function(t){e?n[t]&&n[t].splice(S(n[t],e),1):delete n[t]})),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=r.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&_t(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(Ot,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:Ct,Input:W,TouchAction:dt,TouchInput:rt,MouseInput:B,PointerEventInput:tt,TouchMouseInput:at,SingleTouchInput:nt,Recognizer:vt,AttrRecognizer:Tt,Tap:zt,Pan:Et,Swipe:It,Pinch:bt,Rotate:At,Press:wt,on:I,off:z,each:m,merge:T,extend:y,assign:h,inherit:E,bindFn:b,prefixed:D}),(void 0!==s?s:"undefined"!=typeof self?self:{}).Hammer=Ot,void 0===(i=function(){return Ot}.call(e,n,e,t))||(t.exports=i)}(window,document)},501:function(t,e,n){!function(e){"use strict";function n(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1];for(var i=0;i<e.length;i++)for(var s=e[i],r=Object.keys(s),o=0;o<r.length;o++){var a=r[o];t[a]=s[a]}return t}function i(){return{type:Object,default:function(){return{}}}}e="default"in e?e.default:e;var s=["up","down","left","right","horizontal","vertical","all"],r={},o={},a=["pan","panstart","panmove","panend","pancancel","panleft","panright","panup","pandown","pinch","pinchstart","pinchmove","pinchend","pinchcancel","pinchin","pinchout","press","pressup","rotate","rotatestart","rotatemove","rotateend","rotatecancel","swipe","swipeleft","swiperight","swipeup","swipedown","tap"],h={pan:"pan",panstart:"pan",panmove:"pan",panend:"pan",pancancel:"pan",panleft:"pan",panright:"pan",panup:"pan",pandown:"pan",pinch:"pinch",pinchstart:"pinch",pinchmove:"pinch",pinchend:"pinch",pinchcancel:"pinch",pinchin:"pinch",pinchout:"pinch",press:"press",pressup:"press",rotate:"rotate",rotatestart:"rotate",rotatemove:"rotate",rotateend:"rotate",rotatecancel:"rotate",swipe:"swipe",swipeleft:"swipe",swiperight:"swipe",swipeup:"swipe",swipedown:"swipe",tap:"tap"},c={props:{options:i(),tapOptions:i(),panOptions:i(),pinchOptions:i(),pressOptions:i(),rotateOptions:i(),swipeOptions:i(),tag:{type:String,default:"div"},enabled:{default:!0,type:[Boolean,Object]}},mounted:function(){this.$isServer||(this.hammer=new e.Manager(this.$el,this.options),this.recognizers={},this.setupBuiltinRecognizers(),this.setupCustomRecognizers(),this.updateEnabled(this.enabled))},destroyed:function(){this.$isServer||this.hammer.destroy()},watch:{enabled:{deep:!0,handler:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];(t=this).updateEnabled.apply(t,e)}}},methods:{setupBuiltinRecognizers:function(){for(var t=0;t<a.length;t++){var e=a[t];if(this._events[e]){var i=h[e],s=n({},r[i]||{},this[i+"Options"]);this.addRecognizer(i,s),this.addEvent(e)}}},setupCustomRecognizers:function(){for(var t=Object.keys(o),e=0;e<t.length;e++){var i=t[e];if(this._events[i]){var s=n({},o[i],this[i+"Options"]||{});this.addRecognizer(i,s,{mainGesture:s.type}),this.addEvent(i)}}},addRecognizer:function(t,n,i){void 0===i&&(i={});var r,o=i.mainGesture;if(!this.recognizers[t]){var a=new(e[(r=o||t,r.charAt(0).toUpperCase()+r.slice(1))])(function(t){var n=t.direction;if("string"==typeof n){var i="DIRECTION_"+n.toUpperCase();s.indexOf(n)>-1&&e.hasOwnProperty(i)?t.direction=e[i]:console.warn("[vue-touch] invalid direction: "+n)}return t}(n));this.recognizers[t]=a,this.hammer.add(a),a.recognizeWith(this.hammer.recognizers)}},addEvent:function(t){var e=this;this.hammer.on(t,(function(n){return e.$emit(t,n)}))},updateEnabled:function(t,e){if(!0===t)this.enableAll();else if(!1===t)this.disableAll();else if("object"==typeof t)for(var n=Object.keys(t),i=0;i<n.length;i++){var s=n[i];this.recognizers[s]&&(t[s]?this.enable(s):this.disable(s))}},enable:function(t){var e=this.recognizers[t];e.options.enable||e.set({enable:!0})},disable:function(t){var e=this.recognizers[t];e.options.enable&&e.set({enable:!1})},toggle:function(t){var e=this.recognizers[t];e&&(e.options.enable?this.disable(t):this.enable(t))},enableAll:function(t){this.toggleAll({enable:!0})},disableAll:function(t){this.toggleAll({enable:!1})},toggleAll:function(t){for(var e=t.enable,n=Object.keys(this.recognizers),i=0;i<n.length;i++){var s=this.recognizers[n[i]];s.options.enable!==e&&s.set({enable:e})}},isEnabled:function(t){return this.recognizers[t]&&this.recognizers[t].options.enable}},render:function(t){return t(this.tag,{},this.$slots.default)}},u=!1,p={config:r,customEvents:o};p.install=function(t,e){void 0===e&&(e={});var i=e.name||"v-touch";t.component(i,n(c,{name:i})),u=!0}.bind(p),p.registerCustomEvent=function(t,e){void 0===e&&(e={}),u?console.warn("\n      [vue-touch]: Custom Event '"+t+"' couldn't be added to vue-touch.\n      Custom Events have to be registered before installing the plugin.\n      "):(e.event=t,o[t]=e,c.props[t+"Options"]={type:Object,default:function(){return{}}})}.bind(p),p.component=c,t.exports=p}(n(486))}}]);
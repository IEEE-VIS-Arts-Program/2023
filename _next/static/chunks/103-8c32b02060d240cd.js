"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[103],{9103:function(t,n,e){e.d(n,{Xxj:function(){return u}});class r extends Map{constructor(t,n=o){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),null!=t)for(let[n,e]of t)this.set(n,e)}get(t){return super.get(i(this,t))}has(t){return super.has(i(this,t))}set(t,n){return super.set(function({_intern:t,_key:n},e){let r=n(e);return t.has(r)?t.get(r):(t.set(r,e),e)}(this,t),n)}delete(t){return super.delete(function({_intern:t,_key:n},e){let r=n(e);return t.has(r)&&(e=t.get(r),t.delete(r)),e}(this,t))}}function i({_intern:t,_key:n},e){let r=n(e);return t.has(r)?t.get(r):e}function o(t){return null!==t&&"object"==typeof t?t.valueOf():t}function a(t){return t}function u(t,...n){var e;return e=Array.from,function t(i,o){if(o>=n.length)return a(i);let u=new r,s=n[o++],l=-1;for(let t of i){let n=s(t,++l,i),e=u.get(n);e?e.push(t):u.set(n,[t])}for(let[n,e]of u)u.set(n,t(e,o));return e(u)}(t,0)}function s(){}function l(t){return null==t?s:function(){return this.querySelector(t)}}function h(){return[]}function c(t){return null==t?h:function(){return this.querySelectorAll(t)}}function f(t){return function(){return this.matches(t)}}function p(t){return function(n){return n.matches(t)}}var d,y=Array.prototype.find;function v(){return this.firstElementChild}var _=Array.prototype.filter;function g(){return Array.from(this.children)}function m(t){return Array(t.length)}function w(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function b(t,n,e,r,i,o){for(var a,u=0,s=n.length,l=o.length;u<l;++u)(a=n[u])?(a.__data__=o[u],r[u]=a):e[u]=new w(t,o[u]);for(;u<s;++u)(a=n[u])&&(i[u]=a)}function x(t,n,e,r,i,o,a){var u,s,l,h=new Map,c=n.length,f=o.length,p=Array(c);for(u=0;u<c;++u)(s=n[u])&&(p[u]=l=a.call(s,s.__data__,u,n)+"",h.has(l)?i[u]=s:h.set(l,s));for(u=0;u<f;++u)l=a.call(t,o[u],u,o)+"",(s=h.get(l))?(r[u]=s,s.__data__=o[u],h.delete(l)):e[u]=new w(t,o[u]);for(u=0;u<c;++u)(s=n[u])&&h.get(p[u])===s&&(i[u]=s)}function k(t){return t.__data__}function A(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}w.prototype={constructor:w,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var N="http://www.w3.org/1999/xhtml",$={svg:"http://www.w3.org/2000/svg",xhtml:N,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function E(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),$.hasOwnProperty(n)?{space:$[n],local:t}:t}function M(t){return function(){this.removeAttribute(t)}}function S(t){return function(){this.removeAttributeNS(t.space,t.local)}}function C(t,n){return function(){this.setAttribute(t,n)}}function X(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function q(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function P(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function O(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function T(t){return function(){this.style.removeProperty(t)}}function j(t,n,e){return function(){this.style.setProperty(t,n,e)}}function R(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function H(t,n){return t.style.getPropertyValue(n)||O(t).getComputedStyle(t,null).getPropertyValue(n)}function I(t){return function(){delete this[t]}}function Y(t,n){return function(){this[t]=n}}function L(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function D(t){return t.trim().split(/^|\s+/)}function B(t){return t.classList||new V(t)}function V(t){this._node=t,this._names=D(t.getAttribute("class")||"")}function z(t,n){for(var e=B(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function U(t,n){for(var e=B(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function F(t){return function(){z(this,t)}}function K(t){return function(){U(this,t)}}function W(t,n){return function(){(n.apply(this,arguments)?z:U)(this,t)}}function G(){this.textContent=""}function J(t){return function(){this.textContent=t}}function Q(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function Z(){this.innerHTML=""}function tt(t){return function(){this.innerHTML=t}}function tn(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function te(){this.nextSibling&&this.parentNode.appendChild(this)}function tr(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ti(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===N&&n.documentElement.namespaceURI===N?n.createElement(t):n.createElementNS(e,t)}}function to(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function ta(t){var n=E(t);return(n.local?to:ti)(n)}function tu(){return null}function ts(){var t=this.parentNode;t&&t.removeChild(this)}function tl(){var t=this.cloneNode(!1),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function th(){var t=this.cloneNode(!0),n=this.parentNode;return n?n.insertBefore(t,this.nextSibling):t}function tc(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)(e=n[r],t.type&&e.type!==t.type||e.name!==t.name)?n[++i]=e:this.removeEventListener(e.type,e.listener,e.options);++i?n.length=i:delete this.__on}}}function tf(t,n,e){return function(){var r,i=this.__on,o=function(t){n.call(this,t,this.__data__)};if(i){for(var a=0,u=i.length;a<u;++a)if((r=i[a]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=e),r.value=n;return}}this.addEventListener(t.type,o,e),r={type:t.type,name:t.name,value:n,listener:o,options:e},i?i.push(r):this.__on=[r]}}function tp(t,n,e){var r=O(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function td(t,n){return function(){return tp(this,t,n)}}function ty(t,n){return function(){return tp(this,t,n.apply(this,arguments))}}V.prototype={add:function(t){0>this._names.indexOf(t)&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var tv=[null];function t_(t,n){this._groups=t,this._parents=n}function tg(){return new t_([[document.documentElement]],tv)}t_.prototype=tg.prototype={constructor:t_,select:function(t){"function"!=typeof t&&(t=l(t));for(var n=this._groups,e=n.length,r=Array(e),i=0;i<e;++i)for(var o,a,u=n[i],s=u.length,h=r[i]=Array(s),c=0;c<s;++c)(o=u[c])&&(a=t.call(o,o.__data__,c,u))&&("__data__"in o&&(a.__data__=o.__data__),h[c]=a);return new t_(r,this._parents)},selectAll:function(t){if("function"==typeof t){var n;n=t,t=function(){var t;return t=n.apply(this,arguments),null==t?[]:Array.isArray(t)?t:Array.from(t)}}else t=c(t);for(var e=this._groups,r=e.length,i=[],o=[],a=0;a<r;++a)for(var u,s=e[a],l=s.length,h=0;h<l;++h)(u=s[h])&&(i.push(t.call(u,u.__data__,h,s)),o.push(u));return new t_(i,o)},selectChild:function(t){var n;return this.select(null==t?v:(n="function"==typeof t?t:p(t),function(){return y.call(this.children,n)}))},selectChildren:function(t){var n;return this.selectAll(null==t?g:(n="function"==typeof t?t:p(t),function(){return _.call(this.children,n)}))},filter:function(t){"function"!=typeof t&&(t=f(t));for(var n=this._groups,e=n.length,r=Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],l=0;l<u;++l)(o=a[l])&&t.call(o,o.__data__,l,a)&&s.push(o);return new t_(r,this._parents)},data:function(t,n){if(!arguments.length)return Array.from(this,k);var e=n?x:b,r=this._parents,i=this._groups;"function"!=typeof t&&(g=t,t=function(){return g});for(var o=i.length,a=Array(o),u=Array(o),s=Array(o),l=0;l<o;++l){var h=r[l],c=i[l],f=c.length,p="object"==typeof(_=t.call(h,h&&h.__data__,l,r))&&"length"in _?_:Array.from(_),d=p.length,y=u[l]=Array(d),v=a[l]=Array(d);e(h,c,y,v,s[l]=Array(f),p,n);for(var _,g,m,w,A=0,N=0;A<d;++A)if(m=y[A]){for(A>=N&&(N=A+1);!(w=v[N])&&++N<d;);m._next=w||null}}return(a=new t_(a,r))._enter=u,a._exit=s,a},enter:function(){return new t_(this._enter||this._groups.map(m),this._parents)},exit:function(){return new t_(this._exit||this._groups.map(m),this._parents)},join:function(t,n,e){var r=this.enter(),i=this,o=this.exit();return"function"==typeof t?(r=t(r))&&(r=r.selection()):r=r.append(t+""),null!=n&&(i=n(i))&&(i=i.selection()),null==e?o.remove():e(o),r&&i?r.merge(i).order():i},merge:function(t){for(var n=t.selection?t.selection():t,e=this._groups,r=n._groups,i=e.length,o=r.length,a=Math.min(i,o),u=Array(i),s=0;s<a;++s)for(var l,h=e[s],c=r[s],f=h.length,p=u[s]=Array(f),d=0;d<f;++d)(l=h[d]||c[d])&&(p[d]=l);for(;s<i;++s)u[s]=e[s];return new t_(u,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=A);for(var e=this._groups,r=e.length,i=Array(r),o=0;o<r;++o){for(var a,u=e[o],s=u.length,l=i[o]=Array(s),h=0;h<s;++h)(a=u[h])&&(l[h]=a);l.sort(n)}return new t_(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){let t=0;for(let n of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,n){var e=E(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?S:M:"function"==typeof n?e.local?P:q:e.local?X:C)(e,n))},style:function(t,n,e){return arguments.length>1?this.each((null==n?T:"function"==typeof n?R:j)(t,n,null==e?"":e)):H(this.node(),t)},property:function(t,n){return arguments.length>1?this.each((null==n?I:"function"==typeof n?L:Y)(t,n)):this.node()[t]},classed:function(t,n){var e=D(t+"");if(arguments.length<2){for(var r=B(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?W:n?F:K)(e,n))},text:function(t){return arguments.length?this.each(null==t?G:("function"==typeof t?Q:J)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Z:("function"==typeof t?tn:tt)(t)):this.node().innerHTML},raise:function(){return this.each(te)},lower:function(){return this.each(tr)},append:function(t){var n="function"==typeof t?t:ta(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},insert:function(t,n){var e="function"==typeof t?t:ta(t),r=null==n?tu:"function"==typeof n?n:l(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(ts)},clone:function(t){return this.select(t?th:tl)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,n,e){var r,i,o=(t+"").trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}}),a=o.length;if(arguments.length<2){var u=this.node().__on;if(u){for(var s,l=0,h=u.length;l<h;++l)for(r=0,s=u[l];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value}return}for(r=0,u=n?tf:tc;r<a;++r)this.each(u(o[r],n,e));return this},dispatch:function(t,n){return this.each(("function"==typeof n?ty:td)(t,n))},[Symbol.iterator]:function*(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r,i=t[n],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}};var tm=tg,tw={value:()=>{}};function tb(){for(var t,n=0,e=arguments.length,r={};n<e;++n){if(!(t=arguments[n]+"")||t in r||/[\s.]/.test(t))throw Error("illegal type: "+t);r[t]=[]}return new tx(r)}function tx(t){this._=t}function tk(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=tw,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}tx.prototype=tb.prototype={constructor:tx,on:function(t,n){var e,r=this._,i=(t+"").trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");if(e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),t&&!r.hasOwnProperty(t))throw Error("unknown type: "+t);return{type:t,name:n}}),o=-1,a=i.length;if(arguments.length<2){for(;++o<a;)if((e=(t=i[o]).type)&&(e=function(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}(r[e],t.name)))return e;return}if(null!=n&&"function"!=typeof n)throw Error("invalid callback: "+n);for(;++o<a;)if(e=(t=i[o]).type)r[e]=tk(r[e],t.name,n);else if(null==n)for(e in r)r[e]=tk(r[e],t.name,null);return this},copy:function(){var t={},n=this._;for(var e in n)t[e]=n[e].slice();return new tx(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw Error("unknown type: "+t);for(r=this._[t],o=0,e=r.length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}};var tA,tN,t$=0,tE=0,tM=0,tS=0,tC=0,tX=0,tq="object"==typeof performance&&performance.now?performance:Date,tP="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function tO(){return tC||(tP(tT),tC=tq.now()+tX)}function tT(){tC=0}function tj(){this._call=this._time=this._next=null}function tR(t,n,e){var r=new tj;return r.restart(t,n,e),r}function tH(){tC=(tS=tq.now())+tX,t$=tE=0;try{!function(){tO(),++t$;for(var t,n=tA;n;)(t=tC-n._time)>=0&&n._call.call(void 0,t),n=n._next;--t$}()}finally{t$=0,function(){for(var t,n,e=tA,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:tA=n);tN=t,tY(r)}(),tC=0}}function tI(){var t=tq.now(),n=t-tS;n>1e3&&(tX-=n,tS=t)}function tY(t){!t$&&(tE&&(tE=clearTimeout(tE)),t-tC>24?(t<1/0&&(tE=setTimeout(tH,t-tq.now()-tX)),tM&&(tM=clearInterval(tM))):(tM||(tS=tq.now(),tM=setInterval(tI,1e3)),t$=1,tP(tH)))}function tL(t,n,e){var r=new tj;return n=null==n?0:+n,r.restart(e=>{r.stop(),t(e+n)},n,e),r}tj.prototype=tR.prototype={constructor:tj,restart:function(t,n,e){if("function"!=typeof t)throw TypeError("callback is not a function");e=(null==e?tO():+e)+(null==n?0:+n),this._next||tN===this||(tN?tN._next=this:tA=this,tN=this),this._call=t,this._time=e,tY()},stop:function(){this._call&&(this._call=null,this._time=1/0,tY())}};var tD=tb("start","end","cancel","interrupt"),tB=[];function tV(t,n,e,r,i,o){var a=t.__transition;if(a){if(e in a)return}else t.__transition={};!function(t,n,e){var r,i=t.__transition;function o(s){var l,h,c,f;if(1!==e.state)return u();for(l in i)if((f=i[l]).name===e.name){if(3===f.state)return tL(o);4===f.state?(f.state=6,f.timer.stop(),f.on.call("interrupt",t,t.__data__,f.index,f.group),delete i[l]):+l<n&&(f.state=6,f.timer.stop(),f.on.call("cancel",t,t.__data__,f.index,f.group),delete i[l])}if(tL(function(){3===e.state&&(e.state=4,e.timer.restart(a,e.delay,e.time),a(s))}),e.state=2,e.on.call("start",t,t.__data__,e.index,e.group),2===e.state){for(l=0,e.state=3,r=Array(c=e.tween.length),h=-1;l<c;++l)(f=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(r[++h]=f);r.length=h+1}}function a(n){for(var i=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=5,1),o=-1,a=r.length;++o<a;)r[o].call(t,i);5===e.state&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){for(var r in e.state=6,e.timer.stop(),delete i[n],i)return;delete t.__transition}i[n]=e,e.timer=tR(function(t){e.state=1,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)},0,e.time)}(t,e,{name:n,index:r,group:i,on:tD,tween:tB,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:0})}function tz(t,n){var e=tF(t,n);if(e.state>0)throw Error("too late; already scheduled");return e}function tU(t,n){var e=tF(t,n);if(e.state>3)throw Error("too late; already running");return e}function tF(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw Error("transition not found");return e}function tK(t,n){return t=+t,n=+n,function(e){return t*(1-e)+n*e}}var tW=180/Math.PI,tG={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function tJ(t,n,e,r,i,o){var a,u,s;return(a=Math.sqrt(t*t+n*n))&&(t/=a,n/=a),(s=t*e+n*r)&&(e-=t*s,r-=n*s),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,s/=u),t*r<n*e&&(t=-t,n=-n,s=-s,a=-a),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*tW,skewX:Math.atan(s)*tW,scaleX:a,scaleY:u}}function tQ(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}return function(o,a){var u,s,l,h,c=[],f=[];return o=t(o),a=t(a),!function(t,r,i,o,a,u){if(t!==i||r!==o){var s=a.push("translate(",null,n,null,e);u.push({i:s-4,x:tK(t,i)},{i:s-2,x:tK(r,o)})}else(i||o)&&a.push("translate("+i+n+o+e)}(o.translateX,o.translateY,a.translateX,a.translateY,c,f),(u=o.rotate)!==(s=a.rotate)?(u-s>180?s+=360:s-u>180&&(u+=360),f.push({i:c.push(i(c)+"rotate(",null,r)-2,x:tK(u,s)})):s&&c.push(i(c)+"rotate("+s+r),(l=o.skewX)!==(h=a.skewX)?f.push({i:c.push(i(c)+"skewX(",null,r)-2,x:tK(l,h)}):h&&c.push(i(c)+"skewX("+h+r),!function(t,n,e,r,o,a){if(t!==e||n!==r){var u=o.push(i(o)+"scale(",null,",",null,")");a.push({i:u-4,x:tK(t,e)},{i:u-2,x:tK(n,r)})}else(1!==e||1!==r)&&o.push(i(o)+"scale("+e+","+r+")")}(o.scaleX,o.scaleY,a.scaleX,a.scaleY,c,f),o=a=null,function(t){for(var n,e=-1,r=f.length;++e<r;)c[(n=f[e]).i]=n.x(t);return c.join("")}}}var tZ=tQ(function(t){let n=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return n.isIdentity?tG:tJ(n.a,n.b,n.c,n.d,n.e,n.f)},"px, ","px)","deg)"),t1=tQ(function(t){return null==t?tG:(d||(d=document.createElementNS("http://www.w3.org/2000/svg","g")),d.setAttribute("transform",t),t=d.transform.baseVal.consolidate())?tJ((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):tG},", ",")",")");function t0(t,n){var e,r;return function(){var i=tU(this,t),o=i.tween;if(o!==e){r=e=o;for(var a=0,u=r.length;a<u;++a)if(r[a].name===n){(r=r.slice()).splice(a,1);break}}i.tween=r}}function t2(t,n,e){var r,i;if("function"!=typeof e)throw Error();return function(){var o=tU(this,t),a=o.tween;if(a!==r){i=(r=a).slice();for(var u={name:n,value:e},s=0,l=i.length;s<l;++s)if(i[s].name===n){i[s]=u;break}s===l&&i.push(u)}o.tween=i}}function t5(t,n,e){var r=t._id;return t.each(function(){var t=tU(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return tF(t,r).value[n]}}function t6(t,n,e){t.prototype=n.prototype=e,e.constructor=t}function t3(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function t4(){}var t7="\\s*([+-]?\\d+)\\s*",t8="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",t9="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",nt=/^#([0-9a-f]{3,8})$/,nn=RegExp(`^rgb\\(${t7},${t7},${t7}\\)$`),ne=RegExp(`^rgb\\(${t9},${t9},${t9}\\)$`),nr=RegExp(`^rgba\\(${t7},${t7},${t7},${t8}\\)$`),ni=RegExp(`^rgba\\(${t9},${t9},${t9},${t8}\\)$`),no=RegExp(`^hsl\\(${t8},${t9},${t9}\\)$`),na=RegExp(`^hsla\\(${t8},${t9},${t9},${t8}\\)$`),nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function ns(){return this.rgb().formatHex()}function nl(){return this.rgb().formatRgb()}function nh(t){var n,e;return t=(t+"").trim().toLowerCase(),(n=nt.exec(t))?(e=n[1].length,n=parseInt(n[1],16),6===e?nc(n):3===e?new nd(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===e?nf(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===e?nf(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=nn.exec(t))?new nd(n[1],n[2],n[3],1):(n=ne.exec(t))?new nd(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=nr.exec(t))?nf(n[1],n[2],n[3],n[4]):(n=ni.exec(t))?nf(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=no.exec(t))?nw(n[1],n[2]/100,n[3]/100,1):(n=na.exec(t))?nw(n[1],n[2]/100,n[3]/100,n[4]):nu.hasOwnProperty(t)?nc(nu[t]):"transparent"===t?new nd(NaN,NaN,NaN,0):null}function nc(t){return new nd(t>>16&255,t>>8&255,255&t,1)}function nf(t,n,e,r){return r<=0&&(t=n=e=NaN),new nd(t,n,e,r)}function np(t,n,e,r){var i;return 1==arguments.length?((i=t)instanceof t4||(i=nh(i)),i)?(i=i.rgb(),new nd(i.r,i.g,i.b,i.opacity)):new nd:new nd(t,n,e,null==r?1:r)}function nd(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function ny(){return`#${nm(this.r)}${nm(this.g)}${nm(this.b)}`}function nv(){let t=n_(this.opacity);return`${1===t?"rgb(":"rgba("}${ng(this.r)}, ${ng(this.g)}, ${ng(this.b)}${1===t?")":`, ${t})`}`}function n_(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function ng(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function nm(t){return((t=ng(t))<16?"0":"")+t.toString(16)}function nw(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new nx(t,n,e,r)}function nb(t){if(t instanceof nx)return new nx(t.h,t.s,t.l,t.opacity);if(t instanceof t4||(t=nh(t)),!t)return new nx;if(t instanceof nx)return t;var n=(t=t.rgb()).r/255,e=t.g/255,r=t.b/255,i=Math.min(n,e,r),o=Math.max(n,e,r),a=NaN,u=o-i,s=(o+i)/2;return u?(a=n===o?(e-r)/u+(e<r)*6:e===o?(r-n)/u+2:(n-e)/u+4,u/=s<.5?o+i:2-o-i,a*=60):u=s>0&&s<1?0:a,new nx(a,u,s,t.opacity)}function nx(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function nk(t){return(t=(t||0)%360)<0?t+360:t}function nA(t){return Math.max(0,Math.min(1,t||0))}function nN(t,n,e){return(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)*255}function n$(t,n,e,r,i){var o=t*t,a=o*t;return((1-3*t+3*o-a)*n+(4-6*o+3*a)*e+(1+3*t+3*o-3*a)*r+a*i)/6}t6(t4,nh,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ns,formatHex:ns,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return nb(this).formatHsl()},formatRgb:nl,toString:nl}),t6(nd,np,t3(t4,{brighter(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new nd(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new nd(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new nd(ng(this.r),ng(this.g),ng(this.b),n_(this.opacity))},displayable(){return -.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ny,formatHex:ny,formatHex8:function(){return`#${nm(this.r)}${nm(this.g)}${nm(this.b)}${nm((isNaN(this.opacity)?1:this.opacity)*255)}`},formatRgb:nv,toString:nv})),t6(nx,function(t,n,e,r){return 1==arguments.length?nb(t):new nx(t,n,e,null==r?1:r)},t3(t4,{brighter(t){return t=null==t?1.4285714285714286:Math.pow(1.4285714285714286,t),new nx(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?.7:Math.pow(.7,t),new nx(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new nd(nN(t>=240?t-240:t+120,i,r),nN(t,i,r),nN(t<120?t+240:t-120,i,r),this.opacity)},clamp(){return new nx(nk(this.h),nA(this.s),nA(this.l),n_(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){let t=n_(this.opacity);return`${1===t?"hsl(":"hsla("}${nk(this.h)}, ${100*nA(this.s)}%, ${100*nA(this.l)}%${1===t?")":`, ${t})`}`}}));var nE=t=>()=>t;function nM(t,n){var e=n-t;return e?function(n){return t+n*e}:nE(isNaN(t)?n:t)}var nS=function t(n){var e,r=1==(e=+(e=n))?nM:function(t,n){var r,i,o;return n-t?(r=t,i=n,r=Math.pow(r,o=e),i=Math.pow(i,o)-r,o=1/o,function(t){return Math.pow(r+t*i,o)}):nE(isNaN(t)?n:t)};function i(t,n){var e=r((t=np(t)).r,(n=np(n)).r),i=r(t.g,n.g),o=r(t.b,n.b),a=nM(t.opacity,n.opacity);return function(n){return t.r=e(n),t.g=i(n),t.b=o(n),t.opacity=a(n),t+""}}return i.gamma=t,i}(1);function nC(t){return function(n){var e,r,i=n.length,o=Array(i),a=Array(i),u=Array(i);for(e=0;e<i;++e)r=np(n[e]),o[e]=r.r||0,a[e]=r.g||0,u[e]=r.b||0;return o=t(o),a=t(a),u=t(u),r.opacity=1,function(t){return r.r=o(t),r.g=a(t),r.b=u(t),r+""}}}nC(function(t){var n=t.length-1;return function(e){var r=e<=0?e=0:e>=1?(e=1,n-1):Math.floor(e*n),i=t[r],o=t[r+1],a=r>0?t[r-1]:2*i-o,u=r<n-1?t[r+2]:2*o-i;return n$((e-r/n)*n,a,i,o,u)}}),nC(function(t){var n=t.length;return function(e){var r=Math.floor(((e%=1)<0?++e:e)*n),i=t[(r+n-1)%n],o=t[r%n],a=t[(r+1)%n],u=t[(r+2)%n];return n$((e-r/n)*n,i,o,a,u)}});var nX=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,nq=RegExp(nX.source,"g");function nP(t,n){var e,r,i,o,a,u=nX.lastIndex=nq.lastIndex=0,s=-1,l=[],h=[];for(t+="",n+="";(i=nX.exec(t))&&(o=nq.exec(n));)(a=o.index)>u&&(a=n.slice(u,a),l[s]?l[s]+=a:l[++s]=a),(i=i[0])===(o=o[0])?l[s]?l[s]+=o:l[++s]=o:(l[++s]=null,h.push({i:s,x:tK(i,o)})),u=nq.lastIndex;return u<n.length&&(a=n.slice(u),l[s]?l[s]+=a:l[++s]=a),l.length<2?h[0]?(e=h[0].x,function(t){return e(t)+""}):(r=n,function(){return r}):(n=h.length,function(t){for(var e,r=0;r<n;++r)l[(e=h[r]).i]=e.x(t);return l.join("")})}function nO(t,n){var e;return("number"==typeof n?tK:n instanceof nh?nS:(e=nh(n))?(n=e,nS):nP)(t,n)}function nT(t){return function(){this.removeAttribute(t)}}function nj(t){return function(){this.removeAttributeNS(t.space,t.local)}}function nR(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttribute(t);return a===o?null:a===r?i:i=n(r=a,e)}}function nH(t,n,e){var r,i,o=e+"";return function(){var a=this.getAttributeNS(t.space,t.local);return a===o?null:a===r?i:i=n(r=a,e)}}function nI(t,n,e){var r,i,o;return function(){var a,u,s=e(this);return null==s?void this.removeAttribute(t):(a=this.getAttribute(t))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s))}}function nY(t,n,e){var r,i,o;return function(){var a,u,s=e(this);return null==s?void this.removeAttributeNS(t.space,t.local):(a=this.getAttributeNS(t.space,t.local))===(u=s+"")?null:a===r&&u===i?o:(i=u,o=n(r=a,s))}}function nL(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(n){this.setAttributeNS(t.space,t.local,i.call(this,n))}),e}return i._value=n,i}function nD(t,n){var e,r;function i(){var i=n.apply(this,arguments);return i!==r&&(e=(r=i)&&function(n){this.setAttribute(t,i.call(this,n))}),e}return i._value=n,i}function nB(t,n){return function(){tz(this,t).delay=+n.apply(this,arguments)}}function nV(t,n){return n=+n,function(){tz(this,t).delay=n}}function nz(t,n){return function(){tU(this,t).duration=+n.apply(this,arguments)}}function nU(t,n){return n=+n,function(){tU(this,t).duration=n}}var nF=tm.prototype.constructor;function nK(t){return function(){this.style.removeProperty(t)}}var nW=0;function nG(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}var nJ=tm.prototype;nG.prototype=(function(t){return tm().transition(t)}).prototype={constructor:nG,select:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=l(t));for(var r=this._groups,i=r.length,o=Array(i),a=0;a<i;++a)for(var u,s,h=r[a],c=h.length,f=o[a]=Array(c),p=0;p<c;++p)(u=h[p])&&(s=t.call(u,u.__data__,p,h))&&("__data__"in u&&(s.__data__=u.__data__),f[p]=s,tV(f[p],n,e,p,f,tF(u,e)));return new nG(o,this._parents,n,e)},selectAll:function(t){var n=this._name,e=this._id;"function"!=typeof t&&(t=c(t));for(var r=this._groups,i=r.length,o=[],a=[],u=0;u<i;++u)for(var s,l=r[u],h=l.length,f=0;f<h;++f)if(s=l[f]){for(var p,d=t.call(s,s.__data__,f,l),y=tF(s,e),v=0,_=d.length;v<_;++v)(p=d[v])&&tV(p,n,e,v,d,y);o.push(d),a.push(s)}return new nG(o,a,n,e)},selectChild:nJ.selectChild,selectChildren:nJ.selectChildren,filter:function(t){"function"!=typeof t&&(t=f(t));for(var n=this._groups,e=n.length,r=Array(e),i=0;i<e;++i)for(var o,a=n[i],u=a.length,s=r[i]=[],l=0;l<u;++l)(o=a[l])&&t.call(o,o.__data__,l,a)&&s.push(o);return new nG(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw Error();for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),a=Array(r),u=0;u<o;++u)for(var s,l=n[u],h=e[u],c=l.length,f=a[u]=Array(c),p=0;p<c;++p)(s=l[p]||h[p])&&(f[p]=s);for(;u<r;++u)a[u]=n[u];return new nG(a,this._parents,this._name,this._id)},selection:function(){return new nF(this._groups,this._parents)},transition:function(){for(var t=this._name,n=this._id,e=++nW,r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,l=0;l<s;++l)if(a=u[l]){var h=tF(a,n);tV(a,t,e,l,u,{time:h.time+h.delay+h.duration,delay:0,duration:h.duration,ease:h.ease})}return new nG(r,this._parents,t,e)},call:nJ.call,nodes:nJ.nodes,node:nJ.node,size:nJ.size,empty:nJ.empty,each:nJ.each,on:function(t,n){var e,r,i,o=this._id;return arguments.length<2?tF(this.node(),o).on.on(t):this.each((i=(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})?tz:tU,function(){var a=i(this,o),u=a.on;u!==e&&(r=(e=u).copy()).on(t,n),a.on=r}))},attr:function(t,n){var e=E(t),r="transform"===e?t1:nO;return this.attrTween(t,"function"==typeof n?(e.local?nY:nI)(e,r,t5(this,"attr."+t,n)):null==n?(e.local?nj:nT)(e):(e.local?nH:nR)(e,r,n))},attrTween:function(t,n){var e="attr."+t;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(null==n)return this.tween(e,null);if("function"!=typeof n)throw Error();var r=E(t);return this.tween(e,(r.local?nL:nD)(r,n))},style:function(t,n,e){var r,i,o,a,u,s,l,h,c,f,p,d,y,v,_,g,m,w,b,x,k,A="transform"==(t+="")?tZ:nO;return null==n?this.styleTween(t,(r=t,function(){var t=H(this,r),n=(this.style.removeProperty(r),H(this,r));return t===n?null:t===i&&n===o?a:a=A(i=t,o=n)})).on("end.style."+t,nK(t)):"function"==typeof n?this.styleTween(t,(u=t,s=t5(this,"style."+t,n),function(){var t=H(this,u),n=s(this),e=n+"";return null==n&&(this.style.removeProperty(u),e=n=H(this,u)),t===e?null:t===l&&e===h?c:(h=e,c=A(l=t,n))})).each((f=this._id,m="end."+(g="style."+(p=t)),function(){var t=tU(this,f),n=t.on,e=null==t.value[g]?_||(_=nK(p)):void 0;(n!==d||v!==e)&&(y=(d=n).copy()).on(m,v=e),t.on=y})):this.styleTween(t,(w=t,k=n+"",function(){var t=H(this,w);return t===k?null:t===b?x:x=A(b=t,n)}),e).on("end.style."+t,null)},styleTween:function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw Error();return this.tween(r,function(t,n,e){var r,i;function o(){var o=n.apply(this,arguments);return o!==i&&(r=(i=o)&&function(n){this.style.setProperty(t,o.call(this,n),e)}),r}return o._value=n,o}(t,n,null==e?"":e))},text:function(t){var n,e;return this.tween("text","function"==typeof t?(n=t5(this,"text",t),function(){var t=n(this);this.textContent=null==t?"":t}):(e=null==t?"":t+"",function(){this.textContent=e}))},textTween:function(t){var n="text";if(arguments.length<1)return(n=this.tween(n))&&n._value;if(null==t)return this.tween(n,null);if("function"!=typeof t)throw Error();return this.tween(n,function(t){var n,e;function r(){var r=t.apply(this,arguments);return r!==e&&(n=(e=r)&&function(t){this.textContent=r.call(this,t)}),n}return r._value=t,r}(t))},remove:function(){var t;return this.on("end.remove",(t=this._id,function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}))},tween:function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=tF(this.node(),e).tween,o=0,a=i.length;o<a;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?t0:t2)(e,t,n))},delay:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?nB:nV)(n,t)):tF(this.node(),n).delay},duration:function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?nz:nU)(n,t)):tF(this.node(),n).duration},ease:function(t){var n=this._id;return arguments.length?this.each(function(t,n){if("function"!=typeof n)throw Error();return function(){tU(this,t).ease=n}}(n,t)):tF(this.node(),n).ease},easeVarying:function(t){var n;if("function"!=typeof t)throw Error();return this.each((n=this._id,function(){var e=t.apply(this,arguments);if("function"!=typeof e)throw Error();tU(this,n).ease=e}))},end:function(){var t,n,e=this,r=e._id,i=e.size();return new Promise(function(o,a){var u={value:a},s={value:function(){0==--i&&o()}};e.each(function(){var e=tU(this,r),i=e.on;i!==t&&((n=(t=i).copy())._.cancel.push(u),n._.interrupt.push(u),n._.end.push(s)),e.on=n}),0===i&&o()})},[Symbol.iterator]:nJ[Symbol.iterator]};var nQ={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};tm.prototype.interrupt=function(t){return this.each(function(){!function(t,n){var e,r,i,o=t.__transition,a=!0;if(o){for(i in n=null==n?null:n+"",o){if((e=o[i]).name!==n){a=!1;continue}r=e.state>2&&e.state<5,e.state=6,e.timer.stop(),e.on.call(r?"interrupt":"cancel",t,t.__data__,e.index,e.group),delete o[i]}a&&delete t.__transition}}(this,t)})},tm.prototype.transition=function(t){var n,e;t instanceof nG?(n=t._id,t=t._name):(n=++nW,(e=nQ).time=tO(),t=null==t?null:t+"");for(var r=this._groups,i=r.length,o=0;o<i;++o)for(var a,u=r[o],s=u.length,l=0;l<s;++l)(a=u[l])&&tV(a,t,n,l,u,e||function(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))throw Error(`transition ${n} not found`);return e}(a,n));return new nG(r,this._parents,t,n)};let{abs:nZ,max:n1,min:n0}=Math;function n2(t){return{type:t}}function n5(t,n,e){this.k=t,this.x=n,this.y=e}["w","e"].map(n2),["n","s"].map(n2),["n","w","e","s","nw","ne","sw","se"].map(n2),n5.prototype={constructor:n5,scale:function(t){return 1===t?this:new n5(this.k*t,this.x,this.y)},translate:function(t,n){return 0===t&0===n?this:new n5(this.k,this.x+this.k*t,this.y+this.k*n)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}},new n5(1,0,0),n5.prototype}}]);
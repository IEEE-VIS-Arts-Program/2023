(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{4184:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(r=(function(){return o}).apply(t,[]))&&(e.exports=r)}()},6729:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/flow-generator",function(){return r(9964)}])},2471:function(e,t,r){"use strict";let n,o,l,a,u,i;r.d(t,{Z:function(){return _}});var s=r(5893),d=r(5152),f=r.n(d),c=r(1163);r(7294);let p=f()(()=>r.e(257).then(r.t.bind(r,5320,23)).then(e=>e.default),{loadableGenerated:{webpack:()=>[5320]},ssr:!1});o=l=getComputedStyle(document.documentElement).getPropertyValue("--bg"),a=getComputedStyle(document.documentElement).getPropertyValue("--accent");let h,m,b=[],y;function _(e){let{phrase:t,noiseZoomProp:r,fontSizeProp:d,noiseOctavesProp:f,dYProp:_,widthProp:g,heightProp:w}=e,x="VISAP23";t&&(x=t);let v=.005;r&&(v=Number(r));let E=.005;f&&(E=Number(f));let S=0;_&&(S=Number(_));let{basePath:O}=(0,c.useRouter)(),P=e=>{h=e.loadFont(O+"/fonts/SoraOTF/Sora-ExtraBold.otf"),m=e.loadFont(O+"/fonts/SoraOTF/Sora-Regular.otf")},C={x:0,y:0},D=(e,t)=>{let r=g?e.windowWidth/100*g:e.windowWidth,s=w?e.windowHeight/100*w:e.windowHeight;e.createCanvas(r,s).parent(t),n=Math.min(125,Math.max(.1*e.windowWidth,75)),d&&(n=Number(d)),e.blendMode(e.BLEND),(u=e.color(l)).setAlpha(255),(i=e.color(a)).setAlpha(255),e.background(o),e.noiseDetail(E,.5),e.textSize(n),e.textAlign(e.CENTER),e.textFont(h),y=h.textToPoints(x,-e.textWidth(x)/2,0,n,{sampleFactor:.15});for(let t=0;t<y.length;t++)b[t]=y[t],b[t].zOffset=e.random();g||w?(C.x=e.width/2,C.y=e.height/2+S):(C.x=e.width/2,C.y=.25*e.height)},N=e=>{e.push(),e.translate(C.x,C.y),e.noFill(),e.stroke(i),e.strokeWeight(1);for(let t=0;t<b.length;t++){let r=b[t],n=r.x*v,o=r.y*v,l=0*e.frameCount+.001*r.zOffset,a=r.x+e.map(e.noise(n,o,l),0,1,-.25,.25),u=r.y+e.map(e.noise(n,o,l+214),0,1,-.25,.25);e.line(r.x,r.y,a,u),r.x=a,r.y=u}e.pop(),e.push(),e.translate(C.x,C.y),e.textAlign(e.CENTER),e.textFont(m),e.stroke(l),e.fill(u),e.textFont(h),e.text(x,0,0),e.pop()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{height:"30vh"},children:(0,s.jsx)(p,{style:{position:"absolute",top:0,left:0,right:0,margin:"auto",zIndex:-1},preload:P,setup:D,draw:N})})})}},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let r=l.default,o={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=n({},o,e)),o=n({},o,t);let i=o.loader,s=()=>null!=i?i().then(a):Promise.resolve(a(()=>null));return(o.loadableGenerated&&delete(o=n({},o,o.loadableGenerated)).loadableGenerated,"boolean"!=typeof o.ssr||o.ssr)?r(n({},o,{loader:s})):(delete o.webpack,delete o.modules,u(r,o))},t.noSSR=u;var n=r(6495).Z,o=r(2648).Z,l=(o(r(7294)),o(r(8976)));function a(e){return{default:(null==e?void 0:e.default)||e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(2648).Z)(r(7294));let o=n.default.createContext(null);t.LoadableContext=o},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,o=(0,r(2648).Z)(r(7294)),l=r(2254);let a=[],u=[],i=!1;function s(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function f(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function a(){if(!n){let t=new d(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!i){let e=r.webpack?r.webpack():r.modules;e&&u.push(t=>{for(let r of e)if(-1!==t.indexOf(r))return a()})}function s(e,t){!function(){a();let e=o.default.useContext(l.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let u=o.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),o.default.useMemo(()=>{var t;return u.loading||u.error?o.default.createElement(r.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:n.retry}):u.loaded?o.default.createElement((t=u.loaded)&&t.default?t.default:t,e):null},[e,u])}return s.preload=()=>a(),s.displayName="LoadableComponent",o.default.forwardRef(s)}(s,e)}function c(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return c(e,t)})}f.preloadAll=()=>new Promise((e,t)=>{c(a).then(e,t)}),f.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let r=()=>(i=!0,t());c(u,e).then(r,r)})},window.__NEXT_PRELOADREADY=f.preloadReady,t.default=f},9964:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893);r(4184);var o=r(2471),l=r(1163),a=r(7294);function u(){let e=(0,l.useRouter)(),[t,r]=(0,a.useState)("?w=any phrase"),[u,i]=(0,a.useState)(),[s,d]=(0,a.useState)(),[f,c]=(0,a.useState)(),[p,h]=(0,a.useState)();return(0,a.useEffect)(()=>{console.log("\n\uD83D\uDC49 HOW TO USE THE GENERATOR\nYou can customize lettering and flowfield from URL query parameters.\n\nE.g., http://visap.net/2023/logo?phrase=PERLIN%20NOISE&noiseZoom=0.01&fontSize=100&noiseOctaves=2&dY=30\n\n\uD83C\uDF7D Available Settings:\n- phrase (string)\n- fontSize (number)\n- dY (number)\n- noiseZoom (numer between 0 and 1)\n- noiseOctave (integer number)\n\n\uD83C\uDF38 Use the device toolbar embedded in your browser to set the dimension of your artboard, then export it as picture.\n\nBye \uD83D\uDE36‍\uD83C\uDF2B️")},[]),(0,a.useEffect)(()=>{let{phrase:t,noiseZoom:n,fontSize:o,noiseOctaves:l,dY:a}=e.query;t&&r(t),n&&i(Number(n)),o&&d(Number(o)),l&&c(Number(l)),a&&h(Number(a))},[e.query]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(o.Z,{phrase:t,noiseZoomProp:u,fontSizeProp:s,noiseOctavesProp:f,dYProp:p,widthProp:100,heightProp:100})})}},5152:function(e,t,r){e.exports=r(5677)},1163:function(e,t,r){e.exports=r(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6729)}),_N_E=e.O()}]);
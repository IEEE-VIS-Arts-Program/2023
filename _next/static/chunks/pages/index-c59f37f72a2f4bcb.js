(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5915)}])},2471:function(e,t,n){"use strict";let r,a,i,s,o,l;n.d(t,{Z:function(){return b}});var c=n(5893),u=n(5152),d=n.n(u),h=n(1163),p=n(7294);let m=d()(()=>n.e(257).then(n.t.bind(n,5320,23)).then(e=>e.default),{loadableGenerated:{webpack:()=>[5320]},ssr:!1}),g,f,x=[],A;function b(e){let{phrase:t,fontSizeProp:n,dYProp:u,noiseZoomProp:d,noiseOctavesProp:b,noiseFalloffProp:j,zOffsetChangeProp:w,individualZOffsetProp:v,lineSpeedProp:y,bgColorProp:_,strokeColorProp:C,widthProp:S,heightProp:E}=e;(0,p.useEffect)(()=>(a=i=getComputedStyle(document.documentElement).getPropertyValue("--bg"),s=getComputedStyle(document.documentElement).getPropertyValue("--accent"),document.body.classList.add("transparent-bg"),()=>document.body.classList.remove("transparent-bg")),[]);let I="VISAP2023";t&&(I=t);let k=.005;d&&(k=Number(d));let V=4;b&&(V=Number(b));let P=.25;j&&(P=Number(j));let N=0;w&&(N=Number(w));let F=.01;v&&(F=Number(v));let M=.25;y&&(M=Number(y)),_&&(a=i=_),C&&(s=C);let T=0;u&&(T=Number(u));let{basePath:R}=(0,h.useRouter)(),Z=e=>{g=e.loadFont(R+"/fonts/SoraOTF/Sora-ExtraBold.otf"),f=e.loadFont(R+"/fonts/SoraOTF/Sora-Regular.otf")},O={x:0,y:0},D=(e,t)=>{let c=S?e.windowWidth/100*S:e.windowWidth,u=E?e.windowHeight/100*E:e.windowHeight;e.createCanvas(c,u).parent(t),r=Math.min(125,Math.max(.1*e.windowWidth,75)),n&&(r=Number(n)),e.blendMode(e.BLEND),(o=e.color(i)).setAlpha(255),(l=e.color(s)).setAlpha(255),e.background(a),e.noiseDetail(V,P),e.textSize(r),e.textAlign(e.CENTER),e.textFont(g),A=g.textToPoints(I,-e.textWidth(I)/2,0,r,{sampleFactor:.15});for(let t=0;t<A.length;t++)x[t]=A[t],x[t].zOffset=e.random();S||E?(O.x=e.width/2,O.y=e.height/2+T):(O.x=e.width/2,O.y=.25*e.height)},L=e=>{e.push(),e.translate(O.x,O.y),e.noFill(),e.stroke(l),e.strokeWeight(1);for(let t=0;t<x.length;t++){let n=x[t],r=n.x*k,a=n.y*k,i=e.frameCount*N+n.zOffset*F,s=n.x+e.map(e.noise(r,a,i),0,1,-M,M),o=n.y+e.map(e.noise(r,a,i+214),0,1,-M,M);e.line(n.x,n.y,s,o),n.x=s,n.y=o}e.pop(),e.push(),e.translate(O.x,O.y),e.textAlign(e.CENTER),e.textFont(f),e.stroke(i),e.fill(o),e.textFont(g),e.text(I,0,0),e.pop()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{style:{height:"30vh"},children:(0,c.jsx)(m,{style:{position:"absolute",top:0,left:0,right:0,margin:"auto",zIndex:-1},preload:Z,setup:D,draw:L})})})}},5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=i.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=r({},a,e)),a=r({},a,t);let l=a.loader,c=()=>null!=l?l().then(s):Promise.resolve(s(()=>null));return(a.loadableGenerated&&delete(a=r({},a,a.loadableGenerated)).loadableGenerated,"boolean"!=typeof a.ssr||a.ssr)?n(r({},a,{loader:c})):(delete a.webpack,delete a.modules,o(n,a))},t.noSSR=o;var r=n(6495).Z,a=n(2648).Z,i=(a(n(7294)),a(n(8976)));function s(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294));let a=r.default.createContext(null);t.LoadableContext=a},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,a=(0,n(2648).Z)(n(7294)),i=n(2254);let s=[],o=[],l=!1;function c(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function s(){if(!r){let t=new u(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!l){let e=n.webpack?n.webpack():n.modules;e&&o.push(t=>{for(let n of e)if(-1!==t.indexOf(n))return s()})}function c(e,t){!function(){s();let e=a.default.useContext(i.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let o=a.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),a.default.useMemo(()=>{var t;return o.loading||o.error?a.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:r.retry}):o.loaded?a.default.createElement((t=o.loaded)&&t.default?t.default:t,e):null},[e,o])}return c.preload=()=>s(),c.displayName="LoadableComponent",a.default.forwardRef(c)}(c,e)}function h(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return h(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{h(s).then(e,t)}),d.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(l=!0,t());h(o,e).then(n,n)})},window.__NEXT_PRELOADREADY=d.preloadReady,t.default=d},5915:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r=n(5893),a=n(4780),i=n.n(a),s=n(682),o=n(4051),l=n(1555),c=n(4184),u=n.n(c),d=n(9008),h=n.n(d),p=n(5342),m=n(8187),g=n(2471),f=n(8146),x=n(7294),A=function(e,t){var n=(0,x.useRef)(!0);(0,x.useEffect)(function(){if(n.current){n.current=!1;return}return e()},t)},b=n(2029),j=n(6454),w=n(6852),v=n(1819),y=n(5446),_=(0,n(6611).Z)("carousel-caption"),C=n(6792);let S=x.forwardRef(({as:e="div",bsPrefix:t,className:n,...a},i)=>{let s=u()(n,(0,C.vE)(t,"carousel-item"));return(0,r.jsx)(e,{ref:i,...a,className:s})});function E(e,t){let n=0;return x.Children.map(e,e=>x.isValidElement(e)?t(e,n++):e)}S.displayName="CarouselItem";var I=n(2646),k=n(4509),V=n(2785);let P={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"},N=x.forwardRef((e,t)=>{var n,a,i;let s,o;let{as:l="div",bsPrefix:c,slide:d,fade:h,controls:p,indicators:m,indicatorLabels:g,activeIndex:_,onSelect:S,onSlide:P,onSlid:N,interval:F,keyboard:M,onKeyDown:T,pause:R,onMouseOver:Z,onMouseOut:O,wrap:D,touch:L,onTouchStart:B,onTouchMove:G,onTouchEnd:U,prevIcon:W,prevLabel:$,nextIcon:Q,nextLabel:z,variant:Y,className:H,children:J,...X}=(0,y.Ch)(e,{activeIndex:"onSelect"}),K=(0,C.vE)(c,"carousel"),q=(0,C.SC)(),ee=(0,x.useRef)(null),[et,en]=(0,x.useState)("next"),[er,ea]=(0,x.useState)(!1),[ei,es]=(0,x.useState)(!1),[eo,el]=(0,x.useState)(_||0);(0,x.useEffect)(()=>{ei||_===eo||(ee.current?en(ee.current):en((_||0)>eo?"next":"prev"),d&&es(!0),el(_||0))},[_,ei,eo,d]),(0,x.useEffect)(()=>{ee.current&&(ee.current=null)});let ec=0;n=(e,t)=>{++ec,t===_&&(s=e.props.interval)},o=0,x.Children.forEach(J,e=>{x.isValidElement(e)&&n(e,o++)});let eu=(0,b.Z)(s),ed=(0,x.useCallback)(e=>{if(ei)return;let t=eo-1;if(t<0){if(!D)return;t=ec-1}ee.current="prev",null==S||S(t,e)},[ei,eo,S,D,ec]),eh=(0,f.Z)(e=>{if(ei)return;let t=eo+1;if(t>=ec){if(!D)return;t=0}ee.current="next",null==S||S(t,e)}),ep=(0,x.useRef)();(0,x.useImperativeHandle)(t,()=>({element:ep.current,prev:ed,next:eh}));let em=(0,f.Z)(()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ep.current)&&(q?ed():eh())}),eg="next"===et?"start":"end";A(()=>{d||(null==P||P(eo,eg),null==N||N(eo,eg))},[eo]);let ef=`${K}-item-${et}`,ex=`${K}-item-${eg}`,eA=(0,x.useCallback)(e=>{(0,k.Z)(e),null==P||P(eo,eg)},[P,eo,eg]),eb=(0,x.useCallback)(()=>{es(!1),null==N||N(eo,eg)},[N,eo,eg]),ej=(0,x.useCallback)(e=>{if(M&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),q?eh(e):ed(e);return;case"ArrowRight":e.preventDefault(),q?ed(e):eh(e);return}null==T||T(e)},[M,T,ed,eh,q]),ew=(0,x.useCallback)(e=>{"hover"===R&&ea(!0),null==Z||Z(e)},[R,Z]),ev=(0,x.useCallback)(e=>{ea(!1),null==O||O(e)},[O]),ey=(0,x.useRef)(0),e_=(0,x.useRef)(0),eC=(a=(0,j.Z)(),i=(0,x.useRef)(),(0,w.Z)(function(){return clearTimeout(i.current)}),(0,x.useMemo)(function(){var e=function(){return clearTimeout(i.current)};return{set:function(t,n){void 0===n&&(n=0),a()&&(e(),n<=2147483647?i.current=setTimeout(t,n):function e(t,n,r){var a=r-Date.now();t.current=a<=2147483647?setTimeout(n,a):setTimeout(function(){return e(t,n,r)},2147483647)}(i,t,Date.now()+n))},clear:e}},[])),eS=(0,x.useCallback)(e=>{ey.current=e.touches[0].clientX,e_.current=0,"hover"===R&&ea(!0),null==B||B(e)},[R,B]),eE=(0,x.useCallback)(e=>{e.touches&&e.touches.length>1?e_.current=0:e_.current=e.touches[0].clientX-ey.current,null==G||G(e)},[G]),eI=(0,x.useCallback)(e=>{if(L){let t=e_.current;Math.abs(t)>40&&(t>0?ed(e):eh(e))}"hover"===R&&eC.set(()=>{ea(!1)},F||void 0),null==U||U(e)},[L,R,ed,eh,eC,F,U]),ek=null!=F&&!er&&!ei,eV=(0,x.useRef)();(0,x.useEffect)(()=>{var e,t;if(ek)return eV.current=window.setInterval(document.visibilityState?em:q?ed:eh,null!=(e=null!=(t=eu.current)?t:F)?e:void 0),()=>{null!==eV.current&&clearInterval(eV.current)}},[ek,ed,eh,eu,F,em,q]);let eP=(0,x.useMemo)(()=>m&&Array.from({length:ec},(e,t)=>e=>{null==S||S(t,e)}),[m,ec,S]);return(0,r.jsxs)(l,{ref:ep,...X,onKeyDown:ej,onMouseOver:ew,onMouseOut:ev,onTouchStart:eS,onTouchMove:eE,onTouchEnd:eI,className:u()(H,K,d&&"slide",h&&`${K}-fade`,Y&&`${K}-${Y}`),children:[m&&(0,r.jsx)("div",{className:`${K}-indicators`,children:E(J,(e,t)=>(0,r.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=g&&g.length?g[t]:`Slide ${t+1}`,className:t===eo?"active":void 0,onClick:eP?eP[t]:void 0,"aria-current":t===eo},t))}),(0,r.jsx)("div",{className:`${K}-inner`,children:E(J,(e,t)=>{let n=t===eo;return d?(0,r.jsx)(V.Z,{in:n,onEnter:n?eA:void 0,onEntered:n?eb:void 0,addEndListener:I.Z,children:(t,r)=>x.cloneElement(e,{...r,className:u()(e.props.className,n&&"entered"!==t&&ef,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ex)})}):x.cloneElement(e,{className:u()(e.props.className,n&&"active")})})}),p&&(0,r.jsxs)(r.Fragment,{children:[(D||0!==_)&&(0,r.jsxs)(v.Z,{className:`${K}-control-prev`,onClick:ed,children:[W,$&&(0,r.jsx)("span",{className:"visually-hidden",children:$})]}),(D||_!==ec-1)&&(0,r.jsxs)(v.Z,{className:`${K}-control-next`,onClick:eh,children:[Q,z&&(0,r.jsx)("span",{className:"visually-hidden",children:z})]})]})]})});N.displayName="Carousel",N.defaultProps=P;var F=Object.assign(N,{Caption:_,Item:S}),M=n(6480),T=n.n(M),R=n(1163),Z=n(9748);function O(e){let{images:t,height:n,className:a}=e,{basePath:i}=(0,R.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(F,{className:u()(T().carousel,a),style:{paddingBottom:n},interval:null,children:t.map((e,t)=>(0,r.jsxs)(F.Item,{className:T().carouselItem,children:[(0,r.jsx)(Z.Z,{src:"".concat(i,"/").concat(e.src),alt:e.caption,fill:!0,style:{objectFit:"cover"}}),e.caption&&(0,r.jsx)(F.Caption,{className:T().carouselCaption,children:(0,r.jsx)("p",{children:e.caption})})]},t))})})}O.defaultProps={height:"75%"};var D=function(e){let{className:t}=e,n=[{src:"images/home-gallery/IMG_20231003_175952.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Exhibition of Visap 2023"})},{src:"images/home-gallery/IMG_20231003_175958.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Catalogues in the exhibition space"})},{src:"images/home-gallery/IMG_20231005_131530.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Visiting the 2023 exhibition"})},{src:"images/home-gallery/IMG_20231005_131538.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Colophon of the exhibition"})},{src:"images/home-gallery/IMG_20231005_131555.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Visiting the 2023 exhibition"})},{src:"images/reception-photos/VISAP23-79.jpg",caption:(0,r.jsx)(r.Fragment,{children:"A photo of Latent Prism"})},{src:"images/reception-photos/VISAP23-4.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Catalogues of the exhibition"})},{src:"images/reception-photos/VISAP23-12.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Visitors discussing an artwork"})},{src:"images/reception-photos/VISAP23-19.jpg",caption:(0,r.jsx)(r.Fragment,{children:"A photo of Posts with no Response"})},{src:"images/reception-photos/VISAP23-29.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Two visitors looking at Associative Forms for Encoding Multivariate Climate Data"})},{src:"images/reception-photos/VISAP23-34.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Visitors looking at Eco-Mending"})},{src:"images/reception-photos/VISAP23-42.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Selfies at the exhibition"})},{src:"images/reception-photos/VISAP23-74.jpg",caption:(0,r.jsx)(r.Fragment,{children:"A visitor looking at Waiting for the Wave in Metaverse"})},{src:"images/reception-photos/VISAP23-86.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Close-up of exhibition catalogue"})},{src:"images/reception-photos/VISAP23-87.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Visitors testing the Spotlight artwork"})},{src:"images/reception-photos/VISAP23-97.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Talk of Alison Bennett"})},{src:"images/reception-photos/VISAP23-114.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Talk of Francesca Morini"})},{src:"images/reception-photos/VISAP23-144.jpg",caption:(0,r.jsx)(r.Fragment,{children:"The artwork Body Cosmos"})},{src:"images/reception-photos/VISAP23-152.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Visitors looking at an artwork"})},{src:"images/reception-photos/VISAP23-171.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Visitors looking at Posts with No Response"})},{src:"images/reception-photos/VISAP23-174.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Visitors attending VISAP opening"})}];return(0,r.jsx)(O,{className:t,images:n,height:"56.03%"})},L=n(5050),B={src:"/2023/_next/static/media/logo-monash-university.6d0bf4cc.png",height:264,width:1021,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUVExMVExMQDg8AAABSUlJJSUkAAACmDLdPAAAAB3RSTlMcLhIBKFAKBhB4MQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGVlYGRjYGBmYGFhYmBmYGQCAAGJACVV5HvbAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},G={src:"/2023/_next/static/media/logo-smu.60c07f5b.png",height:820,width:5897,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEUFAwKhdFGyaF0DY7BeAAAAA3RSTlMNI8TQDiZFAAAACXBIWXMAAC4jAAAuIwF4pT92AAAADUlEQVR4nGNgYmQAAwAAIAAETIQt8wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1},U=n(1664),W=n.n(U);function $(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h(),{children:[(0,r.jsx)("title",{children:"VISAP 2023"}),(0,r.jsx)("meta",{name:"description",content:"VISAP is a mini-conference and exhibition that showcases and discusses works at the intersection of data visualization, art and design."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(g.Z,{})}),(0,r.jsx)(s.Z,{fluid:!0,style:{backgroundColor:"var(--bg)"},children:(0,r.jsx)(s.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsxs)(l.Z,{sm:{span:12,offset:0},md:{span:10,offset:1},lg:{span:8,offset:2},xl:{span:8,offset:2},className:u()("mb-5"),children:[(0,r.jsx)("h2",{className:u()("mt-4","mb-1"),children:"IEEE VISAP 2023 - Perpetual Presence"}),(0,r.jsxs)("h6",{className:u()("mb-5"),children:["04—29 October 2023, Library at the Dock Gallery",(0,r.jsx)("br",{}),"Melbourne (VIC), Australia"]}),(0,r.jsx)(D,{className:u()("mt-2","mb-5")}),(0,r.jsxs)("p",{children:["The ",(0,r.jsx)("a",{href:"https://visap.net",children:"VIS Arts Program (VISAP)"})," is a mini-conference and exhibition in the"," ",(0,r.jsx)("a",{href:"https://ieeevis.org/year/2023/welcome",children:"IEEE VIS conference"})," program where visualization researchers, designers, and artists come together to showcase and discuss works at the intersection of data visualization, art and design. It links artists, practitioners, data scientists, and theoreticians, in order to foster discussion and collaboration between fields of research and practice."]}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("strong",{children:["The theme for IEEE VISAP 2023 is ",(0,r.jsx)("i",{children:"Perpetual Presence"}),"."]})," ","Data is all around us, a perpetual and ubiquitous digital stream of meaning that permeates throughout the ambient informatic which backgrounds our societies. ",(0,r.jsx)("i",{children:"Perpetual Presence"})," acknowledges the transformative potential of data as influencing cultural, economical and political landscapes. If ‘presence’ is a state of being, of becoming, and of responding to the intersectionality of realities, then ",(0,r.jsx)("i",{children:"Perpetual Presence"})," is an aesthetic in which data abundantly flourishes in ways that extend our understanding of the world."]}),(0,r.jsx)("p",{children:"VISAP’23 invites research papers, pictorials, and artwork submissions for presentation in two interrelated tracks during the conference and exhibition in October 2023. We seek original work examining new aesthetics and critical cultures at the intersection of art, science and technology that respond to the theme of perpetual presence."}),(0,r.jsx)("p",{children:"VISAP is an in-person only event in 2023, in line with the broader IEEE VIS Conference. There will be an opportunity to connect with the VISAP and local artistic community via talks and/or workshops. As such, presenting artists are expected to attend in person and actively contribute to discussions. We understand this arrangement may not be suitable for some, and will review alternative arrangements."}),(0,r.jsx)("p",{children:"Accepted works are published on the official VISAP website and in a dedicated exhibition catalogue. Papers and pictorials are indexed in the IEEE Xplore digital library."}),(0,r.jsx)("h3",{children:"Important Dates"}),(0,r.jsx)(L.Z,{}),(0,r.jsxs)("p",{children:["Read the ",(0,r.jsx)(W(),{href:"/call-for-entries",children:"Call for Entries"})," and the"," ",(0,r.jsx)(W(),{href:"submission",children:"Submission process"})," for more details about the submission of a paper, pictorial or artwork."]}),(0,r.jsx)("h3",{id:"supporters",children:"Supporters"}),(0,r.jsx)("p",{children:"VISAP 2023 is possible thanks to the support of:"}),(0,r.jsxs)(s.Z,{className:"mb-3",children:[(0,r.jsx)(o.Z,{children:(0,r.jsx)(l.Z,{xs:10,md:6,className:u()(i().logo,"mb-4 py-2 pt-3 rounded"),children:(0,r.jsx)("a",{className:"logo",href:"https://www.monash.edu/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(Z.Z,{src:B.src,sizes:"(max-width: 576px) 100vw, 50vw",style:{width:"100%",height:"auto"},width:B.width,height:B.height,alt:"Logo of Monash University"})})})}),(0,r.jsx)(o.Z,{children:(0,r.jsx)(l.Z,{xs:10,md:6,className:u()(i().logo,"mb-4 p-4 rounded"),children:(0,r.jsx)("a",{className:"logo",href:"https://smallmultiples.com.au/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(Z.Z,{src:G.src,sizes:"(max-width: 576px) 100vw, 50vw",style:{width:"100%",height:"auto"},width:G.width,height:G.height,alt:"Logo of Small Multiple Studio"})})})})]})]})})})}),(0,r.jsx)(m.Z,{})]})}},6480:function(e){e.exports={carousel:"CarouselComp_carousel__QNdCS",carouselItem:"CarouselComp_carouselItem__kSOlo",carouselImage:"CarouselComp_carouselImage__RMjcQ",carouselCaption:"CarouselComp_carouselCaption__j5ypm"}},4780:function(e){e.exports={logo:"Home_logo__FLQOc"}},5152:function(e,t,n){e.exports=n(5677)}},function(e){e.O(0,[512,809,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4873)}])},2471:function(e,t,n){"use strict";let r,a,s,l,i,o;n.d(t,{Z:function(){return b}});var c=n(5893),u=n(5152),d=n.n(u),h=n(1163);n(7294);let m=d()(()=>n.e(257).then(n.t.bind(n,5320,23)).then(e=>e.default),{loadableGenerated:{webpack:()=>[5320]},ssr:!1});a=s=getComputedStyle(document.documentElement).getPropertyValue("--bg"),l=getComputedStyle(document.documentElement).getPropertyValue("--accent");let p,f,g=[],x;function b(e){let{phrase:t,fontSizeProp:n,dYProp:u,noiseZoomProp:d,noiseOctavesProp:b,noiseFalloffProp:y,zOffsetChangeProp:v,individualZOffsetProp:j,lineSpeedProp:_,widthProp:w,heightProp:C}=e,E="VISAP2023";t&&(E=t);let N=.005;d&&(N=Number(d));let S=4;b&&(S=Number(b));let k=.25;y&&(k=Number(y));let P=0;v&&(P=Number(v));let I=.01;j&&(I=Number(j));let A=.25;_&&(A=Number(_));let F=0;u&&(F=Number(u));let{basePath:T}=(0,h.useRouter)(),O=e=>{p=e.loadFont(T+"/fonts/SoraOTF/Sora-ExtraBold.otf"),f=e.loadFont(T+"/fonts/SoraOTF/Sora-Regular.otf")},V={x:0,y:0},Z=(e,t)=>{let c=w?e.windowWidth/100*w:e.windowWidth,u=C?e.windowHeight/100*C:e.windowHeight;e.createCanvas(c,u).parent(t),r=Math.min(125,Math.max(.1*e.windowWidth,75)),n&&(r=Number(n)),e.blendMode(e.BLEND),(i=e.color(s)).setAlpha(255),(o=e.color(l)).setAlpha(255),e.background(a),e.noiseDetail(S,k),e.textSize(r),e.textAlign(e.CENTER),e.textFont(p),x=p.textToPoints(E,-e.textWidth(E)/2,0,r,{sampleFactor:.15});for(let t=0;t<x.length;t++)g[t]=x[t],g[t].zOffset=e.random();w||C?(V.x=e.width/2,V.y=e.height/2+F):(V.x=e.width/2,V.y=.25*e.height)},R=e=>{e.push(),e.translate(V.x,V.y),e.noFill(),e.stroke(o),e.strokeWeight(1);for(let t=0;t<g.length;t++){let n=g[t],r=n.x*N,a=n.y*N,s=e.frameCount*P+n.zOffset*I,l=n.x+e.map(e.noise(r,a,s),0,1,-A,A),i=n.y+e.map(e.noise(r,a,s+214),0,1,-A,A);e.line(n.x,n.y,l,i),n.x=l,n.y=i}e.pop(),e.push(),e.translate(V.x,V.y),e.textAlign(e.CENTER),e.textFont(f),e.stroke(s),e.fill(i),e.textFont(p),e.text(E,0,0),e.pop()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{style:{height:"30vh"},children:(0,c.jsx)(m,{style:{position:"absolute",top:0,left:0,right:0,margin:"auto",zIndex:-1},preload:O,setup:Z,draw:R})})})}},5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=s.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=r({},a,e)),a=r({},a,t);let o=a.loader,c=()=>null!=o?o().then(l):Promise.resolve(l(()=>null));return(a.loadableGenerated&&delete(a=r({},a,a.loadableGenerated)).loadableGenerated,"boolean"!=typeof a.ssr||a.ssr)?n(r({},a,{loader:c})):(delete a.webpack,delete a.modules,i(n,a))},t.noSSR=i;var r=n(6495).Z,a=n(2648).Z,s=(a(n(7294)),a(n(8976)));function l(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294));let a=r.default.createContext(null);t.LoadableContext=a},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,a=(0,n(2648).Z)(n(7294)),s=n(2254);let l=[],i=[],o=!1;function c(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function l(){if(!r){let t=new u(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!o){let e=n.webpack?n.webpack():n.modules;e&&i.push(t=>{for(let n of e)if(-1!==t.indexOf(n))return l()})}function c(e,t){!function(){l();let e=a.default.useContext(s.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let i=a.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),a.default.useMemo(()=>{var t;return i.loading||i.error?a.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?a.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return c.preload=()=>l(),c.displayName="LoadableComponent",a.default.forwardRef(c)}(c,e)}function h(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return h(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{h(l).then(e,t)}),d.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(o=!0,t());h(i,e).then(n,n)})},window.__NEXT_PRELOADREADY=d.preloadReady,t.default=d},4873:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(5893),a=n(682),s=n(4051),l=n(1555),i=n(4184),o=n.n(i);n(1664);var c=n(9008),u=n.n(c),d=n(5342),h=n(1155),m=n(2471),p=n(8146),f=n(7294),g=function(e,t){var n=(0,f.useRef)(!0);(0,f.useEffect)(function(){if(n.current){n.current=!1;return}return e()},t)},x=n(2029),b=n(6454),y=n(6852),v=n(3551),j=n(5446),_=(0,n(6611).Z)("carousel-caption"),w=n(6792);let C=f.forwardRef(({as:e="div",bsPrefix:t,className:n,...a},s)=>{let l=o()(n,(0,w.vE)(t,"carousel-item"));return(0,r.jsx)(e,{ref:s,...a,className:l})});function E(e,t){let n=0;return f.Children.map(e,e=>f.isValidElement(e)?t(e,n++):e)}C.displayName="CarouselItem";var N=n(2646),S=n(4509),k=n(2785);let P={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"},I=f.forwardRef((e,t)=>{var n,a,s;let l,i;let{as:c="div",bsPrefix:u,slide:d,fade:h,controls:m,indicators:_,indicatorLabels:C,activeIndex:P,onSelect:I,onSlide:A,onSlid:F,interval:T,keyboard:O,onKeyDown:V,pause:Z,onMouseOver:R,onMouseOut:M,wrap:D,touch:L,onTouchStart:$,onTouchMove:z,onTouchEnd:G,prevIcon:W,prevLabel:H,nextIcon:X,nextLabel:B,variant:Q,className:Y,children:q,...K}=(0,j.Ch)(e,{activeIndex:"onSelect"}),U=(0,w.vE)(u,"carousel"),J=(0,w.SC)(),ee=(0,f.useRef)(null),[et,en]=(0,f.useState)("next"),[er,ea]=(0,f.useState)(!1),[es,el]=(0,f.useState)(!1),[ei,eo]=(0,f.useState)(P||0);(0,f.useEffect)(()=>{es||P===ei||(ee.current?en(ee.current):en((P||0)>ei?"next":"prev"),d&&el(!0),eo(P||0))},[P,es,ei,d]),(0,f.useEffect)(()=>{ee.current&&(ee.current=null)});let ec=0;n=(e,t)=>{++ec,t===P&&(l=e.props.interval)},i=0,f.Children.forEach(q,e=>{f.isValidElement(e)&&n(e,i++)});let eu=(0,x.Z)(l),ed=(0,f.useCallback)(e=>{if(es)return;let t=ei-1;if(t<0){if(!D)return;t=ec-1}ee.current="prev",null==I||I(t,e)},[es,ei,I,D,ec]),eh=(0,p.Z)(e=>{if(es)return;let t=ei+1;if(t>=ec){if(!D)return;t=0}ee.current="next",null==I||I(t,e)}),em=(0,f.useRef)();(0,f.useImperativeHandle)(t,()=>({element:em.current,prev:ed,next:eh}));let ep=(0,p.Z)(()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(em.current)&&(J?ed():eh())}),ef="next"===et?"start":"end";g(()=>{d||(null==A||A(ei,ef),null==F||F(ei,ef))},[ei]);let eg=`${U}-item-${et}`,ex=`${U}-item-${ef}`,eb=(0,f.useCallback)(e=>{(0,S.Z)(e),null==A||A(ei,ef)},[A,ei,ef]),ey=(0,f.useCallback)(()=>{el(!1),null==F||F(ei,ef)},[F,ei,ef]),ev=(0,f.useCallback)(e=>{if(O&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),J?eh(e):ed(e);return;case"ArrowRight":e.preventDefault(),J?ed(e):eh(e);return}null==V||V(e)},[O,V,ed,eh,J]),ej=(0,f.useCallback)(e=>{"hover"===Z&&ea(!0),null==R||R(e)},[Z,R]),e_=(0,f.useCallback)(e=>{ea(!1),null==M||M(e)},[M]),ew=(0,f.useRef)(0),eC=(0,f.useRef)(0),eE=(a=(0,b.Z)(),s=(0,f.useRef)(),(0,y.Z)(function(){return clearTimeout(s.current)}),(0,f.useMemo)(function(){var e=function(){return clearTimeout(s.current)};return{set:function(t,n){void 0===n&&(n=0),a()&&(e(),n<=2147483647?s.current=setTimeout(t,n):function e(t,n,r){var a=r-Date.now();t.current=a<=2147483647?setTimeout(n,a):setTimeout(function(){return e(t,n,r)},2147483647)}(s,t,Date.now()+n))},clear:e}},[])),eN=(0,f.useCallback)(e=>{ew.current=e.touches[0].clientX,eC.current=0,"hover"===Z&&ea(!0),null==$||$(e)},[Z,$]),eS=(0,f.useCallback)(e=>{e.touches&&e.touches.length>1?eC.current=0:eC.current=e.touches[0].clientX-ew.current,null==z||z(e)},[z]),ek=(0,f.useCallback)(e=>{if(L){let t=eC.current;Math.abs(t)>40&&(t>0?ed(e):eh(e))}"hover"===Z&&eE.set(()=>{ea(!1)},T||void 0),null==G||G(e)},[L,Z,ed,eh,eE,T,G]),eP=null!=T&&!er&&!es,eI=(0,f.useRef)();(0,f.useEffect)(()=>{var e,t;if(eP)return eI.current=window.setInterval(document.visibilityState?ep:J?ed:eh,null!=(e=null!=(t=eu.current)?t:T)?e:void 0),()=>{null!==eI.current&&clearInterval(eI.current)}},[eP,ed,eh,eu,T,ep,J]);let eA=(0,f.useMemo)(()=>_&&Array.from({length:ec},(e,t)=>e=>{null==I||I(t,e)}),[_,ec,I]);return(0,r.jsxs)(c,{ref:em,...K,onKeyDown:ev,onMouseOver:ej,onMouseOut:e_,onTouchStart:eN,onTouchMove:eS,onTouchEnd:ek,className:o()(Y,U,d&&"slide",h&&`${U}-fade`,Q&&`${U}-${Q}`),children:[_&&(0,r.jsx)("div",{className:`${U}-indicators`,children:E(q,(e,t)=>(0,r.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=C&&C.length?C[t]:`Slide ${t+1}`,className:t===ei?"active":void 0,onClick:eA?eA[t]:void 0,"aria-current":t===ei},t))}),(0,r.jsx)("div",{className:`${U}-inner`,children:E(q,(e,t)=>{let n=t===ei;return d?(0,r.jsx)(k.Z,{in:n,onEnter:n?eb:void 0,onEntered:n?ey:void 0,addEndListener:N.Z,children:(t,r)=>f.cloneElement(e,{...r,className:o()(e.props.className,n&&"entered"!==t&&eg,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ex)})}):f.cloneElement(e,{className:o()(e.props.className,n&&"active")})})}),m&&(0,r.jsxs)(r.Fragment,{children:[(D||0!==P)&&(0,r.jsxs)(v.Z,{className:`${U}-control-prev`,onClick:ed,children:[W,H&&(0,r.jsx)("span",{className:"visually-hidden",children:H})]}),(D||P!==ec-1)&&(0,r.jsxs)(v.Z,{className:`${U}-control-next`,onClick:eh,children:[X,B&&(0,r.jsx)("span",{className:"visually-hidden",children:B})]})]})]})});I.displayName="Carousel",I.defaultProps=P;var A=Object.assign(I,{Caption:_,Item:C}),F=n(6480),T=n.n(F),O=n(1163),V=n(9748);function Z(e){let{images:t,height:n,className:a}=e,{basePath:s}=(0,O.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(A,{className:o()(T().carousel,a),style:{paddingBottom:n},interval:null,children:t.map((e,t)=>(0,r.jsxs)(A.Item,{className:T().carouselItem,children:[(0,r.jsx)(V.Z,{src:"".concat(s,"/").concat(e.src),alt:e.caption,fill:!0,style:{objectFit:"cover"}}),e.caption&&(0,r.jsx)(A.Caption,{className:T().carouselCaption,children:(0,r.jsx)("p",{children:e.caption})})]},t))})})}Z.defaultProps={height:"75%"};var R=function(e){let{className:t}=e,n=[{src:"images/home-gallery/001_still_videoinstallation.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Beyond Human Perception"})},{src:"images/home-gallery/01.png",caption:(0,r.jsx)(r.Fragment,{children:"Quaran.tiles"})},{src:"images/home-gallery/ColorCompare (1).png",caption:(0,r.jsx)(r.Fragment,{children:"Affective, Hand-Sculpted Glyph Forms for Engaging and Expressive Scientific Visualization"})},{src:"images/home-gallery/FRANCIS GALTON (Widest and Tallest) 8.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Shifting winds: Gendered structures of academic mentorship"})},{src:"images/home-gallery/image002.jpg",caption:(0,r.jsx)(r.Fragment,{children:"RAY"})},{src:"images/home-gallery/metoo-reports-lg.png",caption:(0,r.jsx)(r.Fragment,{children:"#MeToo Anti-Network"})},{src:"images/home-gallery/Mingling.png",caption:(0,r.jsx)(r.Fragment,{children:"Under the Green: Visual data storytelling the process of urban CO2 neutralization by forests"})},{src:"images/home-gallery/molecular-planets4.png",caption:(0,r.jsx)(r.Fragment,{children:"Molecular Planets"})},{src:"images/home-gallery/OctoAnemone-1.png",caption:(0,r.jsx)(r.Fragment,{children:"OctoAnemone"})},{src:"images/home-gallery/proj_robotdance-01.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Presentation of Self in Machine Life"})},{src:"images/home-gallery/SiftingStrands-0.png",caption:(0,r.jsx)(r.Fragment,{children:"Sifting Strands"})},{src:"images/home-gallery/skyglyphs_visap_2022-rep-images-04.png",caption:(0,r.jsx)(r.Fragment,{children:"Skyglyphs"})},{src:"images/home-gallery/SoftVoss-1.png",caption:(0,r.jsx)(r.Fragment,{children:"SoftVoss"})}];return(0,r.jsx)(Z,{className:t,images:n,height:"56.03%"})},M=n(5050);function D(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u(),{children:[(0,r.jsx)("title",{children:"VISAP 2023"}),(0,r.jsx)("meta",{name:"description",content:"VISAP is a mini-conference and exhibition that showcases and discusses works at the intersection of data visualization, art and design."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(d.Z,{}),(0,r.jsx)(a.Z,{children:(0,r.jsx)(s.Z,{children:(0,r.jsxs)(l.Z,{sm:{span:12,offset:0},md:{span:10,offset:1},lg:{span:8,offset:2},xl:{span:8,offset:2},className:o()("mb-5"),children:[(0,r.jsx)(m.Z,{}),(0,r.jsx)("h2",{className:o()("mt-4","mb-1"),children:"IEEE VISAP 2023 - Perpetual Presence"}),(0,r.jsx)("h6",{className:o()("mb-5"),children:"Melbourne (VIC), Australia, 22—27 October 2023"}),(0,r.jsxs)("p",{children:["The ",(0,r.jsx)("a",{href:"https://visap.net",children:"VIS Arts Program (VISAP)"})," is a mini-conference and exhibition in the"," ",(0,r.jsx)("a",{href:"https://ieeevis.org/year/2023/welcome",children:"IEEE VIS conference"})," program where visualization researchers, designers, and artists come together to showcase and discuss works at the intersection of data visualization, art and design. It links artists, practitioners, data scientists, and theoreticians, in order to foster discussion and collaboration between fields of research and practice."]}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("strong",{children:["The theme for IEEE VISAP 2023 is ",(0,r.jsx)("i",{children:"Perpetual Presence"}),"."]})," ","Data is all around us, a perpetual and ubiquitous digital stream of meaning that permeates throughout the ambient informatic which backgrounds our societies. ",(0,r.jsx)("i",{children:"Perpetual Presence"})," acknowledges the transformative potential of data as influencing cultural, economical and political landscapes. If ‘presence’ is a state of being, of becoming, and of responding to the intersectionality of realities, then"," ",(0,r.jsx)("i",{children:"Perpetual Presence"})," is an aesthetic in which data abundantly flourishes in ways that extend our understanding of the world."]}),(0,r.jsx)("p",{children:"VISAP’23 invites research papers, pictorials, and artwork submissions for presentation in two interrelated tracks during the conference and exhibition in October 2023. We seek original work examining new aesthetics and critical cultures at the intersection of art, science and technology that respond to the theme of perpetual presence."}),(0,r.jsx)("p",{children:"VISAP will be an in-person only event in 2023, in line with the broader IEEE VIS Conference. There will be an opportunity to connect with the VISAP and local artistic community via talks and/or workshops. As such, presenting artists are expected to attend in person and actively contribute to discussions. We understand this arrangement may not be suitable for some, and will review alternative arrangements."}),(0,r.jsx)("p",{children:"Accepted works will be published on the official VISAP website and in a dedicated exhibition catalogue. Papers and pictorials will be indexed in the IEEE Xplore digital library."}),(0,r.jsx)("h3",{children:"Important Dates"}),(0,r.jsx)(M.Z,{}),(0,r.jsx)("h5",{className:o()("mt-4"),children:"Some works from VISAP 2022"}),(0,r.jsx)(R,{className:o()("mt-2","mb-4")}),(0,r.jsxs)("p",{children:["Contact: ",(0,r.jsx)("a",{href:"mailto:art@ieeevis.org",children:"art@ieeevis.org"})," "]}),(0,r.jsxs)("p",{children:["Twitter: ",(0,r.jsx)("a",{href:"https://twitter.com/visapnet",children:"@visapnet"})]}),(0,r.jsxs)("p",{children:["Mastodon: ",(0,r.jsx)("a",{href:"https://vis.social/@visap",children:"@visap@vis.social"})]})]})})}),(0,r.jsx)(h.Z,{})]})}},6480:function(e){e.exports={carousel:"CarouselComp_carousel__QNdCS",carouselItem:"CarouselComp_carouselItem__kSOlo",carouselImage:"CarouselComp_carouselImage__RMjcQ",carouselCaption:"CarouselComp_carouselCaption__j5ypm"}},5152:function(e,t,n){e.exports=n(5677)}},function(e){e.O(0,[960,920,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
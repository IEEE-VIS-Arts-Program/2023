(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5915)}])},2471:function(e,t,n){"use strict";let r,a,l,s,i,o;n.d(t,{Z:function(){return A}});var c=n(5893),u=n(5152),d=n.n(u),h=n(1163);n(7294);let m=d()(()=>n.e(257).then(n.t.bind(n,5320,23)).then(e=>e.default),{loadableGenerated:{webpack:()=>[5320]},ssr:!1});a=l=getComputedStyle(document.documentElement).getPropertyValue("--bg"),s=getComputedStyle(document.documentElement).getPropertyValue("--accent");let p,f,g=[],x;function A(e){let{phrase:t,fontSizeProp:n,dYProp:u,noiseZoomProp:d,noiseOctavesProp:A,noiseFalloffProp:b,zOffsetChangeProp:y,individualZOffsetProp:j,lineSpeedProp:v,widthProp:w,heightProp:_}=e,C="VISAP2023";t&&(C=t);let S=.005;d&&(S=Number(d));let E=4;A&&(E=Number(A));let N=.25;b&&(N=Number(b));let k=0;y&&(k=Number(y));let I=.01;j&&(I=Number(j));let P=.25;v&&(P=Number(v));let F=0;u&&(F=Number(u));let{basePath:V}=(0,h.useRouter)(),T=e=>{p=e.loadFont(V+"/fonts/SoraOTF/Sora-ExtraBold.otf"),f=e.loadFont(V+"/fonts/SoraOTF/Sora-Regular.otf")},M={x:0,y:0},R=(e,t)=>{let c=w?e.windowWidth/100*w:e.windowWidth,u=_?e.windowHeight/100*_:e.windowHeight;e.createCanvas(c,u).parent(t),r=Math.min(125,Math.max(.1*e.windowWidth,75)),n&&(r=Number(n)),e.blendMode(e.BLEND),(i=e.color(l)).setAlpha(255),(o=e.color(s)).setAlpha(255),e.background(a),e.noiseDetail(E,N),e.textSize(r),e.textAlign(e.CENTER),e.textFont(p),x=p.textToPoints(C,-e.textWidth(C)/2,0,r,{sampleFactor:.15});for(let t=0;t<x.length;t++)g[t]=x[t],g[t].zOffset=e.random();w||_?(M.x=e.width/2,M.y=e.height/2+F):(M.x=e.width/2,M.y=.25*e.height)},Z=e=>{e.push(),e.translate(M.x,M.y),e.noFill(),e.stroke(o),e.strokeWeight(1);for(let t=0;t<g.length;t++){let n=g[t],r=n.x*S,a=n.y*S,l=e.frameCount*k+n.zOffset*I,s=n.x+e.map(e.noise(r,a,l),0,1,-P,P),i=n.y+e.map(e.noise(r,a,l+214),0,1,-P,P);e.line(n.x,n.y,s,i),n.x=s,n.y=i}e.pop(),e.push(),e.translate(M.x,M.y),e.textAlign(e.CENTER),e.textFont(f),e.stroke(l),e.fill(i),e.textFont(p),e.text(C,0,0),e.pop()};return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("div",{style:{height:"30vh"},children:(0,c.jsx)(m,{style:{position:"absolute",top:0,left:0,right:0,margin:"auto",zIndex:-1},preload:T,setup:R,draw:Z})})})}},5677:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=l.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:r}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=r({},a,e)),a=r({},a,t);let o=a.loader,c=()=>null!=o?o().then(s):Promise.resolve(s(()=>null));return(a.loadableGenerated&&delete(a=r({},a,a.loadableGenerated)).loadableGenerated,"boolean"!=typeof a.ssr||a.ssr)?n(r({},a,{loader:c})):(delete a.webpack,delete a.modules,i(n,a))},t.noSSR=i;var r=n(6495).Z,a=n(2648).Z,l=(a(n(7294)),a(n(8976)));function s(e){return{default:(null==e?void 0:e.default)||e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2254:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294));let a=r.default.createContext(null);t.LoadableContext=a},8976:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(6495).Z,a=(0,n(2648).Z)(n(7294)),l=n(2254);let s=[],i=[],o=!1;function c(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=r({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),r=null;function s(){if(!r){let t=new u(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!o){let e=n.webpack?n.webpack():n.modules;e&&i.push(t=>{for(let n of e)if(-1!==t.indexOf(n))return s()})}function c(e,t){!function(){s();let e=a.default.useContext(l.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let i=a.default.useSyncExternalStore(r.subscribe,r.getCurrentValue,r.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:r.retry}),[]),a.default.useMemo(()=>{var t;return i.loading||i.error?a.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:r.retry}):i.loaded?a.default.createElement((t=i.loaded)&&t.default?t.default:t,e):null},[e,i])}return c.preload=()=>s(),c.displayName="LoadableComponent",a.default.forwardRef(c)}(c,e)}function h(e,t){let n=[];for(;e.length;){let r=e.pop();n.push(r(t))}return Promise.all(n).then(()=>{if(e.length)return h(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{h(s).then(e,t)}),d.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(o=!0,t());h(i,e).then(n,n)})},window.__NEXT_PRELOADREADY=d.preloadReady,t.default=d},5915:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var r=n(5893),a=n(4780),l=n.n(a),s=n(682),i=n(4051),o=n(1555),c=n(4184),u=n.n(c),d=n(9008),h=n.n(d),m=n(5342),p=n(1155),f=n(2471),g=n(8146),x=n(7294),A=function(e,t){var n=(0,x.useRef)(!0);(0,x.useEffect)(function(){if(n.current){n.current=!1;return}return e()},t)},b=n(2029),y=n(6454),j=n(6852),v=n(3551),w=n(5446),_=(0,n(6611).Z)("carousel-caption"),C=n(6792);let S=x.forwardRef(({as:e="div",bsPrefix:t,className:n,...a},l)=>{let s=u()(n,(0,C.vE)(t,"carousel-item"));return(0,r.jsx)(e,{ref:l,...a,className:s})});function E(e,t){let n=0;return x.Children.map(e,e=>x.isValidElement(e)?t(e,n++):e)}S.displayName="CarouselItem";var N=n(2646),k=n(4509),I=n(2785);let P={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,r.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"},F=x.forwardRef((e,t)=>{var n,a,l;let s,i;let{as:o="div",bsPrefix:c,slide:d,fade:h,controls:m,indicators:p,indicatorLabels:f,activeIndex:_,onSelect:S,onSlide:P,onSlid:F,interval:V,keyboard:T,onKeyDown:M,pause:R,onMouseOver:Z,onMouseOut:O,wrap:D,touch:L,onTouchStart:B,onTouchMove:G,onTouchEnd:U,prevIcon:Q,prevLabel:$,nextIcon:W,nextLabel:z,variant:H,className:Y,children:J,...X}=(0,w.Ch)(e,{activeIndex:"onSelect"}),K=(0,C.vE)(c,"carousel"),q=(0,C.SC)(),ee=(0,x.useRef)(null),[et,en]=(0,x.useState)("next"),[er,ea]=(0,x.useState)(!1),[el,es]=(0,x.useState)(!1),[ei,eo]=(0,x.useState)(_||0);(0,x.useEffect)(()=>{el||_===ei||(ee.current?en(ee.current):en((_||0)>ei?"next":"prev"),d&&es(!0),eo(_||0))},[_,el,ei,d]),(0,x.useEffect)(()=>{ee.current&&(ee.current=null)});let ec=0;n=(e,t)=>{++ec,t===_&&(s=e.props.interval)},i=0,x.Children.forEach(J,e=>{x.isValidElement(e)&&n(e,i++)});let eu=(0,b.Z)(s),ed=(0,x.useCallback)(e=>{if(el)return;let t=ei-1;if(t<0){if(!D)return;t=ec-1}ee.current="prev",null==S||S(t,e)},[el,ei,S,D,ec]),eh=(0,g.Z)(e=>{if(el)return;let t=ei+1;if(t>=ec){if(!D)return;t=0}ee.current="next",null==S||S(t,e)}),em=(0,x.useRef)();(0,x.useImperativeHandle)(t,()=>({element:em.current,prev:ed,next:eh}));let ep=(0,g.Z)(()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;let t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(em.current)&&(q?ed():eh())}),ef="next"===et?"start":"end";A(()=>{d||(null==P||P(ei,ef),null==F||F(ei,ef))},[ei]);let eg=`${K}-item-${et}`,ex=`${K}-item-${ef}`,eA=(0,x.useCallback)(e=>{(0,k.Z)(e),null==P||P(ei,ef)},[P,ei,ef]),eb=(0,x.useCallback)(()=>{es(!1),null==F||F(ei,ef)},[F,ei,ef]),ey=(0,x.useCallback)(e=>{if(T&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),q?eh(e):ed(e);return;case"ArrowRight":e.preventDefault(),q?ed(e):eh(e);return}null==M||M(e)},[T,M,ed,eh,q]),ej=(0,x.useCallback)(e=>{"hover"===R&&ea(!0),null==Z||Z(e)},[R,Z]),ev=(0,x.useCallback)(e=>{ea(!1),null==O||O(e)},[O]),ew=(0,x.useRef)(0),e_=(0,x.useRef)(0),eC=(a=(0,y.Z)(),l=(0,x.useRef)(),(0,j.Z)(function(){return clearTimeout(l.current)}),(0,x.useMemo)(function(){var e=function(){return clearTimeout(l.current)};return{set:function(t,n){void 0===n&&(n=0),a()&&(e(),n<=2147483647?l.current=setTimeout(t,n):function e(t,n,r){var a=r-Date.now();t.current=a<=2147483647?setTimeout(n,a):setTimeout(function(){return e(t,n,r)},2147483647)}(l,t,Date.now()+n))},clear:e}},[])),eS=(0,x.useCallback)(e=>{ew.current=e.touches[0].clientX,e_.current=0,"hover"===R&&ea(!0),null==B||B(e)},[R,B]),eE=(0,x.useCallback)(e=>{e.touches&&e.touches.length>1?e_.current=0:e_.current=e.touches[0].clientX-ew.current,null==G||G(e)},[G]),eN=(0,x.useCallback)(e=>{if(L){let t=e_.current;Math.abs(t)>40&&(t>0?ed(e):eh(e))}"hover"===R&&eC.set(()=>{ea(!1)},V||void 0),null==U||U(e)},[L,R,ed,eh,eC,V,U]),ek=null!=V&&!er&&!el,eI=(0,x.useRef)();(0,x.useEffect)(()=>{var e,t;if(ek)return eI.current=window.setInterval(document.visibilityState?ep:q?ed:eh,null!=(e=null!=(t=eu.current)?t:V)?e:void 0),()=>{null!==eI.current&&clearInterval(eI.current)}},[ek,ed,eh,eu,V,ep,q]);let eP=(0,x.useMemo)(()=>p&&Array.from({length:ec},(e,t)=>e=>{null==S||S(t,e)}),[p,ec,S]);return(0,r.jsxs)(o,{ref:em,...X,onKeyDown:ey,onMouseOver:ej,onMouseOut:ev,onTouchStart:eS,onTouchMove:eE,onTouchEnd:eN,className:u()(Y,K,d&&"slide",h&&`${K}-fade`,H&&`${K}-${H}`),children:[p&&(0,r.jsx)("div",{className:`${K}-indicators`,children:E(J,(e,t)=>(0,r.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=f&&f.length?f[t]:`Slide ${t+1}`,className:t===ei?"active":void 0,onClick:eP?eP[t]:void 0,"aria-current":t===ei},t))}),(0,r.jsx)("div",{className:`${K}-inner`,children:E(J,(e,t)=>{let n=t===ei;return d?(0,r.jsx)(I.Z,{in:n,onEnter:n?eA:void 0,onEntered:n?eb:void 0,addEndListener:N.Z,children:(t,r)=>x.cloneElement(e,{...r,className:u()(e.props.className,n&&"entered"!==t&&eg,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&ex)})}):x.cloneElement(e,{className:u()(e.props.className,n&&"active")})})}),m&&(0,r.jsxs)(r.Fragment,{children:[(D||0!==_)&&(0,r.jsxs)(v.Z,{className:`${K}-control-prev`,onClick:ed,children:[Q,$&&(0,r.jsx)("span",{className:"visually-hidden",children:$})]}),(D||_!==ec-1)&&(0,r.jsxs)(v.Z,{className:`${K}-control-next`,onClick:eh,children:[W,z&&(0,r.jsx)("span",{className:"visually-hidden",children:z})]})]})]})});F.displayName="Carousel",F.defaultProps=P;var V=Object.assign(F,{Caption:_,Item:S}),T=n(6480),M=n.n(T),R=n(1163),Z=n(9748);function O(e){let{images:t,height:n,className:a}=e,{basePath:l}=(0,R.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(V,{className:u()(M().carousel,a),style:{paddingBottom:n},interval:null,children:t.map((e,t)=>(0,r.jsxs)(V.Item,{className:M().carouselItem,children:[(0,r.jsx)(Z.Z,{src:"".concat(l,"/").concat(e.src),alt:e.caption,fill:!0,style:{objectFit:"cover"}}),e.caption&&(0,r.jsx)(V.Caption,{className:M().carouselCaption,children:(0,r.jsx)("p",{children:e.caption})})]},t))})})}O.defaultProps={height:"75%"};var D=function(e){let{className:t}=e,n=[{src:"images/home-gallery/001_still_videoinstallation.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Beyond Human Perception"})},{src:"images/home-gallery/01.png",caption:(0,r.jsx)(r.Fragment,{children:"Quaran.tiles"})},{src:"images/home-gallery/ColorCompare (1).png",caption:(0,r.jsx)(r.Fragment,{children:"Affective, Hand-Sculpted Glyph Forms for Engaging and Expressive Scientific Visualization"})},{src:"images/home-gallery/FRANCIS GALTON (Widest and Tallest) 8.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Shifting winds: Gendered structures of academic mentorship"})},{src:"images/home-gallery/image002.jpg",caption:(0,r.jsx)(r.Fragment,{children:"RAY"})},{src:"images/home-gallery/metoo-reports-lg.png",caption:(0,r.jsx)(r.Fragment,{children:"#MeToo Anti-Network"})},{src:"images/home-gallery/Mingling.png",caption:(0,r.jsx)(r.Fragment,{children:"Under the Green: Visual data storytelling the process of urban CO2 neutralization by forests"})},{src:"images/home-gallery/molecular-planets4.png",caption:(0,r.jsx)(r.Fragment,{children:"Molecular Planets"})},{src:"images/home-gallery/OctoAnemone-1.png",caption:(0,r.jsx)(r.Fragment,{children:"OctoAnemone"})},{src:"images/home-gallery/proj_robotdance-01.jpg",caption:(0,r.jsx)(r.Fragment,{children:"Presentation of Self in Machine Life"})},{src:"images/home-gallery/SiftingStrands-0.png",caption:(0,r.jsx)(r.Fragment,{children:"Sifting Strands"})},{src:"images/home-gallery/skyglyphs_visap_2022-rep-images-04.png",caption:(0,r.jsx)(r.Fragment,{children:"Skyglyphs"})},{src:"images/home-gallery/SoftVoss-1.png",caption:(0,r.jsx)(r.Fragment,{children:"SoftVoss"})}];return(0,r.jsx)(O,{className:t,images:n,height:"56.03%"})},L=n(5050),B={src:"/2023/_next/static/media/logo-monash-university.6d0bf4cc.png",height:264,width:1021,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEUVExMVExMQDg8AAABSUlJJSUkAAACmDLdPAAAAB3RSTlMcLhIBKFAKBhB4MQAAAAlwSFlzAAALEwAACxMBAJqcGAAAABpJREFUeJxjYGVlYGRjYGBmYGFhYmBmYGQCAAGJACVV5HvbAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},G={src:"/2023/_next/static/media/logo-smu.60c07f5b.png",height:820,width:5897,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAACVBMVEUFAwKhdFGyaF0DY7BeAAAAA3RSTlMNI8TQDiZFAAAACXBIWXMAAC4jAAAuIwF4pT92AAAADUlEQVR4nGNgYmQAAwAAIAAETIQt8wAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:1};function U(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h(),{children:[(0,r.jsx)("title",{children:"VISAP 2023"}),(0,r.jsx)("meta",{name:"description",content:"VISAP is a mini-conference and exhibition that showcases and discusses works at the intersection of data visualization, art and design."}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(m.Z,{}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)(o.Z,{sm:{span:12,offset:0},md:{span:10,offset:1},lg:{span:8,offset:2},xl:{span:8,offset:2},className:u()("mb-5"),children:[(0,r.jsx)(f.Z,{}),(0,r.jsx)("h2",{className:u()("mt-4","mb-1"),children:"IEEE VISAP 2023 - Perpetual Presence"}),(0,r.jsxs)("h6",{className:u()("mb-5"),children:["04—29 October 2023, Library at the Dock Gallery",(0,r.jsx)("br",{}),"Melbourne (VIC), Australia"]}),(0,r.jsxs)("p",{children:["The ",(0,r.jsx)("a",{href:"https://visap.net",children:"VIS Arts Program (VISAP)"})," is a mini-conference and exhibition in the"," ",(0,r.jsx)("a",{href:"https://ieeevis.org/year/2023/welcome",children:"IEEE VIS conference"})," program where visualization researchers, designers, and artists come together to showcase and discuss works at the intersection of data visualization, art and design. It links artists, practitioners, data scientists, and theoreticians, in order to foster discussion and collaboration between fields of research and practice."]}),(0,r.jsxs)("p",{children:[(0,r.jsxs)("strong",{children:["The theme for IEEE VISAP 2023 is ",(0,r.jsx)("i",{children:"Perpetual Presence"}),"."]})," ","Data is all around us, a perpetual and ubiquitous digital stream of meaning that permeates throughout the ambient informatic which backgrounds our societies. ",(0,r.jsx)("i",{children:"Perpetual Presence"})," acknowledges the transformative potential of data as influencing cultural, economical and political landscapes. If ‘presence’ is a state of being, of becoming, and of responding to the intersectionality of realities, then"," ",(0,r.jsx)("i",{children:"Perpetual Presence"})," is an aesthetic in which data abundantly flourishes in ways that extend our understanding of the world."]}),(0,r.jsx)("p",{children:"VISAP’23 invites research papers, pictorials, and artwork submissions for presentation in two interrelated tracks during the conference and exhibition in October 2023. We seek original work examining new aesthetics and critical cultures at the intersection of art, science and technology that respond to the theme of perpetual presence."}),(0,r.jsx)("p",{children:"VISAP will be an in-person only event in 2023, in line with the broader IEEE VIS Conference. There will be an opportunity to connect with the VISAP and local artistic community via talks and/or workshops. As such, presenting artists are expected to attend in person and actively contribute to discussions. We understand this arrangement may not be suitable for some, and will review alternative arrangements."}),(0,r.jsx)("p",{children:"Accepted works will be published on the official VISAP website and in a dedicated exhibition catalogue. Papers and pictorials will be indexed in the IEEE Xplore digital library."}),(0,r.jsx)("h3",{children:"Important Dates"}),(0,r.jsx)(L.Z,{}),(0,r.jsx)("h5",{className:u()("mt-4"),children:"Some works from VISAP 2022"}),(0,r.jsx)(D,{className:u()("mt-2","mb-4")}),(0,r.jsx)("h3",{children:"Supporters"}),(0,r.jsx)("p",{children:"VISAP 2023 is possible thanks to the support of:"}),(0,r.jsxs)(s.Z,{className:"mb-3",children:[(0,r.jsx)(i.Z,{children:(0,r.jsx)(o.Z,{xs:10,md:6,className:u()(l().logo,"mb-4 py-2 pt-3 rounded"),children:(0,r.jsx)("a",{className:"logo",href:"https://www.monash.edu/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(Z.Z,{src:B,alt:"Logo of Monash University",layout:"responsive"})})})}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(o.Z,{xs:10,md:6,className:u()(l().logo,"mb-4 p-4 rounded"),children:(0,r.jsx)("a",{className:"logo",href:"https://smallmultiples.com.au/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(Z.Z,{src:G,alt:"Logo of Small Multiple Studio",layout:"responsive"})})})})]})]})})}),(0,r.jsx)(p.Z,{})]})}},6480:function(e){e.exports={carousel:"CarouselComp_carousel__QNdCS",carouselItem:"CarouselComp_carouselItem__kSOlo",carouselImage:"CarouselComp_carouselImage__RMjcQ",carouselCaption:"CarouselComp_carouselCaption__j5ypm"}},4780:function(e){e.exports={logo:"Home_logo__FLQOc"}},5152:function(e,t,n){e.exports=n(5677)}},function(e){e.O(0,[960,920,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);
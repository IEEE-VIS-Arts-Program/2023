(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(617)}])},617:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Z}});var n=a(5893),s=a(682),r=a(1608),i=a(1555),o=a(4184),l=a.n(o),c=(a(1664),a(9008)),d=a(5897),h=a.n(d),p=a(711),u=a(8063);var g=a(1163);var m=function(){var e=(0,g.useRouter)().basePath;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(p.Z,{bg:"transparent",expand:"lg",className:l()(h().headerBootstrap,"sticky-top"),collapseOnSelect:!0,children:(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(p.Z.Brand,{className:"py-0",href:e+"/",children:"IEEE VISAP 2023"}),(0,n.jsx)(p.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,n.jsx)(p.Z.Collapse,{id:"basic-navbar-nav",children:(0,n.jsx)(u.Z,{className:"ms-auto"})})]})})})};a(1058);var f,x,j,w,b=(0,a(5152).default)((function(){return a.e(257).then(a.t.bind(a,4210,23)).then((function(e){return e.default}))}),{loadableGenerated:{webpack:function(){return[4210]}},ssr:!1}),v="VISAP23";x=j=getComputedStyle(document.documentElement).getPropertyValue("--bg"),w=getComputedStyle(document.documentElement).getPropertyValue("--accent");var y,S,_,P,k,I=.25,C=[];function E(){var e=(0,g.useRouter)().basePath;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{style:{height:"30vh"},children:(0,n.jsx)(b,{style:{position:"absolute",top:0,left:0,right:0,margin:"auto",zIndex:-1},preload:function(t){_=t.loadFont(e+"/fonts/SoraOTF/Sora-ExtraBold.otf"),P=t.loadFont(e+"/fonts/SoraOTF/Sora-Regular.otf")},setup:function(e,t){e.createCanvas(e.windowWidth,e.windowHeight).parent(t),f=Math.min(125,Math.max(.1*e.windowWidth,75)),e.blendMode(e.BLEND),(y=e.color(j)).setAlpha(255),(S=e.color(w)).setAlpha(255),e.background(x),e.textSize(f),e.noiseDetail(4,.5),e.textAlign(e.CENTER),e.textFont(_),k=_.textToPoints(v,-e.textWidth(v)/2,0,f,{sampleFactor:.15});for(var a=0;a<k.length;a++)C[a]=k[a],C[a].zOffset=e.random()},draw:function(e){e.push(),e.translate(e.width/2,.25*e.height),e.noFill(),e.stroke(S),e.strokeWeight(1);for(var t=0;t<C.length;t++){var a=C[t],n=.005*a.x,s=.005*a.y,r=0*e.frameCount+.001*a.zOffset,i=a.x+e.map(e.noise(n,s,r),0,1,-.25,I),o=a.y+e.map(e.noise(n,s,r+214),0,1,-.25,I);e.line(a.x,a.y,i,o),a.x=i,a.y=o}e.pop(),e.push(),e.translate(e.width/2,.25*e.height),e.textAlign(e.CENTER),e.textFont(P),e.stroke(j),e.fill(y),e.textFont(_),e.text(v,0,0),e.pop()}})})})}var F=a(6483),A=a(4586),N=a.n(A);function V(e){var t=e.images,a=e.height,s=e.className,r=(0,g.useRouter)().basePath;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(F.Z,{className:l()(N().carousel,s),style:{paddingBottom:a},interval:null,children:t.map((function(e,t){return(0,n.jsxs)(F.Z.Item,{className:N().carouselItem,children:[(0,n.jsx)("div",{className:N().carouselImage,style:{backgroundImage:"url('".concat(r,"/").concat(e.src,"')")}}),e.caption&&(0,n.jsx)(F.Z.Caption,{className:N().carouselCaption,children:(0,n.jsx)("p",{children:e.caption})})]},t)}))})})}V.defaultProps={height:"75%"};var T=V;var O=function(e){var t=e.className,a=[{src:"images/home-gallery/001_still_videoinstallation.jpg",caption:(0,n.jsx)(n.Fragment,{children:"Beyond Human Perception"})},{src:"images/home-gallery/01.png",caption:(0,n.jsx)(n.Fragment,{children:"Quaran.tiles"})},{src:"images/home-gallery/ColorCompare (1).png",caption:(0,n.jsx)(n.Fragment,{children:"Affective, Hand-Sculpted Glyph Forms for Engaging and Expressive Scientific Visualization"})},{src:"images/home-gallery/FRANCIS GALTON (Widest and Tallest) 8.jpg",caption:(0,n.jsx)(n.Fragment,{children:"Shifting winds: Gendered structures of academic mentorship"})},{src:"images/home-gallery/image002.jpg",caption:(0,n.jsx)(n.Fragment,{children:"RAY"})},{src:"images/home-gallery/metoo-reports-lg.png",caption:(0,n.jsx)(n.Fragment,{children:"#MeToo Anti-Network"})},{src:"images/home-gallery/Mingling.png",caption:(0,n.jsx)(n.Fragment,{children:"Under the Green: Visual data storytelling the process of urban CO2 neutralization by forests"})},{src:"images/home-gallery/molecular-planets4.png",caption:(0,n.jsx)(n.Fragment,{children:"Molecular Planets"})},{src:"images/home-gallery/OctoAnemone-1.png",caption:(0,n.jsx)(n.Fragment,{children:"OctoAnemone"})},{src:"images/home-gallery/proj_robotdance-01.jpg",caption:(0,n.jsx)(n.Fragment,{children:"Presentation of Self in Machine Life"})},{src:"images/home-gallery/SiftingStrands-0.png",caption:(0,n.jsx)(n.Fragment,{children:"Sifting Strands"})},{src:"images/home-gallery/skyglyphs_visap_2022-rep-images-04.png",caption:(0,n.jsx)(n.Fragment,{children:"Skyglyphs"})},{src:"images/home-gallery/SoftVoss-1.png",caption:(0,n.jsx)(n.Fragment,{children:"SoftVoss"})}];return(0,n.jsx)(T,{className:t,images:a,height:"56.03%"})};function Z(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(c.default,{children:[(0,n.jsx)("title",{children:"VISAP23"}),(0,n.jsx)("meta",{name:"description",content:"VISAP is a mini-conference and exhibition that showcases and discusses works at the intersection of data visualization, art and design."}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)(m,{}),(0,n.jsx)(s.Z,{children:(0,n.jsx)(r.Z,{children:(0,n.jsxs)(i.Z,{sm:{span:12,offset:0},md:{span:10,offset:1},lg:{span:8,offset:2},xl:{span:8,offset:2},className:l()("mb-5"),children:[(0,n.jsx)(E,{}),(0,n.jsx)("h4",{className:l()("mb-3"),children:"Melbourne (VIC), Australia, 22\u201427 October 2023"}),(0,n.jsxs)("h5",{className:l()("mt-4"),children:["The theme for VISAP2023 is ",(0,n.jsx)("strong",{children:"Perpetual Presence"})]}),(0,n.jsxs)("p",{children:["The VIS Arts Program (VISAP) is a mini-conference and exhibition in the"," ",(0,n.jsx)("a",{href:"https://ieeevis.org/year/2023/welcome",children:"IEEE VIS conference"})," program where visualization researchers, designers, and artists come together to showcase and discuss works at the intersection of data visualization, art and design. together to showcase and discuss works at the intersection of data visualization, art and design. It links artists, practitioners, data scientists, and theoreticians, in order to foster discussion and collaboration between fields of research and practice."]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("strong",{children:"The theme for VISAP\u201923 is \u201cPerpetual Presence\u201d."})," Data is all around us, a perpetual and ubiquitous digital stream of meaning that permeates throughout the ambient informatic which backgrounds our societies. Perpetual Presence acknowledges the transformative potential of data as influencing cultural, economical and political landscapes. If \u2018presence\u2019 is a state of being, of becoming, and of responding to the intersectionality of realities, then Perpetual Presence is an aesthetic in which data abundantly flourishes in ways that extend our understanding of the world."]}),(0,n.jsx)("p",{children:"VISAP\u201923 invites research papers, pictorials, and artwork submissions for presentation in two interrelated tracks during the conference and exhibition in October 2023. We seek original work examining new aesthetics and critical cultures at the intersection of art, science and technology that respond to the theme of perpetual presence."}),(0,n.jsx)("p",{children:"VISAP will be an in-person only event in 2023, in line with the broader IEEE VIS Conference. There will be an opportunity to connect with the VISAP and local artistic community via talks and/or workshops. As such, presenting artists are expected to attend in person and actively contribute to discussions. We understand this arrangement may not be suitable for some, and will review alternative arrangements."}),(0,n.jsx)("p",{children:"Accepted works will be published on the official VISAP website and in a dedicated exhibition catalogue. Papers and pictorials will be indexed in the IEEE Xplore digital library."}),(0,n.jsx)("p",{children:"The submission deadline for all tracks is in June 2023. Details on how to submit a paper, pictorial or artwork will follow soon."}),(0,n.jsxs)("p",{children:["Contact: ",(0,n.jsx)("a",{href:"mailto:art@ieeevis.org",children:"art@ieeevis.org"})," "]}),(0,n.jsxs)("p",{children:["Twitter: ",(0,n.jsx)("a",{href:"https://twitter.com/visapnet",children:"https://twitter.com/visapnet"})]}),(0,n.jsx)(O,{})]})})})]})}},4586:function(e){e.exports={carousel:"CarouselComp_carousel__QNdCS",carouselItem:"CarouselComp_carouselItem__kSOlo",carouselImage:"CarouselComp_carouselImage__RMjcQ",carouselCaption:"CarouselComp_carouselCaption__j5ypm"}},5897:function(e){e.exports={headerBootstrap:"Header_headerBootstrap__vQ98k",logo:"Header_logo__gECVj"}}},function(e){e.O(0,[622,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
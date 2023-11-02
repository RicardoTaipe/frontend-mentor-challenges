(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[828],{6828:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return components_AdviceGenerator}});var r=i(5893),n=i(7294),a=i(5675),o=i.n(a),s={src:"/_next/static/media/icon-dice.b81fefcd.svg",height:24,width:24,blurWidth:0,blurHeight:0},l={src:"/_next/static/media/pattern-divider-mobile.f74c7460.svg",height:16,width:295,blurWidth:0,blurHeight:0},components_AdviceGenerator=function(){var e;let[t,i]=(0,n.useState)({slip:{id:71,advice:"It is easy to sit up and take notice, what's difficult is getting up and taking action."}}),[a,u]=(0,n.useState)(!1),[d,c]=(0,n.useState)(null),[f,g]=(0,n.useState)(!1);function removeAnimation(){g(!0),setTimeout(()=>g(!1),1e3)}(0,n.useEffect)(()=>{removeAnimation()},[]);let fetchData=async()=>{try{u(!0);let e=await fetch("https://api.adviceslip.com/advice"),t=await e.json();i(t),removeAnimation()}catch(e){c(e.message)}finally{u(!1)}},m=null!=d?d:null==t?void 0:null===(e=t.slip)||void 0===e?void 0:e.advice;return(0,r.jsxs)("div",{className:"text-center relative rounded-2xl w-[540px] max-w-[90%] px-4 bg-dark-grayish-blue md:px-6 md:top-9 -translate-y-12",children:[(0,r.jsxs)("h1",{className:"text-neon-green text-xs uppercase mb-6 mt-10 md:mt-12",children:["Advice # ",d?"":t.slip.id]}),(0,r.jsx)("q",{role:"quote",className:"text-light-cyan text-2xl font-extrabold md:text-3xl"+" ".concat(f?"animate-[fadeIn_1s_ease-in-out]":""),children:m}),(0,r.jsxs)("picture",{className:"flex justify-center items-center mt-6 mb-16 md:mt-10 md:mb-14",children:[(0,r.jsx)("source",{media:"(min-width: 376px)",srcSet:"./images/pattern-divider-desktop.svg"}),(0,r.jsx)(o(),{src:l,alt:"divider",className:"w-full"})]}),(0,r.jsx)("button",{title:"Get a new quote",onClick:()=>fetchData(),disabled:a,className:"border-none rounded-full bg-neon-green absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 [@media(any-hover:hover){&:hover}]:shadow-3xl transition-all duration-200",children:(0,r.jsx)(o(),{src:s,alt:"icon"})})]})}},3271:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return p}});let r=i(8754),n=i(1757),a=n._(i(7294)),o=r._(i(3935)),s=r._(i(9201)),l=i(3914),u=i(5494),d=i(869);i(1905);let c=i(1823),f=r._(i(4545)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(e,t,i,r,n,a){let o=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===o)return;e["data-loaded-src"]=o;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,n=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}})}function getDynamicProps(e){let[t,i]=a.version.split(".",2),r=parseInt(t,10),n=parseInt(i,10);return r>18||18===r&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let m=(0,a.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:n,height:o,width:s,decoding:l,className:u,style:d,fetchPriority:c,placeholder:f,loading:g,unoptimized:m,fill:p,onLoadRef:h,onLoadingCompleteRef:v,setBlurComplete:b,setShowAltText:y,onLoad:w,onError:x,...S}=e;return a.default.createElement("img",{...S,...getDynamicProps(c),loading:g,width:s,height:o,decoding:l,"data-nimg":p?"fill":"1",className:u,style:d,sizes:n,srcSet:r,src:i,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(x&&(e.src=e.src),e.complete&&handleLoading(e,f,h,v,b,m))},[i,f,h,v,b,x,m,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,h,v,b,m)},onError:e=>{y(!0),"empty"!==f&&b(!0),x&&x(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...getDynamicProps(i.fetchPriority)};return t&&o.default.preload?(o.default.preload(i.src,r),null):a.default.createElement(s.default,null,a.default.createElement("link",{key:"__nimg-"+i.src+i.srcSet+i.sizes,rel:"preload",href:i.srcSet?void 0:i.src,...r}))}let p=(0,a.forwardRef)((e,t)=>{let i=(0,a.useContext)(c.RouterContext),r=(0,a.useContext)(d.ImageConfigContext),n=(0,a.useMemo)(()=>{let e=g||r||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:o,onLoadingComplete:s}=e,p=(0,a.useRef)(o);(0,a.useEffect)(()=>{p.current=o},[o]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[v,b]=(0,a.useState)(!1),[y,w]=(0,a.useState)(!1),{props:x,meta:S}=(0,l.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:v,showAltText:y});return a.default.createElement(a.default.Fragment,null,a.default.createElement(m,{...x,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:w,ref:t}),S.priority?a.default.createElement(ImagePreload,{isAppRouter:!i,imgAttributes:x}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),i(1905);let r=i(2393),n=i(5494);function isStaticRequire(e){return void 0!==e.default}function isStaticImageData(e){return void 0!==e.src}function isStaticImport(e){return"object"==typeof e&&(isStaticRequire(e)||isStaticImageData(e))}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getWidths(e,t,i){let{deviceSizes:r,allSizes:n}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let a=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:a,kind:"x"}}function generateImgAttrs(e){let{config:t,src:i,unoptimized:r,width:n,quality:a,sizes:o,loader:s}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=getWidths(t,n,o),d=l.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:l.map((e,r)=>s({config:t,src:i,quality:a,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:s({config:t,src:i,quality:a,width:l[d]})}}function getImgProps(e,t){let i,a,o,{src:s,sizes:l,unoptimized:u=!1,priority:d=!1,loading:c,className:f,quality:g,width:m,height:p,fill:h=!1,style:v,onLoad:b,onLoadingComplete:y,placeholder:w="empty",blurDataURL:x,fetchPriority:S,layout:_,objectFit:I,objectPosition:j,lazyBoundary:P,lazyRoot:C,...E}=e,{imgConf:z,showAltText:k,blurComplete:O,defaultLoader:R}=t,A=z||n.imageConfigDefault;if("allSizes"in A)i=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);i={...A,allSizes:e,deviceSizes:t}}let D=E.loader||R;delete E.loader,delete E.srcSet;let M="__next_img_default"in D;if(M){if("custom"===i.loader)throw Error('Image with src "'+s+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:i,...r}=t;return e(r)}}if(_){"fill"===_&&(h=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[_];t&&!l&&(l=t)}let N="",L=getInt(m),G=getInt(p);if(isStaticImport(s)){let e=isStaticRequire(s)?s.default:s;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,o=e.blurHeight,x=x||e.blurDataURL,N=e.src,!h){if(L||G){if(L&&!G){let t=L/e.width;G=Math.round(e.height*t)}else if(!L&&G){let t=G/e.height;L=Math.round(e.width*t)}}else L=e.width,G=e.height}}let W=!d&&("lazy"===c||void 0===c);(!(s="string"==typeof s?s:N)||s.startsWith("data:")||s.startsWith("blob:"))&&(u=!0,W=!1),i.unoptimized&&(u=!0),M&&s.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(u=!0),d&&(S="high");let B=getInt(g),q=Object.assign(h?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:j}:{},k?{}:{color:"transparent"},v),F=O||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:L,heightInt:G,blurWidth:a,blurHeight:o,blurDataURL:x||"",objectFit:q.objectFit})+'")':'url("'+w+'")',T=F?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:F}:{},U=generateImgAttrs({config:i,src:s,unoptimized:u,width:L,quality:B,sizes:l,loader:D}),H={...E,loading:W?"lazy":c,fetchPriority:S,width:L,height:G,decoding:"async",className:f,style:{...q,...T},sizes:U.sizes,srcSet:U.srcSet,src:U.src},V={unoptimized:u,priority:d,placeholder:w,fill:h};return{props:H,meta:V}}},2393:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:n,blurDataURL:a,objectFit:o}=e,s=r?40*r:t,l=n?40*n:i,u=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+a+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},645:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return l}});let r=i(8754),n=i(3914),a=i(1905),o=i(3271),s=r._(i(4545)),unstable_getImgProps=e=>{(0,a.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},l=o.Image},4545:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:i,width:r,quality:n}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),defaultLoader.__next_img_default=!0;let i=defaultLoader},5675:function(e,t,i){e.exports=i(645)}}]);
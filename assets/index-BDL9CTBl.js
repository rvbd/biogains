var En=Object.defineProperty;var xn=(s,t,e)=>t in s?En(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Qt=(s,t,e)=>xn(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=e(i);fetch(i.href,a)}})();/*!
 * reveal.js 5.2.0
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2011-2024 Hakim El Hattab, https://hakim.se
 */const wt=(s,t)=>{for(let e in t)s[e]=t[e];return s},A=(s,t)=>Array.from(s.querySelectorAll(t)),te=(s,t,e)=>{e?s.classList.add(t):s.classList.remove(t)},yt=s=>{if(typeof s=="string"){if(s==="null")return null;if(s==="true")return!0;if(s==="false")return!1;if(s.match(/^-?[\d\.]+$/))return parseFloat(s)}return s},ct=(s,t)=>{s.style.transform=t},Dt=(s,t)=>{let e=s.matches||s.matchesSelector||s.msMatchesSelector;return!(!e||!e.call(s,t))},G=(s,t)=>{if(typeof s.closest=="function")return s.closest(t);for(;s;){if(Dt(s,t))return s;s=s.parentNode}return null},an=s=>{let t=(s=s||document.documentElement).requestFullscreen||s.webkitRequestFullscreen||s.webkitRequestFullScreen||s.mozRequestFullScreen||s.msRequestFullscreen;t&&t.apply(s)},ae=s=>{let t=document.createElement("style");return t.type="text/css",s&&s.length>0&&(t.styleSheet?t.styleSheet.cssText=s:t.appendChild(document.createTextNode(s))),document.head.appendChild(t),t},Fe=()=>{let s={};location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi,(t=>{s[t.split("=").shift()]=t.split("=").pop()}));for(let t in s){let e=s[t];s[t]=yt(unescape(e))}return s.dependencies!==void 0&&delete s.dependencies,s},An={mp4:"video/mp4",m4a:"video/mp4",ogv:"video/ogg",mpeg:"video/mpeg",webm:"video/webm"},sn=navigator.userAgent,kt=/(iphone|ipod|ipad|android)/gi.test(sn)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,rn=/android/gi.test(sn);var Rn=(function(s){if(s){var t=function(f){return[].slice.call(f)},e=3,n=[],i=null,a="requestAnimationFrame"in s?function(){s.cancelAnimationFrame(i),i=s.requestAnimationFrame((function(){return l(n.filter((function(f){return f.dirty&&f.active})))}))}:function(){},r=function(f){return function(){n.forEach((function(I){return I.dirty=f})),a()}},l=function(f){f.filter((function(N){return!N.styleComputed})).forEach((function(N){N.styleComputed=u(N)})),f.filter(g).forEach(v);var I=f.filter(h);I.forEach(c),I.forEach((function(N){v(N),o(N)})),I.forEach(L)},o=function(f){return f.dirty=0},c=function(f){f.availableWidth=f.element.parentNode.clientWidth,f.currentWidth=f.element.scrollWidth,f.previousFontSize=f.currentFontSize,f.currentFontSize=Math.min(Math.max(f.minSize,f.availableWidth/f.currentWidth*f.previousFontSize),f.maxSize),f.whiteSpace=f.multiLine&&f.currentFontSize===f.minSize?"normal":"nowrap"},h=function(f){return f.dirty!==2||f.dirty===2&&f.element.parentNode.clientWidth!==f.availableWidth},u=function(f){var I=s.getComputedStyle(f.element,null);return f.currentFontSize=parseFloat(I.getPropertyValue("font-size")),f.display=I.getPropertyValue("display"),f.whiteSpace=I.getPropertyValue("white-space"),!0},g=function(f){var I=!1;return!f.preStyleTestCompleted&&(/inline-/.test(f.display)||(I=!0,f.display="inline-block"),f.whiteSpace!=="nowrap"&&(I=!0,f.whiteSpace="nowrap"),f.preStyleTestCompleted=!0,I)},v=function(f){f.element.style.whiteSpace=f.whiteSpace,f.element.style.display=f.display,f.element.style.fontSize=f.currentFontSize+"px"},L=function(f){f.element.dispatchEvent(new CustomEvent("fit",{detail:{oldValue:f.previousFontSize,newValue:f.currentFontSize,scaleFactor:f.currentFontSize/f.previousFontSize}}))},p=function(f,I){return function(){f.dirty=I,f.active&&a()}},F=function(f){return function(){n=n.filter((function(I){return I.element!==f.element})),f.observeMutations&&f.observer.disconnect(),f.element.style.whiteSpace=f.originalStyle.whiteSpace,f.element.style.display=f.originalStyle.display,f.element.style.fontSize=f.originalStyle.fontSize}},x=function(f){return function(){f.active||(f.active=!0,a())}},q=function(f){return function(){return f.active=!1}},X=function(f){f.observeMutations&&(f.observer=new MutationObserver(p(f,1)),f.observer.observe(f.element,f.observeMutations))},M={minSize:16,maxSize:512,multiLine:!0,observeMutations:"MutationObserver"in s&&{subtree:!0,childList:!0,characterData:!0}},R=null,E=function(){s.clearTimeout(R),R=s.setTimeout(r(2),P.observeWindowDelay)},B=["resize","orientationchange"];return Object.defineProperty(P,"observeWindow",{set:function(f){var I="".concat(f?"add":"remove","EventListener");B.forEach((function(N){s[I](N,E)}))}}),P.observeWindow=!0,P.observeWindowDelay=100,P.fitAll=r(e),P}function U(f,I){var N=Object.assign({},M,I),O=f.map((function(_){var V=Object.assign({},N,{element:_,active:!0});return(function(K){K.originalStyle={whiteSpace:K.element.style.whiteSpace,display:K.element.style.display,fontSize:K.element.style.fontSize},X(K),K.newbie=!0,K.dirty=!0,n.push(K)})(V),{element:_,fit:p(V,e),unfreeze:x(V),freeze:q(V),unsubscribe:F(V)}}));return a(),O}function P(f){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return typeof f=="string"?U(t(document.querySelectorAll(f)),I):U([f],I)[0]}})(typeof window>"u"?null:window);let Tn=class{constructor(t){this.Reveal=t,this.startEmbeddedIframe=this.startEmbeddedIframe.bind(this)}shouldPreload(t){if(this.Reveal.isScrollView())return!0;let e=this.Reveal.getConfig().preloadIframes;return typeof e!="boolean"&&(e=t.hasAttribute("data-preload")),e}load(t,e={}){t.style.display=this.Reveal.getConfig().display,A(t,"img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((i=>{(i.tagName!=="IFRAME"||this.shouldPreload(i))&&(i.setAttribute("src",i.getAttribute("data-src")),i.setAttribute("data-lazy-loaded",""),i.removeAttribute("data-src"))})),A(t,"video, audio").forEach((i=>{let a=0;A(i,"source[data-src]").forEach((r=>{r.setAttribute("src",r.getAttribute("data-src")),r.removeAttribute("data-src"),r.setAttribute("data-lazy-loaded",""),a+=1})),kt&&i.tagName==="VIDEO"&&i.setAttribute("playsinline",""),a>0&&i.load()}));let n=t.slideBackgroundElement;if(n){n.style.display="block";let i=t.slideBackgroundContentElement,a=t.getAttribute("data-background-iframe");if(n.hasAttribute("data-loaded")===!1){n.setAttribute("data-loaded","true");let l=t.getAttribute("data-background-image"),o=t.getAttribute("data-background-video"),c=t.hasAttribute("data-background-video-loop"),h=t.hasAttribute("data-background-video-muted");if(l)/^data:/.test(l.trim())?i.style.backgroundImage=`url(${l.trim()})`:i.style.backgroundImage=l.split(",").map((u=>`url(${((g="")=>encodeURI(g).replace(/%5B/g,"[").replace(/%5D/g,"]").replace(/[!'()*]/g,(v=>`%${v.charCodeAt(0).toString(16).toUpperCase()}`)))(decodeURI(u.trim()))})`)).join(",");else if(o){let u=document.createElement("video");c&&u.setAttribute("loop",""),(h||this.Reveal.isSpeakerNotes())&&(u.muted=!0),kt&&(u.muted=!0,u.setAttribute("playsinline","")),o.split(",").forEach((g=>{const v=document.createElement("source");v.setAttribute("src",g);let L=((p="")=>An[p.split(".").pop()])(g);L&&v.setAttribute("type",L),u.appendChild(v)})),i.appendChild(u)}else if(a&&e.excludeIframes!==!0){let u=document.createElement("iframe");u.setAttribute("allowfullscreen",""),u.setAttribute("mozallowfullscreen",""),u.setAttribute("webkitallowfullscreen",""),u.setAttribute("allow","autoplay"),u.setAttribute("data-src",a),u.style.width="100%",u.style.height="100%",u.style.maxHeight="100%",u.style.maxWidth="100%",i.appendChild(u)}}let r=i.querySelector("iframe[data-src]");r&&this.shouldPreload(n)&&!/autoplay=(1|true|yes)/gi.test(a)&&r.getAttribute("src")!==a&&r.setAttribute("src",a)}this.layout(t)}layout(t){Array.from(t.querySelectorAll(".r-fit-text")).forEach((e=>{Rn(e,{minSize:24,maxSize:.8*this.Reveal.getConfig().height,observeMutations:!1,observeWindow:!1})}))}unload(t){t.style.display="none";let e=this.Reveal.getSlideBackground(t);e&&(e.style.display="none",A(e,"iframe[src]").forEach((n=>{n.removeAttribute("src")}))),A(t,"video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")})),A(t,"video[data-lazy-loaded] source[src], audio source[src]").forEach((n=>{n.setAttribute("data-src",n.getAttribute("src")),n.removeAttribute("src")}))}formatEmbeddedContent(){let t=(e,n,i)=>{A(this.Reveal.getSlidesElement(),"iframe["+e+'*="'+n+'"]').forEach((a=>{let r=a.getAttribute(e);r&&r.indexOf(i)===-1&&a.setAttribute(e,r+(/\?/.test(r)?"&":"?")+i)}))};t("src","youtube.com/embed/","enablejsapi=1"),t("data-src","youtube.com/embed/","enablejsapi=1"),t("src","player.vimeo.com/","api=1"),t("data-src","player.vimeo.com/","api=1")}startEmbeddedContent(t){if(t){const e=this.Reveal.isSpeakerNotes();A(t,'img[src$=".gif"]').forEach((n=>{n.setAttribute("src",n.getAttribute("src"))})),A(t,"video, audio").forEach((n=>{if(G(n,".fragment")&&!G(n,".fragment.visible"))return;let i=this.Reveal.getConfig().autoPlayMedia;if(typeof i!="boolean"&&(i=n.hasAttribute("data-autoplay")||!!G(n,".slide-background")),i&&typeof n.play=="function"){if(e&&!n.muted)return;if(n.readyState>1)this.startEmbeddedMedia({target:n});else if(kt){let a=n.play();a&&typeof a.catch=="function"&&n.controls===!1&&a.catch((()=>{n.controls=!0,n.addEventListener("play",(()=>{n.controls=!1}))}))}else n.removeEventListener("loadeddata",this.startEmbeddedMedia),n.addEventListener("loadeddata",this.startEmbeddedMedia)}})),e||(A(t,"iframe[src]").forEach((n=>{G(n,".fragment")&&!G(n,".fragment.visible")||this.startEmbeddedIframe({target:n})})),A(t,"iframe[data-src]").forEach((n=>{G(n,".fragment")&&!G(n,".fragment.visible")||n.getAttribute("src")!==n.getAttribute("data-src")&&(n.removeEventListener("load",this.startEmbeddedIframe),n.addEventListener("load",this.startEmbeddedIframe),n.setAttribute("src",n.getAttribute("data-src")))})))}}startEmbeddedMedia(t){let e=!!G(t.target,"html"),n=!!G(t.target,".present");e&&n&&(t.target.paused||t.target.ended)&&(t.target.currentTime=0,t.target.play()),t.target.removeEventListener("loadeddata",this.startEmbeddedMedia)}startEmbeddedIframe(t){let e=t.target;if(e&&e.contentWindow){let n=!!G(t.target,"html"),i=!!G(t.target,".present");if(n&&i){let a=this.Reveal.getConfig().autoPlayMedia;typeof a!="boolean"&&(a=e.hasAttribute("data-autoplay")||!!G(e,".slide-background")),/youtube\.com\/embed\//.test(e.getAttribute("src"))&&a?e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*"):/player\.vimeo\.com\//.test(e.getAttribute("src"))&&a?e.contentWindow.postMessage('{"method":"play"}',"*"):e.contentWindow.postMessage("slide:start","*")}}}stopEmbeddedContent(t,e={}){e=wt({unloadIframes:!0},e),t&&t.parentNode&&(A(t,"video, audio").forEach((n=>{n.hasAttribute("data-ignore")||typeof n.pause!="function"||(n.setAttribute("data-paused-by-reveal",""),n.pause())})),A(t,"iframe").forEach((n=>{n.contentWindow&&n.contentWindow.postMessage("slide:stop","*"),n.removeEventListener("load",this.startEmbeddedIframe)})),A(t,'iframe[src*="youtube.com/embed/"]').forEach((n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})),A(t,'iframe[src*="player.vimeo.com/"]').forEach((n=>{!n.hasAttribute("data-ignore")&&n.contentWindow&&typeof n.contentWindow.postMessage=="function"&&n.contentWindow.postMessage('{"method":"pause"}',"*")})),e.unloadIframes===!0&&A(t,"iframe[data-src]").forEach((n=>{n.setAttribute("src","about:blank"),n.removeAttribute("src")})))}};const mt=".slides section",lt=".slides>section",je=".slides>section.present>section",Cn=/registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/;let Ln=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="slide-number",this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){let n="none";t.slideNumber&&!this.Reveal.isPrintView()&&(t.showSlideNumber==="all"||t.showSlideNumber==="speaker"&&this.Reveal.isSpeakerNotes())&&(n="block"),this.element.style.display=n}update(){this.Reveal.getConfig().slideNumber&&this.element&&(this.element.innerHTML=this.getSlideNumber())}getSlideNumber(t=this.Reveal.getCurrentSlide()){let e,n=this.Reveal.getConfig(),i="h.v";if(typeof n.slideNumber=="function")e=n.slideNumber(t);else{typeof n.slideNumber=="string"&&(i=n.slideNumber),/c/.test(i)||this.Reveal.getHorizontalSlides().length!==1||(i="c");let r=t&&t.dataset.visibility==="uncounted"?0:1;switch(e=[],i){case"c":e.push(this.Reveal.getSlidePastCount(t)+r);break;case"c/t":e.push(this.Reveal.getSlidePastCount(t)+r,"/",this.Reveal.getTotalSlides());break;default:let l=this.Reveal.getIndices(t);e.push(l.h+r);let o=i==="h/v"?"/":".";this.Reveal.isVerticalSlide(t)&&e.push(o,l.v+1)}}let a="#"+this.Reveal.location.getHash(t);return this.formatNumber(e[0],e[1],e[2],a)}formatNumber(t,e,n,i="#"+this.Reveal.location.getHash()){return typeof n!="number"||isNaN(n)?`<a href="${i}">
					<span class="slide-number-a">${t}</span>
					</a>`:`<a href="${i}">
					<span class="slide-number-a">${t}</span>
					<span class="slide-number-delimiter">${e}</span>
					<span class="slide-number-b">${n}</span>
					</a>`}destroy(){this.element.remove()}},In=class{constructor(t){this.Reveal=t,this.onInput=this.onInput.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this)}render(){this.element=document.createElement("div"),this.element.className="jump-to-slide",this.jumpInput=document.createElement("input"),this.jumpInput.type="text",this.jumpInput.className="jump-to-slide-input",this.jumpInput.placeholder="Jump to slide",this.jumpInput.addEventListener("input",this.onInput),this.jumpInput.addEventListener("keydown",this.onKeyDown),this.jumpInput.addEventListener("blur",this.onBlur),this.element.appendChild(this.jumpInput)}show(){this.indicesOnShow=this.Reveal.getIndices(),this.Reveal.getRevealElement().appendChild(this.element),this.jumpInput.focus()}hide(){this.isVisible()&&(this.element.remove(),this.jumpInput.value="",clearTimeout(this.jumpTimeout),delete this.jumpTimeout)}isVisible(){return!!this.element.parentNode}jump(){clearTimeout(this.jumpTimeout),delete this.jumpTimeout;let t,e=this.jumpInput.value.trim("");if(/^\d+$/.test(e)){const n=this.Reveal.getConfig().slideNumber;if(n==="c"||n==="c/t"){const i=this.Reveal.getSlides()[parseInt(e,10)-1];i&&(t=this.Reveal.getIndices(i))}}return t||(/^\d+\.\d+$/.test(e)&&(e=e.replace(".","/")),t=this.Reveal.location.getIndicesFromHash(e,{oneBasedIndex:!0})),!t&&/\S+/i.test(e)&&e.length>1&&(t=this.search(e)),t&&e!==""?(this.Reveal.slide(t.h,t.v,t.f),!0):(this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),!1)}jumpAfter(t){clearTimeout(this.jumpTimeout),this.jumpTimeout=setTimeout((()=>this.jump()),t)}search(t){const e=new RegExp("\\b"+t.trim()+"\\b","i"),n=this.Reveal.getSlides().find((i=>e.test(i.innerText)));return n?this.Reveal.getIndices(n):null}cancel(){this.Reveal.slide(this.indicesOnShow.h,this.indicesOnShow.v,this.indicesOnShow.f),this.hide()}confirm(){this.jump(),this.hide()}destroy(){this.jumpInput.removeEventListener("input",this.onInput),this.jumpInput.removeEventListener("keydown",this.onKeyDown),this.jumpInput.removeEventListener("blur",this.onBlur),this.element.remove()}onKeyDown(t){t.keyCode===13?this.confirm():t.keyCode===27&&(this.cancel(),t.stopImmediatePropagation())}onInput(t){this.jumpAfter(200)}onBlur(){setTimeout((()=>this.hide()),1)}};const ee=s=>{let t=s.match(/^#([0-9a-f]{3})$/i);if(t&&t[1])return t=t[1],{r:17*parseInt(t.charAt(0),16),g:17*parseInt(t.charAt(1),16),b:17*parseInt(t.charAt(2),16)};let e=s.match(/^#([0-9a-f]{6})$/i);if(e&&e[1])return e=e[1],{r:parseInt(e.slice(0,2),16),g:parseInt(e.slice(2,4),16),b:parseInt(e.slice(4,6),16)};let n=s.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);if(n)return{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)};let i=s.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10),a:parseFloat(i[4])}:null};let Pn=class{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="backgrounds",this.Reveal.getRevealElement().appendChild(this.element)}create(){this.element.innerHTML="",this.element.classList.add("no-transition"),this.Reveal.getHorizontalSlides().forEach((t=>{let e=this.createBackground(t,this.element);A(t,"section").forEach((n=>{this.createBackground(n,e),e.classList.add("stack")}))})),this.Reveal.getConfig().parallaxBackgroundImage?(this.element.style.backgroundImage='url("'+this.Reveal.getConfig().parallaxBackgroundImage+'")',this.element.style.backgroundSize=this.Reveal.getConfig().parallaxBackgroundSize,this.element.style.backgroundRepeat=this.Reveal.getConfig().parallaxBackgroundRepeat,this.element.style.backgroundPosition=this.Reveal.getConfig().parallaxBackgroundPosition,setTimeout((()=>{this.Reveal.getRevealElement().classList.add("has-parallax-background")}),1)):(this.element.style.backgroundImage="",this.Reveal.getRevealElement().classList.remove("has-parallax-background"))}createBackground(t,e){let n=document.createElement("div");n.className="slide-background "+t.className.replace(/present|past|future/,"");let i=document.createElement("div");return i.className="slide-background-content",n.appendChild(i),e.appendChild(n),t.slideBackgroundElement=n,t.slideBackgroundContentElement=i,this.sync(t),n}sync(t){const e=t.slideBackgroundElement,n=t.slideBackgroundContentElement,i={background:t.getAttribute("data-background"),backgroundSize:t.getAttribute("data-background-size"),backgroundImage:t.getAttribute("data-background-image"),backgroundVideo:t.getAttribute("data-background-video"),backgroundIframe:t.getAttribute("data-background-iframe"),backgroundColor:t.getAttribute("data-background-color"),backgroundGradient:t.getAttribute("data-background-gradient"),backgroundRepeat:t.getAttribute("data-background-repeat"),backgroundPosition:t.getAttribute("data-background-position"),backgroundTransition:t.getAttribute("data-background-transition"),backgroundOpacity:t.getAttribute("data-background-opacity")},a=t.hasAttribute("data-preload");t.classList.remove("has-dark-background"),t.classList.remove("has-light-background"),e.removeAttribute("data-loaded"),e.removeAttribute("data-background-hash"),e.removeAttribute("data-background-size"),e.removeAttribute("data-background-transition"),e.style.backgroundColor="",n.style.backgroundSize="",n.style.backgroundRepeat="",n.style.backgroundPosition="",n.style.backgroundImage="",n.style.opacity="",n.innerHTML="",i.background&&(/^(http|file|\/\/)/gi.test(i.background)||/\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(i.background)?t.setAttribute("data-background-image",i.background):e.style.background=i.background),(i.background||i.backgroundColor||i.backgroundGradient||i.backgroundImage||i.backgroundVideo||i.backgroundIframe)&&e.setAttribute("data-background-hash",i.background+i.backgroundSize+i.backgroundImage+i.backgroundVideo+i.backgroundIframe+i.backgroundColor+i.backgroundGradient+i.backgroundRepeat+i.backgroundPosition+i.backgroundTransition+i.backgroundOpacity),i.backgroundSize&&e.setAttribute("data-background-size",i.backgroundSize),i.backgroundColor&&(e.style.backgroundColor=i.backgroundColor),i.backgroundGradient&&(e.style.backgroundImage=i.backgroundGradient),i.backgroundTransition&&e.setAttribute("data-background-transition",i.backgroundTransition),a&&e.setAttribute("data-preload",""),i.backgroundSize&&(n.style.backgroundSize=i.backgroundSize),i.backgroundRepeat&&(n.style.backgroundRepeat=i.backgroundRepeat),i.backgroundPosition&&(n.style.backgroundPosition=i.backgroundPosition),i.backgroundOpacity&&(n.style.opacity=i.backgroundOpacity);const r=this.getContrastClass(t);typeof r=="string"&&t.classList.add(r)}getContrastClass(t){const e=t.slideBackgroundElement;let n=t.getAttribute("data-background-color");if(!n||!ee(n)){let a=window.getComputedStyle(e);a&&a.backgroundColor&&(n=a.backgroundColor)}if(n){const a=ee(n);if(a&&a.a!==0)return typeof(i=n)=="string"&&(i=ee(i)),(i?(299*i.r+587*i.g+114*i.b)/1e3:null)<128?"has-dark-background":"has-light-background"}var i;return null}bubbleSlideContrastClassToElement(t,e){["has-light-background","has-dark-background"].forEach((n=>{t.classList.contains(n)?e.classList.add(n):e.classList.remove(n)}),this)}update(t=!1){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide(),i=this.Reveal.getIndices(),a=null,r=e.rtl?"future":"past",l=e.rtl?"past":"future";if(Array.from(this.element.childNodes).forEach(((c,h)=>{c.classList.remove("past","present","future"),h<i.h?c.classList.add(r):h>i.h?c.classList.add(l):(c.classList.add("present"),a=c),(t||h===i.h)&&A(c,".slide-background").forEach(((u,g)=>{u.classList.remove("past","present","future");const v=typeof i.v=="number"?i.v:0;g<v?u.classList.add("past"):g>v?u.classList.add("future"):(u.classList.add("present"),h===i.h&&(a=u))}))})),this.previousBackground&&!this.previousBackground.closest("body")&&(this.previousBackground=null),a&&this.previousBackground){let c=this.previousBackground.getAttribute("data-background-hash"),h=a.getAttribute("data-background-hash");if(h&&h===c&&a!==this.previousBackground){this.element.classList.add("no-transition");const u=a.querySelector("video"),g=this.previousBackground.querySelector("video");if(u&&g){const v=u.parentNode;g.parentNode.appendChild(u),v.appendChild(g)}}}const o=a!==this.previousBackground;if(o&&this.previousBackground&&this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground,{unloadIframes:!this.Reveal.slideContent.shouldPreload(this.previousBackground)}),o&&a){this.Reveal.slideContent.startEmbeddedContent(a);let c=a.querySelector(".slide-background-content");if(c){let h=c.style.backgroundImage||"";/\.gif/i.test(h)&&(c.style.backgroundImage="",window.getComputedStyle(c).opacity,c.style.backgroundImage=h)}this.previousBackground=a}n&&this.bubbleSlideContrastClassToElement(n,this.Reveal.getRevealElement()),setTimeout((()=>{this.element.classList.remove("no-transition")}),10)}updateParallax(){let t=this.Reveal.getIndices();if(this.Reveal.getConfig().parallaxBackgroundImage){let e,n,i=this.Reveal.getHorizontalSlides(),a=this.Reveal.getVerticalSlides(),r=this.element.style.backgroundSize.split(" ");r.length===1?e=n=parseInt(r[0],10):(e=parseInt(r[0],10),n=parseInt(r[1],10));let l,o,c=this.element.offsetWidth,h=i.length;l=typeof this.Reveal.getConfig().parallaxBackgroundHorizontal=="number"?this.Reveal.getConfig().parallaxBackgroundHorizontal:h>1?(e-c)/(h-1):0,o=l*t.h*-1;let u,g,v=this.element.offsetHeight,L=a.length;u=typeof this.Reveal.getConfig().parallaxBackgroundVertical=="number"?this.Reveal.getConfig().parallaxBackgroundVertical:(n-v)/(L-1),g=L>0?u*t.v:0,this.element.style.backgroundPosition=o+"px "+-g+"px"}}destroy(){this.element.remove()}},_e=0,Nn=class{constructor(t){this.Reveal=t}run(t,e){this.reset();let n=this.Reveal.getSlides(),i=n.indexOf(e),a=n.indexOf(t);if(t&&e&&t.hasAttribute("data-auto-animate")&&e.hasAttribute("data-auto-animate")&&t.getAttribute("data-auto-animate-id")===e.getAttribute("data-auto-animate-id")&&!(i>a?e:t).hasAttribute("data-auto-animate-restart")){this.autoAnimateStyleSheet=this.autoAnimateStyleSheet||ae();let r=this.getAutoAnimateOptions(e);t.dataset.autoAnimate="pending",e.dataset.autoAnimate="pending",r.slideDirection=i>a?"forward":"backward";let l=t.style.display==="none";l&&(t.style.display=this.Reveal.getConfig().display);let o=this.getAutoAnimatableElements(t,e).map((c=>this.autoAnimateElements(c.from,c.to,c.options||{},r,_e++)));if(l&&(t.style.display="none"),e.dataset.autoAnimateUnmatched!=="false"&&this.Reveal.getConfig().autoAnimateUnmatched===!0){let c=.8*r.duration,h=.2*r.duration;this.getUnmatchedAutoAnimateElements(e).forEach((u=>{let g=this.getAutoAnimateOptions(u,r),v="unmatched";g.duration===r.duration&&g.delay===r.delay||(v="unmatched-"+_e++,o.push(`[data-auto-animate="running"] [data-auto-animate-target="${v}"] { transition: opacity ${g.duration}s ease ${g.delay}s; }`)),u.dataset.autoAnimateTarget=v}),this),o.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${c}s ease ${h}s; }`)}this.autoAnimateStyleSheet.innerHTML=o.join(""),requestAnimationFrame((()=>{this.autoAnimateStyleSheet&&(getComputedStyle(this.autoAnimateStyleSheet).fontWeight,e.dataset.autoAnimate="running")})),this.Reveal.dispatchEvent({type:"autoanimate",data:{fromSlide:t,toSlide:e,sheet:this.autoAnimateStyleSheet}})}}reset(){A(this.Reveal.getRevealElement(),'[data-auto-animate]:not([data-auto-animate=""])').forEach((t=>{t.dataset.autoAnimate=""})),A(this.Reveal.getRevealElement(),"[data-auto-animate-target]").forEach((t=>{delete t.dataset.autoAnimateTarget})),this.autoAnimateStyleSheet&&this.autoAnimateStyleSheet.parentNode&&(this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet),this.autoAnimateStyleSheet=null)}autoAnimateElements(t,e,n,i,a){t.dataset.autoAnimateTarget="",e.dataset.autoAnimateTarget=a;let r=this.getAutoAnimateOptions(e,i);n.delay!==void 0&&(r.delay=n.delay),n.duration!==void 0&&(r.duration=n.duration),n.easing!==void 0&&(r.easing=n.easing);let l=this.getAutoAnimatableProperties("from",t,n),o=this.getAutoAnimatableProperties("to",e,n);if(e.classList.contains("fragment")&&delete o.styles.opacity,n.translate!==!1||n.scale!==!1){let u=this.Reveal.getScale(),g={x:(l.x-o.x)/u,y:(l.y-o.y)/u,scaleX:l.width/o.width,scaleY:l.height/o.height};g.x=Math.round(1e3*g.x)/1e3,g.y=Math.round(1e3*g.y)/1e3,g.scaleX=Math.round(1e3*g.scaleX)/1e3,g.scaleX=Math.round(1e3*g.scaleX)/1e3;let v=n.translate!==!1&&(g.x!==0||g.y!==0),L=n.scale!==!1&&(g.scaleX!==0||g.scaleY!==0);if(v||L){let p=[];v&&p.push(`translate(${g.x}px, ${g.y}px)`),L&&p.push(`scale(${g.scaleX}, ${g.scaleY})`),l.styles.transform=p.join(" "),l.styles["transform-origin"]="top left",o.styles.transform="none"}}for(let u in o.styles){const g=o.styles[u],v=l.styles[u];g===v?delete o.styles[u]:(g.explicitValue===!0&&(o.styles[u]=g.value),v.explicitValue===!0&&(l.styles[u]=v.value))}let c="",h=Object.keys(o.styles);return h.length>0&&(l.styles.transition="none",o.styles.transition=`all ${r.duration}s ${r.easing} ${r.delay}s`,o.styles["transition-property"]=h.join(", "),o.styles["will-change"]=h.join(", "),c='[data-auto-animate-target="'+a+'"] {'+Object.keys(l.styles).map((u=>u+": "+l.styles[u]+" !important;")).join("")+'}[data-auto-animate="running"] [data-auto-animate-target="'+a+'"] {'+Object.keys(o.styles).map((u=>u+": "+o.styles[u]+" !important;")).join("")+"}"),c}getAutoAnimateOptions(t,e){let n={easing:this.Reveal.getConfig().autoAnimateEasing,duration:this.Reveal.getConfig().autoAnimateDuration,delay:0};if(n=wt(n,e),t.parentNode){let i=G(t.parentNode,"[data-auto-animate-target]");i&&(n=this.getAutoAnimateOptions(i,n))}return t.dataset.autoAnimateEasing&&(n.easing=t.dataset.autoAnimateEasing),t.dataset.autoAnimateDuration&&(n.duration=parseFloat(t.dataset.autoAnimateDuration)),t.dataset.autoAnimateDelay&&(n.delay=parseFloat(t.dataset.autoAnimateDelay)),n}getAutoAnimatableProperties(t,e,n){let i=this.Reveal.getConfig(),a={styles:[]};if(n.translate!==!1||n.scale!==!1){let l;if(typeof n.measure=="function")l=n.measure(e);else if(i.center)l=e.getBoundingClientRect();else{let o=this.Reveal.getScale();l={x:e.offsetLeft*o,y:e.offsetTop*o,width:e.offsetWidth*o,height:e.offsetHeight*o}}a.x=l.x,a.y=l.y,a.width=l.width,a.height=l.height}const r=getComputedStyle(e);return(n.styles||i.autoAnimateStyles).forEach((l=>{let o;typeof l=="string"&&(l={property:l}),l.from!==void 0&&t==="from"?o={value:l.from,explicitValue:!0}:l.to!==void 0&&t==="to"?o={value:l.to,explicitValue:!0}:(l.property==="line-height"&&(o=parseFloat(r["line-height"])/parseFloat(r["font-size"])),isNaN(o)&&(o=r[l.property])),o!==""&&(a.styles[l.property]=o)})),a}getAutoAnimatableElements(t,e){let n=(typeof this.Reveal.getConfig().autoAnimateMatcher=="function"?this.Reveal.getConfig().autoAnimateMatcher:this.getAutoAnimatePairs).call(this,t,e),i=[];return n.filter(((a,r)=>{if(i.indexOf(a.to)===-1)return i.push(a.to),!0}))}getAutoAnimatePairs(t,e){let n=[];const i="h1, h2, h3, h4, h5, h6, p, li";return this.findAutoAnimateMatches(n,t,e,"[data-id]",(a=>a.nodeName+":::"+a.getAttribute("data-id"))),this.findAutoAnimateMatches(n,t,e,i,(a=>a.nodeName+":::"+a.textContent.trim())),this.findAutoAnimateMatches(n,t,e,"img, video, iframe",(a=>a.nodeName+":::"+(a.getAttribute("src")||a.getAttribute("data-src")))),this.findAutoAnimateMatches(n,t,e,"pre",(a=>a.nodeName+":::"+a.textContent.trim())),n.forEach((a=>{Dt(a.from,i)?a.options={scale:!1}:Dt(a.from,"pre")&&(a.options={scale:!1,styles:["width","height"]},this.findAutoAnimateMatches(n,a.from,a.to,".hljs .hljs-ln-code",(r=>r.textContent),{scale:!1,styles:[],measure:this.getLocalBoundingBox.bind(this)}),this.findAutoAnimateMatches(n,a.from,a.to,".hljs .hljs-ln-numbers[data-line-number]",(r=>r.getAttribute("data-line-number")),{scale:!1,styles:["width"],measure:this.getLocalBoundingBox.bind(this)}))}),this),n}getLocalBoundingBox(t){const e=this.Reveal.getScale();return{x:Math.round(t.offsetLeft*e*100)/100,y:Math.round(t.offsetTop*e*100)/100,width:Math.round(t.offsetWidth*e*100)/100,height:Math.round(t.offsetHeight*e*100)/100}}findAutoAnimateMatches(t,e,n,i,a,r){let l={},o={};[].slice.call(e.querySelectorAll(i)).forEach(((c,h)=>{const u=a(c);typeof u=="string"&&u.length&&(l[u]=l[u]||[],l[u].push(c))})),[].slice.call(n.querySelectorAll(i)).forEach(((c,h)=>{const u=a(c);let g;if(o[u]=o[u]||[],o[u].push(c),l[u]){const v=o[u].length-1,L=l[u].length-1;l[u][v]?(g=l[u][v],l[u][v]=null):l[u][L]&&(g=l[u][L],l[u][L]=null)}g&&t.push({from:g,to:c,options:r})}))}getUnmatchedAutoAnimateElements(t){return[].slice.call(t.children).reduce(((e,n)=>{const i=n.querySelector("[data-auto-animate-target]");return n.hasAttribute("data-auto-animate-target")||i||e.push(n),n.querySelector("[data-auto-animate-target]")&&(e=e.concat(this.getUnmatchedAutoAnimateElements(n))),e}),[])}},$n=class{constructor(t){this.Reveal=t,this.active=!1,this.activatedCallbacks=[],this.onScroll=this.onScroll.bind(this)}activate(){if(this.active)return;const t=this.Reveal.getState();this.active=!0,this.slideHTMLBeforeActivation=this.Reveal.getSlidesElement().innerHTML;const e=A(this.Reveal.getRevealElement(),lt),n=A(this.Reveal.getRevealElement(),".backgrounds>.slide-background");let i;this.viewportElement.classList.add("loading-scroll-mode","reveal-scroll");const a=window.getComputedStyle(this.viewportElement);a&&a.background&&(i=a.background);const r=[],l=e[0].parentNode;let o;const c=(h,u,g,v)=>{let L;if(o&&this.Reveal.shouldAutoAnimateBetween(o,h))L=document.createElement("div"),L.className="scroll-page-content scroll-auto-animate-page",L.style.display="none",o.closest(".scroll-page-content").parentNode.appendChild(L);else{const p=document.createElement("div");if(p.className="scroll-page",r.push(p),v&&n.length>u){const x=n[u],q=window.getComputedStyle(x);q&&q.background?p.style.background=q.background:i&&(p.style.background=i)}else i&&(p.style.background=i);const F=document.createElement("div");F.className="scroll-page-sticky",p.appendChild(F),L=document.createElement("div"),L.className="scroll-page-content",F.appendChild(L)}L.appendChild(h),h.classList.remove("past","future"),h.setAttribute("data-index-h",u),h.setAttribute("data-index-v",g),h.slideBackgroundElement&&(h.slideBackgroundElement.remove("past","future"),L.insertBefore(h.slideBackgroundElement,h)),o=h};e.forEach(((h,u)=>{this.Reveal.isVerticalStack(h)?h.querySelectorAll("section").forEach(((g,v)=>{c(g,u,v,!0)})):c(h,u,0)}),this),this.createProgressBar(),A(this.Reveal.getRevealElement(),".stack").forEach((h=>h.remove())),r.forEach((h=>l.appendChild(h))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.layout(),this.Reveal.setState(t),this.activatedCallbacks.forEach((h=>h())),this.activatedCallbacks=[],this.restoreScrollPosition(),this.viewportElement.classList.remove("loading-scroll-mode"),this.viewportElement.addEventListener("scroll",this.onScroll,{passive:!0})}deactivate(){if(!this.active)return;const t=this.Reveal.getState();this.active=!1,this.viewportElement.removeEventListener("scroll",this.onScroll),this.viewportElement.classList.remove("reveal-scroll"),this.removeProgressBar(),this.Reveal.getSlidesElement().innerHTML=this.slideHTMLBeforeActivation,this.Reveal.sync(),this.Reveal.setState(t),this.slideHTMLBeforeActivation=null}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}createProgressBar(){this.progressBar=document.createElement("div"),this.progressBar.className="scrollbar",this.progressBarInner=document.createElement("div"),this.progressBarInner.className="scrollbar-inner",this.progressBar.appendChild(this.progressBarInner),this.progressBarPlayhead=document.createElement("div"),this.progressBarPlayhead.className="scrollbar-playhead",this.progressBarInner.appendChild(this.progressBarPlayhead),this.viewportElement.insertBefore(this.progressBar,this.viewportElement.firstChild);const t=n=>{let i=(n.clientY-this.progressBarInner.getBoundingClientRect().top)/this.progressBarHeight;i=Math.max(Math.min(i,1),0),this.viewportElement.scrollTop=i*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight)},e=n=>{this.draggingProgressBar=!1,this.showProgressBar(),document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",e)};this.progressBarInner.addEventListener("mousedown",(n=>{n.preventDefault(),this.draggingProgressBar=!0,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e),t(n)}))}removeProgressBar(){this.progressBar&&(this.progressBar.remove(),this.progressBar=null)}layout(){this.isActive()&&(this.syncPages(),this.syncScrollPosition())}syncPages(){const t=this.Reveal.getConfig(),e=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),n=this.Reveal.getScale(),i=t.scrollLayout==="compact",a=this.viewportElement.offsetHeight,r=e.height*n,l=i?r:a;this.scrollTriggerHeight=i?r:a,this.viewportElement.style.setProperty("--page-height",l+"px"),this.viewportElement.style.scrollSnapType=typeof t.scrollSnap=="string"?`y ${t.scrollSnap}`:"",this.slideTriggers=[];const o=Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));this.pages=o.map((c=>{const h=this.createPage({pageElement:c,slideElement:c.querySelector("section"),stickyElement:c.querySelector(".scroll-page-sticky"),contentElement:c.querySelector(".scroll-page-content"),backgroundElement:c.querySelector(".slide-background"),autoAnimateElements:c.querySelectorAll(".scroll-auto-animate-page"),autoAnimatePages:[]});h.pageElement.style.setProperty("--slide-height",t.center===!0?"auto":e.height+"px"),this.slideTriggers.push({page:h,activate:()=>this.activatePage(h),deactivate:()=>this.deactivatePage(h)}),this.createFragmentTriggersForPage(h),h.autoAnimateElements.length>0&&this.createAutoAnimateTriggersForPage(h);let u=Math.max(h.scrollTriggers.length-1,0);u+=h.autoAnimatePages.reduce(((g,v)=>g+Math.max(v.scrollTriggers.length-1,0)),h.autoAnimatePages.length),h.pageElement.querySelectorAll(".scroll-snap-point").forEach((g=>g.remove()));for(let g=0;g<u+1;g++){const v=document.createElement("div");v.className="scroll-snap-point",v.style.height=this.scrollTriggerHeight+"px",v.style.scrollSnapAlign=i?"center":"start",h.pageElement.appendChild(v),g===0&&(v.style.marginTop=-this.scrollTriggerHeight+"px")}return i&&h.scrollTriggers.length>0?(h.pageHeight=a,h.pageElement.style.setProperty("--page-height",a+"px")):(h.pageHeight=l,h.pageElement.style.removeProperty("--page-height")),h.scrollPadding=this.scrollTriggerHeight*u,h.totalHeight=h.pageHeight+h.scrollPadding,h.pageElement.style.setProperty("--page-scroll-padding",h.scrollPadding+"px"),u>0?(h.stickyElement.style.position="sticky",h.stickyElement.style.top=Math.max((a-h.pageHeight)/2,0)+"px"):(h.stickyElement.style.position="relative",h.pageElement.style.scrollSnapAlign=h.pageHeight<a?"center":"start"),h})),this.setTriggerRanges(),this.viewportElement.setAttribute("data-scrollbar",t.scrollProgress),t.scrollProgress&&this.totalScrollTriggerCount>1?(this.progressBar||this.createProgressBar(),this.syncProgressBar()):this.removeProgressBar()}setTriggerRanges(){this.totalScrollTriggerCount=this.slideTriggers.reduce(((e,n)=>e+Math.max(n.page.scrollTriggers.length,1)),0);let t=0;this.slideTriggers.forEach(((e,n)=>{e.range=[t,t+Math.max(e.page.scrollTriggers.length,1)/this.totalScrollTriggerCount];const i=(e.range[1]-e.range[0])/e.page.scrollTriggers.length;e.page.scrollTriggers.forEach(((a,r)=>{a.range=[t+r*i,t+(r+1)*i]})),t=e.range[1]})),this.slideTriggers[this.slideTriggers.length-1].range[1]=1}createFragmentTriggersForPage(t,e){e=e||t.slideElement;const n=this.Reveal.fragments.sort(e.querySelectorAll(".fragment"),!0);return n.length&&(t.fragments=this.Reveal.fragments.sort(e.querySelectorAll(".fragment:not(.disabled)")),t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(-1,t.fragments,e)}}),n.forEach(((i,a)=>{t.scrollTriggers.push({activate:()=>{this.Reveal.fragments.update(a,t.fragments,e)}})}))),t.scrollTriggers.length}createAutoAnimateTriggersForPage(t){t.autoAnimateElements.length>0&&this.slideTriggers.push(...Array.from(t.autoAnimateElements).map(((e,n)=>{let i=this.createPage({slideElement:e.querySelector("section"),contentElement:e,backgroundElement:e.querySelector(".slide-background")});return this.createFragmentTriggersForPage(i,i.slideElement),t.autoAnimatePages.push(i),{page:i,activate:()=>this.activatePage(i),deactivate:()=>this.deactivatePage(i)}})))}createPage(t){return t.scrollTriggers=[],t.indexh=parseInt(t.slideElement.getAttribute("data-index-h"),10),t.indexv=parseInt(t.slideElement.getAttribute("data-index-v"),10),t}syncProgressBar(){this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach((r=>r.remove()));const t=this.viewportElement.scrollHeight,e=this.viewportElement.offsetHeight,n=e/t;this.progressBarHeight=this.progressBarInner.offsetHeight,this.playheadHeight=Math.max(n*this.progressBarHeight,8),this.progressBarScrollableHeight=this.progressBarHeight-this.playheadHeight;const i=e/t*this.progressBarHeight,a=Math.min(i/8,4);this.progressBarPlayhead.style.height=this.playheadHeight-a+"px",i>6?this.slideTriggers.forEach((r=>{const{page:l}=r;l.progressBarSlide=document.createElement("div"),l.progressBarSlide.className="scrollbar-slide",l.progressBarSlide.style.top=r.range[0]*this.progressBarHeight+"px",l.progressBarSlide.style.height=(r.range[1]-r.range[0])*this.progressBarHeight-a+"px",l.progressBarSlide.classList.toggle("has-triggers",l.scrollTriggers.length>0),this.progressBarInner.appendChild(l.progressBarSlide),l.scrollTriggerElements=l.scrollTriggers.map(((o,c)=>{const h=document.createElement("div");return h.className="scrollbar-trigger",h.style.top=(o.range[0]-r.range[0])*this.progressBarHeight+"px",h.style.height=(o.range[1]-o.range[0])*this.progressBarHeight-a+"px",l.progressBarSlide.appendChild(h),c===0&&(h.style.display="none"),h}))})):this.pages.forEach((r=>r.progressBarSlide=null))}syncScrollPosition(){const t=this.viewportElement.offsetHeight,e=t/this.viewportElement.scrollHeight,n=this.viewportElement.scrollTop,i=this.viewportElement.scrollHeight-t,a=Math.max(Math.min(n/i,1),0),r=Math.max(Math.min((n+t/2)/this.viewportElement.scrollHeight,1),0);let l;this.slideTriggers.forEach((o=>{const{page:c}=o;a>=o.range[0]-2*e&&a<=o.range[1]+2*e&&!c.loaded?(c.loaded=!0,this.Reveal.slideContent.load(c.slideElement)):c.loaded&&(c.loaded=!1,this.Reveal.slideContent.unload(c.slideElement)),a>=o.range[0]&&a<=o.range[1]?(this.activateTrigger(o),l=o.page):o.active&&this.deactivateTrigger(o)})),l&&l.scrollTriggers.forEach((o=>{r>=o.range[0]&&r<=o.range[1]?this.activateTrigger(o):o.active&&this.deactivateTrigger(o)})),this.setProgressBarValue(n/(this.viewportElement.scrollHeight-t))}setProgressBarValue(t){this.progressBar&&(this.progressBarPlayhead.style.transform=`translateY(${t*this.progressBarScrollableHeight}px)`,this.getAllPages().filter((e=>e.progressBarSlide)).forEach((e=>{e.progressBarSlide.classList.toggle("active",e.active===!0),e.scrollTriggers.forEach(((n,i)=>{e.scrollTriggerElements[i].classList.toggle("active",e.active===!0&&n.active===!0)}))})),this.showProgressBar())}showProgressBar(){this.progressBar.classList.add("visible"),clearTimeout(this.hideProgressBarTimeout),this.Reveal.getConfig().scrollProgress!=="auto"||this.draggingProgressBar||(this.hideProgressBarTimeout=setTimeout((()=>{this.progressBar&&this.progressBar.classList.remove("visible")}),500))}prev(){this.viewportElement.scrollTop-=this.scrollTriggerHeight}next(){this.viewportElement.scrollTop+=this.scrollTriggerHeight}scrollToSlide(t){if(this.active){const e=this.getScrollTriggerBySlide(t);e&&(this.viewportElement.scrollTop=e.range[0]*(this.viewportElement.scrollHeight-this.viewportElement.offsetHeight))}else this.activatedCallbacks.push((()=>this.scrollToSlide(t)))}storeScrollPosition(){clearTimeout(this.storeScrollPositionTimeout),this.storeScrollPositionTimeout=setTimeout((()=>{sessionStorage.setItem("reveal-scroll-top",this.viewportElement.scrollTop),sessionStorage.setItem("reveal-scroll-origin",location.origin+location.pathname),this.storeScrollPositionTimeout=null}),50)}restoreScrollPosition(){const t=sessionStorage.getItem("reveal-scroll-top"),e=sessionStorage.getItem("reveal-scroll-origin");t&&e===location.origin+location.pathname&&(this.viewportElement.scrollTop=parseInt(t,10))}activatePage(t){if(!t.active){t.active=!0;const{slideElement:e,backgroundElement:n,contentElement:i,indexh:a,indexv:r}=t;i.style.display="block",e.classList.add("present"),n&&n.classList.add("present"),this.Reveal.setCurrentScrollPage(e,a,r),this.Reveal.backgrounds.bubbleSlideContrastClassToElement(e,this.viewportElement),Array.from(i.parentNode.querySelectorAll(".scroll-page-content")).forEach((l=>{l!==i&&(l.style.display="none")}))}}deactivatePage(t){t.active&&(t.active=!1,t.slideElement&&t.slideElement.classList.remove("present"),t.backgroundElement&&t.backgroundElement.classList.remove("present"))}activateTrigger(t){t.active||(t.active=!0,t.activate())}deactivateTrigger(t){t.active&&(t.active=!1,t.deactivate&&t.deactivate())}getSlideByIndices(t,e){const n=this.getAllPages().find((i=>i.indexh===t&&i.indexv===e));return n?n.slideElement:null}getScrollTriggerBySlide(t){return this.slideTriggers.find((e=>e.page.slideElement===t))}getAllPages(){return this.pages.flatMap((t=>[t,...t.autoAnimatePages||[]]))}onScroll(){this.syncScrollPosition(),this.storeScrollPosition()}get viewportElement(){return this.Reveal.getViewportElement()}},Mn=class{constructor(t){this.Reveal=t}async activate(){const t=this.Reveal.getConfig(),e=A(this.Reveal.getRevealElement(),mt),n=t.slideNumber&&/all|print/i.test(t.showSlideNumber),i=this.Reveal.getComputedSlideSize(window.innerWidth,window.innerHeight),a=Math.floor(i.width*(1+t.margin)),r=Math.floor(i.height*(1+t.margin)),l=i.width,o=i.height;await new Promise(requestAnimationFrame),ae("@page{size:"+a+"px "+r+"px; margin: 0px;}"),ae(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: "+l+"px; max-height:"+o+"px}"),document.documentElement.classList.add("reveal-print","print-pdf"),document.body.style.width=a+"px",document.body.style.height=r+"px";const c=this.Reveal.getViewportElement();let h;if(c){const p=window.getComputedStyle(c);p&&p.background&&(h=p.background)}await new Promise(requestAnimationFrame),this.Reveal.layoutSlideContents(l,o),await new Promise(requestAnimationFrame);const u=e.map((p=>p.scrollHeight)),g=[],v=e[0].parentNode;let L=1;e.forEach((function(p,F){if(p.classList.contains("stack")===!1){let x=(a-l)/2,q=(r-o)/2;const X=u[F];let M=Math.max(Math.ceil(X/r),1);M=Math.min(M,t.pdfMaxPagesPerSlide),(M===1&&t.center||p.classList.contains("center"))&&(q=Math.max((r-X)/2,0));const R=document.createElement("div");if(g.push(R),R.className="pdf-page",R.style.height=(r+t.pdfPageHeightOffset)*M+"px",h&&(R.style.background=h),R.appendChild(p),p.style.left=x+"px",p.style.top=q+"px",p.style.width=l+"px",this.Reveal.slideContent.layout(p),p.slideBackgroundElement&&R.insertBefore(p.slideBackgroundElement,p),t.showNotes){const E=this.Reveal.getSlideNotes(p);if(E){const U=typeof t.showNotes=="string"?t.showNotes:"inline",P=document.createElement("div");P.classList.add("speaker-notes"),P.classList.add("speaker-notes-pdf"),P.setAttribute("data-layout",U),P.innerHTML=E,U==="separate-page"?g.push(P):(P.style.left="8px",P.style.bottom="8px",P.style.width=a-16+"px",R.appendChild(P))}}if(n){const E=document.createElement("div");E.classList.add("slide-number"),E.classList.add("slide-number-pdf"),E.innerHTML=L++,R.appendChild(E)}if(t.pdfSeparateFragments){const E=this.Reveal.fragments.sort(R.querySelectorAll(".fragment"),!0);let B;E.forEach((function(U,P){B&&B.forEach((function(I){I.classList.remove("current-fragment")})),U.forEach((function(I){I.classList.add("visible","current-fragment")}),this);const f=R.cloneNode(!0);if(n){const I=P+1;f.querySelector(".slide-number-pdf").innerHTML+="."+I}g.push(f),B=U}),this),E.forEach((function(U){U.forEach((function(P){P.classList.remove("visible","current-fragment")}))}))}else A(R,".fragment:not(.fade-out)").forEach((function(E){E.classList.add("visible")}))}}),this),await new Promise(requestAnimationFrame),g.forEach((p=>v.appendChild(p))),this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()),this.Reveal.dispatchEvent({type:"pdf-ready"}),c.classList.remove("loading-scroll-mode")}isActive(){return this.Reveal.getConfig().view==="print"}},Bn=class{constructor(t){this.Reveal=t}configure(t,e){t.fragments===!1?this.disable():e.fragments===!1&&this.enable()}disable(){A(this.Reveal.getSlidesElement(),".fragment").forEach((t=>{t.classList.add("visible"),t.classList.remove("current-fragment")}))}enable(){A(this.Reveal.getSlidesElement(),".fragment").forEach((t=>{t.classList.remove("visible"),t.classList.remove("current-fragment")}))}availableRoutes(){let t=this.Reveal.getCurrentSlide();if(t&&this.Reveal.getConfig().fragments){let e=t.querySelectorAll(".fragment:not(.disabled)"),n=t.querySelectorAll(".fragment:not(.disabled):not(.visible)");return{prev:e.length-n.length>0,next:!!n.length}}return{prev:!1,next:!1}}sort(t,e=!1){t=Array.from(t);let n=[],i=[],a=[];t.forEach((l=>{if(l.hasAttribute("data-fragment-index")){let o=parseInt(l.getAttribute("data-fragment-index"),10);n[o]||(n[o]=[]),n[o].push(l)}else i.push([l])})),n=n.concat(i);let r=0;return n.forEach((l=>{l.forEach((o=>{a.push(o),o.setAttribute("data-fragment-index",r)})),r++})),e===!0?n:a}sortAll(){this.Reveal.getHorizontalSlides().forEach((t=>{let e=A(t,"section");e.forEach(((n,i)=>{this.sort(n.querySelectorAll(".fragment"))}),this),e.length===0&&this.sort(t.querySelectorAll(".fragment"))}))}update(t,e,n=this.Reveal.getCurrentSlide()){let i={shown:[],hidden:[]};if(n&&this.Reveal.getConfig().fragments&&(e=e||this.sort(n.querySelectorAll(".fragment"))).length){let a=0;if(typeof t!="number"){let r=this.sort(n.querySelectorAll(".fragment.visible")).pop();r&&(t=parseInt(r.getAttribute("data-fragment-index")||0,10))}Array.from(e).forEach(((r,l)=>{if(r.hasAttribute("data-fragment-index")&&(l=parseInt(r.getAttribute("data-fragment-index"),10)),a=Math.max(a,l),l<=t){let o=r.classList.contains("visible");r.classList.add("visible"),r.classList.remove("current-fragment"),l===t&&(this.Reveal.announceStatus(this.Reveal.getStatusText(r)),r.classList.add("current-fragment"),this.Reveal.slideContent.startEmbeddedContent(r)),o||(i.shown.push(r),this.Reveal.dispatchEvent({target:r,type:"visible",bubbles:!1}))}else{let o=r.classList.contains("visible");r.classList.remove("visible"),r.classList.remove("current-fragment"),o&&(this.Reveal.slideContent.stopEmbeddedContent(r),i.hidden.push(r),this.Reveal.dispatchEvent({target:r,type:"hidden",bubbles:!1}))}})),t=typeof t=="number"?t:-1,t=Math.max(Math.min(t,a),-1),n.setAttribute("data-fragment",t)}return i.hidden.length&&this.Reveal.dispatchEvent({type:"fragmenthidden",data:{fragment:i.hidden[0],fragments:i.hidden}}),i.shown.length&&this.Reveal.dispatchEvent({type:"fragmentshown",data:{fragment:i.shown[0],fragments:i.shown}}),i}sync(t=this.Reveal.getCurrentSlide()){return this.sort(t.querySelectorAll(".fragment"))}goto(t,e=0){let n=this.Reveal.getCurrentSlide();if(n&&this.Reveal.getConfig().fragments){let i=this.sort(n.querySelectorAll(".fragment:not(.disabled)"));if(i.length){if(typeof t!="number"){let r=this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();t=r?parseInt(r.getAttribute("data-fragment-index")||0,10):-1}t+=e;let a=this.update(t,i);return this.Reveal.controls.update(),this.Reveal.progress.update(),this.Reveal.getConfig().fragmentInURL&&this.Reveal.location.writeURL(),!(!a.shown.length&&!a.hidden.length)}}return!1}next(){return this.goto(null,1)}prev(){return this.goto(null,-1)}},On=class{constructor(t){this.Reveal=t,this.active=!1,this.onSlideClicked=this.onSlideClicked.bind(this)}activate(){if(this.Reveal.getConfig().overview&&!this.Reveal.isScrollView()&&!this.isActive()){this.active=!0,this.Reveal.getRevealElement().classList.add("overview"),this.Reveal.cancelAutoSlide(),this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()),A(this.Reveal.getRevealElement(),mt).forEach((i=>{i.classList.contains("stack")||i.addEventListener("click",this.onSlideClicked,!0)}));const t=70,e=this.Reveal.getComputedSlideSize();this.overviewSlideWidth=e.width+t,this.overviewSlideHeight=e.height+t,this.Reveal.getConfig().rtl&&(this.overviewSlideWidth=-this.overviewSlideWidth),this.Reveal.updateSlidesVisibility(),this.layout(),this.update(),this.Reveal.layout();const n=this.Reveal.getIndices();this.Reveal.dispatchEvent({type:"overviewshown",data:{indexh:n.h,indexv:n.v,currentSlide:this.Reveal.getCurrentSlide()}})}}layout(){this.Reveal.getHorizontalSlides().forEach(((t,e)=>{t.setAttribute("data-index-h",e),ct(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),t.classList.contains("stack")&&A(t,"section").forEach(((n,i)=>{n.setAttribute("data-index-h",e),n.setAttribute("data-index-v",i),ct(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")}))})),Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach(((t,e)=>{ct(t,"translate3d("+e*this.overviewSlideWidth+"px, 0, 0)"),A(t,".slide-background").forEach(((n,i)=>{ct(n,"translate3d(0, "+i*this.overviewSlideHeight+"px, 0)")}))}))}update(){const t=Math.min(window.innerWidth,window.innerHeight),e=Math.max(t/5,150)/t,n=this.Reveal.getIndices();this.Reveal.transformSlides({overview:["scale("+e+")","translateX("+-n.h*this.overviewSlideWidth+"px)","translateY("+-n.v*this.overviewSlideHeight+"px)"].join(" ")})}deactivate(){if(this.Reveal.getConfig().overview){this.active=!1,this.Reveal.getRevealElement().classList.remove("overview"),this.Reveal.getRevealElement().classList.add("overview-deactivating"),setTimeout((()=>{this.Reveal.getRevealElement().classList.remove("overview-deactivating")}),1),this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()),A(this.Reveal.getRevealElement(),mt).forEach((e=>{ct(e,""),e.removeEventListener("click",this.onSlideClicked,!0)})),A(this.Reveal.getBackgroundsElement(),".slide-background").forEach((e=>{ct(e,"")})),this.Reveal.transformSlides({overview:""});const t=this.Reveal.getIndices();this.Reveal.slide(t.h,t.v),this.Reveal.layout(),this.Reveal.cueAutoSlide(),this.Reveal.dispatchEvent({type:"overviewhidden",data:{indexh:t.h,indexv:t.v,currentSlide:this.Reveal.getCurrentSlide()}})}}toggle(t){typeof t=="boolean"?t?this.activate():this.deactivate():this.isActive()?this.deactivate():this.activate()}isActive(){return this.active}onSlideClicked(t){if(this.isActive()){t.preventDefault();let e=t.target;for(;e&&!e.nodeName.match(/section/gi);)e=e.parentNode;if(e&&!e.classList.contains("disabled")&&(this.deactivate(),e.nodeName.match(/section/gi))){let n=parseInt(e.getAttribute("data-index-h"),10),i=parseInt(e.getAttribute("data-index-v"),10);this.Reveal.slide(n,i)}}}},zn=class{constructor(t){this.Reveal=t,this.shortcuts={},this.bindings={},this.onDocumentKeyDown=this.onDocumentKeyDown.bind(this)}configure(t,e){t.navigationMode==="linear"?(this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"]="Next slide",this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"]="Previous slide"):(this.shortcuts["N  ,  SPACE"]="Next slide",this.shortcuts["P  ,  Shift SPACE"]="Previous slide",this.shortcuts["&#8592;  ,  H"]="Navigate left",this.shortcuts["&#8594;  ,  L"]="Navigate right",this.shortcuts["&#8593;  ,  K"]="Navigate up",this.shortcuts["&#8595;  ,  J"]="Navigate down"),this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"]="Navigate without fragments",this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"]="Jump to first/last slide",this.shortcuts["B  ,  ."]="Pause",this.shortcuts.F="Fullscreen",this.shortcuts.G="Jump to slide",this.shortcuts["ESC, O"]="Slide overview"}bind(){document.addEventListener("keydown",this.onDocumentKeyDown,!1)}unbind(){document.removeEventListener("keydown",this.onDocumentKeyDown,!1)}addKeyBinding(t,e){typeof t=="object"&&t.keyCode?this.bindings[t.keyCode]={callback:e,key:t.key,description:t.description}:this.bindings[t]={callback:e,key:null,description:null}}removeKeyBinding(t){delete this.bindings[t]}triggerKey(t){this.onDocumentKeyDown({keyCode:t})}registerKeyboardShortcut(t,e){this.shortcuts[t]=e}getShortcuts(){return this.shortcuts}getBindings(){return this.bindings}onDocumentKeyDown(t){let e=this.Reveal.getConfig();if(typeof e.keyboardCondition=="function"&&e.keyboardCondition(t)===!1||e.keyboardCondition==="focused"&&!this.Reveal.isFocused())return!0;let n=t.keyCode,i=!this.Reveal.isAutoSliding();this.Reveal.onUserInput(t);let a=document.activeElement&&document.activeElement.isContentEditable===!0,r=document.activeElement&&document.activeElement.tagName&&/input|textarea/i.test(document.activeElement.tagName),l=document.activeElement&&document.activeElement.className&&/speaker-notes/i.test(document.activeElement.className),o=!([32,37,38,39,40,63,78,80,191].indexOf(t.keyCode)!==-1&&t.shiftKey||t.altKey)&&(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey);if(a||r||l||o)return;let c,h=[66,86,190,191,112];if(typeof e.keyboard=="object")for(c in e.keyboard)e.keyboard[c]==="togglePause"&&h.push(parseInt(c,10));if(this.Reveal.isOverlayOpen()&&!["Escape","f","c","b","."].includes(t.key)||this.Reveal.isPaused()&&h.indexOf(n)===-1)return!1;let u=e.navigationMode==="linear"||!this.Reveal.hasHorizontalSlides()||!this.Reveal.hasVerticalSlides(),g=!1;if(typeof e.keyboard=="object"){for(c in e.keyboard)if(parseInt(c,10)===n){let v=e.keyboard[c];typeof v=="function"?v.apply(null,[t]):typeof v=="string"&&typeof this.Reveal[v]=="function"&&this.Reveal[v].call(),g=!0}}if(g===!1){for(c in this.bindings)if(parseInt(c,10)===n){let v=this.bindings[c].callback;typeof v=="function"?v.apply(null,[t]):typeof v=="string"&&typeof this.Reveal[v]=="function"&&this.Reveal[v].call(),g=!0}}g===!1&&(g=!0,n===80||n===33?this.Reveal.prev({skipFragments:t.altKey}):n===78||n===34?this.Reveal.next({skipFragments:t.altKey}):n===72||n===37?t.shiftKey?this.Reveal.slide(0):!this.Reveal.overview.isActive()&&u?e.rtl?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.left({skipFragments:t.altKey}):n===76||n===39?t.shiftKey?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):!this.Reveal.overview.isActive()&&u?e.rtl?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey}):this.Reveal.right({skipFragments:t.altKey}):n===75||n===38?t.shiftKey?this.Reveal.slide(void 0,0):!this.Reveal.overview.isActive()&&u?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.up({skipFragments:t.altKey}):n===74||n===40?t.shiftKey?this.Reveal.slide(void 0,Number.MAX_VALUE):!this.Reveal.overview.isActive()&&u?this.Reveal.next({skipFragments:t.altKey}):this.Reveal.down({skipFragments:t.altKey}):n===36?this.Reveal.slide(0):n===35?this.Reveal.slide(this.Reveal.getHorizontalSlides().length-1):n===32?(this.Reveal.overview.isActive()&&this.Reveal.overview.deactivate(),t.shiftKey?this.Reveal.prev({skipFragments:t.altKey}):this.Reveal.next({skipFragments:t.altKey})):[58,59,66,86,190].includes(n)||n===191&&!t.shiftKey?this.Reveal.togglePause():n===70?an(e.embedded?this.Reveal.getViewportElement():document.documentElement):n===65?e.autoSlideStoppable&&this.Reveal.toggleAutoSlide(i):n===71?e.jumpToSlide&&this.Reveal.toggleJumpToSlide():n===67&&this.Reveal.isOverlayOpen()?this.Reveal.closeOverlay():n!==63&&n!==191||!t.shiftKey?n===112?this.Reveal.toggleHelp():g=!1:this.Reveal.toggleHelp()),g?t.preventDefault&&t.preventDefault():n!==27&&n!==79||(this.Reveal.closeOverlay()===!1&&this.Reveal.overview.toggle(),t.preventDefault&&t.preventDefault()),this.Reveal.cueAutoSlide()}},Dn=class{constructor(t){Qt(this,"MAX_REPLACE_STATE_FREQUENCY",1e3);this.Reveal=t,this.writeURLTimeout=0,this.replaceStateTimestamp=0,this.onWindowHashChange=this.onWindowHashChange.bind(this)}bind(){window.addEventListener("hashchange",this.onWindowHashChange,!1)}unbind(){window.removeEventListener("hashchange",this.onWindowHashChange,!1)}getIndicesFromHash(t=window.location.hash,e={}){let n=t.replace(/^#\/?/,""),i=n.split("/");if(/^[0-9]*$/.test(i[0])||!n.length){const a=this.Reveal.getConfig();let r,l=a.hashOneBasedIndex||e.oneBasedIndex?1:0,o=parseInt(i[0],10)-l||0,c=parseInt(i[1],10)-l||0;return a.fragmentInURL&&(r=parseInt(i[2],10),isNaN(r)&&(r=void 0)),{h:o,v:c,f:r}}{let a,r;/\/[-\d]+$/g.test(n)&&(r=parseInt(n.split("/").pop(),10),r=isNaN(r)?void 0:r,n=n.split("/").shift());try{a=document.getElementById(decodeURIComponent(n)).closest(".slides section")}catch{}if(a)return{...this.Reveal.getIndices(a),f:r}}return null}readURL(){const t=this.Reveal.getIndices(),e=this.getIndicesFromHash();e?e.h===t.h&&e.v===t.v&&e.f===void 0||this.Reveal.slide(e.h,e.v,e.f):this.Reveal.slide(t.h||0,t.v||0)}writeURL(t){let e=this.Reveal.getConfig(),n=this.Reveal.getCurrentSlide();if(clearTimeout(this.writeURLTimeout),typeof t=="number")this.writeURLTimeout=setTimeout(this.writeURL,t);else if(n){let i=this.getHash();e.history?window.location.hash=i:e.hash&&(i==="/"?this.debouncedReplaceState(window.location.pathname+window.location.search):this.debouncedReplaceState("#"+i))}}replaceState(t){window.history.replaceState(null,null,t),this.replaceStateTimestamp=Date.now()}debouncedReplaceState(t){clearTimeout(this.replaceStateTimeout),Date.now()-this.replaceStateTimestamp>this.MAX_REPLACE_STATE_FREQUENCY?this.replaceState(t):this.replaceStateTimeout=setTimeout((()=>this.replaceState(t)),this.MAX_REPLACE_STATE_FREQUENCY)}getHash(t){let e="/",n=t||this.Reveal.getCurrentSlide(),i=n?n.getAttribute("id"):null;i&&(i=encodeURIComponent(i));let a=this.Reveal.getIndices(t);if(this.Reveal.getConfig().fragmentInURL||(a.f=void 0),typeof i=="string"&&i.length)e="/"+i,a.f>=0&&(e+="/"+a.f);else{let r=this.Reveal.getConfig().hashOneBasedIndex?1:0;(a.h>0||a.v>0||a.f>=0)&&(e+=a.h+r),(a.v>0||a.f>=0)&&(e+="/"+(a.v+r)),a.f>=0&&(e+="/"+a.f)}return e}onWindowHashChange(t){this.readURL()}},Hn=class{constructor(t){this.Reveal=t,this.onNavigateLeftClicked=this.onNavigateLeftClicked.bind(this),this.onNavigateRightClicked=this.onNavigateRightClicked.bind(this),this.onNavigateUpClicked=this.onNavigateUpClicked.bind(this),this.onNavigateDownClicked=this.onNavigateDownClicked.bind(this),this.onNavigatePrevClicked=this.onNavigatePrevClicked.bind(this),this.onNavigateNextClicked=this.onNavigateNextClicked.bind(this),this.onEnterFullscreen=this.onEnterFullscreen.bind(this)}render(){const t=this.Reveal.getConfig().rtl,e=this.Reveal.getRevealElement();this.element=document.createElement("aside"),this.element.className="controls",this.element.innerHTML=`<button class="navigate-left" aria-label="${t?"next slide":"previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${t?"previous slide":"next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`,this.Reveal.getRevealElement().appendChild(this.element),this.controlsLeft=A(e,".navigate-left"),this.controlsRight=A(e,".navigate-right"),this.controlsUp=A(e,".navigate-up"),this.controlsDown=A(e,".navigate-down"),this.controlsPrev=A(e,".navigate-prev"),this.controlsNext=A(e,".navigate-next"),this.controlsFullscreen=A(e,".enter-fullscreen"),this.controlsRightArrow=this.element.querySelector(".navigate-right"),this.controlsLeftArrow=this.element.querySelector(".navigate-left"),this.controlsDownArrow=this.element.querySelector(".navigate-down")}configure(t,e){this.element.style.display=t.controls&&(t.controls!=="speaker-only"||this.Reveal.isSpeakerNotes())?"block":"none",this.element.setAttribute("data-controls-layout",t.controlsLayout),this.element.setAttribute("data-controls-back-arrows",t.controlsBackArrows)}bind(){let t=["touchstart","click"];rn&&(t=["touchstart"]),t.forEach((e=>{this.controlsLeft.forEach((n=>n.addEventListener(e,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((n=>n.addEventListener(e,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((n=>n.addEventListener(e,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((n=>n.addEventListener(e,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((n=>n.addEventListener(e,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((n=>n.addEventListener(e,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((n=>n.addEventListener(e,this.onEnterFullscreen,!1)))}))}unbind(){["touchstart","click"].forEach((t=>{this.controlsLeft.forEach((e=>e.removeEventListener(t,this.onNavigateLeftClicked,!1))),this.controlsRight.forEach((e=>e.removeEventListener(t,this.onNavigateRightClicked,!1))),this.controlsUp.forEach((e=>e.removeEventListener(t,this.onNavigateUpClicked,!1))),this.controlsDown.forEach((e=>e.removeEventListener(t,this.onNavigateDownClicked,!1))),this.controlsPrev.forEach((e=>e.removeEventListener(t,this.onNavigatePrevClicked,!1))),this.controlsNext.forEach((e=>e.removeEventListener(t,this.onNavigateNextClicked,!1))),this.controlsFullscreen.forEach((e=>e.removeEventListener(t,this.onEnterFullscreen,!1)))}))}update(){let t=this.Reveal.availableRoutes();[...this.controlsLeft,...this.controlsRight,...this.controlsUp,...this.controlsDown,...this.controlsPrev,...this.controlsNext].forEach((n=>{n.classList.remove("enabled","fragmented"),n.setAttribute("disabled","disabled")})),t.left&&this.controlsLeft.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),t.right&&this.controlsRight.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),t.up&&this.controlsUp.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),t.down&&this.controlsDown.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),(t.left||t.up)&&this.controlsPrev.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")})),(t.right||t.down)&&this.controlsNext.forEach((n=>{n.classList.add("enabled"),n.removeAttribute("disabled")}));let e=this.Reveal.getCurrentSlide();if(e){let n=this.Reveal.fragments.availableRoutes();n.prev&&this.controlsPrev.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})),n.next&&this.controlsNext.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}));const i=this.Reveal.isVerticalSlide(e),a=i&&e.parentElement&&e.parentElement.querySelectorAll(":scope > section").length>1;i&&a?(n.prev&&this.controlsUp.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})),n.next&&this.controlsDown.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")}))):(n.prev&&this.controlsLeft.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})),n.next&&this.controlsRight.forEach((r=>{r.classList.add("fragmented","enabled"),r.removeAttribute("disabled")})))}if(this.Reveal.getConfig().controlsTutorial){let n=this.Reveal.getIndices();!this.Reveal.hasNavigatedVertically()&&t.down?this.controlsDownArrow.classList.add("highlight"):(this.controlsDownArrow.classList.remove("highlight"),this.Reveal.getConfig().rtl?!this.Reveal.hasNavigatedHorizontally()&&t.left&&n.v===0?this.controlsLeftArrow.classList.add("highlight"):this.controlsLeftArrow.classList.remove("highlight"):!this.Reveal.hasNavigatedHorizontally()&&t.right&&n.v===0?this.controlsRightArrow.classList.add("highlight"):this.controlsRightArrow.classList.remove("highlight"))}}destroy(){this.unbind(),this.element.remove()}onNavigateLeftClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.prev():this.Reveal.left()}onNavigateRightClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.getConfig().navigationMode==="linear"?this.Reveal.next():this.Reveal.right()}onNavigateUpClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.up()}onNavigateDownClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.down()}onNavigatePrevClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.prev()}onNavigateNextClicked(t){t.preventDefault(),this.Reveal.onUserInput(),this.Reveal.next()}onEnterFullscreen(t){const e=this.Reveal.getConfig(),n=this.Reveal.getViewportElement();an(e.embedded?n:n.parentElement)}},qn=class{constructor(t){this.Reveal=t,this.onProgressClicked=this.onProgressClicked.bind(this)}render(){this.element=document.createElement("div"),this.element.className="progress",this.Reveal.getRevealElement().appendChild(this.element),this.bar=document.createElement("span"),this.element.appendChild(this.bar)}configure(t,e){this.element.style.display=t.progress?"block":"none"}bind(){this.Reveal.getConfig().progress&&this.element&&this.element.addEventListener("click",this.onProgressClicked,!1)}unbind(){this.Reveal.getConfig().progress&&this.element&&this.element.removeEventListener("click",this.onProgressClicked,!1)}update(){if(this.Reveal.getConfig().progress&&this.bar){let t=this.Reveal.getProgress();this.Reveal.getTotalSlides()<2&&(t=0),this.bar.style.transform="scaleX("+t+")"}}getMaxWidth(){return this.Reveal.getRevealElement().offsetWidth}onProgressClicked(t){this.Reveal.onUserInput(t),t.preventDefault();let e=this.Reveal.getSlides(),n=e.length,i=Math.floor(t.clientX/this.getMaxWidth()*n);this.Reveal.getConfig().rtl&&(i=n-i);let a=this.Reveal.getIndices(e[i]);this.Reveal.slide(a.h,a.v)}destroy(){this.element.remove()}};class Fn{constructor(t){this.Reveal=t,this.lastMouseWheelStep=0,this.cursorHidden=!1,this.cursorInactiveTimeout=0,this.onDocumentCursorActive=this.onDocumentCursorActive.bind(this),this.onDocumentMouseScroll=this.onDocumentMouseScroll.bind(this)}configure(t,e){t.mouseWheel?document.addEventListener("wheel",this.onDocumentMouseScroll,!1):document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),t.hideInactiveCursor?(document.addEventListener("mousemove",this.onDocumentCursorActive,!1),document.addEventListener("mousedown",this.onDocumentCursorActive,!1)):(this.showCursor(),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1))}showCursor(){this.cursorHidden&&(this.cursorHidden=!1,this.Reveal.getRevealElement().style.cursor="")}hideCursor(){this.cursorHidden===!1&&(this.cursorHidden=!0,this.Reveal.getRevealElement().style.cursor="none")}destroy(){this.showCursor(),document.removeEventListener("wheel",this.onDocumentMouseScroll,!1),document.removeEventListener("mousemove",this.onDocumentCursorActive,!1),document.removeEventListener("mousedown",this.onDocumentCursorActive,!1)}onDocumentCursorActive(t){this.showCursor(),clearTimeout(this.cursorInactiveTimeout),this.cursorInactiveTimeout=setTimeout(this.hideCursor.bind(this),this.Reveal.getConfig().hideCursorTime)}onDocumentMouseScroll(t){if(Date.now()-this.lastMouseWheelStep>1e3){this.lastMouseWheelStep=Date.now();let e=t.detail||-t.wheelDelta;e>0?this.Reveal.next():e<0&&this.Reveal.prev()}}}const Ue=(s,t)=>{const e=document.createElement("script");e.type="text/javascript",e.async=!1,e.defer=!1,e.src=s,typeof t=="function"&&(e.onload=e.onreadystatechange=i=>{(i.type==="load"||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=e.onerror=null,t())},e.onerror=i=>{e.onload=e.onreadystatechange=e.onerror=null,t(new Error("Failed loading script: "+e.src+`
`+i))});const n=document.querySelector("head");n.insertBefore(e,n.lastChild)};class jn{constructor(t){this.Reveal=t,this.state="idle",this.registeredPlugins={},this.asyncDependencies=[]}load(t,e){return this.state="loading",t.forEach(this.registerPlugin.bind(this)),new Promise((n=>{let i=[],a=0;if(e.forEach((r=>{r.condition&&!r.condition()||(r.async?this.asyncDependencies.push(r):i.push(r))})),i.length){a=i.length;const r=l=>{l&&typeof l.callback=="function"&&l.callback(),--a==0&&this.initPlugins().then(n)};i.forEach((l=>{typeof l.id=="string"?(this.registerPlugin(l),r(l)):typeof l.src=="string"?Ue(l.src,(()=>r(l))):(console.warn("Unrecognized plugin format",l),r())}))}else this.initPlugins().then(n)}))}initPlugins(){return new Promise((t=>{let e=Object.values(this.registeredPlugins),n=e.length;if(n===0)this.loadAsync().then(t);else{let i,a=()=>{--n==0?this.loadAsync().then(t):i()},r=0;i=()=>{let l=e[r++];if(typeof l.init=="function"){let o=l.init(this.Reveal);o&&typeof o.then=="function"?o.then(a):a()}else a()},i()}}))}loadAsync(){return this.state="loaded",this.asyncDependencies.length&&this.asyncDependencies.forEach((t=>{Ue(t.src,t.callback)})),Promise.resolve()}registerPlugin(t){arguments.length===2&&typeof arguments[0]=="string"?(t=arguments[1]).id=arguments[0]:typeof t=="function"&&(t=t());let e=t.id;typeof e!="string"?console.warn("Unrecognized plugin format; can't find plugin.id",t):this.registeredPlugins[e]===void 0?(this.registeredPlugins[e]=t,this.state==="loaded"&&typeof t.init=="function"&&t.init(this.Reveal)):console.warn('reveal.js: "'+e+'" plugin has already been registered')}hasPlugin(t){return!!this.registeredPlugins[t]}getPlugin(t){return this.registeredPlugins[t]}getRegisteredPlugins(){return this.registeredPlugins}destroy(){Object.values(this.registeredPlugins).forEach((t=>{typeof t.destroy=="function"&&t.destroy()})),this.registeredPlugins={},this.asyncDependencies=[]}}class _n{constructor(t){this.Reveal=t,this.onSlidesClicked=this.onSlidesClicked.bind(this),this.iframeTriggerSelector=null,this.mediaTriggerSelector="[data-preview-image], [data-preview-video]",this.stateProps=["previewIframe","previewImage","previewVideo","previewFit"],this.state={}}update(){this.Reveal.getConfig().previewLinks?this.iframeTriggerSelector="a[href]:not([data-preview-link=false]), [data-preview-link]:not(a):not([data-preview-link=false])":this.iframeTriggerSelector="[data-preview-link]:not([data-preview-link=false])";const t=this.Reveal.getSlidesElement().querySelectorAll(this.iframeTriggerSelector).length>0,e=this.Reveal.getSlidesElement().querySelectorAll(this.mediaTriggerSelector).length>0;t||e?this.Reveal.getSlidesElement().addEventListener("click",this.onSlidesClicked,!1):this.Reveal.getSlidesElement().removeEventListener("click",this.onSlidesClicked,!1)}createOverlay(t){this.dom=document.createElement("div"),this.dom.classList.add("r-overlay"),this.dom.classList.add(t),this.viewport=document.createElement("div"),this.viewport.classList.add("r-overlay-viewport"),this.dom.appendChild(this.viewport),this.Reveal.getRevealElement().appendChild(this.dom)}previewIframe(t){this.close(),this.state={previewIframe:t},this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.viewport.innerHTML=`<header class="r-overlay-header">
				<a class="r-overlay-button r-overlay-external" href="${t}" target="_blank"><span class="icon"></span></a>
				<button class="r-overlay-button r-overlay-close"><span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content">
				<iframe src="${t}"></iframe>
				<small class="r-overlay-content-inner">
					<span class="r-overlay-error x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`,this.dom.querySelector("iframe").addEventListener("load",(e=>{this.dom.dataset.state="loaded"}),!1),this.dom.querySelector(".r-overlay-close").addEventListener("click",(e=>{this.close(),e.preventDefault()}),!1),this.dom.querySelector(".r-overlay-external").addEventListener("click",(e=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewiframe",data:{url:t}})}previewMedia(t,e,n){if(e!=="image"&&e!=="video")return void console.warn("Please specify a valid media type to preview (image|video)");this.close(),n=n||"scale-down",this.createOverlay("r-overlay-preview"),this.dom.dataset.state="loading",this.dom.dataset.previewFit=n,this.viewport.innerHTML=`<header class="r-overlay-header">
				<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
			</header>
			<div class="r-overlay-spinner"></div>
			<div class="r-overlay-content"></div>`;const i=this.dom.querySelector(".r-overlay-content");if(e==="image"){this.state={previewImage:t,previewFit:n};const a=document.createElement("img",{});a.src=t,i.appendChild(a),a.addEventListener("load",(()=>{this.dom.dataset.state="loaded"}),!1),a.addEventListener("error",(()=>{this.dom.dataset.state="error",i.innerHTML='<span class="r-overlay-error">Unable to load image.</span>'}),!1),this.dom.style.cursor="zoom-out",this.dom.addEventListener("click",(r=>{this.close()}),!1),this.Reveal.dispatchEvent({type:"previewimage",data:{url:t}})}else{if(e!=="video")throw new Error("Please specify a valid media type to preview");{this.state={previewVideo:t,previewFit:n};const a=document.createElement("video");a.autoplay=this.dom.dataset.previewAutoplay!=="false",a.controls=this.dom.dataset.previewControls!=="false",a.loop=this.dom.dataset.previewLoop==="true",a.muted=this.dom.dataset.previewMuted==="true",a.playsInline=!0,a.src=t,i.appendChild(a),a.addEventListener("loadeddata",(()=>{this.dom.dataset.state="loaded"}),!1),a.addEventListener("error",(()=>{this.dom.dataset.state="error",i.innerHTML='<span class="r-overlay-error">Unable to load video.</span>'}),!1),this.Reveal.dispatchEvent({type:"previewvideo",data:{url:t}})}}this.dom.querySelector(".r-overlay-close").addEventListener("click",(a=>{this.close(),a.preventDefault()}),!1)}previewImage(t,e){this.previewMedia(t,"image",e)}previewVideo(t,e){this.previewMedia(t,"video",e)}toggleHelp(t){typeof t=="boolean"?t?this.showHelp():this.close():this.dom?this.close():this.showHelp()}showHelp(){if(this.Reveal.getConfig().help){this.close(),this.createOverlay("r-overlay-help");let t='<p class="title">Keyboard Shortcuts</p>',e=this.Reveal.keyboard.getShortcuts(),n=this.Reveal.keyboard.getBindings();t+="<table><th>KEY</th><th>ACTION</th>";for(let i in e)t+=`<tr><td>${i}</td><td>${e[i]}</td></tr>`;for(let i in n)n[i].key&&n[i].description&&(t+=`<tr><td>${n[i].key}</td><td>${n[i].description}</td></tr>`);t+="</table>",this.viewport.innerHTML=`
				<header class="r-overlay-header">
					<button class="r-overlay-button r-overlay-close">Esc <span class="icon"></span></button>
				</header>
				<div class="r-overlay-content">
					<div class="r-overlay-help-content">${t}</div>
				</div>
			`,this.dom.querySelector(".r-overlay-close").addEventListener("click",(i=>{this.close(),i.preventDefault()}),!1),this.Reveal.dispatchEvent({type:"showhelp"})}}isOpen(){return!!this.dom}close(){return!!this.dom&&(this.dom.remove(),this.dom=null,this.state={},this.Reveal.dispatchEvent({type:"closeoverlay"}),!0)}getState(){return this.state}setState(t){this.stateProps.every((e=>this.state[e]===t[e]))||(t.previewIframe?this.previewIframe(t.previewIframe):t.previewImage?this.previewImage(t.previewImage,t.previewFit):t.previewVideo?this.previewVideo(t.previewVideo,t.previewFit):this.close())}onSlidesClicked(t){const e=t.target,n=e.closest(this.iframeTriggerSelector),i=e.closest(this.mediaTriggerSelector);if(n){if(t.metaKey||t.shiftKey||t.altKey)return;let a=n.getAttribute("href")||n.getAttribute("data-preview-link");a&&(this.previewIframe(a),t.preventDefault())}else if(i){if(i.hasAttribute("data-preview-image")){let a=i.dataset.previewImage||i.getAttribute("src");a&&(this.previewImage(a,i.dataset.previewFit),t.preventDefault())}else if(i.hasAttribute("data-preview-video")){let a=i.dataset.previewVideo||i.getAttribute("src");if(!a){let r=i.querySelector("source");r&&(a=r.getAttribute("src"))}a&&(this.previewVideo(a,i.dataset.previewFit),t.preventDefault())}}}destroy(){this.close()}}let Un=class{constructor(t){this.Reveal=t,this.touchStartX=0,this.touchStartY=0,this.touchStartCount=0,this.touchCaptured=!1,this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this)}bind(){let t=this.Reveal.getRevealElement();"onpointerdown"in window?(t.addEventListener("pointerdown",this.onPointerDown,!1),t.addEventListener("pointermove",this.onPointerMove,!1),t.addEventListener("pointerup",this.onPointerUp,!1)):window.navigator.msPointerEnabled?(t.addEventListener("MSPointerDown",this.onPointerDown,!1),t.addEventListener("MSPointerMove",this.onPointerMove,!1),t.addEventListener("MSPointerUp",this.onPointerUp,!1)):(t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1))}unbind(){let t=this.Reveal.getRevealElement();t.removeEventListener("pointerdown",this.onPointerDown,!1),t.removeEventListener("pointermove",this.onPointerMove,!1),t.removeEventListener("pointerup",this.onPointerUp,!1),t.removeEventListener("MSPointerDown",this.onPointerDown,!1),t.removeEventListener("MSPointerMove",this.onPointerMove,!1),t.removeEventListener("MSPointerUp",this.onPointerUp,!1),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1)}isSwipePrevented(t){if(Dt(t,"video[controls], audio[controls]"))return!0;for(;t&&typeof t.hasAttribute=="function";){if(t.hasAttribute("data-prevent-swipe"))return!0;t=t.parentNode}return!1}onTouchStart(t){if(this.touchCaptured=!1,this.isSwipePrevented(t.target))return!0;this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartCount=t.touches.length}onTouchMove(t){if(this.isSwipePrevented(t.target))return!0;let e=this.Reveal.getConfig();if(this.touchCaptured)rn&&t.preventDefault();else{this.Reveal.onUserInput(t);let n=t.touches[0].clientX,i=t.touches[0].clientY;if(t.touches.length===1&&this.touchStartCount!==2){let a=this.Reveal.availableRoutes({includeFragments:!0}),r=n-this.touchStartX,l=i-this.touchStartY;r>40&&Math.abs(r)>Math.abs(l)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.next():this.Reveal.prev():this.Reveal.left()):r<-40&&Math.abs(r)>Math.abs(l)?(this.touchCaptured=!0,e.navigationMode==="linear"?e.rtl?this.Reveal.prev():this.Reveal.next():this.Reveal.right()):l>40&&a.up?(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.prev():this.Reveal.up()):l<-40&&a.down&&(this.touchCaptured=!0,e.navigationMode==="linear"?this.Reveal.next():this.Reveal.down()),e.embedded?(this.touchCaptured||this.Reveal.isVerticalSlide())&&t.preventDefault():t.preventDefault()}}}onTouchEnd(t){this.touchCaptured=!1}onPointerDown(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchStart(t))}onPointerMove(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchMove(t))}onPointerUp(t){t.pointerType!==t.MSPOINTER_TYPE_TOUCH&&t.pointerType!=="touch"||(t.touches=[{clientX:t.clientX,clientY:t.clientY}],this.onTouchEnd(t))}};const ne="focus",We="blur";class Wn{constructor(t){this.Reveal=t,this.onRevealPointerDown=this.onRevealPointerDown.bind(this),this.onDocumentPointerDown=this.onDocumentPointerDown.bind(this)}configure(t,e){t.embedded?this.blur():(this.focus(),this.unbind())}bind(){this.Reveal.getConfig().embedded&&this.Reveal.getRevealElement().addEventListener("pointerdown",this.onRevealPointerDown,!1)}unbind(){this.Reveal.getRevealElement().removeEventListener("pointerdown",this.onRevealPointerDown,!1),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)}focus(){this.state!==ne&&(this.Reveal.getRevealElement().classList.add("focused"),document.addEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=ne}blur(){this.state!==We&&(this.Reveal.getRevealElement().classList.remove("focused"),document.removeEventListener("pointerdown",this.onDocumentPointerDown,!1)),this.state=We}isFocused(){return this.state===ne}destroy(){this.Reveal.getRevealElement().classList.remove("focused")}onRevealPointerDown(t){this.focus()}onDocumentPointerDown(t){let e=G(t.target,".reveal");e&&e===this.Reveal.getRevealElement()||this.blur()}}class Vn{constructor(t){this.Reveal=t}render(){this.element=document.createElement("div"),this.element.className="speaker-notes",this.element.setAttribute("data-prevent-swipe",""),this.element.setAttribute("tabindex","0"),this.Reveal.getRevealElement().appendChild(this.element)}configure(t,e){t.showNotes&&this.element.setAttribute("data-layout",typeof t.showNotes=="string"?t.showNotes:"inline")}update(){this.Reveal.getConfig().showNotes&&this.element&&this.Reveal.getCurrentSlide()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()&&(this.element.innerHTML=this.getSlideNotes()||'<span class="notes-placeholder">No notes on this slide.</span>')}updateVisibility(){this.Reveal.getConfig().showNotes&&this.hasNotes()&&!this.Reveal.isScrollView()&&!this.Reveal.isPrintView()?this.Reveal.getRevealElement().classList.add("show-notes"):this.Reveal.getRevealElement().classList.remove("show-notes")}hasNotes(){return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length>0}isSpeakerNotesWindow(){return!!window.location.search.match(/receiver/gi)}getSlideNotes(t=this.Reveal.getCurrentSlide()){if(t.hasAttribute("data-notes"))return t.getAttribute("data-notes");let e=t.querySelectorAll("aside.notes");return e?Array.from(e).map((n=>n.innerHTML)).join(`
`):null}destroy(){this.element.remove()}}class Kn{constructor(t,e){this.diameter=100,this.diameter2=this.diameter/2,this.thickness=6,this.playing=!1,this.progress=0,this.progressOffset=1,this.container=t,this.progressCheck=e,this.canvas=document.createElement("canvas"),this.canvas.className="playback",this.canvas.width=this.diameter,this.canvas.height=this.diameter,this.canvas.style.width=this.diameter2+"px",this.canvas.style.height=this.diameter2+"px",this.context=this.canvas.getContext("2d"),this.container.appendChild(this.canvas),this.render()}setPlaying(t){const e=this.playing;this.playing=t,!e&&this.playing?this.animate():this.render()}animate(){const t=this.progress;this.progress=this.progressCheck(),t>.8&&this.progress<.2&&(this.progressOffset=this.progress),this.render(),this.playing&&requestAnimationFrame(this.animate.bind(this))}render(){let t=this.playing?this.progress:0,e=this.diameter2-this.thickness,n=this.diameter2,i=this.diameter2,a=28;this.progressOffset+=.1*(1-this.progressOffset);const r=-Math.PI/2+t*(2*Math.PI),l=-Math.PI/2+this.progressOffset*(2*Math.PI);this.context.save(),this.context.clearRect(0,0,this.diameter,this.diameter),this.context.beginPath(),this.context.arc(n,i,e+4,0,2*Math.PI,!1),this.context.fillStyle="rgba( 0, 0, 0, 0.4 )",this.context.fill(),this.context.beginPath(),this.context.arc(n,i,e,0,2*Math.PI,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="rgba( 255, 255, 255, 0.2 )",this.context.stroke(),this.playing&&(this.context.beginPath(),this.context.arc(n,i,e,l,r,!1),this.context.lineWidth=this.thickness,this.context.strokeStyle="#fff",this.context.stroke()),this.context.translate(n-14,i-14),this.playing?(this.context.fillStyle="#fff",this.context.fillRect(0,0,10,a),this.context.fillRect(18,0,10,a)):(this.context.beginPath(),this.context.translate(4,0),this.context.moveTo(0,0),this.context.lineTo(24,14),this.context.lineTo(0,a),this.context.fillStyle="#fff",this.context.fill()),this.context.restore()}on(t,e){this.canvas.addEventListener(t,e,!1)}off(t,e){this.canvas.removeEventListener(t,e,!1)}destroy(){this.playing=!1,this.canvas.parentNode&&this.container.removeChild(this.canvas)}}var Gn={width:960,height:700,margin:.04,minScale:.2,maxScale:2,controls:!0,controlsTutorial:!0,controlsLayout:"bottom-right",controlsBackArrows:"faded",progress:!0,slideNumber:!1,showSlideNumber:"all",hashOneBasedIndex:!1,hash:!1,respondToHashChanges:!0,jumpToSlide:!0,history:!1,keyboard:!0,keyboardCondition:null,disableLayout:!1,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,navigationMode:"default",shuffle:!1,fragments:!0,fragmentInURL:!0,embedded:!1,help:!0,pause:!0,showNotes:!1,showHiddenSlides:!1,autoPlayMedia:null,preloadIframes:null,autoAnimate:!0,autoAnimateMatcher:null,autoAnimateEasing:"ease",autoAnimateDuration:1,autoAnimateUnmatched:!0,autoAnimateStyles:["opacity","color","background-color","padding","font-size","line-height","letter-spacing","border-width","border-color","border-radius","outline","outline-offset"],autoSlide:0,autoSlideStoppable:!0,autoSlideMethod:null,defaultTiming:null,mouseWheel:!1,previewLinks:!1,postMessage:!0,postMessageEvents:!1,focusBodyOnPageVisibilityChange:!0,transition:"slide",transitionSpeed:"default",backgroundTransition:"fade",parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundRepeat:"",parallaxBackgroundPosition:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null,view:null,scrollLayout:"full",scrollSnap:"mandatory",scrollProgress:"auto",scrollActivationWidth:435,pdfMaxPagesPerSlide:Number.POSITIVE_INFINITY,pdfSeparateFragments:!0,pdfPageHeightOffset:-1,viewDistance:3,mobileViewDistance:2,display:"block",hideInactiveCursor:!0,hideCursorTime:5e3,sortFragmentsOnSync:!0,dependencies:[],plugins:[]};const on="5.2.1";function ln(s,t){arguments.length<2&&(t=arguments[0],s=document.querySelector(".reveal"));const e={};let n,i,a,r,l,o={},c=!1,h=!1,u={hasNavigatedHorizontally:!1,hasNavigatedVertically:!1},g=[],v=1,L={layout:"",overview:""},p={},F="idle",x=0,q=0,X=-1,M=!1,R=new Tn(e),E=new Ln(e),B=new In(e),U=new Nn(e),P=new Pn(e),f=new $n(e),I=new Mn(e),N=new Bn(e),O=new On(e),_=new zn(e),V=new Dn(e),K=new Hn(e),at=new qn(e),le=new Fn(e),nt=new jn(e),W=new _n(e),pt=new Wn(e),jt=new Un(e),et=new Vn(e);function wn(){c!==!1&&(h=!0,o.showHiddenSlides||A(p.wrapper,'section[data-visibility="hidden"]').forEach((d=>{const m=d.parentNode;m.childElementCount===1&&/section/i.test(m.nodeName)?m.remove():d.remove()})),(function(){p.slides.classList.add("no-transition"),kt?p.wrapper.classList.add("no-hover"):p.wrapper.classList.remove("no-hover"),P.render(),E.render(),B.render(),K.render(),at.render(),et.render(),p.pauseOverlay=((d,m,y,w="")=>{let k=d.querySelectorAll("."+y);for(let z=0;z<k.length;z++){let H=k[z];if(H.parentNode===d)return H}let $=document.createElement(m);return $.className=y,$.innerHTML=w,d.appendChild($),$})(p.wrapper,"div","pause-overlay",o.controls?'<button class="resume-button">Resume presentation</button>':null),p.statusElement=(function(){let d=p.wrapper.querySelector(".aria-status");return d||(d=document.createElement("div"),d.style.position="absolute",d.style.height="1px",d.style.width="1px",d.style.overflow="hidden",d.style.clip="rect( 1px, 1px, 1px, 1px )",d.classList.add("aria-status"),d.setAttribute("aria-live","polite"),d.setAttribute("aria-atomic","true"),p.wrapper.appendChild(d)),d})(),p.wrapper.setAttribute("role","application")})(),o.postMessage&&window.addEventListener("message",Be,!1),setInterval((()=>{(!f.isActive()&&p.wrapper.scrollTop!==0||p.wrapper.scrollLeft!==0)&&(p.wrapper.scrollTop=0,p.wrapper.scrollLeft=0)}),1e3),document.addEventListener("fullscreenchange",$t),document.addEventListener("webkitfullscreenchange",$t),ot().forEach((d=>{A(d,"section").forEach(((m,y)=>{y>0&&(m.classList.remove("present"),m.classList.remove("past"),m.classList.add("future"),m.setAttribute("aria-hidden","true"))}))})),ce(),P.update(!0),(function(){const d=o.view==="print",m=o.view==="scroll"||o.view==="reader";(d||m)&&(d?Rt():jt.unbind(),p.viewport.classList.add("loading-scroll-mode"),d?document.readyState==="complete"?I.activate():window.addEventListener("load",(()=>I.activate())):f.activate())})(),V.readURL(),setTimeout((()=>{p.slides.classList.remove("no-transition"),p.wrapper.classList.add("ready"),Q({type:"ready",data:{indexh:n,indexv:i,currentSlide:r}})}),1))}function _t(d){p.statusElement.textContent=d}function At(d){let m="";if(d.nodeType===3)m+=d.textContent;else if(d.nodeType===1){let y=d.getAttribute("aria-hidden"),w=window.getComputedStyle(d).display==="none";y==="true"||w||Array.from(d.childNodes).forEach((k=>{m+=At(k)}))}return m=m.trim(),m===""?"":m+" "}function ce(d){const m={...o};if(typeof d=="object"&&wt(o,d),e.isReady()===!1)return;const y=p.wrapper.querySelectorAll(mt).length;p.wrapper.classList.remove(m.transition),p.wrapper.classList.add(o.transition),p.wrapper.setAttribute("data-transition-speed",o.transitionSpeed),p.wrapper.setAttribute("data-background-transition",o.backgroundTransition),p.viewport.style.setProperty("--slide-width",typeof o.width=="string"?o.width:o.width+"px"),p.viewport.style.setProperty("--slide-height",typeof o.height=="string"?o.height:o.height+"px"),o.shuffle&&Kt(),te(p.wrapper,"embedded",o.embedded),te(p.wrapper,"rtl",o.rtl),te(p.wrapper,"center",o.center),o.pause===!1&&Et(),U.reset(),l&&(l.destroy(),l=null),y>1&&o.autoSlide&&o.autoSlideStoppable&&(l=new Kn(p.wrapper,(()=>Math.min(Math.max((Date.now()-X)/x,0),1))),l.on("click",kn),M=!1),o.navigationMode!=="default"?p.wrapper.setAttribute("data-navigation-mode",o.navigationMode):p.wrapper.removeAttribute("data-navigation-mode"),et.configure(o,m),pt.configure(o,m),le.configure(o,m),K.configure(o,m),at.configure(o,m),_.configure(o,m),N.configure(o,m),E.configure(o,m),Se()}function de(){window.addEventListener("resize",De,!1),o.touch&&jt.bind(),o.keyboard&&_.bind(),o.progress&&at.bind(),o.respondToHashChanges&&V.bind(),K.bind(),pt.bind(),p.slides.addEventListener("click",ze,!1),p.slides.addEventListener("transitionend",Oe,!1),p.pauseOverlay.addEventListener("click",Et,!1),o.focusBodyOnPageVisibilityChange&&document.addEventListener("visibilitychange",He,!1)}function Rt(){jt.unbind(),pt.unbind(),_.unbind(),K.unbind(),at.unbind(),V.unbind(),window.removeEventListener("resize",De,!1),p.slides.removeEventListener("click",ze,!1),p.slides.removeEventListener("transitionend",Oe,!1),p.pauseOverlay.removeEventListener("click",Et,!1)}function ue(d,m,y){s.addEventListener(d,m,y)}function he(d,m,y){s.removeEventListener(d,m,y)}function Ut(d){typeof d.layout=="string"&&(L.layout=d.layout),typeof d.overview=="string"&&(L.overview=d.overview),L.layout?ct(p.slides,L.layout+" "+L.overview):ct(p.slides,L.overview)}function Q({target:d=p.wrapper,type:m,data:y,bubbles:w=!0}){let k=document.createEvent("HTMLEvents",1,2);return k.initEvent(m,w,!0),wt(k,y),d.dispatchEvent(k),d===p.wrapper&&ge(m),k}function pe(d){Q({type:"slidechanged",data:{indexh:n,indexv:i,previousSlide:a,currentSlide:r,origin:d}})}function ge(d,m){if(o.postMessageEvents&&window.parent!==window.self){let y={namespace:"reveal",eventName:d,state:$e()};wt(y,m),window.parent.postMessage(JSON.stringify(y),"*")}}function vt(){if(p.wrapper&&!I.isActive()){const d=p.viewport.offsetWidth,m=p.viewport.offsetHeight;if(!o.disableLayout){kt&&!o.embedded&&document.documentElement.style.setProperty("--vh",.01*window.innerHeight+"px");const y=f.isActive()?Tt(d,m):Tt(),w=v;me(o.width,o.height),p.slides.style.width=y.width+"px",p.slides.style.height=y.height+"px",v=Math.min(y.presentationWidth/y.width,y.presentationHeight/y.height),v=Math.max(v,o.minScale),v=Math.min(v,o.maxScale),v===1||f.isActive()?(p.slides.style.zoom="",p.slides.style.left="",p.slides.style.top="",p.slides.style.bottom="",p.slides.style.right="",Ut({layout:""})):(p.slides.style.zoom="",p.slides.style.left="50%",p.slides.style.top="50%",p.slides.style.bottom="auto",p.slides.style.right="auto",Ut({layout:"translate(-50%, -50%) scale("+v+")"}));const k=Array.from(p.wrapper.querySelectorAll(mt));for(let $=0,z=k.length;$<z;$++){const H=k[$];H.style.display!=="none"&&(o.center||H.classList.contains("center")?H.classList.contains("stack")?H.style.top=0:H.style.top=Math.max((y.height-H.scrollHeight)/2,0)+"px":H.style.top="")}w!==v&&Q({type:"resize",data:{oldScale:w,scale:v,size:y}})}(function(){if(p.wrapper&&!o.disableLayout&&!I.isActive()&&typeof o.scrollActivationWidth=="number"&&o.view!=="scroll"){const y=Tt();y.presentationWidth>0&&y.presentationWidth<=o.scrollActivationWidth?f.isActive()||(P.create(),f.activate()):f.isActive()&&f.deactivate()}})(),p.viewport.style.setProperty("--slide-scale",v),p.viewport.style.setProperty("--viewport-width",d+"px"),p.viewport.style.setProperty("--viewport-height",m+"px"),f.layout(),at.update(),P.updateParallax(),O.isActive()&&O.update()}}function me(d,m){A(p.slides,"section > .stretch, section > .r-stretch").forEach((y=>{let w=((k,$=0)=>{if(k){let z,H=k.style.height;return k.style.height="0px",k.parentNode.style.height="auto",z=$-k.parentNode.offsetHeight,k.style.height=H+"px",k.parentNode.style.removeProperty("height"),z}return $})(y,m);if(/(img|video)/gi.test(y.nodeName)){const k=y.naturalWidth||y.videoWidth,$=y.naturalHeight||y.videoHeight,z=Math.min(d/k,w/$);y.style.width=k*z+"px",y.style.height=$*z+"px"}else y.style.width=d+"px",y.style.height=w+"px"}))}function Tt(d,m){let y=o.width,w=o.height;o.disableLayout&&(y=p.slides.offsetWidth,w=p.slides.offsetHeight);const k={width:y,height:w,presentationWidth:d||p.wrapper.offsetWidth,presentationHeight:m||p.wrapper.offsetHeight};return k.presentationWidth-=k.presentationWidth*o.margin,k.presentationHeight-=k.presentationHeight*o.margin,typeof k.width=="string"&&/%$/.test(k.width)&&(k.width=parseInt(k.width,10)/100*k.presentationWidth),typeof k.height=="string"&&/%$/.test(k.height)&&(k.height=parseInt(k.height,10)/100*k.presentationHeight),k}function fe(d,m){typeof d=="object"&&typeof d.setAttribute=="function"&&d.setAttribute("data-previous-indexv",m||0)}function ve(d){if(typeof d=="object"&&typeof d.setAttribute=="function"&&d.classList.contains("stack")){const m=d.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(d.getAttribute(m)||0,10)}return 0}function St(d=r){return d&&d.parentNode&&!!d.parentNode.nodeName.match(/section/i)}function be(){return!(!r||!St(r))&&!r.nextElementSibling}function ye(){return n===0&&i===0}function Wt(){return!!r&&!r.nextElementSibling&&(!St(r)||!r.parentNode.nextElementSibling)}function we(){if(o.pause){const d=p.wrapper.classList.contains("paused");Ct(),p.wrapper.classList.add("paused"),d===!1&&Q({type:"paused"})}}function Et(){const d=p.wrapper.classList.contains("paused");p.wrapper.classList.remove("paused"),bt(),d&&Q({type:"resumed"})}function ke(d){typeof d=="boolean"?d?we():Et():xt()?Et():we()}function xt(){return p.wrapper.classList.contains("paused")}function it(d,m,y,w){if(Q({type:"beforeslidechange",data:{indexh:d===void 0?n:d,indexv:m===void 0?i:m,origin:w}}).defaultPrevented)return;a=r;const k=p.wrapper.querySelectorAll(lt);if(f.isActive()){const Z=f.getSlideByIndices(d,m);return void(Z&&f.scrollToSlide(Z))}if(k.length===0)return;m!==void 0||O.isActive()||(m=ve(k[d])),a&&a.parentNode&&a.parentNode.classList.contains("stack")&&fe(a.parentNode,i);const $=g.concat();g.length=0;let z=n||0,H=i||0;n=Ee(lt,d===void 0?n:d),i=Ee(je,m===void 0?i:m);let rt=n!==z||i!==H;rt||(a=null);let gt=k[n],J=gt.querySelectorAll("section");s.classList.toggle("is-vertical-slide",J.length>1),r=J[i]||gt;let j=!1;rt&&a&&r&&!O.isActive()&&(F="running",j=Vt(a,r,z,H),j&&p.slides.classList.add("disable-slide-transitions")),Gt(),vt(),O.isActive()&&O.update(),y!==void 0&&N.goto(y),a&&a!==r&&(a.classList.remove("present"),a.setAttribute("aria-hidden","true"),ye()&&setTimeout((()=>{A(p.wrapper,lt+".stack").forEach((Z=>{fe(Z,0)}))}),0));t:for(let Z=0,Sn=g.length;Z<Sn;Z++){for(let Mt=0;Mt<$.length;Mt++)if($[Mt]===g[Z]){$.splice(Mt,1);continue t}p.viewport.classList.add(g[Z]),Q({type:g[Z]})}for(;$.length;)p.viewport.classList.remove($.pop());rt&&pe(w),!rt&&a||(R.stopEmbeddedContent(a),R.startEmbeddedContent(r)),requestAnimationFrame((()=>{_t(At(r))})),at.update(),K.update(),et.update(),P.update(),P.updateParallax(),E.update(),N.update(),V.writeURL(),bt(),j&&(setTimeout((()=>{p.slides.classList.remove("disable-slide-transitions")}),0),o.autoAnimate&&U.run(a,r))}function Vt(d,m,y,w){return d.hasAttribute("data-auto-animate")&&m.hasAttribute("data-auto-animate")&&d.getAttribute("data-auto-animate-id")===m.getAttribute("data-auto-animate-id")&&!(n>y||i>w?m:d).hasAttribute("data-auto-animate-restart")}function Se(){Rt(),de(),vt(),x=o.autoSlide,bt(),P.create(),V.writeURL(),o.sortFragmentsOnSync===!0&&N.sortAll(),K.update(),at.update(),Gt(),et.update(),et.updateVisibility(),W.update(),P.update(!0),E.update(),R.formatEmbeddedContent(),o.autoPlayMedia===!1?R.stopEmbeddedContent(r,{unloadIframes:!1}):R.startEmbeddedContent(r),O.isActive()&&O.layout()}function Kt(d=ot()){d.forEach(((m,y)=>{let w=d[Math.floor(Math.random()*d.length)];w.parentNode===m.parentNode&&m.parentNode.insertBefore(m,w);let k=m.querySelectorAll("section");k.length&&Kt(k)}))}function Ee(d,m){let y=A(p.wrapper,d),w=y.length,k=f.isActive()||I.isActive(),$=!1,z=!1;if(w){o.loop&&(m>=w&&($=!0),(m%=w)<0&&(m=w+m,z=!0)),m=Math.max(Math.min(m,w-1),0);for(let J=0;J<w;J++){let j=y[J],Z=o.rtl&&!St(j);j.classList.remove("past"),j.classList.remove("present"),j.classList.remove("future"),j.setAttribute("hidden",""),j.setAttribute("aria-hidden","true"),j.querySelector("section")&&j.classList.add("stack"),k?j.classList.add("present"):J<m?(j.classList.add(Z?"future":"past"),o.fragments&&xe(j)):J>m?(j.classList.add(Z?"past":"future"),o.fragments&&Ae(j)):J===m&&o.fragments&&($?Ae(j):z&&xe(j))}let H=y[m],rt=H.classList.contains("present");H.classList.add("present"),H.removeAttribute("hidden"),H.removeAttribute("aria-hidden"),rt||Q({target:H,type:"visible",bubbles:!1});let gt=H.getAttribute("data-state");gt&&(g=g.concat(gt.split(" ")))}else m=0;return m}function xe(d){A(d,".fragment").forEach((m=>{m.classList.add("visible"),m.classList.remove("current-fragment")}))}function Ae(d){A(d,".fragment.visible").forEach((m=>{m.classList.remove("visible","current-fragment")}))}function Gt(){let d,m,y=ot(),w=y.length;if(w&&n!==void 0){let k=O.isActive()?10:o.viewDistance;kt&&(k=O.isActive()?6:o.mobileViewDistance),I.isActive()&&(k=Number.MAX_VALUE);for(let $=0;$<w;$++){let z=y[$],H=A(z,"section"),rt=H.length;if(d=Math.abs((n||0)-$)||0,o.loop&&(d=Math.abs(((n||0)-$)%(w-k))||0),d<k?R.load(z):R.unload(z),rt){let gt=ve(z);for(let J=0;J<rt;J++){let j=H[J];m=Math.abs($===(n||0)?(i||0)-J:J-gt),d+m<k?R.load(j):R.unload(j)}}}Ie()?p.wrapper.classList.add("has-vertical-slides"):p.wrapper.classList.remove("has-vertical-slides"),Le()?p.wrapper.classList.add("has-horizontal-slides"):p.wrapper.classList.remove("has-horizontal-slides")}}function st({includeFragments:d=!1}={}){let m=p.wrapper.querySelectorAll(lt),y=p.wrapper.querySelectorAll(je),w={left:n>0,right:n<m.length-1,up:i>0,down:i<y.length-1};if(o.loop&&(m.length>1&&(w.left=!0,w.right=!0),y.length>1&&(w.up=!0,w.down=!0)),m.length>1&&o.navigationMode==="linear"&&(w.right=w.right||w.down,w.left=w.left||w.up),d===!0){let k=N.availableRoutes();w.left=w.left||k.prev,w.up=w.up||k.prev,w.down=w.down||k.next,w.right=w.right||k.next}if(o.rtl){let k=w.left;w.left=w.right,w.right=k}return w}function Re(d=r){let m=ot(),y=0;t:for(let w=0;w<m.length;w++){let k=m[w],$=k.querySelectorAll("section");for(let z=0;z<$.length;z++){if($[z]===d)break t;$[z].dataset.visibility!=="uncounted"&&y++}if(k===d)break;k.classList.contains("stack")===!1&&k.dataset.visibility!=="uncounted"&&y++}return y}function Te(d){let m,y=n,w=i;if(d)if(f.isActive())y=parseInt(d.getAttribute("data-index-h"),10),d.getAttribute("data-index-v")&&(w=parseInt(d.getAttribute("data-index-v"),10));else{let k=St(d),$=k?d.parentNode:d,z=ot();y=Math.max(z.indexOf($),0),w=void 0,k&&(w=Math.max(A(d.parentNode,"section").indexOf(d),0))}if(!d&&r&&r.querySelectorAll(".fragment").length>0){let k=r.querySelector(".current-fragment");m=k&&k.hasAttribute("data-fragment-index")?parseInt(k.getAttribute("data-fragment-index"),10):r.querySelectorAll(".fragment.visible").length-1}return{h:y,v:w,f:m}}function Yt(){return A(p.wrapper,mt+':not(.stack):not([data-visibility="uncounted"])')}function ot(){return A(p.wrapper,lt)}function Ce(){return A(p.wrapper,".slides>section>section")}function Le(){return ot().length>1}function Ie(){return Ce().length>1}function Pe(){return Yt().length}function Ne(d,m){let y=ot()[d],w=y&&y.querySelectorAll("section");return w&&w.length&&typeof m=="number"?w?w[m]:void 0:y}function $e(){let d=Te();return{indexh:d.h,indexv:d.v,indexf:d.f,paused:xt(),overview:O.isActive(),...W.getState()}}function bt(){if(Ct(),r&&o.autoSlide!==!1){let d=r.querySelector(".current-fragment[data-autoslide]"),m=d?d.getAttribute("data-autoslide"):null,y=r.parentNode?r.parentNode.getAttribute("data-autoslide"):null,w=r.getAttribute("data-autoslide");m?x=parseInt(m,10):w?x=parseInt(w,10):y?x=parseInt(y,10):(x=o.autoSlide,r.querySelectorAll(".fragment").length===0&&A(r,"video, audio").forEach((k=>{k.hasAttribute("data-autoplay")&&x&&1e3*k.duration/k.playbackRate>x&&(x=1e3*k.duration/k.playbackRate+1e3)}))),!x||M||xt()||O.isActive()||Wt()&&!N.availableRoutes().next&&o.loop!==!0||(q=setTimeout((()=>{typeof o.autoSlideMethod=="function"?o.autoSlideMethod():Zt(),bt()}),x),X=Date.now()),l&&l.setPlaying(q!==-1)}}function Ct(){clearTimeout(q),q=-1}function Lt(){x&&!M&&(M=!0,Q({type:"autoslidepaused"}),clearTimeout(q),l&&l.setPlaying(!1))}function It(){x&&M&&(M=!1,Q({type:"autoslideresumed"}),bt())}function Pt({skipFragments:d=!1}={}){if(u.hasNavigatedHorizontally=!0,f.isActive())return f.prev();o.rtl?(O.isActive()||d||N.next()===!1)&&st().left&&it(n+1,o.navigationMode==="grid"?i:void 0):(O.isActive()||d||N.prev()===!1)&&st().left&&it(n-1,o.navigationMode==="grid"?i:void 0)}function Nt({skipFragments:d=!1}={}){if(u.hasNavigatedHorizontally=!0,f.isActive())return f.next();o.rtl?(O.isActive()||d||N.prev()===!1)&&st().right&&it(n-1,o.navigationMode==="grid"?i:void 0):(O.isActive()||d||N.next()===!1)&&st().right&&it(n+1,o.navigationMode==="grid"?i:void 0)}function Xt({skipFragments:d=!1}={}){if(f.isActive())return f.prev();(O.isActive()||d||N.prev()===!1)&&st().up&&it(n,i-1)}function Jt({skipFragments:d=!1}={}){if(u.hasNavigatedVertically=!0,f.isActive())return f.next();(O.isActive()||d||N.next()===!1)&&st().down&&it(n,i+1)}function Me({skipFragments:d=!1}={}){if(f.isActive())return f.prev();if(d||N.prev()===!1)if(st().up)Xt({skipFragments:d});else{let m;if(m=o.rtl?A(p.wrapper,lt+".future").pop():A(p.wrapper,lt+".past").pop(),m&&m.classList.contains("stack")){let y=m.querySelectorAll("section").length-1||void 0;it(n-1,y)}else o.rtl?Nt({skipFragments:d}):Pt({skipFragments:d})}}function Zt({skipFragments:d=!1}={}){if(u.hasNavigatedHorizontally=!0,u.hasNavigatedVertically=!0,f.isActive())return f.next();if(d||N.next()===!1){let m=st();m.down&&m.right&&o.loop&&be()&&(m.down=!1),m.down?Jt({skipFragments:d}):o.rtl?Pt({skipFragments:d}):Nt({skipFragments:d})}}function Be(d){let m=d.data;if(typeof m=="string"&&m.charAt(0)==="{"&&m.charAt(m.length-1)==="}"&&(m=JSON.parse(m),m.method&&typeof e[m.method]=="function"))if(Cn.test(m.method)===!1){const y=e[m.method].apply(e,m.args);ge("callback",{method:m.method,result:y})}else console.warn('reveal.js: "'+m.method+'" is is blacklisted from the postMessage API')}function Oe(d){F==="running"&&/section/gi.test(d.target.nodeName)&&(F="idle",Q({type:"slidetransitionend",data:{indexh:n,indexv:i,previousSlide:a,currentSlide:r}}))}function ze(d){const m=G(d.target,'a[href^="#"]');if(m){const y=m.getAttribute("href"),w=V.getIndicesFromHash(y);w&&(e.slide(w.h,w.v,w.f),d.preventDefault())}}function De(d){vt()}function He(d){document.hidden===!1&&document.activeElement!==document.body&&(typeof document.activeElement.blur=="function"&&document.activeElement.blur(),document.body.focus())}function $t(d){(document.fullscreenElement||document.webkitFullscreenElement)===p.wrapper&&(d.stopImmediatePropagation(),setTimeout((()=>{e.layout(),e.focus.focus()}),1))}function kn(d){Wt()&&o.loop===!1?(it(0,0),It()):M?It():Lt()}const qe={VERSION:on,initialize:function(d){if(!s)throw'Unable to find presentation root (<div class="reveal">).';if(c)throw"Reveal.js has already been initialized.";if(c=!0,p.wrapper=s,p.slides=s.querySelector(".slides"),!p.slides)throw'Unable to find slides container (<div class="slides">).';return o={...Gn,...o,...t,...d,...Fe()},/print-pdf/gi.test(window.location.search)&&(o.view="print"),(function(){o.embedded===!0?p.viewport=G(s,".reveal-viewport")||s:(p.viewport=document.body,document.documentElement.classList.add("reveal-full-page")),p.viewport.classList.add("reveal-viewport")})(),window.addEventListener("load",vt,!1),nt.load(o.plugins,o.dependencies).then(wn),new Promise((m=>e.on("ready",m)))},configure:ce,destroy:function(){c=!1,h!==!1&&(Rt(),Ct(),et.destroy(),pt.destroy(),W.destroy(),nt.destroy(),le.destroy(),K.destroy(),at.destroy(),P.destroy(),E.destroy(),B.destroy(),document.removeEventListener("fullscreenchange",$t),document.removeEventListener("webkitfullscreenchange",$t),document.removeEventListener("visibilitychange",He,!1),window.removeEventListener("message",Be,!1),window.removeEventListener("load",vt,!1),p.pauseOverlay&&p.pauseOverlay.remove(),p.statusElement&&p.statusElement.remove(),document.documentElement.classList.remove("reveal-full-page"),p.wrapper.classList.remove("ready","center","has-horizontal-slides","has-vertical-slides"),p.wrapper.removeAttribute("data-transition-speed"),p.wrapper.removeAttribute("data-background-transition"),p.viewport.classList.remove("reveal-viewport"),p.viewport.style.removeProperty("--slide-width"),p.viewport.style.removeProperty("--slide-height"),p.slides.style.removeProperty("width"),p.slides.style.removeProperty("height"),p.slides.style.removeProperty("zoom"),p.slides.style.removeProperty("left"),p.slides.style.removeProperty("top"),p.slides.style.removeProperty("bottom"),p.slides.style.removeProperty("right"),p.slides.style.removeProperty("transform"),Array.from(p.wrapper.querySelectorAll(mt)).forEach((d=>{d.style.removeProperty("display"),d.style.removeProperty("top"),d.removeAttribute("hidden"),d.removeAttribute("aria-hidden")})))},sync:Se,syncSlide:function(d=r){P.sync(d),N.sync(d),R.load(d),P.update(),et.update()},syncFragments:N.sync.bind(N),slide:it,left:Pt,right:Nt,up:Xt,down:Jt,prev:Me,next:Zt,navigateLeft:Pt,navigateRight:Nt,navigateUp:Xt,navigateDown:Jt,navigatePrev:Me,navigateNext:Zt,navigateFragment:N.goto.bind(N),prevFragment:N.prev.bind(N),nextFragment:N.next.bind(N),on:ue,off:he,addEventListener:ue,removeEventListener:he,layout:vt,shuffle:Kt,availableRoutes:st,availableFragments:N.availableRoutes.bind(N),toggleHelp:W.toggleHelp.bind(W),toggleOverview:O.toggle.bind(O),toggleScrollView:f.toggle.bind(f),togglePause:ke,toggleAutoSlide:function(d){typeof d=="boolean"?d?It():Lt():M?It():Lt()},toggleJumpToSlide:function(d){typeof d=="boolean"?d?B.show():B.hide():B.isVisible()?B.hide():B.show()},isFirstSlide:ye,isLastSlide:Wt,isLastVerticalSlide:be,isVerticalSlide:St,isVerticalStack:function(d=r){return d.classList.contains(".stack")||d.querySelector("section")!==null},isPaused:xt,isAutoSliding:function(){return!(!x||M)},isSpeakerNotes:et.isSpeakerNotesWindow.bind(et),isOverview:O.isActive.bind(O),isFocused:pt.isFocused.bind(pt),isOverlayOpen:W.isOpen.bind(W),isScrollView:f.isActive.bind(f),isPrintView:I.isActive.bind(I),isReady:()=>h,loadSlide:R.load.bind(R),unloadSlide:R.unload.bind(R),startEmbeddedContent:()=>R.startEmbeddedContent(r),stopEmbeddedContent:()=>R.stopEmbeddedContent(r,{unloadIframes:!1}),previewIframe:W.previewIframe.bind(W),previewImage:W.previewImage.bind(W),previewVideo:W.previewVideo.bind(W),showPreview:W.previewIframe.bind(W),hidePreview:W.close.bind(W),addEventListeners:de,removeEventListeners:Rt,dispatchEvent:Q,getState:$e,setState:function(d){if(typeof d=="object"){it(yt(d.indexh),yt(d.indexv),yt(d.indexf));let m=yt(d.paused),y=yt(d.overview);typeof m=="boolean"&&m!==xt()&&ke(m),typeof y=="boolean"&&y!==O.isActive()&&O.toggle(y),W.setState(d)}},getProgress:function(){let d=Pe(),m=Re();if(r){let y=r.querySelectorAll(".fragment");y.length>0&&(m+=r.querySelectorAll(".fragment.visible").length/y.length*.9)}return Math.min(m/(d-1),1)},getIndices:Te,getSlidesAttributes:function(){return Yt().map((d=>{let m={};for(let y=0;y<d.attributes.length;y++){let w=d.attributes[y];m[w.name]=w.value}return m}))},getSlidePastCount:Re,getTotalSlides:Pe,getSlide:Ne,getPreviousSlide:()=>a,getCurrentSlide:()=>r,getSlideBackground:function(d,m){let y=typeof d=="number"?Ne(d,m):d;if(y)return y.slideBackgroundElement},getSlideNotes:et.getSlideNotes.bind(et),getSlides:Yt,getHorizontalSlides:ot,getVerticalSlides:Ce,hasHorizontalSlides:Le,hasVerticalSlides:Ie,hasNavigatedHorizontally:()=>u.hasNavigatedHorizontally,hasNavigatedVertically:()=>u.hasNavigatedVertically,shouldAutoAnimateBetween:Vt,addKeyBinding:_.addKeyBinding.bind(_),removeKeyBinding:_.removeKeyBinding.bind(_),triggerKey:_.triggerKey.bind(_),registerKeyboardShortcut:_.registerKeyboardShortcut.bind(_),getComputedSlideSize:Tt,setCurrentScrollPage:function(d,m,y){let w=n||0;n=m,i=y;const k=r!==d;a=r,r=d,r&&a&&o.autoAnimate&&Vt(a,r,w,i)&&U.run(a,r),k&&(a&&(R.stopEmbeddedContent(a),R.stopEmbeddedContent(a.slideBackgroundElement)),R.startEmbeddedContent(r),R.startEmbeddedContent(r.slideBackgroundElement)),requestAnimationFrame((()=>{_t(At(r))})),pe()},getScale:()=>v,getConfig:()=>o,getQueryHash:Fe,getSlidePath:V.getHash.bind(V),getRevealElement:()=>s,getSlidesElement:()=>p.slides,getViewportElement:()=>p.viewport,getBackgroundsElement:()=>P.element,registerPlugin:nt.registerPlugin.bind(nt),hasPlugin:nt.hasPlugin.bind(nt),getPlugin:nt.getPlugin.bind(nt),getPlugins:nt.getRegisteredPlugins.bind(nt)};return wt(e,{...qe,announceStatus:_t,getStatusText:At,focus:pt,scroll:f,progress:at,controls:K,location:V,overview:O,keyboard:_,fragments:N,backgrounds:P,slideContent:R,slideNumber:E,onUserInput:function(d){o.autoSlideStoppable&&Lt()},closeOverlay:W.close.bind(W),updateSlidesVisibility:Gt,layoutSlideContents:me,transformSlides:Ut,cueAutoSlide:bt,cancelAutoSlide:Ct}),qe}let tt=ln,Ve=[];tt.initialize=s=>(Object.assign(tt,new ln(document.querySelector(".reveal"),s)),Ve.map((t=>t(tt))),tt.initialize()),["configure","on","off","addEventListener","removeEventListener","registerPlugin"].forEach((s=>{tt[s]=(...t)=>{Ve.push((e=>e[s].call(null,...t)))}})),tt.isReady=()=>!1,tt.VERSION=on;function Yn(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let ft={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const cn=/[&<>"']/,Xn=new RegExp(cn.source,"g"),dn=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Jn=new RegExp(dn.source,"g"),Zn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ke=s=>Zn[s];function Y(s,t){if(t){if(cn.test(s))return s.replace(Xn,Ke)}else if(dn.test(s))return s.replace(Jn,Ke);return s}const Qn=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function un(s){return s.replace(Qn,((t,e)=>(e=e.toLowerCase())==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const ti=/(^|[^\[])\^/g;function D(s,t){s=typeof s=="string"?s:s.source,t=t||"";const e={replace:(n,i)=>(i=(i=i.source||i).replace(ti,"$1"),s=s.replace(n,i),e),getRegex:()=>new RegExp(s,t)};return e}const ei=/[^\w:]/g,ni=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function Ge(s,t,e){if(s){let n;try{n=decodeURIComponent(un(e)).replace(ei,"").toLowerCase()}catch{return null}if(n.indexOf("javascript:")===0||n.indexOf("vbscript:")===0||n.indexOf("data:")===0)return null}t&&!ni.test(e)&&(e=(function(n,i){Bt[" "+n]||(ii.test(n)?Bt[" "+n]=n+"/":Bt[" "+n]=Ot(n,"/",!0)),n=Bt[" "+n];const a=n.indexOf(":")===-1;return i.substring(0,2)==="//"?a?i:n.replace(ai,"$1")+i:i.charAt(0)==="/"?a?i:n.replace(si,"$1")+i:n+i})(t,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const Bt={},ii=/^[^:]+:\/*[^/]*$/,ai=/^([^:]+:)[\s\S]*$/,si=/^([^:]+:\/*[^/]*)[\s\S]*$/,Ht={exec:function(){}};function Ye(s,t){const e=s.replace(/\|/g,((i,a,r)=>{let l=!1,o=a;for(;--o>=0&&r[o]==="\\";)l=!l;return l?"|":" |"})).split(/ \|/);let n=0;if(e[0].trim()||e.shift(),e.length>0&&!e[e.length-1].trim()&&e.pop(),e.length>t)e.splice(t);else for(;e.length<t;)e.push("");for(;n<e.length;n++)e[n]=e[n].trim().replace(/\\\|/g,"|");return e}function Ot(s,t,e){const n=s.length;if(n===0)return"";let i=0;for(;i<n;){const a=s.charAt(n-i-1);if(a!==t||e){if(a===t||!e)break;i++}else i++}return s.slice(0,n-i)}function Xe(s,t){if(t<1)return"";let e="";for(;t>1;)1&t&&(e+=s),t>>=1,s+=s;return e+s}function Je(s,t,e,n){const i=t.href,a=t.title?Y(t.title):null,r=s[1].replace(/\\([\[\]])/g,"$1");if(s[0].charAt(0)!=="!"){n.state.inLink=!0;const l={type:"link",raw:e,href:i,title:a,text:r,tokens:n.inlineTokens(r)};return n.state.inLink=!1,l}return{type:"image",raw:e,href:i,title:a,text:Y(r)}}class se{constructor(t){this.options=t||ft}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Ot(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],i=(function(a,r){const l=a.match(/^(\s+)(?:```)/);if(l===null)return r;const o=l[1];return r.split(`
`).map((c=>{const h=c.match(/^\s+/);if(h===null)return c;const[u]=h;return u.length>=o.length?c.slice(o.length):c})).join(`
`)})(n,e[3]||"");return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:i}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(/#$/.test(n)){const i=Ot(n,"#");this.options.pedantic?n=i.trim():i&&!/ $/.test(i)||(n=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const n=e[0].replace(/^ *>[ \t]?/gm,""),i=this.lexer.state.top;this.lexer.state.top=!0;const a=this.lexer.blockTokens(n);return this.lexer.state.top=i,{type:"blockquote",raw:e[0],tokens:a,text:n}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n,i,a,r,l,o,c,h,u,g,v,L,p=e[1].trim();const F=p.length>1,x={type:"list",raw:"",ordered:F,start:F?+p.slice(0,-1):"",loose:!1,items:[]};p=F?`\\d{1,9}\\${p.slice(-1)}`:`\\${p}`,this.options.pedantic&&(p=F?p:"[*+-]");const q=new RegExp(`^( {0,3}${p})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(L=!1,e=q.exec(t))&&!this.rules.block.hr.test(t);){if(n=e[0],t=t.substring(n.length),h=e[2].split(`
`,1)[0].replace(/^\t+/,(M=>" ".repeat(3*M.length))),u=t.split(`
`,1)[0],this.options.pedantic?(r=2,v=h.trimLeft()):(r=e[2].search(/[^ ]/),r=r>4?1:r,v=h.slice(r),r+=e[1].length),o=!1,!h&&/^ *$/.test(u)&&(n+=u+`
`,t=t.substring(u.length+1),L=!0),!L){const M=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),R=new RegExp(`^ {0,${Math.min(3,r-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),E=new RegExp(`^ {0,${Math.min(3,r-1)}}(?:\`\`\`|~~~)`),B=new RegExp(`^ {0,${Math.min(3,r-1)}}#`);for(;t&&(g=t.split(`
`,1)[0],u=g,this.options.pedantic&&(u=u.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!E.test(u))&&!B.test(u)&&!M.test(u)&&!R.test(t);){if(u.search(/[^ ]/)>=r||!u.trim())v+=`
`+u.slice(r);else{if(o||h.search(/[^ ]/)>=4||E.test(h)||B.test(h)||R.test(h))break;v+=`
`+u}o||u.trim()||(o=!0),n+=g+`
`,t=t.substring(g.length+1),h=u.slice(r)}}x.loose||(c?x.loose=!0:/\n *\n *$/.test(n)&&(c=!0)),this.options.gfm&&(i=/^\[[ xX]\] /.exec(v),i&&(a=i[0]!=="[ ] ",v=v.replace(/^\[[ xX]\] +/,""))),x.items.push({type:"list_item",raw:n,task:!!i,checked:a,loose:!1,text:v}),x.raw+=n}x.items[x.items.length-1].raw=n.trimRight(),x.items[x.items.length-1].text=v.trimRight(),x.raw=x.raw.trimRight();const X=x.items.length;for(l=0;l<X;l++)if(this.lexer.state.top=!1,x.items[l].tokens=this.lexer.blockTokens(x.items[l].text,[]),!x.loose){const M=x.items[l].tokens.filter((E=>E.type==="space")),R=M.length>0&&M.some((E=>/\n.*\n/.test(E.raw)));x.loose=R}if(x.loose)for(l=0;l<X;l++)x.items[l].loose=!0;return x}}html(t){const e=this.rules.block.html.exec(t);if(e){const n={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};if(this.options.sanitize){const i=this.options.sanitizer?this.options.sanitizer(e[0]):Y(e[0]);n.type="paragraph",n.text=i,n.tokens=this.lexer.inline(i)}return n}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(/\s+/g," "),i=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",a=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:i,title:a}}}table(t){const e=this.rules.block.table.exec(t);if(e){const n={type:"table",header:Ye(e[1]).map((i=>({text:i}))),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(n.header.length===n.align.length){n.raw=e[0];let i,a,r,l,o=n.align.length;for(i=0;i<o;i++)/^ *-+: *$/.test(n.align[i])?n.align[i]="right":/^ *:-+: *$/.test(n.align[i])?n.align[i]="center":/^ *:-+ *$/.test(n.align[i])?n.align[i]="left":n.align[i]=null;for(o=n.rows.length,i=0;i<o;i++)n.rows[i]=Ye(n.rows[i],n.header.length).map((c=>({text:c})));for(o=n.header.length,a=0;a<o;a++)n.header[a].tokens=this.lexer.inline(n.header[a].text);for(o=n.rows.length,a=0;a<o;a++)for(l=n.rows[a],r=0;r<l.length;r++)l[r].tokens=this.lexer.inline(l[r].text);return n}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:Y(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):Y(e[0]):e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;const r=Ot(n.slice(0,-1),"\\");if((n.length-r.length)%2==0)return}else{const r=(function(l,o){if(l.indexOf(o[1])===-1)return-1;const c=l.length;let h=0,u=0;for(;u<c;u++)if(l[u]==="\\")u++;else if(l[u]===o[0])h++;else if(l[u]===o[1]&&(h--,h<0))return u;return-1})(e[2],"()");if(r>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+r;e[2]=e[2].substring(0,r),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let i=e[2],a="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],a=r[3])}else a=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(i=this.options.pedantic&&!/>$/.test(n)?i.slice(1):i.slice(1,-1)),Je(e,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:a&&a.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let i=(n[2]||n[1]).replace(/\s+/g," ");if(i=e[i.toLowerCase()],!i){const a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return Je(n,i,n[0],this.lexer)}}emStrong(t,e,n=""){let i=this.rules.inline.emStrong.lDelim.exec(t);if(!i||i[3]&&n.match(/[\p{L}\p{N}]/u))return;const a=i[1]||i[2]||"";if(!a||a&&(n===""||this.rules.inline.punctuation.exec(n))){const r=i[0].length-1;let l,o,c=r,h=0;const u=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(u.lastIndex=0,e=e.slice(-1*t.length+r);(i=u.exec(e))!=null;){if(l=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!l)continue;if(o=l.length,i[3]||i[4]){c+=o;continue}if((i[5]||i[6])&&r%3&&!((r+o)%3)){h+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c+h);const g=t.slice(0,r+i.index+(i[0].length-l.length)+o);if(Math.min(r,o)%2){const L=g.slice(1,-1);return{type:"em",raw:g,text:L,tokens:this.lexer.inlineTokens(L)}}const v=g.slice(2,-2);return{type:"strong",raw:g,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(/\n/g," ");const i=/[^ ]/.test(n),a=/^ /.test(n)&&/ $/.test(n);return i&&a&&(n=n.substring(1,n.length-1)),n=Y(n,!0),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t,e){const n=this.rules.inline.autolink.exec(t);if(n){let i,a;return n[2]==="@"?(i=Y(this.options.mangle?e(n[1]):n[1]),a="mailto:"+i):(i=Y(n[1]),a=i),{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}url(t,e){let n;if(n=this.rules.inline.url.exec(t)){let i,a;if(n[2]==="@")i=Y(this.options.mangle?e(n[0]):n[0]),a="mailto:"+i;else{let r;do r=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0];while(r!==n[0]);i=Y(n[0]),a=n[1]==="www."?"http://"+n[0]:n[0]}return{type:"link",raw:n[0],text:i,href:a,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(t,e){const n=this.rules.inline.text.exec(t);if(n){let i;return i=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(n[0]):Y(n[0]):n[0]:Y(this.options.smartypants?e(n[0]):n[0]),{type:"text",raw:n[0],text:i}}}}const C={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Ht,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};C.def=D(C.def).replace("label",C._label).replace("title",C._title).getRegex(),C.bullet=/(?:[*+-]|\d{1,9}[.)])/,C.listItemStart=D(/^( *)(bull) */).replace("bull",C.bullet).getRegex(),C.list=D(C.list).replace(/bull/g,C.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+C.def.source+")").getRegex(),C._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",C._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,C.html=D(C.html,"i").replace("comment",C._comment).replace("tag",C._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),C.paragraph=D(C._paragraph).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex(),C.blockquote=D(C.blockquote).replace("paragraph",C.paragraph).getRegex(),C.normal={...C},C.gfm={...C.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},C.gfm.table=D(C.gfm.table).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex(),C.gfm.paragraph=D(C._paragraph).replace("hr",C.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",C.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",C._tag).getRegex(),C.pedantic={...C.normal,html:D(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",C._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ht,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:D(C.normal._paragraph).replace("hr",C.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",C.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const S={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Ht,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Ht,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ri(s){return s.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Ze(s){let t,e,n="";const i=s.length;for(t=0;t<i;t++)e=s.charCodeAt(t),Math.random()>.5&&(e="x"+e.toString(16)),n+="&#"+e+";";return n}S._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",S.punctuation=D(S.punctuation).replace(/punctuation/g,S._punctuation).getRegex(),S.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,S.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,S._comment=D(C._comment).replace("(?:-->|$)","-->").getRegex(),S.emStrong.lDelim=D(S.emStrong.lDelim).replace(/punct/g,S._punctuation).getRegex(),S.emStrong.rDelimAst=D(S.emStrong.rDelimAst,"g").replace(/punct/g,S._punctuation).getRegex(),S.emStrong.rDelimUnd=D(S.emStrong.rDelimUnd,"g").replace(/punct/g,S._punctuation).getRegex(),S._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,S._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,S._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,S.autolink=D(S.autolink).replace("scheme",S._scheme).replace("email",S._email).getRegex(),S._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,S.tag=D(S.tag).replace("comment",S._comment).replace("attribute",S._attribute).getRegex(),S._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,S._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,S._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,S.link=D(S.link).replace("label",S._label).replace("href",S._href).replace("title",S._title).getRegex(),S.reflink=D(S.reflink).replace("label",S._label).replace("ref",C._label).getRegex(),S.nolink=D(S.nolink).replace("ref",C._label).getRegex(),S.reflinkSearch=D(S.reflinkSearch,"g").replace("reflink",S.reflink).replace("nolink",S.nolink).getRegex(),S.normal={...S},S.pedantic={...S.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:D(/^!?\[(label)\]\((.*?)\)/).replace("label",S._label).getRegex(),reflink:D(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",S._label).getRegex()},S.gfm={...S.normal,escape:D(S.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},S.gfm.url=D(S.gfm.url,"i").replace("email",S.gfm._extended_email).getRegex(),S.breaks={...S.gfm,br:D(S.br).replace("{2,}","*").getRegex(),text:D(S.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class dt{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||ft,this.options.tokenizer=this.options.tokenizer||new se,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:C.normal,inline:S.normal};this.options.pedantic?(e.block=C.pedantic,e.inline=S.pedantic):this.options.gfm&&(e.block=C.gfm,this.options.breaks?e.inline=S.breaks:e.inline=S.gfm),this.tokenizer.rules=e}static get rules(){return{block:C,inline:S}}static lex(t,e){return new dt(e).lex(t)}static lexInline(t,e){return new dt(e).inlineTokens(t)}lex(t){let e;for(t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){let n,i,a,r;for(t=this.options.pedantic?t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t.replace(/^( *)(\t+)/gm,((l,o,c)=>o+"    ".repeat(c.length)));t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((l=>!!(n=l.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0)))))if(n=this.tokenizer.space(t))t=t.substring(n.raw.length),n.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(n);else if(n=this.tokenizer.code(t))t=t.substring(n.raw.length),i=e[e.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?e.push(n):(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.fences(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.heading(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.hr(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.blockquote(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.list(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.html(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.def(t))t=t.substring(n.raw.length),i=e[e.length-1],!i||i.type!=="paragraph"&&i.type!=="text"?this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title}):(i.raw+=`
`+n.raw,i.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text);else if(n=this.tokenizer.table(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.lheading(t))t=t.substring(n.raw.length),e.push(n);else{if(a=t,this.options.extensions&&this.options.extensions.startBlock){let l=1/0;const o=t.slice(1);let c;this.options.extensions.startBlock.forEach((function(h){c=h.call({lexer:this},o),typeof c=="number"&&c>=0&&(l=Math.min(l,c))})),l<1/0&&l>=0&&(a=t.substring(0,l+1))}if(this.state.top&&(n=this.tokenizer.paragraph(a)))i=e[e.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n),r=a.length!==t.length,t=t.substring(n.raw.length);else if(n=this.tokenizer.text(t))t=t.substring(n.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+n.raw,i.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(n);else if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}throw new Error(l)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let n,i,a,r,l,o,c=t;if(this.tokens.links){const h=Object.keys(this.tokens.links);if(h.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(c))!=null;)h.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(c=c.slice(0,r.index)+"["+Xe("a",r[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.blockSkip.exec(c))!=null;)c=c.slice(0,r.index)+"["+Xe("a",r[0].length-2)+"]"+c.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(r=this.tokenizer.rules.inline.escapedEmSt.exec(c))!=null;)c=c.slice(0,r.index+r[0].length-2)+"++"+c.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;t;)if(l||(o=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((h=>!!(n=h.call({lexer:this},t,e))&&(t=t.substring(n.raw.length),e.push(n),!0)))))if(n=this.tokenizer.escape(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.tag(t))t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(n=this.tokenizer.link(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.reflink(t,this.tokens.links))t=t.substring(n.raw.length),i=e[e.length-1],i&&n.type==="text"&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(n=this.tokenizer.emStrong(t,c,o))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.codespan(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.br(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.del(t))t=t.substring(n.raw.length),e.push(n);else if(n=this.tokenizer.autolink(t,Ze))t=t.substring(n.raw.length),e.push(n);else if(this.state.inLink||!(n=this.tokenizer.url(t,Ze))){if(a=t,this.options.extensions&&this.options.extensions.startInline){let h=1/0;const u=t.slice(1);let g;this.options.extensions.startInline.forEach((function(v){g=v.call({lexer:this},u),typeof g=="number"&&g>=0&&(h=Math.min(h,g))})),h<1/0&&h>=0&&(a=t.substring(0,h+1))}if(n=this.tokenizer.inlineText(a,ri))t=t.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(o=n.raw.slice(-1)),l=!0,i=e[e.length-1],i&&i.type==="text"?(i.raw+=n.raw,i.text+=n.text):e.push(n);else if(t){const h="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(h);break}throw new Error(h)}}else t=t.substring(n.raw.length),e.push(n);return e}}class re{constructor(t){this.options=t||ft}code(t,e,n){const i=(e||"").match(/\S*/)[0];if(this.options.highlight){const a=this.options.highlight(t,i);a!=null&&a!==t&&(n=!0,t=a)}return t=t.replace(/\n$/,"")+`
`,i?'<pre><code class="'+this.options.langPrefix+Y(i)+'">'+(n?t:Y(t,!0))+`</code></pre>
`:"<pre><code>"+(n?t:Y(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,e,n,i){return this.options.headerIds?`<h${e} id="${this.options.headerPrefix+i.slug(n)}">${t}</h${e}>
`:`<h${e}>${t}</h${e}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,e,n){const i=e?"ol":"ul";return"<"+i+(e&&n!==1?' start="'+n+'"':"")+`>
`+t+"</"+i+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,e,n){if((t=Ge(this.options.sanitize,this.options.baseUrl,t))===null)return n;let i='<a href="'+t+'"';return e&&(i+=' title="'+e+'"'),i+=">"+n+"</a>",i}image(t,e,n){if((t=Ge(this.options.sanitize,this.options.baseUrl,t))===null)return n;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${e}"`),i+=this.options.xhtml?"/>":">",i}text(t){return t}}class hn{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,n){return""+n}image(t,e,n){return""+n}br(){return""}}class pn{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let n=t,i=0;if(this.seen.hasOwnProperty(n)){i=this.seen[t];do i++,n=t+"-"+i;while(this.seen.hasOwnProperty(n))}return e||(this.seen[t]=i,this.seen[n]=0),n}slug(t,e={}){const n=this.serialize(t);return this.getNextSafeSlug(n,e.dryrun)}}class ut{constructor(t){this.options=t||ft,this.options.renderer=this.options.renderer||new re,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new hn,this.slugger=new pn}static parse(t,e){return new ut(e).parse(t)}static parseInline(t,e){return new ut(e).parseInline(t)}parse(t,e=!0){let n,i,a,r,l,o,c,h,u,g,v,L,p,F,x,q,X,M,R,E="";const B=t.length;for(n=0;n<B;n++)if(g=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[g.type]&&(R=this.options.extensions.renderers[g.type].call({parser:this},g),R!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type)))E+=R||"";else switch(g.type){case"space":continue;case"hr":E+=this.renderer.hr();continue;case"heading":E+=this.renderer.heading(this.parseInline(g.tokens),g.depth,un(this.parseInline(g.tokens,this.textRenderer)),this.slugger);continue;case"code":E+=this.renderer.code(g.text,g.lang,g.escaped);continue;case"table":for(h="",c="",r=g.header.length,i=0;i<r;i++)c+=this.renderer.tablecell(this.parseInline(g.header[i].tokens),{header:!0,align:g.align[i]});for(h+=this.renderer.tablerow(c),u="",r=g.rows.length,i=0;i<r;i++){for(o=g.rows[i],c="",l=o.length,a=0;a<l;a++)c+=this.renderer.tablecell(this.parseInline(o[a].tokens),{header:!1,align:g.align[a]});u+=this.renderer.tablerow(c)}E+=this.renderer.table(h,u);continue;case"blockquote":u=this.parse(g.tokens),E+=this.renderer.blockquote(u);continue;case"list":for(v=g.ordered,L=g.start,p=g.loose,r=g.items.length,u="",i=0;i<r;i++)x=g.items[i],q=x.checked,X=x.task,F="",x.task&&(M=this.renderer.checkbox(q),p?x.tokens.length>0&&x.tokens[0].type==="paragraph"?(x.tokens[0].text=M+" "+x.tokens[0].text,x.tokens[0].tokens&&x.tokens[0].tokens.length>0&&x.tokens[0].tokens[0].type==="text"&&(x.tokens[0].tokens[0].text=M+" "+x.tokens[0].tokens[0].text)):x.tokens.unshift({type:"text",text:M}):F+=M),F+=this.parse(x.tokens,p),u+=this.renderer.listitem(F,X,q);E+=this.renderer.list(u,v,L);continue;case"html":E+=this.renderer.html(g.text);continue;case"paragraph":E+=this.renderer.paragraph(this.parseInline(g.tokens));continue;case"text":for(u=g.tokens?this.parseInline(g.tokens):g.text;n+1<B&&t[n+1].type==="text";)g=t[++n],u+=`
`+(g.tokens?this.parseInline(g.tokens):g.text);E+=e?this.renderer.paragraph(u):u;continue;default:{const U='Token with "'+g.type+'" type was not found.';if(this.options.silent)return void console.error(U);throw new Error(U)}}return E}parseInline(t,e){e=e||this.renderer;let n,i,a,r="";const l=t.length;for(n=0;n<l;n++)if(i=t[n],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(a=this.options.extensions.renderers[i.type].call({parser:this},i),a!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)))r+=a||"";else switch(i.type){case"escape":case"text":r+=e.text(i.text);break;case"html":r+=e.html(i.text);break;case"link":r+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break;case"image":r+=e.image(i.href,i.title,i.text);break;case"strong":r+=e.strong(this.parseInline(i.tokens,e));break;case"em":r+=e.em(this.parseInline(i.tokens,e));break;case"codespan":r+=e.codespan(i.text);break;case"br":r+=e.br();break;case"del":r+=e.del(this.parseInline(i.tokens,e));break;default:{const o='Token with "'+i.type+'" type was not found.';if(this.options.silent)return void console.error(o);throw new Error(o)}}return r}}class zt{constructor(t){this.options=t||ft}preprocess(t){return t}postprocess(t){return t}}Qt(zt,"passThroughHooks",new Set(["preprocess","postprocess"]));function gn(s,t){return(e,n,i)=>{typeof n=="function"&&(i=n,n=null);const a={...n},r=(function(l,o,c){return h=>{if(h.message+=`
Please report this to https://github.com/markedjs/marked.`,l){const u="<p>An error occurred:</p><pre>"+Y(h.message+"",!0)+"</pre>";return o?Promise.resolve(u):c?void c(null,u):u}if(o)return Promise.reject(h);if(!c)throw h;c(h)}})((n={...T.defaults,...a}).silent,n.async,i);if(e==null)return r(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if((function(l){l&&l.sanitize&&!l.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")})(n),n.hooks&&(n.hooks.options=n),i){const l=n.highlight;let o;try{n.hooks&&(e=n.hooks.preprocess(e)),o=s(e,n)}catch(u){return r(u)}const c=function(u){let g;if(!u)try{n.walkTokens&&T.walkTokens(o,n.walkTokens),g=t(o,n),n.hooks&&(g=n.hooks.postprocess(g))}catch(v){u=v}return n.highlight=l,u?r(u):i(null,g)};if(!l||l.length<3||(delete n.highlight,!o.length))return c();let h=0;return T.walkTokens(o,(function(u){u.type==="code"&&(h++,setTimeout((()=>{l(u.text,u.lang,(function(g,v){if(g)return c(g);v!=null&&v!==u.text&&(u.text=v,u.escaped=!0),h--,h===0&&c()}))}),0))})),void(h===0&&c())}if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(e):e).then((l=>s(l,n))).then((l=>n.walkTokens?Promise.all(T.walkTokens(l,n.walkTokens)).then((()=>l)):l)).then((l=>t(l,n))).then((l=>n.hooks?n.hooks.postprocess(l):l)).catch(r);try{n.hooks&&(e=n.hooks.preprocess(e));const l=s(e,n);n.walkTokens&&T.walkTokens(l,n.walkTokens);let o=t(l,n);return n.hooks&&(o=n.hooks.postprocess(o)),o}catch(l){return r(l)}}}function T(s,t,e){return gn(dt.lex,ut.parse)(s,t,e)}T.options=T.setOptions=function(s){var t;return T.defaults={...T.defaults,...s},t=T.defaults,ft=t,T},T.getDefaults=Yn,T.defaults=ft,T.use=function(...s){const t=T.defaults.extensions||{renderers:{},childTokens:{}};s.forEach((e=>{const n={...e};if(n.async=T.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach((i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const a=t.renderers[i.name];t.renderers[i.name]=a?function(...r){let l=i.renderer.apply(this,r);return l===!1&&(l=a.apply(this,r)),l}:i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");t[i.level]?t[i.level].unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}i.childTokens&&(t.childTokens[i.name]=i.childTokens)})),n.extensions=t),e.renderer){const i=T.defaults.renderer||new re;for(const a in e.renderer){const r=i[a];i[a]=(...l)=>{let o=e.renderer[a].apply(i,l);return o===!1&&(o=r.apply(i,l)),o}}n.renderer=i}if(e.tokenizer){const i=T.defaults.tokenizer||new se;for(const a in e.tokenizer){const r=i[a];i[a]=(...l)=>{let o=e.tokenizer[a].apply(i,l);return o===!1&&(o=r.apply(i,l)),o}}n.tokenizer=i}if(e.hooks){const i=T.defaults.hooks||new zt;for(const a in e.hooks){const r=i[a];zt.passThroughHooks.has(a)?i[a]=l=>{if(T.defaults.async)return Promise.resolve(e.hooks[a].call(i,l)).then((c=>r.call(i,c)));const o=e.hooks[a].call(i,l);return r.call(i,o)}:i[a]=(...l)=>{let o=e.hooks[a].apply(i,l);return o===!1&&(o=r.apply(i,l)),o}}n.hooks=i}if(e.walkTokens){const i=T.defaults.walkTokens;n.walkTokens=function(a){let r=[];return r.push(e.walkTokens.call(this,a)),i&&(r=r.concat(i.call(this,a))),r}}T.setOptions(n)}))},T.walkTokens=function(s,t){let e=[];for(const n of s)switch(e=e.concat(t.call(T,n)),n.type){case"table":for(const i of n.header)e=e.concat(T.walkTokens(i.tokens,t));for(const i of n.rows)for(const a of i)e=e.concat(T.walkTokens(a.tokens,t));break;case"list":e=e.concat(T.walkTokens(n.items,t));break;default:T.defaults.extensions&&T.defaults.extensions.childTokens&&T.defaults.extensions.childTokens[n.type]?T.defaults.extensions.childTokens[n.type].forEach((function(i){e=e.concat(T.walkTokens(n[i],t))})):n.tokens&&(e=e.concat(T.walkTokens(n.tokens,t)))}return e},T.parseInline=gn(dt.lexInline,ut.parseInline),T.Parser=ut,T.parser=ut.parse,T.Renderer=re,T.TextRenderer=hn,T.Lexer=dt,T.lexer=dt.lex,T.Tokenizer=se,T.Slugger=pn,T.Hooks=zt,T.parse=T,T.options,T.setOptions,T.use,T.walkTokens,T.parseInline,ut.parse,dt.lex;const oi=()=>{let s,t,e=null;function n(){if(e&&!e.closed)e.focus();else{if(e=window.open("about:blank","reveal.js - Notes","width=1100,height=700"),e.marked=T,e.document.write(`<!--
	NOTE: You need to build the notes plugin after making changes to this file.
-->
<html lang="en">
	<head>
		<meta charset="utf-8">

		<title>reveal.js - Speaker View</title>

		<style>
			body {
				font-family: Helvetica;
				font-size: 18px;
			}

			#current-slide,
			#upcoming-slide,
			#speaker-controls {
				padding: 6px;
				box-sizing: border-box;
				-moz-box-sizing: border-box;
			}

			#current-slide iframe,
			#upcoming-slide iframe {
				width: 100%;
				height: 100%;
				border: 1px solid #ddd;
			}

			#current-slide .label,
			#upcoming-slide .label {
				position: absolute;
				top: 10px;
				left: 10px;
				z-index: 2;
			}

			#connection-status {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 20;
				padding: 30% 20% 20% 20%;
				font-size: 18px;
				color: #222;
				background: #fff;
				text-align: center;
				box-sizing: border-box;
				line-height: 1.4;
			}

			.overlay-element {
				height: 34px;
				line-height: 34px;
				padding: 0 10px;
				text-shadow: none;
				background: rgba( 220, 220, 220, 0.8 );
				color: #222;
				font-size: 14px;
			}

			.overlay-element.interactive:hover {
				background: rgba( 220, 220, 220, 1 );
			}

			#current-slide {
				position: absolute;
				width: 60%;
				height: 100%;
				top: 0;
				left: 0;
				padding-right: 0;
			}

			#upcoming-slide {
				position: absolute;
				width: 40%;
				height: 40%;
				right: 0;
				top: 0;
			}

			/* Speaker controls */
			#speaker-controls {
				position: absolute;
				top: 40%;
				right: 0;
				width: 40%;
				height: 60%;
				overflow: auto;
				font-size: 18px;
			}

				.speaker-controls-time.hidden,
				.speaker-controls-notes.hidden {
					display: none;
				}

				.speaker-controls-time .label,
				.speaker-controls-pace .label,
				.speaker-controls-notes .label {
					text-transform: uppercase;
					font-weight: normal;
					font-size: 0.66em;
					color: #666;
					margin: 0;
				}

				.speaker-controls-time, .speaker-controls-pace {
					border-bottom: 1px solid rgba( 200, 200, 200, 0.5 );
					margin-bottom: 10px;
					padding: 10px 16px;
					padding-bottom: 20px;
					cursor: pointer;
				}

				.speaker-controls-time .reset-button {
					opacity: 0;
					float: right;
					color: #666;
					text-decoration: none;
				}
				.speaker-controls-time:hover .reset-button {
					opacity: 1;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock {
					width: 50%;
				}

				.speaker-controls-time .timer,
				.speaker-controls-time .clock,
				.speaker-controls-time .pacing .hours-value,
				.speaker-controls-time .pacing .minutes-value,
				.speaker-controls-time .pacing .seconds-value {
					font-size: 1.9em;
				}

				.speaker-controls-time .timer {
					float: left;
				}

				.speaker-controls-time .clock {
					float: right;
					text-align: right;
				}

				.speaker-controls-time span.mute {
					opacity: 0.3;
				}

				.speaker-controls-time .pacing-title {
					margin-top: 5px;
				}

				.speaker-controls-time .pacing.ahead {
					color: blue;
				}

				.speaker-controls-time .pacing.on-track {
					color: green;
				}

				.speaker-controls-time .pacing.behind {
					color: red;
				}

				.speaker-controls-notes {
					padding: 10px 16px;
				}

				.speaker-controls-notes .value {
					margin-top: 5px;
					line-height: 1.4;
					font-size: 1.2em;
				}

			/* Layout selector */
			#speaker-layout {
				position: absolute;
				top: 10px;
				right: 10px;
				color: #222;
				z-index: 10;
			}
				#speaker-layout select {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border: 0;
					box-shadow: 0;
					cursor: pointer;
					opacity: 0;

					font-size: 1em;
					background-color: transparent;

					-moz-appearance: none;
					-webkit-appearance: none;
					-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
				}

				#speaker-layout select:focus {
					outline: none;
					box-shadow: none;
				}

			.clear {
				clear: both;
			}

			/* Speaker layout: Wide */
			body[data-speaker-layout="wide"] #current-slide,
			body[data-speaker-layout="wide"] #upcoming-slide {
				width: 50%;
				height: 45%;
				padding: 6px;
			}

			body[data-speaker-layout="wide"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="wide"] #upcoming-slide {
				top: 0;
				left: 50%;
			}

			body[data-speaker-layout="wide"] #speaker-controls {
				top: 45%;
				left: 0;
				width: 100%;
				height: 50%;
				font-size: 1.25em;
			}

			/* Speaker layout: Tall */
			body[data-speaker-layout="tall"] #current-slide,
			body[data-speaker-layout="tall"] #upcoming-slide {
				width: 45%;
				height: 50%;
				padding: 6px;
			}

			body[data-speaker-layout="tall"] #current-slide {
				top: 0;
				left: 0;
			}

			body[data-speaker-layout="tall"] #upcoming-slide {
				top: 50%;
				left: 0;
			}

			body[data-speaker-layout="tall"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 45%;
				width: 55%;
				height: 100%;
				font-size: 1.25em;
			}

			/* Speaker layout: Notes only */
			body[data-speaker-layout="notes-only"] #current-slide,
			body[data-speaker-layout="notes-only"] #upcoming-slide {
				display: none;
			}

			body[data-speaker-layout="notes-only"] #speaker-controls {
				padding-top: 40px;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				font-size: 1.25em;
			}

			@media screen and (max-width: 1080px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 16px;
				}
			}

			@media screen and (max-width: 900px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 14px;
				}
			}

			@media screen and (max-width: 800px) {
				body[data-speaker-layout="default"] #speaker-controls {
					font-size: 12px;
				}
			}

		</style>
	</head>

	<body>

		<div id="connection-status">Loading speaker view...</div>

		<div id="current-slide"></div>
		<div id="upcoming-slide"><span class="overlay-element label">Upcoming</span></div>
		<div id="speaker-controls">
			<div class="speaker-controls-time">
				<h4 class="label">Time <span class="reset-button">Click to Reset</span></h4>
				<div class="clock">
					<span class="clock-value">0:00 AM</span>
				</div>
				<div class="timer">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
				<div class="clear"></div>

				<h4 class="label pacing-title" style="display: none">Pacing – Time to finish current slide</h4>
				<div class="pacing" style="display: none">
					<span class="hours-value">00</span><span class="minutes-value">:00</span><span class="seconds-value">:00</span>
				</div>
			</div>

			<div class="speaker-controls-notes hidden">
				<h4 class="label">Notes</h4>
				<div class="value"></div>
			</div>
		</div>
		<div id="speaker-layout" class="overlay-element interactive">
			<span class="speaker-layout-label"></span>
			<select class="speaker-layout-dropdown"></select>
		</div>

		<script>

			(function() {

				var notes,
					notesValue,
					currentState,
					currentSlide,
					upcomingSlide,
					layoutLabel,
					layoutDropdown,
					pendingCalls = {},
					lastRevealApiCallId = 0,
					connected = false

				var connectionStatus = document.querySelector( '#connection-status' );

				var SPEAKER_LAYOUTS = {
					'default': 'Default',
					'wide': 'Wide',
					'tall': 'Tall',
					'notes-only': 'Notes only'
				};

				setupLayout();

				let openerOrigin;

				try {
					openerOrigin = window.opener.location.origin;
				}
				catch ( error ) { console.warn( error ) }

				// In order to prevent XSS, the speaker view will only run if its
				// opener has the same origin as itself
				if( window.location.origin !== openerOrigin ) {
					connectionStatus.innerHTML = 'Cross origin error.<br>The speaker window can only be opened from the same origin.';
					return;
				}

				var connectionTimeout = setTimeout( function() {
					connectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';
				}, 5000 );

				window.addEventListener( 'message', function( event ) {

					// Validate the origin of all messages to avoid parsing messages
					// that aren't meant for us. Ignore when running off file:// so
					// that the speaker view continues to work without a web server.
					if( window.location.origin !== event.origin && window.location.origin !== 'file://' ) {
						return
					}

					clearTimeout( connectionTimeout );
					connectionStatus.style.display = 'none';

					var data = JSON.parse( event.data );

					// The overview mode is only useful to the reveal.js instance
					// where navigation occurs so we don't sync it
					if( data.state ) delete data.state.overview;

					// Messages sent by the notes plugin inside of the main window
					if( data && data.namespace === 'reveal-notes' ) {
						if( data.type === 'connect' ) {
							handleConnectMessage( data );
						}
						else if( data.type === 'state' ) {
							handleStateMessage( data );
						}
						else if( data.type === 'return' ) {
							pendingCalls[data.callId](data.result);
							delete pendingCalls[data.callId];
						}
					}
					// Messages sent by the reveal.js inside of the current slide preview
					else if( data && data.namespace === 'reveal' ) {
						const supportedEvents = [
							'slidechanged',
							'fragmentshown',
							'fragmenthidden',
							'paused',
							'resumed',
							'previewiframe',
							'previewimage',
							'previewvideo',
							'closeoverlay'
						];

						if( /ready/.test( data.eventName ) ) {
							// Send a message back to notify that the handshake is complete
							window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );
						}
						else if( supportedEvents.includes( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {
							dispatchStateToMainWindow( data.state );
						}
					}

				} );

				/**
				 * Updates the presentation in the main window to match the state
				 * of the presentation in the notes window.
				 */
				const dispatchStateToMainWindow = debounce(( state ) => {
					window.opener.postMessage( JSON.stringify({ method: 'setState', args: [ state ]} ), '*' );
				}, 500);

				/**
				 * Asynchronously calls the Reveal.js API of the main frame.
				 */
				function callRevealApi( methodName, methodArguments, callback ) {

					var callId = ++lastRevealApiCallId;
					pendingCalls[callId] = callback;
					window.opener.postMessage( JSON.stringify( {
						namespace: 'reveal-notes',
						type: 'call',
						callId: callId,
						methodName: methodName,
						arguments: methodArguments
					} ), '*' );

				}

				/**
				 * Called when the main window is trying to establish a
				 * connection.
				 */
				function handleConnectMessage( data ) {

					if( connected === false ) {
						connected = true;

						setupIframes( data );
						setupKeyboard();
						setupNotes();
						setupTimer();
						setupHeartbeat();
					}

				}

				/**
				 * Called when the main window sends an updated state.
				 */
				function handleStateMessage( data ) {

					// Store the most recently set state to avoid circular loops
					// applying the same state
					currentState = JSON.stringify( data.state );

					// No need for updating the notes in case of fragment changes
					if ( data.notes ) {
						notes.classList.remove( 'hidden' );
						notesValue.style.whiteSpace = data.whitespace;
						if( data.markdown ) {
							notesValue.innerHTML = marked( data.notes );
						}
						else {
							notesValue.innerHTML = data.notes;
						}
					}
					else {
						notes.classList.add( 'hidden' );
					}

					// Don't show lightboxes in the upcoming slide
					const { previewVideo, previewImage, previewIframe, ...upcomingState } = data.state;

					// Update the note slides
					currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ upcomingState ] }), '*' );
					upcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );

				}

				// Limit to max one state update per X ms
				handleStateMessage = debounce( handleStateMessage, 200 );

				/**
				 * Forward keyboard events to the current slide window.
				 * This enables keyboard events to work even if focus
				 * isn't set on the current slide iframe.
				 *
				 * Block F5 default handling, it reloads and disconnects
				 * the speaker notes window.
				 */
				function setupKeyboard() {

					document.addEventListener( 'keydown', function( event ) {
						if( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {
							event.preventDefault();
							return false;
						}
						currentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );
					} );

				}

				/**
				 * Creates the preview iframes.
				 */
				function setupIframes( data ) {

					var params = [
						'receiver',
						'progress=false',
						'history=false',
						'transition=none',
						'autoSlide=0',
						'backgroundTransition=none'
					].join( '&' );

					var urlSeparator = /\\?/.test(data.url) ? '&' : '?';
					var hash = '#/' + data.state.indexh + '/' + data.state.indexv;
					var currentURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&postMessageEvents=true' + hash;
					var upcomingURL = data.url + urlSeparator + params + '&scrollActivationWidth=false&controls=false' + hash;

					currentSlide = document.createElement( 'iframe' );
					currentSlide.setAttribute( 'width', 1280 );
					currentSlide.setAttribute( 'height', 1024 );
					currentSlide.setAttribute( 'src', currentURL );
					document.querySelector( '#current-slide' ).appendChild( currentSlide );

					upcomingSlide = document.createElement( 'iframe' );
					upcomingSlide.setAttribute( 'width', 640 );
					upcomingSlide.setAttribute( 'height', 512 );
					upcomingSlide.setAttribute( 'src', upcomingURL );
					document.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );

				}

				/**
				 * Setup the notes UI.
				 */
				function setupNotes() {

					notes = document.querySelector( '.speaker-controls-notes' );
					notesValue = document.querySelector( '.speaker-controls-notes .value' );

				}

				/**
				 * We send out a heartbeat at all times to ensure we can
				 * reconnect with the main presentation window after reloads.
				 */
				function setupHeartbeat() {

					setInterval( () => {
						window.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'heartbeat'} ), '*' );
					}, 1000 );

				}

				function getTimings( callback ) {

					callRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {
						callRevealApi( 'getConfig', [], function ( config ) {
							var totalTime = config.totalTime;
							var minTimePerSlide = config.minimumTimePerSlide || 0;
							var defaultTiming = config.defaultTiming;
							if ((defaultTiming == null) && (totalTime == null)) {
								callback(null);
								return;
							}
							// Setting totalTime overrides defaultTiming
							if (totalTime) {
								defaultTiming = 0;
							}
							var timings = [];
							for ( var i in slideAttributes ) {
								var slide = slideAttributes[ i ];
								var timing = defaultTiming;
								if( slide.hasOwnProperty( 'data-timing' )) {
									var t = slide[ 'data-timing' ];
									timing = parseInt(t);
									if( isNaN(timing) ) {
										console.warn("Could not parse timing '" + t + "' of slide " + i + "; using default of " + defaultTiming);
										timing = defaultTiming;
									}
								}
								timings.push(timing);
							}
							if ( totalTime ) {
								// After we've allocated time to individual slides, we summarize it and
								// subtract it from the total time
								var remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );
								// The remaining time is divided by the number of slides that have 0 seconds
								// allocated at the moment, giving the average time-per-slide on the remaining slides
								var remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length
								var timePerSlide = Math.round( remainingTime / remainingSlides, 0 )
								// And now we replace every zero-value timing with that average
								timings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );
							}
							var slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length
							if ( slidesUnderMinimum ) {
								message = "The pacing time for " + slidesUnderMinimum + " slide(s) is under the configured minimum of " + minTimePerSlide + " seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).";
								alert(message);
							}
							callback( timings );
						} );
					} );

				}

				/**
				 * Return the number of seconds allocated for presenting
				 * all slides up to and including this one.
				 */
				function getTimeAllocated( timings, callback ) {

					callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
						var allocated = 0;
						for (var i in timings.slice(0, currentSlide + 1)) {
							allocated += timings[i];
						}
						callback( allocated );
					} );

				}

				/**
				 * Create the timer and clock and start updating them
				 * at an interval.
				 */
				function setupTimer() {

					var start = new Date(),
					timeEl = document.querySelector( '.speaker-controls-time' ),
					clockEl = timeEl.querySelector( '.clock-value' ),
					hoursEl = timeEl.querySelector( '.hours-value' ),
					minutesEl = timeEl.querySelector( '.minutes-value' ),
					secondsEl = timeEl.querySelector( '.seconds-value' ),
					pacingTitleEl = timeEl.querySelector( '.pacing-title' ),
					pacingEl = timeEl.querySelector( '.pacing' ),
					pacingHoursEl = pacingEl.querySelector( '.hours-value' ),
					pacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),
					pacingSecondsEl = pacingEl.querySelector( '.seconds-value' );

					var timings = null;
					getTimings( function ( _timings ) {

						timings = _timings;
						if (_timings !== null) {
							pacingTitleEl.style.removeProperty('display');
							pacingEl.style.removeProperty('display');
						}

						// Update once directly
						_updateTimer();

						// Then update every second
						setInterval( _updateTimer, 1000 );

					} );


					function _resetTimer() {

						if (timings == null) {
							start = new Date();
							_updateTimer();
						}
						else {
							// Reset timer to beginning of current slide
							getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
								var slideEndTiming = slideEndTimingSeconds * 1000;
								callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
									var currentSlideTiming = timings[currentSlide] * 1000;
									var previousSlidesTiming = slideEndTiming - currentSlideTiming;
									var now = new Date();
									start = new Date(now.getTime() - previousSlidesTiming);
									_updateTimer();
								} );
							} );
						}

					}

					timeEl.addEventListener( 'click', function() {
						_resetTimer();
						return false;
					} );

					function _displayTime( hrEl, minEl, secEl, time) {

						var sign = Math.sign(time) == -1 ? "-" : "";
						time = Math.abs(Math.round(time / 1000));
						var seconds = time % 60;
						var minutes = Math.floor( time / 60 ) % 60 ;
						var hours = Math.floor( time / ( 60 * 60 )) ;
						hrEl.innerHTML = sign + zeroPadInteger( hours );
						if (hours == 0) {
							hrEl.classList.add( 'mute' );
						}
						else {
							hrEl.classList.remove( 'mute' );
						}
						minEl.innerHTML = ':' + zeroPadInteger( minutes );
						if (hours == 0 && minutes == 0) {
							minEl.classList.add( 'mute' );
						}
						else {
							minEl.classList.remove( 'mute' );
						}
						secEl.innerHTML = ':' + zeroPadInteger( seconds );
					}

					function _updateTimer() {

						var diff, hours, minutes, seconds,
						now = new Date();

						diff = now.getTime() - start.getTime();

						clockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );
						_displayTime( hoursEl, minutesEl, secondsEl, diff );
						if (timings !== null) {
							_updatePacing(diff);
						}

					}

					function _updatePacing(diff) {

						getTimeAllocated( timings, function ( slideEndTimingSeconds ) {
							var slideEndTiming = slideEndTimingSeconds * 1000;

							callRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {
								var currentSlideTiming = timings[currentSlide] * 1000;
								var timeLeftCurrentSlide = slideEndTiming - diff;
								if (timeLeftCurrentSlide < 0) {
									pacingEl.className = 'pacing behind';
								}
								else if (timeLeftCurrentSlide < currentSlideTiming) {
									pacingEl.className = 'pacing on-track';
								}
								else {
									pacingEl.className = 'pacing ahead';
								}
								_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );
							} );
						} );
					}

				}

				/**
				 * Sets up the speaker view layout and layout selector.
				 */
				function setupLayout() {

					layoutDropdown = document.querySelector( '.speaker-layout-dropdown' );
					layoutLabel = document.querySelector( '.speaker-layout-label' );

					// Render the list of available layouts
					for( var id in SPEAKER_LAYOUTS ) {
						var option = document.createElement( 'option' );
						option.setAttribute( 'value', id );
						option.textContent = SPEAKER_LAYOUTS[ id ];
						layoutDropdown.appendChild( option );
					}

					// Monitor the dropdown for changes
					layoutDropdown.addEventListener( 'change', function( event ) {

						setLayout( layoutDropdown.value );

					}, false );

					// Restore any currently persisted layout
					setLayout( getLayout() );

				}

				/**
				 * Sets a new speaker view layout. The layout is persisted
				 * in local storage.
				 */
				function setLayout( value ) {

					var title = SPEAKER_LAYOUTS[ value ];

					layoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );
					layoutDropdown.value = value;

					document.body.setAttribute( 'data-speaker-layout', value );

					// Persist locally
					if( supportsLocalStorage() ) {
						window.localStorage.setItem( 'reveal-speaker-layout', value );
					}

				}

				/**
				 * Returns the ID of the most recently set speaker layout
				 * or our default layout if none has been set.
				 */
				function getLayout() {

					if( supportsLocalStorage() ) {
						var layout = window.localStorage.getItem( 'reveal-speaker-layout' );
						if( layout ) {
							return layout;
						}
					}

					// Default to the first record in the layouts hash
					for( var id in SPEAKER_LAYOUTS ) {
						return id;
					}

				}

				function supportsLocalStorage() {

					try {
						localStorage.setItem('test', 'test');
						localStorage.removeItem('test');
						return true;
					}
					catch( e ) {
						return false;
					}

				}

				function zeroPadInteger( num ) {

					var str = '00' + parseInt( num );
					return str.substring( str.length - 2 );

				}

				/**
				 * Limits the frequency at which a function can be called.
				 */
				function debounce( fn, ms ) {

					var lastTime = 0,
						timeout;

					return function() {

						var args = arguments;
						var context = this;

						clearTimeout( timeout );

						var timeSinceLastCall = Date.now() - lastTime;
						if( timeSinceLastCall > ms ) {
							fn.apply( context, args );
							lastTime = Date.now();
						}
						else {
							timeout = setTimeout( function() {
								fn.apply( context, args );
								lastTime = Date.now();
							}, ms - timeSinceLastCall );
						}

					}

				}

			})();

		<\/script>
	</body>
</html>`),!e)return void alert("Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.");(function(){const l=t.getConfig().url,o=typeof l=="string"?l:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search;s=setInterval((function(){e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",state:t.getState(),url:o}),"*")}),500),window.addEventListener("message",a)})()}}function i(l){let o=t.getCurrentSlide(),c=o.querySelectorAll("aside.notes"),h=o.querySelector(".current-fragment"),u={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:t.getState()};if(o.hasAttribute("data-notes")&&(u.notes=o.getAttribute("data-notes"),u.whitespace="pre-wrap"),h){let g=h.querySelector("aside.notes");g?(u.notes=g.innerHTML,u.markdown=typeof g.getAttribute("data-markdown")=="string",c=null):h.hasAttribute("data-notes")&&(u.notes=h.getAttribute("data-notes"),u.whitespace="pre-wrap",c=null)}c&&c.length&&(c=Array.from(c).filter((g=>g.closest(".fragment")===null)),u.notes=c.map((g=>g.innerHTML)).join(`
`),u.markdown=c[0]&&typeof c[0].getAttribute("data-markdown")=="string"),e.postMessage(JSON.stringify(u),"*")}function a(l){if((function(o){try{return window.location.origin===o.source.location.origin}catch{return!1}})(l))try{let o=JSON.parse(l.data);o&&o.namespace==="reveal-notes"&&o.type==="connected"?(clearInterval(s),r()):o&&o.namespace==="reveal-notes"&&o.type==="call"&&(function(c,h,u){let g=t[c].apply(t,h);e.postMessage(JSON.stringify({namespace:"reveal-notes",type:"return",result:g,callId:u}),"*")})(o.methodName,o.arguments,o.callId)}catch{}}function r(){t.on("slidechanged",i),t.on("fragmentshown",i),t.on("fragmenthidden",i),t.on("overviewhidden",i),t.on("overviewshown",i),t.on("paused",i),t.on("resumed",i),t.on("previewiframe",i),t.on("previewimage",i),t.on("previewvideo",i),t.on("closeoverlay",i),i()}return{id:"notes",init:function(l){t=l,/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null?n():window.addEventListener("message",(o=>{if(!e&&typeof o.data=="string"){let h;try{h=JSON.parse(o.data)}catch{}h&&h.namespace==="reveal-notes"&&h.type==="heartbeat"&&(c=o.source,e&&!e.closed?e.focus():(e=c,window.addEventListener("message",a),r()))}var c})),t.addKeyBinding({keyCode:83,key:"S",description:"Speaker notes view"},(function(){n()})))},open:n}};/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */const li=()=>{let s,t,e,n,i,a,r;function l(){t=document.createElement("div"),t.classList.add("searchbox"),t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.zIndex=10,t.innerHTML=`<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>
		</span>`,e=t.querySelector(".searchinput"),e.style.width="240px",e.style.fontSize="14px",e.style.padding="4px 6px",e.style.color="#000",e.style.background="#fff",e.style.borderRadius="2px",e.style.border="0",e.style.outline="0",e.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",e.style["-webkit-appearance"]="none",s.getRevealElement().appendChild(t),e.addEventListener("keyup",(function(g){g.keyCode===13?(g.preventDefault(),(function(){if(a){var v=e.value;v===""?(r&&r.remove(),n=null):(r=new u("slidecontent"),n=r.apply(v),i=0)}n&&(n.length&&n.length<=i&&(i=0),n.length>i&&(s.slide(n[i].h,n[i].v),i++))})(),a=!1):a=!0}),!1),c()}function o(){t||l(),t.style.display="inline",e.focus(),e.select()}function c(){t||l(),t.style.display="none",r&&r.remove()}function h(){t||l(),t.style.display!=="inline"?o():c()}function u(g,v){var L=document.getElementById(g)||document.body,p=v||"EM",F=new RegExp("^(?:"+p+"|SCRIPT|FORM)$"),x=["#ff6","#a0ffff","#9f9","#f99","#f6f"],q=[],X=0,M="",R=[];this.setRegex=function(E){E=E.trim(),M=new RegExp("("+E+")","i")},this.getRegex=function(){return M.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(E){if(E!=null&&E&&M&&!F.test(E.nodeName)){if(E.hasChildNodes())for(var B=0;B<E.childNodes.length;B++)this.hiliteWords(E.childNodes[B]);var U,P;if(E.nodeType==3&&(U=E.nodeValue)&&(P=M.exec(U))){for(var f=E;f!=null&&f.nodeName!="SECTION";)f=f.parentNode;var I=s.getIndices(f),N=R.length,O=!1;for(B=0;B<N;B++)R[B].h===I.h&&R[B].v===I.v&&(O=!0);O||R.push(I),q[P[0].toLowerCase()]||(q[P[0].toLowerCase()]=x[X++%x.length]);var _=document.createElement(p);_.appendChild(document.createTextNode(P[0])),_.style.backgroundColor=q[P[0].toLowerCase()],_.style.fontStyle="inherit",_.style.color="#000";var V=E.splitText(P.index);V.nodeValue=V.nodeValue.substring(P[0].length),E.parentNode.insertBefore(_,V)}}},this.remove=function(){for(var E,B=document.getElementsByTagName(p);B.length&&(E=B[0]);)E.parentNode.replaceChild(E.firstChild,E)},this.apply=function(E){if(E!=null&&E)return this.remove(),this.setRegex(E),this.hiliteWords(L),R}}return{id:"search",init:g=>{s=g,s.registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(v){v.key=="F"&&(v.ctrlKey||v.metaKey)&&(v.preventDefault(),h())}),!1)},open:o,close:c,toggle:h}};/*!
 * reveal.js Zoom plugin
 */const ci={id:"zoom",init:function(s){s.getRevealElement().addEventListener("mousedown",(function(t){var e=/Linux/.test(window.navigator.platform)?"ctrl":"alt",n=(s.getConfig().zoomKey?s.getConfig().zoomKey:e)+"Key",i=s.getConfig().zoomLevel?s.getConfig().zoomLevel:2;t[n]&&!s.isOverview()&&(t.preventDefault(),qt.to({x:t.clientX,y:t.clientY,scale:i,pan:!1}))}))},destroy:()=>{qt.reset()}};var di=()=>ci,qt=(function(){var s=1,t=0,e=0,n=-1,i=-1,a="transform"in document.body.style;function r(c,h){var u=o();if(c.width=c.width||1,c.height=c.height||1,c.x-=(window.innerWidth-c.width*h)/2,c.y-=(window.innerHeight-c.height*h)/2,a)if(h===1)document.body.style.transform="";else{var g=u.x+"px "+u.y+"px",v="translate("+-c.x+"px,"+-c.y+"px) scale("+h+")";document.body.style.transformOrigin=g,document.body.style.transform=v}else h===1?(document.body.style.position="",document.body.style.left="",document.body.style.top="",document.body.style.width="",document.body.style.height="",document.body.style.zoom=""):(document.body.style.position="relative",document.body.style.left=-(u.x+c.x)/h+"px",document.body.style.top=-(u.y+c.y)/h+"px",document.body.style.width=100*h+"%",document.body.style.height=100*h+"%",document.body.style.zoom=h);s=h,document.documentElement.classList&&(s!==1?document.documentElement.classList.add("zoomed"):document.documentElement.classList.remove("zoomed"))}function l(){var c=.12*window.innerWidth,h=.12*window.innerHeight,u=o();e<h?window.scroll(u.x,u.y-14/s*(1-e/h)):e>window.innerHeight-h&&window.scroll(u.x,u.y+(1-(window.innerHeight-e)/h)*(14/s)),t<c?window.scroll(u.x-14/s*(1-t/c),u.y):t>window.innerWidth-c&&window.scroll(u.x+(1-(window.innerWidth-t)/c)*(14/s),u.y)}function o(){return{x:window.scrollX!==void 0?window.scrollX:window.pageXOffset,y:window.scrollY!==void 0?window.scrollY:window.pageYOffset}}return a&&(document.body.style.transition="transform 0.8s ease"),document.addEventListener("keyup",(function(c){s!==1&&c.keyCode===27&&qt.out()})),document.addEventListener("mousemove",(function(c){s!==1&&(t=c.clientX,e=c.clientY)})),{to:function(c){if(s!==1)qt.out();else{if(c.x=c.x||0,c.y=c.y||0,c.element){var h=c.element.getBoundingClientRect();c.x=h.left-20,c.y=h.top-20,c.width=h.width+40,c.height=h.height+40}c.width!==void 0&&c.height!==void 0&&(c.scale=Math.max(Math.min(window.innerWidth/c.width,window.innerHeight/c.height),1)),c.scale>1&&(c.x*=c.scale,c.y*=c.scale,r(c,c.scale),c.pan!==!1&&(n=setTimeout((function(){i=setInterval(l,1e3/60)}),800)))}},out:function(){clearTimeout(n),clearInterval(i),r({x:0,y:0},1),s=1},magnify:function(c){this.to(c)},reset:function(){this.out()},zoomLevel:function(){return s}}})();/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=(s,t,e=[])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",s);return Object.keys(t).forEach(i=>{n.setAttribute(i,String(t[i]))}),e.length&&e.forEach(i=>{const a=mn(...i);n.appendChild(a)}),n};var ui=([s,t,e])=>mn(s,t,e);/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=s=>Array.from(s.attributes).reduce((t,e)=>(t[e.name]=e.value,t),{}),pi=s=>typeof s=="string"?s:!s||!s.class?"":s.class&&typeof s.class=="string"?s.class.split(" "):s.class&&Array.isArray(s.class)?s.class:"",gi=s=>s.flatMap(pi).map(e=>e.trim()).filter(Boolean).filter((e,n,i)=>i.indexOf(e)===n).join(" "),mi=s=>s.replace(/(\w)(\w*)(_|-|\s*)/g,(t,e,n)=>e.toUpperCase()+n.toLowerCase()),Qe=(s,{nameAttr:t,icons:e,attrs:n})=>{const i=s.getAttribute(t);if(i==null)return;const a=mi(i),r=e[a];if(!r)return console.warn(`${s.outerHTML} icon name was not found in the provided icons object.`);const l=hi(s),[o,c,h]=r,u={...c,"data-lucide":i,...n,...l},g=gi(["lucide",`lucide-${i}`,l,n]);g&&Object.assign(u,{class:g});const v=ui([o,u,h]);return s.parentNode?.replaceChild(v,s)};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=["svg",ht,[["path",{d:"M16 7h.01"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"}],["path",{d:"m20 7 2 .5-2 .5"}],["path",{d:"M10 18v3"}],["path",{d:"M14 17.75V21"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=["svg",ht,[["path",{d:"M16 2v2"}],["path",{d:"M17.915 22a6 6 0 0 0-12 0"}],["path",{d:"M8 2v2"}],["circle",{cx:"12",cy:"12",r:"4"}],["rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=["svg",ht,[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=["svg",ht,[["path",{d:"M3 12h.01"}],["path",{d:"M3 18h.01"}],["path",{d:"M3 6h.01"}],["path",{d:"M8 12h13"}],["path",{d:"M8 18h13"}],["path",{d:"M8 6h13"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=["svg",ht,[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=["svg",ht,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=["svg",ht,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=["svg",ht,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];/**
 * @license lucide v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=({icons:s={},nameAttr:t="data-lucide",attrs:e={}}={})=>{if(!Object.values(s).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${t}]`);if(Array.from(n).forEach(i=>Qe(i,{nameAttr:t,icons:s,attrs:e})),t==="data-lucide"){const i=document.querySelectorAll("[icon-name]");i.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(i).forEach(a=>Qe(a,{nameAttr:"icon-name",icons:s,attrs:e})))}},Ai={problem:"Many growing companies have finance, stock, sales, purchasing, and operations running on different versions of the truth.",solution:"I help them map the business process, choose the right ERPNext/BirdTec/custom-system approach, and connect it into one reliable operating model.",request:"This month, please introduce me to an owner, CFO, or COO whose business has changed faster than their systems can adapt."},Ri=JSON.parse(`[{"id":"identity","code":"[01 / IDENTITY]","title":"Arvy Budiarto","subtitle":"ERPNext and business systems that grow with your business.","kicker":"AGILE TECHNICA","layout":"hero","brandIds":["agile-technica","bni-firefly"],"component":"pillars","heroImageSrc":"./assets/hero/arvy-art-deco-portrait.png","heroImageAlt":"Arvy Budiarto in an Art Deco portrait against an optimistic city backdrop","pillars":[{"label":"ERP System Implementation, powered by ERPNext","icon":"database"},{"label":"Digital Transformation","icon":"refresh-cw"},{"label":"Poultry Management Systems","icon":"bird"},{"label":"ERPNext CoreTax Compatibility","imageSrc":"./assets/icons/coretax-coins-icon.png"},{"label":"CRM","icon":"contact-round"},{"label":"HR","icon":"users"}],"mode":"all"},{"id":"problem","code":"[02 / PROBLEM]","title":"Business growth is great. But your systems must keep up.","subtitle":"More branches, products, channels, warehouses, and people create new ways of working.","layout":"visual-story","component":"illustration","illustrationId":"growth-outpaces-systems","mode":"feature"},{"id":"problem-truths","code":"[02A / DIFFERENT TRUTHS]","title":"Then every team sees a different truth.","subtitle":"Warehouse, finance, and management start defending different numbers.","layout":"visual-story","component":"illustration","illustrationId":"different-truths","mode":"feature"},{"id":"problem-pain","code":"[02B / THE PAIN]","title":"The pain appears in daily work.","subtitle":"Duplicate entry. Late reports. Missing stock. Money leakage. Weak controls.","layout":"visual-story","component":"illustration","illustrationId":"systems-pain","mode":"feature"},{"id":"problem-fraud","code":"[02C / INTERNAL FRAUD]","title":"Weak controls create room for internal fraud.","subtitle":"Fake transactions. Inflated material and equipment purchases. Kickbacks. Company money redirected for personal gain.","layout":"visual-story","component":"illustration","illustrationId":"internal-fraud","mode":"feature"},{"id":"gains-goals-main","code":"[G / GOALS]","title":"Goals: What I'm Building Towards!","subtitle":"Businesses where management, finance, stock, sales, and operations work from the same reality.","component":"gains","gainsSection":"goals","goalImageId":"optimistic-road","labelsOnly":true,"hideSectionTitle":true,"brandIds":["agile-technica"],"mode":"feature","verticals":[{"id":"erpnext","code":"[03A / GOALS - ERPNext]","title":"Goals detail: ERPNext as the connected operating core.","subtitle":"ERPNext supports the goal of one source of truth across finance, stock, operations, HR, approvals, and reporting.","component":"topology","map":{"left":["Accounting","Sales","Purchasing","Inventory","Manufacturing"],"center":"ERPNext","right":["CRM","Projects","Assets","HR","Reports"]},"points":[{"label":"Integrated","detail":"Transactions flow from operations into finance."},{"label":"Open source","detail":"The platform can be extended and controlled."},{"label":"No traditional per-user licensing burden","detail":"Growth does not automatically multiply software-license fees with every user."},{"label":"Customizable","detail":"Forms, workflows, reports, and applications can be adapted."},{"label":"Integration ready","detail":"External systems can connect through APIs and custom integrations."}],"mode":"one-to-one","verticals":[{"id":"erp-flow","code":"[04A / FLOW]","title":"Operational events become accounting truth.","component":"process","steps":["Sales Order","Delivery","Invoice","Payment","General Ledger"],"feature":true},{"id":"erp-architecture","code":"[04B / ARCHITECTURE]","title":"Open architecture means the system can grow.","component":"process","steps":["ERPNext Core","Custom App","External API","Business Intelligence"],"mode":"one-to-one"},{"id":"erp-commercial","code":"[04C / COMMERCIAL]","title":"Open source changes the commercial model.","points":["Hosting has a cost.","Implementation has a cost.","Migration has a cost.","Support has a cost.","Customization has a cost.","Professional expertise has value."],"component":"metric","metrics":[{"value":"0","label":"traditional per-user license pressure","context":"Conceptual model only; not competitor pricing."}],"mode":"one-to-one"},{"id":"erp-indonesia-tax","code":"[04D / INDONESIA]","title":"Localized for Indonesia.","subtitle":"Agile Technica extends ERPNext with Indonesian operational and tax requirements.","points":[{"label":"CoreTax E-Faktur generator","detail":"Generate Indonesian tax-ready outputs from ERP data."},{"label":"CoreTax XML exporter","detail":"Prepare structured tax files without manual retyping."},{"label":"CoreTax result importer","detail":"Bring tax processing results back into the system."},{"label":"Indonesian reports","detail":"Reduce manual reporting work and improve traceability."}],"component":"process","steps":["ERP transaction","Tax data","XML export","CoreTax result","ERP traceability"],"mode":"one-to-one"}]}]},{"id":"erpnext-operating-system","code":"[G / GOALS - ERPNext]","title":"ERPNext is the business operating system.","subtitle":"It connects the work that happens across the company, so every team works from the same business reality.","brandIds":["agile-technica"],"component":"topology","map":{"illustrated":true,"sceneAsset":"erpnext-operation-scenes","bottomLogos":["erpnext","frappe-certified-partner"],"left":["Sales","Purchasing","Manufacturing"],"center":"ERPNext","right":["Accounting","Stock","HR"]},"mode":"feature"},{"id":"birdtec-hero","code":"[G / GOALS - POULTRY]","title":"Our Flagship Product: BirdTec.","subtitle":"BirdTec is made for poultry industry end to end.","layout":"birdtec-hero","brandIds":["birdtec"],"component":"illustration","illustrationId":"birdtec-poultry-operations","mode":"feature"},{"id":"birdtec","code":"[G / GOALS - POULTRY]","title":"BirdTec connects the poultry business end to end.","subtitle":"From farm performance to inventory, costing, settlement, and finance - one business view.","layout":"birdtec-dashboard","brandIds":["birdtec"],"component":"product","productId":"birdtec-farm-analyzer","points":["See farm and flock performance in one practical view.","Compare feed, FCR, production, and earnings before management has to chase spreadsheets."],"mode":"feature","verticals":[{"id":"birdtec-layer","code":"[06A / LAYER]","title":"Layer operations need daily operational discipline.","component":"process","steps":["Flock lifecycle","Daily egg production","Feed","Mortality","Grading","Performance","Profitability"],"mode":"one-to-one"},{"id":"birdtec-broiler","code":"[06B / BROILER]","title":"Broiler and kemitraan need connected performance and settlement.","component":"process","steps":["Placement","DOC","Feed distribution","Medicine","Weight","FCR","Harvest","Settlement"],"mode":"one-to-one"},{"id":"birdtec-processing","code":"[06C / PROCESSING]","title":"Processing connects production yield with inventory, sales, and costing.","component":"process","steps":["Live-bird receiving","Production yield","Grading","Cold storage","Inventory","Sales","Costing"],"mode":"one-to-one"}]},{"id":"delivery-depth","code":"[G / GOALS - DELIVERY DEPTH]","title":"Bread, cheese, meat.","subtitle":"The depth of our work follows the depth of the business need.","component":"offerings","offerings":[{"level":"Bread","tagline":"Ready to use","items":["BizTec: a simplified ERPNext system, with no modifications.","Monthly server subscription includes 3 support hours; consultation is optional.","TemanHR and Frappe HR can follow the same no-modification model."]},{"level":"Cheese","tagline":"Fully assisted implementation","items":["Customized ERPNext implementation.","BirdTec implementation for poultry operations.","Large-scale TemanHR deployment, fully assisted."]},{"level":"Meat","tagline":"Enterprise transformation","items":["ERPNext with significant modification and integration into other systems.","Enterprise backbone work: deep consultation and business-process mapping into digital systems.","Highly tailored BirdTec for contract farming."]}],"mode":"feature"},{"id":"gains-skills-main","code":"[S / SKILLS]","title":"What I bring to the table.","subtitle":"I have worked from code and architecture to multi-team delivery and company leadership. Today, we are an official Frappe / ERPNext partner in Indonesia.","component":"gains","gainsSection":"skills","mode":"feature","verticals":[{"id":"proof","code":"[05A / SKILLS - PROOF]","title":"Skills credibility: proof you can verify.","subtitle":"Credibility belongs under Skills: official partner status, publications, and client references must be visible and properly verified.","brandIds":["bni-firefly"],"component":"evidence","claimIds":["official-frappe-partner","trobos-cover","agrina-cover","client-proof"],"mode":"one-to-one"},{"id":"implementation","code":"[05B / SKILLS - DELIVERY]","title":"Skills detail: Agile Technica turns system goals into delivery.","subtitle":"Business consulting, ERP implementation, and software engineering in one team.","component":"process","steps":["Discover","Design","Implement","Extend","Connect","Improve"],"points":[{"label":"Discover","detail":"Understand how the business earns money, moves stock, controls cost, and makes decisions."},{"label":"Design","detail":"Map processes, roles, approvals, controls, and reporting."},{"label":"Implement","detail":"Configure ERPNext, prepare data, and train users."},{"label":"Extend","detail":"Build custom applications and specialized functionality."}],"mode":"one-to-one","verticals":[{"id":"delivery-journey","code":"[05A / DELIVERY]","title":"From discovery to stabilization.","component":"process","steps":["Discovery","Blueprint","Configuration","Validation","Migration","Training","Go-live","Stabilization"],"mode":"one-to-one"},{"id":"consultant-risk","code":"[05C / DELIVERY RISK]","title":"A good system project also manages consultant risk.","subtitle":"The company profile names the frustrations buyers already fear: poor business understanding, weak communication, overpromising, delays, hidden costs, and insufficient training.","points":[{"label":"Business-first discovery","detail":"Understand how the company actually works before proposing configuration or customization."},{"label":"Collaborative delivery","detail":"Regular planning, testing, showcases, and user validation reduce surprise."},{"label":"Training and stabilization","detail":"Go-live is not the finish line; users need support as the new operating model settles."}],"component":"process","steps":["Free pre-sales analysis","Proposal and contract","Kickoff","Requirements","Collaborative development","Training and migration","Go-live and support"],"mode":"one-to-one"},{"id":"adaptation-levels","code":"[05B / ADAPTATION]","title":"Adapt only where the business case is real.","component":"process","steps":["Configuration","Custom fields","Workflow","Reports","Custom application","External integration"],"mode":"one-to-one"}]},{"id":"difference","code":"[05C / SKILLS - DIFFERENCE]","title":"We design the process before we automate it.","subtitle":"That is the difference between installing software and building a reliable business system.","component":"logos","logoIds":["agile-technica","birdtec","biztec","temanhr"],"points":[{"label":"Consulting","detail":"Clarify business logic, roles, controls, and decisions."},{"label":"ERP implementation","detail":"Configure and deploy the integrated platform."},{"label":"Software engineering","detail":"Build the extensions and integrations the business truly needs."}],"mode":"one-to-one"},{"id":"translator","code":"[05D / SKILLS - TRANSLATOR]","title":"I speak both languages: business and technology.","subtitle":"One operating model. One connected system. One source of truth.","points":[{"label":"Business","detail":"Strategy, management reporting, cost, profitability, governance, and control."},{"label":"Operations","detail":"Sales, purchasing, inventory, warehouses, manufacturing, and supply chain."},{"label":"Technology","detail":"ERP architecture, custom software, APIs, integration, automation, and analytics."}],"component":"topology","map":{"left":["Management intent","Operational reality","Accounting controls"],"center":"Architecture","right":["ERPNext","Custom apps","Integration"]},"mode":"one-to-one"}]},{"id":"career-journey","code":"[A / ACHIEVEMENTS]","title":"I learned the business from every side of delivery.","subtitle":"That journey is why I can talk with the owner, understand the operation, and still go deep with the technical team.","component":"process","steps":["Software engineer","Delivery leader","Company builder","ERP business owner"],"points":[{"label":"Engineer","detail":"Built high-performance wagering systems in Australia where speed, reliability, and constant business change mattered."},{"label":"Delivery Lead","detail":"Coached and led several onshore and offshore teams to discover, build, and release products iteratively."},{"label":"Founder","detail":"Co-founded Agile Technica in 2019 and grew the team from 3 people to more than 30."},{"label":"Today","detail":"Combine business ownership, ERPNext, custom software, integration, and change leadership in one conversation."}],"mode":"feature"},{"id":"proof-trobos","code":"[A / ACHIEVEMENTS - PUBLISHED]","title":"Recognized for bringing data into poultry operations.","subtitle":"Trobos Livestock, October 2021 - an article on integrated farm management, performance analysis, and connected business data.","layout":"publication","component":"publication","publicationId":"trobos-livestock-2021","mode":"feature"},{"id":"proof-agrina","code":"[A / ACHIEVEMENTS - COVER STORY]","title":"The technology story became a business story.","subtitle":"Agrina Magazine, October 2023 - Arvy and BirdTec featured on the cover for smarter poultry profitability.","layout":"publication","component":"publication","publicationId":"agrina-cover-2023","mode":"feature"},{"id":"gains-networks-main","code":"[N / NETWORKS]","title":"The easiest way to spot a referral for me.","subtitle":"You hear one of these. You think of Arvy.","component":"process","steps":["We're expanding.","Our stock never matches.","We don't know where the money goes.","We need better control."],"mode":"feature"},{"id":"referral","code":"[06 / LISTEN FOR]","title":"Listen for the brag or the complaint.","subtitle":"You do not need to diagnose the system. Just catch the signal and introduce the decision-maker.","component":"referrals","referralIds":["business-expansion","stock-mismatch","money-leakage","theft-risk"],"mode":"one-to-one"},{"id":"intro-script","code":"[07 / INTRO]","title":"You can introduce me like this.","component":"quote","quote":{"text":"I know someone who helps growing companies get finance, stock, and operations working from one reliable system. His name is Arvy from Agile Technica.","author":"That's enough. I'll take it from there."},"mode":"feature"},{"id":"built","code":"[08 / BUILT]","title":"BUILT is how we work.","subtitle":"Bold. United. Integrity. Lasting. Trust.","layout":"values","brandIds":["agile-technica"],"component":"values","values":[{"letter":"B","name":"Bold","behaviour":"Push into hard problems and challenge what no longer works.","imageId":"built-bold"},{"letter":"U","name":"United","behaviour":"Bring business, finance, operations, and technology into one team.","imageId":"built-united"},{"letter":"I","name":"Integrity","behaviour":"Stay professional, incorruptible, and always fly straight.","imageId":"built-integrity"},{"letter":"L","name":"Lasting","behaviour":"Create systems that last, improve, and evolve with the business.","imageId":"built-lasting"},{"letter":"T","name":"Trust","behaviour":"Give clients confidence that the project will be finished properly.","imageId":"built-trust"}],"mode":"feature"},{"id":"gains-interests-main","code":"[I / INTERESTS]","title":"My interests.","component":"gains","gainsSection":"interests","labelsOnly":true,"hideSectionTitle":true,"mode":"feature","verticals":[{"id":"personal","code":"[09A / PERSONAL]","title":"Bold means taking the shot.","subtitle":"The personal story comes after the business relevance.","component":"quote","quote":{"text":"You miss 100% of the shots you don't take.","author":"Wayne Gretzky","connection":"Starting Agile Technica, entering complicated industries, and taking responsibility for difficult implementations all require the courage to take worthwhile shots."},"points":["Software engineering","Retro computers and cameras","Agile, Neuro-linguistic programming (NLP), AI, and teaching","Curiosity that connects business and technology"],"mode":"one-to-one"}]},{"id":"client-portfolio","code":"[A / ACHIEVEMENTS - CLIENT PORTFOLIO]","title":"A client portfolio across industries.","subtitle":"A selection of organisations we have supported across ERP, custom software, training, seminars, and CSR.","layout":"portfolio","component":"portfolio","clientLogos":[5,2,4,7,6,9,10,11,13,14,15,17,18,20,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34,3,12,16],"portfolioId":"clients-2026","mode":"feature"},{"id":"partnership-journey","code":"[10 / PARTNERING]","title":"Partnering with Agile Technica.","subtitle":"A clear, collaborative path from the first conversation through continuous support.","brandIds":["agile-technica"],"component":"partnership","stages":["Free pre-sales analysis","Proposal and contract","Project kickoff","Business-requirements agreement","Collaborative development","Training, migration, and go-live","Continuous support"],"mode":"feature"},{"id":"weekly","code":"[11 / WEEKLY]","title":"Weekly BNI pitch.","subtitle":"One problem. One solution. One request.","component":"weekly","mode":"weekly"},{"id":"close","code":"[12 / CLOSE]","title":"Complex business. Clear systems. BUILT to last.","subtitle":"When a business has disconnected systems, unreliable stock, unclear costing, slow reporting, or operational complexity, introduce them to Arvy.","brandIds":["agile-technica","bni-firefly"],"component":"contact","monthlyRequest":true,"mode":"all"}]`),Ti={weekly:Ai,slides:Ri},Ci={problem:"Banyak perusahaan yang bertumbuh memakai data finance, stok, sales, purchasing, dan operasional yang tidak lagi sama.",solution:"Saya membantu memetakan proses bisnis, memilih pendekatan ERPNext/BirdTec/custom system yang tepat, lalu menghubungkannya menjadi operating model yang reliable.",request:"Bulan ini, mohon perkenalkan saya kepada owner, CFO, atau COO yang bisnisnya berubah lebih cepat daripada sistemnya bisa menyesuaikan."},Li=JSON.parse(`[{"id":"identity","code":"[01 / IDENTITY]","title":"Arvy Budiarto","subtitle":"ERPNext dan business systems yang berkembang bersama bisnis Anda.","kicker":"AGILE TECHNICA","layout":"hero","brandIds":["agile-technica","bni-firefly"],"component":"pillars","heroImageSrc":"./assets/hero/arvy-art-deco-portrait.png","heroImageAlt":"Arvy Budiarto dalam potret Art Deco dengan latar kota optimistis","pillars":[{"label":"ERP System Implementation","icon":"database"},{"label":"Digital Transformation","icon":"refresh-cw"},{"label":"Poultry Management Systems","icon":"bird"},{"label":"Kompatibilitas ERPNext CoreTax","imageSrc":"./assets/icons/coretax-coins-icon.png"},{"label":"CRM","icon":"contact-round"},{"label":"HR","icon":"users"}],"mode":"all"},{"id":"problem","code":"[02 / PROBLEM]","title":"Pertumbuhan bisnis itu baik. Tetapi sistem Anda harus mampu mengikutinya.","subtitle":"Cabang, produk, channel, gudang, dan tim baru menciptakan cara kerja baru.","layout":"visual-story","component":"illustration","illustrationId":"growth-outpaces-systems","mode":"feature"},{"id":"problem-truths","code":"[02A / DIFFERENT TRUTHS]","title":"Masing-masing tim bekerja dari versi data yang berbeda.","subtitle":"Gudang, finance, dan manajemen mulai berdebat dengan data versi masing-masing.","layout":"visual-story","component":"illustration","illustrationId":"different-truths","mode":"feature"},{"id":"problem-pain","code":"[02B / THE PAIN]","title":"Frustrasi  muncul dalam pekerjaan sehari-hari.","subtitle":"Input berulang. Laporan lambat. Stok hilang. Uang bocor. Kontrol lemah.","layout":"visual-story","component":"illustration","illustrationId":"systems-pain","mode":"feature"},{"id":"problem-fraud","code":"[02C / INTERNAL FRAUD]","title":"Kontrol yang lemah membuka ruang untuk kecurangan internal.","subtitle":"Transaksi palsu. Harga material dan peralatan dinaikkan. Kickback. Uang perusahaan dialihkan untuk keuntungan pribadi.","layout":"visual-story","component":"illustration","illustrationId":"internal-fraud","mode":"feature"},{"id":"gains-goals-main","code":"[G / GOALS]","title":"Apa yang sedang saya bangun.","subtitle":"Bisnis tempat management, finance, stok, sales, dan operations bekerja dari realita yang sama.","component":"gains","gainsSection":"goals","labelsOnly":true,"hideSectionTitle":true,"brandIds":["agile-technica"],"mode":"feature","verticals":[{"id":"erpnext","code":"[03A / GOALS - ERPNext]","title":"Goals detail: ERPNext sebagai operating core yang terhubung.","subtitle":"Terintegrasi, dapat dikembangkan, dan siap menghubungkan operasi dengan finance.","component":"topology","map":{"left":["Accounting","Sales","Purchasing","Inventory","Manufacturing"],"center":"ERPNext","right":["CRM","Projects","Assets","HR","Reports"]},"points":[{"label":"Integrated","detail":"Transaksi mengalir dari operasional ke finance."},{"label":"Open source","detail":"Platform dapat dikontrol dan dikembangkan."},{"label":"Tanpa beban lisensi per-user tradisional","detail":"Pertumbuhan user tidak otomatis menggandakan biaya lisensi software."},{"label":"Customizable","detail":"Form, workflow, report, dan aplikasi dapat disesuaikan."},{"label":"Integration ready","detail":"Sistem eksternal dapat terhubung melalui API dan custom integration."}],"mode":"one-to-one","verticals":[{"id":"erp-flow","code":"[04A / FLOW]","title":"Aktivitas operasional menjadi kebenaran akuntansi.","component":"process","steps":["Sales Order","Delivery","Invoice","Payment","General Ledger"],"feature":true},{"id":"erp-indonesia-tax","code":"[04D / INDONESIA]","title":"Localized for Indonesia.","subtitle":"Agile Technica memperluas ERPNext untuk kebutuhan operasional dan pajak Indonesia.","points":[{"label":"CoreTax E-Faktur generator","detail":"Generate output pajak dari data ERP."},{"label":"CoreTax XML exporter","detail":"Siapkan file pajak terstruktur tanpa input ulang manual."},{"label":"CoreTax result importer","detail":"Masukkan hasil proses pajak kembali ke sistem."},{"label":"Indonesian reports","detail":"Mengurangi pekerjaan reporting manual dan meningkatkan traceability."}],"component":"process","steps":["ERP transaction","Tax data","XML export","CoreTax result","ERP traceability"],"mode":"one-to-one"}]}]},{"id":"erpnext-operating-system","code":"[G / GOALS - ERPNext]","title":"ERPNext adalah business operating system.","subtitle":"ERPNext menghubungkan pekerjaan di seluruh perusahaan agar setiap tim bekerja dari realita bisnis yang sama.","brandIds":["agile-technica"],"component":"topology","map":{"illustrated":true,"sceneAsset":"erpnext-operation-scenes","bottomLogos":["erpnext","frappe-certified-partner"],"left":["Sales","Purchasing","Manufacturing"],"center":"ERPNext","right":["Accounting","Stock","HR"]},"mode":"feature"},{"id":"birdtec-hero","code":"[G / GOALS - BIRDTEC]","title":"BirdTec dibuat untuk bisnis poultry, dari hulu ke hilir.","subtitle":"Layer. Broiler. Kemitraan. Rumah potong ayam.","layout":"birdtec-hero","brandIds":["birdtec"],"component":"illustration","illustrationId":"birdtec-poultry-operations","mode":"feature"},{"id":"birdtec","code":"[G / GOALS - BIRDTEC]","title":"BirdTec menghubungkan bisnis poultry dari hulu ke hilir.","subtitle":"Dari performa farm hingga inventory, costing, settlement, dan finance - satu business view.","layout":"birdtec-dashboard","brandIds":["birdtec"],"component":"product","productId":"birdtec-farm-analyzer","points":["Melihat performa farm dan flock dalam satu tampilan praktis.","Membandingkan feed, FCR, produksi, dan earnings tanpa management harus mengejar spreadsheet."],"mode":"feature"},{"id":"delivery-depth","code":"[G / GOALS - DELIVERY DEPTH]","title":"Bread, cheese, meat.","subtitle":"Kedalaman pekerjaan kami mengikuti kedalaman kebutuhan bisnis.","component":"offerings","offerings":[{"level":"Bread","tagline":"Siap digunakan","items":["BizTec: ERPNext yang disederhanakan, tanpa modifikasi.","Subscription server bulanan mencakup 3 jam support; konsultasi bersifat opsional.","TemanHR dan Frappe HR juga dapat menggunakan model tanpa modifikasi."]},{"level":"Cheese","tagline":"Implementasi full assisted","items":["Implementasi ERPNext yang disesuaikan.","Implementasi BirdTec untuk operasi poultry.","Deployment TemanHR skala besar dengan pendampingan penuh."]},{"level":"Meat","tagline":"Transformasi enterprise","items":["ERPNext dengan modifikasi besar dan integrasi ke sistem lain.","Pekerjaan enterprise backbone: konsultasi mendalam dan pemetaan proses bisnis ke sistem digital.","BirdTec yang sangat disesuaikan untuk contract farming."]}],"mode":"feature"},{"id":"gains-skills-main","code":"[S / SKILLS]","title":"Apa yang saya bawa ke meja.","subtitle":"Karier saya berkembang dari coding dan architecture, ke multi-team delivery, lalu memimpin perusahaan. Sekarang kami official Frappe / ERPNext partner di Indonesia.","component":"gains","gainsSection":"skills","mode":"feature","verticals":[{"id":"proof","code":"[05A / SKILLS - PROOF]","title":"Kredibilitas Skills: bukti yang bisa diverifikasi.","subtitle":"Kredibilitasnya mencakup official partner status, publikasi, dan client reference yang perlu dipakai dengan tepat.","brandIds":["bni-firefly"],"component":"evidence","claimIds":["official-frappe-partner","trobos-cover","agrina-cover","client-proof"],"mode":"one-to-one"},{"id":"implementation","code":"[05B / SKILLS - DELIVERY]","title":"ERPNext adalah platform. Agile Technica mengubahnya menjadi operating system bisnis.","subtitle":"Business consulting, ERP implementation, dan software engineering dalam satu tim.","component":"process","steps":["Discover","Design","Implement","Extend","Connect","Improve"],"points":[{"label":"Discover","detail":"Memahami cara bisnis menghasilkan uang, memindahkan stok, mengontrol cost, dan mengambil keputusan."},{"label":"Design","detail":"Memetakan proses, role, approval, kontrol, dan reporting."},{"label":"Implement","detail":"Konfigurasi ERPNext, persiapan data, dan training user."},{"label":"Extend","detail":"Membangun aplikasi custom dan fungsi khusus."}],"mode":"one-to-one"},{"id":"translator","code":"[03 / TRANSLATOR]","title":"Saya berbicara dalam dua bahasa: bisnis dan teknologi.","subtitle":"Satu operating model. Satu sistem terhubung. Satu sumber kebenaran.","points":[{"label":"Business","detail":"Strategy, reporting manajemen, costing, profitabilitas, governance, dan kontrol."},{"label":"Operations","detail":"Sales, purchasing, inventory, gudang, manufacturing, dan supply chain."},{"label":"Technology","detail":"Arsitektur ERP, custom software, API, integrasi, automation, dan analytics."}],"component":"topology","map":{"left":["Tujuan manajemen","Realita operasional","Kontrol akuntansi"],"center":"Architecture","right":["ERPNext","Custom apps","Integration"]},"mode":"one-to-one"}]},{"id":"career-journey","code":"[A / ACHIEVEMENTS]","title":"Saya memahami bisnis dari setiap sisi delivery.","subtitle":"Perjalanan ini membuat saya bisa berbicara dengan owner, memahami operasi, dan tetap masuk cukup dalam bersama tim teknis.","component":"process","steps":["Software engineer","Delivery leader","Company builder","ERP business owner"],"points":[{"label":"Engineer","detail":"Membangun high-performance wagering systems di Australia, saat kecepatan, reliability, dan perubahan bisnis sangat menentukan."},{"label":"Delivery Lead","detail":"Melatih dan memimpin beberapa tim onshore dan offshore untuk menemukan, membangun, dan merilis product secara iterative."},{"label":"Founder","detail":"Mendirikan Agile Technica pada 2019 dan mengembangkan tim dari 3 menjadi lebih dari 30 orang."},{"label":"Sekarang","detail":"Menggabungkan pengalaman sebagai business owner, ERPNext, custom software, integration, dan change leadership dalam satu percakapan."}],"mode":"feature"},{"id":"proof-trobos","code":"[A / ACHIEVEMENTS - PUBLISHED]","title":"Diakui karena membawa data ke dalam operasi poultry.","subtitle":"Trobos Livestock, Oktober 2021 - artikel tentang integrated farm management, analisa performa, dan data bisnis yang terhubung.","layout":"publication","component":"publication","publicationId":"trobos-livestock-2021","mode":"feature"},{"id":"proof-agrina","code":"[A / ACHIEVEMENTS - COVER STORY]","title":"Cerita teknologi ini menjadi cerita bisnis.","subtitle":"Agrina Magazine, Oktober 2023 - Arvy dan BirdTec tampil di cover untuk profitabilitas bisnis unggas yang lebih cerdas.","layout":"publication","component":"publication","publicationId":"agrina-cover-2023","mode":"feature"},{"id":"gains-networks-main","code":"[N / NETWORKS]","title":"Cara paling mudah mengenali referral untuk saya.","subtitle":"Kalau Anda mendengar salah satu ini, ingat Arvy.","component":"process","steps":["Kami sedang ekspansi.","Stok kami tidak pernah cocok.","Kami tidak tahu uangnya ke mana.","Kami butuh kontrol yang lebih baik."],"mode":"feature"},{"id":"referral","code":"[06 / LISTEN FOR]","title":"Dengarkan bragging atau complaining.","subtitle":"Anda tidak perlu mendiagnosis sistemnya. Cukup tangkap sinyalnya dan perkenalkan decision-maker.","component":"referrals","referralIds":["business-expansion","stock-mismatch","money-leakage","theft-risk"],"mode":"one-to-one"},{"id":"intro-script","code":"[07 / INTRO]","title":"Anda bisa memperkenalkan saya seperti ini.","component":"quote","quote":{"text":"Saya kenal seseorang yang membantu perusahaan bertumbuh membuat finance, stok, dan operations bekerja dari satu sistem yang dapat dipercaya. Namanya Arvy dari Agile Technica.","author":"Cukup begitu. Selanjutnya biar saya yang lanjutkan."},"mode":"feature"},{"id":"built","code":"[08 / BUILT]","title":"BUILT adalah cara kami bekerja.","subtitle":"Bold. United. Integrity. Lasting. Trust.","layout":"values","brandIds":["agile-technica"],"component":"values","values":[{"letter":"B","name":"Bold","behaviour":"Berani masuk ke masalah sulit dan menantang cara kerja yang tidak lagi efektif.","imageId":"built-bold"},{"letter":"U","name":"United","behaviour":"Satukan business, finance, operations, dan technology dalam satu tim.","imageId":"built-united"},{"letter":"I","name":"Integrity","behaviour":"Professional integrity: tidak bisa dibeli dan selalu lurus.","imageId":"built-integrity"},{"letter":"L","name":"Lasting","behaviour":"Membangun sistem yang tahan lama, terus membaik, dan ikut berkembang.","imageId":"built-lasting"},{"letter":"T","name":"Trust","behaviour":"Memberi klien keyakinan bahwa project akan selesai dengan benar.","imageId":"built-trust"}],"mode":"feature"},{"id":"gains-interests-main","code":"[I / INTERESTS]","title":"Minat saya.","component":"gains","gainsSection":"interests","labelsOnly":true,"hideSectionTitle":true,"mode":"feature","verticals":[{"id":"personal","code":"[09A / PERSONAL]","title":"Bold berarti berani mengambil kesempatan.","subtitle":"Cerita personal masuk setelah relevansi bisnis jelas.","component":"quote","quote":{"text":"You miss 100% of the shots you don't take.","author":"Wayne Gretzky","connection":"Membangun Agile Technica, masuk ke industri yang kompleks, dan mengambil tanggung jawab implementasi yang sulit membutuhkan keberanian untuk mengambil kesempatan yang bernilai."},"points":["Software engineering","Retro computers and cameras","Agile, Neuro-linguistic programming (NLP), AI, dan teaching","Curiosity yang menghubungkan business dan technology"],"mode":"one-to-one"}]},{"id":"client-portfolio","code":"[A / ACHIEVEMENTS - CLIENT PORTFOLIO]","title":"Portofolio klien lintas industri.","subtitle":"Pilihan organisasi yang telah kami dukung melalui ERP, custom software, training, seminar, dan CSR.","layout":"portfolio","component":"portfolio","clientLogos":[5,2,4,7,6,9,10,11,13,14,15,17,18,20,19,21,22,23,24,25,26,27,28,29,30,31,32,33,34,3,12,16],"portfolioId":"clients-2026","mode":"feature"},{"id":"partnership-journey","code":"[10 / PARTNERING]","title":"Bekerja sama dengan Agile Technica.","subtitle":"Jalur yang jelas dan kolaboratif dari percakapan awal hingga continuous support.","brandIds":["agile-technica"],"component":"partnership","stages":["Free pre-sales analysis","Proposal dan contract","Project kickoff","Kesepakatan business requirements","Collaborative development","Training, migration, dan go-live","Continuous support"],"mode":"feature"},{"id":"weekly","code":"[10 / WEEKLY]","title":"Pitch BNI mingguan.","subtitle":"Satu masalah. Satu solusi. Satu request.","component":"weekly","mode":"weekly"},{"id":"close","code":"[11 / CLOSE]","title":"Complex business. Clear systems. BUILT to last.","subtitle":"Saat bisnis punya sistem terputus, stok tidak akurat, costing tidak jelas, laporan lambat, atau kompleksitas operasional, perkenalkan mereka kepada Arvy.","brandIds":["agile-technica","bni-firefly"],"component":"contact","monthlyRequest":true,"mode":"all"}]`),Ii={weekly:Ci,slides:Li},Pi="Arvy Budiarto",Ni="Agile Technica",$i="ERP System Implementor - Business Systems Architect",Mi="I turn complex business operations into one connected system.",Bi={email:"arvy@agiletechnica.com",whatsapp:"+62 811 131 8918",website:"https://agiletechnica.com",instagram:"@arvy.budiarto"},Oi={name:Pi,company:Ni,title:$i,positioning:Mi,contact:Bi},zi="Arvy Budiarto",Di="Agile Technica",Hi="ERP System Implementor - Business Systems Architect",qi="Saya mengubah kompleksitas operasional bisnis menjadi satu sistem yang terhubung.",Fi={email:"arvy@agiletechnica.com",whatsapp:"+62 811 131 8918",website:"https://agiletechnica.com",instagram:"@arvy.budiarto"},ji={name:zi,company:Di,title:Hi,positioning:qi,contact:Fi},_i={"agile-technica":{label:"Agile Technica",src:"./assets/brand/agile-technica.webp?v=2",alt:"Agile Technica logo"},"bni-firefly":{label:"BNI Firefly",src:"./assets/brand/bni-firefly.webp?v=2",alt:"BNI Firefly logo"},erpnext:{label:"ERPNext",src:"./assets/brand/erpnext-logo.svg",alt:"Official ERPNext logo"},"frappe-certified-partner":{label:"Frappe Certified Partner",src:"./assets/brand/frappe-certified-partner.webp",alt:"Frappe Certified Partner logo"},birdtec:{label:"BirdTec",src:"./assets/brand/birdtec.webp",alt:"BirdTec logo"},biztec:{label:"BizTec",src:"./assets/brand/biztec.webp",alt:"BizTec logo"},temanhr:{label:"TemanHR",src:"./assets/brand/temanhr.webp",alt:"TemanHR logo"}},Ui={whatsappQr:{src:"./assets/contact/whatsapp-qr.png",alt:"QR code for contacting Arvy Budiarto on WhatsApp"}},Wi={"growth-outpaces-systems":{src:"./assets/illustrations/growth-outpaces-systems-v2.webp",mobileSrc:"./assets/illustrations/growth-outpaces-systems-mobile.webp",alt:"A growing Indonesian business expanding faster than its system while finance staff reconcile data manually and the owner sees conflicting reports"},"different-truths":{src:"./assets/illustrations/different-truths.webp",mobileSrc:"./assets/illustrations/different-truths-mobile.webp",alt:"Warehouse, finance, and management teams comparing conflicting business information"},"systems-pain":{src:"./assets/illustrations/systems-pain.webp",mobileSrc:"./assets/illustrations/systems-pain-mobile.webp",alt:"Employees dealing with duplicate entry, slow reports, missing stock, money leakage, and weak controls"},"internal-fraud":{src:"./assets/illustrations/internal-fraud-v2.webp",mobileSrc:"./assets/illustrations/internal-fraud-mobile.webp",alt:"Weak purchasing controls allowing fake material and equipment purchases, inflated invoices, and a concealed kickback"},"birdtec-poultry-operations":{src:"./assets/illustrations/birdtec-poultry-operations.webp",mobileSrc:"./assets/illustrations/birdtec-poultry-operations-mobile.webp",alt:"An Art Deco illustration of layer farming, broiler farming, contract farming, and poultry processing in Indonesia"},"optimistic-road":{src:"./assets/illustrations/optimistic-road-wide.webp",mobileSrc:"./assets/illustrations/optimistic-road-mobile.webp",alt:"An optimistic road connecting Indonesian people, farms, industry, and cities toward a bright future"}},Vi={"built-bold":{src:"./assets/values/built-bold.webp",alt:"A 1920s optimism poster style explorer looking across an unknown frontier"},"built-united":{src:"./assets/values/built-united.webp",alt:"A 1920s optimism poster style team working together around a blueprint"},"built-integrity":{src:"./assets/values/built-integrity.webp",alt:"A 1920s optimism poster style professional following a straight arrow through confusion"},"built-lasting":{src:"./assets/values/built-lasting.webp",alt:"A 1920s optimism poster style skyscraper system being built to last and evolve"},"built-trust":{src:"./assets/values/built-trust.webp",alt:"A 1920s optimism poster style man and woman standing confidently after project delivery"}},Ki={"trobos-livestock-2021":{label:"Trobos Livestock article",src:"./assets/publications/trobos-livestock-magazine-2x.webp",thumb:"./assets/publications/trobos-livestock-magazine-thumb.webp",alt:"Trobos Livestock article page featuring Arvy Budiarto, Edisi 265, Oktober 2021"},"agrina-cover-2023":{label:"Agrina Magazine cover",src:"./assets/publications/agrina-cover-2023-2x.webp",thumb:"./assets/publications/agrina-cover-2023-thumb.webp",alt:"Agrina Magazine cover featuring Arvy Budiarto, Vol. 19 No. 352, Oktober 2023"}},Gi={"clients-2026":{label:"Agile Technica clients portfolio",src:"./assets/portfolio/clients-portfolio.webp",alt:"Agile Technica client portfolio showing organisations served across ERPNext implementations, custom integrations, development, training, seminars, and CSR"}},Yi={"birdtec-farm-analyzer":{src:"./assets/products/birdtec-farm-analyzer.webp",alt:"BirdTec Farm Layer Analyzer showing weekly flock performance, HD percentage, HH percentage, feed per bird, FCR, egg production, and estimated earnings",caption:"Farm Analyzer: performance, feed, FCR, production, and earnings in one view."}},Xi={"erpnext-operation-scenes":{src:"./assets/modules/erpnext-operation-scenes-v2.webp",alt:"Six 1920s optimism poster scenes for Sales, Purchasing, Manufacturing, Accounting, Stock, and HR"}},fn={logos:_i,contact:Ui,illustrations:Wi,valueImages:Vi,publications:Ki,portfolio:Gi,products:Yi,moduleIllustrations:Xi},Ji=[{id:"case-study-placeholder",title:"From fragmented operations to one connected view",industry:"Distribution",permissionStatus:"pending",before:["Multiple spreadsheets","Separate operational and accounting data"],intervention:["Process discovery","ERPNext implementation","Integration"],after:["Shared master data","Connected transactions","Improved visibility"],metrics:[]}],vn=[{id:"official-frappe-partner",claim:"Agile Technica is an official Frappe partner for ERPNext implementation in Indonesia",status:"verified",sourceType:"official",sourceLabel:"Frappe Partner Directory; Agile Technica partner profile and Frappe partner list",verifiedAt:"2026-07-12",publicUrl:"https://frappe.io/partners/indonesia/agile-technica",asset:"frappe-partner-profile.png",displayOnSlide:7},{id:"trobos-cover",claim:"Trobos Livestock article on poultry management systems",status:"verified",sourceType:"publication",sourceLabel:"Trobos Livestock, Edisi 265, Tahun XXIII, Oktober 2021, page 36; provided article scan",verifiedAt:"2026-07-11",publicUrl:"",asset:"trobos-livestock-2021",displayOnSlide:7},{id:"agrina-cover",claim:"Agrina Magazine cover feature on poultry business profit",status:"verified",sourceType:"publication",sourceLabel:"Agrina, Vol. 19 No. 352, Oktober 2023; cover headline: Bisnis Unggas: Cara Pintar Kejar Profit; provided cover scan",verifiedAt:"2026-07-11",publicUrl:"",asset:"agrina-cover-2023",displayOnSlide:7},{id:"client-proof",claim:"Enterprise implementation and training references",status:"approved-private",sourceType:"client evidence",sourceLabel:"Current pitch deck references client/project names; permission and logo assets required before public display",verifiedAt:null,publicUrl:"",asset:"client-logos",displayOnSlide:8},{id:"fifteen-years-experience",claim:"Arvy has 15+ years in IT and ERP",status:"pending-verification",sourceType:"profile",sourceLabel:"BIO GAINS V7 and current pitch deck",verifiedAt:null,publicUrl:"",asset:"",displayOnSlide:null}],Zi=[{label:"One connected operating core",detail:"Use ERPNext as the open platform that connects finance, inventory, sales, purchasing, manufacturing, HR, approvals, and management reporting."},{label:"A trusted ERP company in Indonesia",detail:"Establish Agile Technica as a trusted implementation partner for operationally complex companies."},{label:"Deep solutions for complex industries",detail:"Use ERPNext, BirdTec, and custom software to solve industry-specific operational problems."},{label:"Strong Indonesian technology talent",detail:"Build a team that combines business process thinking, software engineering, and implementation discipline."}],Qi=[{label:"15+ years in IT and ERP",detail:"A career spanning software engineering, high-performance wagering platforms, Agile delivery leadership, ERP implementation, and business ownership."},{label:"Built Agile Technica from 3 to 30+ people",detail:"Co-founded the company in 2019 and grew it into a multidisciplinary ERP and custom software delivery team."},{label:"Official Frappe / ERPNext partner in Indonesia",detail:"Agile Technica is listed by Frappe as an official partner, so ERPNext implementation is not a side experiment for us."},{label:"Creator and implementor of BirdTec",detail:"A poultry ERP platform for broiler, layer, contract farming, and processing operations."},{label:"Enterprise implementation exposure",detail:"Current deck references Datacomm, Netcity, Coway, Unirama, Pertamina projects, Japfa, and Great Giant Pineapple. Confirm permission before public display."},{label:"Industry publication credibility",detail:"Current materials reference Agrina and Trobos/Terobos coverage. Issue metadata and cover images still need verification."}],ta=[{label:"Software engineering, data science, and AI",detail:"A technical curiosity that supports better architecture and automation decisions."},{label:"Vintage technology, cameras, and high-performance PCs",detail:"A personal thread that signals craft, systems thinking, and attention to detail."},{label:"Agile, Neuro-linguistic programming (NLP), coaching, and teaching",detail:"Useful for change management, facilitation, communication, stakeholder alignment, and helping teams understand new ways of working."},{label:"Lived and worked in Australia",detail:"That experience brought a different perspective on communication, work culture, professionalism, and how people approach business problems."},{label:"Movies, games, comics, and audiobooks",detail:"Human connection points for one-to-one conversations after business relevance is clear."}],ea=[{label:"BNI and business contact spheres",detail:"Owners, CFOs, COOs, directors, finance consultants, tax consultants, IT providers, and operations leaders."},{label:"Target industries",detail:"Poultry, trading, import/export, distribution, manufacturing, telecom infrastructure, oil and gas, and specialty industries."},{label:"ERPNext and Frappe ecosystem",detail:"ERPNext Indonesia, global Frappe community, partners, developers, and implementation networks."},{label:"Agile, Scrum, and NLP communities",detail:"Professional communities that support delivery, facilitation, leadership, and transformation work."}],na=[{label:"I understand both business and technology",detail:"I can talk with owners about growth and control, then work with the technical team on the system that supports it."},{label:"I have built systems where performance matters",detail:"My engineering and delivery background includes high-traffic platforms in Australia, multi-team leadership, and system architecture."},{label:"We know ERPNext",detail:"Agile Technica is an official Frappe / ERPNext partner in Indonesia, with implementation, customization, integration, and industry-specific experience."},{label:"I help people through change",detail:"Agile coaching, facilitation, teaching, and NLP help management and users adopt a better way of working."}],ia=[{label:"Bread",detail:"ERP health check, standard ERPNext implementation, TemanHR, small integration, reporting, or existing ERPNext support."},{label:"Cheese",detail:"Full ERPNext implementation, BirdTec implementation, manufacturing or distribution ERP, multi-warehouse, dedicated TemanHR, or significant integration."},{label:"Meat",detail:"Multi-company ERP, enterprise customization, multiple-system integration, BirdTec across multiple operations, or large transformation across finance, supply chain, production, HR, and reporting."}],aa=[{label:"Only wants free consulting",detail:"No implementation intention or decision-maker commitment."},{label:"Too early-stage for ERP",detail:"Solo or very small businesses may not yet have enough operational complexity."},{label:"Refuses process change",detail:"ERP success requires willingness to improve workflows, data, roles, and controls."},{label:"Expects instant results",detail:"Professional ERP work needs discovery, data preparation, validation, training, and stabilization."}],sa=[{label:"General",detail:"Looking for an ERP consultant who understands your industry and not just the software? Talk to Arvy."},{label:"Problem-led",detail:"If you need to solve missing stock, unbalanced accounting, high COGS, or misconduct risk, Arvy can help map the system."},{label:"Poultry",detail:"Agile Technica specializes in digital solutions for poultry farming, from broiler and layer farm management to processing and distribution."},{label:"Manufacturing and distribution",detail:"If you run a manufacturing or distribution business and need ERP that grows with you, talk to Arvy."}],ra={goals:Zi,achievements:Qi,interests:ta,networks:ea,skills:na,offers:ia,notReady:aa,introScripts:sa},oa=[{id:"business-expansion",quote:"We are opening new branches, warehouses, or channels.",meaning:"Bragging about growth can mean the current system is about to be stretched beyond its design.",idealContacts:["Owner","CEO","CFO","COO"],lane:"expansion"},{id:"stock-mismatch",quote:"Our stock never matches.",meaning:"Inventory transactions, warehouse controls, and accounting may be disconnected.",idealContacts:["Owner","CFO","COO","Supply Chain Director"],lane:"manufacturing-distribution"},{id:"money-leakage",quote:"We do not know where the margin is leaking.",meaning:"Unclear costing, manual reconciliation, and disconnected finance data can hide real profit loss.",idealContacts:["Owner","CFO","Finance Director","COO"],lane:"finance"},{id:"theft-risk",quote:"We are worried stock, money, or people are not being controlled.",meaning:"ERP can create approval trails, inventory controls, role separation, and management visibility.",idealContacts:["Owner","CFO","COO","Internal Audit"],lane:"control"},{id:"late-reporting",quote:"Management reports are always late.",meaning:"The business may rely on manual consolidation instead of connected operational data.",idealContacts:["Owner","CFO","Finance Director"],lane:"finance"},{id:"spreadsheet-company",quote:"Every department has its own spreadsheet.",meaning:"The company may have outgrown disconnected tools and needs one source of truth.",idealContacts:["Owner","COO","Operations Director"],lane:"operations"},{id:"poultry-performance",quote:"Farm performance and finance do not use the same numbers.",meaning:"Poultry operational data may not be connected to costing, settlement, and accounting.",idealContacts:["Owner","Farm Director","CFO"],lane:"poultry"}],la="2026-07",ca="An introduction to an owner, CFO, or COO of a poultry, manufacturing, distribution, or trading company experiencing stock, costing, reporting, or integration problems.",da=!0,ua={month:la,request:ca,active:da},ha="My job is to understand how a business actually operates and turn that complexity into a system that people can rely on.",pa="Ask who knows a company where warehouse, finance, and management each have a different number.",ga="A successful ERP implementation cannot be treated as only an IT project.",ma="ERPNext is open source, but implementation, hosting, migration, support, and professional expertise still have real cost and value.",fa="ERPNext is the platform; Agile Technica designs the operating model around it.",va="Farm data should not stop at the farm. It should become operational insight and financial truth.",ba="Make this easy for BNI members: symptoms, decision-maker, and exact words to use.",ya={identity:ha,problem:pa,translator:ga,erpnext:ma,implementation:fa,birdtec:va,referral:ba};function wa(){const s=new URLSearchParams(window.location.search);return{mode:s.get("mode")||"feature",lang:s.get("lang")||"en"}}const tn={feature:new Set(["feature","all"]),weekly:new Set(["weekly","all"]),"one-to-one":new Set(["feature","one-to-one","all"]),"leave-behind":new Set(["feature","one-to-one","leave-behind","all"])};function ka(s,t="feature"){const e=tn[t]||tn.feature;return s.filter(n=>e.has(n.mode||"feature")).map(n=>({...n,verticals:(n.verticals||[]).filter(i=>t==="feature"?i.feature===!0:e.has(i.mode||"one-to-one"))}))}function b(s){return String(s??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Sa(s,t){const e=s.map?.left||["Finance","Inventory","Operations"],n=s.map?.right||["ERP","API","Analytics"],i=s.map?.center||"Arvy",a=s.map?.illustrated===!0,r=t.assets.moduleIllustrations?.[s.map?.sceneAsset],l=(s.map?.bottomLogos||[]).map(c=>({id:c,...t.assets.logos?.[c]})).filter(c=>c.src),o=(c,h)=>{const u=String(c).toLowerCase().replaceAll(/[^a-z0-9]+/g,"-").replaceAll(/(^-|-$)/g,"");return`
      <span class="node ${h}${a?` node-illustrated module-${u}`:""}">
        ${a&&r?`<span class="module-scene" aria-hidden="true" style="background-image: url('${b(r.src)}')"></span>`:""}
        <span class="node-label">${b(c)}</span>
      </span>
    `};return`
    <div class="system-map${a?" system-map-illustrated":""}${l.length?" has-partners":""}" aria-label="Business and technology connection map">
      <div class="node-column">
        ${e.map(c=>o(c,"business")).join("")}
      </div>
      <div class="bridge">
        <span class="pulse-line"></span>
        <strong>${b(i)}</strong>
        <small>BUSINESS / TECHNOLOGY</small>
      </div>
      <div class="node-column">
        ${n.map(c=>o(c,"tech")).join("")}
      </div>
      ${l.length?`<div class="system-map-partners" aria-label="ERPNext and Frappe partner credentials">
              ${l.map(c=>`<span class="system-map-partner-badge"><img class="partner-logo partner-${b(c.id)}" src="${b(c.src)}" alt="${b(c.alt)}" /></span>`).join("")}
            </div>`:""}
    </div>
  `}function Ea(s){return`
    <ol class="process-rail" aria-label="Process flow">
      ${(s.steps||[]).map((e,n)=>`<li><span>${String(n+1).padStart(2,"0")}</span><strong>${b(e)}</strong></li>`).join("")}
    </ol>
  `}function xa(s,t){return`
    <div class="evidence-grid">
      ${(s.claimIds||[]).map(i=>t.claims.find(a=>a.id===i)).filter(Boolean).map(i=>Aa(i,t)).join("")}
    </div>
  `}function Aa(s,t){const e=s.asset?t.assets.publications?.[s.asset]:null;return`
    <article class="evidence-card ${s.status} ${e?"has-evidence-image":""}">
      ${e?`<img src="${b(e.thumb||e.src)}" alt="${b(e.alt)}" />`:""}
      <span>${b(s.sourceType)}</span>
      <h3>${b(s.claim)}</h3>
      <p>${b(s.sourceLabel||"Source required")}</p>
      <small>${s.verifiedAt?`Verified ${b(s.verifiedAt)}`:"Pending verification"}</small>
    </article>
  `}function Ra(s,t){return`
    <div class="referral-grid">
      ${(s.referralIds||t.referrals.map(n=>n.id)).map(n=>t.referrals.find(i=>i.id===n)).filter(Boolean).map(n=>`
        <article class="referral-card">
          <span>They say</span>
          <h3>"${b(n.quote)}"</h3>
          <p>${b(n.meaning)}</p>
          <small>${b(n.idealContacts.join(", "))}</small>
        </article>
      `).join("")}
    </div>
  `}function Ta(s){return`
    <div class="built-values">
      ${(s.values||[]).map(t=>{const e=fn.valueImages?.[t.imageId];return`
        <article class="value-card">
          ${e?`
            <figure class="value-card-art">
              <img src="${b(e.src)}" alt="${b(e.alt)}" loading="lazy" />
              <strong>${b(t.letter)}</strong>
            </figure>
          `:`<strong>${b(t.letter)}</strong>`}
          <div>
            <h3>${b(t.name)}</h3>
            <p>${b(t.behaviour)}</p>
          </div>
        </article>
      `}).join("")}
    </div>
  `}function Ca(s){return`
    <figure class="quote-card">
      <blockquote>${b(s.quote.text)}</blockquote>
      ${s.quote.author?`<figcaption>${b(s.quote.author)}</figcaption>`:""}
      ${s.quote.connection?`<p>${b(s.quote.connection)}</p>`:""}
    </figure>
  `}function La(s){return`
    <div class="metric-stack">
      ${(s.metrics||[]).map(t=>`
        <article class="metric-card">
          <strong>${b(t.value)}</strong>
          <span>${b(t.label)}</span>
          <small>${b(t.context)}</small>
        </article>
      `).join("")}
    </div>
  `}const Ia={overview:"What to remember",goals:"Goals",achievements:"Achievements",interests:"Interests",networks:"Networks",skills:"Skills",offers:"Bread, Cheese, Meat",notReady:"When a company may not be ready yet",introScripts:"BNI introduction scripts"};function Pa(s,t){const e=s.gainsSection||"overview";if(e==="overview")return Na(s);const n=t.gains[e]||[],i=e==="goals"&&s.goalImageId?t.assets.illustrations?.[s.goalImageId]:null;return`
    <div class="gains-chapter ${s.labelsOnly?"labels-only":""} ${i?"goals-with-image":""}">
      ${s.hideSectionTitle?"":`<h2>${b(Ia[e]||e)}</h2>`}
      <div class="gains-list">
        ${n.map(a=>`
              <article class="gains-item">
                <strong>${b(a.label)}</strong>
                ${s.labelsOnly?"":`<p>${b(a.detail)}</p>`}
              </article>
            `).join("")}
      </div>
      ${i?`<figure class="gains-goals-image">
              <picture>
                ${i.mobileSrc?`<source media="(max-width: 600px)" srcset="${b(i.mobileSrc)}" />`:""}
                <img src="${b(i.src)}" alt="${b(i.alt)}" loading="lazy" />
              </picture>
            </figure>`:""}
    </div>
  `}function Na(s){const t=s.overviewTiles||[{index:"01",label:"Goals"},{index:"02",label:"Achievements"},{index:"03",label:"Interests"},{index:"04",label:"Networks"},{index:"05",label:"Skills"}],e=s.overviewCta||{label:"BNI",detail:"Referral enablement"};return`
    <div class="gains-overview" aria-label="BNI referral memory points">
      ${t.map((n,i)=>`
            <article class="gains-tile">
              <span>${b(n.index||String(i+1).padStart(2,"0"))}</span>
              <strong>${b(n.label||n)}</strong>
              ${n.detail?`<p>${b(n.detail)}</p>`:""}
            </article>
          `).join("")}
      <article class="gains-tile referral-tile">
        <span>${b(e.label)}</span>
        <strong>${b(e.detail)}</strong>
      </article>
    </div>
  `}function $a(s,t){return s.logoIds?.length?`
      <div class="logo-strip brand-logo-strip" aria-label="Brand logo strip">
        ${s.logoIds.map(n=>t.assets.logos[n]).filter(Boolean).map(n=>`
          <figure>
            <img src="${b(n.src)}" alt="${b(n.alt)}" />
            <figcaption>${b(n.label)}</figcaption>
          </figure>
        `).join("")}
      </div>
    `:`
    <div class="logo-strip" aria-label="Client logo placeholders">
      ${(s.logos||["Client proof pending","Project photo pending","Case evidence pending"]).map(e=>`<span>${b(e)}</span>`).join("")}
    </div>
  `}function Ma(s){return`<span class="section-label">${b(s)}</span>`}function Ba(s,t){const e=t.assets.logos["agile-technica"],n=t.assets.logos["bni-firefly"],i=t.assets.contact?.whatsappQr;return`
    <div class="contact-panel">
      <div class="contact-brand-pair">
        <img src="${b(e.src)}" alt="${b(e.alt)}" />
        <img src="${b(n.src)}" alt="${b(n.alt)}" />
      </div>
      ${i?`
        <img class="contact-qr" src="${b(i.src)}" alt="${b(i.alt)}" />
      `:`
        <div class="qr-placeholder" role="img" aria-label="QR code placeholder for ${b(t.profile.contact.website)}">QR</div>
      `}
      <h3>${b(t.profile.name)}</h3>
      <p>${b(t.profile.contact.email)}</p>
      <p>${b(t.profile.contact.whatsapp)}</p>
      <p>${b(t.profile.contact.website)}</p>
    </div>
  `}function Oa(s,t){const e=t.assets.publications?.[s.publicationId];return e?`
    <figure class="publication-image">
      <img src="${b(e.src)}" alt="${b(e.alt)}" />
      <figcaption>${b(e.label)}</figcaption>
    </figure>
  `:'<div class="publication-missing">Publication asset missing</div>'}function za(s){return`
    <div class="pillar-grid${s.heroImageSrc?" pillar-grid-with-portrait":""}" aria-label="Agile Technica product pillars">
      ${(s.pillars||[]).map(t=>`
            <article class="pillar-item">
              ${t.imageSrc?`<span class="pillar-icon-image" style="--pillar-icon-url: url('${b(t.imageSrc)}')" aria-hidden="true"></span>`:`<i data-lucide="${b(t.icon)}" aria-hidden="true"></i>`}
              <strong>${b(t.label)}</strong>
            </article>
          `).join("")}
      ${s.heroImageSrc?`<figure class="hero-portrait-tile">
              <img src="${b(s.heroImageSrc)}" alt="${b(s.heroImageAlt||"Arvy Budiarto in an Art Deco city portrait")}" />
            </figure>`:""}
    </div>
  `}function Da(s,t){const e=t.assets.illustrations?.[s.illustrationId];return e?`
    <figure class="story-illustration">
      <picture>
        ${e.mobileSrc?`<source media="(max-width: 600px)" srcset="${b(e.mobileSrc)}" />`:""}
        <img src="${b(e.src)}" alt="${b(e.alt)}" />
      </picture>
    </figure>
  `:'<div class="illustration-missing">Illustration asset missing</div>'}function Ha(s){return`
    <div class="offering-stack" aria-label="Service delivery depth">
      ${(s.offerings||[]).map(t=>`
            <article class="offering-card offering-${b(t.level||"standard").toLowerCase()}">
              <header>
                <span>${b(t.level)}</span>
                <strong>${b(t.tagline)}</strong>
              </header>
              <ul>
                ${(t.items||[]).map(e=>`<li>${b(e)}</li>`).join("")}
              </ul>
            </article>
          `).join("")}
    </div>
  `}function qa(s){return`
    <ol class="partnership-journey" aria-label="Agile Technica delivery journey">
      ${(s.stages||[]).map((t,e)=>`
            <li class="partnership-stage partnership-stage-${e+1}">
              <span>${String(e+1).padStart(2,"0")}</span>
              <strong>${b(t)}</strong>
            </li>
          `).join("")}
    </ol>
  `}function Fa(s,t){if(s.clientLogos?.length)return`
      <div class="client-portfolio-grid" aria-label="Selected client logos">
        ${s.clientLogos.map(n=>`
              <figure class="client-logo-tile">
                <img src="./assets/portfolio/client-logos/${b(String(n))}.png" alt="Client logo ${b(String(n))}" loading="lazy" />
              </figure>
            `).join("")}
      </div>
    `;const e=t.assets.portfolio?.[s.portfolioId];return e?`
    <figure class="client-portfolio-image">
      <img src="${b(e.src)}" alt="${b(e.alt)}" />
      <figcaption>${b(e.label)}</figcaption>
    </figure>
  `:'<div class="publication-missing">Client portfolio asset missing</div>'}function ja(s,t){const e=t.assets.products?.[s.productId];return e?`
    <figure class="product-screenshot">
      <img src="${b(e.src)}" alt="${b(e.alt)}" />
      <figcaption>${b(e.caption)}</figcaption>
    </figure>
  `:'<div class="publication-missing">Product screenshot missing</div>'}const _a={topology:Sa,process:Ea,evidence:xa,referrals:Ra,values:Ta,quote:Ca,metric:La,gains:Pa,logos:$a,contact:Ba,publication:Oa,pillars:za,illustration:Da,offerings:Ha,partnership:qa,portfolio:Fa,product:ja};function en(s,t){const e=s.theme||"dark",n=[Ua(s),Wa(s,t),Ya(s,t),Xa(s,t)].join("");return`<section class="slide slide-${e} slide-${s.layout||"statement"}" data-slide-id="${b(s.id||"")}" data-section="${b(s.code||"")}">${n}</section>`}function Ua(s){return`
    <div class="slide-topline">
      ${Ma(s.code||s.parentCode||"")}
      <span class="deck-identity">Arvy B. <span aria-hidden="true">·</span> BNI Firefly <span aria-hidden="true">·</span> BIO GAINS</span>
    </div>
  `}function Wa(s,t){const e=s.kicker?`<p class="kicker">${b(s.kicker)}</p>`:"",n=s.title?`<h1>${b(s.title)}</h1>`:"",i=s.subtitle?`<p class="subtitle">${b(s.subtitle)}</p>`:"",a=Va(s,t),r=Ga(s,t),l=Ka(s,t);return`
    <div class="slide-grid">
      <div class="slide-copy">
        ${e}
        ${n}
        ${i}
        ${a}
        ${l}
      </div>
      ${r}
    </div>
  `}function Va(s,t){return s.brandIds?.length?`
    <div class="brand-row" aria-label="Brand marks">
      ${s.brandIds.map(e=>t.assets.logos[e]).filter(Boolean).map(e=>`<img src="${b(e.src)}" alt="${b(e.alt)}" />`).join("")}
    </div>
  `:""}function Ka(s,t){return s.component==="weekly"?`
      <div class="weekly-pitch">
        <p>${b(t.weekly.problem)}</p>
        <p>${b(t.weekly.solution)}</p>
        <strong>${b(t.weekly.request)}</strong>
      </div>
    `:s.monthlyRequest?`<div class="request-panel"><strong>Current request</strong><p>${b(t.monthlyRequest.request)}</p></div>`:s.points?`
    <div class="point-grid ${s.points.length>4?"compact":""}">
      ${s.points.map(e=>`<div class="point-card"><span>${b(e.label||e)}</span>${e.detail?`<p>${b(e.detail)}</p>`:""}</div>`).join("")}
    </div>
  `:""}function Ga(s,t){if(!s.component&&!s.visual)return'<div class="visual-panel empty-panel" aria-hidden="true"></div>';const e=_a[s.component||s.visual];return e?`<div class="visual-panel">${e(s,t)}</div>`:`<div class="visual-panel text-visual">${b(s.visualText||"")}</div>`}function Ya(s,t){const e=s.note||t.speakerNotes[s.id];return e?`<aside class="notes">${b(e)}</aside>`:""}function Xa(s,t){const i=`https://wa.me/${t.profile.contact.whatsapp.replace(/\D/g,"")}?text=${encodeURIComponent("I found Arvy's BIO Gains and I'm from BNI Chapter ____, please link me to him")}`,a=s.id==="close";return`
    <footer class="deck-footer">
      <span class="footer-contact-summary">${b(t.profile.contact.email)} | ${b(t.profile.contact.whatsapp)}</span>
      <div class="footer-actions">
        ${a?`<a class="footer-whatsapp-button" href="${b(i)}" target="_blank" rel="noopener noreferrer" aria-label="Send Arvy a WhatsApp message">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.89 11.89 0 0 0 12.05 0C5.48 0 .13 5.34.13 11.91c0 2.1.55 4.15 1.6 5.95L0 24l6.3-1.65a11.9 11.9 0 0 0 5.74 1.46h.01c6.57 0 11.91-5.34 11.91-11.91a11.83 11.83 0 0 0-3.44-8.43ZM12.05 21.8a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.82 9.82 0 1 1 8.37 4.64Zm5.39-7.36c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.51-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.91 1.23 3.11.15.2 2.13 3.25 5.15 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" /></svg>
              <span class="sr-only">Open WhatsApp direct message</span>
            </a>`:'<button class="footer-contact-button" type="button" data-contact-jump>Contact</button>'}
      </div>
    </footer>
  `}function Ja(s,t){return`
    <div class="deck-index" data-deck-index hidden>
      <div class="deck-index-backdrop" data-index-close></div>
      <aside class="deck-index-panel" role="dialog" aria-modal="true" aria-labelledby="deck-index-title">
        <header class="deck-index-header">
          <div>
            <span class="deck-index-kicker">Presentation</span>
            <h2 id="deck-index-title">Index</h2>
          </div>
          <button class="deck-index-close" type="button" aria-label="Close index" title="Close index" data-index-close>
            <i data-lucide="x"></i>
          </button>
        </header>
        <label class="deck-index-search">
          <i data-lucide="search" aria-hidden="true"></i>
          <span class="sr-only">Search slides</span>
          <input type="search" placeholder="Search slides" autocomplete="off" data-index-search />
        </label>
        <nav class="deck-index-list" aria-label="Presentation slides" data-index-list>
          ${s.flatMap((n,i)=>{const a={horizontalIndex:i,verticalIndex:0,code:n.code||"",title:n.title||"Untitled slide",level:"main"},r=(n.verticals||[]).map((l,o)=>({horizontalIndex:i,verticalIndex:o+1,code:l.code||n.code||"",title:l.title||"Untitled detail",level:"detail"}));return[a,...r]}).map((n,i)=>`
                <button
                  class="deck-index-item deck-index-item-${n.level}"
                  type="button"
                  data-index-item
                  data-horizontal="${n.horizontalIndex}"
                  data-vertical="${n.verticalIndex}"
                  data-search="${b(`${n.code} ${n.title}`.toLowerCase())}"
                >
                  <span class="deck-index-number">${String(i+1).padStart(2,"0")}</span>
                  <span class="deck-index-copy">
                    <small>${b(n.code)}</small>
                    <strong>${b(n.title)}</strong>
                  </span>
                </button>
              `).join("")}
        </nav>
        <p class="deck-index-empty" data-index-empty hidden>No matching slides.</p>
      </aside>
    </div>
    <div class="deck-toolbar" aria-label="Presentation controls">
      <div class="language-toggle" role="group" aria-label="Presentation language">
        <button type="button" data-language="en" aria-pressed="${t==="en"}" ${t==="en"?"disabled":""}>EN</button>
        <button type="button" data-language="id" aria-pressed="${t==="id"}" ${t==="id"?"disabled":""}>ID</button>
      </div>
      <button class="deck-index-toggle" type="button" aria-label="Open slide index" title="Slide index (I)" aria-expanded="false" data-index-open>
        <i data-lucide="list"></i>
      </button>
    </div>
  `}function Za(s){const t=s.slides.map(e=>{const n=en(e,s),i=(e.verticals||[]).map(a=>en({...a,parentCode:e.code},s));return i.length===0?n:`<section>${n}${i.join("")}</section>`});return`
    <div class="reveal deck-shell" data-mode="${s.mode}" data-lang="${s.lang}">
      <div class="slides">
        ${t.join("")}
      </div>
    </div>
    ${Ja(s.slides,s.lang)}
  `}function Qa(s){const t=s.filter(e=>e.status!=="verified"&&e.displayOnSlide);t.length>0&&console.warn("Claims need verification before public use:",t.map(e=>`${e.id}: ${e.status}`))}const bn=wa(),Ft=bn.lang==="id"?"id":"en",oe=bn.mode,nn=Ft==="id"?Ii:Ti,yn=Ft==="id"?ji:Oi;document.documentElement.lang=Ft;document.title=`${yn.name} | BNI GAINS ${oe}`;const ts=document.querySelector("#app");ts.innerHTML=Za({slides:ka(nn.slides,oe),weekly:nn.weekly,mode:oe,lang:Ft,profile:yn,assets:fn,referrals:oa,gains:ra,cases:Ji,claims:vn,monthlyRequest:ua,speakerNotes:ya});xi({icons:{Database:bi,RefreshCw:wi,Bird:fi,Users:Si,ContactRound:vi,List:yi,Search:ki,X:Ei}});Qa(vn);const ie=window.matchMedia("(max-width: 600px)").matches;tt.initialize({width:ie?390:1600,height:ie?window.innerHeight:900,margin:ie?0:.04,minScale:.2,maxScale:2,hash:!0,history:!0,controls:!0,progress:!0,center:!1,transition:"slide",transitionSpeed:"fast",backgroundTransition:"slide",navigationMode:"default",touch:!0,slideNumber:"c/t",pdfSeparateFragments:!1,plugins:[oi,li,di]});ns();is();es();function es(){document.addEventListener("click",s=>{if(!s.target.closest("[data-contact-jump]"))return;s.preventDefault(),s.stopPropagation();const e=document.querySelector('.reveal .slides section[data-slide-id="close"]');if(!e)return;const n=tt.getIndices(e);tt.slide(n.h,n.v)})}function ns(){const s=document.querySelector("[data-deck-index]"),t=document.querySelector("[data-index-open]"),e=document.querySelector("[data-index-search]"),n=[...document.querySelectorAll("[data-index-item]")],i=document.querySelector("[data-index-empty]");if(!s||!t||!e||!i)return;const a=()=>{s.hidden=!0,t.setAttribute("aria-expanded","false"),t.focus()},r=()=>{s.hidden=!1,t.setAttribute("aria-expanded","true"),e.value="",l(),requestAnimationFrame(()=>e.focus())},l=()=>{const o=e.value.trim().toLowerCase();let c=0;n.forEach(h=>{const u=!o||h.dataset.search.includes(o);h.hidden=!u,u&&(c+=1)}),i.hidden=c!==0};t.addEventListener("click",r),s.querySelectorAll("[data-index-close]").forEach(o=>o.addEventListener("click",a)),e.addEventListener("input",l),n.forEach(o=>{o.addEventListener("click",()=>{tt.slide(Number(o.dataset.horizontal),Number(o.dataset.vertical)),a()})}),document.addEventListener("keydown",o=>{const c=["INPUT","TEXTAREA","SELECT"].includes(document.activeElement?.tagName);if(o.key==="Escape"&&!s.hidden){o.preventDefault(),a();return}o.key.toLowerCase()==="i"&&!c&&(o.preventDefault(),s.hidden?r():a())},!0)}function is(){[...document.querySelectorAll("[data-language]")].forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.language,{h:n,v:i}=tt.getIndices(),a=new URL(window.location.href);e==="en"?a.searchParams.delete("lang"):a.searchParams.set("lang",e),a.hash=`#/${n}${i>0?`/${i}`:""}`,window.location.assign(a.toString())})})}

import{o as Da,a as Pa,i as za,s as N,b as it,e as Te}from"./lifecycle.BXe8Dhbv.js";import{a3 as $a,ac as Ia,aU as Ra,aV as Wa,i as Na,u as Ya,aW as qa,aX as De,aY as Oa,q as Ua,aZ as mt,c as rt,f as Z,a as Y,p as Ka,b as Xa,h as l,m as F,ax as O,g as t,d as dt,s as v,e as r,r as i,v as Ha,t as Mt,o as h}from"./utils.C-MSO5Ew.js";import{a as Va,s as H}from"./render.CdIeA2MD.js";import{i as z}from"./if.DWTK_nJS.js";import{e as Ga,i as Za}from"./each.CRj5Lq9K.js";import{b as Me}from"./this.D2hvuHGW.js";import{I as f}from"./Icon.UFvDW-OC.js";import{m as bt}from"./config.D3-dyKAI.js";import{I as Ja}from"./zh_TW.Cjjw3Vy_.js";import{i as Qa}from"./translation.D3afh5Ne.js";import"./props.BKgP4o9g.js";const ti=()=>performance.now(),V={tick:c=>requestAnimationFrame(c),now:()=>ti(),tasks:new Set};function Pe(){const c=V.now();V.tasks.forEach(n=>{n.c(c)||(V.tasks.delete(n),n.f())}),V.tasks.size!==0&&V.tick(Pe)}function ei(c){let n;return V.tasks.size===0&&V.tick(Pe),{promise:new Promise(w=>{V.tasks.add(n={c,f:w})}),abort(){V.tasks.delete(n)}}}function St(c,n){De(()=>{c.dispatchEvent(new CustomEvent(n))})}function ai(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const n=c.split("-");return n.length===1?n[0]:n[0]+n.slice(1).map(w=>w[0].toUpperCase()+w.slice(1)).join("")}function Se(c){const n={},w=c.split(";");for(const k of w){const[L,A]=k.split(":");if(!L||A===void 0)break;const $=ai(L.trim());n[$]=A.trim()}return n}const ii=c=>c;function ri(c,n,w,k){var L=(c&qa)!==0,A="both",$,x=n.inert,B=n.style.overflow,d,b;function D(){return De(()=>$??=w()(n,k?.()??{},{direction:A}))}var E={is_global:L,in(){n.inert=x,St(n,"introstart"),d=Jt(n,D(),b,1,()=>{St(n,"introend"),d?.abort(),d=$=void 0,n.style.overflow=B})},out(S){n.inert=!0,St(n,"outrostart"),b=Jt(n,D(),d,0,()=>{St(n,"outroend"),S?.()})},stop:()=>{d?.abort(),b?.abort()}},T=$a;if((T.transitions??=[]).push(E),Va){var M=L;if(!M){for(var u=T.parent;u&&(u.f&Ia)!==0;)for(;(u=u.parent)&&(u.f&Ra)===0;);M=!u||(u.f&Wa)!==0}M&&Na(()=>{Ya(()=>E.in())})}}function Jt(c,n,w,k,L){var A=k===1;if(Oa(n)){var $,x=!1;return Ua(()=>{if(!x){var S=n({direction:A?"in":"out"});$=Jt(c,S,w,k,L)}}),{abort:()=>{x=!0,$?.abort()},deactivate:()=>$.deactivate(),reset:()=>$.reset(),t:()=>$.t()}}if(w?.deactivate(),!n?.duration)return L(),{abort:mt,deactivate:mt,reset:mt,t:()=>k};const{delay:B=0,css:d,tick:b,easing:D=ii}=n;var E=[];if(A&&w===void 0&&(b&&b(0,1),d)){var T=Se(d(0,1));E.push(T,T)}var M=()=>1-k,u=c.animate(E,{duration:B,fill:"forwards"});return u.onfinish=()=>{u.cancel();var S=w?.t()??1-k;w?.abort();var g=k-S,J=n.duration*Math.abs(g),Q=[];if(J>0){var I=!1;if(d)for(var p=Math.ceil(J/16.666666666666668),y=0;y<=p;y+=1){var a=S+g*D(y/p),G=Se(d(a,1-a));Q.push(G),I||=G.overflow==="hidden"}I&&(c.style.overflow="hidden"),M=()=>{var K=u.currentTime;return S+g*D(K/J)},b&&ei(()=>{if(u.playState!=="running")return!1;var K=M();return b(K,1-K),!0})}u=c.animate(Q,{duration:J,fill:"forwards"}),u.onfinish=()=>{M=()=>k,b?.(k,1-k),L()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=mt)},deactivate:()=>{L=mt},reset:()=>{k===0&&b?.(1,0)},t:()=>M()}}function je(c){return function(...n){var w=n[0];return w.stopPropagation(),c?.apply(this,n)}}function ni(c){const n=c-1;return n*n*n+1}function si(c,{delay:n=0,duration:w=400,easing:k=ni,axis:L="y"}={}){const A=getComputedStyle(c),$=+A.opacity,x=L==="y"?"height":"width",B=parseFloat(A[x]),d=L==="y"?["top","bottom"]:["left","right"],b=d.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),D=parseFloat(A[`padding${b[0]}`]),E=parseFloat(A[`padding${b[1]}`]),T=parseFloat(A[`margin${b[0]}`]),M=parseFloat(A[`margin${b[1]}`]),u=parseFloat(A[`border${b[0]}Width`]),S=parseFloat(A[`border${b[1]}Width`]);return{delay:n,duration:w,easing:k,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*$};${x}: ${g*B}px;padding-${d[0]}: ${g*D}px;padding-${d[1]}: ${g*E}px;margin-${d[0]}: ${g*T}px;margin-${d[1]}: ${g*M}px;border-${d[0]}-width: ${g*u}px;border-${d[1]}-width: ${g*S}px;min-${x}: 0`}}var oi=dt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),li=dt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),ui=dt('<span class="text-sm text-[var(--content-meta)]"></span>'),ci=dt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),di=dt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),vi=dt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Ei(c,n){Xa(n,!1);let w=bt.mode??"meting",k=bt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",L=bt.id??"14164869977",A=bt.server??"netease",$=bt.type??"playlist",x=F(!1),B=F(!1),d=F(!1),b=F(!1),D=F(0),E=F(0),T=F(.7),M=F(!1),u=F(!1),S=F(!1),g=F(0),J=F(""),Q=F(!1),I=F({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),p=F([]),y=F(0),a=F(),G=F(),K=F();const ze=[{id:1,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:2,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:3,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200}];async function $e(){if(!k||!L)return;l(u,!0);const s=k.replace(":server",A).replace(":type",$).replace(":id",L).replace(":auth","").replace(":r",Date.now().toString());try{const j=await fetch(s);if(!j.ok)throw new Error("meting api error");const X=await j.json();l(p,X.map(W=>{let vt=W.name??W.title??"未知歌曲",wt=W.artist??W.author??"未知艺术家",R=W.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:W.id,title:vt,artist:wt,cover:W.pic??"",url:W.url??"",duration:R}})),t(p).length>0&&Dt(t(p)[0]),l(u,!1)}catch{_t("Meting 歌单获取失败"),l(u,!1)}}function Ie(){!t(a)||!t(I).url||(t(x)?t(a).pause():t(a).play())}function gt(){l(B,!t(B)),t(B)&&(l(b,!1),l(d,!1))}function ht(){l(d,!t(d)),t(d)&&(l(B,!1),l(b,!1))}function Qt(){l(b,!t(b))}function Re(){l(S,!t(S))}function We(){l(g,(t(g)+1)%3)}function Ne(){if(t(p).length<=1)return;const s=t(y)>0?t(y)-1:t(p).length-1;xt(s)}function jt(){if(t(p).length<=1)return;let s;if(t(S))do s=Math.floor(Math.random()*t(p).length);while(s===t(y)&&t(p).length>1);else s=t(y)<t(p).length-1?t(y)+1:0;xt(s)}function xt(s){if(s<0||s>=t(p).length)return;const j=t(x);l(y,s),t(a)&&t(a).pause(),Dt(t(p)[t(y)]),(j||!t(x))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function yt(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function Dt(s){!s||!t(a)||(l(I,{...s}),s.url?(l(u,!0),t(a).pause(),O(a,t(a).currentTime=0),l(D,0),l(E,s.duration??0),t(a).removeEventListener("loadeddata",te),t(a).removeEventListener("error",ee),t(a).removeEventListener("loadstart",ae),t(a).addEventListener("loadeddata",te,{once:!0}),t(a).addEventListener("error",ee,{once:!0}),t(a).addEventListener("loadstart",ae,{once:!0}),O(a,t(a).src=yt(s.url)),t(a).load()):l(u,!1))}function te(){l(u,!1),t(a)?.duration&&t(a).duration>1&&(l(E,Math.floor(t(a).duration)),t(p)[t(y)]&&O(p,t(p)[t(y)].duration=t(E)),O(I,t(I).duration=t(E)))}function ee(s){l(u,!1),_t(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>jt(),1e3):_t("播放列表中没有可用的歌曲")}function ae(){}function _t(s){l(J,s),l(Q,!0),setTimeout(()=>{l(Q,!1)},3e3)}function Ye(){l(Q,!1)}function qe(s){if(!t(a)||!t(G))return;const j=t(G).getBoundingClientRect(),W=(s.clientX-j.left)/j.width*t(E);O(a,t(a).currentTime=W),l(D,W)}function Oe(s){if(!t(a)||!t(K))return;const j=t(K).getBoundingClientRect(),X=Math.max(0,Math.min(1,(s.clientX-j.left)/j.width));l(T,X),O(a,t(a).volume=t(T)),l(M,t(T)===0)}function ie(){t(a)&&(l(M,!t(M)),O(a,t(a).muted=t(M)))}function re(s){if(!Number.isFinite(s)||s<0)return"0:00";const j=Math.floor(s/60),X=Math.floor(s%60);return`${j}:${X.toString().padStart(2,"0")}`}function Ue(){t(a)&&(t(a).addEventListener("play",()=>{l(x,!0)}),t(a).addEventListener("pause",()=>{l(x,!1)}),t(a).addEventListener("timeupdate",()=>{l(D,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(g)===1?(O(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(g)===2||t(y)<t(p).length-1||t(S)?jt():l(x,!1)}),t(a).addEventListener("error",s=>{l(u,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Da(()=>{l(a,new Audio),O(a,t(a).volume=t(T)),Ue(),w==="meting"?$e():(l(p,[...ze]),t(p).length>0?Dt(t(p)[0]):_t("本地播放列表为空"))}),Pa(()=>{t(a)&&(t(a).pause(),O(a,t(a).src=""))}),za();var ne=rt(),Ke=Z(ne);{var Xe=s=>{var j=vi(),X=Z(j);{var W=e=>{var m=oi(),_=r(m),C=r(_);f(C,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var P=v(C,2),o=r(P,!0);i(P);var et=v(P,2),Lt=r(et);f(Lt,{icon:"material-symbols:close",class:"text-lg"}),i(et),i(_),i(m),Mt(()=>H(o,t(J))),h("click",et,Ye),Y(e,m)};z(X,e=>{t(Q)&&e(W)})}var vt=v(X,2);let wt;var R=r(vt);let se;var He=r(R);{var Ve=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Ge=e=>{var m=rt(),_=Z(m);{var C=o=>{var et=li();Y(o,et)},P=o=>{f(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(_,o=>{t(x)?o(C):o(P,!1)},!0)}Y(e,m)};z(He,e=>{t(u)?e(Ve):e(Ge,!1)})}i(R);var nt=v(R,2);let oe;var le=r(nt),Pt=r(le),zt=r(Pt);let ue;var ce=v(zt,2),Ze=r(ce);{var Je=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},Qe=e=>{var m=rt(),_=Z(m);{var C=o=>{f(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},P=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(_,o=>{t(x)?o(C):o(P,!1)},!0)}Y(e,m)};z(Ze,e=>{t(u)?e(Je):e(Qe,!1)})}i(ce),i(Pt);var $t=v(Pt,2),It=r($t),ta=r(It,!0);i(It);var de=v(It,2),ea=r(de,!0);i(de),i($t);var ve=v($t,2),kt=r(ve),aa=r(kt);f(aa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(kt);var Rt=v(kt,2),ia=r(Rt);f(ia,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Rt),i(ve),i(le),i(nt);var Et=v(nt,2);let fe;var Wt=r(Et),Nt=r(Wt),pe=r(Nt);let me;i(Nt);var Yt=v(Nt,2),qt=r(Yt),ra=r(qt,!0);i(qt);var Ot=v(qt,2),na=r(Ot,!0);i(Ot);var be=v(Ot,2),sa=r(be);i(be),i(Yt);var ge=v(Yt,2),Ft=r(ge),oa=r(Ft);f(oa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Ft);var Ut=v(Ft,2),la=r(Ut);f(la,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Ut),i(ge),i(Wt);var Kt=v(Wt,2),st=r(Kt),ua=r(st);i(st),Me(st,e=>l(G,e),()=>t(G)),i(Kt);var Xt=v(Kt,2),ot=r(Xt);let he;var ca=r(ot);f(ca,{icon:"material-symbols:shuffle",class:"text-lg"}),i(ot);var ft=v(ot,2),da=r(ft);f(da,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(ft);var lt=v(ft,2);let xe;var va=r(lt);{var fa=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},pa=e=>{var m=rt(),_=Z(m);{var C=o=>{f(o,{icon:"material-symbols:pause",class:"text-xl"})},P=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(_,o=>{t(x)?o(C):o(P,!1)},!0)}Y(e,m)};z(va,e=>{t(u)?e(fa):e(pa,!1)})}i(lt);var pt=v(lt,2),ma=r(pt);f(ma,{icon:"material-symbols:skip-next",class:"text-xl"}),i(pt);var At=v(pt,2);let ye;var ba=r(At);{var ga=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ha=e=>{var m=rt(),_=Z(m);{var C=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg"})},P=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(_,o=>{t(g)===2?o(C):o(P,!1)},!0)}Y(e,m)};z(ba,e=>{t(g)===1?e(ga):e(ha,!1)})}i(At),i(Xt);var _e=v(Xt,2),Ct=r(_e),xa=r(Ct);{var ya=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},_a=e=>{var m=rt(),_=Z(m);{var C=o=>{f(o,{icon:"material-symbols:volume-down",class:"text-lg"})},P=o=>{f(o,{icon:"material-symbols:volume-up",class:"text-lg"})};z(_,o=>{t(T)<.5?o(C):o(P,!1)},!0)}Y(e,m)};z(xa,e=>{t(M)||t(T)===0?e(ya):e(_a,!1)})}i(Ct);var tt=v(Ct,2),wa=r(tt);i(tt),Me(tt,e=>l(K,e),()=>t(K));var Bt=v(tt,2);let we;var ka=r(Bt);f(ka,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Bt),i(_e),i(Et);var Ea=v(Et,2);{var Fa=e=>{var m=di(),_=r(m),C=r(_),P=r(C,!0);i(C);var o=v(C,2),et=r(o);f(et,{icon:"material-symbols:close",class:"text-lg"}),i(o),i(_);var Lt=v(_,2);Ga(Lt,5,()=>t(p),Za,(Ht,ut,U)=>{var at=ci();let ke;var Vt=r(at),Aa=r(Vt);{var Ca=q=>{f(q,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ba=q=>{var Be=rt(),Ma=Z(Be);{var Sa=ct=>{f(ct,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},ja=ct=>{var Le=ui();Le.textContent=U+1,Y(ct,Le)};z(Ma,ct=>{U===t(y)?ct(Sa):ct(ja,!1)},!0)}Y(q,Be)};z(Aa,q=>{U===t(y)&&t(x)?q(Ca):q(Ba,!1)})}i(Vt);var Gt=v(Vt,2),Ee=r(Gt);i(Gt);var Fe=v(Gt,2),Tt=r(Fe);let Ae;var La=r(Tt,!0);i(Tt);var Zt=v(Tt,2);let Ce;var Ta=r(Zt,!0);i(Zt),i(Fe),i(at),Mt(q=>{ke=N(at,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,ke,{"bg-[var(--btn-plain-bg)]":U===t(y),"text-[var(--primary)]":U===t(y)}),it(at,"aria-label",`播放 ${t(ut).title??""} - ${t(ut).artist??""}`),it(Ee,"src",q),it(Ee,"alt",t(ut).title),Ae=N(Tt,1,"font-medium truncate",null,Ae,{"text-[var(--primary)]":U===t(y),"text-90":U!==t(y)}),H(La,t(ut).title),Ce=N(Zt,1,"text-sm text-[var(--content-meta)] truncate",null,Ce,{"text-[var(--primary)]":U===t(y)}),H(Ta,t(ut).artist)},[()=>yt(t(ut).cover)]),h("click",at,()=>xt(U)),h("keydown",at,q=>{(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),xt(U))}),Y(Ht,at)}),i(Lt),i(m),Mt(Ht=>H(P,Ht),[()=>Qa(Ja.playlist)]),h("click",o,Qt),ri(3,m,()=>si,()=>({duration:300,axis:"y"})),Y(e,m)};z(Ea,e=>{t(b)&&e(Fa)})}i(vt),Ha(2),Mt((e,m,_,C)=>{wt=N(vt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,wt,{expanded:t(B),"hidden-mode":t(d)}),se=N(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,se,{"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),oe=N(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,oe,{"opacity-0":t(B)||t(d),"scale-95":t(B)||t(d),"pointer-events-none":t(B)||t(d)}),it(zt,"src",e),ue=N(zt,1,"w-full h-full object-cover transition-transform duration-300",null,ue,{spinning:t(x)&&!t(u),"animate-pulse":t(u)}),H(ta,t(I).title),H(ea,t(I).artist),fe=N(Et,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,fe,{"opacity-0":!t(B),"scale-95":!t(B),"pointer-events-none":!t(B)}),it(pe,"src",m),me=N(pe,1,"w-full h-full object-cover transition-transform duration-300",null,me,{spinning:t(x)&&!t(u),"animate-pulse":t(u)}),H(ra,t(I).title),H(na,t(I).artist),H(sa,`${_??""} / ${C??""}`),it(st,"aria-valuenow",t(E)>0?t(D)/t(E)*100:0),Te(ua,`width: ${t(E)>0?t(D)/t(E)*100:0}%`),he=N(ot,1,"w-10 h-10 rounded-lg",null,he,{"btn-regular":t(S),"btn-plain":!t(S)}),ot.disabled=t(p).length<=1,ft.disabled=t(p).length<=1,xe=N(lt,1,"btn-regular w-12 h-12 rounded-full",null,xe,{"opacity-50":t(u)}),lt.disabled=t(u),pt.disabled=t(p).length<=1,ye=N(At,1,"w-10 h-10 rounded-lg",null,ye,{"btn-regular":t(g)>0,"btn-plain":t(g)===0}),it(tt,"aria-valuenow",t(T)*100),Te(wa,`width: ${t(T)*100}%`),we=N(Bt,1,"btn-plain w-8 h-8 rounded-lg",null,we,{"text-[var(--primary)]":t(b)})},[()=>yt(t(I).cover),()=>yt(t(I).cover),()=>re(t(D)),()=>re(t(E))]),h("click",R,ht),h("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),ht())}),h("click",kt,je(ht)),h("click",Rt,je(gt)),h("click",nt,gt),h("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),gt())}),h("click",Ft,ht),h("click",Ut,gt),h("click",st,qe),h("keydown",st,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(G).getBoundingClientRect();const _=.5*t(E);t(a)&&(O(a,t(a).currentTime=_),l(D,_))}}),h("click",ot,Re),h("click",ft,Ne),h("click",lt,Ie),h("click",pt,jt),h("click",At,We),h("click",Ct,ie),h("click",tt,Oe),h("keydown",tt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&ie())}),h("click",Bt,Qt),Y(s,j)};z(Ke,s=>{s(Xe)})}Y(c,ne),Ka()}export{Ei as default};

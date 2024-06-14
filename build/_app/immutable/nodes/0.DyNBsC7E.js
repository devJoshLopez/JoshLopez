import{s as A,e as p,c as v,j as z,d as g,q as u,r as W,i as j,n as C,p as J,g as k,a as b,b as y,P as F,l as m,Q,R as X,S as Y,T as K,U as Z}from"../chunks/scheduler.Bmh_k5fe.js";import{S as H,i as q,b as O,d as P,m as R,a as E,t as S,e as B}from"../chunks/index.BKbk7uBP.js";const tt=!0,et="always",pt=Object.freeze(Object.defineProperty({__proto__:null,prerender:tt,trailingSlash:et},Symbol.toStringTag,{value:"Module"})),nt=""+new URL("../assets/bgnoise.Bs-ruk1u.webp",import.meta.url).href;function st(d){let t;return{c(){t=p("div"),this.h()},l(n){t=v(n,"DIV",{class:!0,style:!0}),z(t).forEach(g),this.h()},h(){u(t,"class","grid-container pointer-events-none fixed inset-0 z-0"),W(t,"background-image","url("+nt+")")},m(n,o){j(n,t,o)},p:C,i:C,o:C,d(n){n&&g(t)}}}function ot(d){let t=[],n,o,i=null;function r(){const c=document.querySelector(".grid-container"),a=window.innerWidth,f=window.innerHeight,l=100;n=Math.ceil(a/l),o=Math.ceil(f/l);const e=n*o;c.style.gridTemplateColumns=`repeat(${n}, ${l}px)`,c.style.gridTemplateRows=`repeat(${o}, ${l}px)`;for(let s=0;s<e;s++){const L=document.createElement("div");L.classList.add("grid-item"),c.appendChild(L),t.push(L)}}function h(c){const a=c.clientX,f=c.clientY,l=Math.floor(a/100),s=Math.floor(f/100)*n+l;s!==i&&(i!==null&&t[i]&&t[i].classList.remove("highlight"),t[s]&&t[s].classList.add("highlight"),i=s)}return J(()=>{r(),window.onresize=()=>{document.querySelector(".grid-container").innerHTML="",t=[],i=null,r()},window.addEventListener("mousemove",h)}),[]}class at extends H{constructor(t){super(),q(this,t,ot,st,A,{})}}function rt(d){let t,n="© Copyright 1985 Josh Lopez.";return{c(){t=p("footer"),t.textContent=n,this.h()},l(o){t=v(o,"FOOTER",{class:!0,"data-svelte-h":!0}),k(t)!=="svelte-14tokr1"&&(t.textContent=n),this.h()},h(){u(t,"class","fixed bottom-0 z-20 w-full border-t-4 border-pink-600 bg-gray-900 p-4 text-center text-white")},m(o,i){j(o,t,i)},p:C,i:C,o:C,d(o){o&&g(t)}}}class lt extends H{constructor(t){super(),q(this,t,null,rt,A,{})}}function it(d){let t,n,o='<h1 class="text-4xl">Josh Lopez</h1>',i,r,h='<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>',c,a,f,l="Videos",e,s,L="Writings",D,x,G="Projects",I,_,U="Connect",T,N,V;return{c(){t=p("header"),n=p("a"),n.innerHTML=o,i=b(),r=p("button"),r.innerHTML=h,c=b(),a=p("nav"),f=p("a"),f.textContent=l,e=b(),s=p("a"),s.textContent=L,D=b(),x=p("a"),x.textContent=G,I=b(),_=p("a"),_.textContent=U,this.h()},l(M){t=v(M,"HEADER",{class:!0});var $=z(t);n=v($,"A",{href:!0,"data-svelte-h":!0}),k(n)!=="svelte-uwitc5"&&(n.innerHTML=o),i=y($),r=v($,"BUTTON",{class:!0,"data-svelte-h":!0}),k(r)!=="svelte-6nxtal"&&(r.innerHTML=h),c=y($),a=v($,"NAV",{class:!0,"aria-label":!0});var w=z(a);f=v(w,"A",{href:!0,class:!0,"data-svelte-h":!0}),k(f)!=="svelte-1tghdp9"&&(f.textContent=l),e=y(w),s=v(w,"A",{href:!0,class:!0,"data-svelte-h":!0}),k(s)!=="svelte-19akqof"&&(s.textContent=L),D=y(w),x=v(w,"A",{href:!0,class:!0,"data-svelte-h":!0}),k(x)!=="svelte-wvl4ad"&&(x.textContent=G),I=y(w),_=v(w,"A",{href:!0,class:!0,"data-svelte-h":!0}),k(_)!=="svelte-1ika4j1"&&(_.textContent=U),w.forEach(g),$.forEach(g),this.h()},h(){u(n,"href","/"),u(r,"class","text-pink-600 md:hidden"),u(f,"href","/videos"),u(f,"class","glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau"),u(s,"href","/writings"),u(s,"class","glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau"),u(x,"href","/projects"),u(x,"class","glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau"),u(_,"href","/connect"),u(_,"class","glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau"),u(a,"class",T=F(`nav-menu ${d[0]?"":"hidden"} flex rounded-b-md md:flex md:space-x-4`)+" svelte-mjmoau"),u(a,"aria-label","Main Navigation"),u(t,"class","fixed top-0 z-20 flex w-full items-center justify-between border-b-4 border-pink-600 bg-gray-900 p-4 text-white")},m(M,$){j(M,t,$),m(t,n),m(t,i),m(t,r),m(t,c),m(t,a),m(a,f),m(a,e),m(a,s),m(a,D),m(a,x),m(a,I),m(a,_),N||(V=Q(r,"click",d[1]),N=!0)},p(M,[$]){$&1&&T!==(T=F(`nav-menu ${M[0]?"":"hidden"} flex rounded-b-md md:flex md:space-x-4`)+" svelte-mjmoau")&&u(a,"class",T)},i:C,o:C,d(M){M&&g(t),N=!1,V()}}}function ct(d,t,n){let o=!1;function i(){n(0,o=!o)}return[o,i]}class ut extends H{constructor(t){super(),q(this,t,ct,it,A,{})}}function dt(d){let t,n,o,i,r,h,c,a;t=new at({}),o=new ut({});const f=d[1].default,l=X(f,d,d[0],null);return c=new lt({}),{c(){O(t.$$.fragment),n=b(),O(o.$$.fragment),i=b(),r=p("main"),l&&l.c(),h=b(),O(c.$$.fragment),this.h()},l(e){P(t.$$.fragment,e),n=y(e),P(o.$$.fragment,e),i=y(e),r=v(e,"MAIN",{class:!0});var s=z(r);l&&l.l(s),s.forEach(g),h=y(e),P(c.$$.fragment,e),this.h()},h(){u(r,"class","relative z-10 p-8 pt-24 text-gray-200 md:pt-32")},m(e,s){R(t,e,s),j(e,n,s),R(o,e,s),j(e,i,s),j(e,r,s),l&&l.m(r,null),j(e,h,s),R(c,e,s),a=!0},p(e,[s]){l&&l.p&&(!a||s&1)&&Y(l,f,e,e[0],a?Z(f,e[0],s,null):K(e[0]),null)},i(e){a||(E(t.$$.fragment,e),E(o.$$.fragment,e),E(l,e),E(c.$$.fragment,e),a=!0)},o(e){S(t.$$.fragment,e),S(o.$$.fragment,e),S(l,e),S(c.$$.fragment,e),a=!1},d(e){e&&(g(n),g(i),g(r),g(h)),B(t,e),B(o,e),l&&l.d(e),B(c,e)}}}function ft(d,t,n){let{$$slots:o={},$$scope:i}=t;return J(()=>{document.querySelectorAll("h1, h2").forEach(r=>{const h=1985+Math.floor(Math.random()*2016),c=Math.floor(Math.random()*h),a=Math.floor(Math.random()*1001);r.style.animationDuration=`${h}s`,r.style.animationDelay=`-${c}s`,r.style.backgroundPosition=`${a}% 50%`})}),d.$$set=r=>{"$$scope"in r&&n(0,i=r.$$scope)},[i,o]}class vt extends H{constructor(t){super(),q(this,t,ft,dt,A,{})}}export{vt as component,pt as universal};
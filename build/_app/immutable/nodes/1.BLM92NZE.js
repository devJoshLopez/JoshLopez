import{s as E,n as f,d as S}from"../chunks/scheduler.kLU6lpw6.js";import{S as x,i as j,e as g,n as d,c as _,a as v,p as m,d as h,f as q,h as y,j as l,u as $}from"../chunks/index.UQYxIaCD.js";import{s as C}from"../chunks/entry.FibEO-Vn.js";const D=()=>{const e=C;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},H={subscribe(e){return D().page.subscribe(e)}};function I(e){var b;let s,t,r=e[0].status+"",i,p,c=((b=e[0].error)==null?void 0:b.message)+"",u;return{c(){s=g("div"),t=g("h1"),i=d(r),p=d(": "),u=d(c),this.h()},l(a){s=_(a,"DIV",{class:!0});var o=v(s);t=_(o,"H1",{});var n=v(t);i=m(n,r),p=m(n,": "),u=m(n,c),n.forEach(h),o.forEach(h),this.h()},h(){q(s,"class","error svelte-lsmpu9")},m(a,o){y(a,s,o),l(s,t),l(t,i),l(t,p),l(t,u)},p(a,[o]){var n;o&1&&r!==(r=a[0].status+"")&&$(i,r),o&1&&c!==(c=((n=a[0].error)==null?void 0:n.message)+"")&&$(u,c)},i:f,o:f,d(a){a&&h(s)}}}function V(e,s,t){let r;return S(e,H,i=>t(0,r=i)),[r]}let A=class extends x{constructor(s){super(),j(this,s,V,I,E,{})}};export{A as component};
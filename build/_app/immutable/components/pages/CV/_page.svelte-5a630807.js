import{S as w,i as S,s as I,k as d,w as $,l as g,m as v,x as m,h as f,b as c,y as p,f as u,t as _,z as h,a1 as L,a as C,c as D,q as y,r as b,n as k}from"../../../chunks/index-5f4f0251.js";import{F as q,f as x}from"../../../chunks/index-0cad1715.js";import{P,T as E,C as F}from"../../../chunks/Subtitle-e1001e8a.js";import{i as O}from"../../../chunks/isDark-830880ff.js";function T(l){let n;return{c(){n=y("Under Construction")},l(a){n=b(a,"Under Construction")},m(a,e){c(a,n,e)},d(a){a&&f(n)}}}function U(l){let n,a,e,r,t,o;return r=new q({props:{icon:x,scale:1.2}}),{c(){n=d("br"),a=y(`
			Oops! Looks like I haven't built this part of the site yet. In the meantime, 
			check out my LinkedIn `),e=d("a"),$(r.$$.fragment),t=y(" !"),this.h()},l(s){n=g(s,"BR",{}),a=b(s,`
			Oops! Looks like I haven't built this part of the site yet. In the meantime, 
			check out my LinkedIn `),e=g(s,"A",{href:!0,style:!0});var i=v(e);m(r.$$.fragment,i),i.forEach(f),t=b(s," !"),this.h()},h(){k(e,"href","https://www.linkedin.com/in/seanstansill/"),k(e,"style",l[0])},m(s,i){c(s,n,i),c(s,a,i),c(s,e,i),p(r,e,null),c(s,t,i),o=!0},p(s,i){(!o||i&1)&&k(e,"style",s[0])},i(s){o||(u(r.$$.fragment,s),o=!0)},o(s){_(r.$$.fragment,s),o=!1},d(s){s&&f(n),s&&f(a),s&&f(e),h(r),s&&f(t)}}}function z(l){let n,a,e,r;return n=new E({props:{$$slots:{default:[T]},$$scope:{ctx:l}}}),e=new F({props:{$$slots:{default:[U]},$$scope:{ctx:l}}}),{c(){$(n.$$.fragment),a=C(),$(e.$$.fragment)},l(t){m(n.$$.fragment,t),a=D(t),m(e.$$.fragment,t)},m(t,o){p(n,t,o),c(t,a,o),p(e,t,o),r=!0},p(t,o){const s={};o&16&&(s.$$scope={dirty:o,ctx:t}),n.$set(s);const i={};o&17&&(i.$$scope={dirty:o,ctx:t}),e.$set(i)},i(t){r||(u(n.$$.fragment,t),u(e.$$.fragment,t),r=!0)},o(t){_(n.$$.fragment,t),_(e.$$.fragment,t),r=!1},d(t){h(n,t),t&&f(a),h(e,t)}}}function A(l){let n,a,e;return a=new P({props:{square:!0,elevation:"4",style:l[1],$$slots:{default:[z]},$$scope:{ctx:l}}}),{c(){n=d("div"),$(a.$$.fragment)},l(r){n=g(r,"DIV",{});var t=v(n);m(a.$$.fragment,t),t.forEach(f)},m(r,t){c(r,n,t),p(a,n,null),e=!0},p(r,[t]){const o={};t&17&&(o.$$scope={dirty:t,ctx:r}),a.$set(o)},i(r){e||(u(a.$$.fragment,r),e=!0)},o(r){_(a.$$.fragment,r),e=!1},d(r){r&&f(n),h(a)}}}let B="color:white;",R="color:black;",V="background-color: var(--mdc-theme-background, #f8f8f8);";function j(l,n,a){let e;L(l,O,s=>a(2,e=s));let r,t,o=e?t:V;return l.$$.update=()=>{l.$$.dirty&4&&a(0,r=e?B:R)},[r,o,e]}class M extends w{constructor(n){super(),S(this,n,j,A,I,{})}}export{M as default};

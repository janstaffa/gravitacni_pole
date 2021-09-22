(this.webpackJsonpsorting_visualised=this.webpackJsonpsorting_visualised||[]).push([[0],{16:function(e,t,r){},18:function(e,t,r){},20:function(e,t,r){},21:function(e,t,r){},22:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=r(9),s=r.n(a),i=r(11),o=r(4),l="#00ff00",d="#ffff00",u="#ff0000",j="#00ffff",b="#ff00ff",h=(r(16),r(1)),x=function(e){var t=e.speed,r=e.comparisons,n=e.items,c=e.alreadySorted,a=e.sortName;return Object(h.jsxs)("div",{className:"bottom-bar",children:[Object(h.jsxs)("div",{className:"color-bar",children:[Object(h.jsxs)("div",{className:"color-wrap",children:[Object(h.jsx)("span",{className:"color",style:{backgroundColor:u}}),"\xa0- item"]}),Object(h.jsxs)("div",{className:"color-wrap",children:[Object(h.jsx)("span",{className:"color",style:{backgroundColor:d}}),"\xa0- comparing"]}),Object(h.jsxs)("div",{className:"color-wrap",children:[Object(h.jsx)("span",{className:"color",style:{backgroundColor:l}}),"\xa0- sorted"]}),Object(h.jsxs)("div",{className:"color-wrap",children:[Object(h.jsx)("span",{className:"color",style:{backgroundColor:j}}),"\xa0- pivot"]}),Object(h.jsxs)("div",{className:"color-wrap",children:[Object(h.jsx)("span",{className:"color",style:{backgroundColor:b}}),"\xa0- boundary"]})]}),Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:a})}),Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Speed(it/s):"}),Object(h.jsx)("td",{children:t})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Total items:"}),Object(h.jsx)("td",{children:n})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Total iterations:"}),Object(h.jsx)("td",{children:r})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"Already sorted:"}),Object(h.jsxs)("td",{children:[c," item",c>1?"s":""," (",(c/(n/100)).toFixed(2),"%)"]})]})]})})]})},f=r(8),O=r(10),v=(r(18),function(e){var t=e.setEnabledSort,r=e.items,n=e.setItems,c=e.isPaused,a=e.speed,s=e.setSpeed,i=e.reset,o=e.playPause;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"title",children:"Sorting Visualized"}),Object(h.jsx)("div",{className:"nav",children:Object(h.jsxs)("div",{className:"sort-menu",children:[Object(h.jsx)("div",{className:"menu-button",onClick:i,children:Object(h.jsx)(O.a,{})}),Object(h.jsx)("div",{className:"menu-button",onClick:o,children:c?Object(h.jsx)(f.b,{}):Object(h.jsx)(f.a,{})}),Object(h.jsxs)("select",{onChange:function(e){return t(parseInt(e.target.value))},children:[Object(h.jsx)("option",{value:0,children:"Bubble sort"}),Object(h.jsx)("option",{value:1,children:"Selection sort"}),Object(h.jsx)("option",{value:2,children:"Insertion sort"}),Object(h.jsx)("option",{value:3,children:"Merge sort"}),Object(h.jsx)("option",{value:4,children:"Quick sort"})]}),Object(h.jsxs)("div",{className:"menu-slider",children:[Object(h.jsx)("label",{children:"Speed"}),Object(h.jsx)("input",{type:"range",min:1,max:20,value:a,onChange:function(e){return s(parseInt(e.target.value))}})]}),Object(h.jsxs)("div",{className:"menu-slider",children:[Object(h.jsx)("label",{children:"Items"}),Object(h.jsx)("input",{type:"range",min:5,max:250,value:r,onChange:function(e){return n(parseInt(e.target.value))}})]})]})}),Object(h.jsx)("hr",{})]})}),g=function(e){var t=e.order,r=e.highlights,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(c.current){var e=c.current.width,n=c.current.height,a=e/t.length,s=c.current.getContext("2d");s&&(s.clearRect(0,0,e,n),t.forEach((function(e,c){var i=null===r||void 0===r?void 0:r.find((function(e){return e.index===c}));s.fillStyle=i?i.color:u;var o=e*(n/t.length);s.fillRect(c*a+1,n-o,a-1,o),s.fillStyle="#000000",s.font="".concat(a>20?"12":a/2,"px Arial"),s.fillText(e.toString(),c*a+5,n-3)})))}})),Object(h.jsx)("div",{children:Object(h.jsx)("canvas",{className:"sort-canvas",ref:c,width:"600",height:"365"})})},p=r(3),m=r.n(p),k=function(e,t,r){var n=e,c=e[t];return n[t]=e[r],n[r]=c,n},y=m.a.mark(w);function w(e){var t,r,n,c;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=0,r=[],n=e,c=m.a.mark((function c(){var a,s,i,o;return m.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s=t+1,i=n[a=t],o=n[s],i>o&&(n=k(n,a,s)),0===t&&r.find((function(e){return e===s}))?r.push(a):s+1===e.length-r.length?(r.push(s),t=0):t++,c.next=8,{newOrder:n,highlights:[{index:a,color:d},{index:s,color:d}],alreadySortedIndexes:r};case 8:case"end":return c.stop()}}),c)}));case 4:if(!(r.length<e.length)){a.next=8;break}return a.delegateYield(c(),"t0",6);case 6:a.next=4;break;case 8:case"end":return a.stop()}}),y)}var S=m.a.mark(I);function I(e){var t,r,n,c,a,s,i,o;return m.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:t=[],r=1,n=e,c=!1,a=0,s=function(e,t){return n[e]<n[t]};case 6:if(!(t.length<e.length)){l.next=14;break}return i=0,o=0,c?s(i=a,o=a-1)?(n=k(n,i,o),a--):(c=!1,a=0):(s(i=r,o=r-1)&&(n=k(n,i,o),a=o,c=!0),r===e.length&&(t=Array.from(Array(n.length).keys())),r++),l.next=12,{newOrder:n,highlights:[{index:i,color:d},{index:o,color:d},{index:r-1,color:b}],alreadySortedIndexes:t};case 12:l.next=6;break;case 14:case"end":return l.stop()}}),S)}var N=m.a.mark(A);function A(e){var t,r,n,c,a,s,i,o,l,u,j,h,x,f,O;return m.a.wrap((function(v){for(;;)switch(v.prev=v.next){case 0:t=e.length,r=1;case 2:if(!(r<=t-1)){v.next=33;break}n=0;case 4:if(!(n<t-1)){v.next=30;break}for(c=Math.min(n+r-1,t-1),a=Math.min(n+2*r-1,t-1),s=void 0,i=void 0,o=void 0,j=[l=c-n+1],h=[u=a-c],s=0;s<l;s++)j[s]=e[n+s];for(i=0;i<u;i++)h[i]=e[c+1+i];s=0,i=0,o=n;case 17:if(!(s<l&&i<u)){v.next=25;break}return x=s,j[s]<=h[i]?(x=e.indexOf(j[s]),e[e.indexOf(j[s])]=e[o],e[o]=j[s],s++):(x=e.indexOf(h[i]),e[e.indexOf(h[i])]=e[o],e[o]=h[i],i++),v.next=22,{alreadySortedIndexes:[],highlights:[{index:n,color:b},{index:a,color:b},{index:o,color:d},{index:x,color:d}],newOrder:e};case 22:o++,v.next=17;break;case 25:for(;s<l;)e[o]=j[s],s++,o++;for(;i<u;)e[o]=h[i],i++,o++;case 27:n+=2*r,v.next=4;break;case 30:r*=2,v.next=2;break;case 33:f=!0,O=0;case 35:if(!(O<e.length)){v.next=42;break}if(!(e[O]>1&&e[O]!==e[O-1]+1)){v.next=39;break}return f=!1,v.abrupt("break",42);case 39:O++,v.next=35;break;case 42:if(!f){v.next=45;break}return v.next=45,{alreadySortedIndexes:Array.from(Array(e.length).keys()),highlights:[],newOrder:e};case 45:case"end":return v.stop()}}),N)}var R=m.a.mark(C);function C(e){var t,r,n,c,a,s,i,o,l,u,h,x,f;return m.a.wrap((function(O){for(;;)switch(O.prev=O.next){case 0:t=[],r=0,n=e.length-1,(c=new Array(n-r+1)).fill(0),a=-1,c[++a]=r,c[++a]=n;case 8:if(!(a>=0)){O.next=39;break}return n=c[a--],r=c[a--],s=void 0,o=e[i=n],O.next=16,{newOrder:e,highlights:[{index:i,color:j},{index:n,color:b},{index:r,color:b}],alreadySortedIndexes:t};case 16:l=r-1,u=r;case 18:if(!(u<=n-1)){O.next=29;break}if(!(e[u]<=o)){O.next=26;break}return l++,s=e[l],e[l]=e[u],e[u]=s,O.next=26,{newOrder:e,highlights:[{index:l,color:d},{index:u,color:d}],alreadySortedIndexes:t};case 26:u++,O.next=18;break;case 29:s=e[l+1],e[l+1]=e[i],e[i]=s,h=l+1,console.log(i,h),h-1>r&&(c[++a]=r,c[++a]=h-1),h+1<n&&(c[++a]=h+1,c[++a]=n),t.push(h),O.next=8;break;case 39:x=!0,f=0;case 41:if(!(f<e.length)){O.next=48;break}if(!(e[f]>1&&e[f]!==e[f-1]+1)){O.next=45;break}return x=!1,O.abrupt("break",48);case 45:f++,O.next=41;break;case 48:if(!x){O.next=51;break}return O.next=51,{alreadySortedIndexes:Array.from(Array(e.length).keys()),highlights:[],newOrder:e};case 51:case"end":return O.stop()}}),R)}var E=m.a.mark(M);function M(e){var t,r,n,c,a,s;return m.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=0,n=(r=[]).length+1,c=e;case 4:if(!(r.length<e.length)){i.next=14;break}return a=c[t],s=c[n],a>s&&(c=k(c,t,n)),n!==e.length-1&&t!==e.length-1||(r.push(t),n=r.length,t++),n++,i.next=12,{newOrder:c,highlights:[{index:t,color:d},{index:n,color:d}],alreadySortedIndexes:r};case 12:i.next=4;break;case 14:case"end":return i.stop()}}),E)}r(20);var P=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),r=t[0],c=t[1],a=Object(n.useRef)(r);a.current=r;var s=Object(n.useState)([]),l=Object(o.a)(s,2),d=l[0],u=l[1];Object(n.useRef)(d).current=d;var j=Object(n.useState)([]),b=Object(o.a)(j,2),f=b[0],O=b[1],p=Object(n.useState)(20),m=Object(o.a)(p,2),k=m[0],y=m[1],S=Object(n.useRef)(k);S.current=k;var N=Object(n.useState)(2),R=Object(o.a)(N,2),E=R[0],P=R[1],B=Object(n.useRef)(E);B.current=E;var T=Object(n.useState)(!0),J=Object(o.a)(T,2),L=J[0],Q=J[1],_=Object(n.useRef)(L);_.current=L;var z=Object(n.useState)(!1),F=Object(o.a)(z,2),V=F[0],Y=F[1],q=Object(n.useRef)(V);q.current=V;var D=Object(n.useState)(0),G=Object(o.a)(D,2),H=G[0],K=G[1],U=Object(n.useRef)(H);U.current=H;var W=Object(n.useState)(),X=Object(o.a)(W,2),Z=X[0],$=X[1],ee=Object(n.useState)(),te=Object(o.a)(ee,2),re=te[0],ne=te[1],ce=Object(n.useRef)(),ae=Object(n.useState)([]),se=Object(o.a)(ae,2),ie=se[0],oe=se[1];ce.current=re;var le=function(){Q(!0);var e=function(e){for(var t=Array.from({length:e},(function(e,t){return t+1})),r=t.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),c=t[r];t[r]=t[n],t[n]=c}return t}(k),t=function(e,t){switch(e){case 0:return w(t);case 1:return M(t);case 2:return I(t);case 3:return A(t);case 4:return C(t);default:return}}(a.current,e);t&&$(t),u(e),O([]),Y(!1),K(0),oe([])};Object(n.useEffect)((function(){le()}),[k]),Object(n.useEffect)((function(){if(Z){if(!L){var e=setInterval((function(){var t=Z.next(),r=t.value;if(t.done)return clearInterval(e),void Q(!0);K(U.current+1);var n=r.newOrder;u(n);var c=Object(i.a)(r.highlights);r.alreadySortedIndexes.length===n.length&&(clearInterval(e),Q(!0),Y(!0),c=[]),oe(r.alreadySortedIndexes),r.alreadySortedIndexes.length>0&&r.alreadySortedIndexes.forEach((function(e){c.push({index:e,color:"#00ff00"})})),O(c)}),1e3/E);return ne(e),function(){ce.current&&clearInterval(ce.current)}}ce.current&&clearInterval(ce.current)}}),[Z,L,E]),Object(n.useEffect)((function(){le()}),[r]);var de=function(){q.current&&le(),Q(!_.current)};return Object(n.useEffect)((function(){document.addEventListener("keydown",(function(e){switch(e.key){case" ":de();break;case"ArrowRight":B.current<20&&P(B.current+1);break;case"ArrowLeft":B.current>1&&P(B.current-1);break;case"+":S.current<250&&y(S.current+1);break;case"-":S.current>5&&y(S.current-1)}}))}),[]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"app-wrap",children:[Object(h.jsx)(v,{setEnabledSort:c,items:k,setItems:y,speed:E,setSpeed:P,isPaused:L,reset:le,playPause:de}),Object(h.jsx)(g,{order:d,highlights:f}),Object(h.jsx)(x,{comparisons:H,speed:E,items:k,alreadySorted:ie.length,sortName:function(e){switch(e){case 0:return"Bubble sort";case 1:return"Selection sort";case 2:return"Insertion sort";case 3:return"Merge sort";case 4:return"Quick sort";default:return""}}(r)})]})})};r(21);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.7f2154e9.chunk.js.map
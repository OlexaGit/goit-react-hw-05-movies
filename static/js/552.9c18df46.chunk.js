"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[552],{215:function(e,r,t){t.d(r,{Pd:function(){return p},XT:function(){return o},bl:function(){return d},jX:function(){return h},z1:function(){return u}});var n=t(861),a=t(757),c=t.n(a),i=t(243),s="e4e77b2d83733ec5f4ee2698cbe57afc",o=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},552:function(e,r,t){t.r(r),t.d(r,{default:function(){return j}});var n=t(861),a=t(439),c=t(757),i=t.n(c),s=t(791),o=t(689),u=t(87),p=t(215),d="Button_button__Zk130",h=t(184),l=function(e){var r=e.to,t=(0,s.useState)(!1),n=(0,a.Z)(t,2),c=n[0],i=n[1];return c?(0,h.jsx)(u.rU,{to:r}):(0,h.jsx)("button",{className:d,onClick:function(){return i(!0)},children:(0,h.jsx)(u.rU,{to:r,children:"\ud83d\udd19 Go back"})})},f=t(681),v="MovieDetails_details__a1YDb",x="MovieDetails_addInform__vXxIV",m=t(161),j=function(){var e,r,t=(0,o.UO)().id,c=(0,s.useState)([]),d=(0,a.Z)(c,2),j=d[0],b=d[1],k=(0,s.useState)([]),w=(0,a.Z)(k,2),_=w[0],g=w[1],Z=(0,s.useState)(!1),y=(0,a.Z)(Z,2),S=y[0],U=y[1],N=(0,o.TH)(),C=(0,s.useRef)(null!==(e=null===(r=N.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");(0,s.useEffect)((function(){function e(){return(e=(0,n.Z)(i().mark((function e(){var r,n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.Pd)(t);case 3:r=e.sent,b(n=r),a=n.genres,g(a),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),U(!0),console.error(e.t0);case 14:return e.prev=14,e.finish(14);case 16:case"end":return e.stop()}}),e,null,[[0,10,14,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var D=j.title,E=j.vote_average,O=j.overview,X=j.backdrop_path;return console.log(N.pathname),(0,h.jsxs)("main",{children:[(0,h.jsx)(l,{to:C.current}),(0,h.jsxs)(f.Z,{isError:S,children:[(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(X),alt:"",height:360}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{children:D}),(0,h.jsx)("p",{children:"User Score: ".concat(E)}),(0,h.jsx)("h4",{children:"Overview"}),(0,h.jsx)("p",{children:O}),(0,h.jsx)("h3",{children:"Genres"}),_.map((function(e){var r=e.id,t=e.name;return(0,h.jsxs)("span",{children:[t,", "]},r)}))]})]}),(0,h.jsxs)("div",{className:x,children:[(0,h.jsx)("h5",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("div",{children:(0,h.jsx)(m.Z,{})}),children:(0,h.jsx)(o.j3,{})})]})]})}},681:function(e,r,t){t.d(r,{Z:function(){return c}});var n="ErrorWrapper_info__+NeD9",a=t(184),c=function(e){var r=e.isError,t=e.children;return r?(0,a.jsx)("h1",{className:n,children:"Ooops!!! Something went wrong!"}):(0,a.jsx)(a.Fragment,{children:t})}}}]);
//# sourceMappingURL=552.9c18df46.chunk.js.map
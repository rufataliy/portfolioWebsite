(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(n,e,t){n.exports=t(20)},20:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(8),i=t.n(o),c=t(3),l=t(9),u=t.n(l),s=t(1),p=t(2);function d(){var n=Object(s.a)(["\n  transform: rotate(-90deg);\n  animation: "," 0.2s 0.3s 1 forwards ease-out;\n"]);return d=function(){return n},n}function m(){var n=Object(s.a)(["\n  transform: rotate(90deg);\n  animation: "," 0.2s 0.3s 1 forwards ease-out;\n"]);return m=function(){return n},n}function f(){var n=Object(s.a)(["\n  opacity: 1;\n  height: 3px;\n  border-radius: 3px;\n  width: 100%;\n  background: grey;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border: 2px solid white;\n"]);return f=function(){return n},n}function b(){var n=Object(s.a)(["\n  margin-left: auto;\n  height: 60px;\n  width: 60px;\n  position: absolute;\n  right: 3%;\n  top: 3%;\n  z-index: 10000;\n  @media "," {\n    height: 30px;\n    width: 30px;\n  }\n"]);return b=function(){return n},n}function h(){var n=Object(s.a)(["\nfrom {\n  opacity:0;\n  transform:translateX(-50%) translateY(-50%) rotate(-90deg) translateY(-50%);\n}\nto{\n  opacity:1;\n  transform:translateX(-40%) translateY(-50%) rotate(-45deg) translateY(-50%);\n}\n"]);return h=function(){return n},n}function g(){var n=Object(s.a)(["\nfrom {\n  opacity:0;\n  transform: translateX(-50%) translateY(-50%) rotate(90deg) translateY(-50%);\n}\nto{\n  opacity:1;\n  transform:  translateX(-50%) translateY(-50%) rotate(45deg) translateY(-50%);\n}\n"]);return g=function(){return n},n}function x(){var n=Object(s.a)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n"]);return x=function(){return n},n}function v(){var n=Object(s.a)(["\n  top: auto;\n  padding: 2vw;\n  bottom: 5%;\n  font-size: 1.3rem;\n  border-radius: 0.5rem;\n  & p {\n    font-size: 1.1rem;\n  }\n  @media "," {\n    position: relative;\n    width: 90%;\n    margin: 0 auto;\n    left: 0;\n    & p {\n      font-size: 1.4rem;\n    }\n  }\n  @media "," {\n    position: absolute;\n    & p {\n      font-size: 1rem;\n    }\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 5%;\n  padding: 1rem 1.4rem;\n  background: white;\n  box-shadow: 0px 9px 10px -6px rgba(0, 0, 0, 0.7);\n  border-radius: 0.5rem;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  font-size: 1.8rem;\n  margin: 0;\n"]);return w=function(){return n},n}function j(){var n=Object(s.a)(["\n  margin-right: 30px;\n  shape-outside: circle(50%);\n  float: left;\n  height: 300px;\n  width: 300px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 3px solid white;\n  box-shadow: inset 3px 0px 7px 5px rgba(0, 0, 0, 0.5),\n    3px 0 7px 3px rgba(0, 0, 0, 0.3);\n"]);return j=function(){return n},n}function E(){var n=Object(s.a)(["\n  width: 50%;\n  max-width: 300px;\n"]);return E=function(){return n},n}function O(){var n=Object(s.a)(["\n  width: 100%;\n"]);return O=function(){return n},n}function y(){var n=Object(s.a)(["\n  height: 100%;\n"]);return y=function(){return n},n}function k(){var n=Object(s.a)(["\n  padding: 10px;\n  overflow: hidden;\n  //   display: flex;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 800px;\n  margin: 0 auto;\n"]);return k=function(){return n},n}function z(){var n=Object(s.a)(["\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n  padding: 2vw;\n  width: 100vw;\n  height: 250px;\n  width: 500px;\n  box-shadow: 0px 9px 17px -6px rgba(0, 0, 0, 0.7);\n  transition: 0.2s linear;\n  border-radius: 10px;\n  cursor: pointer;\n  margin: 20px;\n  order: 2;\n  display: flex;\n  justify-content: space-between;\n  alig-items: flex-start;\n  img {\n    height: 120%;\n  }\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 9px 25px -15px rgba(0, 0, 0, 0.9);\n    color: rgba(1, 133, 154, 1);\n    text-shadow: 0px 0px rgba(1, 133, 154, 1);\n  }\n  &.open {\n    position: fixed;\n    margin: 0 auto;\n    opacity: 1;\n    height: 100vh;\n    width: 100vw;\n    max-height: 100vh;\n    max-width: 100vw;\n    top: 0;\n    left: 0;\n    order: 1;\n    z-index: 10;\n    background: white;\n    margin: 0;\n  }\n  &.portfolio-open {\n    overflow: visible;\n    order: 1;\n    height: 100vh;\n    max-width: 70%;\n    max-height: 100%;\n    height: auto;\n  }\n  &.open:hover {\n    transform: scale(1);\n  }\n  @media "," {\n    margin: 10px 0;\n    max-width: 90%;\n    &.portfolio-open {\n      max-width: 95%;\n      width: 100%;\n    }\n  }\n  @media "," {\n    margin: 20px;\n    max-width: 100%;\n    &.portfolio-open {\n      max-width: 70%;\n    }\n  }\n"]);return z=function(){return n},n}function Y(){var n=Object(s.a)(["\n  z-index: -1;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n"]);return Y=function(){return n},n}function L(){var n=Object(s.a)(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n  overflow: auto;\n  box-sizing: border-box;\n  padding-bottom: 60px;\n"]);return L=function(){return n},n}function S(){var n=Object(s.a)(["\n\nbody{\n  margin:0;\n  padding:0;\n  min-height:100vh;\n  }\n  #root{\n    height:100vh;\n  }\n  @media "," {\n    html{\n      font-size:10px;\n    }\n  }\n  @media "," {\n     html{\n      font-size:18px;\n    }\n  }\n"]);return S=function(){return n},n}var C="(min-width:320px)",I="(min-width:1024px)",X=Object(p.a)(S(),C,I),q=p.b.div(L()),F=p.b.div(Y()),P=p.b.div(z(),C,I),T=p.b.div(k()),_=p.b.img(y()),M=p.b.img(O()),N=(p.b.div(E()),p.b.div(j())),A=p.b.div(w()),H=Object(p.b)(A)(v(),C,I),J=p.b.div(x()),B=Object(p.c)(g()),D=Object(p.c)(h()),R=p.b.div(b(),C),V=p.b.span(f()),G=Object(p.b)(V)(m(),B),K=Object(p.b)(V)(d(),D),Q=function(){return r.a.createElement(T,null,r.a.createElement(N,null,r.a.createElement(_,{src:u.a,alt:""})),r.a.createElement("span",null,r.a.createElement("h1",null,"About"),r.a.createElement("h3",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur molestias quo numquam ea, quasi aspernatur animi iure? Nam dignissimos sit sequi autem facilis, inventore optio iure repellat, dolores exercitationem officiis?")))},U=function(n){var e=n.showContent,t=n.portfolio,a=n.selectedItem;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{src:"img/"+t.image}),r.a.createElement(A,null,r.a.createElement("span",null,t.label)),e&&a===t.label&&r.a.createElement(H,{dangerouslySetInnerHTML:{__html:t.text}}))},W=function(){var n=Object(a.useState)(!1),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(),l=Object(c.a)(i,2),u=l[0],s=l[1],p=Object(a.useState)([]),d=Object(c.a)(p,2),m=d[0],f=d[1];Object(a.useEffect)((function(){fetch("http://localhost:3000/api/portfolios").then((function(n){return n.json()})).then((function(n){f(n)})).catch(console.log)}),[]);var b=function(n){var e=n.target.closest("div");u===e?(o(!1),console.log(!0),null===u||void 0===u||u.classList.toggle("portfolio-open"),s(void 0)):(null===u||void 0===u||u.classList.remove("portfolio-open"),e.classList.add("portfolio-open"),s(e),o(!0)),e.parentElement.scrollTo(0,0)};return r.a.createElement(q,null,m[0]&&(null===m||void 0===m?void 0:m.map((function(n){return r.a.createElement(P,{id:n.label,onClick:b},r.a.createElement(U,{selectedItem:null===u||void 0===u?void 0:u.id,portfolio:n,showContent:t}))}))))},Z=function(n){n.stopPropagation()},$=function(n){var e=n.close,t=n.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,{onClick:e},r.a.createElement(G,null),r.a.createElement(K,null)),r.a.createElement(J,{onClick:Z},t,r.a.createElement(F,{className:"test"})))};function nn(){var n=Object(s.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  h3 {\n    margin: 0;\n  }\n  span {\n    text-align: center;\n  }\n  span a {\n    display: inline-block;\n    transition: 0.4s;\n  }\n  & a,\n  a:visited {\n    color: inherit;\n  }\n  span:hover a {\n    box-shadow: 0px 11px 20px -8px grey;\n    transform: translateY(-3px);\n    font-size: calc(100%+1px);\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(s.a)(["\n  background-position: center;\n  transform: rotateY(180deg);\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]);return en=function(){return n},n}function tn(){var n=Object(s.a)(["\n  h1 {\n    text-align: left;\n  }\n  overflow: hidden;\n  justify-content: space-between;\n  display: flex;\n  background-position: top left;\n  background-color: white;\n  z-index: 2;\n  padding: 2vw;\n  box-sizing: border-box;\n"]);return tn=function(){return n},n}function an(){var n=Object(s.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  background-size: cover;\n  border-radius: 10px;\n"]);return an=function(){return n},n}function rn(){var n=Object(s.a)(["\n  background-color: transparent;\n\n  perspective: 1000px;\n  margin: 0 auto;\n  padding: 0;\n  overflow: visible;\n  box-shadow: none;\n  &:hover {\n    transform: scale(1);\n    box-shadow: none;\n  }\n  &:hover "," {\n    transform: rotateY(180deg);\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(s.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  border-radius: 10px;\n  box-shadow: 0px 9px 17px -6px rgba(0, 0, 0, 0.7);\n"]);return on=function(){return n},n}var cn=p.b.div(on()),ln=Object(p.b)(P)(rn(),cn),un=p.b.div(an()),sn=Object(p.b)(un)(tn()),pn=Object(p.b)(un)(en()),dn=p.b.div(nn()),mn=function(n){var e=n.page;return r.a.createElement(ln,null,r.a.createElement(cn,null,r.a.createElement(sn,null,r.a.createElement("h1",null,e.name),r.a.createElement("img",{src:"/img/".concat(e.image),alt:""})),r.a.createElement(pn,null,r.a.createElement(dn,{dangerouslySetInnerHTML:{__html:e.text}}))))},fn=function(n){var e=n.page;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,e.name),r.a.createElement("img",{src:"/img/".concat(e.image),alt:""}))};var bn=function(){var n=Object(a.useState)(""),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)(),l=Object(c.a)(i,2),u=l[0],s=l[1],p=Object(a.useState)(),d=Object(c.a)(p,2),m=d[0],f=d[1];Object(a.useEffect)((function(){fetch("http://localhost:3000/api/pages").then((function(n){return n.json()})).then((function(n){return f(n)})).catch((function(n){return console.log(n)})),window.addEventListener("devicemotion",(function(n){var e=n.rotationRate,t=e.alpha,a=e.gamma,r=e.beta;console.log({alpha:t,gamma:a,beta:r})})),null===u||void 0===u||u.scrollIntoView()}),[u]);var b=function(n){console.log("open"),n.stopPropagation(),n.preventDefault(),o(n.target.closest(".page").id),s(n.target.closest(".page")),n.target.closest(".page").classList.add("open")},h=function(n){n.stopPropagation(),o(""),console.log(u),null===u||void 0===u||u.classList.remove("open"),s(void 0)},g={About:r.a.createElement(Q,null),Portfolio:r.a.createElement(W,null),Contact:r.a.createElement(mn,null)};return r.a.createElement(q,null,r.a.createElement(X,null),m&&m.map((function(n){return r.a.createElement(r.a.Fragment,null,"Contact"!==n.name?r.a.createElement(P,{className:"page",id:n.name,onClick:b},t===n.name?r.a.createElement($,{close:h},g[n.name]):r.a.createElement(fn,{page:n})):r.a.createElement(mn,{page:n}))})))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(bn,null)),document.getElementById("root"))},9:function(n,e,t){n.exports=t.p+"static/media/profile3.1a97c061.png"}},[[13,1,2]]]);
//# sourceMappingURL=main.4a1db3b2.chunk.js.map
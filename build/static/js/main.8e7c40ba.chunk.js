(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(n,t,e){n.exports=e(19)},19:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(8),i=e.n(o),c=e(3),l=e(1),u=e(2);function s(){var n=Object(l.a)(["\n  transform: rotate(-90deg);\n  animation: "," 0.2s 0.3s 1 forwards ease-out;\n"]);return s=function(){return n},n}function p(){var n=Object(l.a)(["\n  transform: rotate(90deg);\n  animation: "," 0.2s 0.3s 1 forwards ease-out;\n"]);return p=function(){return n},n}function d(){var n=Object(l.a)(["\n  opacity: 1;\n  height: 3px;\n  border-radius: 3px;\n  width: 100%;\n  background: grey;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  border: 2px solid white;\n"]);return d=function(){return n},n}function f(){var n=Object(l.a)(["\n  margin-left: auto;\n  height: 60px;\n  width: 60px;\n  position: absolute;\n  right: 3%;\n  top: 3%;\n  z-index: 10000;\n  @media "," {\n    height: 30px;\n    width: 30px;\n  }\n"]);return f=function(){return n},n}function m(){var n=Object(l.a)(["\nfrom {\n  opacity:0;\n  transform:translateX(-50%) translateY(-50%) rotate(-90deg) translateY(-50%);\n}\nto{\n  opacity:1;\n  transform:translateX(-40%) translateY(-50%) rotate(-45deg) translateY(-50%);\n}\n"]);return m=function(){return n},n}function h(){var n=Object(l.a)(["\nfrom {\n  opacity:0;\n  transform: translateX(-50%) translateY(-50%) rotate(90deg) translateY(-50%);\n}\nto{\n  opacity:1;\n  transform:  translateX(-50%) translateY(-50%) rotate(45deg) translateY(-50%);\n}\n"]);return h=function(){return n},n}function b(){var n=Object(l.a)(["\n  height: 100%;\n  width: 100%;\n  position: relative;\n"]);return b=function(){return n},n}function g(){var n=Object(l.a)(["\n  top: auto;\n  padding: 2vw;\n  bottom: 5%;\n  font-size: 1.3rem;\n  border-radius: 0.5rem;\n  & p {\n    margin: 0;\n    font-size: 1.1rem;\n  }\n  & h4 {\n    margin: 0;\n  }\n  @media "," {\n    position: relative;\n    width: 90%;\n    margin: 0 auto;\n    left: 0;\n    & p {\n      font-size: 1.4rem;\n    }\n  }\n  @media "," {\n    position: absolute;\n    & p {\n      font-size: 1rem;\n    }\n  }\n"]);return g=function(){return n},n}function x(){var n=Object(l.a)(["\n  position: absolute;\n  top: 0;\n  left: 5%;\n  padding: 1rem 1.4rem;\n  background: white;\n  box-shadow: 0px 9px 10px -6px rgba(0, 0, 0, 0.7);\n  border-radius: 0.5rem;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  font-size: 1.8rem;\n  margin: 0;\n"]);return x=function(){return n},n}function v(){var n=Object(l.a)(["\n  height: 300px;\n  width: 300px;\n  font-size: 1.4rem;\n  overflow: hidden;\n  p {\n    font-size: 1.4rem;\n  }\n  img {\n    height: auto;\n    width: 100%;\n  }\n  @media "," {\n    img {\n      height: 120%;\n      width: 100%;\n    }\n    overflow: hidden;\n    border: 3px solid white;\n    box-shadow: inset 3px 0px 7px 5px rgba(0, 0, 0, 0.5),\n      3px 0 7px 3px rgba(0, 0, 0, 0.3);\n    border-radius: 50%;\n    float: left;\n    margin-right: 30px;\n    shape-outside: circle(50%);\n  }\n"]);return v=function(){return n},n}function w(){var n=Object(l.a)(["\n  width: 50%;\n  max-width: 300px;\n"]);return w=function(){return n},n}function j(){var n=Object(l.a)(["\n  width: 100%;\n"]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n  height: 100%;\n"]);return O=function(){return n},n}function E(){var n=Object(l.a)(["\n  padding: 10px;\n  overflow: hidden;\n  //   display: flex;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 800px;\n  margin: 0 auto;\n  p {\n    font-size: 1.6rem;\n  }\n"]);return E=function(){return n},n}function y(){var n=Object(l.a)(["\n  height: auto;\n  display: block;\n"]);return y=function(){return n},n}function k(){var n=Object(l.a)(["\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n  padding: 2vw;\n  width: 100vw;\n  height: 250px;\n  width: 500px;\n  box-shadow: 0px 9px 17px -6px rgba(0, 0, 0, 0.7);\n  transition: 0.2s linear;\n  border-radius: 10px;\n  cursor: pointer;\n  margin: 20px;\n  order: 2;\n  display: flex;\n  justify-content: space-between;\n  alig-items: flex-start;\n  img {\n    height: 120%;\n  }\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0px 9px 25px -15px rgba(0, 0, 0, 0.9);\n    color: rgba(1, 133, 154, 1);\n    text-shadow: 0px 0px rgba(1, 133, 154, 1);\n  }\n  &.open {\n    position: fixed;\n    margin: 0 auto;\n    opacity: 1;\n    height: 100vh;\n    width: 100vw;\n    max-height: 100vh;\n    max-width: 100vw;\n    top: 0;\n    left: 0;\n    order: 1;\n    z-index: 10;\n    background: white;\n    margin: 0;\n  }\n  &.portfolio-open {\n    overflow: visible;\n    order: 1;\n    height: 100vh;\n    max-width: 70%;\n    max-height: 100%;\n    height: auto;\n  }\n  &.open:hover {\n    transform: scale(1);\n  }\n  @media "," {\n    margin: 10px 0;\n    max-width: 90%;\n    &.portfolio-open {\n      max-width: 95%;\n      width: 100%;\n    }\n  }\n  @media "," {\n    margin: 20px;\n    max-width: 100%;\n    &.portfolio-open {\n      max-width: 70%;\n    }\n  }\n"]);return k=function(){return n},n}function z(){var n=Object(l.a)(["\n  z-index: -1;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n"]);return z=function(){return n},n}function Y(){var n=Object(l.a)(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100%;\n  overflow: auto;\n  box-sizing: border-box;\n  padding-bottom: 60px;\n"]);return Y=function(){return n},n}function S(){var n=Object(l.a)(["\n\nbody{\n  font-family: 'Baloo Bhaina 2', cursive;\n  margin:0;\n  padding:0;\n  min-height:100vh;\n  }\n  #root{\n    height:100vh;\n  }\n  @media "," {\n    html{\n      font-size:10px;\n    }\n  }\n  @media "," {\n     html{\n      font-size:18px;\n    }\n  }\n"]);return S=function(){return n},n}var C="(min-width:320px)",L="(min-width:1024px)",I=Object(u.a)(S(),C,L),_=u.b.div(Y()),X=u.b.div(z()),F=u.b.div(k(),C,L),M=Object(u.b)(F)(y()),P=u.b.div(E()),T=u.b.img(O()),B=u.b.img(j()),H=(u.b.div(w()),u.b.div(v(),L)),J=u.b.div(x()),N=Object(u.b)(J)(g(),C,L),A=u.b.div(b()),D=Object(u.c)(h()),V=Object(u.c)(m()),q=u.b.div(f(),C),G=u.b.span(d()),K=Object(u.b)(G)(p(),D),Q=Object(u.b)(G)(s(),V),R=function(n){var t=n.page;return a.a.createElement(P,null,a.a.createElement(H,null,a.a.createElement(T,{src:"https://portfoliorufat.herokuapp.com/".concat(t.image),alt:""})),a.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.text}}))},U=function(n){var t=n.showContent,e=n.portfolio,r=n.selectedItem;return a.a.createElement(a.a.Fragment,null,a.a.createElement(B,{src:"https://portfoliorufat.herokuapp.com/"+e.image}),a.a.createElement(J,null,a.a.createElement("span",null,e.label)),t&&r===e.label&&a.a.createElement(N,{dangerouslySetInnerHTML:{__html:e.text}}))},W=function(){var n=Object(r.useState)(!1),t=Object(c.a)(n,2),e=t[0],o=t[1],i=Object(r.useState)(),l=Object(c.a)(i,2),u=l[0],s=l[1],p=Object(r.useState)([]),d=Object(c.a)(p,2),f=d[0],m=d[1];Object(r.useEffect)((function(){fetch("https://portfoliorufat.herokuapp.com/api/portfolios",{mode:"no-cors"}).then((function(n){return n.json()})).then((function(n){m(n)})).catch(console.log)}),[]);var h=function(n){var t=n.target.closest("div");u===t?(o(!1),console.log(!0),null===u||void 0===u||u.classList.toggle("portfolio-open"),s(void 0)):(null===u||void 0===u||u.classList.remove("portfolio-open"),t.classList.add("portfolio-open"),s(t),o(!0)),t.parentElement.scrollTo(0,0)};return a.a.createElement(_,null,f[0]&&(null===f||void 0===f?void 0:f.map((function(n){return a.a.createElement(M,{key:n.label,id:n.label,onClick:h},a.a.createElement(U,{key:n.label,selectedItem:null===u||void 0===u?void 0:u.id,portfolio:n,showContent:e}))}))))},Z=function(n){n.stopPropagation()},$=function(n){var t=n.close,e=n.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(q,{onClick:t},a.a.createElement(K,null),a.a.createElement(Q,null)),a.a.createElement(A,{onClick:Z},e,a.a.createElement(X,{className:"test"})))};function nn(){var n=Object(l.a)(["\n  height: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  a {\n    font-size: 1.6rem;\n  }\n  h3 {\n    margin: 0;\n    font-size: 1.6rem;\n  }\n  span {\n    text-align: center;\n  }\n  span a {\n    display: inline-block;\n    transition: 0.4s;\n  }\n  & a,\n  a:visited {\n    color: inherit;\n  }\n  span:hover a {\n    box-shadow: 0px 11px 20px -8px grey;\n    transform: translateY(-3px);\n    font-size: calc(100%+1px);\n  }\n"]);return nn=function(){return n},n}function tn(){var n=Object(l.a)(["\n  background-position: center;\n  transform: rotateY(180deg);\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n"]);return tn=function(){return n},n}function en(){var n=Object(l.a)(["\n  h1 {\n    text-align: left;\n  }\n  overflow: hidden;\n  justify-content: space-between;\n  display: flex;\n  background-position: top left;\n  background-color: white;\n  z-index: 2;\n  padding: 2vw;\n  box-sizing: border-box;\n"]);return en=function(){return n},n}function rn(){var n=Object(l.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  backface-visibility: hidden;\n  background-size: cover;\n  border-radius: 10px;\n"]);return rn=function(){return n},n}function an(){var n=Object(l.a)(["\n  background-color: transparent;\n\n  perspective: 1000px;\n  margin: 0 auto;\n  padding: 0;\n  overflow: visible;\n  box-shadow: none;\n  &:hover {\n    transform: scale(1);\n    box-shadow: none;\n  }\n  &:hover "," {\n    transform: rotateY(180deg);\n  }\n"]);return an=function(){return n},n}function on(){var n=Object(l.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  border-radius: 10px;\n  box-shadow: 0px 9px 17px -6px rgba(0, 0, 0, 0.7);\n"]);return on=function(){return n},n}var cn=u.b.div(on()),ln=Object(u.b)(F)(an(),cn),un=u.b.div(rn()),sn=Object(u.b)(un)(en()),pn=Object(u.b)(un)(tn()),dn=u.b.div(nn()),fn=function(n){var t=n.page;return a.a.createElement(ln,null,a.a.createElement(cn,null,a.a.createElement(sn,null,a.a.createElement("h1",null,t.name),a.a.createElement("img",{src:"https://portfoliorufat.herokuapp.com//".concat(t.image),alt:""})),a.a.createElement(pn,null,a.a.createElement(dn,{dangerouslySetInnerHTML:{__html:t.text}}))))},mn=function(n){var t=n.page;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,t.name),a.a.createElement("img",{src:"https://portfoliorufat.herokuapp.com/".concat(t.image),alt:""}))};var hn=function(){var n=Object(r.useState)(""),t=Object(c.a)(n,2),e=t[0],o=t[1],i=Object(r.useState)(),l=Object(c.a)(i,2),u=l[0],s=l[1],p=Object(r.useState)(),d=Object(c.a)(p,2),f=d[0],m=d[1];Object(r.useEffect)((function(){fetch("https://portfoliorufat.herokuapp.com/api/pages",{mode:"no-cors"}).then((function(n){return n.json()})).then((function(n){return m(n)})).catch((function(n){return console.log(n)})),null===u||void 0===u||u.scrollIntoView()}),[u]);var h=function(n){n.stopPropagation(),n.preventDefault(),o(n.target.closest(".page").id),s(n.target.closest(".page")),n.target.closest(".page").classList.add("open")},b=function(n){n.stopPropagation(),o(""),null===u||void 0===u||u.classList.remove("open"),s(void 0)};return a.a.createElement(_,null,a.a.createElement(I,null),f&&f.map((function(n){return a.a.createElement(a.a.Fragment,{key:n.name},"Contact"!==n.name?a.a.createElement(F,{key:n.name,className:"page",id:n.name,onClick:h},e===n.name?a.a.createElement($,{close:b},function(n){return{About:a.a.createElement(R,{page:n}),Portfolio:a.a.createElement(W,null),Contact:a.a.createElement(fn,{page:n})}[n.name]}(n)):a.a.createElement(mn,{page:n})):a.a.createElement(fn,{page:n}))})))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(hn,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8e7c40ba.chunk.js.map
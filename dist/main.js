(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik&display=swap);"]),o.push([e.id,"body {\n    font-family: 'Rubik';\n    margin: 0;\n    padding: 0;\n}\nheader {\n    background-color: black;\n    color: white;\n    text-align: center;\n}\nh1 {\n    font-size: 10vw;\n    margin: 0;\n}\nbutton {\n    border-style: none;\n    font-size: 2vw;\n    padding: 1vw 2vw;\n    margin: 0vw 2vw;\n    border-top-left-radius: 10%;\n    border-top-right-radius: 10%;\n}\nbutton:hover {\n    background-color: yellow;\n}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var u=e[c],s=r.base?u[0]+r.base:u[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var p=n(l),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==p?(t[p].references++,t[p].updater(f)):t.push({identifier:l,updater:o(f,r),references:1}),i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);t[c].references--}for(var u=r(e,o),s=0;s<a.length;s++){var d=n(a[s]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=u}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r=n.css,o=n.media,a=n.sourceMap;o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=()=>{const e=document.createElement("div");e.id="home-content",navDiv.appendChild(e)};var t=n(379),r=n.n(t),o=n(795),a=n.n(o),i=n(569),c=n.n(i),u=n(565),s=n.n(u),d=n(216),l=n.n(d),p=n(589),f=n.n(p),m=n(426),v={};v.styleTagTransform=f(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),r()(m.Z,v),m.Z&&m.Z.locals&&m.Z.locals,(()=>{const e=document.getElementById("content"),t=document.createElement("header");e.appendChild(t);const n=document.createElement("h1");n.textContent="Inedible Eats",t.appendChild(n);const r=document.createElement("nav");t.appendChild(r);const o=document.createElement("button");o.setAttribute="button",o.id="home-button",o.textContent="Home",o.className="active",r.appendChild(o);const a=document.createElement("button");a.setAttribute="button",a.id="menu-button",a.textContent="Menu",r.appendChild(a);const i=document.createElement("button");i.setAttribute="button",i.id="contact-button",i.textContent="Contact",r.appendChild(i)})(),e(),buttonHome.addEventListener("click",e()),buttonMenu.addEventListener("click",void 0),buttonContact.addEventListener("click",void 0)})()})();
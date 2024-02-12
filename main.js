(()=>{"use strict";var e={336:(e,t,n)=>{n.d(t,{c:()=>f});var o=n(500),r=n.n(o),a=n(312),i=n.n(a),s=n(536),c=n.n(s),u=new URL(n(768),n.b),l=new URL(n(984),n.b),d=i()(r()),p=c()(u),m=c()(l);d.push([e.id,`@font-face {\n    font-family: 'athletic';\n    src: url(${p});\n}\n\n.btns{\n    display: flex;\n    justify-content: space-around;\n}\nbody {\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${m});\n}\n\n\nbutton {\n  background-color: #FFFFFF;\n  border: 1px solid rgb(209,213,219);\n  border-radius: .5rem;\n  box-sizing: border-box;\n  color: #111827;\n  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\n  font-size: .875rem;\n  font-weight: 600;\n  line-height: 1.25rem;\n  padding: .75rem 1rem;\n  text-align: center;\n  text-decoration: none #D1D5DB solid;\n  text-decoration-thickness: auto;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n}\n\nbutton:hover {\n  background-color: rgb(249,250,251);\n}\n\nbutton:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\nbutton:focus-visible {\n  box-shadow: none;\n}\n\n.menu-heading{\n    font-size: xx-large;\n    font-family: 'athletic';\n\n}\nh2 {\n    font-family: 'athletic';\n}\n\n`,""]);const f=d},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},536:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=o.base?c[0]+o.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=o(e,r),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},176:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},768:(e,t,n)=>{e.exports=n.p+"e682522d63f1e1553d35.TTF"},984:(e,t,n)=>{e.exports=n.p+"422a5955535b9fd6895a.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function e(){const e=document.createElement("div"),t=document.createElement("img");t.src="/Users/dracuusta/restaurantsPage/src/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg",t.setAttribute("id","headerImg"),t.style.height="400px",t.style.width="1300px",t.style.padding="80px";const n=document.createElement("heading");n.innerText="Welcome fellow foodies! Bonjour",n.style.cssText="padding-bottom: 80px;\n    font-size: 20px;",n.style.fontWeight="bold";const o=document.createElement("div");return o.style.marginTop="20px",o.innerText=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum soluta explicabo nulla molestias officiis quasi, expedita cum omnis, repellat, tenetur harum aspernatur deleniti aliquam possimus saepe? Quisquam explicabo voluptatum eveniet.",e.append(t,n,o),e}var t=n(596),o=n.n(t),r=n(520),a=n.n(r),i=n(176),s=n.n(i),c=n(120),u=n.n(c),l=n(808),d=n.n(l),p=n(936),m=n.n(p),f=n(336),h={};h.styleTagTransform=m(),h.setAttributes=u(),h.insert=s().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),o()(f.c,h),f.c&&f.c.locals&&f.c.locals;const v=document.getElementById("container");function g(t){const n=document.getElementById("container");t.target&&"Menu"===t.target.id&&(n.innerHTML="",n.append(function(){const e=document.createElement("div"),t=document.createElement("div");t.classList.add("menu-heading"),t.innerHTML="<ul><li>Coffee 20Rs</li><li>Tea 15Rs</li><li>Water 10Rs</liv></ul>";const n=document.createElement("div");n.classList.add("menu-heading"),n.innerHTML="<ul><li>Toast and Jam 80Rs</li><li>Frest Fruit 40Rs</li></ul>";const o=document.createElement("div");return o.classList.add("menu-heading"),o.innerHTML="<ul><li>Rajma Chawal 100Rs</li><li>Curry Chawal 100Rs</li></ul>",e.append(t,n,o),e}())),"Home"===t.target.id&&(n.innerHTML="",n.append(e())),"Contact"===t.target.id&&(n.innerHTML="",n.append(function(){const e=document.createElement("div"),t=document.createElement("h2");t.innerText="Contact Us";const n=document.createElement("p");n.innerText="At Gourmet Haven, your dining experience and satisfaction are our top priorities. Whether you have a question about our menu, wish to make a reservation, or want to plan a special event, our team is here to assist you. Below you'll find all the ways you can get in touch with us. We look forward to hearing from you!";const o=document.createElement("h2");o.innerText="Reservation Enquiries";const r=document.createElement("p");r.innerText="For table reservations, please use our online booking system or call us directly at";const a=document.createElement("h2");a.innerText="Visit Us";const i=document.createElement("p");return i.innerText="Stay connected with Gourmet Haven and be the first to know about our latest dishes, special events, and exclusive offers:",e.append(t,n,o,r,a,i),e}())),"About"===t.target.id&&(n.innerHTML="",n.append(function(){const e=document.createElement("div"),t=document.createElement("h2");t.innerText="OUR STORY";const n=document.createElement("p");n.innerText="Gourmet Haven offers a dining ambiance that is both elegant and welcoming. Designed with your comfort in mind, our dining room invites you to relax and enjoy the pleasures of gourmet cuisine in a warm, inviting atmosphere. Whether you're celebrating a special occasion or simply treating yourself to an exceptional meal, our restaurant is the perfect backdrop for any event.";const o=document.createElement("h2");o.innerText="Sustainability Efforts";const r=document.createElement("p");r.innerText="We are dedicated to not just serving delicious food but also to making a positive impact on the environment. Our sustainability efforts include reducing waste, recycling, and composting, as well as supporting local farmers and producers. Dining at Gourmet Haven means supporting a business that cares about the planet";const a=document.createElement("h2");a.innerText="Join Us";const i=document.createElement("p");return i.innerText="At Gourmet Haven, every meal is a celebration of life's finest moments. We invite you to join us for an unforgettable dining experience where the art of food and the joy of companionship come together in perfect harmony. Book your table today and discover the magic of Gourmet Haven where every visit is a journey to remember.For reservations, private events, and inquiries, please contact us at [Contact Information]. Follow us on [Social Media Handles] to stay updated on our latest offerings and events. We look forward to welcoming you to Gourmet Haven.",e.append(t,n,o,r,a,i),e}()))}v.innerHTML="",v.append(e()),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",g)}))})()})();
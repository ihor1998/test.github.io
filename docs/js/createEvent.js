(()=>{var e={82:()=>{var e,t=JSON.parse(window.localStorage.getItem("users")),n=document.getElementById("select"),r=document.getElementById("select-body");n.addEventListener("click",(function(e){var t,n,a=e.target;a.closest(".form__select-custom_cancel")?(t=a.parentElement,n='\n        <li class="form__select-custom__body_item">\n            '.concat(t.textContent,"\n        </li>"),r.insertAdjacentHTML("beforeend",n),a.parentElement.remove()):r.classList.toggle("active")})),r.addEventListener("click",(function(e){var t=e.target;if(t.closest(".form__select-custom__body_item")){var a=e.target.textContent;t.innerHTML="";var o='\n        <div class="form__select-custom_item">\n            <span data-name="'.concat(a,'">').concat(a,'</span>\n            <i class="fa fa-times form__select-custom_cancel"></i>\n        </div>\n    ');n.insertAdjacentHTML("beforeend",o),r.classList.remove("active")}})),e=t.slice(2).map((function(e){return'\n        <li class="form__select-custom__body_item">\n            '.concat(e,"\n        </li>\n    ")})).join(""),r.innerHTML=e},150:()=>{window.localStorage.setItem("users",JSON.stringify(["All","Alex","Jacob","Emma","Jayden","Olivia"]))},42:()=>{function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=document.forms.form,r=n.elements.input,a=n.elements.day,o=n.elements.time,c=JSON.parse(window.localStorage.getItem("events"))||[];n.addEventListener("submit",(function(t){var i,s;t.preventDefault(),0===e(document.querySelectorAll("[data-name]")).length&&(i=document.getElementById("select"),s=document.querySelector(".form__select-custom__error"),i.style.backgroundColor="#ff7473",s.classList.add("error"),i.addEventListener("click",(function(){i.style.backgroundColor="#f5f5f5",s.classList.remove("error")}))),""===r.value&&(r.style.backgroundColor="#ff7473",r.setAttribute("placeholder","Enter event name!"),r.addEventListener("focus",(function(){r.style.backgroundColor="#f5f5f5",r.setAttribute("placeholder","Event name:")}))),function(){var t=e(document.querySelectorAll("[data-name]"));if(""!==r.value&&0!==t.length){var i=t.map((function(e){return e.getAttribute("data-name").trim()})),s={name:r.value,day:a.value,time:o.value,participants:i};void 0===c.find((function(e){return s.day===e.day&&s.time===e.time}))?(c.push(s),window.localStorage.setItem("events",JSON.stringify(c)),document.location.assign("./index.html")):function(e,t){var r='\n    <div id="message">\n        Sorry, '.concat(e," and ").concat(t,' is busy already :(\n        <i class="fa fa-times" id="message__cancel"></i>\n    </div>\n  ');n.insertAdjacentHTML("beforeend",r);var a=document.getElementById("message__cancel");a.addEventListener("click",(function(){a.parentElement.remove()}))}(s.day,s.time)}}()}))}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(150),n(42),n(82)})()})();
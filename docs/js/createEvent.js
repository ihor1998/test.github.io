(()=>{var e={82:()=>{var e,t=JSON.parse(window.localStorage.getItem("users")),n=document.getElementById("select"),r=document.getElementById("select-body");n.addEventListener("click",(function(e){var t,n,o=e.target;o.closest(".form__select-custom_cancel")?(t=o.parentElement,n='\n        <li class="form__select-custom__body_item">\n            '.concat(t.textContent,"\n        </li>"),r.insertAdjacentHTML("beforeend",n),o.parentElement.remove()):r.classList.toggle("active")})),r.addEventListener("click",(function(e){var t=e.target;if(t.closest(".form__select-custom__body_item")){var o=e.target.textContent;t.innerHTML="";var a='\n        <div class="form__select-custom_item">\n            <span data-name="'.concat(o,'">').concat(o,'</span>\n            <i class="fa fa-times form__select-custom_cancel"></i>\n        </div>\n    ');n.insertAdjacentHTML("beforeend",a),r.classList.remove("active")}})),e=t.slice(2).map((function(e){return'\n        <li class="form__select-custom__body_item">\n            '.concat(e,"\n        </li>\n    ")})).join(""),r.innerHTML=e},42:()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var t=document.forms.form,n=t.elements.input,r=t.elements.day,o=t.elements.time,a=JSON.parse(window.localStorage.getItem("events"))||[];t.addEventListener("submit",(function(t){t.preventDefault();var c,i=(c=document.querySelectorAll("[data-name]"),function(t){if(Array.isArray(t))return e(t)}(c)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(c)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(c)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){return e.getAttribute("data-name").trim()})),s={name:n.value,day:r.value,time:o.value,participants:i};a.push(s),window.localStorage.setItem("events",JSON.stringify(a)),document.location.assign("./index.html")}))}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(42),n(82)})()})();
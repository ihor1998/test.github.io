/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/create-event.js":
/*!********************************!*\
  !*** ./src/js/create-event.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data */ \"./src/js/scripts/data.js\");\n/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_data__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/form */ \"./src/js/scripts/form.js\");\n/* harmony import */ var _scripts_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_form__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_custom_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/custom-select */ \"./src/js/scripts/custom-select.js\");\n/* harmony import */ var _scripts_custom_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_custom_select__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://testtask.github.io/./src/js/create-event.js?");

/***/ }),

/***/ "./src/js/scripts/custom-select.js":
/*!*****************************************!*\
  !*** ./src/js/scripts/custom-select.js ***!
  \*****************************************/
/***/ (() => {

eval("var users = JSON.parse(window.localStorage.getItem('users'));\nvar select = document.getElementById('select');\nvar selectBody = document.getElementById('select-body');\nselect.addEventListener('click', function (e) {\n  var target = e.target;\n\n  if (target.closest('.form__select-custom_cancel')) {\n    addListItem(target.parentElement);\n    target.parentElement.remove();\n  } else {\n    selectBody.classList.toggle('active');\n  }\n});\nselectBody.addEventListener('click', addItem);\n\nfunction addItem(e) {\n  var target = e.target;\n  if (!target.closest('.form__select-custom__body_item')) return;\n  var item = e.target.textContent;\n  target.innerHTML = '';\n  var html = \"\\n        <div class=\\\"form__select-custom_item\\\">\\n            <span data-name=\\\"\".concat(item, \"\\\">\").concat(item, \"</span>\\n            <i class=\\\"fa fa-times form__select-custom_cancel\\\"></i>\\n        </div>\\n    \");\n  select.insertAdjacentHTML('beforeend', html);\n  selectBody.classList.remove('active');\n}\n\nfunction addList() {\n  var html = users.slice(2).map(function (elem) {\n    return \"\\n        <li class=\\\"form__select-custom__body_item\\\">\\n            \".concat(elem, \"\\n        </li>\\n    \");\n  }).join('');\n  selectBody.innerHTML = html;\n}\n\nfunction addListItem(elem) {\n  var html = \"\\n        <li class=\\\"form__select-custom__body_item\\\">\\n            \".concat(elem.textContent, \"\\n        </li>\");\n  selectBody.insertAdjacentHTML('beforeend', html);\n}\n\naddList();\n\n//# sourceURL=webpack://testtask.github.io/./src/js/scripts/custom-select.js?");

/***/ }),

/***/ "./src/js/scripts/data.js":
/*!********************************!*\
  !*** ./src/js/scripts/data.js ***!
  \********************************/
/***/ (() => {

eval("var userArray = ['All', 'Alex', 'Jacob', 'Emma', 'Jayden', 'Olivia'];\nwindow.localStorage.setItem('users', JSON.stringify(userArray));\n\n//# sourceURL=webpack://testtask.github.io/./src/js/scripts/data.js?");

/***/ }),

/***/ "./src/js/scripts/form.js":
/*!********************************!*\
  !*** ./src/js/scripts/form.js ***!
  \********************************/
/***/ (() => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar form = document.forms.form;\nvar input = form.elements.input;\nvar day = form.elements.day;\nvar time = form.elements.time;\nvar events = JSON.parse(window.localStorage.getItem('events')) || [];\n\nfunction validationInput() {\n  input.style.backgroundColor = '#ff7473';\n  input.setAttribute('placeholder', 'Enter event name!');\n  input.addEventListener('focus', function () {\n    input.style.backgroundColor = '#f5f5f5';\n    input.setAttribute('placeholder', 'Event name:');\n  });\n}\n\nfunction validationCustomSelect() {\n  var select = document.getElementById('select');\n  var err = document.querySelector('.form__select-custom__error');\n  select.style.backgroundColor = '#ff7473';\n  err.classList.add('error');\n  select.addEventListener('click', function () {\n    select.style.backgroundColor = '#f5f5f5';\n    err.classList.remove('error');\n  });\n}\n\nfunction createEvent() {\n  var items = _toConsumableArray(document.querySelectorAll('[data-name]'));\n\n  if (input.value === '' || items.length === 0) {\n    return;\n  }\n\n  var participants = items.map(function (elem) {\n    return elem.getAttribute('data-name').trim();\n  });\n  var obj = {\n    name: input.value,\n    day: day.value,\n    time: time.value,\n    participants: participants\n  };\n  var busyCell = events.find(function (elem) {\n    return obj.day === elem.day && obj.time === elem.time;\n  });\n\n  if (busyCell !== undefined) {\n    showMessage(obj.day, obj.time);\n    return;\n  }\n\n  events.push(obj);\n  window.localStorage.setItem('events', JSON.stringify(events));\n  document.location.assign('./index.html');\n}\n\nfunction validationForm(e) {\n  e.preventDefault();\n\n  var items = _toConsumableArray(document.querySelectorAll('[data-name]'));\n\n  if (items.length === 0) {\n    validationCustomSelect();\n  }\n\n  if (input.value === '') {\n    validationInput();\n  }\n\n  createEvent();\n}\n\nfunction showMessage(day, time) {\n  var html = \"\\n    <div id=\\\"message\\\">\\n        Sorry, \".concat(day, \" and \").concat(time, \" is busy already :(\\n        <i class=\\\"fa fa-times\\\" id=\\\"message__cancel\\\"></i>\\n    </div>\\n  \");\n  form.insertAdjacentHTML('beforeend', html);\n  var btn = document.getElementById('message__cancel');\n  btn.addEventListener('click', function () {\n    btn.parentElement.remove();\n  });\n}\n\nform.addEventListener('submit', validationForm);\n\n//# sourceURL=webpack://testtask.github.io/./src/js/scripts/form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/create-event.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
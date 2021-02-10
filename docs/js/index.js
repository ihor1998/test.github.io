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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/data */ \"./src/js/scripts/data.js\");\n/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_data__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/select */ \"./src/js/scripts/select.js\");\n/* harmony import */ var _scripts_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_select__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_create_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/create-element */ \"./src/js/scripts/create-element.js\");\n/* harmony import */ var _scripts_create_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_create_element__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _scripts_delete_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/delete-event */ \"./src/js/scripts/delete-event.js\");\n/* harmony import */ var _scripts_delete_event__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_delete_event__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n//# sourceURL=webpack://testtask.github.io/./src/js/index.js?");

/***/ }),

/***/ "./src/js/scripts/create-element.js":
/*!******************************************!*\
  !*** ./src/js/scripts/create-element.js ***!
  \******************************************/
/***/ (() => {

eval("var events = JSON.parse(window.localStorage.getItem('events')) || [];\nvar cells = Array.from(document.querySelectorAll('[data-day]'));\n\nfunction createElement() {\n  events.forEach(function (elem) {\n    var cell = cells.find(function (el) {\n      return el.getAttribute('data-day') === elem.day && el.getAttribute('data-time') === elem.time;\n    });\n    cell.style.padding = 0;\n    cell.innerHTML = \"\\n        <div class=\\\"table__event\\\">\\n            <span>\".concat(elem.name, \"</span>\\n            <i class=\\\"fa fa-times table__btn\\\"></i>\\n        </div>\\n    \");\n  });\n}\n\ncreateElement();\n\n//# sourceURL=webpack://testtask.github.io/./src/js/scripts/create-element.js?");

/***/ }),

/***/ "./src/js/scripts/data.js":
/*!********************************!*\
  !*** ./src/js/scripts/data.js ***!
  \********************************/
/***/ (() => {

eval("var userArray = ['All', 'Alex', 'Jacob', 'Emma', 'Jayden', 'Olivia'];\nwindow.localStorage.setItem('users', JSON.stringify(userArray));\n\n//# sourceURL=webpack://testtask.github.io/./src/js/scripts/data.js?");

/***/ }),

/***/ "./src/js/scripts/delete-event.js":
/*!****************************************!*\
  !*** ./src/js/scripts/delete-event.js ***!
  \****************************************/
/***/ (() => {

eval("var events = JSON.parse(window.localStorage.getItem('events'));\nvar table = document.getElementById('table');\nvar tBodies = table.querySelector('tbody');\nvar _document = document,\n    body = _document.body;\ntBodies.addEventListener('click', function (e) {\n  var event = e.target;\n  if (!event.closest('.table__btn')) return;\n  showMessage(event);\n});\n\nfunction showMessage(event) {\n  var elem = event.parentElement;\n  var title = elem.textContent.trim();\n  var html = \"\\n        <section class=\\\"modal\\\">\\n            <div class=\\\"modal__container\\\">\\n                <p class=\\\"modal__box\\\">\\n                    Do you really\\n                    want to delete\\n                    event \\\"\".concat(title, \"\\\"?\\n                </p>\\n                <div class=\\\"modal__box\\\">\\n                    <div class=\\\"modal__btn\\\" data=\\\"No\\\">\\n                        No\\n                    </div>\\n                    <div class=\\\"modal__btn\\\" data=\\\"Yes\\\">\\n                        Yes\\n                    </div>\\n                </div>\\n            </div>\\n        </section>\\n    \\n    \");\n  body.insertAdjacentHTML('beforeend', html);\n  var modal = document.querySelector('.modal');\n  modal.addEventListener('click', function (e) {\n    var target = e.target;\n    var newStorage = modStorage(elem);\n\n    if (target.getAttribute('data') === 'Yes') {\n      modal.remove();\n      localStorage.clear();\n      localStorage.setItem('events', JSON.stringify(newStorage));\n      elem.remove();\n    } else if (target.getAttribute('data') === 'No') {\n      modal.remove();\n    }\n  });\n}\n\nfunction modStorage(elem) {\n  var cell = elem.parentElement;\n  return events.filter(function (el) {\n    return el.day !== cell.getAttribute('data-day') || el.time !== cell.getAttribute('data-time');\n  });\n}\n\n//# sourceURL=webpack://testtask.github.io/./src/js/scripts/delete-event.js?");

/***/ }),

/***/ "./src/js/scripts/select.js":
/*!**********************************!*\
  !*** ./src/js/scripts/select.js ***!
  \**********************************/
/***/ (() => {

eval("var users = JSON.parse(window.localStorage.getItem('users'));\nvar select = document.querySelector('.header__select');\n\nfunction newOption() {\n  var html = users.map(function (elem) {\n    return \"\\n        <option class=\\\"header__option\\\" value=\".concat(elem, \">\\n            \").concat(elem, \"\\n        </option>\\n    \");\n  }).join('');\n  select.innerHTML = html;\n}\n\nnewOption();\n\n//# sourceURL=webpack://testtask.github.io/./src/js/scripts/select.js?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://testtask.github.io/./src/style/style.scss?");

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
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
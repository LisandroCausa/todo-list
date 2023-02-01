/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nfunction Project(name, todos) {\n\tconst addTodo = (newTodo) => {\n\t\tlet i = 0;\n\t\twhile((i < todos.length) && (getDaysDifference(todos[i].dueDate, newTodo.dueDate) < 0))\n\t\t{\n\t\t\ti++;\n\t\t}\n\t\ttodos.splice(i, 0, newTodo);\n\t};\n\tconst removeTodo = (todo) => {\n\t\tconst index = todos.indexOf(todo);\n\t\tif(index > -1)\n\t\t{\n\t\t\ttodos.splice(index, 1);\n\t\t}\n\t};\n\treturn {\n\t\tname,\n\t\ttodos,\n\t\taddTodo,\n\t\tremoveTodo\n\t};\n}\n\nfunction getDaysDifference(dateA, dateB) {\n\tconst millDiff = dateA - dateB;\n\treturn Math.ceil(millDiff / (1000 * 60 * 60 * 24));\n}\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectsModule.js":
/*!*******************************!*\
  !*** ./src/projectsModule.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storageManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageManager */ \"./src/storageManager.js\");\n\n\nconst Projects = (() => {\n\tconst array = _storageManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSavedProjects(); // Uncaught ReferenceError: Cannot access '__WEBPACK_DEFAULT_EXPORT__' before initialization\n\tlet currentProject = array[0];\n\tconst push = (project) => {\n\t\tarray.push(project);\n\t};\n\treturn {\n\t\tarray,\n\t\tcurrentProject,\n\t\tpush\n\t};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n//# sourceURL=webpack://todo-list/./src/projectsModule.js?");

/***/ }),

/***/ "./src/storageManager.js":
/*!*******************************!*\
  !*** ./src/storageManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst storageManager = (() => {\n\tconst storage = window.localStorage;\n\n\tconst getSavedProjects = () => {\n\t\tconst projects = [];\n\t\tlet i = 0;\n\t\tlet item = storage.getItem(\"pro\" + i);\n\t\twhile (item !== null)\n\t\t{\n\t\t\titem = JSON.parse(item);\n\t\t\tconst newProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(item.name, item.todos);\n\t\t\t// (fix) Convert the dueDate string back to a Date object\n\t\t\tnewProject.todos.forEach(todo => {\n\t\t\t\ttodo.dueDate = new Date(todo.dueDate);\n\t\t\t});\n\t\t\tprojects.push(newProject);\n\t\t\ti++;\n\t\t\titem = storage.getItem(\"pro\" + i);\n\t\t}\n\t\treturn projects;\n\t};\n\n\tconst saveProject = (project, index) => {\n\t\tconst keyName = \"pro\" + index;\n\t\tstorage.setItem(keyName, JSON.stringify(project));\n\t};\n\n\treturn {\n\t\tgetSavedProjects,\n\t\tsaveProject\n\t};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageManager);\n\n//# sourceURL=webpack://todo-list/./src/storageManager.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/projectsModule.js");
/******/ 	
/******/ })()
;
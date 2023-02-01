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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n\\t--low-prio-color: yellow;\\n\\t--med-prio-color: orange;\\n\\t--high-prio-color: red;\\n\\t--completed-color: rgb(0, 220, 0);\\n}\\n\\nbody {\\n\\tmargin: 0;\\n\\theight: 100vh;\\n\\tdisplay: grid;\\n\\tgrid-template-columns: 1fr 3fr;\\n}\\n\\n#sidebar {\\n\\tbackground-color: rgb(220, 220, 220);\\n\\tborder-right: 1px solid black;\\n\\tpadding: 0 12px;\\n}\\n\\n#projects-container {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tgap: 6px;\\n\\tborder-top: 1px solid black;\\n\\tpadding-top: 12px;\\n\\tmargin-top: -6px;\\n}\\n\\n.project-sidebar-btn {\\n\\tpadding: 12px;\\n\\tfont-size: 1.25rem;\\n\\tborder: 2px solid black;\\n\\tborder-radius: 12px;\\n\\tbackground-color: rgb(190, 190, 190);\\n\\ttransition: 0.3s;\\n}\\n\\n.project-sidebar-btn:hover {\\n\\tbackground-color: rgb(170, 170, 170);\\n}\\n\\n.project-sidebar-btn:active {\\n\\tbackground-color: rgb(130, 130, 130);\\n}\\n\\n.project-sidebar-btn.opened-project {\\n\\tfont-weight: bold;\\n\\tbackground-color: rgb(225, 225, 225);\\n\\tborder-color: rgb(255, 60, 60);\\n}\\n\\n.todo {\\n\\tborder: 2px solid black;\\n\\tborder-radius: 4px;\\n\\tdisplay: flex;\\n\\tjustify-content: flex-end;\\n\\talign-items: center;\\n\\tpadding: 4px 12px;\\n\\ttransition: 0.25s;\\n}\\n\\n.todo > h3 {\\n\\tmargin-right: auto;\\n\\tmargin-top: 0;\\n\\tmargin-bottom: 0;\\n\\tfont-size: 2rem;\\n}\\n.todo > img {\\n\\tvertical-align: middle;\\n}\\n\\n.todo-description {\\n\\tdisplay: none;\\n\\tfont-size: 1.2rem;\\n}\\n\\n.todo.opened-todo > .todo-description {\\n\\tdisplay: block;\\n}\\n\\n.todo.opened-todo {\\n\\tdisplay: block;\\n}\\n\\n.todo.opened-todo > h3 {\\n\\tmargin-top: 6px;\\n}\\n\\n.todo.completed {\\n\\tbackground-color: var(--completed-color);\\n}\\n\\n.todo.completed.opened-todo {\\n\\tbackground-color: rgb(0, 170, 0);\\n}\\n\\n.todo > .due-date {\\n\\tfont-size: 1.8rem;\\n\\tfont-weight: bold;\\n\\tmargin-right: 20px;\\n}\\n\\n.todo > .checkbox-button {\\n\\twidth: 50px;\\n\\tmargin-right: 10px;\\n}\\n\\n.todo > .delete-button {\\n\\twidth: 40px;\\n}\\n\\n.low-prio {\\n\\tbackground-color: var(--low-prio-color);\\n}\\n\\n.low-prio.opened-todo {\\n\\tbackground-color: rgb(223, 223, 0);\\n}\\n\\n.med-prio {\\n\\tbackground-color: var(--med-prio-color);\\n}\\n\\n.med-prio.opened-todo {\\n\\tbackground-color: rgb(218, 141, 0);\\n}\\n\\n.high-prio {\\n\\tbackground-color: var(--high-prio-color);\\n}\\n\\n.high-prio.opened-todo {\\n\\tbackground-color: rgb(223, 0, 0);\\n}\\n\\n#project-section {\\n\\tpadding: 24px;\\n}\\n\\n#project-header-section {\\n\\tpadding: 0 12px;\\n\\tdisplay: flex;\\n\\tjustify-content: space-between;\\n\\talign-items: center;\\n}\\n\\n#project-header-section > h1 {\\n\\tmargin: 0;\\n}\\n\\n#project-header-section > button {\\n\\theight: fit-content;\\n\\tfont-size: 1.7rem;\\n\\tborder-radius: 20px;\\n\\tbackground-color: rgb(190, 255, 255);\\n\\ttransition: 0.3s;\\n\\tpadding: 14px;\\n}\\n\\n#project-header-section > button:hover {\\n\\tbackground-color: rgb(150, 252, 252);\\n}\\n\\n#project-header-section > button:active {\\n\\tbackground-color: rgb(60, 252, 252);\\n}\\n\\n.todos-container {\\n\\tmargin-top: 20px;\\n\\tpadding-top: 20px;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tgap: 8px;\\n\\tborder-top: 1px solid gray;\\n}\\n\\n.project-title {\\n\\tfont-size: 2.25rem;\\n}\\n\\n#overlay-background {\\n\\tposition: fixed;\\n\\tbackground-color: rgba(34, 34, 34, 0.671);\\n\\twidth: 100%;\\n\\theight: 100%;\\n}\\n\\n.new-todo-window {\\n\\tpadding: 12px;\\n\\tbackground-color: rebeccapurple;\\n\\tmargin: 25vh auto;\\n\\twidth: fit-content;\\n\\tborder: 2px solid black;\\n\\tborder-radius: 12px;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tgap: 15px;\\n}\\n\\n.new-todo-window button {\\n\\tfont-size: 1.5rem;\\n}\\n\\n.form-field-section {\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\tgap: 2px;\\n}\\n\\n.form-field-section > label {\\n\\tfont-size: 1.2rem;\\n\\tcolor: rgb(179, 179, 179);\\n}\\n\\n.form-field-section > input {\\n\\tfont-size: 1.7rem;\\n}\\n\\n.form-field-section > input[type=date] {\\n\\tfont-size: 1.4rem;\\n}\\n\\n.form-field-section > textarea {\\n\\tfont-size: 1rem;\\n\\theight: 12vh;\\n\\tresize: none;\\n}\\n\\n#priority-buttons-container {\\n\\tdisplay: flex;\\n}\\n\\n#priority-buttons-container > button {\\n\\tflex: 1;\\n}\\n\\n#priority-buttons-container > :nth-child(1) {\\n\\tbackground-color: var(--low-prio-color);\\n}\\n\\n#priority-buttons-container > :nth-child(2) {\\n\\tbackground-color: var(--med-prio-color);\\n}\\n\\n#priority-buttons-container > :nth-child(3) {\\n\\tbackground-color: var(--high-prio-color);\\n}\\n\\n.priority-btn {\\n\\ttransition: 0.2s;\\n}\\n\\n.priority-btn.selected-priority {\\n\\tborder-color: white;\\n}\\n\\n#ok-button {\\n\\twidth: fit-content;\\n\\tpadding: 6px 16px;\\n\\tmargin: 0 auto;\\n\\tmargin-top: 14px;\\n\\tbackground-color: rgb(233, 233, 233);\\n\\tborder: 2px solid black;\\n\\tborder-radius: 14px;\\n\\ttransition: 0.6s;\\n}\\n\\n#ok-button:hover {\\n\\tbackground-color: rgb(175, 175, 175);\\n\\tborder-color: white;\\n}\\n\\n#ok-button:active {\\n\\tbackground-color: rgb(110, 110, 110);\\n\\tcolor: white;\\n\\tborder-style: dotted;\\n}\\n\\n#new-project-btn {\\n\\ttext-align: center;\\n\\tfont-weight: bold;\\n\\tbackground-color: rgb(200, 200, 200);\\n}\\n\\n#new-project-btn:hover {\\n\\tbackground-color: rgb(143, 173, 136);\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProject\": () => (/* binding */ renderProject),\n/* harmony export */   \"renderSidebar\": () => (/* binding */ renderSidebar)\n/* harmony export */ });\n/* harmony import */ var _img_checkbox_empty_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/checkbox-empty.svg */ \"./src/img/checkbox-empty.svg\");\n/* harmony import */ var _img_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/checkbox-checked.svg */ \"./src/img/checkbox-checked.svg\");\n/* harmony import */ var _img_trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash.svg */ \"./src/img/trash.svg\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _projectsModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectsModule */ \"./src/projectsModule.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _storageManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storageManager */ \"./src/storageManager.js\");\n\n\n\n\n\n\n\n\nfunction renderTodo(todo) {\n\tconst container = document.createElement(\"div\");\n\tconst title = document.createElement(\"h3\");\n\ttitle.textContent = todo.title;\n\tconst description = document.createElement(\"p\");\n\tdescription.textContent = todo.description;\n\tdescription.classList.add(\"todo-description\");\n\tconst dueDate = document.createElement(\"p\");\n\tconst dateFormatOptions = { day: \"numeric\", month: \"numeric\" };\n\tdueDate.textContent = todo.dueDate.toLocaleDateString(\"en-GB\", dateFormatOptions);\n\tdueDate.classList.add(\"due-date\");\n\tconst checkbox = document.createElement(\"img\");\n\tcheckbox.src = todo.completed ? _img_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_1__ : _img_checkbox_empty_svg__WEBPACK_IMPORTED_MODULE_0__;\n\tcheckbox.classList.add(\"checkbox-button\");\n\tcheckbox.addEventListener(\"click\", (event) => {\n\t\tevent.stopPropagation();\n\t\tcontainer.classList.toggle(\"completed\");\n\t\ttodo.completed = !todo.completed;\n\t\tif(container.classList.contains(\"completed\"))\n\t\t\tcheckbox.src = _img_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_1__;\n\t\telse\n\t\t\tcheckbox.src = _img_checkbox_empty_svg__WEBPACK_IMPORTED_MODULE_0__;\n\t\t_storageManager__WEBPACK_IMPORTED_MODULE_6__[\"default\"].saveProject(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject, _projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.indexOf(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject));\t\n\t});\n\t\n\tconst deleteButton = document.createElement(\"img\");\n\tdeleteButton.src = _img_trash_svg__WEBPACK_IMPORTED_MODULE_2__;\n\tdeleteButton.classList.add(\"delete-button\");\n\tcontainer.appendChild(title);\n\tcontainer.appendChild(dueDate);\n\tcontainer.appendChild(description);\n\tcontainer.appendChild(checkbox);\n\tcontainer.appendChild(deleteButton);\n\tcontainer.classList.add(\"todo\");\n\tif(todo.completed)\n\t{\n\t\tcontainer.classList.add(\"completed\");\n\t}\n\n\tif(todo.priority == 1)\n\t{\n\t\tcontainer.classList.add(\"low-prio\");\n\t}\n\telse if(todo.priority == 2)\n\t{\n\t\tcontainer.classList.add(\"med-prio\");\n\t}\n\telse\n\t{\n\t\tcontainer.classList.add(\"high-prio\");\n\t}\n\tcontainer.addEventListener(\"click\", () => {\n\t\tcontainer.classList.toggle(\"opened-todo\");\n\t});\n\treturn container;\n}\n\nfunction renderProject(project) {\n\tconst container = document.createElement(\"div\");\n\tcontainer.id = \"project-section\";\n\tconst headerSection = document.createElement(\"div\");\n\theaderSection.id = \"project-header-section\";\n\tconst projectTitle = document.createElement(\"h1\");\n\tprojectTitle.textContent = project.name;\n\tprojectTitle.classList.add(\"project-title\");\n\tconst newTodoButton = renderNewTodoButton();\n\theaderSection.appendChild(projectTitle);\n\theaderSection.appendChild(newTodoButton);\n\tcontainer.appendChild(headerSection);\n\t\n\tconst todosContainer = document.createElement(\"div\");\n\ttodosContainer.classList.add(\"todos-container\");\n\tproject.todos.forEach(element => {\n\t\tconst todoDOMElement = renderTodo(element);\n\t\ttodosContainer.appendChild(todoDOMElement);\n\t\tconst deleteButton = todoDOMElement.lastChild;\n\t\tdeleteButton.addEventListener(\"click\", () => {\n\t\t\tproject.removeTodo(element);\n\t\t\ttodoDOMElement.remove();\n\t\t\t_storageManager__WEBPACK_IMPORTED_MODULE_6__[\"default\"].saveProject(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject, _projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.indexOf(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject));\n\t\t});\n\t});\n\tcontainer.appendChild(todosContainer);\n\treturn container;\n}\n\nfunction renderSidebar() {\n\tconst container = document.createElement(\"div\");\n\tcontainer.id = \"sidebar\";\n\tconst projectHeader = document.createElement(\"h2\");\n\tprojectHeader.textContent = \"Projects\";\n\tcontainer.appendChild(projectHeader);\n\tcontainer.appendChild(renderSidebarProjectsContainer());\n\treturn container;\n}\n\nfunction renderSidebarProjectsContainer() {\n\tconst container = document.createElement(\"div\");\n\tcontainer.id = \"projects-container\";\n\t_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.forEach(project => {\n\t\tcontainer.appendChild(projectButton(project));\n\t});\n\tconst currentIndex = _projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.indexOf(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject);\n\tif(currentIndex > -1)\n\t{\n\t\tcontainer.children[currentIndex].classList.add(\"opened-project\");\n\t}\n\tcontainer.appendChild(renderNewProjectButton());\n\treturn container;\n}\n\nfunction projectButton(project) {\n\tconst container = document.createElement(\"div\");\n\tcontainer.textContent = project.name;\n\tcontainer.classList.add(\"project-sidebar-btn\");\n\tconst openedClassName = \"opened-project\";\n\tcontainer.addEventListener(\"click\", () => {\n\t\tif(container.classList.contains(openedClassName) == false)\n\t\t{\n\t\t\tremoveClassChildren(container.parentNode, openedClassName);\n\t\t\tcontainer.classList.add(openedClassName);\n\t\t\tdocument.body.removeChild(document.getElementById(\"project-section\"));\n\t\t\tdocument.body.appendChild(renderProject(project));\n\t\t\t_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject = project;\n\t\t}\n\t});\n\treturn container;\n}\n\nfunction removeClassChildren(parent, className) {\n\tconst children = parent.children;\n\tfor (const element of children)\n\t{\n\t\telement.classList.remove(className);\n\t}\n}\n\nfunction renderNewTodoButton() {\n\tconst btn = document.createElement(\"button\");\n\tbtn.textContent = \"new To-Do\";\n\tbtn.addEventListener(\"click\", () => {\n\t\tdocument.body.appendChild(renderNewTodoOverlay());\n\t});\n\treturn btn;\n}\n\nfunction renderNewTodoOverlay() {\n\tconst container = renderOverlayBackground();\n\tconst window = document.createElement(\"div\");\n\twindow.classList.add(\"new-todo-window\");\n\n\tconst sectionsClassName = \"form-field-section\";\n\n\tconst nameSection = document.createElement(\"div\");\n\tnameSection.classList.add(sectionsClassName);\n\tconst nameLabel = document.createElement(\"label\");\n\tnameLabel.htmlFor = \"name\";\n\tnameLabel.textContent = \"Name\";\n\tconst nameField = document.createElement(\"input\");\n\tnameField.id = \"name\";\n\tnameField.required = true;\n\tnameSection.appendChild(nameLabel);\n\tnameSection.appendChild(nameField);\n\n\tconst descriptionSection = document.createElement(\"div\");\n\tdescriptionSection.classList.add(sectionsClassName);\n\tconst descriptionLabel = document.createElement(\"label\");\n\tdescriptionLabel.htmlFor = \"description\";\n\tdescriptionLabel.textContent = \"Description\";\n\tconst descriptionField = document.createElement(\"textarea\");\n\tdescriptionField.id = \"description\";\n\tdescriptionSection.appendChild(descriptionLabel);\n\tdescriptionSection.appendChild(descriptionField);\n\n\tconst dueDateSection = document.createElement(\"div\");\n\tdueDateSection.classList.add(sectionsClassName);\n\tconst dueDateLabel = document.createElement(\"label\");\n\tdueDateLabel.htmlFor = \"due-date\";\n\tdueDateLabel.textContent = \"Due date\";\n\tconst dueDateField = document.createElement(\"input\");\n\tdueDateField.id = \"due-date\";\n\tdueDateField.type = \"date\";\n\tdueDateField.required = true;\n\tdueDateSection.appendChild(dueDateLabel);\n\tdueDateSection.appendChild(dueDateField);\n\n\tconst prioritySection = document.createElement(\"div\");\n\tprioritySection.classList.add(sectionsClassName);\n\tconst priorityLabel = document.createElement(\"label\");\n\tpriorityLabel.textContent = \"Priority\";\n\tprioritySection.appendChild(priorityLabel);\n\tconst priorityButtonsContainer = document.createElement(\"div\");\n\tpriorityButtonsContainer.id = \"priority-buttons-container\";\n\tconst lowButton = renderPriorityButton(\"Low\");\n\tconst medButton = renderPriorityButton(\"Med\");\n\tmedButton.classList.add(\"selected-priority\");\n\tconst highButton = renderPriorityButton(\"High\");\n\tpriorityButtonsContainer.appendChild(lowButton);\n\tpriorityButtonsContainer.appendChild(medButton);\n\tpriorityButtonsContainer.appendChild(highButton);\n\tprioritySection.appendChild(priorityButtonsContainer);\n\n\tconst okButton = renderTodoFormOkButton();\n\t\n\twindow.appendChild(nameSection);\n\twindow.appendChild(descriptionSection);\n\twindow.appendChild(dueDateSection);\n\twindow.appendChild(prioritySection);\n\twindow.appendChild(okButton);\n\tcontainer.appendChild(window);\n\treturn container;\n}\n\nfunction renderOverlayBackground() {\n\tconst background = document.createElement(\"div\");\n\tbackground.id = \"overlay-background\";\n\tbackground.addEventListener(\"click\", (event) => {\n\t\tif(event.target == background)\n\t\t{\n\t\t\tbackground.remove();\n\t\t}\n\t});\n\treturn background;\n}\n\nfunction renderTodoFormOkButton() {\n\tconst button = document.createElement(\"button\");\n\tbutton.id = \"ok-button\";\n\tbutton.textContent = \"OK\";\n\tbutton.addEventListener(\"click\", () => {\n\t\tconst name = document.getElementById(\"name\").value;\n\t\tif(name === \"\") return;\n\t\tconst description = document.getElementById(\"description\").value;\n\t\tconst dueDateInput = document.getElementById(\"due-date\").valueAsDate;\n\t\tif(dueDateInput === null) return;\n\t\tconst dueDate = new Date();\n\t\tdueDate.setHours(0, 0, 0);\n\t\tdueDate.setDate(dueDateInput.getUTCDate());\n\t\tdueDate.setMonth(dueDateInput.getUTCMonth());\n\t\tdueDate.setFullYear(dueDateInput.getUTCFullYear());\n\n\t\tconst prioButtons = document.getElementById(\"priority-buttons-container\").children;\n\t\tlet priority = 1;\n\t\twhile((prioButtons[priority-1].classList.contains(\"selected-priority\") == false) && priority < 10)\n\t\t{\n\t\t\tpriority++;\n\t\t}\n\n\t\tconst todo = (0,_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(name, description, dueDate, priority, false);\n\t\t_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject.addTodo(todo);\n\t\t_storageManager__WEBPACK_IMPORTED_MODULE_6__[\"default\"].saveProject(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject, _projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.indexOf(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject));\n\t\tdocument.body.removeChild(document.getElementById(\"project-section\"));\n\t\tdocument.body.appendChild(renderProject(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject));\n\t\tconst overlay = document.getElementById(\"overlay-background\");\n\t\toverlay.remove();\n\t});\n\treturn button;\n}\n\nfunction renderPriorityButton(name) {\n\tconst btn = document.createElement(\"button\");\n\tbtn.classList.add(\"priority-btn\");\n\tbtn.textContent = name;\n\tconst selectedClassName = \"selected-priority\";\n\tbtn.addEventListener(\"click\", () => {\n\t\tif(btn.classList.contains(selectedClassName) == false)\n\t\t{\n\t\t\tremoveClassChildren(btn.parentNode, selectedClassName);\n\t\t\tbtn.classList.add(selectedClassName);\n\t\t}\n\t});\n\treturn btn;\n}\n\nfunction renderNewProjectButton() {\n\tconst container = document.createElement(\"div\");\n\tcontainer.textContent = \"+\";\n\tcontainer.classList.add(\"project-sidebar-btn\");\n\tcontainer.id = \"new-project-btn\";\n\tcontainer.addEventListener(\"click\", () => {\n\t\tconsole.log(\"foo\");\n\t\tdocument.body.appendChild(renderNewProjectOverlay());\n\t});\n\treturn container;\n}\n\nfunction renderNewProjectOverlay() {\n\tconst container = renderOverlayBackground();\n\tconst window = document.createElement(\"div\");\n\twindow.classList.add(\"new-todo-window\");\n\n\tconst nameSection = document.createElement(\"div\");\n\tnameSection.classList.add(\"form-field-section\");\n\tconst nameLabel = document.createElement(\"label\");\n\tnameLabel.textContent = \"Project name\";\n\tnameLabel.htmlFor = \"project-name\";\n\tconst nameField = document.createElement(\"input\");\n\tnameField.id = \"project-name\";\n\tnameSection.appendChild(nameLabel);\n\tnameSection.appendChild(nameField);\n\n\twindow.appendChild(nameSection);\n\twindow.appendChild(renderProjectFormOkButton());\n\tcontainer.appendChild(window);\n\treturn container;\n}\n\nfunction renderProjectFormOkButton() {\n\tconst button = document.createElement(\"button\");\n\tbutton.id = \"ok-button\";\n\tbutton.textContent = \"OK\";\n\tbutton.addEventListener(\"click\", () => {\n\t\tconst name = document.getElementById(\"project-name\").value;\n\t\tif(name === \"\")\n\t\t\treturn;\n\t\tconst newProject = (0,_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(name, []);\n\t\t_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].push(newProject);\n\t\t_storageManager__WEBPACK_IMPORTED_MODULE_6__[\"default\"].saveProject(newProject, _projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.indexOf(newProject));\n\t\tconst sidebar = document.getElementById(\"sidebar\");\n\t\tsidebar.removeChild(sidebar.lastChild);\n\t\tsidebar.appendChild(renderSidebarProjectsContainer());\n\t\tconst overlay = document.getElementById(\"overlay-background\");\n\t\toverlay.remove();\n\t});\n\treturn button;\n}\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _storageManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storageManager */ \"./src/storageManager.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _projectsModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectsModule */ \"./src/projectsModule.js\");\n\n\n\n\n\n\n\n\nif(window.localStorage.length === 0)\n{\n\tconst defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Default\", []);\n\tdefaultProject.addTodo((0,_todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"lol\", \"this has to be the best compound...\", new Date(\"12/18\"), 2, false));\n\tdefaultProject.addTodo((0,_todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"Wasaphinllton\", \"its just a short show\", new Date(\"05/30\"), 1, false));\n\tdefaultProject.addTodo((0,_todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"pepepe\", \"nothing to see here\", new Date(\"01/02\"), 3, false));\n\t_projectsModule__WEBPACK_IMPORTED_MODULE_5__[\"default\"].push(defaultProject);\n\t_projectsModule__WEBPACK_IMPORTED_MODULE_5__[\"default\"].currentProject = _projectsModule__WEBPACK_IMPORTED_MODULE_5__[\"default\"].array[0];\n\t_storageManager__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProject(_projectsModule__WEBPACK_IMPORTED_MODULE_5__[\"default\"].currentProject, 0);\n}\n\ndocument.body.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderSidebar)());\ndocument.body.appendChild((0,_dom__WEBPACK_IMPORTED_MODULE_3__.renderProject)(_projectsModule__WEBPACK_IMPORTED_MODULE_5__[\"default\"].currentProject));\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

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

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nfunction Todo(title, description, dueDate, priority, completed) {\n\tconsole.log(dueDate);\n\treturn {\n\t\ttitle,\n\t\tdescription,\n\t\tdueDate,\n\t\tpriority,\n\t\tcompleted\n\t};\n};\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/img/checkbox-checked.svg":
/*!**************************************!*\
  !*** ./src/img/checkbox-checked.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1ba7b61f5409b012b334.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/checkbox-checked.svg?");

/***/ }),

/***/ "./src/img/checkbox-empty.svg":
/*!************************************!*\
  !*** ./src/img/checkbox-empty.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4cb0576394404988a6b3.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/checkbox-empty.svg?");

/***/ }),

/***/ "./src/img/trash.svg":
/*!***************************!*\
  !*** ./src/img/trash.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3adac921d489454b8f19.svg\";\n\n//# sourceURL=webpack://todo-list/./src/img/trash.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
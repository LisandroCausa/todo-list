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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderProject\": () => (/* binding */ renderProject),\n/* harmony export */   \"renderSidebar\": () => (/* binding */ renderSidebar)\n/* harmony export */ });\n/* harmony import */ var _img_checkbox_empty_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/checkbox-empty.svg */ \"./src/img/checkbox-empty.svg\");\n/* harmony import */ var _img_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/checkbox-checked.svg */ \"./src/img/checkbox-checked.svg\");\n/* harmony import */ var _img_trash_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/trash.svg */ \"./src/img/trash.svg\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _projectsModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectsModule */ \"./src/projectsModule.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _storageManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storageManager */ \"./src/storageManager.js\");\n\n\n\n\n\n\n\n\nfunction renderTodo(todo) {\n\tconst container = document.createElement(\"div\");\n\tconst title = document.createElement(\"h3\");\n\ttitle.textContent = todo.title;\n\tconst description = document.createElement(\"p\");\n\tdescription.textContent = todo.description;\n\tdescription.classList.add(\"todo-description\");\n\tconst dueDate = document.createElement(\"p\");\n\tconst dateFormatOptions = { day: \"numeric\", month: \"numeric\" };\n\tdueDate.textContent = todo.dueDate.toLocaleDateString(\"en-GB\", dateFormatOptions);\n\tdueDate.classList.add(\"due-date\");\n\tconst checkbox = document.createElement(\"img\");\n\tcheckbox.src = todo.completed ? _img_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_1__ : _img_checkbox_empty_svg__WEBPACK_IMPORTED_MODULE_0__;\n\tcheckbox.classList.add(\"checkbox-button\");\n\tcheckbox.addEventListener(\"click\", (event) => {\n\t\tevent.stopPropagation();\n\t\tcontainer.classList.toggle(\"completed\");\n\t\ttodo.completed = !todo.completed;\n\t\tif(container.classList.contains(\"completed\"))\n\t\t\tcheckbox.src = _img_checkbox_checked_svg__WEBPACK_IMPORTED_MODULE_1__;\n\t\telse\n\t\t\tcheckbox.src = _img_checkbox_empty_svg__WEBPACK_IMPORTED_MODULE_0__;\n\t\t_storageManager__WEBPACK_IMPORTED_MODULE_6__[\"default\"].saveProject(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject, _projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.indexOf(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject));\t\n\t});\n\t\n\tconst deleteButton = document.createElement(\"img\");\n\tdeleteButton.src = _img_trash_svg__WEBPACK_IMPORTED_MODULE_2__;\n\tdeleteButton.classList.add(\"delete-button\");\n\tcontainer.appendChild(title);\n\tcontainer.appendChild(dueDate);\n\tcontainer.appendChild(description);\n\tcontainer.appendChild(checkbox);\n\tcontainer.appendChild(deleteButton);\n\tcontainer.classList.add(\"todo\");\n\tif(todo.completed)\n\t{\n\t\tcontainer.classList.add(\"completed\");\n\t}\n\n\tif(todo.priority == 1)\n\t{\n\t\tcontainer.classList.add(\"low-prio\");\n\t}\n\telse if(todo.priority == 2)\n\t{\n\t\tcontainer.classList.add(\"med-prio\");\n\t}\n\telse\n\t{\n\t\tcontainer.classList.add(\"high-prio\");\n\t}\n\tcontainer.addEventListener(\"click\", () => {\n\t\tcontainer.classList.toggle(\"opened-todo\");\n\t});\n\treturn container;\n}\n\nfunction renderProject(project) {\n\tconst container = document.createElement(\"div\");\n\tcontainer.id = \"project-section\";\n\tconst headerSection = document.createElement(\"div\");\n\theaderSection.id = \"project-header-section\";\n\tconst projectTitle = document.createElement(\"h1\");\n\tprojectTitle.textContent = project.name;\n\tprojectTitle.classList.add(\"project-title\");\n\tconst newTodoButton = renderNewTodoButton();\n\theaderSection.appendChild(projectTitle);\n\theaderSection.appendChild(newTodoButton);\n\tcontainer.appendChild(headerSection);\n\t\n\tconst todosContainer = document.createElement(\"div\");\n\ttodosContainer.classList.add(\"todos-container\");\n\tproject.todos.forEach(element => {\n\t\tconst todoDOMElement = renderTodo(element);\n\t\ttodosContainer.appendChild(todoDOMElement);\n\t\tconst deleteButton = todoDOMElement.lastChild;\n\t\tdeleteButton.addEventListener(\"click\", () => {\n\t\t\tproject.removeTodo(element);\n\t\t\ttodoDOMElement.remove();\n\t\t\t_storageManager__WEBPACK_IMPORTED_MODULE_6__[\"default\"].saveProject(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject, _projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.indexOf(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject));\n\t\t});\n\t});\n\tcontainer.appendChild(todosContainer);\n\treturn container;\n}\n\nfunction renderSidebar() {\n\tconst container = document.createElement(\"div\");\n\tcontainer.id = \"sidebar\";\n\tconst projectHeader = document.createElement(\"h2\");\n\tprojectHeader.textContent = \"Projects\";\n\tcontainer.appendChild(projectHeader);\n\tcontainer.appendChild(renderSidebarProjectsContainer());\n\treturn container;\n}\n\nfunction renderSidebarProjectsContainer() {\n\tconst container = document.createElement(\"div\");\n\tcontainer.id = \"projects-container\";\n\t_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.forEach(project => {\n\t\tcontainer.appendChild(projectButton(project));\n\t});\n\tconst currentIndex = _projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.indexOf(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject);\n\tif(currentIndex > -1)\n\t{\n\t\tcontainer.children[currentIndex].classList.add(\"opened-project\");\n\t}\n\tcontainer.appendChild(renderNewProjectButton());\n\treturn container;\n}\n\nfunction projectButton(project) {\n\tconst container = document.createElement(\"div\");\n\tcontainer.textContent = project.name;\n\tcontainer.classList.add(\"project-sidebar-btn\");\n\tconst openedClassName = \"opened-project\";\n\tcontainer.addEventListener(\"click\", () => {\n\t\tif(container.classList.contains(openedClassName) == false)\n\t\t{\n\t\t\tremoveClassChildren(container.parentNode, openedClassName);\n\t\t\tcontainer.classList.add(openedClassName);\n\t\t\tdocument.body.removeChild(document.getElementById(\"project-section\"));\n\t\t\tdocument.body.appendChild(renderProject(project));\n\t\t\t_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject = project;\n\t\t}\n\t});\n\treturn container;\n}\n\nfunction removeClassChildren(parent, className) {\n\tconst children = parent.children;\n\tfor (const element of children)\n\t{\n\t\telement.classList.remove(className);\n\t}\n}\n\nfunction renderNewTodoButton() {\n\tconst btn = document.createElement(\"button\");\n\tbtn.textContent = \"new To-Do\";\n\tbtn.addEventListener(\"click\", () => {\n\t\tdocument.body.appendChild(renderNewTodoOverlay());\n\t});\n\treturn btn;\n}\n\nfunction renderNewTodoOverlay() {\n\tconst container = renderOverlayBackground();\n\tconst window = document.createElement(\"div\");\n\twindow.classList.add(\"new-todo-window\");\n\n\tconst sectionsClassName = \"form-field-section\";\n\n\tconst nameSection = document.createElement(\"div\");\n\tnameSection.classList.add(sectionsClassName);\n\tconst nameLabel = document.createElement(\"label\");\n\tnameLabel.htmlFor = \"name\";\n\tnameLabel.textContent = \"Name\";\n\tconst nameField = document.createElement(\"input\");\n\tnameField.id = \"name\";\n\tnameField.required = true;\n\tnameSection.appendChild(nameLabel);\n\tnameSection.appendChild(nameField);\n\n\tconst descriptionSection = document.createElement(\"div\");\n\tdescriptionSection.classList.add(sectionsClassName);\n\tconst descriptionLabel = document.createElement(\"label\");\n\tdescriptionLabel.htmlFor = \"description\";\n\tdescriptionLabel.textContent = \"Description\";\n\tconst descriptionField = document.createElement(\"textarea\");\n\tdescriptionField.id = \"description\";\n\tdescriptionSection.appendChild(descriptionLabel);\n\tdescriptionSection.appendChild(descriptionField);\n\n\tconst dueDateSection = document.createElement(\"div\");\n\tdueDateSection.classList.add(sectionsClassName);\n\tconst dueDateLabel = document.createElement(\"label\");\n\tdueDateLabel.htmlFor = \"due-date\";\n\tdueDateLabel.textContent = \"Due date\";\n\tconst dueDateField = document.createElement(\"input\");\n\tdueDateField.id = \"due-date\";\n\tdueDateField.type = \"date\";\n\tdueDateField.required = true;\n\tdueDateSection.appendChild(dueDateLabel);\n\tdueDateSection.appendChild(dueDateField);\n\n\tconst prioritySection = document.createElement(\"div\");\n\tprioritySection.classList.add(sectionsClassName);\n\tconst priorityLabel = document.createElement(\"label\");\n\tpriorityLabel.textContent = \"Priority\";\n\tprioritySection.appendChild(priorityLabel);\n\tconst priorityButtonsContainer = document.createElement(\"div\");\n\tpriorityButtonsContainer.id = \"priority-buttons-container\";\n\tconst lowButton = renderPriorityButton(\"Low\");\n\tconst medButton = renderPriorityButton(\"Med\");\n\tmedButton.classList.add(\"selected-priority\");\n\tconst highButton = renderPriorityButton(\"High\");\n\tpriorityButtonsContainer.appendChild(lowButton);\n\tpriorityButtonsContainer.appendChild(medButton);\n\tpriorityButtonsContainer.appendChild(highButton);\n\tprioritySection.appendChild(priorityButtonsContainer);\n\n\tconst okButton = renderTodoFormOkButton();\n\t\n\twindow.appendChild(nameSection);\n\twindow.appendChild(descriptionSection);\n\twindow.appendChild(dueDateSection);\n\twindow.appendChild(prioritySection);\n\twindow.appendChild(okButton);\n\tcontainer.appendChild(window);\n\treturn container;\n}\n\nfunction renderOverlayBackground() {\n\tconst background = document.createElement(\"div\");\n\tbackground.id = \"overlay-background\";\n\tbackground.addEventListener(\"click\", (event) => {\n\t\tif(event.target == background)\n\t\t{\n\t\t\tbackground.remove();\n\t\t}\n\t});\n\treturn background;\n}\n\nfunction renderTodoFormOkButton() {\n\tconst button = document.createElement(\"button\");\n\tbutton.id = \"ok-button\";\n\tbutton.textContent = \"OK\";\n\tbutton.addEventListener(\"click\", () => {\n\t\tconst name = document.getElementById(\"name\").value;\n\t\tif(name === \"\") return;\n\t\tconst description = document.getElementById(\"description\").value;\n\t\tconst dueDateInput = document.getElementById(\"due-date\").valueAsDate;\n\t\tif(dueDateInput === null) return;\n\t\tconst dueDate = new Date();\n\t\tdueDate.setHours(0, 0, 0);\n\t\tdueDate.setDate(dueDateInput.getUTCDate());\n\t\tdueDate.setMonth(dueDateInput.getUTCMonth());\n\t\tdueDate.setFullYear(dueDateInput.getUTCFullYear());\n\n\t\tconst prioButtons = document.getElementById(\"priority-buttons-container\").children;\n\t\tlet priority = 1;\n\t\twhile((prioButtons[priority-1].classList.contains(\"selected-priority\") == false) && priority < 10)\n\t\t{\n\t\t\tpriority++;\n\t\t}\n\n\t\tconst todo = (0,_todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(name, description, dueDate, priority, false);\n\t\t_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject.addTodo(todo);\n\t\t_storageManager__WEBPACK_IMPORTED_MODULE_6__[\"default\"].saveProject(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject, _projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.indexOf(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject));\n\t\tdocument.body.removeChild(document.getElementById(\"project-section\"));\n\t\tdocument.body.appendChild(renderProject(_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].currentProject));\n\t\tconst overlay = document.getElementById(\"overlay-background\");\n\t\toverlay.remove();\n\t});\n\treturn button;\n}\n\nfunction renderPriorityButton(name) {\n\tconst btn = document.createElement(\"button\");\n\tbtn.classList.add(\"priority-btn\");\n\tbtn.textContent = name;\n\tconst selectedClassName = \"selected-priority\";\n\tbtn.addEventListener(\"click\", () => {\n\t\tif(btn.classList.contains(selectedClassName) == false)\n\t\t{\n\t\t\tremoveClassChildren(btn.parentNode, selectedClassName);\n\t\t\tbtn.classList.add(selectedClassName);\n\t\t}\n\t});\n\treturn btn;\n}\n\nfunction renderNewProjectButton() {\n\tconst container = document.createElement(\"div\");\n\tcontainer.textContent = \"+\";\n\tcontainer.classList.add(\"project-sidebar-btn\");\n\tcontainer.id = \"new-project-btn\";\n\tcontainer.addEventListener(\"click\", () => {\n\t\tconsole.log(\"foo\");\n\t\tdocument.body.appendChild(renderNewProjectOverlay());\n\t});\n\treturn container;\n}\n\nfunction renderNewProjectOverlay() {\n\tconst container = renderOverlayBackground();\n\tconst window = document.createElement(\"div\");\n\twindow.classList.add(\"new-todo-window\");\n\n\tconst nameSection = document.createElement(\"div\");\n\tnameSection.classList.add(\"form-field-section\");\n\tconst nameLabel = document.createElement(\"label\");\n\tnameLabel.textContent = \"Project name\";\n\tnameLabel.htmlFor = \"project-name\";\n\tconst nameField = document.createElement(\"input\");\n\tnameField.id = \"project-name\";\n\tnameSection.appendChild(nameLabel);\n\tnameSection.appendChild(nameField);\n\n\twindow.appendChild(nameSection);\n\twindow.appendChild(renderProjectFormOkButton());\n\tcontainer.appendChild(window);\n\treturn container;\n}\n\nfunction renderProjectFormOkButton() {\n\tconst button = document.createElement(\"button\");\n\tbutton.id = \"ok-button\";\n\tbutton.textContent = \"OK\";\n\tbutton.addEventListener(\"click\", () => {\n\t\tconst name = document.getElementById(\"project-name\").value;\n\t\tif(name === \"\")\n\t\t\treturn;\n\t\tconst newProject = (0,_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(name, []);\n\t\t_projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].push(newProject);\n\t\t_storageManager__WEBPACK_IMPORTED_MODULE_6__[\"default\"].saveProject(newProject, _projectsModule__WEBPACK_IMPORTED_MODULE_4__[\"default\"].array.indexOf(newProject));\n\t\tconst sidebar = document.getElementById(\"sidebar\");\n\t\tsidebar.removeChild(sidebar.lastChild);\n\t\tsidebar.appendChild(renderSidebarProjectsContainer());\n\t\tconst overlay = document.getElementById(\"overlay-background\");\n\t\toverlay.remove();\n\t});\n\treturn button;\n}\n\n//# sourceURL=webpack://todo-list/./src/dom.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom.js");
/******/ 	
/******/ })()
;
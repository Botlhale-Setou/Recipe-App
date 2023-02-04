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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;1,400;1,600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-weight: 300;\\r\\n  font-size: 1.05rem;\\r\\n  line-height: 1.6;\\r\\n  font-family: \\\"Poppins\\\", sans-serif;\\r\\n  overflow-x: hidden;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  font-family: inherit;\\r\\n  cursor: pointer;\\r\\n  outline: 0;\\r\\n  font-size: 1.05rem;\\r\\n}\\r\\n\\r\\n.text {\\r\\n  opacity: 0;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  font-size: 2rem;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  position: sticky;\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  padding: 2rem 5rem;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.brand {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: flex-start;\\r\\n  align-items: center;\\r\\n  gap: 16px;\\r\\n}\\r\\n\\r\\n.site-title {\\r\\n  text-shadow: 2px 2px orange;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 50px;\\r\\n  height: 50px;\\r\\n  font-size: 1.8rem;\\r\\n  background: orange;\\r\\n  color: #fff;\\r\\n  border-top-right-radius: 2rem;\\r\\n  border-top-left-radius: 2rem;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  box-shadow: 2px 4px 8px black;\\r\\n}\\r\\n\\r\\n.main-menu {\\r\\n  position: relative !important;\\r\\n  display: flex;\\r\\n  width: max-content;\\r\\n  flex-direction: row !important;\\r\\n  text-align: right !important;\\r\\n  transition: 0.3s;\\r\\n  align-items: center !important;\\r\\n  z-index: 999;\\r\\n  list-style-type: none;\\r\\n  justify-content: flex-end;\\r\\n  right: 0 !important;\\r\\n  background: transparent !important;\\r\\n  top: 0 !important;\\r\\n  height: auto !important;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  text-shadow: 1px 1px orange;\\r\\n  color: black;\\r\\n  font-weight: 500;\\r\\n  text-decoration: solid;\\r\\n}\\r\\n\\r\\n.main-menu,\\r\\n.nav-item .nav-link {\\r\\n  padding: 10px;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.meal-count {\\r\\n  background-color: orange;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.meal-wrapper {\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n  padding: 2rem;\\r\\n  background: #fff;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.meal-search {\\r\\n  margin: 2rem 0;\\r\\n}\\r\\n\\r\\n.meal-search cite {\\r\\n  margin: 1rem;\\r\\n}\\r\\n\\r\\n.meal-search-box {\\r\\n  margin: 1.2rem 0;\\r\\n  display: flex;\\r\\n  align-items: stretch;\\r\\n}\\r\\n\\r\\n.search-control,\\r\\n.search-btn {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.search-control {\\r\\n  padding: 0 1rem;\\r\\n  font-size: 1.1rem;\\r\\n  font-family: inherit;\\r\\n  outline: 0;\\r\\n  border: 1px solid orange;\\r\\n  color: orangered;\\r\\n  border-top-left-radius: 2rem;\\r\\n  border-bottom-left-radius: 2rem;\\r\\n}\\r\\n\\r\\n.search-control::placeholder {\\r\\n  color: orange;\\r\\n}\\r\\n\\r\\n.search-btn {\\r\\n  width: 60px;\\r\\n  height: 60px;\\r\\n  font-size: 1.8rem;\\r\\n  background: orange;\\r\\n  color: #fff;\\r\\n  border-top-right-radius: 2rem;\\r\\n  border-bottom-right-radius: 2rem;\\r\\n  transition: all 0.4s linear;\\r\\n}\\r\\n\\r\\n.search-btn:hover {\\r\\n  background: darkorange;\\r\\n}\\r\\n\\r\\n.meal-result {\\r\\n  margin-top: 4rem;\\r\\n}\\r\\n\\r\\n#meal {\\r\\n  margin: 2.4rem 0;\\r\\n}\\r\\n\\r\\n.meal-item {\\r\\n  border-radius: 1rem;\\r\\n  overflow: hidden;\\r\\n  box-shadow: 0 4px 21px -12px black;\\r\\n  margin: 2rem 0;\\r\\n}\\r\\n\\r\\n.meal-img img {\\r\\n  width: 100%;\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.meal-name {\\r\\n  padding: 1.5rem 0.5rem;\\r\\n}\\r\\n\\r\\n.meal-name h3 {\\r\\n  font-size: 1.4rem;\\r\\n}\\r\\n\\r\\n.recipe-btn {\\r\\n  text-decoration: none;\\r\\n  color: #fff;\\r\\n  background: orange;\\r\\n  font-weight: 500;\\r\\n  font-size: 1.1rem;\\r\\n  padding: 0.75rem 0;\\r\\n  display: block;\\r\\n  width: 175px;\\r\\n  margin: 1rem auto;\\r\\n  border-radius: 2rem;\\r\\n  transition: all 0.4s linear;\\r\\n}\\r\\n\\r\\n.recipe-btn:hover {\\r\\n  background: orangered;\\r\\n}\\r\\n\\r\\n.notFound {\\r\\n  grid-template-columns: 1fr;\\r\\n  color: orange;\\r\\n  font-weight: 800;\\r\\n  font-size: 1.8rem;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* meal details */\\r\\n\\r\\n.meal-details {\\r\\n  position: fixed;\\r\\n  top: 25%;\\r\\n  left: 25%;\\r\\n  /* stylelint-disable-next-line csstree/validator */\\r\\n  transform: translate(-50% -50%);\\r\\n  color: #fff;\\r\\n  background: orange;\\r\\n  border-radius: 1rem;\\r\\n  width: 90%;\\r\\n  height: 60%;\\r\\n  overflow-y: scroll;\\r\\n  display: none;\\r\\n  padding: 2rem 0;\\r\\n}\\r\\n\\r\\n.meal-details-content p {\\r\\n  margin: 1rem;\\r\\n}\\r\\n\\r\\n.showRecipe {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.meal-details-content {\\r\\n  margin: 1rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.recipe-close-btn {\\r\\n  position: absolute;\\r\\n  right: 2rem;\\r\\n  top: 2rem;\\r\\n  font-size: 1rem;\\r\\n  background: #fff;\\r\\n  width: 35px;\\r\\n  border-radius: 35px;\\r\\n}\\r\\n\\r\\n.recipe-category {\\r\\n  background: #fff;\\r\\n  font-weight: 600;\\r\\n  color: orange;\\r\\n  display: inline-block;\\r\\n  /* stylelint-disable-next-line csstree/validator */\\r\\n  padding: 0.2rem, 5rem;\\r\\n  border-radius: 0.3rem;\\r\\n}\\r\\n\\r\\n.recipe-link {\\r\\n  margin: 1.4rem;\\r\\n}\\r\\n\\r\\n.recipe-link a {\\r\\n  color: #fff;\\r\\n  font-size: 1.2rem;\\r\\n  font-weight: 700;\\r\\n  transition: all 0.4s linear;\\r\\n}\\r\\n\\r\\n.recipe-link a:hover {\\r\\n  opacity: 0.8;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 600px) {\\r\\n  .meal-search-box {\\r\\n    width: 540px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 760px) {\\r\\n  #meal {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n    gap: 2rem;\\r\\n  }\\r\\n\\r\\n  .meal-item {\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  .meal-details {\\r\\n    width: 700px;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 900px) {\\r\\n  #meal {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, 1fr);\\r\\n    gap: 2rem;\\r\\n  }\\r\\n\\r\\n  .meal-item {\\r\\n    margin: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.like-count {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n#nameInput {\\r\\n  width: 250px;\\r\\n  height: 30px;\\r\\n  padding-left: 15px;\\r\\n  margin-bottom: 15px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n#cp-commentTA {\\r\\n  width: 250px;\\r\\n  padding-left: 15px;\\r\\n  padding-top: 15px;\\r\\n  margin-bottom: 15px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.cmtbtn {\\r\\n  width: 250px;\\r\\n  height: 30px;\\r\\n  padding-left: 15px;\\r\\n  margin-bottom: 15px;\\r\\n  border-radius: 10px;\\r\\n  background-color: darkgreen;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  border-top: 2px solid orangered;\\r\\n  padding: 1rem 2rem;\\r\\n  background-color: white;\\r\\n  width: 100vw;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://recipe-app/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://recipe-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://recipe-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://recipe-app/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://recipe-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://recipe-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://recipe-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://recipe-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://recipe-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://recipe-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_manageLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/manageLikes.js */ \"./src/modules/manageLikes.js\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n/* harmony import */ var _modules_countMeals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/countMeals */ \"./src/modules/countMeals.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst searchBtn = document.querySelector(\".search-btn\");\r\nconst mealList = document.getElementById(\"meal\");\r\n\r\nconst modal = document.querySelector(\".meal-details\");\r\nconst modalCloseBtn = document.querySelector(\".recipe-close-btn\");\r\nconst catBeef = document.querySelector(\"#beef\");\r\nconst catSeafood = document.querySelector(\"#seafood\");\r\nconst catDessert = document.querySelector(\"#dessert\");\r\nconst foodBase = \"https://www.themealdb.com/api/json/v1/1/\";\r\n\r\nconst catUrl = `${foodBase}filter.php?c=`;\r\nconst ingUrl = `${foodBase}filter.php?i=`;\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n  document.querySelector(\"#yourResult\").style.display = \"none\";\r\n  document.querySelector(\".initialMessage\").style.display = \"block\";\r\n\r\n  //count meal\r\n  (0,_modules_countMeals__WEBPACK_IMPORTED_MODULE_3__.countMeals)(catUrl, \"Beef\", catBeef.childNodes[1]);\r\n  (0,_modules_countMeals__WEBPACK_IMPORTED_MODULE_3__.countMeals)(catUrl, \"Dessert\", catDessert.childNodes[1]);\r\n  (0,_modules_countMeals__WEBPACK_IMPORTED_MODULE_3__.countMeals)(catUrl, \"Seafood\", catSeafood.childNodes[1]);\r\n});\r\n\r\n// search button\r\nsearchBtn.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n  let searchInputText = document.getElementById(\"search-input\").value.trim();\r\n  (0,_modules_UI__WEBPACK_IMPORTED_MODULE_2__.getMealList)(ingUrl, searchInputText);\r\n});\r\n\r\n// getting recipe modal\r\nmealList.addEventListener(\"click\", async (e) => {\r\n  e.preventDefault();\r\n  if (e.target.classList.contains(\"recipe-btn\")) {\r\n    let mealItem = e.target.parentElement.parentElement;\r\n    let response = await fetch(\r\n      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`\r\n    );\r\n    let data = await response.json();\r\n    (0,_modules_UI__WEBPACK_IMPORTED_MODULE_2__.displayModal)(data.meals);\r\n  }\r\n});\r\n\r\n//closing modal\r\n\r\nmodalCloseBtn.addEventListener(\"click\", (e) => {\r\n  modal.style.display = \"none\";\r\n});\r\n\r\ncatBeef.addEventListener(\"click\", (e) => {\r\n  (0,_modules_UI__WEBPACK_IMPORTED_MODULE_2__.getMealList)(catUrl, \"beef\");\r\n  (0,_modules_countMeals__WEBPACK_IMPORTED_MODULE_3__.countMeals)(catUrl, \"Beef\", catBeef.childNodes[1]);\r\n  catBeef.childNodes[1].style.visibility = \"visible\";\r\n});\r\n\r\ncatSeafood.addEventListener(\"click\", (e) => {\r\n  (0,_modules_UI__WEBPACK_IMPORTED_MODULE_2__.getMealList)(catUrl, \"Seafood\");\r\n  (0,_modules_countMeals__WEBPACK_IMPORTED_MODULE_3__.countMeals)(catUrl, \"Seafood\", catSeafood.childNodes[1]);\r\n  catSeafood.childNodes[1].style.visibility = \"visible\";\r\n});\r\n\r\ncatDessert.addEventListener(\"click\", (e) => {\r\n  (0,_modules_UI__WEBPACK_IMPORTED_MODULE_2__.getMealList)(catUrl, \"Dessert\");\r\n  (0,_modules_countMeals__WEBPACK_IMPORTED_MODULE_3__.countMeals)(catUrl, \"Dessert\", catDessert.childNodes[1]);\r\n  catDessert.childNodes[1].style.visibility = \"visible\";\r\n});\r\n\r\nmealList.addEventListener(\"click\", (e) => {\r\n  e.preventDefault();\r\n\r\n  if (e.target.classList.contains(\"fa-heart\")) {\r\n    let likeid = e.target.id.split(\"-\")[1];\r\n    (0,_modules_manageLikes_js__WEBPACK_IMPORTED_MODULE_1__.itemLike)(likeid);\r\n\r\n    let likenumber = document.querySelector(`#like-count${likeid}`).textContent;\r\n    document.querySelector(`#like-count${likeid}`).innerHTML = `${\r\n      +likenumber + 1\r\n    }`;\r\n\r\n    setTimeout(() => {\r\n      (0,_modules_manageLikes_js__WEBPACK_IMPORTED_MODULE_1__.likeCount)(likeid);\r\n    }, 500);\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://recipe-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayModal\": () => (/* binding */ displayModal),\n/* harmony export */   \"getMealList\": () => (/* binding */ getMealList)\n/* harmony export */ });\n/* harmony import */ var _manageComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageComments */ \"./src/modules/manageComments.js\");\n/* harmony import */ var _manageLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageLikes.js */ \"./src/modules/manageLikes.js\");\n\r\n\r\n\r\n\r\nconst mealList = document.getElementById(\"meal\");\r\nconst modal = document.querySelector(\".meal-details\");\r\nconst mealDetailsContent = document.querySelector(\".meal-details-content\");\r\n\r\nconst displayModal = async (obj) => {\r\n  obj = obj[0];\r\n  let html = \"\";\r\n\r\n  html = `<h2 class=\"recipe-title\">${obj.strMeal}</h2>\r\n          <p class=\"recipe-category\">${obj.strCategory}</p>\r\n          <div class=\"recipe-instruct\">\r\n            <h3>Instruction</h3>\r\n            <p>\r\n            ${obj.strInstructions}\r\n            </p>\r\n          </div>\r\n          <div class=\"recipe-meal-img\">\r\n            <img src=\"${obj.strMealThumb}\" alt=\"food\" height=\"100px\" width=\"100px\" />\r\n          </div>\r\n          <div class=\"recipe-link\">\r\n            <a href=\"${obj.strYoutube}\" target=\"_blank\">Watch video</a>\r\n          </div>\r\n  \r\n          <div class=\"commentsDisplay\">\r\n            </div>\r\n  \r\n            <h4 id=\"addCommTitle\">Add comment<p class=\"displayCommCount\"></p></h4>\r\n            <input id=\"nameInput\" type=\"text\" placeholder=\"Your name\" aria-placeholder=\"Your name\">\r\n            <textarea name=\"commentTA\" id=\"cp-commentTA\" cols=\"30\" rows=\"10\" placeholder=\"Your comment\" aria-placeholder=\"Your comment\"></textarea>\r\n            <button id=\"commentButton-${obj.idMeal}\" class=\"cmtbtn\" type=\"button\">Post Comment</button>`;\r\n\r\n  mealDetailsContent.innerHTML = html;\r\n  modal.style.display = \"block\";\r\n\r\n  setTimeout(() => {\r\n    (0,_manageComments__WEBPACK_IMPORTED_MODULE_0__.showComment)(obj.idMeal);\r\n  }, 1000);\r\n\r\n  // Load Postcomment button behaviour\r\n  const postCommentButton = document.querySelector(\r\n    `#commentButton-${obj.idMeal}`\r\n  );\r\n\r\n  const user = document.querySelector(\"#nameInput\");\r\n  const text = document.querySelector(\"#cp-commentTA\");\r\n\r\n  postCommentButton.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    if (user.value !== \"\" && text.value !== \"\") {\r\n      let idOfObj = postCommentButton.id.split(\"-\")[1];\r\n\r\n      (0,_manageComments__WEBPACK_IMPORTED_MODULE_0__.addComment)(idOfObj, user, text);\r\n\r\n      setTimeout(() => {\r\n        (0,_manageComments__WEBPACK_IMPORTED_MODULE_0__.showComment)(obj.idMeal);\r\n      }, 1000);\r\n    } else {\r\n      console.log(\"error in submit\");\r\n    }\r\n  });\r\n};\r\n\r\nconst getMealList = async (url, term) => {\r\n  let response = await fetch(`${url}${term}`);\r\n  let data = await response.json();\r\n\r\n  let html = \"\";\r\n  if (data.meals) {\r\n    data.meals.forEach((item) => {\r\n      html += ` <div class=\"meal-item\" data-id=${item.idMeal}>\r\n            <div class=\"meal-img\">\r\n            <img src=${item.strMealThumb} alt=\"food\" />\r\n            </div>\r\n            <div class=\"meal-name\">\r\n            <h3>${item.strMeal}</h3>\r\n            <div class=\"for-heart\">\r\n  \r\n            <i\r\n            class=\"fa-solid fa-heart\"\r\n            id=\"like-${item.idMeal}\"\r\n            style=\"cursor: pointer; color: red;\"\r\n          ></i>\r\n          <span class=\"like-count\" id=\"like-count${item.idMeal}\"></span>\r\n          </div>\r\n            <a href=\"#\" class=\"recipe-btn\" id =\" recipebtn-\">Comments</a>\r\n            </div>\r\n            </div>`;\r\n    });\r\n  } else {\r\n    html = \"sorry, we have nothing to show\";\r\n    mealList.classList.remove(\"notFound\");\r\n  }\r\n  mealList.innerHTML = html;\r\n  mealList.classList.add(\"notFound\");\r\n\r\n  let mealItems = document.querySelectorAll(\".meal-item\");\r\n  mealItems.forEach((meal) => {\r\n    let id = meal.dataset.id;\r\n    (0,_manageLikes_js__WEBPACK_IMPORTED_MODULE_1__.likeCount)(id);\r\n  });\r\n\r\n  document.querySelector(\"#yourResult\").style.display = \"block\";\r\n  document.querySelector(\".initialMessage\").style.display = \"none\";\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://recipe-app/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/countComments.js":
/*!**************************************!*\
  !*** ./src/modules/countComments.js ***!
  \**************************************/
/***/ ((module) => {

eval("const countComments = (arrComm) => {\r\n\treturn arrComm.length;\r\n};\r\n\r\nmodule.exports = countComments;\n\n//# sourceURL=webpack://recipe-app/./src/modules/countComments.js?");

/***/ }),

/***/ "./src/modules/countMeals.js":
/*!***********************************!*\
  !*** ./src/modules/countMeals.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countMeals\": () => (/* binding */ countMeals)\n/* harmony export */ });\nconst mealsCount = (arr) => {\r\n  let result = 0;\r\n  if (arr.length === undefined) {\r\n    result = 0;\r\n  } else {\r\n    result = arr.length;\r\n  }\r\n  return result;\r\n};\r\nconst countMeals = async (url, term, element) => {\r\n  const response = await fetch(`${url}${term}`);\r\n  await response.json().then((food) => {\r\n    const foods = food.meals;\r\n    element.innerText = mealsCount(foods);\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://recipe-app/./src/modules/countMeals.js?");

/***/ }),

/***/ "./src/modules/manageComments.js":
/*!***************************************!*\
  !*** ./src/modules/manageComments.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"showComment\": () => (/* binding */ showComment)\n/* harmony export */ });\nconst countComments = __webpack_require__(/*! ./countComments.js */ \"./src/modules/countComments.js\");\r\n\r\nconst addComment = async (itemId, usr, txt) => {\r\n  await fetch(\r\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vne0sKL7BtYmXIhUvGK9/comments/`,\r\n    {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-type\": \"application/json; charset=UTF-8\",\r\n      },\r\n      body: JSON.stringify({\r\n        item_id: itemId,\r\n        username: usr.value,\r\n        comment: txt.value,\r\n      }),\r\n    }\r\n  );\r\n  usr.value = \"\";\r\n  txt.value = \"\";\r\n};\r\n\r\nconst showComment = async (itemId) => {\r\n  const response = await fetch(\r\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vne0sKL7BtYmXIhUvGK9/comments?item_id=${itemId}`\r\n  );\r\n  const commentShow = document.querySelector(`.commentsDisplay`);\r\n  const data = await response.json();\r\n  let commDB = Array.from(data);\r\n\r\n  if (commDB.length === 0) {\r\n    commentShow.innerHTML = \"be the first to post comment\";\r\n  } else {\r\n    commentShow.innerHTML = renderComment(commDB);\r\n  }\r\n};\r\n\r\nconst renderComment = (arr) => {\r\n  let display = document.querySelector(\".displayCommCount\");\r\n  display.innerHTML = `(${countComments(arr)})`;\r\n\r\n  let comments = \"\";\r\n  if (arr.length !== undefined) {\r\n    arr.forEach((obj) => {\r\n      comments += `<p class=\"single-comment\"><span class=\"comment-date\">${obj.creation_date}</span><br><span class=\"user-name\">${obj.username}:</span> <span class=\"comment-text\">${obj.comment}</span></p>`;\r\n    });\r\n  }\r\n  return comments;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://recipe-app/./src/modules/manageComments.js?");

/***/ }),

/***/ "./src/modules/manageLikes.js":
/*!************************************!*\
  !*** ./src/modules/manageLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemLike\": () => (/* binding */ itemLike),\n/* harmony export */   \"likeCount\": () => (/* binding */ likeCount)\n/* harmony export */ });\nconst itemLike = async (itemId) => {\r\n  await fetch(\r\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vne0sKL7BtYmXIhUvGK9/likes/`,\r\n    {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-type\": \"application/json; charset=UTF-8\",\r\n      },\r\n      body: JSON.stringify({\r\n        item_id: itemId,\r\n      }),\r\n    }\r\n  );\r\n};\r\nconst likeCount = async (id) => {\r\n  const likeEntries = await fetch(\r\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/vne0sKL7BtYmXIhUvGK9/likes`\r\n  );\r\n\r\n  await likeEntries.json().then((likeEntry) => {\r\n    const likeCounter = document.getElementById(`like-count${id}`);\r\n    likeEntry.forEach((like) => {\r\n      if (id === like.item_id) {\r\n        likeCounter.innerHTML = `${like.likes}`;\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://recipe-app/./src/modules/manageLikes.js?");

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
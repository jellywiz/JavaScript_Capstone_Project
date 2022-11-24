"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb_template"] = self["webpackChunkweb_template"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Orbitron&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Orbitron', sans-serif;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  color: #009eff;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\nh3 {\\r\\n  color: #009eff;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\nnav {\\r\\n  display: flex;\\r\\n  gap: 40px;\\r\\n}\\r\\n\\r\\na {\\r\\n  color: #009eff;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter > p > a {\\r\\n  color: #009eff;\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline black;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  background-color: #ffe15d;\\r\\n  height: 80px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  color: white;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  column-gap: 50px;\\r\\n  font-weight: 700;\\r\\n  font-size: 30px;\\r\\n  background-color: #eff5f5;\\r\\n  padding: 100px 0;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  background-color: #ffe15d;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-around;\\r\\n  padding-bottom: 20px;\\r\\n}\\r\\n\\r\\n.container .left-side {\\r\\n  width: 370px;\\r\\n  color: #c539b4;\\r\\n}\\r\\n\\r\\n.container p {\\r\\n  font-size: 20px;\\r\\n  font-weight: 300;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.container img {\\r\\n  height: 400px;\\r\\n  width: auto;\\r\\n}\\r\\n\\r\\n.main-films {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 35px;\\r\\n  justify-content: center;\\r\\n  padding: 40px;\\r\\n}\\r\\n\\r\\n.movie-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-between;\\r\\n  border-radius: 5px;\\r\\n  align-items: center;\\r\\n  padding: 30px 10px;\\r\\n  background-color: #eff5f5;\\r\\n  /* stylelint-disable-next-line length-zero-no-unit */\\r\\n  box-shadow: #009eff 0px 0px 10px;\\r\\n}\\r\\n\\r\\n.movie-image {\\r\\n  border-radius: 5px;\\r\\n  height: 400px;\\r\\n  width: 280px !important;\\r\\n}\\r\\n\\r\\n.movie-info {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.movie-buttons {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  margin-top: 15px;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.like-button {\\r\\n  font-family: 'Orbitron', sans-serif;\\r\\n  background-color: #ffe15d;\\r\\n  border: none;\\r\\n  border-radius: 5px;\\r\\n  padding: 5px 10px;\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n  font-size: 15px;\\r\\n  /* stylelint-disable-next-line length-zero-no-unit */\\r\\n  box-shadow: #009eff 0px 0px 10px;\\r\\n}\\r\\n\\r\\n.like-button:hover {\\r\\n  background-color: #009eff;\\r\\n  /* stylelint-disable-next-line length-zero-no-unit */\\r\\n  box-shadow: #ffe15d 0px 0px 10px;\\r\\n}\\r\\n\\r\\n.comment-button {\\r\\n  background-color: #c539b4;\\r\\n  font-family: 'Orbitron', sans-serif;\\r\\n  border: none;\\r\\n  border-radius: 10px;\\r\\n  padding: 5px 10px;\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n  font-size: 15px;\\r\\n  /* stylelint-disable-next-line length-zero-no-unit */\\r\\n  box-shadow: #009eff 0px 0px 10px;\\r\\n}\\r\\n\\r\\n.comment-button:hover {\\r\\n  background-color: #009eff;\\r\\n  /* stylelint-disable-next-line length-zero-no-unit */\\r\\n  box-shadow: #c539b4 0px 0px 10px;\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  position: absolute;\\r\\n  right: 20px;\\r\\n  top: 20px;\\r\\n  height: 50px;\\r\\n  width: 50px;\\r\\n  background-color: #00fff6;\\r\\n  color: #ffe15d;\\r\\n  border: 1px solid #ffe15d;\\r\\n  font-size: large;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.close-button:hover {\\r\\n  color: #c539b4;\\r\\n  scale: 1.2;\\r\\n  transition: 0.1s;\\r\\n  border: 1px solid #c539b4;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.modal-bg {\\r\\n  position: fixed;\\r\\n  background-color: rgba(0, 0, 0, 0.7);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  top: 0;\\r\\n  display: none;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  position: relative;\\r\\n  height: 90vh;\\r\\n  width: 50vw;\\r\\n  background-color: #00fff6;\\r\\n  color: black;\\r\\n  display: none;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  font-size: 15px;\\r\\n  overflow: scroll;\\r\\n  scroll-behavior: smooth;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.modal-content img {\\r\\n  margin-top: 50px;\\r\\n  height: 400px;\\r\\n  width: 300px;\\r\\n  border: 2px solid #ffe15d;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.information {\\r\\n  display: flex;\\r\\n  column-gap: 50px;\\r\\n  border: 2px solid #ffe15d;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.indicator {\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.indicator span {\\r\\n  font-weight: 300;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  text-align: center;\\r\\n  margin: 0 30px;\\r\\n  width: 350px;\\r\\n  border: 2px solid #ffe15d;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#name {\\r\\n  width: 200px;\\r\\n  border: #ffe15d solid 2px;\\r\\n  border-radius: 8px;\\r\\n  padding: 7px;\\r\\n}\\r\\n\\r\\n#comment {\\r\\n  width: 200px;\\r\\n  border: #ffe15d solid 2px;\\r\\n  border-radius: 8px;\\r\\n  padding: 7px;\\r\\n  height: 150px;\\r\\n  padding-bottom: 65%;\\r\\n}\\r\\n\\r\\n#submit {\\r\\n  background: #ffe15d;\\r\\n  border: none;\\r\\n  width: 65%;\\r\\n  height: 40px;\\r\\n  border-radius: 100px;\\r\\n  font-size: 20px;\\r\\n  margin-bottom: 20px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://web-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://web-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://web-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://web-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://web-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://web-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://web-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://web-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://web-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://web-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ \"./src/style.css\");\n/* harmony import */ var _module_displayImg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/displayImg.js */ \"./src/js/module/displayImg.js\");\n/* harmony import */ var _module_displaymovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/displaymovies.js */ \"./src/js/module/displaymovies.js\");\n/* harmony import */ var _module_addLikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/addLikes.js */ \"./src/js/module/addLikes.js\");\n/* harmony import */ var _module_likesRender_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/likesRender.js */ \"./src/js/module/likesRender.js\");\n/* harmony import */ var _module_displayModal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/displayModal.js */ \"./src/js/module/displayModal.js\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/logo.png */ \"./src/images/logo.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst moviesContainer = document.querySelector('.main-films');\r\n\r\nasync function render() {\r\n  document.onload = await (0,_module_displayImg_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(0);\r\n  document.onload = await (0,_module_displaymovies_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(12);\r\n  document.onload = await (0,_module_likesRender_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  document.onload = await (0,_module_addLikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  moviesContainer.addEventListener('click', (e) => {\r\n    const { target } = e;\r\n    if (target.matches('.movie-image') || target.matches('.comment-button')) {\r\n      (0,_module_displayModal_js__WEBPACK_IMPORTED_MODULE_5__.displayModal)(target.getAttribute('data-index-number'));\r\n    }\r\n  });\r\n}\r\n\r\nrender();\r\n\r\n// document.onload = displayImage(0);\r\n// document.onload = displayMovies(12);\r\n\r\n// moviesContainer.addEventListener('click', (e) => {\r\n//   const { target } = e;\r\n//   if (target.matches('.movie-image')) {\r\n//     displayModal(target.getAttribute('data-index-number'));\r\n//   }\r\n// });\r\n// uTwt6FRnbbTssMmx6qrV\r\n\r\n// const fetchAPI = () => {\r\n//   fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {\r\n//     method: 'POST',\r\n//     body: JSON.stringify({\r\n//       name: 'My cool new game',\r\n//     }),\r\n//     headers: {\r\n//       'Content-type': 'application/json; charset=UTF-8',\r\n//     },\r\n//   })\r\n//     .then((response) => response.text())\r\n//     .then((json) => console.log(json));\r\n// };\r\n\r\n// fetchAPI();\r\n\n\n//# sourceURL=webpack://web-template/./src/js/App.js?");

/***/ }),

/***/ "./src/js/module/InvolmentApi.js":
/*!***************************************!*\
  !*** ./src/js/module/InvolmentApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InvolvementAPI)\n/* harmony export */ });\nclass InvolvementAPI {\r\n  constructor() {\r\n    this.url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\r\n    this.key = 'LmgrRFKQop0R1bb9Hah3';\r\n    this.headers = { 'Content-type': 'application/json; charset=UTF-8' };\r\n  }\r\n\r\n  async addLikes(id) {\r\n    const response = await fetch(`${this.url}${this.key}/likes`, {\r\n      method: 'POST',\r\n      body: JSON.stringify({\r\n        item_id: id,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    });\r\n    return response;\r\n  }\r\n\r\n  async getLikes() {\r\n    const result = await fetch(`${this.url}${this.key}/likes`, {\r\n      method: 'GET',\r\n    });\r\n    const list = await result.json();\r\n    return list;\r\n  }\r\n\r\n  async getComments(id) {\r\n    const response = await fetch(`${this.url}${this.key}/comments?item_id=${id}`, { method: 'GET' });\r\n    const data = await response.json();\r\n    return data;\r\n  }\r\n\r\n  async postComments(comment, UserName, id) {\r\n    const body = JSON.stringify({\r\n      item_id: id,\r\n      username: UserName,\r\n      comment,\r\n    });\r\n\r\n    await fetch(`${this.url}${this.key}/comments`, {\r\n      method: 'POST',\r\n      body,\r\n      headers: this.headers,\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://web-template/./src/js/module/InvolmentApi.js?");

/***/ }),

/***/ "./src/js/module/addLikes.js":
/*!***********************************!*\
  !*** ./src/js/module/addLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addLikes)\n/* harmony export */ });\n/* harmony import */ var _InvolmentApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolmentApi.js */ \"./src/js/module/InvolmentApi.js\");\n\r\n\r\nconst api = new _InvolmentApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nasync function addLikes() {\r\n  const moviesContainer = document.querySelector('.main-films');\r\n  moviesContainer.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    const { target } = e;\r\n    const movieId = target.getAttribute('data-index-number');\r\n    if (target.matches('.like-button')) {\r\n      await api.addLikes(movieId);\r\n      const likes = await api.getLikes();\r\n      const likenum = likes.findIndex((item) => item.item_id === movieId);\r\n      target.innerHTML = `Liked: ${likes[likenum].likes}`;\r\n    }\r\n  });\r\n}\n\n//# sourceURL=webpack://web-template/./src/js/module/addLikes.js?");

/***/ }),

/***/ "./src/js/module/callClass.js":
/*!************************************!*\
  !*** ./src/js/module/callClass.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter),\n/* harmony export */   \"counter\": () => (/* binding */ counter),\n/* harmony export */   \"involvement\": () => (/* binding */ involvement),\n/* harmony export */   \"movieApi\": () => (/* binding */ movieApi)\n/* harmony export */ });\n/* harmony import */ var _movieCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieCounter.js */ \"./src/js/module/movieCounter.js\");\n/* harmony import */ var _InvolmentApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvolmentApi.js */ \"./src/js/module/InvolmentApi.js\");\n/* harmony import */ var _movieApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieApi.js */ \"./src/js/module/movieApi.js\");\n/* harmony import */ var _counterComment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counterComment.js */ \"./src/js/module/counterComment.js\");\n\r\n\r\n\r\n\r\n\r\nconst counter = new _movieCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst involvement = new _InvolmentApi_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst movieApi = new _movieApi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\nconst commentCounter = new _counterComment_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\r\n\r\n\n\n//# sourceURL=webpack://web-template/./src/js/module/callClass.js?");

/***/ }),

/***/ "./src/js/module/commentRender.js":
/*!****************************************!*\
  !*** ./src/js/module/commentRender.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _callClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callClass.js */ \"./src/js/module/callClass.js\");\n\r\n\r\nconst renderComments = async (number) => {\r\n  const commentsContainer = document.querySelector('.comments');\r\n  commentsContainer.innerHTML = '<h4 id\"comments-header\"></h4>';\r\n  const comments = await _callClass_js__WEBPACK_IMPORTED_MODULE_0__.involvement.getComments(`item${number}`);\r\n  for (let i = 1; i < comments.length; i += 1) {\r\n    const newP = document.createElement('p');\r\n    newP.textContent = `${comments[i].creation_date} ${comments[i].username} : ${comments[i].comment}`;\r\n    newP.classList.add('comment');\r\n    commentsContainer.appendChild(newP);\r\n  }\r\n  _callClass_js__WEBPACK_IMPORTED_MODULE_0__.commentCounter.getComments();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderComments);\n\n//# sourceURL=webpack://web-template/./src/js/module/commentRender.js?");

/***/ }),

/***/ "./src/js/module/counterComment.js":
/*!*****************************************!*\
  !*** ./src/js/module/counterComment.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CommentsCounter)\n/* harmony export */ });\nclass CommentsCounter {\r\n  constructor() {\r\n    this.comments = 0;\r\n  }\r\n\r\n  getComments() {\r\n    this.comments = 0;\r\n    document.querySelectorAll('.comment').forEach(() => {\r\n      this.comments += 1;\r\n    });\r\n    document.querySelector('.comments h4').innerText = `Comments (${this.comments})`;\r\n    return this.comments;\r\n  }\r\n}\n\n//# sourceURL=webpack://web-template/./src/js/module/counterComment.js?");

/***/ }),

/***/ "./src/js/module/displayImg.js":
/*!*************************************!*\
  !*** ./src/js/module/displayImg.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayImage)\n/* harmony export */ });\n/* harmony import */ var _movieApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieApi.js */ \"./src/js/module/movieApi.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ \"./src/js/module/elements.js\");\n\r\n\r\n\r\nasync function displayImage(number) {\r\n  const data = await _movieApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchallmovies();\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_1__.imageContainer.innerHTML += `<img src=\"${data[number].image}\" />`;\r\n}\n\n//# sourceURL=webpack://web-template/./src/js/module/displayImg.js?");

/***/ }),

/***/ "./src/js/module/displayModal.js":
/*!***************************************!*\
  !*** ./src/js/module/displayModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"displayModal\": () => (/* binding */ displayModal),\n/* harmony export */   \"hideModal\": () => (/* binding */ hideModal)\n/* harmony export */ });\n/* harmony import */ var _movieApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieApi.js */ \"./src/js/module/movieApi.js\");\n/* harmony import */ var _callClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./callClass.js */ \"./src/js/module/callClass.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements.js */ \"./src/js/module/elements.js\");\n/* harmony import */ var _commentRender_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentRender.js */ \"./src/js/module/commentRender.js\");\n\r\n\r\n\r\n\r\n\r\nconst hideModal = () => {\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_2__.modalBg.style.display = 'none';\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_2__.modalContainer.style.display = 'none';\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_2__.body.style.overflow = 'auto';\r\n};\r\n\r\nasync function displayModal(number) {\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_2__.modalBg.style.display = 'flex';\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_2__.modalContainer.style.display = 'flex';\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_2__.body.style.overflow = 'hidden';\r\n  const data = await _movieApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchmovie(number);\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_2__.modalContainer.innerHTML = `\r\n  <button data-close-button class=\"close-button\">&times;</button>\r\n    <img src=\"${data.image}\"/>\r\n    <div class=\"information\">\r\n      <div class=\"left\">\r\n      <p class=\"indicator\">Title: <span>${data.title}</span></p>\r\n      <p class=\"indicator\">Raiting score: <span>${data.rt_score}</span></p>\r\n      </div>\r\n      <div class=\"right\">\r\n      <p class=\"indicator\">Release date: <span>${data.release_date}</span></p>\r\n      <p class=\"indicator\">Director: <span>${data.director}</span></p>\r\n      \r\n      </div>\r\n    </div>\r\n    <p class=\"description indicator\">Description: <span>${data.description}</span></p>\r\n    <div class=\"comments\">\r\n    <h4 id\"comments-header\"></h4> \r\n    </div>\r\n    <form>\r\n          <input class=\"user-input\" id=\"name\" type=\"text\" data-index-number=\"${number}\" placeholder=\"Your name\" required>\r\n          <textarea class=\"message-input\" id=\"comment\" data-index-number=\"${number}\" placeholder=\"Your comment\" required></textarea>\r\n          <button class=\"like-button\" id=\"submit\">Submit</button>\r\n        </form>\r\n    `;\r\n  const userInput = document.querySelector('.user-input');\r\n  const messageInput = document.querySelector('.message-input');\r\n  const form = document.querySelector('form');\r\n  form.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    await _callClass_js__WEBPACK_IMPORTED_MODULE_1__.involvement.postComments(messageInput.value, userInput.value, `item${number}`);\r\n    await (0,_commentRender_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(number);\r\n    messageInput.value = '';\r\n    userInput.value = '';\r\n  });\r\n\r\n  _elements_js__WEBPACK_IMPORTED_MODULE_2__.modalBg.addEventListener('click', (e) => {\r\n    const { target } = e;\r\n    if (target.classList.contains('modal-bg') || target.classList.contains('close-button')) {\r\n      hideModal();\r\n    }\r\n  });\r\n  await (0,_commentRender_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(number);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayModal);\n\n//# sourceURL=webpack://web-template/./src/js/module/displayModal.js?");

/***/ }),

/***/ "./src/js/module/displaymovies.js":
/*!****************************************!*\
  !*** ./src/js/module/displaymovies.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayMovies)\n/* harmony export */ });\n/* harmony import */ var _movieApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieApi.js */ \"./src/js/module/movieApi.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ \"./src/js/module/elements.js\");\n/* harmony import */ var _callClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callClass.js */ \"./src/js/module/callClass.js\");\n\r\n\r\n\r\n\r\nasync function displayMovies(number) {\r\n  const data = await _movieApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchallmovies();\r\n\r\n  for (let i = 0; i < number; i += 1) {\r\n    const hour = Math.floor((data[i].running_time / 60));\r\n    const minutes = (data[i].running_time % 60);\r\n    _elements_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.innerHTML += `<div class=\"movie-container\">\r\n      <img class=\"movie-image\" src=\"${data[i].image}\" alt=\"${data[i].title}\" data-index-number=${i}>\r\n        <div class=\"movie-info\">\r\n          <h3 class=\"movie-title\">${data[i].title}</h3>\r\n          <p>${data[i].release_date}</p>\r\n          <p>${hour}h ${minutes} min</p>\r\n        </div>\r\n        <div class=\"movie-buttons\">\r\n          <button class=\"like-button\" data-index-number=\"${i}\">Give a thumbs up</button>\r\n          <button class=\"comment-button\" data-index-number=\"${i}\">Comment</button>\r\n        </div>\r\n      </div>`;\r\n  }\r\n  _callClass_js__WEBPACK_IMPORTED_MODULE_2__.counter.getItems();\r\n  _callClass_js__WEBPACK_IMPORTED_MODULE_2__.counter.setItems();\r\n}\n\n//# sourceURL=webpack://web-template/./src/js/module/displaymovies.js?");

/***/ }),

/***/ "./src/js/module/elements.js":
/*!***********************************!*\
  !*** ./src/js/module/elements.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"body\": () => (/* binding */ body),\n/* harmony export */   \"imageContainer\": () => (/* binding */ imageContainer),\n/* harmony export */   \"listContainer\": () => (/* binding */ listContainer),\n/* harmony export */   \"modalBg\": () => (/* binding */ modalBg),\n/* harmony export */   \"modalContainer\": () => (/* binding */ modalContainer)\n/* harmony export */ });\nconst body = document.querySelector('body');\r\nconst listContainer = document.querySelector('.main-films');\r\nconst imageContainer = document.querySelector('.container-image');\r\nconst modalBg = document.querySelector('.modal-bg');\r\nconst modalContainer = document.querySelector('.modal-content');\n\n//# sourceURL=webpack://web-template/./src/js/module/elements.js?");

/***/ }),

/***/ "./src/js/module/likesRender.js":
/*!**************************************!*\
  !*** ./src/js/module/likesRender.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderLikes)\n/* harmony export */ });\n/* harmony import */ var _InvolmentApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolmentApi.js */ \"./src/js/module/InvolmentApi.js\");\n\r\n\r\nconst api = new _InvolmentApi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nasync function renderLikes() {\r\n  const moviesContainer = document.querySelector('.main-films');\r\n  moviesContainer.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    const { target } = e;\r\n    const movieId = target.getAttribute('data-index-number');\r\n    if (target.matches('.like-button')) {\r\n      const likes = await api.getLikes();\r\n      const likenum = likes.findIndex((item) => item.item_id === movieId);\r\n      target.innerHTML = `Liked: ${likes[likenum].likes}`;\r\n    }\r\n  });\r\n}\n\n//# sourceURL=webpack://web-template/./src/js/module/likesRender.js?");

/***/ }),

/***/ "./src/js/module/movieApi.js":
/*!***********************************!*\
  !*** ./src/js/module/movieApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieApi)\n/* harmony export */ });\nclass MovieApi {\r\n  // return all movies\r\n  static async fetchallmovies() {\r\n    const response = await fetch('https://ghibliapi.herokuapp.com/films');\r\n    const data = await response.json();\r\n    return data;\r\n  }\r\n\r\n  // return limited number of movies\r\n  static async fetchlimitedmovies(number) {\r\n    const response = await fetch('https://ghibliapi.herokuapp.com/films');\r\n    const data = await response.json();\r\n    return data.slice(0, number);\r\n  }\r\n\r\n  // return a movie based on it's number\r\n  static async fetchmovie(number) {\r\n    const response = await fetch('https://ghibliapi.herokuapp.com/films');\r\n    const data = await response.json();\r\n    const movie = data[number];\r\n    return movie;\r\n  }\r\n\r\n  // return all people\r\n  static async fetchpeople() {\r\n    const response = await fetch('https://ghibliapi.herokuapp.com/people');\r\n    const data = await response.json();\r\n    return data;\r\n  }\r\n\r\n  // return a person based on it's ID\r\n  static async fetchperson(id) {\r\n    const response = await fetch(`https://ghibliapi.herokuapp.com/people/${id}`);\r\n    const data = await response.json();\r\n    return data;\r\n  }\r\n}\n\n//# sourceURL=webpack://web-template/./src/js/module/movieApi.js?");

/***/ }),

/***/ "./src/js/module/movieCounter.js":
/*!***************************************!*\
  !*** ./src/js/module/movieCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ItemCounter)\n/* harmony export */ });\n// This is a module that counts the number of movies in the database\r\nclass ItemCounter {\r\n  constructor() {\r\n    this.items = 0;\r\n  }\r\n\r\n  // this function adds the number of movies in the database\r\n  addItems() {\r\n    return this.items + 1;\r\n  }\r\n\r\n  // this function gets the number of movies in the database\r\n  getItems() {\r\n    const count = document.querySelectorAll('.movie-container');\r\n    count.forEach(() => {\r\n      this.items = this.addItems();\r\n    });\r\n    return count.length;\r\n  }\r\n\r\n  setItems() {\r\n    document.querySelector('#moviecount').innerHTML = `Movies (${this.items})`;\r\n  }\r\n}\n\n//# sourceURL=webpack://web-template/./src/js/module/movieCounter.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a40f401eaafd86b0f089.png\";\n\n//# sourceURL=webpack://web-template/./src/images/logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/App.js"));
/******/ }
]);
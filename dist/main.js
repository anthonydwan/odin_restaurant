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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nhtml, body{\\n    height: 100vh;\\n    width: 100%;\\n    overflow: hidden;\\n    font-family: 'Catamaran', sans-serif;\\n}\\n\\n@keyframes leftdown {\\n    from {transform: translateX(10%) translateY(-10%)}\\n    to{transform: translateX(0) translateY(0);\\n        opacity: 1;}\\n}\\n\\n@keyframes leftdown15 {\\n    from {transform: translateX(15%) translateY(-15%)}\\n    to{transform: translateX(0) translateY(0);\\n        opacity: 1;}\\n}\\n\\n@keyframes leftdown5 {\\n    from {transform: translateX(5%) translateY(-5%)}\\n    to{transform: translateX(0) translateY(0);\\n        opacity: 1;}\\n}\\n\\n@keyframes leftup {\\n    from {transform: translateX(10%) translateY(10%)}\\n    to{transform: translateX(0) translateY(0);\\n        opacity: 1;}\\n}\\n\\n@keyframes leftup5 {\\n    from {transform: translateX(5%) translateY(5%)}\\n    to{transform: translateX(0) translateY(0);\\n        opacity: 1;}\\n}\\n\\n@keyframes rightdown {\\n    from {transform: translateX(-10%) translateY(-10%)}\\n    to{transform: translateX(0) translateY(0);\\n        opacity: 1;}\\n}\\n\\n@keyframes rightonly{\\n    from {transform: translateX(-10%)}\\n    to{transform: translateX(0);\\n        opacity: 1;}\\n}\\n\\n@keyframes rightup {\\n    from {transform: translateX(-10%) translateY(10%)}\\n    to{transform: translateX(0) translateY(0);\\n        opacity: 1;}\\n}\\n\\n@keyframes rightup5 {\\n    from {transform: translateX(-5%) translateY(2%)}\\n    to{transform: translateX(0) translateY(0);\\n        opacity: 1;}\\n}\\n\\n@keyframes downonly {\\n    from {transform: translateY(-10%)}\\n    to{transform: translateY(0);\\n        opacity: 1;}\\n}\\n\\nimg{\\n    z-index: 1;\\n}\\n\\n\\n#p1{\\n    position: absolute;\\n    width: 5vw;\\n    left: 70vw;\\n    top: 20vh;\\n    opacity: 0;\\n    animation: leftdown15 1s forwards ease;\\n}\\n\\n\\n#p2{\\n    position: absolute;\\n    width: 10vw;\\n    left: 60vw;\\n    top: 0;\\n    opacity: 0;\\n    overflow: hidden;\\n    animation: leftdown 1s forwards ease;\\n}\\n\\n\\n#p3{\\n    position: absolute;\\n    width: 12vw;\\n    right: 20vw;\\n    top: 50vh;\\n    opacity: 0;\\n    animation: leftup 1s forwards ease;\\n}\\n\\n#p4{\\n    position: absolute;\\n    height: 20vw;\\n    right: 0;\\n    top: 0;\\n    opacity: 0;\\n    animation: leftdown5 1s forwards ease;\\n}\\n\\n#p5{\\n    position: absolute;\\n    width: 19.5vw;\\n    right: 0;\\n    bottom: 0vh;\\n    opacity: 0;\\n    animation: leftup5 1s forwards ease;\\n}\\n\\n\\n#p6{\\n    position: absolute;\\n    width: 27.5vw;\\n    right: 15vw;\\n    bottom: 0;\\n    opacity: 0;\\n    animation: leftup 1s forwards ease;\\n}\\n\\n#p7{\\n    position: absolute;\\n    width: 15vw;\\n    left: 25vw;\\n    top: 30vh;\\n    opacity: 0;\\n    animation: rightonly 1s forwards ease;\\n}\\n\\n#p8{\\n    position: absolute;\\n    width: 15vw;\\n    top: 0;\\n    left: 25vw;\\n    opacity: 0;\\n    animation: rightdown 1s forwards ease;\\n}\\n\\n#p9{\\n    position: absolute;\\n    width: 10vw;\\n    left: 0;\\n    top: 0;\\n    opacity: 0;\\n    animation: rightdown 1s forwards ease;\\n}\\n\\n#p10{\\n    position: absolute;\\n    width: 18vw;\\n    left: 0;\\n    top: 20vh;\\n    opacity: 0;\\n    animation: rightonly 1s forwards ease;\\n}\\n\\n#p11{\\n    position: absolute;\\n    width: 20vw;\\n    left: 10vw;\\n    top: 0;\\n    opacity: 0;\\n    animation: rightdown 1s forwards ease;\\n}\\n\\n#p12{\\n    position: absolute;\\n    left:0;\\n    bottom: 0;\\n    width: 35vw;\\n    opacity: 0;\\n    animation: rightup5 1s forwards ease;\\n}\\n\\n#title{\\n    position: relative;\\n    height: 100px;\\n    width: 550px;\\n    margin: 30vh auto;\\n    font-size: 35px;\\n    text-align: center;\\n    z-index: 2;\\n}\\n\\n#title>h1{\\n    padding: 50px 0;\\n    font-weight: 1100;\\n    opacity: 0;\\n    animation: downonly 0.5s forwards ease 0.5s;\\n    font-family: 'Amaranth', sans-serif;\\n}\\n\\n#title>p{\\n    font-size: 20px;\\n    font-weight: 100;\\n    opacity: 0;\\n    animation: downonly 0.5s forwards ease 1s;\\n    color: grey;\\n}\\n\\n#buttonDiv{\\n    display: flex;\\n    justify-content: space-evenly;\\n}\\n\\n\\n#buttonDiv>button{\\n    font-size: 20px;\\n    height: 50px;\\n    width: 160px;\\n    border-radius: 30px;\\n    margin: 40px;\\n    border: 2px solid transparent;\\n    background-color: rgb(112, 214, 214);\\n    opacity: 0;\\n    animation: downonly 0.5s forwards ease 1.5s;\\n    cursor: pointer;\\n    transition: all 0.2s ease-in-out;\\n}\\n\\n#buttonDiv>button:hover{\\n    background-color: rgba(112, 214, 214, 0.63);\\n    border: 2px solid teal;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin_restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://odin_restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin_restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _p1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./p1.png */ \"./src/p1.png\");\n/* harmony import */ var _p2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./p2.png */ \"./src/p2.png\");\n/* harmony import */ var _p3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./p3.png */ \"./src/p3.png\");\n/* harmony import */ var _p4_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./p4.png */ \"./src/p4.png\");\n/* harmony import */ var _p5_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./p5.png */ \"./src/p5.png\");\n/* harmony import */ var _p6_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./p6.png */ \"./src/p6.png\");\n/* harmony import */ var _p7_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./p7.png */ \"./src/p7.png\");\n/* harmony import */ var _p8_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./p8.png */ \"./src/p8.png\");\n/* harmony import */ var _p9_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./p9.png */ \"./src/p9.png\");\n/* harmony import */ var _p10_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./p10.png */ \"./src/p10.png\");\n/* harmony import */ var _p11_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./p11.png */ \"./src/p11.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst homePage = (()=>{\n    \n    const content = document.querySelector(\"#content\")\n    const title = document.createElement(\"div\")\n    const name = document.createElement(\"h1\")\n    const description = document.createElement(\"p\")\n    const buttonDiv = document.createElement(\"div\")\n    const button1 = document.createElement(\"button\")\n    const button2 = document.createElement(\"button\")\n    const img1 = document.createElement(\"img\")\n    const img2 = document.createElement(\"img\")\n    const img3 = document.createElement(\"img\")\n    const img4 = document.createElement(\"img\")\n    const img5 = document.createElement(\"img\")\n    const img6 = document.createElement(\"img\")\n    const img7 = document.createElement(\"img\")\n    const img8 = document.createElement(\"img\")\n    const img9 = document.createElement(\"img\")\n    const img10 = document.createElement(\"img\")\n    const img11 = document.createElement(\"img\")\n    const img12 = document.createElement(\"img\")\n\n    img1.id = \"p1\"\n    img2.id = \"p2\"\n    img3.id = \"p3\"\n    img4.id = \"p4\"\n    img5.id = \"p5\"\n    img6.id = \"p6\"\n    img7.id = \"p7\"\n    img8.id = \"p8\"\n    img9.id = \"p9\"\n    img10.id = \"p10\"\n    img11.id = \"p11\"\n    img12.id = \"p12\"\n    \n    img1.src = _p1_png__WEBPACK_IMPORTED_MODULE_1__\n    img2.src = _p2_png__WEBPACK_IMPORTED_MODULE_2__\n    img3.src = _p3_png__WEBPACK_IMPORTED_MODULE_3__\n    img4.src = _p4_png__WEBPACK_IMPORTED_MODULE_4__\n    img5.src = _p5_png__WEBPACK_IMPORTED_MODULE_5__\n    img6.src = _p6_png__WEBPACK_IMPORTED_MODULE_6__\n    img7.src = _p7_png__WEBPACK_IMPORTED_MODULE_7__\n    img8.src = _p8_png__WEBPACK_IMPORTED_MODULE_8__\n    img9.src = _p9_png__WEBPACK_IMPORTED_MODULE_9__\n    img10.src = _p10_png__WEBPACK_IMPORTED_MODULE_10__\n    img11.src = _p11_png__WEBPACK_IMPORTED_MODULE_11__\n    img12.src = _p11_png__WEBPACK_IMPORTED_MODULE_11__\n\n    title.id = \"title\"\n    description.id = \"homeDescription\"\n    name.textContent = \"Subarasushi\"\n    button1.textContent = \"Menu\"\n    button2.textContent = \"Contact Us\"\n    description.textContent = \"Considered by many to be the most renowned sushi restaurant in the world, offering an exclusive sublime dining experience like no other.\"\n    buttonDiv.id = \"buttonDiv\"\n\n    buttonDiv.appendChild(button1)\n    buttonDiv.appendChild(button2)\n    title.appendChild(name)\n    title.appendChild(description)\n    title.append(buttonDiv)\n    content.appendChild(title)\n    for(img of imgs){\n        content.appendChild(img)\n    }\n})();\n\n\n\n\n\n//# sourceURL=webpack://odin_restaurant/./src/index.js?");

/***/ }),

/***/ "./src/p1.png":
/*!********************!*\
  !*** ./src/p1.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"198c8569d9f015f00e64.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p1.png?");

/***/ }),

/***/ "./src/p10.png":
/*!*********************!*\
  !*** ./src/p10.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f9a6eb84a7baec55ca5a.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p10.png?");

/***/ }),

/***/ "./src/p11.png":
/*!*********************!*\
  !*** ./src/p11.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bed02f7b0c415eecaf02.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p11.png?");

/***/ }),

/***/ "./src/p2.png":
/*!********************!*\
  !*** ./src/p2.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d43ab4c7d93d542e125a.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p2.png?");

/***/ }),

/***/ "./src/p3.png":
/*!********************!*\
  !*** ./src/p3.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"696fb99c5ad64479299c.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p3.png?");

/***/ }),

/***/ "./src/p4.png":
/*!********************!*\
  !*** ./src/p4.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"944fbc2341d1a1100b28.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p4.png?");

/***/ }),

/***/ "./src/p5.png":
/*!********************!*\
  !*** ./src/p5.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef0ddcd5eabc534889cf.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p5.png?");

/***/ }),

/***/ "./src/p6.png":
/*!********************!*\
  !*** ./src/p6.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fcee2c6154dc85c14c0c.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p6.png?");

/***/ }),

/***/ "./src/p7.png":
/*!********************!*\
  !*** ./src/p7.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"470075f6b677912b8a8c.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p7.png?");

/***/ }),

/***/ "./src/p8.png":
/*!********************!*\
  !*** ./src/p8.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d659b12097317a7541a0.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p8.png?");

/***/ }),

/***/ "./src/p9.png":
/*!********************!*\
  !*** ./src/p9.png ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"573ce45541a3279baf91.png\";\n\n//# sourceURL=webpack://odin_restaurant/./src/p9.png?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TYPlayer"] = factory();
	else
		root["TYPlayer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, main, scripts, repository, keywords, author, license, bugs, homepage, devDependencies, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"name\\\":\\\"typlayer\\\",\\\"version\\\":\\\"0.0.1\\\",\\\"description\\\":\\\"html5 video 播放器\\\",\\\"main\\\":\\\"src/index.js\\\",\\\"scripts\\\":{\\\"dev\\\":\\\"cross-env NODE_ENV=development webpack --watch --progress --config build/webpack.config.js\\\",\\\"build\\\":\\\"cross-env NODE_ENV=production webpack --progress --config build/webpack.config.js\\\",\\\"build:dev\\\":\\\"cross-env NODE_ENV=development webpack --progress --config build/webpack.config.js\\\"},\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"git+https://github.com/tulies/typlayer.git\\\"},\\\"keywords\\\":[\\\"video\\\",\\\"player\\\",\\\"html5\\\"],\\\"author\\\":\\\"王嘉炀\\\",\\\"license\\\":\\\"ISC\\\",\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/tulies/typlayer/issues\\\"},\\\"homepage\\\":\\\"https://github.com/tulies/typlayer#readme\\\",\\\"devDependencies\\\":{\\\"@babel/cli\\\":\\\"^7.6.2\\\",\\\"@babel/core\\\":\\\"^7.6.2\\\",\\\"@babel/plugin-transform-runtime\\\":\\\"^7.6.2\\\",\\\"@babel/preset-env\\\":\\\"^7.6.2\\\",\\\"babel-eslint\\\":\\\"^10.0.3\\\",\\\"babel-loader\\\":\\\"^8.0.6\\\",\\\"clean-webpack-plugin\\\":\\\"^3.0.0\\\",\\\"cross-env\\\":\\\"^6.0.0\\\",\\\"eslint\\\":\\\"^6.4.0\\\",\\\"eslint-config-standard\\\":\\\"^14.1.0\\\",\\\"eslint-loader\\\":\\\"^3.0.0\\\",\\\"eslint-plugin-import\\\":\\\"^2.18.2\\\",\\\"eslint-plugin-node\\\":\\\"^10.0.0\\\",\\\"eslint-plugin-promise\\\":\\\"^4.2.1\\\",\\\"eslint-plugin-standard\\\":\\\"^4.0.1\\\",\\\"webpack\\\":\\\"^4.39.2\\\",\\\"webpack-cli\\\":\\\"^3.3.9\\\",\\\"webpack-dev-server\\\":\\\"^3.8.1\\\",\\\"webpack-merge\\\":\\\"^4.2.2\\\"}}\");\n\n//# sourceURL=webpack://TYPlayer/./package.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ \"./package.json\", 1);\n\nclass TYPlayer {\n  constructor (id, options, ready) {\n    console.log('初始化完成')\n  }\n\n  init () {\n    console.log('init')\n  }\n\n  static instance (id, options, ready) {\n    return new TYPlayer(id, options, ready)\n  }\n}\nTYPlayer.VERSION = _package_json__WEBPACK_IMPORTED_MODULE_0__[\"version\"]\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TYPlayer);\n\n\n//# sourceURL=webpack://TYPlayer/./src/index.js?");

/***/ })

/******/ })["default"];
});
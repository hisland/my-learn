/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _a = __webpack_require__(1);

	var x = _a.b;

	console.log(1, (0, _a.b)(123));
	console.log(1, x(123));
	console.log(1, (0, _a.b2)(123));
	console.log(1, (0, _a.c)(123));

	setTimeout(function () {
	  console.log(2, (0, _a.b)(123)); // 基于es6的,引用自动更正了
	  console.log(2, x(123));
	  console.log(2, (0, _a.b2)(123));
	  console.log(2, (0, _a.c)(123)); // 手工设置了exports的也正确了
	}, 20);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function a(val) {
	  return 'a:' + val;
	}

	var b = function b(val) {
	  return 'b: ' + a(val);
	};
	var c = function c(val) {
	  return 'c: ' + a(val);
	};

	setTimeout(function () {
	  exports.b = b = function (val) {
	    // es6会自动设置 exports, 查看webpack.out.js
	    return 'b2: ' + a(val);
	  };
	  exports.c = c = function (val) {
	    // cjs导出需要手工设置 exports
	    return 'c2: ' + a(val);
	  };
	}, 10);

	exports.b = b;

	exports.b2 = b;
	exports.c = c;

/***/ }
/******/ ]);
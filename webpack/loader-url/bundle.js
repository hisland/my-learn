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

	
	var a = __webpack_require__(1);

	console.log(a); // base64


	var a = __webpack_require__(2); // like file-loader



/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "data:application/javascript;base64,CnZhciBpYW1HbG9iYWwgPSAzMzM7CmlhbUdsb2JhbDIgPSA0NDQ7CgpleHBvcnRzLmFhID0gMzsK"

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "10fe18d937094a551f4709fb6ba3d018.js";

/***/ }
/******/ ]);
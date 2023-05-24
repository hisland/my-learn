(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./app1/main.js":
/*!**********************!*\
  !*** ./app1/main.js ***!
  \**********************/
/*! exports provided: bootstrap, mount, unmount, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mount", function() { return mount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmount", function() { return unmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);


console.log(1)
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
async function bootstrap() {
  console.log('react app bootstraped')
}
/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
async function mount(props) {
  console.log(props)
  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.render(
    React.createElement('div', null, `Hello you`),
    document.getElementById('react15Root')
  )
}
/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
async function unmount() {
  react_dom__WEBPACK_IMPORTED_MODULE_0___default.a.unmountComponentAtNode(document.getElementById('react15Root'))
}
/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
async function update(props) {
  console.log('update props', props)
}


/***/ })

}]);
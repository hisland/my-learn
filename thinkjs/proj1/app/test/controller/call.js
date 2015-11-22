'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


  /**
   * index action
   * @return {Promise} []
   */_default.prototype.
  __call = function __call() {
    console.log('__call(): 没有匹配的action就执行我了');
    this.end('__call(): 没有匹配的action就执行我了');};_default.prototype.

  initAction = function initAction() {
    this.end('__call(): 匹配initAction, __call没有执行');};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];
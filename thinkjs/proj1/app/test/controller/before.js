'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


  /**
   * index action
   * @return {Promise} []
   */_default.prototype.
  __before = function __before() {
    console.log('__before(): do something');};_default.prototype.

  __after = function __after() {
    console.log('__after(): do something');};_default.prototype.

  initAction = function initAction() {
    this.end('__before(), __after() 里面做一些事情');};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];
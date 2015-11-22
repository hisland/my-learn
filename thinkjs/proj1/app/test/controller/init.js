'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}


  /**
   * index action
   * @return {Promise} []
   */_default.prototype.
  init = function init(http) {
    _Base.prototype.init.call(this, http);
    console.log('需要手工首先执行 super.init(http);, 后面的逻辑才能正常');
    console.log(333);};_default.prototype.

  initAction = function initAction() {
    this.end('init(http) 被自动调用了');};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];
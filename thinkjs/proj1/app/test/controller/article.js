'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _baseJs = require(

'./base.js');var _baseJs2 = _interopRequireDefault(_baseJs);var _default = (function (_Base) {_inherits(_default, _Base);function _default() {_classCallCheck(this, _default);_Base.apply(this, arguments);}_default.prototype.


  detailAction = function detailAction() {
    this.end('i am article: ' + this.get('id'));};_default.prototype.

  detail2Action = function detail2Action() {
    var year = this.get('year');
    var month = this.get('month');
    this.end('i am article2: year:' + year + ', month: ' + month);};_default.prototype.

  detail3Action = function detail3Action() {
    this.end('i am article3: static');};return _default;})(_baseJs2['default']);exports['default'] = _default;module.exports = exports['default'];
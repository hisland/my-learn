'use strict';
/**
 * logic
 * @param  {} []
 * @return {}     []
 */var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];exports.__esModule = true;var _default = (function (_think$logic$base) {_inherits(_default, _think$logic$base);function _default() {_classCallCheck(this, _default);_think$logic$base.apply(this, arguments);}

  /**
   * index action logic
   * @return {} []
   */_default.prototype.
  indexAction = function indexAction() {
    console.log('index logic: ');};_default.prototype.


  __before = function __before() {
    console.log('index logic: __before');};_default.prototype.

  __after = function __after() {
    console.log('index logic: __after');};return _default;})(think.logic.base);exports['default'] = _default;module.exports = exports['default'];
"use strict";　　
var f = function() {
  return arguments.callee;
};　　
f(); // 报错

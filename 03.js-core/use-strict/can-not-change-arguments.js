"use strict";　　
arguments++; // 语法错误
　　
var obj = {set p(arguments) {}
}; // 语法错误
　　
try {} catch (arguments) {} // 语法错误
　　
function arguments() {} // 语法错误
  　　
var f = new Function("arguments", "'use strict'; return 17;"); // 语法错误

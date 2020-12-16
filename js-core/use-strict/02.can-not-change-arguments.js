'use strict'
arguments++ // 语法错误
const obj = { set p(arguments) {} } // 语法错误
try {
} catch (arguments) {} // 语法错误
function arguments() {} // 语法错误
const ff = new Function('arguments', "'use strict'; return 17;") // 语法错误

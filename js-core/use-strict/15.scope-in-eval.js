// 正常模式下，Javascript语言有两种变量作用域（scope）：全局作用域和函数作用域。
// 严格模式创设了第三种作用域：eval作用域。

// 正常模式下，eval语句的作用域，取决于它处于全局作用域，还是处于函数作用域。
// 严格模式下，eval语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于eval内部。
　　
"use strict";　　
var xx = 2;　　
console.info(eval("var xx = 5; xx")); // 5
　　
console.info(xx); // 2

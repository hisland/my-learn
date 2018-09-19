## 注意

* 现在的测试只是测试了es6的语法, 实际运行还是基于 babel 转换成了 commonjs 在运行
* 可能跟以后真正的es6实现有差异, 比如 change-other-module 在b模块修改了a模块的内容
* commonjs允许动态加载, es6模块不允许(stackoverflow上说的)


## 大概的一些理解

deault
  export-expression.js
  export-deault-twice.js 后面的覆盖前面的
  export-name-as.js

named
  export-varable-as-mix-list.js
  export-var-define.js
  export-let-define.js
  export-const-define.js

from
  all.js
  name.js
  name-as.js

## 一些注意

* import {var} from 'module' 不可以对var赋值,它是只读的
* export {var}, 修改var变量的值, import 那边能获取, 它相当于读取 exports.var
* export {var}, var是对象时, import那边能修改此对象的属性
* 不可以 import {name}, * as ns from 'module', 没有这个语法
* a.js: export {aa}
  b.js: import {aa} from './a'; export {aa};
  c.js: import {aa} from './b';
  这种串联情况, a里面的aa修改后, b里面能读取到, c里面不能读取, 因为b里面的export相当于 exports.aa = _a.aa; 进行了一次值传递
* export {'aa'} 没有这个语法
* export * from 'module' 会忽略掉 module 的 default
* 没有 import * from 'module' 这个语法
* import 'module' Import an entire module for side effects only, without importing any bindings.


## 思考

* 仔细观察了下, export的好像是个表达式, import语法类似解构
* import 产生的 副作用 有些什么,还不清楚

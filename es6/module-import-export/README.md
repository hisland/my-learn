
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
* export {var}, var是对象时, import那边都修改此对象的属性
* 不可以 import {name}, * as ns from 'module', 没有这个语法
* a.js: export {aa}
  b.js: import {aa} from './a'; export {aa};
  c.js: import {aa} from './b';
  这种串联情况, a里面的aa修改后, b里面能读取到, c里面不能读取, 因为b里面的export相当于 exports.aa = _a.aa; 进行了一次值传递
* export {'aa'} 没有这个语法

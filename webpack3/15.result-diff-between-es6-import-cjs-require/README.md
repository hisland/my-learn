## 查看 dist 输出, 理解下面的2个点

* es6 import 会让被引用的模块先执行, 并不是按正常的流程, 可能是因为模块间 不相关
* cjs require 会按实际代码顺序执行, 可能是因为会有副作用
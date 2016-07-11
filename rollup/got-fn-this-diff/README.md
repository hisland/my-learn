## rollup webpack __esModule 区别

对于代码 `import some from './a'` 中的模块 a , some 的值不同

* 有 `exports.__esModule = true;` 并且有 `exports.default = 'something';`

  * rollup, webpack 一致, 都是 default

* 有 `exports.__esModule = true;` 无 `exports.default = 'something';`

  * rollup 是 a
  * webpack 是 undefined

* 无 `exports.__esModule = true;` 有 `exports.default = 'something';`

  * rollup 是 default
  * webpack 是 a

* 无 `exports.__esModule = true;` 无 `exports.default = 'something';`

  * rollup, webpack 一致, 都是 a


从 xx.out.js 来看

* rollup 判断的是 default 是否存在, 存在则返回 a.default , 否则返回 a
* webpack 判断的是 __esModule 是否存在, 存在则返回 `ret = a` , 否则返回 `ret = {default: a}`, 并最终读取 `ret.default`


对于 `import {halo} from './a'`

  * 上述4种情况 rollup, webpack 一致, 都是 a.halo




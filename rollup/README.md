## 一些注意点

* tree-shaking 只作用于 es6
* `NODE_MODULES`如果提供了 es6 版本, 需要在 `package.json` 里面写上 `"jsnext:main": "PATH-TO-FILE"` 区别于`NODE_MODULES`自己的`main`

* `cjs` 依赖打入 `bundle` 会被整体打入, 不会 tree-shaking

* 如果项目使用到 `cjs` 格式的 `FILE` , 需要使用插件 `rollup-plugin-commonjs` 才能正常打入 `bundle`
* 如果项目使用到 `NODE_MODULES`, 会被认为是外部依赖, 有提示 `Treating 'lodash' as external dependency` 不会打入 `bundle`
* 如果想把 `cjs` 格式的 `NODE_MODULES` , 需要使用插件 `rollup-plugin-node-resolve` 和 `rollup-plugin-commonjs` 才能正常打入 `bundle`

* 原 `rollup-plugin-npm` 现已经更名为 `rollup-plugin-node-resolve`


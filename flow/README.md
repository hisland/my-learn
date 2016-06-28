## 学习点

* `// @flow` `/* @flow */` 一样的
* 实测, 只要在文件开头的注释里面有 @flow 就能开启 check, 查看 simple6
* 开启标志前有[空行]也[行], 有其它注释[不行]
* 文件是否需要检查在于行首是否添加 `// @flow` , 不是根据参数来指定哪些文件
* `flow check --all` 检查全部文件, 谨慎使用
* `/* @flow weak */` 未 annotate 的, 认为是 any , 宽松一些

* 模块化, check 添加有 @flow 标记的模块, 查看 simple6

* 添加了 annotate 如 :string 的文件, 用 babel 加上 babel-plugin transform-flow-strip-types 来转换成纯js, 否则不能直接运行

* ignore 要加上 <PROJECT_ROOT> 查看 simple9

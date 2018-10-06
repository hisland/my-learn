# 运行方式

在 typescript 目录, 打开 2 个 shell 窗口

1. 执行监听编译 ts -> js

```
tsc -w --outFile out.js --experimentalDecorators -t ES2015 09.decorator/temp.ts
```

2. 执行 js

```
node-dev out.js
```

2 者都是 watch 模式, 修改即可看到结果


# 或者使用 gulp

* 在 typescript 目录, 执行 `./node_modules/.bin/gulp --gulpfile z-gulpfile.js`
* 随意修改子目录的 .ts 文件, 会自动监听并执行


# 注意事项

* tsconfig.json 不会作用于指定了 input-file 的情况

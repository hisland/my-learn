# wasm-pack-template
a template for starting a rust-wasm project to be used with wasm-pack

# 使用方法

* `rustup default beta`


* 在当前目录执行 `wasm-pack build` 生成 pkg 目录
* 在 js 目录 执行 `./node_modules/.bin/webpack -w` 自动打包到 dist 目录
* 用 http-server 在浏览器访问 `js/index.html` 查看结果

* 可以考虑用 gulp 监听 rs,js 修改自动打包出结果

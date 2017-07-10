
## 检查的是 html 里面的 js, 而不是检查 html 文件本身

## eslint 默认的 `--ext .js`, 会自动忽略其它文件, 下面的方法可以要求检测其它文件

* 使用文件全路径
* command 参数修改 --ext .html 只检查 .html, 不会检查 .js
* command 参数修改 --ext .html --ext .js
* command 参数修改 --ext .html,.js

## 使用 eslint-plugin-html

* 安装 `eslint-plugin-html`
* 由于是本地安装, 需要执行 `../node_modules/.bin/eslint some.html`
* 由于是本地安装, 需要执行 `../node_modules/.bin/eslint some.vue`


vscode 只打开当前目录
3 个是模块, 不会提示 命名冲突

可以用 import as 语法来重命名相同的名字, 避免在一个文件里面产生相同的名字

`tsc --module amd --outFile out.js cc.ts`
会将 import 的内容一起打包进入 out.js
提示 module 必须指定 `--module amd` 或者 `--module system`

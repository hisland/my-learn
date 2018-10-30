
vscode 打开 `aa.ts bb.ts cc.ts`,
3 个不是模块, 不会提示 命名冲突

`tsc --outFile out.js aa.ts bb.ts bb.ts`
提示 module 必须指定 `--module amd` 或者 `--module system`

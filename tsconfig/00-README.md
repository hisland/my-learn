## 文档

- https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

### Using tsconfig.json or jsconfig.json

- 执行 `tsc` 不指定 input-files, 会从当前目录递归搜索 tsconfig.json
- 执行 `tsc` 指定 input-files, tsconfig.json 会被忽略

- By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
- By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.
- When input files are specified on the command line, tsconfig.json files are ignored.

## 理解

- `tsc` 使用 tsconfig.json 配置时, 不会 bundle 文件
- files 引入的文件及相关的 import, 会自动带入

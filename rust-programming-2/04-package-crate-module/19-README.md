```
crate 是一个二进制项或者库

包
    至少包含一个 crate, 不管 二进制或是库
    二进制 crate 可以多个
    库 crate 只能有一个
```

`cargo new NAME` 生成一个 project, 相当于一个包, 里面含有 Cargo.toml 文件

约定 src/main.rs 会生成包同名的二进制可执行文件
约定 src/lib.rs 会生成包同名的库文件
约定 src/bin 目录下, 会生成更多的二进制可执行文件




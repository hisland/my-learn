1. 在 src 目录下 `javac Root.java` 会递归搜索 import 的 java 文件并编译, 放到当前目录下
   也要在 src 目录下执行 `java Root`
```
└── src/
    ├── Root.class
    ├── Root.java
    ├── foo/
    │   ├── Foo.class
    │   └── Foo.java
    └── what/
        ├── What.class
        └── What.java
```
1. 在 src 目录下 `javac -d ../out Root.java` 会递归搜索 import 的 java 文件并编译, 并按层次结构放到 ../out 目录里面
   要在 out 目录下执行 `java Root` 才能正常输出, 因为 `java` 命令行默认的 `classpath` 是 `.`
   也可以在根目录用 `java -cp out Root` 执行, 将 `classpath` 改为 `out`
```
├── out/
│   ├── Root.class
│   ├── foo/
│   │   └── Foo.class
│   └── what/
│       └── What.class
└── src/
    ├── Root.java
    ├── foo/
    │   └── Foo.java
    └── what/
        └── What.java
```
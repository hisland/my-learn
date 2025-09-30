1. `javac Hello.java` 得到 `Hello.class`
1. `javac Foo.java` 得到 `Foo.class`
2. `jar -cvfe dd.jar Foo Foo.class Hello.class` 产生 `dd.jar` 指定 Foo 是入口
3. `java -jar dd.jar` 执行有输出 Foo 是入口

`java -cp dd.jar Hello` 作为 classpath 调用 Hello 正常
`java -cp dd.jar Foo` 作为 classpath 调用 Foo 正常

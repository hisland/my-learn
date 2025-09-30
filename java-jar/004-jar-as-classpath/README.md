1. `javac Hello.java` 得到 `Hello.class`
1. `javac Foo.java` 得到 `Foo.class`
2. `jar -cvf cc.jar Foo.class Hello.class` 产生 `cc.jar` 里面会自动生成 META-INF/MANIFEST.MF
3. `java -cp cc.jar Foo` 执行有输出
3. `java -cp cc.jar Hello` 执行有输出


`jar -cvfe cc.jar Foo Foo.class Hello.class`  指定文件名是 cc.jar 指定入口class是 Foo, 注意不能是 Foo.class

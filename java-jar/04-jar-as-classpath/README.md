1. `javac Hello.java` 得到 `Hello.class`
1. `javac Foo.java` 得到 `Foo.class`
2. `jar -cvf cc.jar Foo.class Hello.class` 产生 `cc.jar`
3. `java -cp cc.jar Foo` 执行有输出
3. `java -cp cc.jar Hello` 执行有输出

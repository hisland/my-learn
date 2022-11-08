1. `javac what/HelloWorld.java` 得到 `what/HelloWorld.class`
1. `javac sub1/sub2/HelloWorld.java` 得到 `sub1/sub2/HelloWorld.class`

`java what.HelloWorld` 这样可以调用
`java what/HelloWorld` 这样也可以调用

`java sub1/sub2/HelloWorld` 这样可以调用
`java sub1.sub2.HelloWorld` 这样也可以调用

java 文件的 package 要和路径对应, 不然找不到

复制 05 生成的 `dd.jar` 到当前目录
`javac -cp dd.jar Hello.java` 得到 `Hello.class`
`jar cvfe hello.jar Hello Hello.class` 得到 `hello.jar`
`java -jar hello.jar` 报错找不到 Foo

解压 `hello.jar`, 修改 `META-INF/MANIFEST.MF` 增加 `Class-Path: dd.jar`
`jar cvfm hello.jar META-INF/MANIFEST.MF Hello.class` 重新生成 `hello.jar`
`java -jar hello.jar` 正常执行了

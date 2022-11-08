1. `javac Hello.java` 得到 `Hello.class`
2. `jar -cvfm bb.jar META-INF/MANIFEST.MF Hello.class` 产生 `bb.jar`
3. `java -jar bb.jar` 执行有输出

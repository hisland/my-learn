java -cp target/pkg2-1.0.0.jar hdl.pkg2.Bar
这样执行报错
hd2 pkg1Hello, Maven!
Exception in thread "main" java.lang.NoClassDefFoundError: hdl/pkg1/HelloWorld
        at hdl.pkg2.Bar.main(Bar.java:8)
Caused by: java.lang.ClassNotFoundException: hdl.pkg1.HelloWorld
        at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:641)
        at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:188)
        at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:525)
        ... 1 more


java -cp target/pkg2-1.0.0.jar:../02/target/pkg1-1.0.1.jar hdl.pkg2.Bar
这样执行正常

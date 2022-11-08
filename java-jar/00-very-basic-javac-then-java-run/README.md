1. `javac HelloWorld.java` 得到 `HelloWorld.class`
2. `java HelloWorld` 执行, 看到输出

注意：给虚拟机传递的参数 Hello 是我们定义的类名，虚拟机自动查找对应的 class 文件并执行。
java11 支持 `java HelloWorld.java` 直接执行

一个 Java 源码只能定义一个 public 类型的 class，并且 class 名称和文件名要完全一致；

使用 javac 可以将.java 源码编译成.class 字节码；

使用 java 可以运行一个已编译的 Java 程序，参数是类名。

没有设置系统环境变量，也没有传入-cp参数，那么JVM默认的classpath为.，即当前目录：
命令告诉JVM只在当前目录搜索HelloWorld.class
javac mod2/pkg2/Foo.java

因为依赖不对, javac 失败

mod2/pkg2/Foo.java:3: error: package pkg1 does not exist
import pkg1.Hello;
           ^
mod2/pkg2/Foo.java:8: error: cannot find symbol
       Hello.main(args);
       ^
  symbol:   variable Hello
  location: class Foo
2 errors


## 

javac -cp mod1 mod2/pkg2/Foo.java
这样指定 classpath 之后, 才能成功


##

java -cp mod2 pkg2.Foo  失败, mod2依赖 mod1, 没有在 cp列表

java -cp mod1:mod2 pkg2.Foo  这样能正常运行, mod2依赖 mod1, 并出现在了 cp列表

java -cp mod1 pkg1.Hello 正常, 因为不需要 mod2

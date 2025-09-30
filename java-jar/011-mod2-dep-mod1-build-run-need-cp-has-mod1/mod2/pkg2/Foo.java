package pkg2;

import pkg1.Hello;

public class Foo {
    public static void main(String[] args) {
       System.out.println("pkg2.Foo main");
       Hello.main(args);
    }
}

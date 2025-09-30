package hdl.pkg2;

import hdl.pkg1.HelloWorld;

public class Bar {
    public static void main(String[] args) {
        System.out.println("hd2 pkg1Hello, Maven!");
        // System.out.println(HelloWorld.class);
        HelloWorld helloWorld = new HelloWorld();
        helloWorld.foo();
    }
}

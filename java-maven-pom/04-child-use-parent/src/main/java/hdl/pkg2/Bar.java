package hdl.pkg4;

import hdl.pkg1.HelloWorld;

public class Bar {
    public static void main(String[] args) {
        System.out.println("pkg4 pkg1Hello, Maven!");
        // System.out.println(HelloWorld.class);
        HelloWorld helloWorld = new HelloWorld();
        helloWorld.foo();
    }
}

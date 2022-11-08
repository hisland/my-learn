import java.util.ArrayList;
import java.util.Arrays;

import foo.Foo;
import what.What;

public class Root {
    public static void main(String[] args) {
        System.out.println("hello what");
        String[] arr = { "hello1", "hello2" };
        Foo.main(arr);
        What.main(arr);
    }
}
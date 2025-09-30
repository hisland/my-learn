public class Hello2 {
    public static void main(String[] args) {
       System.getProperties().forEach((k,v) -> System.out.println(k + " = " + v));
    }
}

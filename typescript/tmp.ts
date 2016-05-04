class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

var greeter1: Greeter = new Greeter(); // greeter1是实例
console.log(greeter1.greet()); // Hello, there

var greeterMaker: typeof Greeter = Greeter; // greeterMaker是类, greeterMaker,Greeter都指向同一个类
greeterMaker.standardGreeting = "Hey there!";
var greeter2:Greeter = new greeterMaker(); // greeterMaker的instance可以直接用 Greeter 指定, 两者互换
console.log(greeter2.greet()); // Hey there!

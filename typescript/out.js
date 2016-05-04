var Greeter = (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
})();
var greeter1 = new Greeter(); // greeter1是实例
console.log(greeter1.greet()); // Hello, there
var greeterMaker = Greeter; // greeterMaker是类, greeterMaker,Greeter都指向同一个类
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker(); // greeterMaker的instance可以直接用 Greeter 指定, 两者互换
console.log(greeter2.greet()); // Hey there!

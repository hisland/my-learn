// interface ClockInterface {
//     new (hour: number, minute: number); // new 指出 constructor, 它属于static side
// }

// class Clock implements ClockInterface  { // constructor只检查instance side, 检查不了 constructor 报错
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }




interface ClockStatic {
    new (hour: number, minute: number);
}

class Clock  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

var cs: ClockStatic = Clock; // 定义cs为 ClockStatic, 将Clock赋给 cs, 能正确检查 constructor
var newClock = new cs(7, 30);





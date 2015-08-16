interface ClockInterface{
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements ClockInterface{
  currentTime: Date;
  setTime(d: Date){
    this.currentTime = d;
  }
  constructor(h: number, m: number){}
}


interface ClockInterface2 {
    new (hour: number, minute: number);
}

class Clock2 implements ClockInterface2  { // 这样是要实现 ClockInterface2, 但是不行
    currentTime: Date;
    constructor(h: number, m: number) { }
}


interface ClockStatic {
    new (hour: number, minute: number);
}

class Clock3  {
    currentTime: Date;
    constructor(h: number, m: number) { }
}

var cs: ClockStatic = Clock3; // 这样才可以
var newClock = new cs(7, 30);

interface Counter{
  (start: number): string; // 函数调用签名
  interval: number; // 属性签名
  reset(): void; // 方法签名
}

var cc = <Counter>function(start){ // 这里并没有强制函数立即有 interval, reset
  console.log(start);
  return '';
}

// 这2个即使没有, 也不会报错, 有点像 optional 属性
cc.interval = 3;
cc.reset = function(){
  console.log(this.interval);
}

cc(10);
cc.reset();

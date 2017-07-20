interface Counter{
  (start: number): string; // 函数调用签名
  interval: number; // 属性签名
  reset(): void; // 方法签名
}

var cc = <Counter>function(start){
  console.log(start);
  return '';
}
cc.interval = 3;
cc.reset = function(){
  console.log(this.interval);
}

cc(10);
cc.reset();

interface Counter{
  (start: number): string; // 函数调用签名
  interval: number; // 属性签名
  reset(): void; // 方法签名
}

var c = <Counter>function(start){
  console.log(start);
  return '';
}
c.interval = 3;
c.reset = function(){
  console.log(this.interval);
}

c(10);
c.reset();

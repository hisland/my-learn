interface Counter{
  (start: number): string;
  interval: number;
  reset(): void;
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

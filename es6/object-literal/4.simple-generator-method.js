// generator 简写

var obj = {
  * m(){
    yield 'hello world';
  }
}

var it = obj.m();
console.log(it.next());

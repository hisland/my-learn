function test(){
  var k = {
    a: 1
  }
  this.god = 'cc';
  return k;
}

var a  = test();
var b =  new test();

console.log('test返回了值,此时new操作相当于普通函数调用!');
console.log(a);
console.log(b);


function test2(){
  var k = {
    a: 1
  }
  this.god = 'cc';
}

var a  = test2();
var b =  new test2();

console.log('\n\ntest2没有返回值,此时new生成新的对象,并且类型是test2');
console.log(a);
console.log(b);
console.log('a instanceof test2', a instanceof test2);
console.log('b instanceof test2', b instanceof test2);


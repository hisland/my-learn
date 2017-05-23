function test(){
  var k = {
    a: 1
  }
  this.god = 'cc';
  console.log('test-this-is: ', this)
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


function aa(){
  this.god = 1;
  return 3
  this.bb = 2; // 此行被忽略了
}

var b = new aa
console.log(b); // a { god: 1 } new 函数里面 return 原始值, 还是new生成的新对象是返回值

function aa2(){
  this.god = 1;
  return {some:1}
  this.bb = 2; // 此行被忽略了
}

var b = new aa2
console.log(b); // { some: 1 } new 函数里面 return 对象, 此对象作为返回值

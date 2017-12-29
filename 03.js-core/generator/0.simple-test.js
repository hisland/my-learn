function* quips(name){
  console.log('start');
  yield 'hello ' + name + ' !';
  yield 'welcome here!';
  if (name === 'god') {
    yield 'your name is: ' + name + ', that is cool!';
  }
  yield 'bye bye!';
}

var iter = quips('god');
console.log(iter);
var tt = iter.next();
console.log(tt);
var tt = iter.next();
console.log(tt);
var tt = iter.next();
console.log(tt);
var tt = iter.next();
console.log(tt);
var tt = iter.next();
console.log(tt);


for(var v of range(0, 3)){
  console.log('this value now is ', v);
}
function* range(start, stop){
  for(; start < stop; start++){
    yield start;
  }
}

var tt = range(2, 4);
console.log(tt.next());
console.log(tt.next());
console.log(tt.next());

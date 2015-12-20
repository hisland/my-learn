var list = ['god', 'say', 4, 'is', true];
for(var v of list){
	console.log(v);
}


var str = 'hello baby';
for(var v of str){
  console.log(v);
}

console.log('--解构 map-----');
var a = new Map();
a.set('a', 'bbb')
a.set('b', 'ddd')
for(var [k, v] of a){
  console.log(k, v);
}

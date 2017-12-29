// 遍历 数组
var list = ['god', 'say', 4, 'is', true];
for(var v of list){
	console.log(v);
}

// 遍历 字符串
var str = 'hello baby';
for(var v of str){
  console.log(v);
}

// 用于 解构 map
var a = new Map();
a.set('a', 'bbb')
a.set('b', 'ddd')
for(let [k, v] of a){
  console.log(k, v);
}

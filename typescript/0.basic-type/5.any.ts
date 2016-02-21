var v: any = 4;
console.log(v);
v = 'god';
console.log(v);
v = true;
console.log(v);

// 不指定类型, 类型是 初始化值的类型
// 查看 http://www.typescriptlang.org/Handbook#type-inference 
var a = 3;
console.log(a);
a='god'; // 这里编译报错, 但是能生成js
console.log(a);


var list: any[] = [1, 'god', true, 'cc'];
console.log(list);
list[1] = 1000;
console.log(list);

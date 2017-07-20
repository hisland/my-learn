var vv: any = 4;
console.log(vv);
vv = 'god';
console.log(vv);
vv = true;
console.log(vv);

// 不指定类型, 类型是 初始化值的类型
// 查看 http://www.typescriptlang.org/Handbook#type-inference 
var aa = 3;
console.log(aa);
aa='god'; // 这里编译报错, 但是能生成js
console.log(aa);


var list: any[] = [1, 'god', true, 'cc'];
console.log(list);
list[1] = 1000;
console.log(list);

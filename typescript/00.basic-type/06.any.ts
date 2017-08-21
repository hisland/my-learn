// 就像普通js声明一样随便用, 不会报错
var vv: any = 4;
console.log(vv);
vv = 'god';
console.log(vv);
vv = true;
console.log(vv);

// 不指定类型, 类型是 初始化值的类型
// 查看 http://www.typescriptlang.org/Handbook#type-inference
var aa = 3; // 这种是类型推断, 不是any类型
console.log(aa);
aa='god'; // 这里编译报错, 但是能生成js
console.log(aa);


var list: any[] = [1, 'god', true, 'cc'];
console.log(list);
list[1] = 1000;
console.log(list);

// any 和  Object 不一样
var bb1: any = 4;
var bb2: Object = 4;
console.log(bb1.toFixed(2)) // ok
console.log(bb2.toFixed(2)) // error

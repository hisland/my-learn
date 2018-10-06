enum Color1 { Red, Green, Blue }; // 编号默认从 0 开始

let c1: Color1 = Color1.Green;
console.log(c1); // 1

enum Color2 { Red = 1, Green, Blue }; // 从 1 开始

let c2: Color2 = Color2.Green;
console.log(c2); // 2

enum Color3 { Red = 1, Green = 2, Blue = 4 }; // 每个有自己的值

let c3: Color3 = Color3.Blue;
console.log(c3); // 4

let bbq: string = Color3[4]; // value 反向得到 key
console.log(bbq); // Blue

console.log(Color3) // 查看输出, 是一个key,value都作为key的map

console.log(Color3[5]) // undefined

// key 必须是关键字, value 必须是 数字
// enum Color4 { Red = 'Blue', 3 = 'Green', Blue = 4 };

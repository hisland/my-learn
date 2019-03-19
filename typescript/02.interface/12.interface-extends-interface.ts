interface Shape {
  color: string
}

interface Square extends Shape {
  // 继承自 Shape
  length: number
}

var ss = <Square>{}

ss.color = 'red'
ss.length = 4
// ss.god = 3; // Property 'god' does not exist on type 'Square'

interface PenStroke {
  // length: string; // Square 已经有 length: number 了
  weight: number
}

// 多继承
// 如果继承的多个父接口有相同key, 必须类型相同
interface Square2 extends Square, PenStroke {}

var s2 = <Square2>{}
s2.color = 'red'
s2.length = '4'
s2.weight = 5

// interface Square3 extends Shape, PenStroke{
//   color: number; // 修改父接口定义的属性类型不可以(可以是子类型吗?)
// }

// var s3 = <Square3> {};
// s3.color = 'red';
// s3.weight = 5;

export { Shape }

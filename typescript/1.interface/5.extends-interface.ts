interface Shape{
  color: string;
}

interface Square extends Shape{ // 继承自 Shape
  length: number;
}

var ss = <Square> {};

ss.color = 'red';
ss.length = 4;
ss.god = 3; // Property 'god' does not exist on type 'Square'

interface PenStroke {
  weight: number;
}


interface Square2 extends Shape, PenStroke{ // 多继承
  length: number;
}

var s2 = <Square2> {};
s2.color = 'red';
s2.length = 4;
s2.weight = 5;


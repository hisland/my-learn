interface Shape{
  color: string;
}

interface Square extends Shape{
  length: number;
}

var s = <Square> {};

s.color = 'red';
s.length = 4;

interface PenStroke {
  weight: number;
}


interface Square2 extends Shape, PenStroke{
  length: number;
}

var s2 = <Square2> {};
s2.color = 'red';
s2.length = 4;
s2.weight = 5;


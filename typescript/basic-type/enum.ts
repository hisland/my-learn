enum Color{Red, Green, Blue}; // start at 0

var c:Color = Color.Green;
console.log(c);

enum Color2{Red = 1, Green, Blue};

var c2:Color2 = Color2.Green;
console.log(c2);


enum Color3{Red = 1, Green = 2, Blue = 4};

var c3:Color3 = Color3.Blue;
console.log(c3);

var name: string = Color3[4];
console.log(name);


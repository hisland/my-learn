function add(x: number, y: number): number {
  return x + y;
}

var myAdd = function(x: number, y: number): number {
  return x + y;
};


// 参数名是随意的, 只是为了可读
var myAdd1: (x: number, y: number) => number =
  function(x: number, y: number): number {
    return x + y;
  };
var myAdd2: (baseValue: number, increment: number) => number =
  function(x: number, y: number): number {
    return x + y;
  };

// 返回值类型必须有, 如果没有返回值要用void
var myAdd3: (x: number, y: number) => number
var myAdd4: (x: number, y: number) => void

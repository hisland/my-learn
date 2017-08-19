function add1(x: number, y: number): number {
  return x + y;
}

var add2 = function(x: number, y: number) { // 自动推断 出 :number
  return x + y;
};


// 参数只需要写清楚类型, 参数名是随意的, 只是为了可读
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
var myAdd4: (x: number, y: number); // 不可以这样, 必须有 =>
var myAdd5: (x: number, y: number) => void
var myAdd6: (x: number, y: number) => any

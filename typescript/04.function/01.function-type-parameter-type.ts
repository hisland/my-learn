function add1(x: number, y: number): number {
  return x + y;
}

let add2 = function(x: number, y: number) { // 自动推断 出 :number
  return x + y;
};


let myAdd1: (x: number, y: number) => number =
  function(x: number, y: number): number {
    return x + y;
  };

// 参数只需要写清楚类型, 参数名是随意的, 只是为了可读
let myAdd2: (baseValue: number, increment: number) => number =
  function(x: number, y: number): number {
    return x + y;
  };

// 左侧指定类型后, 右侧可以不用像上面那样再写一次, 会自动推断
let myAdd22: (baseValue: number, increment: number) => number =
  function(x, y) {
    return x + y;
  };

// 返回值类型必须有, 如果没有返回值要用void
let myAdd3: (x: number, y: number) => number
let myAdd5: (x: number, y: number) => void
let myAdd6: (x: number, y: number) => any
let myAdd4: (x: number, y: number); // 不可以这样, 必须有 =>

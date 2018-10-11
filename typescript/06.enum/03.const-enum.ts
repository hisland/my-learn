// 常数枚举只能使用常数枚举表达式并且不同于常规的枚举的是它们在编译阶段会被删除。
// 常数枚举成员在使用的地方被内联进来。 这是因为常数枚举不可能有计算成员

const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

console.log(Directions.Up)
console.log(Directions.Down)
console.log(Directions.Left)
console.log(Directions.Right)

console.log(Directions) // 并没有这玩意儿

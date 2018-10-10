enum Direction1 {
  Up = 9,
  Down = Up * 10, // 引用当前enum前面定义的值
  Left,
  // Left = Right - 1, // 不可以引用后面的,因为还没有初始化
  Right,
}

// 查看输出
console.log(Direction1)

enum Direction2 {
  Up = Direction1.Down, // 引用另外一个 enum 的值
  Down,
  Left,
  Right,
}

// 查看输出
console.log(Direction2)

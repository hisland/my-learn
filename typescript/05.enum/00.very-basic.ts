// 枚举我们可以定义一些有名字的数字常量

enum Direction1 {
  Up, // 从0开始
  Down,
  Left,
  Right,
}

console.log(Direction1)

// 查看输出, 后续依次增加
enum Direction2 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction2)

// 查看输出, 后续依次增加
enum Direction3 {
  Up = 1,
  Down, // 2
  Left = 9,
  Right, // 10
}

console.log(Direction3)

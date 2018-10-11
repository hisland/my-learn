enum Direction1 {
  Up,
  Down = 0,
  Left,
  Right,
}

console.log(Direction1.Up) // 0
console.log(Direction1[0]) // 'Down',  有没有搞错

console.log(Direction1)

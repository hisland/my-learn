interface Hello {
  (god: string): void // 调用签名
}

function aa(num: number) {
  // 自动推断返回值是 number | string
  if (num < 3) {
    return 'hey'
  } else {
    return num
  }
}

let bb = aa(3) // bb type 是  number | string
console.log(bb)

export { Hello }

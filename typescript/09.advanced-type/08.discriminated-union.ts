interface Square {
  kind: 'square'
  size: number
}

interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}

interface Circle {
  kind: 'circle'
  radius: number
}

interface Triangle {
  kind: 'triangle'
  width: number
  height: number
}

function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x)
}

type Shape = Square | Rectangle | Circle | Triangle
function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size
    case 'rectangle':
      return s.height * s.width
    case 'circle':
      return Math.PI * s.radius ** 2
    // case 'triangle': // 这里注释, 下面 s 会报错
    //   return (s.height * s.width) / 2
    default:
      return assertNever(s)
  }
}

console.log(area({ kind: 'triangle', width: 30, height: 5 }))

export const preventVSCodeError = 1

interface Empty<T> {}
let x1: Empty<number>
let y1: Empty<string>

x1 = y1 // OK, because y matches structure of x

interface NotEmpty<T> {
  data: T
}
let x2: NotEmpty<number>
let y2: NotEmpty<string>

x2 = y2 // Error, because x and y are not compatible

export const preventVSCodeError = 1

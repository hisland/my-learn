let x = (a: number) => 0
let y = (b: number, s: string) => 0

y = x // OK
x = y // Error

export const preventVSCodeError = 1

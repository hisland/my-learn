let xx = (a: number) => 0
let yy = (b: number, s?: string) => 0

yy = xx // OK
xx = yy // OK

export const preventVSCodeError = 1

class Point {
  constructor(private xx: number, private yy: number) {}
  xx() {} // Error
  yy() {} // Error
}

export const preventVSCodeError = 1

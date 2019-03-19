interface Map<T> {
  [key: string]: T
}
let keys: keyof Map<number> // string
let value: Map<number>['foo'] // number

export const preventVSCodeError = 1

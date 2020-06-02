export const preventVSCodeError = 1

// 要么这样
export function foo1(val: number): number
export function foo1(val: string): string
export function foo1(val: unknown) {
  if (typeof val === 'number') {
    return val
  } else if (typeof val === 'string') {
    return val
  } else {
    return val
  }
}

// 要么这样
function foo2(val: number): number
function foo2(val: string): string
function foo2(val: unknown) {
  if (typeof val === 'number') {
    return val
  } else if (typeof val === 'string') {
    return val
  } else {
    return val
  }
}
export { foo2 }

// 不能这样
function foo3(val: number): number
export function foo3(val: string): string
export function foo3(val: unknown) {
  if (typeof val === 'number') {
    return val
  } else if (typeof val === 'string') {
    return val
  } else {
    return val
  }
}

interface Named {
  name: string
}

let x: Named
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' }
x = y // ok

export const preventVSCodeError = 1

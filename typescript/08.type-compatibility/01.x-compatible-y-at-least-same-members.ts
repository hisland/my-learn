interface Named {
  name: string
}

let xx: Named
// y's inferred type is { name: string; location: string; }
let yy = { name: 'Alice', location: 'Seattle' }
xx = yy // ok

export const preventVSCodeError = 1

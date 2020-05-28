interface Named {
  name: string
}

let xx: Named
// y's inferred type is { name: string; location: string; }
let yy = { name: 'Alice', location: 'Seattle' }

function greet(nn: Named) {
  console.log('Hello, ' + nn.name)
}
greet(yy) // OK

export const preventVSCodeError = 1

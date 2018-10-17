interface Named {
  name: string
}

let x: Named
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' }

function greet(n: Named) {
  console.log('Hello, ' + n.name)
}
greet(y) // OK

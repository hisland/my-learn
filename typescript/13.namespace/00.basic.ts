namespace aa {
  export let foo = 3
}

namespace bb {
  export let foo = 'god'
}

console.log(aa.foo)
console.log(bb.foo)

// const aa = {
//   foo: 3,
// }

// const bb = {
//   foo: 'god',
// }

// console.log(aa.foo)
// console.log(bb.foo)

export const preventVSCodeError = 1

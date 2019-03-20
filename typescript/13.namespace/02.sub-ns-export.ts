namespace aa {
  export let foo = 3
  export namespace bb {
    export let foo = 'god'
  }
}

console.log(aa.foo)
console.log(aa.bb.foo)

export const preventVSCodeError = 1

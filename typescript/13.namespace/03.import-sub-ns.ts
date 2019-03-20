namespace aa {
  export let foo = 3
  export namespace bb {
    export let foo = 'god'
  }
}

import kk = aa.bb

console.log(kk.foo)

export const preventVSCodeError = 1

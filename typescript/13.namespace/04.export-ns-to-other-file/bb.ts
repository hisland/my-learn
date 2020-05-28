import { aa } from './aa.ts'

console.log(aa.foo)

namespace bb {
  export let foo = 44
  console.log(foo)
  console.log(aa.foo)
}

import { createHotContext } from './client.js'
import.meta.hot = createHotContext(import.meta.url)

console.log('main 12')
console.log(import.meta)

export const halo = 'yes 12'

if (import.meta.hot) {
  // accept 会在 module 变化通知 下一次 的时候执行
  import.meta.hot.accept(function (newModule) {
    console.log('hot 1', newModule.halo)
  })
}

import { h } from 'vue'

function FunctionalComp1(props, ctx) {
  console.log('props, ctx: ', props, ctx)
  console.log('ctx.attrs: ', ctx.attrs)
  console.log('ctx.emit: ', ctx.emit)
  console.log('ctx.slots: ', ctx.slots)
  console.log('ctx.expose: ', ctx.expose) // 没有 expose
  return h('div', 'abc 113bbq358 33 aa')
}

export default FunctionalComp1

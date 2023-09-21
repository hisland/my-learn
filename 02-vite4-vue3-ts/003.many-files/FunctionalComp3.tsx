function FunctionalComp3(props, ctx) {
  console.log('props, ctx: ', props, ctx)
  console.log('ctx.attrs: ', ctx.attrs)
  console.log('ctx.emit: ', ctx.emit)
  console.log('ctx.slots: ', ctx.slots)
  console.log('ctx.expose: ', ctx.expose) // 没有 expose
  return <div>halo 12</div>
}

export default FunctionalComp3

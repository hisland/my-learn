function render1() {
  console.log('comp1:')
  console.log('comp1:')

  // 相当于 父组件 render, 触发子组件 render
  render2()
}
function render2() {
  console.log('comp2:')
  console.log('comp2:')
}

render1()

import printMe from './print.js'
function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')

  element.innerHTML = ['Hello', 'webpack'].join(' ')

  btn.innerHTML = 'Click me and check the console!'
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

// 在这里更改代码会导致页面刷新, 因为没有上层处理

let tag = component()
document.body.appendChild(tag)

if (module.hot) {
  // module.hot.accept(function() {  // 没有指定依赖也会 页面刷新

  //print.js 变更, 此函数会执行
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!')

    tag.remove()
    tag = component()
    document.body.appendChild(tag)
  })
}

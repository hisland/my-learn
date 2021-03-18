// 参考文章 https://zhuanlan.zhihu.com/p/50358654
// 单纯理解通过 hook 函数获取状态

let state

function useState(initialState) {
  function setState(newState) {
    state = newState
  }

  if (state === undefined) {
    state = initialState
  }
  return [state, setState]
}

function render() {
  const [state, setState] = useState(0)
  console.log(state)
  // render 函数并不直接调用 setState, 否则会导致无限循环
  // 通常是一个事件触发, 比如用户点击/输入/ajax请求响应
  setTimeout(function SomeAsyncEventWillSetState() {
    setState(state + 1)
  }, 0)
}

// react 内部状态变化会触发 render, render 函数是受控的, 这里手工触发演示最基本原理
render()
// 这里要延迟调用, 否则不是想要的效果, 因为 js 内部 event-loop 优先级不同的原因
// 后面会使用 delay 来处理
setTimeout(() => {
  render()
}, 10)
setTimeout(() => {
  render()
}, 20)

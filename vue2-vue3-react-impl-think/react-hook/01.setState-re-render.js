// 参考文章 https://zhuanlan.zhihu.com/p/50358654
// 单纯理解通过 hook 函数获取状态

let state

function useState(initialState) {
  function setState(newState) {
    state = newState
    render()
  }

  if (state === undefined) {
    state = initialState
  }
  return [state, setState]
}

function render() {
  const [state, setState] = useState(0)
  console.log(state)
  // setState 会导致 re-render, 这里是无限循环
  setTimeout(function SomeAsyncEventWillSetState() {
    setState(state + 1)
  }, 1000) // 模拟各种操作的延迟
}

// 初始 render, react 中是由父组件控制的
render()

// 参考文章 https://zhuanlan.zhihu.com/p/50358654
// 单纯理解通过 hook 函数获取状态

let state

function useState(initialState) {
  function setState(newState) {
    state = newState
    DelayRender()
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

let renderDelayHandle = null
// 缓冲多个 setState 合并成一个 render
// 并模拟了受控 render 的一些初始化和清理工作
function DelayRender() {
  clearTimeout(renderDelayHandle)
  renderDelayHandle = setTimeout(() => {
    stateIndex = 0 // 这里要重置堆栈索引否则便错误了, 核心
    render()
  }, 16)
}

// 初始 render, react 中是由父组件控制的
DelayRender()

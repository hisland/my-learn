// 参考文章 https://zhuanlan.zhihu.com/p/50358654
// 单纯理解通过 hook 函数获取状态

const stateStore = []
let stateIndex = 0

function useState(initialState) {
  const currentStateIndex = stateIndex++
  function setState(newState) {
    stateStore[currentStateIndex] = newState
    DelayRender()
  }

  if (stateStore[currentStateIndex] === undefined) {
    stateStore[currentStateIndex] = initialState
  }
  return [stateStore[currentStateIndex], setState]
}

function render() {
  // console.log(stateStore) // 这个是 hack, 可以临时查看一下当前 render 状态的堆栈

  // 可以看出, useState 是根据调用顺序来确定所在堆栈位置
  // 所以不能用在 if 等会导致调用错误的地方
  // 只能在 render 函数顶层直接调用, 这样每次 render 都能取到正确的索引
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(33)
  console.log(state1)
  console.log(state2)
  setTimeout(function SomeAsyncEventWillSetState() {
    setState1(state1 + 1)
    setState2(state2 + 10)
  }, 1000)
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
render()

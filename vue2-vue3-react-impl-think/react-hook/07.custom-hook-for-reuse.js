const compRenderStack = []

function GenControledDelayRender(realRender) {
  const ctx = {
    stateIndex: 0,
    stateStore: [],
    DelayRender,
  }
  let renderDelayHandle = null
  function DelayRender() {
    clearTimeout(renderDelayHandle)
    renderDelayHandle = setTimeout(() => {
      ctx.stateIndex = 0 // 这里要重置堆栈索引否则便错误了, 核心

      // 这里必须同步执行, useState 才能通过堆栈获取正确的状态
      compRenderStack.push(ctx)
      realRender()
      compRenderStack.pop()
    }, 16)
  }
  return DelayRender
}

function useState(initialState) {
  // 能过堆栈取出最上层 ctx
  const ctx = compRenderStack[compRenderStack.length - 1]
  const { stateStore, DelayRender } = ctx
  const currentStateIndex = ctx.stateIndex++
  function setState(newState) {
    stateStore[currentStateIndex] = newState
    DelayRender()
  }

  if (stateStore[currentStateIndex] === undefined) {
    stateStore[currentStateIndex] = initialState
  }
  return [stateStore[currentStateIndex], setState]
}

const Comp1Render = GenControledDelayRender(function render() {
  const [state1, setState1] = someHook()
  console.log('comp1:', state1)

  setTimeout(function SomeAsyncEventWillSetState() {
    setState1(state1 + 1)
  }, 1000)
})
const Comp2Render = GenControledDelayRender(function render() {
  const [state1, setState1] = someHook()
  console.log('comp2:', state1)

  setTimeout(function SomeAsyncEventWillSetState() {
    setState1(state1 + 10)
  }, 1000)
})

// 抽取的公共逻辑, 在不同组件中复用, 状态也是隔离的
// 根据前面的规则, someHook 也必须在 render 顶层调用, 并且内部用到 hook 的地方也必须是同步的
// 这样才能正确取到相关的值
function someHook() {
  const [state3, setState3] = useState(99)
  return [state3, setState3]
}

Comp1Render()
Comp2Render()

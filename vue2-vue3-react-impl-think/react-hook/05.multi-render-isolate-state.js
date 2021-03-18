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
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)
  console.log('comp1:', state1)
  console.log('comp1:', state2)

  setTimeout(function SomeAsyncEventWillSetState() {
    setState1(state1 + 1)
    setState2(state2 + 10)
  }, 1000)
})

const Comp2Render = GenControledDelayRender(function render() {
  const [state1, setState1] = useState('a')
  const [state2, setState2] = useState('b')
  console.log('comp2:', state1)
  console.log('comp2:', state2)
  setTimeout(function SomeAsyncEventWillSetState() {
    setState1(state1 + 'a')
    setState2(state2 + 'b')
  }, 1000)
})

// 这里单独调用, 如果是组件树, 情况会变得很复杂不容易理清楚
// 这只只需要发现各自 render, 能通过 hook 获取到自己应有的状态就行
Comp1Render()
Comp2Render()

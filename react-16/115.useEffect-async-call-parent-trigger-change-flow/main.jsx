import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useReducer,
} from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App render')

  const [count, setCount] = useState(0)

  function ChangeCount() {
    setCount(count + 10)
  }

  return (
    <div>
      <ul>
        <li>
          子组件异步动作中, 前半部分获取了值触发父组件 render, 导致子组件
          re-render, 这个时候异步动作还没有完, 然后后半部分获取值 再 setState
          的情况是怎么样?
        </li>
        <li>
          观察本示例, 实际就是闭包问题, useEffect
          内部执行时候的闭包的值不会变化, 如果 async 导致多次 render,
          有可能需要的取值和真实取值有差异
        </li>
        <li>
          解决方法一可以考虑 async 全部在前面, 所有 async 完成之后再统一 set
          触发 re-render
        </li>
        <li>
          解决方法二可以考虑用 useRef, 或者 state 是个对象, 先修改对象,
          最后再来个 set 触发 re-render
        </li>
        <li>解决方法实际上都是考虑在所有操作完成之后再 re-render</li>
        <li>实际上不断 render 也可以, 但是可能会遇到未知陷阱</li>
      </ul>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Sub1 count={count} ChangeCount={ChangeCount}></Sub1>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render')

  const [myCount, set_myCount] = useState(0)

  useEffect(() => {
    run()
    async function run() {
      console.log(11)
      console.log('myCount: ', myCount)
      console.log('props.count: ', props.count)
      await RandomDelay()
      props.ChangeCount()
      set_myCount(myCount + 3)
      console.log(22)
      console.log('myCount: ', myCount)
      console.log('props.count: ', props.count)
      await RandomDelay()

      // 这里调用了, 但是是第一次 render 生成的方法
      // 闭包内部 count 始终是初始值 0
      // 因此 count 始终被设置成 10, 不管前面的 async 有多久
      props.ChangeCount()
      set_myCount(myCount + 5)
      console.log(33)
      console.log('myCount: ', myCount)
      console.log('props.count: ', props.count)
    }
  }, [])
  return (
    <div>
      <div>parent count: {props.count}</div>
      <div>myCount: {myCount}</div>
      <button onClick={props.ChangeCount}>ChangeCount</button>
      <button onClick={() => set_myCount(myCount + 100)}>set_myCount</button>
    </div>
  )
}

function RandomDelay(min = 300, max = 500) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, RandomInt(min, max))
  })
}
function RandomInt(min, max) {
  if (max === undefined) {
    max = min
    min = 0
  }
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Expected all arguments to be numbers')
  }
  return Math.floor(Math.random() * (max - min + 1) + min)
}

ReactDOM.render(<App />, document.getElementById('root'))

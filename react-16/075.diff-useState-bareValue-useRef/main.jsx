import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')

  const [foo, setFoo] = useState(1)

  function IncFoo() {
    setFoo(foo + 1)
  }

  let randomBare = Math.random().toString(36).substr(2)
  let fixBare = 99
  function IncFixBare() {
    fixBare++
  }

  let thatRef = useRef(0)
  function IncRefPrimitive() {
    thatRef.current++
  }

  let thatObj = useRef({ val: 1000 })
  function IncRefObj() {
    thatObj.current.val++
  }

  return (
    <div>
      <ul style={{ width: '500px' }}>
        <li>useState, 每次 set 都会触发 App 更新, 值保留到下一次 render</li>
        <li>
          bare(普通js值), 每次 App render 都重建, 遵从普通 js 变量的逻辑,
          在使用(渲染/传递给子组件)的时候是啥就是啥了,
          后续如果有修改(比如click事件)虽然变化了但是因为没有 render 所以看不到,
          下次 render 整个过程重来, 所以也没用到后续的变化
        </li>
        <li>
          useRef原始值, 对 current 的修改生效, 但不 render, 等下一次 render
          能看到效果
        </li>
        <li>
          useRef对象, 对 current 及 嵌套数据 的修改生效, 但不 render, 等下一次
          render 能看到效果
        </li>
        <li>
          以上 useState/useRef 的值取出来, 就进入了 bare 值的流程,
          如果要看到最新值, 需要当前组件 render 一次(set 某个 state, 或者父组件
          render 触发递归的 render)
        </li>
        <li>当前组件 render, 用的是上一次父组件传下来的 props</li>
      </ul>
      <div>
        <button onClick={IncFoo}>IncFoo {foo}</button>
        <button onClick={IncFixBare}>IncFixBare {fixBare}</button>
        <button onClick={IncRefPrimitive}>
          IncRefPrimitive {thatRef.current}
        </button>
        <button onClick={IncRefObj}>IncRefObj {thatRef.current.val}</button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub
          foo={foo}
          fixBare={fixBare}
          randomBare={randomBare}
          thatRef={thatRef}
          thatValue={thatRef.current}
          thatObj={thatObj.current}
        ></Sub>
      </div>
    </div>
  )
}

function Sub(props) {
  console.log('Sub', props)

  const [my, setMy] = useState(-100)
  function IncMy() {
    setMy(my + 1)
  }

  return (
    <div>
      <div>1. [foo {props.foo}] 能接收最新值</div>
      <div>
        2. [fixBare {props.fixBare}] 保持在上一次 parent render 时接收到的值
      </div>
      <div>
        2. [randomBare {props.randomBare}] 保持在上一次 parent render
        时接收到的值
      </div>
      <div>
        3. [thatRef.current {props.thatRef.current}] 能接收最新值, 等下一次
        render 生效
      </div>
      <div>
        4. [thatValue {props.thatValue}] 与 <strong>2. fixBare</strong>{' '}
        相同的道理, 保持在上一次 parent render 时接收到的值
      </div>
      <div>
        5. [thatObj {props.thatObj.val}] 因为是对象, 与
        <strong>3. thatRef.current</strong> 相同的道理, 等下一次 render 生效
      </div>
      <div>
        <button onClick={IncMy}>IncMy {my} 触发 Sub render</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')

  const [foo, setFoo] = useState(1)

  function Inc() {
    setFoo(foo + 1)
  }

  return (
    <div>
      <ul>
        <li>
          注意: 不能在组件内部 const Sub2 = React.memo, 可能跟 React
          的渲染机制有关, 每调用一次生成的都不一样
        </li>
        <li>
          通过函数判断 prevProps, nextProps, 返回 true
          表示值相同,不触发子组件渲染
        </li>
        <li>
          只是用于 性能优化, 不能依赖它来阻止 render, class 组件应该用
          shouldComponentUpdate()
        </li>
      </ul>
      <div>
        <button onClick={Inc}>foo+1 {foo}</button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>始终 true, 不渲染</div>
        <Sub2 foo={foo}></Sub2>
      </div>
      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>始终 false, 一直渲染</div>
        <Sub3 foo={foo}></Sub3>
      </div>
      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>根据条件来</div>
        <Sub4 foo={foo}></Sub4>
      </div>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)

  return (
    <div>
      <div>sub1 {props.foo}</div>
    </div>
  )
}

const Sub2 = React.memo(Sub1, (prevProps, nextProps) => {
  console.log('memo compare 1', prevProps, nextProps)
  return true
})
const Sub3 = React.memo(Sub1, (prevProps, nextProps) => {
  console.log('memo compare 2', prevProps, nextProps)
  return false
})
const Sub4 = React.memo(Sub1, (prevProps, nextProps) => {
  const rs = prevProps.foo % 2 !== nextProps.foo % 3
  console.log('memo compare 3', rs, prevProps, nextProps)
  return rs
})

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')

  const [foo, setFoo] = useState({ val: 1, nest: { bar: 1 } })

  function DoSet() {
    setFoo({
      ...foo,
    })
  }
  function IncVal() {
    foo.val += 10
  }
  function IncNest() {
    foo.nest.bar += 100
  }

  return (
    <div>
      <ul>
        <li>useState 对象, 修改嵌套属性实际是修改到了, 只是没有 render</li>
        <li>将修改完成的值, set 回去, 触发 render 即能看到效果</li>
        <li>
          注意: 对象要创建新的副本, 不然引用相同不会 render,
          只需要顶层对象是新的, 嵌套的值可以是原来的?
        </li>
      </ul>
      <div>
        <button onClick={DoSet}>DoSet {foo.val}</button>
        <button onClick={IncVal}>IncVal {foo.val}</button>
        <button onClick={IncNest}>IncNest {foo.nest.bar}</button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>val {foo.val}</div>
        <div>nest.bar {foo.nest.bar}</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

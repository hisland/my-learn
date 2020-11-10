import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

let prevThat

function App(props) {
  console.log('App render')

  const [foo, setFoo] = useState(1)

  const that = useRef({
    some: 'value',
  })

  if (prevThat === that.current) {
    console.log('same that')
  } else {
    console.log('diff that')
    prevThat = that.current
  }

  function RandomThat() {
    const rnd = Math.random().toString(36).substr(2)
    console.log('新值: ', rnd, '下次渲染能看到')
    that.current.some = rnd
  }
  function Inc() {
    setFoo(foo + 1)
  }

  return (
    <div>
      <ul>
        <li>useRef 不是只能拿 dom 引用</li>
        <li>useRef 能存储任意的值, 使在不同的 render 周期能拿到相同的数据</li>
        <li>它不触发 render</li>
        <li>
          当组件被使用多次时, 根据实例能获得不同的副本, 如果是模块全局变量,
          需要自己处理多实例的问题
        </li>
        <li>
          <a href="https://stackoverflow.com/a/61240132">
            stackoverflow 的回答
          </a>
        </li>
      </ul>
      <div>
        <button onClick={Inc}>Inc</button>
        <button onClick={RandomThat}>RandomThat</button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>foo: {foo}</div>
        <div>that: {that.current.some}</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

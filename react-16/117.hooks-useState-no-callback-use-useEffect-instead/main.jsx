import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')

  const [foo, set_foo] = useState(1)
  const [bar, set_bar] = useState(10)

  useEffect(() => {
    console.log('useEffect 1')
  })
  useEffect(() => {
    console.log('useEffect by foo', foo, bar)
  }, [foo])
  useEffect(() => {
    console.log('useEffect by bar', foo, bar)
  }, [bar])

  return (
    <div>
      <ul>
        <li>useState 的 set 不能回调, 不像 class 组件的 setState</li>
        <li>可以用 useEffect 达到效果</li>
      </ul>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>foo: {foo}</div>
        <div>bar: {bar}</div>
        <button
          onClick={() => {
            set_foo(foo + 1, () => {
              console.log('回调没用')
            })
          }}
        >
          foo
        </button>
        <button
          onClick={() => {
            set_bar(bar + 10, () => {
              console.log('回调没用')
            })
          }}
        >
          bar
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

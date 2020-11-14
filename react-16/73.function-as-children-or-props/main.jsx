import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')

  const [foo, setFoo] = useState(1)

  function Inc() {
    setFoo(foo + 1)
  }

  function That(aa, bb, cc) {
    console.log('That', aa, bb, cc)
  }

  return (
    <div>
      <ul>
        <li>prop 可以是任何东西, 所以可以是函数</li>
        <li>children 实际也是 prop, 所以也可以是函数</li>
      </ul>
      <div>
        <button onClick={Inc}>Inc {foo}</button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub foo={foo} bar={That}>
          {That}
        </Sub>
      </div>
    </div>
  )
}

function Sub(props) {
  console.log('Sub', props)
  props.children('children', 2, 3)
  props.bar('bar', 4, 5)
  return <div>aa</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

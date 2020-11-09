import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')

  const [foo1, setFoo1] = useState(1)
  const [foo2, setFoo2] = useState(1)

  function Inc1() {
    console.log('run setFoo1')
    setFoo1(foo1 + 1)
  }
  function Inc2() {
    console.log('run setFoo2')
    setFoo2(foo2 + 2)
  }
  console.log(
    'useEffect return undefined',
    useEffect(
      function () {
        console.log('run useEffect')
      },
      [foo1]
    )
  )

  return (
    <div>
      <ul>
        <li>useEffect deps 有变化才执行</li>
      </ul>
      <div>
        <button onClick={Inc1}>Inc1</button>
        <button onClick={Inc2}>Inc2</button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>{JSON.stringify(foo1)}</div>
        <div>{JSON.stringify(foo2)}</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

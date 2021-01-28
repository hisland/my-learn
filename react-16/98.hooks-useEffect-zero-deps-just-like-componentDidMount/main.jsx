import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App render')

  const [count, setCount] = useState(0)

  console.log('App before useEffect')

  useEffect(() => {
    console.log('App run useEffect')
    return () => {
      console.log('App clean useEffect')
    }
  })

  console.log('App after useEffect')

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {count % 2 === 0 ? <Sub1></Sub1> : null}
    </div>
  )
}

function Sub1() {
  console.log('--Sub1 render')

  const [count, setCount] = useState(0)

  console.log('--Sub1 before useEffect')

  useEffect(() => {
    console.log('--Sub1 run useEffect')
    return () => {
      console.log('--Sub1 clean useEffect')
    }
  }, []) // 只相当于 componentDidMount, 不相当于 componentDidUpdate

  console.log('--Sub1 after useEffect')

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App render')

  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('App run useEffect')
    return () => {
      console.log('App clean useEffect')
    }
  })

  return (
    <div>
      <ul>
        <li>useEffect 有依赖的时候, 依赖的值变化才执行</li>
        <li>需要执行之前先 clean</li>
      </ul>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Sub1 count={count}></Sub1>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render')

  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('Sub1 run useEffect')
    return () => {
      console.log('Sub1 clean useEffect')
    }
  }, [props.count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Sub2 count={count}></Sub2>
    </div>
  )
}

function Sub2(props) {
  console.log('Sub2 render')

  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('Sub2 run useEffect')
    return () => {
      console.log('Sub2 clean useEffect')
    }
  }, [props.count])

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

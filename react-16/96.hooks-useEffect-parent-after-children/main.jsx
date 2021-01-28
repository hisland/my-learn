import React, { useState, useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App render')

  const [count, setCount] = useState(0)

  console.log('App before useEffect')

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('App run useEffect')
    return () => {
      console.log('App clean useEffect')
    }
  })

  console.log('App after useEffect')

  return (
    <div>
      <ul>
        <li>run useEffect 孙->子->父</li>
        <li>clean useEffect 孙->子->父</li>
      </ul>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Sub1></Sub1>
    </div>
  )
}

function Sub1() {
  console.log('Sub1 render')

  const [count, setCount] = useState(0)

  console.log('Sub1 before useEffect')

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('Sub1 run useEffect')
    return () => {
      console.log('Sub1 clean useEffect')
    }
  })

  console.log('Sub1 after useEffect')

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Sub2></Sub2>
    </div>
  )
}

function Sub2() {
  console.log('Sub2 render')

  const [count, setCount] = useState(0)

  console.log('Sub2 before useEffect')

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('Sub2 run useEffect')
    return () => {
      console.log('Sub2 clean useEffect')
    }
  })

  console.log('Sub2 after useEffect')

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

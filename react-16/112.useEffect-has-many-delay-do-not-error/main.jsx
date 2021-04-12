import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useReducer,
} from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App render')

  const [count, setCount] = useState(0)

  return (
    <div>
      <ul>
        <li>
          useEffect 有多个 async 的时候不会报错, 不过要注意依赖, 不然可能无限
          render
        </li>
      </ul>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Sub1 count={count}></Sub1>
    </div>
  )
}

async function SomeThing(delay = 100) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random().toString(36).substr(2))
    }, delay)
  })
}

function Sub1(props) {
  console.log('Sub1 render')

  const [count, set_count] = useState(0)
  const [foo, set_foo] = useState(0)

  useEffect(() => {
    run()
    async function run() {
      const rs1 = await SomeThing(300)
      set_count(rs1)
      const rs2 = await SomeThing(500)
      set_foo(rs2)
    }
  }, [props.count])

  return (
    <div>
      <p>props.count {props.count}</p>
      <p>count {count}</p>
      <p>foo {foo}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

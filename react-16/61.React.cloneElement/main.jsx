import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App render')

  const [foo, setFoo] = useState(1)

  const sub1 = <Sub hello="init">sub1</Sub>

  const sub2 = React.cloneElement(sub1, { hello: 'cloned' }, ['yes1', 'yes2'])
  const sub3 = React.cloneElement(sub1, {
    hello: 'cloned',
    children: ['yes3', 'yes4'],
  })

  console.log(sub1, sub2, sub3)

  return (
    <div>
      <ul>
        <li>React.cloneElement</li>
        <li>sub1 不能直接修改 props, 需要在 cloneElement 的时候覆盖</li>
        <li>children 也可以放到 props 上</li>
      </ul>
      <div>
        {sub1}
        {sub2}
        {sub3}
      </div>
      <div>
        <button
          onClick={() => {
            setFoo(foo + 1)
          }}
        >
          setFoo {foo}
        </button>
      </div>
    </div>
  )
}

function Sub(props) {
  return (
    <div>
      sub hello: {props.hello} children: {props.children}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')

  const [foo, setFoo] = useState(1)

  function Inc() {
    if (typeof foo === 'number') {
      setFoo(foo + 1)
    } else {
      setFoo(0)
    }
  }
  function SetOther() {
    setFoo({
      god: Math.random().toString(36).substr(2),
    })
  }

  return (
    <div>
      <ul>
        <li>useState set 可以随便设置, 只要处理了值的关系就好吧</li>
      </ul>
      <div>
        <button onClick={Inc}>Inc</button>
        <button onClick={SetOther}>SetOther </button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>{JSON.stringify(foo)}</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

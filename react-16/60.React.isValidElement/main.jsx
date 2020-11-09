import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App render')

  const [foo, setFoo] = useState(1)

  const sub = <Sub>e</Sub>

  console.log(sub, React.isValidElement(sub), React.isValidElement(Sub))

  return (
    <div>
      <ul>
        <li>React.isValidElement</li>
      </ul>
      <div>
        <Sub></Sub>
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
  return <div>sub</div>
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

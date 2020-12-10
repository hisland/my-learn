import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')
  let subEl
  const [foo, setFoo] = useState(0)

  function show() {
    console.log(subEl)
  }

  class Sub2 extends React.Component {
    constructor(props) {
      super(props)
      console.log('Sub2 constructor', props)
    }
    render() {
      console.log('Sub2 render')
      return <Sub1 {...this.props} />
    }
  }

  return (
    <div>
      <ul>
        <li></li>
      </ul>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub2 myRef={(el) => (subEl = el)}></Sub2>

        <button onClick={show}>show myRef</button>
        <button
          onClick={() => {
            setFoo(foo + 1)
          }}
        >
          {foo}
        </button>
      </div>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)
  return (
    <div>
      <div>Sub1</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

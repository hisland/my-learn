import React from 'react'
import ReactDOM from 'react-dom'

const { useState, useEffect } = React

function App(props) {
  console.log('App render')

  const [foo, set_foo] = useState(1)
  const [inner_show, set_inner_show] = useState(true)
  const [outer_show, set_outer_show] = useState(true)

  return (
    <div>
      <ul>
        <li>不管是外部还是内部, 都能控制 portal 的挂载卸载</li>
      </ul>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <button
          onClick={() => {
            set_foo(foo + 1)
          }}
        >
          foo {foo}
        </button>
        <button
          onClick={() => {
            set_inner_show(!inner_show)
          }}
        >
          inner_show {inner_show + ''}
        </button>
        <button
          onClick={() => {
            set_outer_show(!outer_show)
          }}
        >
          outer_show {outer_show + ''}
        </button>
      </div>

      {outer_show && <Sub1 inner_show={inner_show}></Sub1>}
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render')

  return ReactDOM.createPortal(
    props.inner_show ? <div>123</div> : null,
    document.body
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

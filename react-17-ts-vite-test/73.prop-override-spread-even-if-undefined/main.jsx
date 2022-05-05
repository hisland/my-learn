import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { useMemo, useCallback, useReducer } from 'react'
import PropTypes from 'prop-types'

function App() {
  console.log('App render')
  const [show, setShow] = useState(true)
  function toggle() {
    setShow(!show)
  }
  const obj1 = {
    aa: 1,
    bb: 2,
    cc: 3,
  }
  const obj2 = {
    // aa: 'aa1', // undefined 覆盖了前面的
    bb: 'bb2',
    cc: null,
  }
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <ul>
        <li>
          使用 spread , 后续的prop会覆盖前面同名的, 即使后续的值是 undefined
        </li>
      </ul>
      <div>
        <button onClick={toggle}>toggle</button>
      </div>
      {show && <Sub1 {...obj1}></Sub1>}
      {show && <Sub1 {...obj1} aa={obj2.aa} bb={obj2.bb} cc={obj2.cc}></Sub1>}
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render', props)
  const [num, setNum] = useState(10)
  function add() {
    setNum(num + 1)
  }
  return (
    <div style={{ border: '1px solid green', margin: '10px' }}>
      <div>
        <button onClick={add}>add {num}</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

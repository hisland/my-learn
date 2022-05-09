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
  return (
    <div style={{ border: '1px solid red', margin: '10px' }}>
      <div>
        <button onClick={toggle}>toggle</button>
      </div>
      {(() => {
        const aa = <span>123</span>
        console.log(aa)
        return aa
      })()}
      <div>
        {{
          // 这个对象是不能正常渲染的
          children: <span>123</span>,
          props: {},
        }}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

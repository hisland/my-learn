import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const SomeContext = React.createContext('blue')
SomeContext.displayName = 'Halo'

function App() {
  console.log('App render')
  const [color1, setColor1] = useState('red')
  const [color2, setColor2] = useState('green')

  return (
    <div>
      <div>
        <button onClick={() => setColor1('purple')}>color1 purple</button>
        <button onClick={() => setColor1('blue')}>color1 blue</button>
        <button onClick={() => setColor1('pink')}>color1 pink</button>
      </div>
      <div>
        <button onClick={() => setColor2('purple')}>color2 purple</button>
        <button onClick={() => setColor2('blue')}>color2 blue</button>
        <button onClick={() => setColor2('pink')}>color2 pink</button>
      </div>
      <SomeContext.Provider value={color1}>
        <Sub1></Sub1>
        <SomeContext.Provider value={color2}>
          {
            // 获得最近嵌套的值
            <Sub1></Sub1>
          }
        </SomeContext.Provider>
      </SomeContext.Provider>

      <div style={{ margin: '10px', border: '1px solid red' }}>
        <div>这里外层没有包裹 SomeContext.Provider, 它能取到默认值</div>
        <div style={{ color: 'red' }}>
          默认值并不是说 SomeContext.Provider 可以不传 value, value 是必传的
        </div>
        <Sub1></Sub1>
      </div>
    </div>
  )
}

function Sub1(props, context) {
  console.log('Sub1 render', props, context)
  return (
    <SomeContext.Consumer>
      {(value) => <div style={{ color: value }}>文字</div>}
    </SomeContext.Consumer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

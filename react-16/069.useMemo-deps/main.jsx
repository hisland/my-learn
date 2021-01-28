import React, { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'

function App(props) {
  console.log('App render')

  const [foo1, setFoo1] = useState(1)
  const [foo2, setFoo2] = useState(1)

  function Inc1() {
    console.log('run setFoo1')
    setFoo1(foo1 + 1)
  }
  function Inc2() {
    console.log('run setFoo2')
    setFoo2(foo2 + 2)
  }

  function getFoo1() {
    console.log('run getFoo1')
    return foo1
  }
  const getMemoFoo1 = useMemo(() => {
    console.log('run useMemo 1')
    return () => foo1
  }, [foo1])
  const getMemoFoo2 = useMemo(() => {
    console.log('run useMemo 2')
    return foo1
  }, [foo1])

  return (
    <div>
      <ul>
        <li>useMemo deps 没变化, 它就不执行</li>
      </ul>
      <div>
        <button onClick={Inc1}>Inc1</button>
        <button onClick={Inc2}>Inc2</button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>getFoo1: {getFoo1()}</div>
        <div>
          getMemoFoo1: {getMemoFoo1()} 这个缓存函数, 就相当于 useCallback
        </div>
        <div>getMemoFoo2: {getMemoFoo2} 这个缓存值</div>
        <div>{JSON.stringify(foo1)}</div>
        <div>{JSON.stringify(foo2)}</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

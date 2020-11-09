import React, { useState, useEffect, useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'

let prevCallback

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
  const getCallbackFoo1 = useCallback(() => {
    console.log('run useCallback')
    return foo1
  }, [foo1])

  if (prevCallback === getCallbackFoo1) {
    console.log('prevCallback are same')
  } else {
    console.log('prevCallback changed !!!')
    prevCallback = getCallbackFoo1
  }

  return (
    <div>
      <ul>
        <li>useState: 在 set 之前, 拿到的都是同一个值(对象引用相同)</li>
        <li>
          useCallback 有点像 useState, 只不过是如果 deps 没有变化,
          拿到的是上一次有变化之后第一次传入的那个函数
        </li>
        <li>
          useCallback 缓存函数的引用, 使子组件可以根据引用来判断变化 比如:
          shouldComponentUpdate, React.memo
        </li>
      </ul>
      <div>
        <button onClick={Inc1}>Inc1 子组件 render</button>
        <button onClick={Inc2}>Inc2 子组件不 render</button>
      </div>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <div>getFoo1: {getFoo1()}</div>
        <div>getMemoFoo1: {getCallbackFoo1()}</div>

        <Sub1 onChange={getCallbackFoo1}></Sub1>

        <div>{JSON.stringify(foo1)}</div>
        <div>{JSON.stringify(foo2)}</div>
      </div>
    </div>
  )
}

const Sub1 = React.memo(
  function Sub1(props) {
    console.log('Sub1 render')
    return <div>Sub1 {Math.random().toString(36).substr(2)}</div>
  },
  (prevProps, nextProps) => {
    console.log(
      'React.memo check by reference:',
      prevProps.onChange === nextProps.onChange
    )
    return prevProps.onChange === nextProps.onChange
  }
)

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'

function genRunSerie(name, map1) {
  const map2 = map1 instanceof Map ? map1 : new Map(Object.entries(map1))
  const runSerie = new Set()
  const deep = (triggerName) => {
    for (const depName of map2.get(triggerName)) {
      if (runSerie.has(depName)) continue
      runSerie.add(depName)
      if (map2.has(depName)) {
        deep(depName)
      }
    }
  }
  deep(name)
  return runSerie
}

function App(props) {
  console.log('App render')

  const triggerMap = {
    Sub1: ['Sub3'],
    Sub2: ['Sub1', 'Sub3'],
  }
  const fns = {}
  function bindFactory(name) {
    return function (fn) {
      fns[name] = fn
    }
  }
  function notifyFactory(name) {
    return function () {
      console.log('notify', name)
      if (triggerMap[name]) {
        for (const key of triggerMap[name]) {
          console.log('trigger:', key)
          fns[key]()
        }
      }
    }
  }

  const ss = genRunSerie('Sub1', triggerMap)
  console.log(ss)

  return (
    <div>
      <ul>
        <li>
          将状态移到组件内部, 向外部暴露一个函数, 外部执行这个函数的时候,
          该函数根据需要是否触发 re-render
        </li>
        <li>外部传入一个通知函数, 在内部调用通知函数告知内部有变化</li>
        <li>
          在外部, 使用两者, 产生一个局部渲染的通知系统, 可以接收 A 通知, 告诉 B
          进行渲染, 这里是 triggerMap, 可以递归的通知依赖的组件自己进行渲染
        </li>
      </ul>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub1
          notify={notifyFactory('Sub1')}
          bindTrigger={bindFactory('Sub1')}
        ></Sub1>
        <Sub2
          notify={notifyFactory('Sub2')}
          bindTrigger={bindFactory('Sub2')}
        ></Sub2>
        <Sub3
          notify={notifyFactory('Sub3')}
          bindTrigger={bindFactory('Sub3')}
        ></Sub3>
      </div>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render')
  const [foo, setFoo] = useState(1)
  function myChange() {
    setFoo(foo + 1)
  }
  props.bindTrigger(myChange)
  return (
    <div>
      Sub1 {foo}
      <button onClick={props.notify}>DoSet</button>
    </div>
  )
}

function Sub2(props) {
  console.log('Sub2 render')
  const [foo, setFoo] = useState(1)
  function onChange() {
    setFoo(foo + 2)
  }
  props.bindTrigger(onChange)
  return (
    <div>
      Sub2 {foo}
      <button onClick={props.notify}>DoSet</button>
    </div>
  )
}

function Sub3(props) {
  console.log('Sub3 render')
  const [foo, setFoo] = useState(1)
  function onChange() {
    setFoo(foo + 3)
  }
  props.bindTrigger(onChange)
  return (
    <div>
      Sub3 {foo}
      <button onClick={props.notify}>DoSet</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

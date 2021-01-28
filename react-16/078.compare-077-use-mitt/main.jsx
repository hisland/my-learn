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

  const mitt = {
    map: new Map(),
    on: (type, handler) => {
      const { map } = mitt
      if (map.has(type)) {
        map.get(type).push(handler)
      } else {
        map.set(type, [handler])
      }
    },
    emit: (type, evt) => {
      const { map } = mitt
      for (const handler of map.get(type)) {
        handler(evt)
      }
    },
  }

  const fnMap = {}
  const bindTriggerFactory = (name) => (fn) => {
    fnMap[name] = fn
  }
  const notifyTriggerFactory = (name) => () => {
    console.log('notifyTrigger', name)
    if (triggerMap[name]) {
      for (const key of triggerMap[name]) {
        console.log('trigger:', key)
        fnMap[key]()
      }
    }
  }

  const ss = genRunSerie('Sub1', triggerMap)
  console.log(ss)

  return (
    <div>
      <ul>
        <li>
          对比76, 使用
          <a href="https://github.com/developit/mitt" target="_blank">
            mitt
          </a>
          这种 event emitter / pubsub 库, 可能更简单
        </li>
      </ul>

      <div style={{ border: '1px solid pink', margin: '10px' }}>
        <Sub1
          mitt={mitt}
          notifyTrigger={notifyTriggerFactory('Sub1')}
          bindTrigger={bindTriggerFactory('Sub1')}
        ></Sub1>
        <Sub2
          notifyTrigger={notifyTriggerFactory('Sub2')}
          bindTrigger={bindTriggerFactory('Sub2')}
        ></Sub2>
        <Sub3
          notifyTrigger={notifyTriggerFactory('Sub3')}
          bindTrigger={bindTriggerFactory('Sub3')}
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
  props.mitt.on('Sub1', myChange)
  return (
    <div>
      Sub1 {foo}
      <button onClick={props.notifyTrigger}>DoSet</button>
      <button
        onClick={() => {
          props.mitt.emit('Sub1')
        }}
      >
        DoSet
      </button>
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
      <button onClick={props.notifyTrigger}>DoSet</button>
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
      <button onClick={props.notifyTrigger}>DoSet</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

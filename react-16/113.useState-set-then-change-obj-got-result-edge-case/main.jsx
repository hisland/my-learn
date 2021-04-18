import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useReducer,
} from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App render')

  const [obj, set_obj] = useState({
    count: 0,
  })

  function DoSome1() {
    const kk = { count: obj.count + 1 }
    set_obj(kk)

    kk.xx = (obj.xx || 0) + 2
  }
  function DoSome2() {
    const kk = { count: obj.count + 1 }
    set_obj(kk)

    setTimeout(() => {
      kk.xx = (obj.xx || 0) + 10
    }, 100)
  }

  console.log('render', obj)

  return (
    <div>
      <ul>
        <li>useState 是对象的时候, 先 set 再修改对象, 结果能体现</li>
        <li>
          useState 是对象的时候, 先 set 再 异步修改对象, render 的时候看不到,
          但是实际还在
        </li>
      </ul>
      <p>obj.count {obj.count}</p>
      <p>obj.xx {obj.xx}</p>
      <button onClick={DoSome1}>DoSome1</button>
      <button onClick={DoSome2}>DoSome2</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

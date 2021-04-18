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

  const [count, setCount] = useState(0)
  const [List, set_List] = useState([{ aa: 1, bb: 2 }])

  return (
    <div>
      <ul>
        <li>循环生成 React.Fragment 要指定 key, 必须用完整语法, 不能用简写</li>
        <li>也不能把 key 放到 React.Fragment 的子元素上</li>
      </ul>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <Sub1 List={List}></Sub1>
      <Sub2 List={List}></Sub2>
      <Sub3 List={List}></Sub3>
    </div>
  )
}

function Sub1(props) {
  console.log('Sub1 render')
  return props.List.map((vv) => (
    <>
      <div>aa</div>
      <div>bb</div>
      <div>没有 key 会有提示, 这样不对</div>
    </>
  ))
}
function Sub2(props) {
  console.log('Sub2 render')
  return props.List.map((vv) => (
    <>
      <div key="aa">aa</div>
      <div key="bb">bb</div>
      <div>放到子节点上也有提示, 这样不对</div>
    </>
  ))
}
function Sub3(props) {
  console.log('Sub3 render')
  return props.List.map((vv) => (
    <React.Fragment key="aa">
      <div>aa</div>
      <div>bb</div>
      <div>放到子 React.Fragment 上 OK!</div>
    </React.Fragment>
  ))
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

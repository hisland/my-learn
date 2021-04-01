const { useState } = React

function useMyHook(foo) {
  console.log('useMyHook', foo)
  const [count, setCount] = useState(Math.random().toString(36).substr(2, 5))
  return count
}

function App() {
  console.log('App render')

  const [foo, setFoo] = useState(0)
  const aa = useMyHook(foo)
  function Inc() {
    setFoo(foo + 1)
  }

  return (
    <div>
      <ul>
        <li>useState 应该是依赖 组件的调用来存值</li>
        <li>没有地方调用 setCount, 初始化之后不再更新</li>
      </ul>
      <div>
        <button onClick={Inc}>Inc foo: {foo}</button>
      </div>
      <div>App 我调用 useMyHook 的初始值是 aa: {aa}</div>
      <div>
        <Sub2 aa={aa}></Sub2>
      </div>
    </div>
  )
}

function Sub2(props) {
  console.log('Sub2 render')
  const [foo, setFoo] = useState(0)
  const aa = useMyHook(foo)
  return (
    <div>
      <div>props.aa: {props.aa}</div>
      <div>Sub2 调用 useMyHook 的初始值是aa: {aa}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

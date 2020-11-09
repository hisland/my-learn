import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('App render')

  const [foo, setFoo] = useState(1)

  const objWith_html = {
    __html:
      '<strong>First</strong> &middot; <span style="color:red">Second</span>',
  }

  return (
    <div>
      <ul>
        <li>渲染 html 字符串</li>
        <li>需要使用 dangerouslySetInnerHTML 属性</li>
        <li>并且接收一个含有 __html 属性的 对象</li>
      </ul>
      <div dangerouslySetInnerHTML={objWith_html}></div>
      <div>
        <button
          onClick={() => {
            setFoo(foo + 1)
          }}
        >
          setFoo {foo}
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

if (import.meta.hot) {
  import.meta.hot.accept()
}

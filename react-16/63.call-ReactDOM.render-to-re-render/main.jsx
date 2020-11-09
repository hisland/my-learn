import React, { useState } from 'react'
import ReactDOM from 'react-dom'

let count = 0

class App extends React.Component {
  render() {
    const { props } = this
    console.log('App render')

    return (
      <div>
        <ul>
          <li>外部代码调用 ReactDOM.render 来重新渲染组件</li>
          <li>会覆盖掉 container 里面的内容</li>
          <li>可以通过 ref 拿到 根节点的引用, 但是必须是 class Component</li>
        </ul>
        <div>
          <button onClick={rerender}>
            count {count} {props.aa}
          </button>
        </div>
      </div>
    )
  }
}

rerender()
function rerender() {
  count++
  ReactDOM.render(
    <App aa={count} ref={(ref) => (window.rootRef = ref)} />,
    document.getElementById('root'),
    () => {
      console.log('ReactDOM.render')
    }
  )
}

if (import.meta.hot) {
  import.meta.hot.accept()
}

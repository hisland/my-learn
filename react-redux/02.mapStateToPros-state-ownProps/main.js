import { store } from './store.js'

const { Provider, connect } = ReactRedux

const App = connect(function mapStateToPros(state, ownProps) {
  console.log(state, ownProps)
  const { todos, visibilityFilter } = state
  return {
    todos,
    visibilityFilter,
    some1: 'override ownProps same key, if set',
  }
})(function App(props) {
  return (
    <div>
      <h2>
        mapStateToPros, 返回的结果对象的 key 变成 props.xxx, 能读取 redux
        里面的内容了
      </h2>
      <div>{props.visibilityFilter}</div>
      <div>{props.some1}</div>
      <div>{props.some2}</div>
      <div>
        list:{' '}
        {props.todos.map((vv, index) => (
          <span key={index} style={{ background: 'green', margin: '3px' }}>
            {vv.text}
          </span>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            props.dispatch({ type: 'ADD_TODO', text: 'test' })
          }}
        >
          click
        </button>
      </div>
    </div>
  )
})

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App some1="more1" some2="more2" />
  </Provider>,
  rootElement
)

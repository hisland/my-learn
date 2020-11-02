import { store } from './store.js'
import { addTodo, toggleTodo } from './store.js'

const { Provider, connect, ReactReduxContext } = ReactRedux

const App = connect(function mapStateToPros(state, ownProps) {
  const { todos, visibilityFilter } = state
  return {
    todos,
    visibilityFilter,
  }
})(function App(props) {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        return (
          <div>
            <h2>可以直接使用 store, 暂时不清楚该干嘛</h2>
            <div>{props.visibilityFilter}</div>
            <div>
              list:{' '}
              {props.todos.map((vv, index) => (
                <span
                  key={index}
                  style={{ background: 'green', margin: '3px' }}
                >
                  {vv.text} | {vv.completed ? 'yes' : 'no'}
                </span>
              ))}
            </div>
            <div>
              <button
                onClick={() => {
                  store.dispatch({ type: 'ADD_TODO', text: 'test' })
                }}
              >
                add test
              </button>
              <button
                onClick={() => {
                  store.dispatch({ type: 'TOGGLE_TODO', index: 0 })
                }}
              >
                toggle 0
              </button>
              <button
                onClick={() => {
                  store.dispatch({ type: 'TOGGLE_TODO', index: 1 })
                }}
              >
                toggle 1
              </button>
            </div>
          </div>
        )
      }}
    </ReactReduxContext.Consumer>
  )
})

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

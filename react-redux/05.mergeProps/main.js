import { store } from './store.js'
import { addTodo, toggleTodo } from './store.js'

const { Provider, connect } = ReactRedux

const App = connect(
  function mapStateToPros(state, ownProps) {
    const { todos, visibilityFilter } = state
    return {
      todos,
      visibilityFilter,
      some1: 'override ownProps same key, if set',
    }
  },
  {
    addTodo,
    toggleTodo,
  },
  function mergeProps(stateProps, dispatchProps, ownProps) {
    console.log('ownProps: ', ownProps)
    console.log('stateProps: ', stateProps)
    console.log('dispatchProps: ', dispatchProps)

    // 这是默认动作
    return {
      ...ownProps,
      ...stateProps,
      ...dispatchProps,
    }
  }
)(function App(props) {
  return (
    <div>
      <div>{props.visibilityFilter}</div>
      <div>{props.some1}</div>
      <div>{props.some2}</div>
      <div>
        list:{' '}
        {props.todos.map((vv, index) => (
          <span key={index} style={{ background: 'green', margin: '3px' }}>
            {vv.text} | {vv.completed ? 'yes' : 'no'}
          </span>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            props.dispatch({ type: 'ADD_TODO', text: 'test' })
          }}
        >
          no props.dispatch any more
        </button>
        <button onClick={() => props.addTodo('some')}>addTodo</button>
        <button onClick={() => props.toggleTodo(0)}>toggleTodo 0</button>
        <button onClick={() => props.toggleTodo(1)}>toggleTodo 1</button>
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

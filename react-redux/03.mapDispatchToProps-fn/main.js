import { store } from './store.js'
import { addTodo } from './store.js'

const { Provider, connect } = ReactRedux

const App = connect(
  function mapStateToPros(state, ownProps) {
    console.log(state, ownProps)
    const { todos, visibilityFilter } = state
    return {
      todos,
      visibilityFilter,
      some1: 'override ownProps same key, if set',
    }
  },
  function mapDispatchToProps(dispatch, ownProps) {
    return {
      addFoo: () => {
        dispatch({ type: 'ADD_TODO', text: 'foo' })
      },
      addSome2: () => {
        dispatch({ type: 'ADD_TODO', text: ownProps.some2 })
      },
      addCreator: () => {
        dispatch(addTodo('by creator'))
      },
    }
  }
)(function App(props) {
  return (
    <div>
      <h2>mapDispatchToProps, 将 action 变成 props.xxx() 被组件调用</h2>
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
          no props.dispatch any more
        </button>
        <button onClick={props.addFoo}>addFoo</button>
        <button onClick={props.addSome2}>addSome2</button>
        <button onClick={props.addCreator}>addCreator</button>
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

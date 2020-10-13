const { createStore, applyMiddleware } = Redux
const createSagaMiddleware = ReduxSaga.default

console.log(1)
import { hello } from './sagas.js'
console.log(2)

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return state % 2 !== 0 ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(counter, applyMiddleware(sagaMiddleware))
const action = (type) => store.dispatch({ type })

sagaMiddleware.run(hello)

console.log('store.getState:', store.getState())

function render() {
  function App() {
    console.log('run App')
    return (
      <div>
        <div>
          <span>value: {store.getState()}</span>
        </div>
        <div>
          <button
            onClick={() => {
              action('INCREMENT')
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              action('DECREMENT')
            }}
          >
            -1
          </button>
        </div>
      </div>
    )
  }

  const domContainer = document.querySelector('#root')
  ReactDOM.render(<App></App>, domContainer)
}

render()
store.subscribe(render)

console.log('code after')

import { store } from './store.js'

const { Provider, connect } = ReactRedux

const App = connect()(function App(props) {
  return (
    <div>
      <h2>
        空的 connect, 只给了一个 dispatch, 没有注入状态, 也看到 Redux 里面的内容
      </h2>
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
    <App />
  </Provider>,
  rootElement
)

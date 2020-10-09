import { store } from './store.js'

const { Provider, connect } = ReactRedux

const App = connect()(function App(props) {
  return (
    <div>
      <div>hello</div>
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

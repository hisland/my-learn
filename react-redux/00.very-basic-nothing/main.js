import { store } from './store.js'

const { Provider } = ReactRedux

function App() {
  return <div>hello</div>
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

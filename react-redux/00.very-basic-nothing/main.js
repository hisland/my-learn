import { store } from './store.js'

const { Provider } = ReactRedux

function App() {
  return (
    <div>
      <h2>没有 connect, 相当于没用用 ReactRedux, 什么都不能做</h2>
      <div>hello</div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

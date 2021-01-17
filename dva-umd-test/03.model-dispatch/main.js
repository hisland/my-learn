console.log('code before')

const { connect } = dva
const { Router, Route, Link, Switch } = dva.router

const app = dva({})
window.kkk = app

app.model({
  namespace: 'foo',
  state: {
    that: 1,
  },
  reducers: {
    add(state, action) {
      console.log('foo reducers add:', state, action)
      return state
    },
    del(state, action) {
      console.log('foo reducers del:', state, action)
      return state
    },
  },
  effects: {
    *addAfter1Second(action, { call, put }) {
      yield call(delay, 1000)
      yield put({ type: 'add' })
    },
  },
})

const Home = connect()((props) => {
  console.log(props)
  return (
    <div>
      <div>Hello Home</div>
      <div>
        <button
          onClick={() => props.dispatch({ type: 'foo/add', some: 'what' })}
        >
          add
        </button>
        <button
          onClick={() => props.dispatch({ type: 'foo/del', some: 'what' })}
        >
          del
        </button>
      </div>
    </div>
  )
})
const Sub = connect()(() => <div>Hello Sub</div>)

app.router(({ app, history }) => {
  console.log(app === kkk)
  console.log(history)
  return (
    <Router history={history}>
      <div className="appRoot">
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/sub">sub</Link>
          </li>
        </ul>
        <Route path="/home" component={Home}></Route>
        <Route path="/sub" component={Sub}></Route>
      </div>
    </Router>
  )
})

app.start('#root')

console.log('code after')

const { useState, createContext } = React
const { Route, Link, NavLink, Switch } = ReactRouterDOM
const { useRouteMatch } = ReactRouterDOM
// const { BrowserRouter: Router } = ReactRouterDOM
const { HashRouter: Router } = ReactRouterDOM

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">
              / 实际匹配了 2 条, Route 顺序很重要, Switch
              会渲染它里面的第一个匹配的 Route
            </Link>
          </li>
          <li>
            <Link to="/sub1">/sub1 只匹配一条</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/sub1">
            <Sub1>
              <div>Sub1 children</div>
            </Sub1>
          </Route>
          <Route path="/">
            <Home>
              <div>home children</div>
            </Home>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

function Home(props) {
  console.log('home', props)
  const match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <h2>home</h2>
      <div>{props.children}</div>
    </div>
  )
}
function Sub1(props) {
  console.log('sub1', props)
  const match = useRouteMatch()
  console.log(match)
  return (
    <div>
      <h3>sub1</h3>
      <div>{props.children}</div>
      <div>
        <button>toggle</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')

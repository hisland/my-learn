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
            <Link to="/sub1">/sub1 会渲染全部 Route, 因为是前缀匹配</Link>
          </li>
        </ul>
        <Route path="/">
          <Home>
            <div>home children</div>
          </Home>
        </Route>
        <Route path="/sub1">
          <Sub1>
            <div>Sub1 children</div>
          </Sub1>
        </Route>
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
      <Switch>
        <Route path="/sub1">
          <Sub1>
            <div>home sub, sub1 children</div>
          </Sub1>
        </Route>
      </Switch>
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

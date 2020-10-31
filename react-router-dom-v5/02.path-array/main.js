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
            <Link to="/">/</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
        </ul>
        <Switch>
          <Route path={['/home', '/']}>
            <Home>
              <div>
                /home 放在 / 之前, 如果 / 在前面, 它包含了 /home, 就不能通过
                match 知道是 /home 了
              </div>
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
      <div>
        <button>toggle</button>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')

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
            <Link to="/home/some">some</Link>
          </li>
          <li>
            <Link to="/home/more">more</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home/:name">
            <Home>
              <div>Home children</div>
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
      <h2>home {match.params.name}</h2>
      <div>{props.children}</div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')

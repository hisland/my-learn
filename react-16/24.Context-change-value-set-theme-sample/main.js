const { useState, createContext } = React
export const themes = {
  light: {
    foreground: '#000000',
    background: '#dddddd',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

const ThemeContext = createContext('light')
ThemeContext.displayName = 'ThemeContext'

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider
      value={theme === 'light' ? themes.light : themes.dark}
    >
      <Sub1></Sub1>
      <button onClick={() => setTheme('light')}>
        light{theme === 'light' ? '✅' : ''}
      </button>
      <button onClick={() => setTheme('dark')}>
        dark{theme === 'dark' ? '✅' : ''}
      </button>
    </ThemeContext.Provider>
  )
}

function Sub1() {
  return <Sub2></Sub2>
}

function Sub2() {
  return (
    <ThemeContext.Consumer>
      {(value) => (
        <div style={{ color: value.foreground, background: value.background }}>
          这是一个文本来显示颜色
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log('run code after')

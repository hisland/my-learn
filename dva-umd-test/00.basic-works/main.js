console.log('code before')

const App = () => <div>Hello dva</div>

// 创建应用
const app = dva()
// 注册视图
app.router(() => <App />)
// 启动应用
app.start('#root')

console.log('code after')

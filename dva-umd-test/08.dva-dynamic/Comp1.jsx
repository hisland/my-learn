// 使用 esbuild --outfile=Comp1.js Comp1.jsx 生成对应的 js 文件

const { connect } = dva
const { routerRedux } = dva.router

export default connect((state) => {
  console.log('connect Comp2: ', state)
  return {
    foo: state.foo,
  }
})((props) => {
  console.log('Comp2: ', props)
  const { dispatch } = props
  return (
    <div>
      <div>Hello Comp2 {props.foo.that}</div>
      <div>
        <button onClick={() => dispatch(routerRedux.push('/sub1'))}>
          go sub1
        </button>
      </div>
    </div>
  )
})

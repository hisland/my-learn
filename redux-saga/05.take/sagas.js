// const { delay } = ReduxSaga.effects
// 文档里面的 delay 是一个 effect, 不能被 call, 这样写个 delay 可以
function delay(ms, value = true) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, value)
  })
}

const { put, take, select, all, call } = ReduxSaga.effects

export function* hello() {
  console.log('hello')
}

function* incAsyc() {
  console.log('incAsyc 1')
  yield call(delay, 1000)
  console.log('incAsyc 2')
  yield put({ type: 'INCREMENT' })
  console.log('incAsyc 3')
}
function* watchIncAsyc() {
  while (true) {
    const action = yield take('INCREMENT_ASYNC')
    const state = yield select()
    console.log('take: ', action)
    console.log('state: ', state)
  }
}

export function* rootSaga() {
  yield all([hello(), watchIncAsyc()])
}

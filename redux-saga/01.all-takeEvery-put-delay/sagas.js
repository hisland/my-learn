const { delay } = ReduxSaga.effects
const { put, takeEvery, all } = ReduxSaga.effects

export function* hello() {
  console.log('hello')
}

function* incAsyc() {
  console.log('incAsyc 1')
  yield delay(1000)
  console.log('incAsyc 2')
  yield put({ type: 'INCREMENT' })
  console.log('incAsyc 3')
}
function* watchIncAsyc() {
  yield takeEvery('INCREMENT_ASYNC', incAsyc)
}

export function* rootSaga() {
  yield all([hello(), watchIncAsyc()])
}

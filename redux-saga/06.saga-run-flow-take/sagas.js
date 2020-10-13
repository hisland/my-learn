const { put, take, select, all, call } = ReduxSaga.effects

export function* hello() {
  console.log('start')

  yield take('LOGIN')
  console.log('do login')

  yield take('LOGOUT')
  console.log('do logout')

  console.log('end')
}

export function* rootSaga() {
  yield all([hello()])
}

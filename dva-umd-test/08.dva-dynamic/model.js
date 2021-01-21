export default {
  namespace: 'foo',
  state: {
    that: 1,
  },
  reducers: {
    add(state, action) {
      console.log('foo reducers add:', state, action)
      return {
        ...state,
        that: state.that + 1,
      }
    },
    del(state, action) {
      console.log('foo reducers del:', state, action)
      return {
        ...state,
        that: state.that - 1,
      }
    },
  },
  effects: {
    *SomeEffect(action, effects) {
      const { call, put } = effects
      console.log('effect 1', arguments)
      console.log(action)
      yield call(function delay(ms, value = true) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms, value)
        })
      }, 1000)
      console.log('effect 2')
      yield put({ type: 'add' })
      console.log('effect 3')
    },
  },
  subscriptions: {
    setup({ dispatch, history }, done) {
      console.log('subscriptions setup: ')
      return function unlisten() {
        console.log('subscriptions unlisten: ')
      }
    },
  },
}

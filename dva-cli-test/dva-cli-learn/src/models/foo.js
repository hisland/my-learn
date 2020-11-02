function delay(ms, value = true) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms, value)
  })
}

export default {
  namespace: 'foo',

  state: {
    some: 'value',
    count: 0,
  },

  subscriptions: {
    // eslint-disable-line
    setup({ dispatch, history }) {},
  },

  effects: {
    *asyncSetSome({ payload }, { call, put }) {
      yield call(delay, 1000)
      yield put({ type: 'setSome', payload })
    },
  },

  reducers: {
    setSome(state, action) {
      return { ...state, some: action.payload }
    },
    inc(state, action) {
      return { ...state, count: state.count + 1 }
    },
    dec(state, action) {
      return { ...state, count: state.count - 1 }
    },
  },
}

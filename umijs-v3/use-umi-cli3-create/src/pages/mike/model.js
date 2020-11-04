export default {
  namespace: 'mike',
  state: [],
  reducers: {
    add(state, { payload }) {
      return [...state, payload];
    },
  },
  effects: {
    *delayAdd(action, { put, call, select }) {
      const state = yield select();
      console.log('select state: ', state);
      yield call(delay, 300);
      yield put({ type: 'add', payload: action.payload });
    },
  },
};

function delay(ms, value = true) {
  return new Promise(resolve => {
    setTimeout(resolve, ms, value);
  });
}

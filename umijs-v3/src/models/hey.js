export default {
  namespace: 'some',
  state: {
    hello: 1,
  },
  reducers: {
    plus(state, action) {
      console.log('some reducers plus:', state, action);
      return {
        ...state,
        hello: state.hello + 1,
      };
    },
    minus(state, action) {
      console.log('some reducers minus:', state, action);
      return {
        ...state,
        hello: state.hello - 1,
      };
    },
  },
};

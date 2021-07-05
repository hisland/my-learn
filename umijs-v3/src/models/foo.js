export default {
  // namespace: 'foo',
  state: {
    hello: 1,
  },
  reducers: {
    plus(state, action) {
      console.log('foo reducers plus:', state, action);
      return {
        ...state,
        hello: state.hello + 1,
      };
    },
    minus(state, action) {
      console.log('foo reducers minus:', state, action);
      return {
        ...state,
        hello: state.hello - 1,
      };
    },
  },
};

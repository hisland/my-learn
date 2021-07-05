export default {
  namespace: 'ns/sub',
  state: {
    yes: 1,
  },
  reducers: {
    plus(state, action) {
      console.log('say reducers plus:', state, action);
      return {
        ...state,
        yes: state.yes + 1,
      };
    },
    minus(state, action) {
      console.log('say reducers minus:', state, action);
      return {
        ...state,
        yes: state.yes - 1,
      };
    },
  },
};

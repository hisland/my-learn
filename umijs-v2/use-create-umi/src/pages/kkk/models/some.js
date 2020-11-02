export default {
  namespace: 'kkk',
  state: [],
  reducers: {
    add(state, { payload }) {
      return [...state, payload];
    },
  },
};

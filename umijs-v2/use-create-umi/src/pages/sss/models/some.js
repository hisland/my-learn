export default {
  namespace: 'sss',
  state: ['init'],
  reducers: {
    add(state, { payload }) {
      return [...state, payload];
    },
  },
};

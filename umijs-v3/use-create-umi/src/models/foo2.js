export default {
  namespace: 'god/say',
  state: [],
  reducers: {
    add(state, { payload }) {
      return [...state, payload];
    },
  },
};

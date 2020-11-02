export default {
  // namespace: '', // 保持文件名
  state: [],
  reducers: {
    add(state, { payload }) {
      return [...state, payload];
    },
  },
};

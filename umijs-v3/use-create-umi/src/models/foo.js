export default {
  // namespace: 'god', // 不指定会使用文件名
  state: [],
  reducers: {
    add(state, { payload }) {
      return [...state, payload];
    },
  },
};

export default {
  namespace: 'god', // 指定了就覆盖文件名, 重名会报错
  state: [],
  reducers: {
    add(state, { payload }) {
      return [...state, payload];
    },
  },
};

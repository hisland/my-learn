import routes from './router.config.js';

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // asset是模块名，可以根据自己的模块调整。
  mountElementId: 'asset',
  history: 'hash',
  hash: true,
  publicPath: './',
  // 删掉 routes, 会按约定式来, 保留则按配置来
  routes,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'zzz',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};

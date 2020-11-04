import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: './',
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/layout.js',
      routes: [
        { path: '/', component: '@/pages/index.js' },
        { path: '/hello', component: '@/pages/hello/hello.js' },
        { path: '/mike', component: '@/pages/mike/mike.js' },
      ],
    },
  ],
});

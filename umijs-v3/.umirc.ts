import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/foo', component: '@/pages/foo/foo' },
    { path: '/mike', component: '@/pages/mike/mike' },
  ],
  externals: {
    // react: 'window.React',
  },
  fastRefresh: {},
  dva: {},
});

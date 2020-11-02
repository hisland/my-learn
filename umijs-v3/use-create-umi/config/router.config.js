export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/foo',
        component: './foo',
      },
      {
        path: '/bik',
        component: './bik',
      },
      {
        path: '/',
        component: '../pages/index',
      },
      {
        path: '/kkk/kkk',
        component: '../pages/kkk/kkk',
      },
    ],
  },
];

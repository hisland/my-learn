import { dynamic } from 'umi';
export default dynamic({
  loader: async function() {
    console.log('loading pages/HugeA');
    // 这里的注释 webpackChunkName 可以指导 webpack 将该组件 HugeA 以这个名字单独拆出去
    const { default: HugeA } = await import(
      /* webpackChunkName: "external_A" */ './HugeA'
    );
    console.log('loaded pages/HugeA');
    return HugeA;
  },
});

import { Graph } from '@antv/g6'

const graph = new Graph({
  container: 'container',
  node: {
    style: {
      labelText: (d) => d.id,
      ports: [],
    },
    palette: {
      type: 'group',
      field: 'cluster',
    },
  },
  autoFit: 'center',
  layout: {
    type: 'radial',
    nodeSize: 10,
    unitRadius: 100,
    linkDistance: 50,
    // sortBy: 'degree', // 可以按度数（连接数）排序
    // radial: {
    //   radius: 0.5,
    //   strength: 0.5,
    // },
    // x: 0.1,
    // y: 0.1,
    // center: {
    //   // x: 200,
    //   // y: 200,
    // },
  },
  behaviors: [
    'zoom-canvas',
    'drag-canvas',
    'drag-element',

    // {
    //   type: 'click-select',
    //   multiple: true,
    // },
    {
      type: 'lasso-select',
    },
    {
      type: 'collapse-expand',
    },
  ],
})

graph.setData({
  nodes: [
    { id: '1', label: '中心节点' },
    { id: '11', label: '一级节点1' },
    { id: '12', label: '一级节点2' },
    { id: '111', label: '二级节点1' },
    { id: '112', label: '二级节点2' },
    { id: '113', label: '二级节点1', collapsed: true },
    { id: '121', label: '三级节点2', collapsed: true },
    { id: '122', label: '三级节点1', collapsed: true },
    { id: '123', label: '三级节点2', collapsed: true },
    { id: '1221', label: '四级节点1', collapsed: true },
    { id: '12211', label: '五级节点2', collapsed: true },
  ],
  edges: [
    { source: '1', target: '11' },
    { source: '1', target: '12' },
    { source: '11', target: '111' },
    { source: '11', target: '112' },
    { source: '11', target: '113' },
    { source: '12', target: '121' },
    { source: '12', target: '122' },
    { source: '12', target: '123' },
    { source: '123', target: '1221' },
    { source: '1221', target: '12211' },
  ],
})

graph.render()

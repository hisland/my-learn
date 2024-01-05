<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'
import type { GraphData } from '@antv/g6'

// G6.registerNode('image2', {
//   draw(cfg, group) {
//       return group.
//   },
// }, 'image')

const divRef = ref<HTMLDivElement>()
const graphRef = ref<Graph>()
onMounted(() => {
  const graph = new G6.Graph({
    container: divRef.value!,
    width: 600,
    height: 400,
    modes: {
      default: [
        // 允许拖拽画布、放缩画布、拖拽节点
        'drag-canvas',
        'zoom-canvas',
        'drag-node',
      ],
    },
    defaultNode: {
      size: [80, 40],
      type: 'rect',
    },
    defaultEdge: {
      type: 'cubic',
    },
    nodeStateStyles: {
      hover: {
        fillOpacity: 0.3,
        lineWidth: 10,
      },
    },
  })

  const data: GraphData = {
    // 点集
    nodes: [
      {
        id: 'node1', // String，该节点存在则必须，节点的唯一标识
        x: 100,
        y: 100,
        label: 'rect',
        type: 'rect',
        style: {
          // 仅在 keyShape 上生效
          fill: 'lightblue',
          stroke: 'red',
          lineWidth: 1,
          radius: 7,
        },
        linkPoints: {
          top: true,
          bottom: true,
          left: true,
          right: true,
          // ... 四个圆的样式可以在这里指定
        },
        // labelCfg: {...} // 标签的样式可以在这里指定
      },
    ],
    // 边集
    edges: [
      // {
      //   source: 'node1', // String，必须，起始点 id
      //   target: 'node2', // String，必须，目标点 id
      // },
    ],
  }

  graph.data(data) // 读取 Step 2 中的数据源到图上
  graph.render() // 渲染图

  // 监听鼠标进入节点事件
  graph.on('node:mouseenter', (evt) => {
    const node = evt.item
    // 激活该节点的 hover 状态
    node && graph.setItemState(node, 'hover', true)
  })
  // 监听鼠标离开节点事件
  graph.on('node:mouseleave', (evt) => {
    const node = evt.item
    // 关闭该节点的 hover 状态
    node && graph.setItemState(node, 'hover', false)
  })

  graphRef.value = graph

  window.kkk = graph
})
</script>
<template>
  <div>
    <button @click="graphRef!.setMode('edit')">edit</button>
    <button @click="graphRef!.setMode('default')">default</button>
    <span>{{ graphRef?.getCurrentMode() }}</span>
  </div>
  <div class="compWrap" ref="divRef"></div>
</template>
<style scoped lang="less">
.compWrap {
  background-color: #ddd; // 不能有背景, 因为是单独的 div, 并且 z-index: -1
  > :deep(canvas) {
    background-color: honeydew;
    display: block;
  }
}
</style>

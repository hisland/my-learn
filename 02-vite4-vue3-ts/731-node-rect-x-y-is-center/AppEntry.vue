<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'
import type { GraphData } from '@antv/g6'
import icon1Pc from '../719-img/icon1-pc.png'

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
    // defaultNode: {
    //   size: [80, 40],
    //   type: 'rect',
    // },
    // defaultEdge: {
    //   type: 'cubic',
    // },
  })

  const data: GraphData = {
    // 点集
    nodes: [
      {
        id: 'node1', // String，该节点存在则必须，节点的唯一标识
        x: 100, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        type: 'rect',
        size: [50, 50],
        style: {
          fill: 'pink',
          stroke: 'purple',
          fillOpacity: 0.3,
          lineWidth: 0,
        },
        label: '50x50',
        labelCfg: {
          position: 'bottom',
        },
      },
      {
        id: 'node2', // String，该节点存在则必须，节点的唯一标识
        x: 100, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        type: 'rect',
        size: [100, 100],
        style: {
          fill: 'pink',
          stroke: 'green',
          fillOpacity: 0.2,
          lineWidth: 0,
        },
        label: '100x100',
        labelCfg: {
          position: 'bottom',
        },
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

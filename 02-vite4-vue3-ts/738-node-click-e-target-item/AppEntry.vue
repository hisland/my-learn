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
  })

  const data: GraphData = {
    // 点集
    nodes: [
      {
        id: 'node1', // String，该节点存在则必须，节点的唯一标识
        x: 100, // Number，可选，节点位置的 x 值
        y: 200, // Number，可选，节点位置的 y 值
        type: 'rect',
        size: [47, 46],
        style: {
          fill: 'pink',
          fillOpacity: 0.6,
          stroke: 'purple',
          lineWidth: 0,
        },
        linkPoints: {
          top: true,
          right: true,
          bottom: true,
          left: true,
        },
      },
    ],
    // 边集
    edges: [],
  }

  graph.data(data) // 读取 Step 2 中的数据源到图上
  graph.render() // 渲染图

  graphRef.value = graph

  window.kkk = graph

  graph.on('node:click', (e) => {
    console.log('e.target: ', e.target, 'e.item: ', e.item)
  })
})
</script>
<template>
  <div>
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

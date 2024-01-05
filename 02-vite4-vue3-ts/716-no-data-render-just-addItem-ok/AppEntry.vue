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

  graph.addItem('node', {
    id: 'node1',
    label: 'node1',
    x: 100,
    y: 100,
  })
  graph.addItem('node', {
    id: 'node2',
    label: 'node2',
    x: 200,
    y: 200,
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

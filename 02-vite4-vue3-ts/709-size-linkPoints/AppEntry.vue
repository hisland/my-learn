<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'

const divRef = ref<HTMLDivElement>()
const graphRef = ref<Graph>()
onMounted(() => {
  const graph = new G6.Graph({
    container: divRef.value!,
    width: 500,
    height: 300,
    modes: {
      default: [
        // 允许拖拽画布、放缩画布、拖拽节点
        'drag-canvas',
        'zoom-canvas',
        'drag-node',
        'click-select',
      ],
      edit: ['drag-node', 'click-add-node'],
    },
    defaultEdge: {
      type: 'cubic',
    },
    nodeStateStyles: {
      // The node styles in selected state
      selected: {
        stroke: '#666',
        lineWidth: 2,
        fill: 'purple',
      },
    },
    defaultNode: {
      type: 'circle',
      size: [80],
      linkPoints: {
        top: true,
        right: true,
        bottom: true,
        left: true,
      },
    },
  })

  const data = {
    // 点集
    nodes: [
      {
        id: 'node1', // String，该节点存在则必须，节点的唯一标识
        x: 100, // Number，可选，节点位置的 x 值
        y: 200, // Number，可选，节点位置的 y 值
      },
      {
        id: 'node2', // String，该节点存在则必须，节点的唯一标识
        x: 300, // Number，可选，节点位置的 x 值
        y: 200, // Number，可选，节点位置的 y 值
      },
    ],
    // 边集
    edges: [
      {
        source: 'node1', // String，必须，起始点 id
        target: 'node2', // String，必须，目标点 id
      },
    ],
  }

  graph.data(data) // 读取 Step 2 中的数据源到图上
  graph.render() // 渲染图
  // graph.setMode('edit')

  graphRef.value = graph
})

function addNode() {
  const count = graphRef.value!.getNodes().length
  graphRef.value!.addItem('node', {
    x: 10 * count,
    y: 10 * count,
    id: `node-${Date.now()}`, // Generate the unique id
  })
}
</script>
<template>
  <div>
    <button @click="addNode">addNode</button>
    <span>{{ graphRef?.getCurrentMode() }}</span>
  </div>
  <div class="compWrap" ref="divRef"></div>
</template>
<style scoped lang="less">
.compWrap {
  background-color: #eee; // 不能有背景, 因为是单独的 div, 并且 z-index: -1
  > :deep(canvas) {
    background-color: honeydew;
    display: block;
  }
}
</style>

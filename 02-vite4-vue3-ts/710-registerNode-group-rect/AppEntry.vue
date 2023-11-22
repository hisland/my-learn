<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'

G6.registerNode('hdl1', (cfg) => {
  return `
  <group>
  <rect style={{
          width: 150,
          height: 55,
          stroke: ${cfg.color},
          fill: #ffffff,
          radius: [0, 0, 6, 6],
        }} draggable="true">
          <text style={{ marginTop: 5, marginLeft: 3, fill: '#333', marginLeft: 4 }}>描述: {{description}}</text>
          <text style={{ marginTop: 10, marginLeft: 3, fill: '#333', marginLeft: 4 }}>创建者: {{meta.creatorName}}</text>
        </rect>
  </group>
        `
})

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
    nodes: [
      {
        id: 'node1',
        type: 'hdl1',
        color: '#2196f3',
        x: 100,
        y: 200,
      },
      {
        id: 'node2',
        x: 300,
        y: 200,
      },
    ],
    edges: [
      {
        source: 'node1',
        target: 'node2',
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

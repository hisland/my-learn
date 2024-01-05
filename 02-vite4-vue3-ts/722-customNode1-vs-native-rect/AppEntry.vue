<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'
import type { GraphData } from '@antv/g6'
import icon1Pc from '../719-img/icon1-pc.png'

G6.registerNode('customNode1', {
  draw(cfg, group) {
    console.log('cfg, group: ', cfg, group)
    const ss1 = group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        fill: 'pink',
      },
      name: 'customNode1-rect1',
    })
    const ss2 = group.addShape('rect', {
      attrs: {
        x: 10,
        y: 10,
        width: 30,
        height: 30,
        fill: 'green',
      },
      name: 'customNode1-rect2',
      draggable: true,
    })
    const ss3 = group.addShape('rect', {
      attrs: {
        x: 50,
        y: 50,
        width: 20,
        height: 20,
        fill: 'purple',
      },
      name: 'customNode1-rect3',
    })
    return ss1
  },
})

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
        x: 0, // Number，可选，节点位置的 x 值
        y: 0, // Number，可选，节点位置的 y 值
        linkPoints: { bottom: true },
        type: 'customNode1',
        label: '170.105.112.16',
        size: [100, 100],
      },
      {
        id: 'node2', // String，该节点存在则必须，节点的唯一标识
        x: 100, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        // linkPoints: { bottom: true },
        type: 'rect',
        style: {
          fill: 'red',
          fillOpacity: 0.2,
        },
        size: [100, 100],
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
    <div>绿色 draggable: true 可响应拖动</div>
    <div>pink是 keyShape 可响应拖动</div>
    <div>puprle 不能响应拖动</div>
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

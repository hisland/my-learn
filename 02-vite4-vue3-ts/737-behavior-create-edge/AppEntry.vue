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

let sourceAnchorIdx = -1
let targetAnchorIdx = -1

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
        {
          type: 'create-edge',
          shouldBegin: (e) => {
            const name = e.target?.get('name')
            targetAnchorIdx = -1
            if (name === 'link-point-top') {
              sourceAnchorIdx = 0
              return true
            } else if (name === 'link-point-right') {
              sourceAnchorIdx = 1
              return true
            } else if (name === 'link-point-bottom') {
              sourceAnchorIdx = 2
              return true
            } else if (name === 'link-point-left') {
              sourceAnchorIdx = 3
              return true
            } else {
              return false
            }
          },
          shouldEnd: (e) => {
            const name = e.target?.get('name')
            if (name === 'link-point-top') {
              targetAnchorIdx = 0
              return true
            } else if (name === 'link-point-right') {
              targetAnchorIdx = 1
              return true
            } else if (name === 'link-point-bottom') {
              targetAnchorIdx = 2
              return true
            } else if (name === 'link-point-left') {
              targetAnchorIdx = 3
              return true
            } else {
              return false
            }
          },
        },
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
          fillOpacity: 0.2,
          stroke: 'purple',
          lineWidth: 0,
        },
        anchorPoints: [
          [0.5, 0],
          [1, 0.5],
          [0.5, 1],
          [0, 0.5],
        ],
        linkPoints: {
          top: true,
          right: true,
          bottom: true,
          left: true,
        },
      },
      {
        id: 'node2', // String，该节点存在则必须，节点的唯一标识
        x: 200, // Number，可选，节点位置的 x 值
        y: 300, // Number，可选，节点位置的 y 值
        type: 'rect',
        size: [47, 46],
        style: {
          fill: 'pink',
          fillOpacity: 0.2,
          stroke: 'purple',
          lineWidth: 0,
        },
        anchorPoints: [
          [0.5, 0],
          [1, 0.5],
          [0.5, 1],
          [0, 0.5],
        ],
        linkPoints: {
          top: true,
          right: true,
          bottom: true,
          left: true,
        },
      },
    ],
    // 边集
    edges: [
      // {
      //   source: 'node1',
      //   target: 'node2',
      // },
    ],
  }

  graph.data(data) // 读取 Step 2 中的数据源到图上
  graph.render() // 渲染图

  graphRef.value = graph

  window.kkk = graph

  graph.on('afteradditem', (e) => {
    console.log('afteradditeme.item.getType(): ', e.item, sourceAnchorIdx)
    if (e.item && e.item.getType() === 'edge') {
      graph.updateItem(e.item, {
        sourceAnchor: sourceAnchorIdx,
      })
    }
  })
  graph.on('aftercreateedge', (e) => {
    console.log('aftercreateedge e.edge: ', e.edge)
    graph.updateItem(e.edge, {
      sourceAnchor: sourceAnchorIdx,
      targetAnchor: targetAnchorIdx,
    })
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

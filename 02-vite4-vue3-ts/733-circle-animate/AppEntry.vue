<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'
import type { GraphData } from '@antv/g6'
import icon1Pc from '../719-img/icon1-pc.png'

G6.registerNode(
  'circle-animate',
  {
    afterDraw(cfg, group) {
      // Get the first graphics shape of this type of node
      const shape = group.get('children')[0]
      // console.log('group: ', group)
      // The animation
      shape.animate(
        {
          // Whehter play the animation repeatly
          repeat: true,
          // Returns the properties for each frame. The input parameter ratio is a number that range from 0 to 1. The return value is an object that defines the properties for this frame.
          onFrame(ratio) {
            // Magnify first, and then shrink
            // const diff = ratio <= 0.5 ? ratio : 1 - ratio

            // const degrees = 90
            const radians = Math.PI * ratio
            const result = Math.sin(radians) // sin(x) 在 0-2PI 是一个完整的正弦周期
            // console.log('result: ', result)

            // const ratio2 = 1 + console.log('diff: ', diff)
            const radius = cfg.size
            const radius2 = radius / 2 + result * 20
            // console.log('radius2: ', radius2)
            return {
              r: radius2,
            }
          },
        },
        3000,
        'easeCubic'
      ) // The duration of one animation is 3000, and the easing fuction is 'easeCubic'
    },
  },
  'circle'
)

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
        y: 100, // Number，可选，节点位置的 y 值
        size: 100,
        type: 'circle-animate',
        style: {
          fill: 'pink',
          stroke: 'purple',
          fillOpacity: 0.3,
          lineWidth: 0,
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

  console.log('Math.sin(0): ', Math.sin(0))
  console.log('Math.sin(1): ', Math.sin(1))
  console.log('Math.sin(2): ', Math.sin(2))
  console.log('Math.sin(3): ', Math.sin(3))
  console.log('Math.sin(3.14): ', Math.sin(3.14))
  console.log(Math.PI)
  console.log('Math.sin(180): ', Math.sin(180))
  console.log('Math.sin(360): ', Math.sin(360))
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

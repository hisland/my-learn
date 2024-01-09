<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'
import type { GraphData } from '@antv/g6'
import icon1Pc from '../719-img/icon1-pc.png'

const { getLabelPosition, transform } = G6.Util

G6.registerEdge(
  'arrow-running',
  {
    afterDraw(cfg, group) {
      // get the first shape in the group, it is the edge's path here=
      const shape = group.get('children')[0]
      console.log("group.get('children'): ", group.get('children'))

      const arrow = group.addShape('marker', {
        attrs: {
          x: 16,
          y: 0,
          r: 8,
          lineWidth: 2,
          stroke: '#3370ff',
          fill: '#fff',
          symbol: (x, y, r) => {
            return [
              ['M', x - 6, y - 4],
              ['L', x - 2, y],
              ['L', x - 6, y + 4],
            ]
          },
        },
      })

      // animation for the red circle
      arrow.animate(
        (ratio) => {
          // the operations in each frame. Ratio ranges from 0 to 1 indicating the prograss of the animation. Returns the modified configurations
          // get the position on the edge according to the ratio
          const tmpPoint = shape.getPoint(ratio)
          const pos = getLabelPosition(shape, ratio)
          let matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1]
          matrix = transform(matrix, [
            ['t', -tmpPoint.x, -tmpPoint.y],
            ['r', pos.angle],
            ['t', tmpPoint.x, tmpPoint.y],
          ])

          // returns the modified configurations here, x and y here
          return {
            x: tmpPoint.x,
            y: tmpPoint.y,
            matrix,
          }
        },
        {
          repeat: true, // Whether executes the animation repeatly
          duration: 3000, // the duration for executing once
        }
      )
    },
  },
  'cubic' // extend the built-in edge 'cubic'
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
    defaultEdge: {
      type: 'arrow-running',
      style: {
        lineWidth: 2,
        stroke: '#bae7ff',
      },
    },
  })

  const data: GraphData = {
    nodes: [
      {
        id: 'node1',
        x: 100,
        y: 100,
        label: 'Node 1',
        labelCfg: {
          position: 'top',
        },
      },
      {
        id: 'node2',
        x: 300,
        y: 200,
        color: '#40a9ff',
        label: 'Node 2',
        labelCfg: {
          position: 'left',
          offset: 10,
        },
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

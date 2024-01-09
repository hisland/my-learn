<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'
import type { GraphData } from '@antv/g6'
import icon1Pc from '../719-img/icon1-pc.png'
import info1 from '../719-img/info1.png'
import info2 from '../719-img/info2.png'
import info3 from '../719-img/info3.png'
import info4 from '../719-img/info4.png'

G6.registerNode(
  'customNode1',
  {
    afterDraw(cfg, group, rst) {
      // console.log('cfg, group, rst: ', cfg, group, rst)
      if (cfg?.alarmType && group) {
        const img =
          cfg.alarmType === '1'
            ? info1
            : cfg.alarmType === '2'
            ? info2
            : cfg.alarmType === '3'
            ? info3
            : cfg.alarmType === '4'
            ? info4
            : ''
        group.addShape('image', {
          attrs: {
            x: -38 / 2,
            y: -30 / 2,
            width: 38,
            height: 30,
            img,
          },
          draggable: true,
        })
      }
    },
  },
  'image'
)

const divRef = ref<HTMLDivElement>()
const graphRef = ref<Graph>()
onMounted(() => {
  const graph = new G6.Graph({
    container: divRef.value!,
    width: 600,
    height: 400,
    // groupByTypes: false,
    modes: {
      default: [
        // 允许拖拽画布、放缩画布、拖拽节点
        {
          type: 'drag-canvas',
          // allowDragOnItem: true,
        },
        'zoom-canvas',
        {
          type: 'drag-node',
        },
      ],
    },
  })

  for (let ii = 0; ii < 10; ii++) {
    graph.addItem('node', {
      id: `node2-${ii}`,
      x: 30 * ii + 50, // Number，可选，节点位置的 x 值
      y: 50, // Number，可选，节点位置的 y 值
      type: 'customNode1',
      img: icon1Pc,
      label: `1-${ii}`,
      size: [50, 50],
      alarmType: (ii % 5) + '',
    })
  }
  for (let ii = 0; ii < 10; ii++) {
    graph.addItem('node', {
      id: `node3-${ii}`,
      x: 30 * ii + 50, // Number，可选，节点位置的 x 值
      y: 80, // Number，可选，节点位置的 y 值
      type: 'customNode1',
      img: icon1Pc,
      label: `2-${ii}`,
      size: [50, 50],
      alarmType: (ii % 5) + '',
    })
  }

  graph.on('node:click', (evt: IG6GraphEvent) => {
    console.log('evt.item: ', evt.item)
    evt.item?.toFront()
  })

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
    background-color: #eee;
    display: block;
  }
}
</style>

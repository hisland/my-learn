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

G6.registerNode('customGroup1', {
  draw(cfg, group) {
    console.log('cfg, group: ', cfg, group)
    // const rs = G6.Util.getSize(cfg)
    // console.log('rs: ', rs)
    const ss1 = group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: cfg.size[0],
        height: cfg.size[1],
        fill: cfg.bgColor,
      },
      name: 'customNode1-rect1',
    })
    const ss2 = group.addShape('text', {
      attrs: {
        x: 10,
        y: 10,
        fill: '#000',
        text: cfg.label,
        textAlign: 'left',
        textBaseline: 'top',
      },
      name: 'customNode1-rect3',
      draggable: true,
    })
    // const ss3 = group.addShape('rect', {
    //   attrs: {
    //     x: 50,
    //     y: 50,
    //     width: 20,
    //     height: 20,
    //     fill: 'purple',
    //   },
    //   name: 'customNode1-rect3',
    // })
    return ss1
  },
})
G6.registerNode(
  'customNode1',
  {
    // draw(cfg, group) {
    //   console.log('cfg, group: ', cfg, group)
    //   const ss1 = group.addShape('rect', {
    //     attrs: {
    //       x: 0,
    //       y: 0,
    //       width: 100,
    //       height: 100,
    //       fill: 'pink',
    //     },
    //     name: 'customNode1-rect1',
    //   })
    //   return ss1
    // },
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
    modes: {
      default: [
        // 允许拖拽画布、放缩画布、拖拽节点
        {
          type: 'drag-canvas',
          allowDragOnItem: true,
          shouldBegin(evt: IG6GraphEvent) {
            const mm = evt.item?.getModel()
            console.log('drag-canvas: mm', mm)
            if (!mm || mm?.type === 'customGroup1') {
              return true
            } else {
              return false
            }
          },
        },
        'zoom-canvas',
        {
          type: 'drag-node',
          shouldBegin(evt: IG6GraphEvent) {
            const mm = evt.item.getModel()
            console.log('drag-node: mm', mm)
            if (mm?.type === 'customGroup1') {
              return false
            } else {
              return true
            }
          },
        },
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

  const height = (400 - 10 * 2) / 3

  const data: GraphData = {
    // 点集
    nodes: [
      {
        id: 'node1-1', // String，该节点存在则必须，节点的唯一标识
        x: 0, // Number，可选，节点位置的 x 值
        y: 0, // Number，可选，节点位置的 y 值
        type: 'customGroup1',
        label: '管理层',
        size: [600, height],
        bgColor: '#f2f4f5',
      },
      {
        id: 'node1-2', // String，该节点存在则必须，节点的唯一标识
        x: 0, // Number，可选，节点位置的 x 值
        y: (height + 10) * 1, // Number，可选，节点位置的 y 值
        type: 'customGroup1',
        label: '控制层',
        size: [600, height],
        bgColor: '#f6f8fa',
      },
      {
        id: 'node1-3', // String，该节点存在则必须，节点的唯一标识
        x: 0, // Number，可选，节点位置的 x 值
        y: (height + 10) * 2, // Number，可选，节点位置的 y 值
        type: 'customGroup1',
        label: '生产层',
        size: [600, height],
        bgColor: '#fafafc',
      },
      {
        id: 'node2', // String，该节点存在则必须，节点的唯一标识
        x: 100, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        type: 'customNode1',
        img: icon1Pc,
        label: '170.105.112.16',
        size: [50, 50],
        alarmType: '1',
        comboId: 'comb1',
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
  // console.log('kkk.save(): ', kkk.save().nodes)
  console.log('kkk.save().nodes: ', kkk.save().nodes)
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
    background-color: #fff;
    display: block;
  }
}
</style>

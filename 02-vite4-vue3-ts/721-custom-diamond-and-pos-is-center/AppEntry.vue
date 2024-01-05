<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'
import type { GraphData } from '@antv/g6'
import icon1Pc from '../719-img/icon1-pc.png'

G6.registerNode('diamond', {
  draw(cfg, group) {
    // 如果 cfg 中定义了 style 需要同这里的属性进行融合
    const keyShape = group.addShape('path', {
      attrs: {
        path: this.getPath(cfg), // 根据配置获取路径
        stroke: cfg.color, // 颜色应用到描边上，如果应用到填充，则使用 fill: cfg.color
      },
      // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
      name: 'path-shape',
      // 设置 draggable 以允许响应鼠标的图拽事件
      draggable: true,
    })
    if (cfg.label) {
      // 如果有文本
      // 如果需要复杂的文本配置项，可以通过 labeCfg 传入
      // const style = (cfg.labelCfg && cfg.labelCfg.style) || {};
      // style.text = cfg.label;
      const label = group.addShape('text', {
        // attrs: style
        attrs: {
          x: 0, // 居中
          y: 0,
          textAlign: 'center',
          textBaseline: 'middle',
          text: cfg.label,
          fill: '#666',
        },
        // 在 G6 3.3 及之后的版本中，必须指定 name，可以是任意字符串，但需要在同一个自定义元素类型中保持唯一性
        name: 'text-shape',
        // 设置 draggable 以允许响应鼠标的图拽事件
        draggable: true,
      })
    }
    return keyShape
  },
  // 返回菱形的路径
  getPath(cfg) {
    const size = cfg.size || [40, 40] // 如果没有 size 时的默认大小
    const width = size[0]
    const height = size[1]
    //  / 1 \
    // 4     2
    //  \ 3 /
    const path = [
      ['M', 0, 0 - height / 2], // 上部顶点
      ['L', width / 2, 0], // 右侧顶点
      ['L', 0, height / 2], // 下部顶点
      ['L', -width / 2, 0], // 左侧顶点
      ['Z'], // 封闭
    ]
    return path
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
        x: 100, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        // linkPoints: { bottom: true },
        type: 'diamond',
        color: 'red',
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
    background-color: honeydew;
    display: block;
  }
}
</style>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'

G6.registerBehavior('click-add-node', {
  getEvents() {
    return {
      'canvas:click': 'onClick',
    }
  },
  onClick(ev: IG6GraphEvent) {
    const self = this
    const graph = self.graph
    // Add a new node
    graph.addItem('node', {
      x: ev.canvasX,
      y: ev.canvasY,
      id: `node-${Date.now()}`, // Generate the unique id
    })
  },
})

G6.registerBehavior('click-add-edge', {
  getEvents() {
    return {
      'node:click': 'onClick',
      mousemove: 'onMousemove',
      'edge:click': 'onEdgeClick', // 点击空白处，取消边
    }
  },
  onClick(ev: IG6GraphEvent) {
    const node = ev.item
    const graph = this.graph
    const point = {
      x: ev.x,
      y: ev.y,
    }
    const model = node.getModel()
    if (this.addingEdge && this.edge) {
      graph.updateItem(this.edge, {
        target: model.id,
      })
      // graph.setItemState(this.edge, 'selected', true)
      this.edge = null
      this.addingEdge = false
    } else {
      this.edge = graph.addItem('edge', {
        source: model.id,
        target: point,
      })
      this.addingEdge = true
    }
  },
  onMousemove(ev: IG6GraphEvent) {
    const point = {
      x: ev.x,
      y: ev.y,
    }
    if (this.addingEdge && this.edge) {
      this.graph.updateItem(this.edge, {
        target: point,
      })
    }
  },
  onEdgeClick(ev: IG6GraphEvent) {
    const currentEdge = ev.item
    const graph = this.graph
    // 拖拽过程中，点击会点击到新增的边上
    if (this.addingEdge && this.edge == currentEdge) {
      graph.removeItem(this.edge)
      this.edge = null
      this.addingEdge = false
    }
  },
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
      ],
      edit: [
        'click-add-edge',
        {
          type: 'drag-node',
          // shouldBegin: (e, self) => {
          //   console.log('e, self: ', e, self)
          //   // // 不允许拖拽 id 为 'node1' 的节点
          //   // if (e.item && e.item.getModel().id === 'node1') return false
          // },
        },
        'click-add-node',
      ],
    },
    defaultNode: {
      size: [80, 40],
      type: 'rect',
    },
    defaultEdge: {
      type: 'cubic',
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
      // {
      //   source: 'node1', // String，必须，起始点 id
      //   target: 'node2', // String，必须，目标点 id
      // },
    ],
  }

  graph.data(data) // 读取 Step 2 中的数据源到图上
  graph.render() // 渲染图
  graph.setMode('edit')

  graphRef.value = graph
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
  background-color: #eee; // 不能有背景, 因为是单独的 div, 并且 z-index: -1
  > :deep(canvas) {
    background-color: honeydew;
    display: block;
  }
}
</style>

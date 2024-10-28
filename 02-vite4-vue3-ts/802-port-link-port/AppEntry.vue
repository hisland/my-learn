<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import { Graph } from '@antv/x6'

const divRef = ref<HTMLDivElement>()
let graphRef: Graph
onMounted(() => {
  graphRef = new Graph({
    container: divRef.value!,
    grid: true,
  })

  const node1 = graphRef.addNode({
    x: 40,
    y: 40,
    width: 100,
    height: 100,
    ports: {
      items: [
        {
          id: 'port1',
          group: 'group1',
          attrs: {
            text: {
              text: 'hello',
            },
          },
        },
        {
          id: 'port2',
          group: 'group1',
          attrs: {
            text: {
              text: 'hello2',
            },
          },
        },
      ],
      groups: {
        group1: {
          attrs: {
            circle: {
              r: 6,
              stroke: 'red',
              magnet: true,
            },
          },
          label: {
            position: {
              name: 'right',
            },
          },
        },
      },
    },
  })
  console.log('node1: ', node1)
  const node2 = graphRef.addNode({
    x: 240,
    y: 40,
    width: 100,
    height: 100,
    ports: {
      items: [
        {
          id: 'port1',
          group: 'group1',
        },
        {
          id: 'port2',
          group: 'group1',
        },
      ],
      groups: {
        group1: {
          attrs: {
            circle: {
              r: 6,
              stroke: 'red',
              magnet: true,
            },
          },
        },
      },
    },
  })
  console.log('node2: ', node2)
  console.log('graphRef: ', graphRef.getCells())

  const line1 = graphRef.addEdge({
    source: {
      cell: node1,
      port: 'port1',
    },
    target: {
      cell: node2,
      port: 'port2',
    },
  })
  console.log('line1: ', line1)

  // graphRef.data(data) // 读取 Step 2 中的数据源到图上
  // graphRef.render() // 渲染图
  // graphRef.setMode('edit')
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

  width: 800px;
  height: 500px;
  > :deep(canvas) {
    background-color: honeydew;
    display: block;
  }
}
</style>

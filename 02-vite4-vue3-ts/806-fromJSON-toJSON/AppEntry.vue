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

  // const node1 = graphRef.addNode({
  //   x: 40,
  //   y: 40,
  //   width: 100,
  //   height: 100,
  //   ports: {
  //     items: [
  //       {
  //         id: 'port1',
  //         group: 'group1',
  //         attrs: {
  //           text: {
  //             text: 'hello',
  //           },
  //         },
  //       },
  //       {
  //         id: 'port2',
  //         group: 'group1',
  //         attrs: {
  //           text: {
  //             text: 'hello2',
  //           },
  //         },
  //       },
  //     ],
  //     groups: {
  //       group1: {
  //         attrs: {
  //           circle: {
  //             r: 6,
  //             stroke: 'red',
  //             magnet: true,
  //           },
  //         },
  //         label: {
  //           position: {
  //             name: 'right',
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  // console.log('node1: ', node1)
  // const node2 = graphRef.addNode({
  //   x: 240,
  //   y: 40,
  //   width: 100,
  //   height: 100,
  //   ports: {
  //     items: [
  //       {
  //         id: 'port1',
  //         group: 'group1',
  //       },
  //       {
  //         id: 'port2',
  //         group: 'group1',
  //       },
  //     ],
  //     groups: {
  //       group1: {
  //         attrs: {
  //           circle: {
  //             r: 6,
  //             stroke: 'red',
  //             magnet: true,
  //           },
  //         },
  //       },
  //     },
  //   },
  // })
  // console.log('node2: ', node2)

  // const line1 = graphRef.addEdge({
  //   source: {
  //     cell: node1,
  //     port: 'port1',
  //   },
  //   target: {
  //     cell: node2,
  //     port: 'port2',
  //   },
  // })
  // console.log('line1: ', line1)

  graphRef.fromJSON({
    cells: [
      {
        position: {
          x: 40,
          y: 40,
        },
        size: {
          width: 100,
          height: 100,
        },
        visible: true,
        shape: 'rect',
        id: 'e0cbb182-76b3-434e-827b-eec7f2cc1221',
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
        zIndex: 1,
      },
      {
        position: {
          x: 240,
          y: 40,
        },
        size: {
          width: 100,
          height: 100,
        },
        visible: true,
        shape: 'rect',
        id: '55e56099-ef59-41bf-8372-b9ad7c33c7d7',
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
        zIndex: 2,
      },
      {
        shape: 'edge',
        id: '1a4518a8-f137-47d7-b56a-e4610ad704d1',
        source: {
          cell: 'e0cbb182-76b3-434e-827b-eec7f2cc1221',
          port: 'port1',
        },
        target: {
          cell: '55e56099-ef59-41bf-8372-b9ad7c33c7d7',
          port: 'port2',
        },
        zIndex: 3,
      },
    ],
  })

  console.log('graphRef: ', graphRef.toJSON())

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

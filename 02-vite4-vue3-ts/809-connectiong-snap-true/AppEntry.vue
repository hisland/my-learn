<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'

import { Graph } from '@antv/x6'

const divRef = ref<HTMLDivElement>()
let graphRef: Graph
onMounted(() => {
  graphRef = new Graph({
    container: divRef.value!,
    grid: true,
    mousewheel: {
      enabled: true,
      zoomAtMousePosition: true,
      modifiers: 'ctrl',
      minScale: 0.5,
      maxScale: 3,
    },
    connecting: {
      snap: true,
      allowBlank: false,
      highlight: true,
      validateConnection(obj) {
        console.log('obj: ', obj)
        return !!obj.targetMagnet
      },
    },
    highlighting: {
      magnetAvailable: {
        name: 'stroke',
        args: {
          fill: 'green',
          stroke: 'cyan',
        },
      },
    },
  })

  const node1 = graphRef.addNode({
    x: 80,
    y: 80,
    width: 200,
    height: 100,
    ports: {
      items: [
        {
          id: 'port1',
          group: 'groupAction',
          attrs: {
            text: {
              text: '动作1',
            },
          },
        },
        {
          id: 'port2',
          group: 'groupAction',
          attrs: {
            text: {
              text: '动作2',
            },
          },
        },
        {
          id: 'port3',
          group: 'groupEvent',
          attrs: {
            text: {
              text: '事件1',
            },
          },
        },
        {
          id: 'port4',
          group: 'groupEvent',
          attrs: {
            text: {
              text: '动作2',
            },
          },
        },
      ],
      groups: {
        groupAction: {
          position: {
            name: 'left',
          },
          attrs: {
            circle: {
              r: 6,
              stroke: 'pink',
              magnet: 'passive',
            },
          },
          label: {
            position: {
              name: 'right',
            },
          },
        },
        groupEvent: {
          position: {
            name: 'right',
          },
          attrs: {
            circle: {
              r: 6,
              stroke: 'red',
              magnet: true,
            },
          },
          label: {
            position: {
              name: 'left',
            },
          },
        },
      },
    },
  })
  console.log('node1: ', node1)
  const node2 = graphRef.addNode({
    x: 380,
    y: 180,
    width: 200,
    height: 100,
    ports: {
      items: [
        {
          id: 'port1',
          group: 'groupAction',
          attrs: {
            text: {
              text: '动作1',
            },
          },
        },
        {
          id: 'port2',
          group: 'groupAction',
          attrs: {
            text: {
              text: '动作2',
            },
          },
        },
        {
          id: 'port3',
          group: 'groupEvent',
          attrs: {
            text: {
              text: '事件1',
            },
          },
        },
        {
          id: 'port4',
          group: 'groupEvent',
          attrs: {
            text: {
              text: '动作2',
            },
          },
        },
      ],
      groups: {
        groupAction: {
          position: {
            name: 'left',
          },
          attrs: {
            circle: {
              r: 6,
              stroke: 'pink',
              magnet: 'passive',
            },
          },
          label: {
            position: {
              name: 'right',
            },
          },
        },
        groupEvent: {
          position: {
            name: 'right',
          },
          attrs: {
            circle: {
              r: 6,
              stroke: 'red',
              magnet: true,
            },
          },
          label: {
            position: {
              name: 'left',
            },
          },
        },
      },
    },
  })
  console.log('node2: ', node2)

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

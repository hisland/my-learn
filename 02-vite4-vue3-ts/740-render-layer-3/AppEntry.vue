<script setup lang="ts">
import {
  ref,
  reactive,
  onMounted,
  computed,
  nextTick,
  watch,
  markRaw,
} from 'vue'
import { useElementSize } from '@vueuse/core'

import groupBy from 'lodash-es/groupBy'
import flattenDeep from 'lodash-es/flattenDeep'
import G6 from '@antv/g6'
import type { Graph } from '@antv/g6'
import type { IG6GraphEvent } from '@antv/g6'
import type { GraphData } from '@antv/g6'
import type { NodeConfig } from '@antv/g6'
import icon1Pc from '../719-img/icon1-pc.png'
import icon2Unkown from '../719-img/icon2-unkown.png'
import icon2Control from '../719-img/icon2-control.png'
import icon3Pe from '../719-img/icon3-pe.png'
import info1 from '../719-img/info1.png'
import info2 from '../719-img/info2.png'
import info3 from '../719-img/info3.png'
import info4 from '../719-img/info4.png'

G6.registerNode('layerNode', {
  draw(cfg, group) {
    const ss1 = group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: cfg.size[0],
        height: cfg.size[1],
        fill: cfg.bgColor,
      },
      name: 'layerNode-rect',
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
      name: 'layerNode-text',
      draggable: true,
    })
    return ss1
  },
})

G6.registerNode(
  'alarmNode',
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

async function getCeList() {
  const ceList = [
    {
      id: 'ce1',
      ceName: '监控1',
      ceTypeId: '1',
    },
    {
      id: 'ce2',
      ceName: '监控2',
      ceTypeId: '1',
    },
    {
      id: 'ce5',
      ceName: '控制5',
      ceTypeId: '2',
    },
    {
      id: 'ce6',
      ceName: '控制6',
      ceTypeId: '2',
    },
    {
      id: 'ce7',
      ceName: '控制7',
      ceTypeId: '2',
    },
  ] as NodeConfig[]

  for (let ii = 8; ii < 40; ii++) {
    ceList.push({
      id: `ce${ii}`,
      ceName: `控制${ii}`,
      ceTypeId: '2',
    })
  }

  return ceList
}

async function getPeList() {
  const peList = [
    {
      id: 'pe1',
      peName: '设备1',
      ceId: 'ce5',
    },
    {
      id: 'pe2',
      peName: '设备2',
      ceId: 'ce5',
    },
    {
      id: 'pe3',
      peName: '设备3',
      ceId: 'ce5',
    },
    {
      id: 'pe4',
      peName: '设备4',
      ceId: 'ce6',
    },
    {
      id: 'pe5',
      peName: '设备5',
      ceId: 'ce6',
    },
    {
      id: 'pe6',
      peName: '设备6',
      ceId: 'ce6',
    },
    {
      id: 'pe7',
      peName: '设备7',
      ceId: 'ce7',
    },
    {
      id: 'pe8',
      peName: '设备8',
      ceId: 'ce7',
    },
    {
      id: 'pe9',
      peName: '设备9',
      ceId: 'ce7',
    },
  ]
  for (let ii = 10; ii < 40; ii++) {
    peList.push({
      id: `pe${ii}`,
      peName: `设备${ii}`,
      ceId: 'ce7',
    })
  }
  return peList
}
async function getCommList() {
  const commList = [
    {
      srcCeId: 'ce1',
      dstCeId: 'ce6',
    },
    {
      srcCeId: 'ce1',
      dstCeId: 'ce7',
    },
    {
      srcCeId: 'ce1',
      dstCeId: 'ce2',
    },
    {
      srcCeId: 'ce2',
      dstCeId: 'ce5',
    },
  ]
  return commList
}

async function getCeTypeList() {
  return [
    {
      ceTypeId: '1',
      ceTypeName: '过程监控层',
    },
    {
      ceTypeId: '2',
      ceTypeName: '现场控制层',
    },
  ]
}

const divRef = ref<HTMLDivElement>()
const { width, height } = useElementSize(divRef)

async function RenderData() {
  if (!graphRef.value) return

  const itemSize = 40
  const itemGapWidth = 10
  const itemGapHeight = 30
  const groupGapHeight = 10
  const countPerLine = 10

  const domWidth = width.value
  const domHeight = height.value
  const domHeight2 = Math.round((domHeight - 2 * groupGapHeight) / 3)

  const ceList = await getCeList()

  for (const vv of ceList) {
    vv.label = vv.ceName
    vv.type = 'alarmNode'
    vv.size = itemSize
    if (vv.ceTypeId === '1') {
      vv.img = icon1Pc
    } else if (vv.ceTypeId === '2') {
      vv.img = icon2Control
    }
  }

  const ceTypeList = await getCeTypeList()
  const ceTypeMap = computed(() => {
    const obj = {}
    for (const vv of ceTypeList) {
      obj[vv.ceTypeId] = vv.ceTypeName
    }
    return obj
  })

  const peList = await getPeList()
  for (const [index, vv] of Object.entries(peList)) {
    vv.label = vv.peName
    vv.type = 'alarmNode'
    vv.img = icon3Pe
    vv.size = itemSize
    vv.alarmType = (index % 5) + ''
  }

  const commList = await getCommList()

  const layer1List = ceList.filter((vv) => vv.ceTypeId === '1')
  const layer1Rows = Math.ceil(layer1List.length / countPerLine)
  const layer1Cols = layer1Rows > 1 ? countPerLine : layer1List.length
  const layer1ItemAllWidth =
    layer1Cols * (itemSize + itemGapWidth) + itemGapWidth
  const layer1ItemAllHeight =
    layer1Rows * (itemSize + itemGapHeight) + itemGapHeight
  const layer1UsedWidth = Math.max(domWidth, layer1ItemAllWidth)
  const layer1UsedHeight = Math.max(domHeight2, layer1ItemAllHeight)
  const layer1SingleWidth =
    (layer1UsedWidth - 2 * itemGapWidth - (layer1Cols - 1) * itemGapWidth) /
    layer1Cols
  const layer1SingleHeight =
    (layer1UsedHeight - 2 * itemGapHeight - (layer1Rows - 1) * itemGapHeight) /
    layer1Rows

  const layer2List = ceList.filter((vv) => vv.ceTypeId === '2')
  const layer2Rows = Math.ceil(layer2List.length / countPerLine)
  const layer2Cols = layer2Rows > 1 ? countPerLine : layer2List.length
  const layer2ItemAllWidth =
    layer2Cols * (itemSize + itemGapWidth) + itemGapWidth
  const layer2ItemAllHeight =
    layer2Rows * (itemSize + itemGapHeight) + itemGapHeight
  const layer2UsedWidth = Math.max(domWidth, layer2ItemAllWidth)
  const layer2UsedHeight = Math.max(domHeight2, layer2ItemAllHeight)
  const layer2SingleWidth =
    (layer2UsedWidth - 2 * itemGapWidth - (layer2Cols - 1) * itemGapWidth) /
    layer2Cols
  const layer2SingleHeight =
    (layer2UsedHeight - 2 * itemGapHeight - (layer2Rows - 1) * itemGapHeight) /
    layer2Rows

  const layer3List = peList
  const layer3Rows = Math.ceil(layer3List.length / countPerLine)
  const layer3Cols = layer3Rows > 1 ? countPerLine : layer3List.length
  const layer3ItemAllWidth =
    layer3Cols * (itemSize + itemGapWidth) + itemGapWidth
  const layer3ItemAllHeight =
    layer3Rows * (itemSize + itemGapHeight) + itemGapHeight
  const layer3UsedWidth = Math.max(domWidth, layer3ItemAllWidth)
  const layer3UsedHeight = Math.max(domHeight2, layer3ItemAllHeight)
  const layer3SingleWidth =
    (layer3UsedWidth - 2 * itemGapWidth - (layer3Cols - 1) * itemGapWidth) /
    layer3Cols
  const layer3SingleHeight =
    (layer3UsedHeight - 2 * itemGapHeight - (layer3Rows - 1) * itemGapHeight) /
    layer3Rows

  const layer1Size = {
    x: 0,
    y: 0,
    width: Math.max(domWidth, layer1ItemAllWidth),
    height: Math.max(domHeight2, layer1ItemAllHeight),
  }
  const layer2Size = {
    x: 0,
    y: layer1Size.y + layer1Size.height + groupGapHeight,
    width: Math.max(domWidth, layer2ItemAllWidth),
    height: Math.max(domHeight2, layer2ItemAllHeight),
  }
  const layer3Size = {
    x: 0,
    y: layer2Size.y + layer2Size.height + groupGapHeight,
    width: Math.max(domWidth, layer3ItemAllWidth),
    height: Math.max(domHeight2, layer3ItemAllHeight),
  }

  function getLayer1() {
    layer1List.forEach((vv, idx) => {
      const xx = idx % countPerLine
      const yy = (idx - xx) / countPerLine
      vv.x =
        itemGapWidth +
        (itemGapWidth + layer1SingleWidth) * xx +
        layer1SingleWidth / 2
      vv.y =
        itemGapHeight +
        (itemGapHeight + layer1SingleHeight) * yy +
        layer1SingleHeight / 2
    })
    return layer1List
  }
  function getLayer2() {
    layer2List.forEach((vv, idx) => {
      const xx = idx % countPerLine
      const yy = (idx - xx) / countPerLine
      vv.x =
        itemGapWidth +
        (itemGapWidth + layer2SingleWidth) * xx +
        layer2SingleWidth / 2
      vv.y =
        layer2Size.y +
        itemGapHeight +
        (itemGapHeight + layer2SingleHeight) * yy +
        layer2SingleHeight / 2
    })
    return layer2List
  }
  function getLayer3() {
    layer3List.forEach((vv, idx) => {
      const xx = idx % countPerLine
      const yy = (idx - xx) / countPerLine
      vv.x =
        itemGapWidth +
        (itemGapWidth + layer3SingleWidth) * xx +
        layer3SingleWidth / 2
      vv.y =
        layer3Size.y +
        itemGapHeight +
        (itemGapHeight + layer3SingleHeight) * yy +
        layer3SingleHeight / 2
    })
    return layer3List
  }
  function getLayerAll() {
    const list1 = [] as NodeConfig[]
    list1.push(...getLayer1())
    list1.push(...getLayer2())
    list1.push(...getLayer3())
    return list1
  }

  function getBgGroupAll() {
    const list1 = [] as NodeConfig[]
    list1.push({
      id: ceTypeList[0].ceTypeId,
      label: ceTypeList[0].ceTypeName,
      type: 'layerNode',
      bgColor: '#f2f4f5',
      x: layer1Size.x,
      y: layer1Size.y,
      size: [layer1Size.width, layer1Size.height],
    })
    list1.push({
      id: ceTypeList[1].ceTypeId,
      label: ceTypeList[1].ceTypeName,
      type: 'layerNode',
      bgColor: '#f6f8fa',
      x: layer2Size.x,
      y: layer2Size.y,
      size: [layer2Size.width, layer2Size.height],
    })
    list1.push({
      id: 'typePe',
      label: '生产设备层',
      type: 'layerNode',
      bgColor: '#fafafc',
      x: layer3Size.x,
      y: layer3Size.y,
      size: [layer3Size.width, layer3Size.height],
    })
    return list1
  }

  function getAllNodes() {
    return [
      ...getBgGroupAll(), //
      ...getLayerAll(),
    ]
  }
  function getAllEdges() {
    return [
      ...peList.map((vv) => ({
        source: vv.id,
        target: vv.ceId,
      })),
      ...commList.map((vv) => ({
        source: vv.srcCeId,
        target: vv.dstCeId,
      })),
    ]
  }

  const graphData: GraphData = {
    nodes: getAllNodes(),
    edges: getAllEdges(),
  }

  graphRef.value.read(graphData)

  const list2 = graphRef.value.findAll('node', (item) => {
    return item.getModel().type === 'layerNode'
  })
  for (const vv of list2) {
    vv.toBack()
  }

  graphRef.value.fitView()
}

const graphRef = ref<Graph>()
onMounted(() => {
  const graph = new G6.Graph({
    container: divRef.value!,
    groupByTypes: false,
    modes: {
      default: [
        {
          type: 'drag-canvas',
          allowDragOnItem: true,
          shouldBegin(evt: IG6GraphEvent) {
            const mm = evt.item?.getModel()
            // console.log('drag-canvas: mm', mm)
            if (!mm || mm?.type === 'layerNode') {
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
            const mm = evt.item?.getModel()
            // console.log('drag-node: mm', mm)
            if (mm?.type === 'alarmNode') {
              return true
            } else {
              return false
            }
          },
        },
      ],
    },
    defaultEdge: {
      style: {
        // stroke: 'red',
      },
    },
  })

  graph.on('node:click', (evt) => {
    console.log('evt: ', evt.target, evt.item)
  })
  graphRef.value = markRaw(graph)

  RenderData()

  window.kkk = graph
})
</script>
<template>
  <div>
    <button @click="RenderData()">RenderData()</button>
  </div>
  <div class="compWrap" ref="divRef"></div>
</template>
<style scoped lang="less">
.compWrap {
  width: 100%;
  height: 500px;
  background-color: #efefef; // 不能有背景, 因为是单独的 div, 并且 z-index: -1
  > :deep(canvas) {
    // background-color: #eee;
    display: block;
  }
}
</style>

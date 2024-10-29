<script setup lang="ts">
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { onMounted, ref } from 'vue'
const elRef = ref<HTMLElement | null>(null)
onMounted(() => {
  const chartInst = echarts.init(elRef.value!)

  const itemStyle1 = {
    borderColor: '#fff',
    borderWidth: 0,
    color: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [
        { offset: 0, color: '#1f68aa' }, // Left color for non-selected
        { offset: 1, color: '#0c2948' } // Right color for non-selected
      ]
    }
  }
  const itemStyle2 = {
    color: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [
        { offset: 0, color: '#0c2948' }, // Right color for selected
        { offset: 1, color: '#37c1da' } // Left color for selected
      ]
    },
    borderColor: '#ff6347',
    borderWidth: 0
  }
  const option: EChartsOption = {
    title: {
      text: 'Custom Funnel'
    },
    // tooltip: {
    //   trigger: 'item',
    //   formatter: '{a} <br/>{b} : {c}%'
    // },
    series: [
      {
        name: 'Conversion',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 10,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '30%',
        maxSize: '90%',
        sort: 'descending',
        gap: 10,
        label: {
          show: true,
          position: 'inside'
        },
        itemStyle: JSON.parse(JSON.stringify(itemStyle1)),
        emphasis: {
          itemStyle: JSON.parse(JSON.stringify(itemStyle2))
          // label: {
          //   fontSize: 20,
          //   fontWeight: 'bold',
          //   color: '#fff'
          // }
        },
        data: [
          { value: 60, name: 'Visit' },
          { value: 40, name: 'Consult' },
          { value: 20, name: 'Order' },
          { value: 80, name: 'Click' },
          { value: 100, name: 'Show' }
        ],
        selectedMode: 'single' // Enables single selection mode
      }
    ]
  }

  chartInst.on('click', function (params) {
    if (params.seriesType === 'funnel') {
      option.series[0].data.forEach((item) => {
        item.itemStyle = JSON.parse(JSON.stringify(itemStyle1))
      })
      option.series[0].data[params.dataIndex].itemStyle = JSON.parse(JSON.stringify(itemStyle2))
      chartInst.setOption(option) // Update the chart with new selection state
    }
  })
  chartInst.setOption(option)
})
</script>
<template>
  <div>
    <div ref="elRef" class="elRef"></div>
  </div>
</template>
<style scoped lang="scss">
.elRef {
  width: 300px;
  height: 300px;
  background: rgba($color: #000000, $alpha: 0.1);
}
</style>

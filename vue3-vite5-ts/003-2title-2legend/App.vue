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
    title: [
      {
        text: '销售与趋势分析1'
      },
      {
        text: '销售与趋势分析2',
        top: 20
      }
    ],
    tooltip: {
      trigger: 'axis'
    },
    legend: [
      {
        data: ['销售额'],
        top: 30,
        left:'50%'
      },
      {
        data: ['增长率'],
        top: 10,
        left: '70%'
      }
    ],
    xAxis: {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月']
    },
    yAxis: [
      {
        type: 'value',
        name: '销售额',
        position: 'left'
      },
      {
        type: 'value',
        name: '增长率',
        position: 'right'
      }
    ],
    series: [
      {
        name: '销售额',
        type: 'bar', // 柱状图
        data: [500, 700, 900, 800, 1200, 1300]
      },
      {
        name: '增长率',
        type: 'line', // 折线图
        yAxisIndex: 1, // 使用第二个y轴
        data: [5, 10, 15, 20, 15, 25]
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

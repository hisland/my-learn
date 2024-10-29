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
  const option: echarts.EChartsOption = {
    title: {
      text: '温度变化'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月']
    },
    yAxis: {
      type: 'value',
      name: '温度 (°C)'
    },
    series: [
      {
        name: '温度',
        type: 'line',
        data: [2, 4, 6, 10, 15, 20],
        markLine: {
          data: [
            { type: 'average', name: '平均值' } // 添加平均值标记线
          ],
          lineStyle: {
            color: 'blue',
            type: 'dashed' // 虚线样式
          },
          label: {
            formatter: '{b}: {c}' // 显示线名称和具体值
          }
        }
      }
    ]
  }

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

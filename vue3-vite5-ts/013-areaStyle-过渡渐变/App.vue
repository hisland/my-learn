<script setup lang="ts">
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { onMounted, ref } from 'vue'
const elRef = ref<HTMLElement | null>(null)
onMounted(() => {
  const chartInst = echarts.init(elRef.value!)

  const option: echarts.EChartsOption = {
    silent: true,
    xAxis: {
      type: 'category',
      data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    yAxis: {
      type: 'value',
      name: '攻击次数',
    },
    grid: {
      left: '30%',
      right: '5%',
      bottom: '10%',
      top: '5%',
    },
    animation: false,
    series: [
      {
        type: 'line',
        data: [67, 13, 82, 95, 71, 36, 47, 41, 100, 4, 22],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          color: '#ff4d4f',
          width: 1,
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              // 顶部深红
              { offset: 0, color: 'rgba(255, 0, 0, 0.85)' },

              // 中段偏黄
              { offset: 0.33, color: 'rgba(255, 120, 0, 0.65)' },

              // 再往下偏绿
              { offset: 0.66, color: 'rgba(0, 180, 0, 0.50)' },

              // 底部透明
              { offset: 1, color: 'rgba(0, 180, 0, 0)' },
            ],
          },
        },
      },
    ],
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
  height: 200px;
}
</style>

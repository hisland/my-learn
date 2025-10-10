<script setup lang="ts">
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { onMounted, ref } from 'vue'
const elRef = ref<HTMLElement | null>(null)
onMounted(() => {
  const chartInst = echarts.init(elRef.value!)

  const option: echarts.EChartsOption = {
    title: {
      text: '攻击趋势\n(近1小时)',
      top: 'center',
      textStyle: {
        color: '#ccc',
        fontSize: 12,
      },
    },
    legend: {
      show: false,
    },
    silent: true,
    xAxis: {
      type: 'category',
      data: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42',
        '43',
        '44',
        '45',
        '46',
        '47',
        '48',
        '49',
        '50',
        '51',
        '52',
        '53',
        '54',
        '55',
        '56',
        '57',
        '58',
        '59',
      ],
      show: false,
    },
    yAxis: {
      type: 'value',
      name: '攻击次数',
      show: false,
    },
    grid: {
      left: '30%',
      right: '0%',
      bottom: '0%',
      top: '0%',
    },
    animation: false,
    series: [
      {
        type: 'line',
        data: [
          67, 13, 82, 95, 71, 36, 47, 41, 100, 4, 22, 74, 12, 92, 60, 77, 39, 30, 9, 59, 11, 53, 25,
          63, 3, 14, 81, 6, 64, 98, 27, 84, 45, 34, 26, 80, 66, 93, 31, 5, 57, 70, 78, 90, 68, 96,
          29, 16, 87, 8, 19, 62, 83, 18, 75, 15, 56, 28, 85, 7,
        ],
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
              { offset: 0, color: 'rgba(255, 55, 55, 0.80)' },
              { offset: 1, color: 'rgba(255, 50, 50, 0)' },
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
  width: 210px;
  height: 40px;
}
</style>

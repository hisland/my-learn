<script setup lang="ts">
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { onMounted, ref } from 'vue'
const elRef = ref<HTMLElement | null>(null)
onMounted(() => {
  const chartInst = echarts.init(elRef.value!)

  const data1 = [60, 85, 55, 100, 120]
  const data2 = [33, 12, 33, 90, 65]

  const pointString = '0:green;50:yellow;70:red;82:purple'

  function buildColorStopsFromPoints(
    pointString: string,
    data: number[],
    isHard: boolean,
    minValue: number
  ) {
    const dataMin = Math.min(...data, minValue)
    const dataMax = Math.max(...data)
    const dataRange = dataMax - dataMin
    function getPercentage(value: number) {
      return (value - dataMin) / dataRange
    }

    // 解析 pointString
    const points = pointString
      .split(';')
      .map((s) => {
        const [v, color] = s.split(':')
        return { value: +v, color }
      })
      .sort((a, b) => a.value - b.value)
    console.log('points: ', points)

    const colorStops: { offset: number; color: string }[] = []
    for (let index = 0; index < points.length; index++) {
      const point = points[index]
      // debugger
      // 忽略完全在数据范围之外的点
      if (point.value < dataMin) continue
      if (point.value > dataMax) break

      // 开始有跳过的颜色, 自动补全第一个颜色
      if (!colorStops.length && index !== 0) {
        const firstUsePoint = points[index - 1]
        colorStops.push({ offset: 0, color: firstUsePoint.color })
      }

      const percentage = getPercentage(point.value)
      if (isHard) {
        const lastColorStop = colorStops[colorStops.length - 1]
        if (lastColorStop) {
          colorStops.push({ offset: percentage, color: lastColorStop.color })
        }
      }
      colorStops.push({ offset: percentage, color: point.color })
    }

    console.log('colorStops: ', colorStops)
    return colorStops
  }

  const colorStops = buildColorStopsFromPoints(pointString, data1, true, 0)

  const option: echarts.EChartsOption = {
    silent: true,
    xAxis: {
      type: 'category',
      data: ['0', '1', '2', '3', '4'],
    },
    yAxis: {
      type: 'value',
      name: '攻击次数',
      // min: 0,
      // max: 200,
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
        data: data1,
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
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: colorStops,
          },
        },
      },
      {
        type: 'line',
        data: data2,
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
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: buildColorStopsFromPoints(pointString, data2, true, 0),
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

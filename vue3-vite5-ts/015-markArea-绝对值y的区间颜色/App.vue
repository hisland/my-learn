<script setup lang="ts">
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { onMounted, ref } from 'vue'

const elRef = ref<HTMLElement | null>(null)

// 将 "0:green,50:yellow,120:red,160:purple" 解析为区间对
function parsePointStringToBands(pointString: string, yMin: number, yMax: number) {
  // 解析并按 value 排序
  const points = pointString
    .split(';')
    .map((item) => {
      const [valueStr, color] = item.split(':')
      return { value: Number(valueStr), color: color?.trim() ?? '' }
    })
    .filter((p) => !Number.isNaN(p.value))
    .sort((a, b) => a.value - b.value)

  if (points.length === 0) return []

  const bands: Array<[any, any]> = []

  // 先处理 小于第一个点 的区间（如果需要）
  const firstPoint = points[0]
  if (firstPoint.value > yMin) {
    bands.push([
      { yAxis: yMin },
      { yAxis: firstPoint.value, itemStyle: { color: firstPoint.color } },
    ])
  } else {
    // 如果第一个点恰好等于 yMin，则从 yMin 开始也要填色（确保底部有色）
    bands.push([
      { yAxis: firstPoint.value },
      { yAxis: firstPoint.value, itemStyle: { color: firstPoint.color } },
    ])
  }

  // 中间区间：点[i] 到 点[i+1]
  for (let i = 0; i < points.length - 1; i++) {
    const cur = points[i]
    const next = points[i + 1]
    bands.push([{ yAxis: cur.value }, { yAxis: next.value, itemStyle: { color: cur.color } }])
    // 为了“硬切换”效果，我们在下一个区间起点重复下一段颜色（ECharts 在同一 offset 处按后者覆盖）
    bands.push([
      { yAxis: next.value, itemStyle: { color: cur.color } },
      { yAxis: next.value, itemStyle: { color: next.color } },
    ])
  }

  // 最后一个区间：从最后一点到 yMax（或更高）
  const lastPoint = points[points.length - 1]
  bands.push([
    { yAxis: lastPoint.value }, //
    { yAxis: yMax, itemStyle: { color: lastPoint.color } },
  ])

  // 为了避免重复叠加太多重复边界，可对 bands 做简单合并或保持如上（ECharts 会按顺序渲染）
  return bands
}

onMounted(() => {
  const chart = echarts.init(elRef.value!)

  const yMin = 0
  const yMax = 200
  const pointString = '0:green;50:yellow;120:red;160:purple'

  const markAreaData = parsePointStringToBands(pointString, yMin, yMax)

  const option: EChartsOption = {
    silent: true,
    xAxis: {
      type: 'category',
      data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
    yAxis: {
      type: 'value',
      name: '攻击次数',
      // min: yMin,
      // max: yMax,
      show: true,
    },
    grid: {
      left: '10%',
      right: '5%',
      bottom: '5%',
      top: '5%',
    },
    animation: false,
    series: [
      // 先放 markArea 在同一个 series 里，z设为 0 让它在最下面
      {
        type: 'line',
        // 空数据只用于承载 markArea；我们会再添加真正的数据 series
        data: [0],
        markArea: {
          silent: true,
          z: 0,
          itemStyle: {
            // 全局透明度控制（如果你想统一设置），也可以在每个 band 的 itemStyle 里指定
            opacity: 0.35,
          },
          data: markAreaData,
        },
        // 画布上不显示这条“承载”线
        lineStyle: { width: 0 },
        showSymbol: false,
      },
      // 你的实际折线数据
      {
        type: 'line',
        data: [67, 13, 282, 95, 71, 36, 47, 41, 100, 4],
        smooth: true,
        symbol: 'none',
        lineStyle: {
          color: '#ff4d4f',
          width: 1,
          z: 10, // 保证线在色带之上
        },
        areaStyle: {
          // 如果你还想保留 area，但让它不干扰背景色，设置透明或较低 opacity
          color: 'rgba(255, 77, 79, 0.08)',
        },
      },
    ],
  }

  chart.setOption(option)
})
</script>

<template>
  <div>
    <div ref="elRef" class="elRef"></div>
  </div>
</template>

<style scoped lang="scss">
.elRef {
  width: 700px;
  height: 360px;
}
</style>

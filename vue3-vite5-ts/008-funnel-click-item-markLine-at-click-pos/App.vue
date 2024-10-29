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
      text: '漏斗图示例'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    legend: {
      data: ['访问', '咨询', '订单']
    },
    series: [
      {
        name: '转化率',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          show: true,
          position: 'inside'
        },
        data: [
          { value: 60, name: '访问' },
          { value: 40, name: '咨询' },
          { value: 20, name: '订单' }
        ]
      }
    ]
  }

  chartInst.setOption(option)

  // 监听点击事件
  chartInst.on('click', (params) => {
    console.log('params: ', params)
    if (params.componentType === 'series' && params.seriesType === 'funnel') {
      console.log('漏斗项被点击:', params.name)
      console.log('点击项的值:', params.value)
      console.log('点击项的索引:', params.dataIndex)

      chartInst.setOption({
        series: [
          {
            name: '转化率',
            type: 'funnel',
            markLine: {
              data: [
                [
                  { x: params.event.offsetX, y: params.event.offsetY },
                  { x: '99%', y: params.event.offsetY }
                ]
              ],
              lineStyle: {
                color: 'red',
                width: 2,
                type: 'dashed'
              },
              label: {
                show: true,
                position: 'middle',
                formatter: '标记线'
              }
            }
          }
        ]
      })
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

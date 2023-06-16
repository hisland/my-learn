import * as echarts from 'echarts'

const app = document.getElementById('app')
console.log('app: ', app)

const inst = echarts.init(app)

inst.setOption({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      // smooth: true
    }
  ]
})

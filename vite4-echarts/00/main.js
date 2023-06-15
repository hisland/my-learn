import * as echarts from 'echarts'

const app = document.getElementById('app')
console.log('app: ', app)

const inst = echarts.init(app)

inst.setOption({
  title: {
    text: '这是label',
  },
  grid: {
    show: true,
    left: '4%',
    right: '5%',
    top: '5%',
    bottom: '5%',
    containLabel: true,
    backgroundColor: 'gray',
  },
  backgroundColor: 'pink',
  xAxis: {
    type: 'category',
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '30%'],
  },
})

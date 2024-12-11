import * as d3 from 'd3'

const data = [10, 20, 30]

// 选择 body 下的所有 div（即使目前不存在）
const selection = d3.select('body').selectAll('div').data(data)

// 使用 enter 创建新的 div 元素
selection
  .enter()
  .append('div')
  .style('width', (d) => d * 10 + 'px') // 根据数据设置宽度
  .style('height', '20px')
  .style('background-color', 'steelblue')
  .style('margin', '2px')
  .text((d) => d) // 显示数据

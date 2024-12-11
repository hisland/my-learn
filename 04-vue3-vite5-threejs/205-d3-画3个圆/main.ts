import * as d3 from 'd3'

const data = [
  { id: 1, size: 100 },
  { id: 2, size: 70 },
  { id: 3, size: 30 },
]

// 设置 SVG 画布的宽高
const width = 400
const height = 200

// 创建 SVG 元素
const svg = d3.select('#app').append('svg').attr('width', width).attr('height', height)

// 定义节点的颜色
const color = d3.scaleOrdinal<number, string>(d3.schemeCategory10)

// 创建 g 元素，将每个节点分组
const nodeGroups = svg
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', (d, i) => `translate(${100 + i * 120}, ${height / 2})`) // 设置每组的位置

// 在 g 中添加圆形
nodeGroups
  .append('circle')
  .attr('r', (d) => d.size) // 圆形大小
  .attr('fill', (d) => color(d.id))

// 在 g 中添加文本
nodeGroups
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '0.35em') // 垂直居中
  .text((d) => d.id)
  .style('fill', '#fff')
  .style('font-size', '12px')

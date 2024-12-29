import * as d3 from 'd3'

// 定义节点数据
const nodes = [
  { id: 1, radius: 20 },
  { id: 2, radius: 25 },
  { id: 3, radius: 30 },
  { id: 4, radius: 15 },
  { id: 5, radius: 35 },
  { id: 6, radius: 10 },
]

// 设置 SVG 画布大小
const width = 800
const height = 800
const circleRadius = 200

// 创建 SVG 容器
const svg = d3.select('body').append('svg').attr('width', width).attr('height', height)
svg.append('g').attr('id', 'gg')
svg
  .append('circle')
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .attr('r', 3)
  .attr('fill', 'red')
svg
  .append('circle')
  .attr('cx', width / 2)
  .attr('cy', height / 2)
  .attr('r', circleRadius)
  .attr('fill', 'none')
  .attr('stroke', 'red')
  .attr('stroke-width', 1)

// 创建力仿真器
const simulation = d3
  .forceSimulation(nodes)
  .force(
    'radial',
    d3.forceRadial(circleRadius, width / 2, height / 2).strength(1) // 节点吸引到以(宽度/2, 高度/2)为圆心，半径为200的圆形
  )
  .force(
    'collision',
    d3.forceCollide().radius((d) => d.radius) // 确保节点不会重叠
  )
  .on('tick', ticked)

// 绘制圆
const circles = svg
  .select('#gg')
  .selectAll('circle')
  .data(nodes)
  .enter()
  .append('circle')
  .attr('r', (d) => d.radius)
  .attr('fill', (d, i) => d3.schemeCategory10[i % 10])

// 更新圆的位置
function ticked() {
  circles.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!)
}

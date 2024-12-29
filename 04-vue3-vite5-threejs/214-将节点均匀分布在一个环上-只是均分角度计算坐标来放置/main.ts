import * as d3 from 'd3'

// 定义节点数据
const nodes = [
  { id: 1, radius: 50 },
  { id: 2, radius: 40 },
  { id: 3, radius: 30 },
  { id: 4, radius: 60 },
  { id: 5, radius: 45 },
  { id: 6, radius: 35 },
]

// 设置 SVG 画布大小
const width = 800
const height = 800
const circleRadius = 200 // 环的半径

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
    'collision',
    d3.forceCollide().radius((d) => d.radius) // 确保节点不会重叠
  )
  .on('tick', ticked)

// 计算每个节点的初始角度，使它们均匀分布
nodes.forEach((d, i) => {
  const angle = (i / nodes.length) * 2 * Math.PI // 均匀角度分布
  d.x = width / 2 + Math.cos(angle) * circleRadius // X 坐标
  d.y = height / 2 + Math.sin(angle) * circleRadius // Y 坐标
})

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

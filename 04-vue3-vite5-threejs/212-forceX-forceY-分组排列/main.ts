import * as d3 from 'd3'

// 定义节点数据
const nodes = [
  { id: 1, radius: 150, group: 1 },
  { id: 2, radius: 80, group: 1 },
  { id: 3, radius: 50, group: 2 },
  { id: 4, radius: 40, group: 2 },
  { id: 5, radius: 30, group: 3 },
  { id: 6, radius: 20, group: 3 },
]

// 设置 SVG 画布大小
const width = 1000
const height = 800

// 创建 SVG 容器
const svg = d3.select('body').append('svg').attr('width', width).attr('height', height)

// 创建力仿真器
const simulation = d3
  .forceSimulation(nodes)
  // .force(
  //   'center',
  //   d3.forceCenter(width / 2, height / 2) // 将节点聚集到画布中心
  // )
  // .force(
  //   'collision',
  //   d3.forceCollide().radius((d) => d.radius + 2) // 碰撞半径完全等于圆的半径
  // )
  .force(
    'x',
    d3.forceX((d) => d.group * 100) // 水平方向吸引力
  )
  .force(
    'y',
    d3.forceY((d) => d.group * 100) // 垂直方向吸引力
  )
  .on('tick', ticked)

// 绘制圆
const circles = svg
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

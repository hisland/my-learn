import * as d3 from 'd3'

// 定义节点数据
const nodes = Array.from({ length: 20 }, (_, i) => ({ id: i }))

// 设置 SVG 画布大小
const width = 800,
  height = 600

// 动态创建 <svg> 并添加到 body 中
const svg0 = d3.select('body').append('svg').attr('width', width).attr('height', height)
const svg = svg0.append('g').attr('transform', (d) => `translate(${width / 2},${height / 2})`)

// 创建力模拟
const simulation = d3
  .forceSimulation(nodes)
  .force(
    'charge',
    d3
      .forceManyBody()
      .strength(-10) // 节点间的斥力强度
      .distanceMin(0) // 节点间的最小距离，防止过近
      .distanceMax(50) // 节点间的最大作用距离
  )
  .on('tick', ticked)

// 创建节点并绘制到 SVG 中
const node = svg
  .selectAll('circle')
  .data(nodes)
  .enter()
  .append('circle')
  .attr('r', 5) // 节点半径
  .attr('fill', 'steelblue')

// 模拟运行时更新节点位置
function ticked() {
  node.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!)
}

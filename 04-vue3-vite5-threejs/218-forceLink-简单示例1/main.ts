import * as d3 from 'd3'

// 定义节点和链接数据
const nodes = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]

const links = [
  { source: 0, target: 1 },
  { source: 1, target: 2 },
  { source: 2, target: 3 },
  { source: 3, target: 4 },
  { source: 4, target: 0 },
]

// 设置 SVG 画布大小
const width = 800,
  height = 600
const svg = d3.select('body').append('svg').attr('width', width).attr('height', height)

// 创建力模拟
const simulation = d3
  .forceSimulation(nodes)
  .force('charge', d3.forceManyBody().strength(-100)) // 节点间的斥力
  .force(
    'link',
    d3
      .forceLink(links) // 链接力
      .id((d: any) => d.id) // 设置节点 ID
      .distance(100) // 设置链接的理想距离
      .strength(0.1)
  ) // 设置链接力的强度
  .force('center', d3.forceCenter(width / 2, height / 2)) // 中心力
  .on('tick', ticked)

// 创建链接线
const link = svg
  .append('g')
  .selectAll('line')
  .data(links)
  .enter()
  .append('line')
  .attr('stroke', '#ccc')
  .attr('stroke-width', 2)

// 创建节点
const node = svg
  .append('g')
  .selectAll('circle')
  .data(nodes)
  .enter()
  .append('circle')
  .attr('r', 8) // 节点半径
  .attr('fill', 'steelblue')

// 更新节点和链接位置
function ticked() {
  link
    .attr('x1', (d) => d.source.x!)
    .attr('y1', (d) => d.source.y!)
    .attr('x2', (d) => d.target.x!)
    .attr('y2', (d) => d.target.y!)

  node.attr('cx', (d) => d.x!).attr('cy', (d) => d.y!)
}

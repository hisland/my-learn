import * as d3 from 'd3'

// 数据定义
const data = {
  nodes: [
    { id: 'Root', level: 1, size: 30 },
    { id: 'Child1', level: 2, size: 20 },
    { id: 'Child2', level: 2, size: 20 },
    { id: 'Child3', level: 2, size: 20 },
    { id: 'Grandchild1', level: 3, size: 10 },
    { id: 'Grandchild2', level: 3, size: 10 },
    { id: 'Grandchild3', level: 3, size: 10 },
    { id: 'Grandchild4', level: 3, size: 10 },
    { id: 'Grandchild5', level: 3, size: 10 },
  ],
  links: [
    { source: 'Root', target: 'Child1' },
    { source: 'Root', target: 'Child2' },
    { source: 'Root', target: 'Child3' },
    { source: 'Child1', target: 'Grandchild1' },
    { source: 'Child1', target: 'Grandchild2' },
    { source: 'Child2', target: 'Grandchild3' },
    { source: 'Child2', target: 'Grandchild4' },
    { source: 'Child3', target: 'Grandchild5' },
  ],
}

// SVG 画布的宽高
const width = 600
const height = 400

// 创建 SVG 元素
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('border', '1px solid black')

// 创建力学模拟
const simulation = d3
  .forceSimulation(data.nodes)
  .force(
    'link',
    d3
      .forceLink(data.links)
      .id((d: any) => d.id)
      .distance((d: any) => 50) // 节点之间的距离
  )
  .force('charge', d3.forceManyBody().strength(-200)) // 排斥力
  .force('center', d3.forceCenter(width / 2, height / 2)) // 居中
  .force(
    'collide',
    d3.forceCollide().radius((d: any) => d.size + 5)
  ) // 碰撞检测

// 绘制连线
const link = svg
  .selectAll('line')
  .data(data.links)
  .enter()
  .append('line')
  .attr('stroke', '#999')
  .attr('stroke-width', 2)

// 绘制节点和文本（将它们包裹在一个 g 元素中）
const nodeGroup = svg
  .selectAll('g')
  .data(data.nodes)
  .enter()
  .append('g')
  .attr('class', 'node') // 给 g 元素添加类，方便样式控制
  .call(
    d3
      .drag<SVGGElement, any>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart() // 确保模拟在拖动时保持活跃
        d.fx = d.x
        d.fy = d.y
      })
      .on('drag', (event, d) => {
        d.fx = event.x
        d.fy = event.y
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0) // 拖动结束时恢复正常活跃度
        d.fx = null
        d.fy = null
      })
  )

// 为每个 g 元素添加圆形（节点）
nodeGroup
  .append('circle')
  .attr('r', (d: any) => d.size)
  .attr('fill', (d: any) => {
    if (d.level === 1) return '#1f77b4' // 第一层为蓝色
    if (d.level === 2) return '#ff7f0e' // 第二层为橙色
    return '#2ca02c' // 第三层为绿色
  })

// 为每个 g 元素添加文本
nodeGroup
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', 4)
  .text((d: any) => d.id)
  .style('font-size', '10px')
  .style('user-select', 'none') // 防止文本被选中

// 更新位置
simulation.on('tick', () => {
  link
    .attr('x1', (d: any) => d.source.x)
    .attr('y1', (d: any) => d.source.y)
    .attr('x2', (d: any) => d.target.x)
    .attr('y2', (d: any) => d.target.y)

  nodeGroup.attr('transform', (d: any) => `translate(${d.x},${d.y})`)
})

import * as d3 from 'd3'

// 示例数据
const data = {
  name: 'Layer 1',
  radius: 100,
  children: Array.from({ length: 10 }, (_, i) => ({
    name: `Node 2-${i + 1}`,
    radius: 50,
    children: Array.from(
      {
        length: Math.floor(Math.random() * 5) + 1,
      },
      (_, j) => ({
        name: `Node 3-${i + 1}-${j + 1}`,
        radius: 30,
        children: Array.from(
          {
            length: Math.floor(Math.random() * 3) + 1,
          },
          (_, k) => ({
            name: `Node 4-${i + 1}-${j + 1}-${k + 1}`,
            radius: 10,
          })
        ),
      })
    ),
  })),
}

// 将数据转换为扁平化形式
const nodes = []
const links = []

function flatten(node, parent = null) {
  nodes.push(node)
  if (parent) {
    links.push({ source: parent, target: node })
  }
  if (node.children) {
    node.children.forEach((child) => flatten(child, node))
  }
}

flatten(data)

// SVG 配置
const width = 800
const height = 800
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .call(
    d3.zoom().on('zoom', (event) => {
      svg.attr('transform', event.transform)
    })
  )
  .append('g')

// 设置初始位置：第2层节点环绕第1层节点
const centerX = width / 2
const centerY = height / 2
nodes.forEach((node) => {
  if (node === data) {
    node.x = centerX
    node.y = centerY
  } else if (node.children && node.radius === 50) {
    const angleStep = (2 * Math.PI) / node.children.length
    node.children.forEach((child, index) => {
      const angle = angleStep * index
      child.x = centerX + Math.cos(angle) * (data.radius + node.radius + 20)
      child.y = centerY + Math.sin(angle) * (data.radius + node.radius + 20)
    })
  }
})

// 力导向图配置
const simulation = d3
  .forceSimulation(nodes)
  .force(
    'link',
    d3
      .forceLink(links)
      .id((d) => d.name)
      .distance((d) => d.source.radius)
      .strength(1)
  )
  .force('charge', d3.forceManyBody().strength(-1000))
  .force('center', d3.forceCenter(centerX, centerY))
  .force(
    'collision',
    d3.forceCollide().radius((d) => d.radius + 5)
  )

// 绘制连线
const link = svg
  .append('g')
  .attr('stroke', 'gray')
  .attr('stroke-width', 2)
  .selectAll('line')
  .data(links)
  .join('line')

// 绘制节点
const node = svg
  .append('g')
  .selectAll('circle')
  .data(nodes)
  .join('circle')
  .attr('r', (d) => d.radius)
  .attr('fill', (d, i) => d3.schemeCategory10[i % 10])
  .call(
    d3
      .drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart()
        d.fx = d.x
        d.fy = d.y
      })
      .on('drag', (event, d) => {
        d.fx = event.x
        d.fy = event.y
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0)
        d.fx = null
        d.fy = null
      })
  )

// 绘制节点标签
const labels = svg
  .append('g')
  .selectAll('text')
  .data(nodes)
  .join('text')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'middle')
  .attr('fill', 'white')
  .style('font-size', '12px')
  .text((d) => d.name)

// 更新位置
simulation.on('tick', () => {
  link
    .attr('x1', (d) => d.source.x)
    .attr('y1', (d) => d.source.y)
    .attr('x2', (d) => d.target.x)
    .attr('y2', (d) => d.target.y)

  node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)

  labels.attr('x', (d) => d.x).attr('y', (d) => d.y)
})

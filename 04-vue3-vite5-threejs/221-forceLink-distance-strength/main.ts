import * as d3 from 'd3'

const nodes2 = [
  {
    id: 'node_01',
    type: 'LV0_ROOT',
    subType: null,
    circleBg: null,
    circleIcon: null,
    name: '222.91.148.218',
    level: 0,
    aspect: null,
  },

  {
    id: 'node_02',
    type: 'LEVEL1_ATTACK',
    subType: null,
    circleBg: null,
    circleIcon: null,
    name: '2',
    level: 1,
    aspect: 'ATTACK',
  },
  {
    id: 'node_03',
    type: 'LEVEL1_ATTACK',
    subType: null,
    circleBg: null,
    circleIcon: null,
    name: '2',
    level: 1,
    aspect: 'ATTACK',
  },
  {
    id: 'node_04',
    type: 'LEVEL1_ATTACK',
    subType: null,
    circleBg: null,
    circleIcon: null,
    name: '5',
    level: 1,
    aspect: 'ATTACK',
  },
  {
    id: 'node_05',
    type: 'LEVEL1_ATTACK',
    subType: null,
    circleBg: null,
    circleIcon: null,
    name: '6',
    level: 2,
    aspect: 'ATTACK',
  },
]
const links2 = [
  {
    id: 'line0',
    source: 'node_01',
    target: 'node_02',
  },
  {
    id: 'line1',
    source: 'node_01',
    target: 'node_03',
  },
  {
    id: 'line2',
    source: 'node_01',
    target: 'node_04',
  },
  {
    id: 'line3',
    source: 'node_04',
    target: 'node_05',
  },
]

function arrayToTree(data: Array<{ id: number; pid: number | null }>): any {
  const idMap = new Map<number, any>()
  const tree: any = { id: null, children: [] }

  data.forEach((node) => {
    idMap.set(node.id, { ...node, children: [] })
  })

  data.forEach((node) => {
    if (!node.pid) {
      tree.children.push(idMap.get(node.id))
    } else {
      const parent = idMap.get(node.pid)
      if (parent) {
        parent.children.push(idMap.get(node.id))
      }
    }
  })

  return tree.children[0] // 假设根节点唯一
}

// Specify the chart’s dimensions.
const width = 1000
const height = 800

// Compute the graph and start the force simulation.
// const treeData = arrayToTree(nodes2)
// console.log('treeData: ', treeData)
// const root = d3.hierarchy(treeData)
const links = links2
const nodes = nodes2

// const links = root.links()
// const nodes = root.descendants()

function DragGen(simulation: any) {
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart()
    d.fx = d.x
    d.fy = d.y
  }

  function dragged(event, d) {
    d.fx = event.x
    d.fy = event.y
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0)
    d.fx = null
    d.fy = null
  }

  const drag = d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)
  return drag
}

const simulation = d3
  .forceSimulation(nodes)
  .force(
    'link',
    d3
      .forceLink(links)
      .id((d) => d.id)
      .distance((d) => {
        console.log('forceLink d: ', d)
        if (d.source.level === 0) {
          return 200
        } else if (d.source.level === 1) {
          return 100
        } else if (d.source.level === 2) {
          return 50
        } else {
          return 10
        }
      })
      .strength((d) => {
        console.log('forceLink strength: ', d)
        return 1
        if (d.source.level === 0) {
          return 200
        } else if (d.source.level === 1) {
          return 100
        } else if (d.source.level === 2) {
          return 50
        } else {
          return 10
        }
      })
  )
  // .force('charge', d3.forceManyBody().strength(-1000))
  // .force(
  //   'forceCollide',
  //   d3.forceCollide().radius((d) => {
  //     console.log('drr: ', d)
  //     if (d.data.level === 0) {
  //       return 100
  //     } else if (d.data.level === 1) {
  //       return 50
  //     } else if (d.data.level === 2) {
  //       return 30
  //     } else {
  //       return 10
  //     }
  //   })
  // )
  // .force('x', d3.forceX())
  // .force('y', d3.forceY())
  .force('center', d3.forceCenter(width / 2, height / 2))

// Create the container SVG.
const svg = d3.select('body').append('svg').attr('width', width).attr('height', height)
// .attr('viewBox', [-width / 2, -height / 2, width / 2, height / 2])

// Append links.
const link = svg
  .append('g')
  .attr('stroke', 'red')
  .attr('stroke-opacity', 1)
  .selectAll('line')
  .data(links)
  .join('line')

// Append nodes.
const node = svg
  .append('g')
  .attr('fill', '#fff')
  .attr('stroke', '#000')
  .attr('stroke-width', 1.5)
  .selectAll('circle')
  .data(nodes)
  .join('circle')
  .attr('fill', (d) => '#000')
  .attr('stroke', (d) => '#fff')
  .attr('r', (d) => {
    if (d.level === 0) {
      return 100
    } else if (d.level === 1) {
      return 50
    } else if (d.level === 2) {
      return 30
    } else {
      return 10
    }
  })
  .call(DragGen(simulation))

simulation.on('tick', () => {
  link
    .attr('x1', (d) => d.source.x)
    .attr('y1', (d) => d.source.y)
    .attr('x2', (d) => d.target.x)
    .attr('y2', (d) => d.target.y)

  node.attr('cx', (d) => d.x).attr('cy', (d) => d.y)
})

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
    type: 'LEVEL1_BEHAVIOR',
    subType: null,
    circleBg: null,
    circleIcon: null,
    name: '3',
    level: 1,
    aspect: 'BEHAVIOR',
  },
  {
    id: 'node_06',
    type: 'LEVEL1_BEHAVIOR',
    subType: null,
    circleBg: null,
    circleIcon: null,
    name: '1',
    level: 1,
    aspect: 'BEHAVIOR',
  },

  {
    id: 'node_07',
    type: 'LEVEL1_TI',
    subType: null,
    circleBg: null,
    circleIcon: null,
    name: '2',
    level: 1,
    aspect: 'TI',
  },
  {
    id: 'node_08',
    type: 'LEVEL1_TI',
    subType: null,
    circleBg: null,
    circleIcon: null,
    name: '2',
    level: 1,
    aspect: 'TI',
  },
  {
    id: 'node_09',
    type: 'LEVEL1_TI',
    subType: null,
    circleBg: null,
    circleIcon: null,
    name: '2',
    level: 1,
    aspect: 'TI',
  },
  {
    id: 'node_10',
    type: 'LEVEL1_TI',
    subType: 'LEVEL1_TI_PROXY',
    circleBg: null,
    circleIcon: null,
    name: null,
    level: 1,
    aspect: 'TI',
  },
  {
    id: 'node_11',
    type: 'LEVEL1_TI',
    subType: 'LEVEL1_TI_MALICIOUS',
    circleBg: null,
    circleIcon: null,
    name: null,
    level: 1,
    aspect: 'TI',
  },
  {
    id: 'node_12',
    type: 'LEVEL1_TI',
    subType: 'LEVEL1_TI_SUSPICIOUS',
    circleBg: null,
    circleIcon: null,
    name: null,
    level: 1,
    aspect: 'TI',
  },
  {
    id: 'node_13',
    type: 'LEVEL1_TI',
    subType: 'LEVEL1_TI_UNKNOWN',
    circleBg: null,
    circleIcon: null,
    name: null,
    level: 1,
    aspect: 'TI',
  },

  {
    id: 'node_14',
    type: 'LEVEL2',
    subType: 'LEVEL2_SAME_IP',
    circleBg: null,
    circleIcon: null,
    name: 'sampIP1',
    level: 2,
    aspect: 'ATTACK',
  },
  {
    id: 'node_15',
    type: 'LEVEL2',
    subType: 'LEVEL2_SAME_IP',
    circleBg: null,
    circleIcon: null,
    name: 'sampIP2',
    level: 2,
    aspect: 'ATTACK',
  },
  {
    id: 'node_16',
    type: 'LEVEL2',
    subType: 'LEVEL2_HONEYPOT',
    circleBg: null,
    circleIcon: null,
    name: 'pot1',
    level: 2,
    aspect: 'ATTACK',
  },
  {
    id: 'node_17',
    type: 'LEVEL2',
    subType: 'LEVEL2_HONEYPOT',
    circleBg: null,
    circleIcon: null,
    name: 'pot2',
    level: 2,
    aspect: 'ATTACK',
  },

  {
    id: 'node_18',
    type: 'LEVEL2',
    subType: 'LEVEL2_ATTACK_TARGET',
    circleBg: null,
    circleIcon: null,
    name: 'target1',
    level: 2,
    aspect: 'ATTACK',
  },
  {
    id: 'node_19',
    type: 'LEVEL2',
    subType: 'LEVEL2_ATTACK_TARGET',
    circleBg: null,
    circleIcon: null,
    name: 'target2',
    level: 2,
    aspect: 'ATTACK',
  },

  {
    id: 'node_20',
    type: 'LEVEL2',
    subType: 'LEVEL2_VISIT',
    circleBg: null,
    circleIcon: null,
    name: 'visit1',
    level: 2,
    aspect: 'BEHAVIOR',
  },
  {
    id: 'node_21',
    type: 'LEVEL2',
    subType: 'LEVEL2_VISIT',
    circleBg: null,
    circleIcon: null,
    name: 'visit2',
    level: 2,
    aspect: 'BEHAVIOR',
  },
  {
    id: 'node_22',
    type: 'LEVEL2',
    subType: 'LEVEL2_VISIT',
    circleBg: null,
    circleIcon: null,
    name: 'visit3',
    level: 2,
    aspect: 'BEHAVIOR',
  },

  {
    id: 'node_23',
    type: 'LEVEL2',
    subType: 'LEVEL2_OUTLINK',
    circleBg: null,
    circleIcon: null,
    name: 'out1',
    level: 2,
    aspect: 'BEHAVIOR',
  },

  {
    id: 'node_24',
    type: 'LEVEL2',
    subType: 'LEVEL2_HISTORY',
    circleBg: null,
    circleIcon: null,
    name: '大运会',
    level: 2,
    aspect: 'TI',
  },
  {
    id: 'node_25',
    type: 'LEVEL2',
    subType: 'LEVEL2_HISTORY',
    circleBg: null,
    circleIcon: null,
    name: '广交会',
    level: 2,
    aspect: 'TI',
  },
  {
    id: 'node_26',
    type: 'LEVEL2',
    subType: 'LEVEL2_ATTACK_COMPANY',
    circleBg: null,
    circleIcon: null,
    name: 'xx企业1',
    level: 2,
    aspect: 'TI',
  },
  {
    id: 'node_27',
    type: 'LEVEL2',
    subType: 'LEVEL2_ATTACK_COMPANY',
    circleBg: null,
    circleIcon: null,
    name: 'xx企业2',
    level: 2,
    aspect: 'TI',
  },

  {
    id: 'node_28',
    type: 'LEVEL2',
    subType: 'LEVEL2_OPEN_PORT',
    circleBg: null,
    circleIcon: null,
    name: '9022/zmtp',
    level: 2,
    aspect: 'TI',
  },

  {
    id: 'node_29',
    type: 'LEVEL2',
    subType: 'LEVEL2_TI_PROXY',
    circleBg: null,
    circleIcon: null,
    name: 'proxycheck',
    level: 2,
    aspect: 'TI',
  },

  {
    id: 'node_30',
    type: 'LEVEL2',
    subType: 'LEVEL2_TI_JUDGEMENT',
    circleBg: null,
    circleIcon: null,
    name: '奇安信',
    level: 2,
    aspect: 'TI',
  },

  {
    id: 'node_31',
    type: 'LEVEL3_ATTACK',
    subType: 'LEVEL3_HONEYPOT_ACTION',
    circleBg: null,
    circleIcon: null,
    name: '触发绊线',
    level: 3,
    aspect: 'ATTACK',
  },
  {
    id: 'node_32',
    type: 'LEVEL3_ATTACK',
    subType: 'LEVEL3_ATTACK_TYPE',
    circleBg: null,
    circleIcon: null,
    name: 'sql注入',
    level: 3,
    aspect: 'ATTACK',
  },
  {
    id: 'node_33',
    type: 'LEVEL3_ATTACK',
    subType: 'LEVEL3_ATTACK_TYPE',
    circleBg: null,
    circleIcon: null,
    name: 'Web扫描',
    level: 3,
    aspect: 'ATTACK',
  },
  {
    id: 'node_34',
    type: 'LEVEL3_BEHAVIOR',
    subType: 'LEVEL3_VISIT_PROTOCAL',
    circleBg: null,
    circleIcon: null,
    name: 'ftp',
    level: 3,
    aspect: 'BEHAVIOR',
  },
  {
    id: 'node_35',
    type: 'LEVEL3_BEHAVIOR',
    subType: 'LEVEL3_VISIT_PROTOCAL',
    circleBg: null,
    circleIcon: null,
    name: 'ssh',
    level: 3,
    aspect: 'BEHAVIOR',
  },

  {
    id: 'node_36',
    type: 'LEVEL3_TI',
    subType: 'LEVEL3_PROXY_TYPE',
    circleBg: null,
    circleIcon: null,
    name: 'VPN服务器',
    level: 3,
    aspect: 'TI',
  },
  {
    id: 'node_37',
    type: 'LEVEL3_TI',
    subType: 'LEVEL3_INFO_TAG',
    circleBg: null,
    circleIcon: null,
    name: '端口扫描',
    level: 3,
    aspect: 'TI',
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
    source: 'node_01',
    target: 'node_05',
  },
  {
    id: 'line4',
    source: 'node_01',
    target: 'node_06',
  },
  {
    id: 'line5',
    source: 'node_01',
    target: 'node_07',
  },
  {
    id: 'line6',
    source: 'node_01',
    target: 'node_08',
  },
  {
    id: 'line7',
    source: 'node_01',
    target: 'node_09',
  },
  {
    id: 'line8',
    source: 'node_01',
    target: 'node_10',
  },
  {
    id: 'line9',
    source: 'node_01',
    target: 'node_11',
  },
  {
    id: 'line10',
    source: 'node_01',
    target: 'node_12',
  },
  {
    id: 'line11',
    source: 'node_01',
    target: 'node_13',
  },
  {
    id: 'line12',
    source: 'node_02',
    target: 'node_14',
  },
  {
    id: 'line13',
    source: 'node_02',
    target: 'node_15',
  },
  {
    id: 'line14',
    source: 'node_03',
    target: 'node_16',
  },
  {
    id: 'line15',
    source: 'node_03',
    target: 'node_17',
  },
  {
    id: 'line16',
    source: 'node_04',
    target: 'node_18',
  },
  {
    id: 'line17',
    source: 'node_04',
    target: 'node_19',
  },
  {
    id: 'line18',
    source: 'node_05',
    target: 'node_20',
  },
  {
    id: 'line19',
    source: 'node_05',
    target: 'node_21',
  },
  {
    id: 'line20',
    source: 'node_05',
    target: 'node_22',
  },
  {
    id: 'line21',
    source: 'node_06',
    target: 'node_23',
  },
  {
    id: 'line22',
    source: 'node_07',
    target: 'node_24',
  },
  {
    id: 'line23',
    source: 'node_07',
    target: 'node_25',
  },
  {
    id: 'line24',
    source: 'node_08',
    target: 'node_26',
  },
  {
    id: 'line25',
    source: 'node_08',
    target: 'node_27',
  },
  {
    id: 'line26',
    source: 'node_09',
    target: 'node_28',
  },
  {
    id: 'line27',
    source: 'node_10',
    target: 'node_29',
  },
  {
    id: 'line28',
    source: 'node_11',
    target: 'node_30',
  },
  {
    id: 'line29',
    source: 'node_16',
    target: 'node_31',
  },
  {
    id: 'line30',
    source: 'node_18',
    target: 'node_32',
  },
  {
    id: 'line31',
    source: 'node_18',
    target: 'node_33',
  },
  {
    id: 'line32',
    source: 'node_20',
    target: 'node_34',
  },
  {
    id: 'line33',
    source: 'node_20',
    target: 'node_35',
  },
  {
    id: 'line34',
    source: 'node_29',
    target: 'node_36',
  },
  {
    id: 'line35',
    source: 'node_30',
    target: 'node_37',
  },
]

// Specify the chart’s dimensions.
const width = 1000
const height = 800

// Compute the graph and start the force simulation.
// console.log('treeData: ', treeData)
const links = links2
const nodes = nodes2

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
    'forceLink',
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
        return 300
      })
      .strength(1)
  )
  .force('forceManyBody', d3.forceManyBody().strength(-3000))
  // .force(
  //   'forceCollide',
  //   d3
  //     .forceCollide()
  //     .radius((d) => {
  //       // console.log('forceCollide d: ', d)
  //       if (d.level === 0) {
  //         return 100
  //       } else if (d.level === 1) {
  //         return 50
  //       } else if (d.level === 2) {
  //         return 30
  //       } else {
  //         return 10
  //       }
  //     })
  //     .strength(1)
  //     .iterations(1)
  // )
  .force('x', d3.forceX().strength(0.1))
  .force('y', d3.forceY().strength(0.1))
  .force('center', d3.forceCenter(width / 2, height / 2))

// Create the container SVG.
const svgRoot = d3.select('body').append('svg').attr('width', width).attr('height', height)

const svgGroup0 = svgRoot.append('g')

// Append links.
const link = svgGroup0
  .append('g')
  .attr('stroke', 'red')
  .attr('stroke-opacity', 1)
  .selectAll('line')
  .data(links)
  .join('line')

// Append nodes.
const node = svgGroup0
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

const zoomBehavior = d3
  .zoom()
  .scaleExtent([0.3, 5]) // 最小缩放比例为 0.5，最大为 5
  .on('zoom', (event) => {
    svgGroup0.attr('transform', event.transform) // 更新缩放和平移
  })

svgRoot.call(zoomBehavior)

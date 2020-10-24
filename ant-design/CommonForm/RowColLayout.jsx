import React from 'react'
import { Row, Col } from 'antd'

const SpanMax = 24
const SpanDefault = 8

export function ItemsToRows(items) {
  let nowRow = []
  const rs = [nowRow]
  let count = 0
  for (const item of items) {
    const nowSpan = item.props.span || SpanDefault
    const willSpan = count + nowSpan
    if (willSpan > SpanMax) {
      nowRow = [item]
      rs.push(nowRow)
      count = nowSpan
    } else {
      nowRow.push(item)
      count = willSpan
    }
  }
  return rs
}

export function RowColLayout({ children }) {
  const rows = ItemsToRows(children)
  return rows.map((row, index) => (
    <Row key={index}>
      {row.map((item, index) => (
        <Col span={item.props.span || SpanDefault} key={index}>
          {item}
        </Col>
      ))}
    </Row>
  ))
}

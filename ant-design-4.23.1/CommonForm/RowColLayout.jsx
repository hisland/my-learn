/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */

import React from 'react'
import { Row, Col } from 'antd'

const SpanMax = 24
const SpanDefault = 8

export function ItemsToRows(items1, itemSpan) {
  const items2 = Array.isArray(items1) ? items1 : [items1]
  let nowRow = []
  const rs = [nowRow]
  let count = 0
  for (const item of items2) {
    const nowSpan = item.props.span || itemSpan || SpanDefault
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

export function RowColLayout({ children, itemSpan }) {
  const rows = ItemsToRows(children, itemSpan)
  return rows.map((row, index1) => (
    <Row key={index1}>
      {row.map((item, index2) => (
        <Col span={item.props.span || itemSpan || SpanDefault} key={index2}>
          {item}
        </Col>
      ))}
    </Row>
  ))
}

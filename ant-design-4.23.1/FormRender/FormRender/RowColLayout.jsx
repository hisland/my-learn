/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */

import React from 'react'
import { Row, Col } from 'antd'

const SPAN_MAX = 24
const SPAN_DEFAULT = 8

export function ItemsToRows(items, itemDefaultSpan) {
  let nowRow = []
  const rsRows = [nowRow]
  let spanCount = 0
  for (const [hocSpan, item] of items) {
    const nowSpan = hocSpan || itemDefaultSpan || SPAN_DEFAULT
    const toSpan = spanCount + nowSpan
    if (toSpan > SPAN_MAX) {
      nowRow = [[nowSpan, item]]
      rsRows.push(nowRow)
      spanCount = nowSpan
    } else {
      nowRow.push([nowSpan, item])
      spanCount = toSpan
    }
  }
  return rsRows
}

export function RowColLayout({ children, itemDefaultSpan }) {
  const rows = ItemsToRows(children, itemDefaultSpan)
  return rows.map((row, index1) => (
    <Row key={index1}>
      {row.map(([span, item], index2) => (
        <Col span={span} key={index2}>
          {item}
        </Col>
      ))}
    </Row>
  ))
}

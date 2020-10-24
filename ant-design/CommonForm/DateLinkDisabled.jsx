import React from 'react'
import { DatePicker } from 'antd'

export function SetDisabledDate(form, compareOp, thatKey) {
  if (compareOp === '<') {
    return (cell) => {
      const thatValue = form.getFieldValue(thatKey)
      if (thatValue) {
        return cell.isAfter(thatValue, 'day')
      }
    }
  } else {
    return (cell) => {
      const thatValue = form.getFieldValue(thatKey)
      if (thatValue) {
        return cell.isBefore(thatValue, 'day')
      }
    }
  }
}

function GenComp(form, compareOp, thatKey) {
  return function DatePickerHoc(props) {
    const style = props.style
      ? { ...props.style, width: '100%' }
      : { width: '100%' }
    return (
      <DatePicker
        {...props}
        style={style}
        disabledDate={SetDisabledDate(form, compareOp, thatKey)}
      ></DatePicker>
    )
  }
}

export function GenDateCompPair(form, fromKey, toKey) {
  return [GenComp(form, '<', toKey), GenComp(form, '>', fromKey)]
}

import React from 'react'
import { DatePicker } from 'antd'

export default function HocDatePicker(props) {
  const mm = moment(props.value)
  const value = props.value ? (mm.isValid() ? mm : null) : null
  const onChange = (value) => {
    if (value === null) {
      props.onChange(value)
    } else {
      props.onChange(value.startOf('date').format())
    }
  }
  const mergedProps = {
    ...props,
    value,
    onChange,
  }
  return <DatePicker {...mergedProps} />
}

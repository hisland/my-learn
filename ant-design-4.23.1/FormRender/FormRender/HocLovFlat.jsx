import React from 'react'
import { DatePicker } from 'antd'

export default function HocLovFlat(props) {
  const { value, onChange, ...restProps } = props

  const mergedProps = {
    ...restProps,
    value,
    onChange,
  }
  // return <DatePicker {...mergedProps} />
}

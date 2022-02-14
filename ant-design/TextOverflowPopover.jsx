import React, { useState } from 'react'
import { Popover } from 'antd'

const DIV_ID = 'measure-text-width'
let div = document.getElementById(DIV_ID)
if (!div) {
  div = document.createElement('div')
  div.id = DIV_ID
  div.style = `
  position: absolute;
  top: -100px;
  left: 0;
  visibility: hidden;
  `
  document.body.appendChild(div)
}

console.log(document.readyState)

export default function TextOverflowPopover({ text }) {
  console.log('run TextOverflowPopover')

  const [showType, setShowType] = useState('init')
  const [boxWidth, setBoxWidth] = useState(0)

  if (showType !== 'init') {
    div.innerText = text || ''
    const textWidth = div.offsetWidth
    console.log(textWidth, boxWidth, text)
    if (textWidth > boxWidth && showType !== 'pop') {
      setShowType('pop')
    } else if (textWidth <= boxWidth && showType !== 'normal') {
      setShowType('normal')
    }
  }

  function gotEl(el) {
    if (el) {
      setBoxWidth(el.offsetWidth)
      setShowType('check')
    }
  }

  if (showType === 'normal') {
    return <div>{text}</div>
  } else if (showType === 'pop') {
    return (
      <Popover content={text} overlayStyle={{ maxWidth: '300px' }}>
        <div
          style={{
            textAlign: 'left',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            width: `${boxWidth - 5}px`,
          }}
        >
          {text.substr(0, 40)}
        </div>
      </Popover>
    )
  } else if (showType === 'init') {
    return <div ref={gotEl} />
  } else {
    return <div></div>
  }
}

import React from 'react'
import Link from 'umi/link'
import styles from './index.css'

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <ul>
        <li>
          <Link to="/hello">hello</Link>
        </li>
      </ul>
    </div>
  )
}

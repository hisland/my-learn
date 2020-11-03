import React from 'react';
import { Link } from 'umi';

export default function(props) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/hello">hello</Link>
        </li>
      </ul>
      <div>{props.children}</div>
    </div>
  );
}

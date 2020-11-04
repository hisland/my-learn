import React from 'react';
import { Link, history } from 'umi';

export default function(props) {
  console.log('layout render', props);
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/hello">hello</Link>
        </li>
        <li>
          <Link to="/mike">mike</Link>
        </li>
        <li>
          <button
            onClick={() => {
              props.history.push('/say');
            }}
          >
            say
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              history.push('/scss');
            }}
          >
            scss
          </button>
        </li>
      </ul>
      <div>{props.children}</div>
    </div>
  );
}

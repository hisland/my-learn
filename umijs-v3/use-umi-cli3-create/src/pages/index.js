import React from 'react';
import { connect } from 'dva';

export default connect(state => {
  console.log('connect pages/index', state);
  const { noNamespace } = state;
  return {
    noNamespace,
  };
})(props => {
  console.log('render pages/index', props);
  const { dispatch } = props;
  return (
    <div>
      <h1>Page index</h1>
      <div>
        {'noNamespace'}
        {props.noNamespace.map((vv, index) => (
          <span
            key={index}
            style={{ background: 'pink', margin: '3px', padding: '3px' }}
          >
            {vv}
          </span>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'noNamespace/add', payload: 'home' });
          }}
        >
          put
        </button>
      </div>
    </div>
  );
});

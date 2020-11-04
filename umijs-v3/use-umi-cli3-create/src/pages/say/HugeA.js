import React from 'react';
import { connect } from 'dva';

export default connect(state => {
  console.log('connect pages/HugeA', state);
  const { hello } = state;
  return {
    hello,
  };
})(props => {
  console.log('render pages/HugeA', props);
  const { dispatch } = props;
  return (
    <div>
      <h1>Page HugeA</h1>
      <div>
        <div>
          {'hello'}
          {props.hello.map((vv, index) => (
            <span
              key={index}
              style={{ background: 'lime', margin: '3px', padding: '3px' }}
            >
              {vv}
            </span>
          ))}
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({ type: 'hello/add', payload: 'HugeA' });
            }}
          >
            put
          </button>
        </div>
      </div>
    </div>
  );
});

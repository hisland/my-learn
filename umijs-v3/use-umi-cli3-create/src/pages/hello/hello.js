import React from 'react';
import { connect } from 'dva';

export default connect(state => {
  console.log('connect pages/hello', state);
  const { noNamespace } = state;
  const { hello } = state;
  return {
    noNamespace,
    hello,
  };
})(props => {
  console.log('render pages/hello', props);
  const { dispatch } = props;
  return (
    <div>
      <h1>Page hello</h1>
      <div>
        <div>
          {'noNamespace'}
          {props.noNamespace.map((vv, index) => (
            <span
              key={index}
              style={{ background: 'cyan', margin: '3px', padding: '3px' }}
            >
              {vv}
            </span>
          ))}
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({ type: 'noNamespace/add', payload: 'hello' });
            }}
          >
            put
          </button>
        </div>
      </div>
      <div>
        <div>
          {'hello'}
          {props.hello.map((vv, index) => (
            <span
              key={index}
              style={{ background: 'cyan', margin: '3px', padding: '3px' }}
            >
              {vv}
            </span>
          ))}
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({ type: 'hello/add', payload: 'hello' });
            }}
          >
            put
          </button>
        </div>
      </div>
    </div>
  );
});
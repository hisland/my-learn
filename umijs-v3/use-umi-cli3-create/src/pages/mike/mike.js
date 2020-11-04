import React from 'react';
import { connect } from 'dva';

export default connect(state => {
  console.log('connect pages/mike', state);
  const { mike } = state;
  const { hello } = state;
  return {
    mike,
    hello,
  };
})(props => {
  console.log('render pages/mike', props);
  const { dispatch } = props;
  return (
    <div>
      <h1>Page mike</h1>
      <div>
        <div>
          {'mike'}
          {props.mike.map((vv, index) => (
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
              dispatch({ type: 'mike/add', payload: 'mike' });
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
              style={{ background: 'lime', margin: '3px', padding: '3px' }}
            >
              {vv}
            </span>
          ))}
        </div>
        <div>
          <button
            onClick={() => {
              dispatch({ type: 'hello/add', payload: 'mike' });
            }}
          >
            put
          </button>
        </div>
      </div>
    </div>
  );
});

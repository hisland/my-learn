import React from 'react';
import { connect } from 'dva';
import ss from './style.scss';
console.log(ss);

export default connect(state => {
  console.log('connect pages/scss', state);
  const { mike } = state;
  return {
    mike,
  };
})(props => {
  console.log('render pages/scss', props);
  const { dispatch } = props;
  return (
    <div>
      <h1 className={ss.foo}>Page scss</h1>
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
              dispatch({ type: 'mike/add', payload: 'scss' });
            }}
          >
            put
          </button>
        </div>
      </div>
    </div>
  );
});

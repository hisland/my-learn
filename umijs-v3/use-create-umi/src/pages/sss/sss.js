import { connect } from 'dva';

export default connect(state => {
  console.log('connect pages/sss', state);
  const { sss } = state;
  const { kkk } = state;
  return {
    sss,
    kkk,
  };
})(function(props) {
  console.log('render pages/sss');
  const { dispatch } = props;
  return (
    <div>
      <h1>Page sss</h1>
      <div>
        {'sss'}
        {props.sss &&
          props.sss.map((vv, index) => (
            <span key={index} style={{ background: 'green', margin: '3px' }}>
              {vv}
            </span>
          ))}
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'sss/add', payload: '123' });
          }}
        >
          put
        </button>
      </div>
      <div>
        {'kkk'}
        {props.kkk &&
          props.kkk.map((vv, index) => (
            <span key={index} style={{ background: 'green', margin: '3px' }}>
              {vv}
            </span>
          ))}
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'kkk/add', payload: '123' });
          }}
        >
          put
        </button>
      </div>
    </div>
  );
});

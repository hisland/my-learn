import { connect } from 'dva';

export default connect(state => {
  console.log('connect pages/kkk', state);
  const { kkk } = state;
  return {
    kkk,
  };
})(function(props) {
  console.log('render pages/kkk');
  const { dispatch } = props;
  return (
    <div>
      <h1>Page kkk</h1>
      <div>
        {'kkk'}
        {props.kkk && props.kkk.map((vv, index) => (
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

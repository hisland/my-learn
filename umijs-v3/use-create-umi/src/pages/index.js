import { connect } from 'dva';

export default connect(state => {
  console.log('connect pages/index', state);
  const { foo } = state;
  return {
    foo,
    'god/say': state['god/say'],
  };
})(function(props) {
  console.log('render pages/index', props);
  const { dispatch } = props;
  return (
    <div>
      <div>这是 pages/index3</div>
      <div>
        {'foo'}
        {props.foo.map((vv, index) => (
          <span key={index} style={{ background: 'green', margin: '3px' }}>
            {vv}
          </span>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'foo/add', payload: '123' });
          }}
        >
          put
        </button>
      </div>
      <div>
        {'god/say'}
        {props['god/say'].map((vv, index) => (
          <span key={index} style={{ background: 'green', margin: '3px' }}>
            {vv}
          </span>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            dispatch({ type: 'god/say/add', payload: '123' });
          }}
        >
          put
        </button>
      </div>
    </div>
  );
});

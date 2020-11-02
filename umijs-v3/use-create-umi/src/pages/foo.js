import styles from './foo.css';
import { connect } from 'dva';

export default connect(state => {
  console.log('connect pages/foo', state);
  console.log(state);
  const { foo } = state;
  return {
    foo,
  };
})(function(props) {
  console.log('render pages/foo');
  const { dispatch } = props;
  return (
    <div className={styles.normal}>
      <h1>Page foo2</h1>
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
    </div>
  );
});

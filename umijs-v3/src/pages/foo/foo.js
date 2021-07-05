import styles from './foo.css';
import { useRouteMatch } from 'umi';
import { useParams } from 'umi';
import { useDispatch } from 'umi';
import { connect } from 'umi';

export default connect((state) => {
  console.log('connect: ', state);
  return {
    foo: state.foo,
    some: state.some,
  };
})(function Page(props) {
  console.log('props: ', props);
  const match = useRouteMatch();
  console.log('match: ', match);
  const params = useParams();
  console.log('params: ', params);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className={styles.title}>Page foo/foo foo {props.foo.hello}</h1>
      <h1 className={styles.title}>
        Page foo/foo hey-is-some {props.some.hello}
      </h1>
      <div>
        <button
          onClick={() => {
            props.dispatch({
              type: 'foo/plus',
            });
          }}
        >
          props.dispatch foo plus 1
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'foo/minus',
            });
          }}
        >
          useDispatch foo minus 1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            props.dispatch({
              type: 'some/plus',
            });
          }}
        >
          props.dispatch some plus 1
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'some/minus',
            });
          }}
        >
          useDispatch some minus 1
        </button>
      </div>
    </div>
  );
});

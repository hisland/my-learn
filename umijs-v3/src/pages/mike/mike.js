import styles from './mike.css';
import { connect } from 'umi';
import { useDispatch } from 'umi';
export default connect((state) => {
  console.log('connect: ', state);
  return {
    say: state.say,
    sub: state['ns/sub'],
  };
})(function Page(props) {
  console.log('mike: ', props);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className={styles.title}>Page mike/mike say.yes: {props.say.yes}</h1>
      <h1 className={styles.title}>
        Page mike/mike ns/sub.yes: {props.sub.yes}
      </h1>

      <div>
        <button
          onClick={() => {
            props.dispatch({
              type: 'say/plus',
            });
          }}
        >
          props.dispatch say plus 1
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'say/minus',
            });
          }}
        >
          useDispatch say minus 1
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            props.dispatch({
              type: 'ns/sub/plus',
            });
          }}
        >
          props.dispatch ns/sub plus 1
        </button>
        <button
          onClick={() => {
            dispatch({
              type: 'ns/sub/minus',
            });
          }}
        >
          useDispatch ns/sub minus 1
        </button>
      </div>
    </div>
  );
});

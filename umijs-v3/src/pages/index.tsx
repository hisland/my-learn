import styles from './index.less';
import { history } from 'umi';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index 2</h1>
      <ul>
        <li>
          <a
            onClick={() => {
              history.push('/foo');
            }}
          >
            1. history.push to /foo
          </a>
        </li>
        <li>
          <Link to="/foo">Link to /foo</Link>
        </li>
        <li>
          <Link to="/mike">Link to /mike</Link>
        </li>
      </ul>
    </div>
  );
}

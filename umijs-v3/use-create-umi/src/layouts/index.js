import styles from './index.css';

function BasicLayout(props) {
  console.log('render layouts/index');
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>这是 layout/index</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;

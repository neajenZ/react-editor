import styles from './Result.module.css';

export const Result = ({ data }) => {
  return (
    <div className={`${styles.body} ${data.status === 'error' ? styles.error : ''}`}>
      <p>Результат: </p>
      <p>{data.result}</p>
    </div>
  );
};

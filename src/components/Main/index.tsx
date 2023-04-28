import Card from '../Card';
import styles from './main.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      {Array.from({ length: 20 }).map((_, index: number) => (
        <Card key={index} />
      ))}
    </main>
  );
};

export default Main;

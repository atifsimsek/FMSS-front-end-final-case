import { useTheme } from '../../store/redux-helpers/themeHelper';
import styles from './card.module.scss';

const Card: React.FC = () => {
  const theme = useTheme();
  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <div className={styles.imgBox}>
        <img
          src="https://i.ebayimg.com/images/g/2AEAAMXQ0pNQ9kgu/s-l500.jpg"
          alt=""
        />
      </div>
      <div className={styles.texts}>
        <h3>title</h3>
        <p>model</p>
        <p>rating</p>
      </div>
    </div>
  );
};

export default Card;

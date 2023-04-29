import { useTheme } from '../../store/redux-helpers/themeHelper';
import styles from './card.module.scss';
import imageData from '../../data/ımageData.json';

interface Props {
  item: any;
}

const Card: React.FC<Props> = ({ item }: Props) => {
  const theme = useTheme();
  const img = imageData.find((image) => image.name === item.name)?.img;

  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <div className={styles.imgBox}>
        {img ? (
          <img src={img} alt="" />
        ) : (
          <img
            style={{
              background: `${theme === 'dark' ? 'black' : 'gray'}`,
              padding: '10px 50px',
            }}
            src={
              'https://logolook.net/wp-content/uploads/2021/07/Star-Wars-Logo.png'
            }
            alt=""
          />
        )}
      </div>
      <div className={styles.texts}>
        <h3>{item?.name}</h3>
        <p>{item?.model}</p>
        <p>{item?.hyperdrive_rating}</p>
      </div>
    </div>
  );
};

export default Card;

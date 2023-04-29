import { useTheme } from '../../store/redux-helpers/themeHelper';
import styles from './card.module.scss';
import imageData from '../../data/ımageData.json';
import { AllTypes } from '../../types/ApiTypes';
import { Link } from 'react-router-dom';
import { useData } from '../../store/features/dataSlice';

interface Props {
  item: AllTypes;
  index: number;
}

const Card: React.FC<Props> = ({ item, index }: Props) => {
  const theme = useTheme();
  const { category } = useData();
  const img = imageData.find((image) => image.name === item.name)?.img;

  return (
    <>
      {category === 'starships' ? (
        <Link to={`details/${index}`}>
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
              <p>{item?.max_atmosphering_speed}</p>
            </div>
          </div>
        </Link>
      ) : (
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
            <p>{item?.max_atmosphering_speed}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

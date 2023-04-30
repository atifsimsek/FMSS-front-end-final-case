import { useTheme } from '../../store/redux-helpers/themeHelper';
import styles from './card.module.scss';
import imageData from '../../data/ımageData.json';
import { AllTypes } from '../../types/ApiTypes';
import { Link } from 'react-router-dom';
import { useData } from '../../store/features/dataSlice';
import noImage from '../../assets/noİmage.png';

interface Props {
  item: AllTypes;
  page: number;
}

const Card: React.FC<Props> = ({ item, page }: Props) => {
  const theme = useTheme();
  const { category } = useData();
  const img = imageData.find((image) => image.name === item.name)?.img;

  return (
    <>
      {category === 'starships' ? (
        <Link to={`details/${page}/${item?.name}`}>
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
                  src={noImage}
                  alt=""
                />
              )}
            </div>
            <div className={styles.texts}>
              <h3>{item?.name}</h3>
              <div className={styles.details}>
                <p>
                  {' '}
                  <span>Model</span>
                  {item?.model}
                </p>
                <p>
                  <span>Hyperdrive Ratings</span> {item?.hyperdrive_rating}
                </p>
                <p>
                  <span>Max Atmosphering Speed</span>{' '}
                  {item?.max_atmosphering_speed}
                </p>
              </div>
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

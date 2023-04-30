import { useTheme } from '../../store/redux-helpers/helper';
import styles from './card.module.scss';
import imageData from '../../data/ımageData.json';
import { AllTypes } from '../../types/ApiTypes';
import { Link, useLocation } from 'react-router-dom';
import { handleFavorite, useData } from '../../store/features/dataSlice';
import noImage from '../../assets/noİmage.png';
import { useAppDispatch } from '../../store/hooks';
import { MdFavorite } from 'react-icons/md';
import { useState, useEffect } from 'react';

interface Props {
  item: AllTypes;
  page: number;
}

const Card: React.FC<Props> = ({ item, page }: Props) => {
  const theme = useTheme();
  const params = useLocation();

  const { category, favorites } = useData();
  const [fav, setFav] = useState(false);
  const img = imageData.find((image) => image.name === item.name)?.img;

  const dispatch = useAppDispatch();

  useEffect(() => {
    const isFav =
      favorites.findIndex((fav: any) => fav.name === item.name) !== -1;
    setFav(isFav);
  }, [favorites, item.name]);

  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      <button
        style={{
          color: fav ? 'red' : '',
        }}
        onClick={() => {
          setFav(!fav);
          dispatch(handleFavorite(item));
        }}
        className={styles.favBtn}
      >
        <MdFavorite />
      </button>
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
        <h3>{item?.name || item?.title}</h3>
        <div className={styles.details}>
          {category === 'starships' ? (
            <>
              <p>
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
            </>
          ) : (
            <>
              <p>
                <span>
                  {item?.model
                    ? 'Model '
                    : item?.director
                    ? 'Director '
                    : 'Gender '}
                </span>
                {item?.model || item?.director || item?.gender}
              </p>
              <p>{item?.hyperdrive_rating}</p>
              <p>
                <span>
                  {item?.release_date
                    ? 'Relase Date '
                    : item?.birth_year
                    ? 'Birth Year '
                    : 'Max Atmosphering Speed '}
                </span>
                {item?.max_atmosphering_speed ||
                  item?.release_date ||
                  item?.birth_year}
              </p>
            </>
          )}
        </div>
        {category === 'starships' && params.pathname !== '/favorites' && (
          <Link
            to={`details/${page}/${item?.name}`}
            className={`${styles.detailsBtn} ${styles[theme]}`}
          >
            Details
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;

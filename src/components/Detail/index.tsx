import styles from './details.module.scss';
import imageData from '../../data/ımageData.json';
import { useData } from '../../store/features/dataSlice';
import { useTheme } from '../../store/redux-helpers/helper';
import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchData } from '../../store/services/dataService';
import { useNavigate, useParams } from 'react-router-dom';
import { SlArrowLeft } from 'react-icons/sl';

const Detail = () => {
  // Access data from the store and the current theme
  const { items, category } = useData();
  const theme = useTheme();

  // Access the current page and item ID from the URL parameters
  const { page, id } = useParams<{ page: string; id: string }>();

  // Navigate back to the main page
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  };

  // Find the selected item and image from the data sources
  const item = items.find((item) => item?.name === id);
  const img = imageData.find((image) => image.name === id)?.img;

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData({ category: category, page: Number(page) }));
  }, [dispatch, page, category]);

  return (
    <section className={`${styles.detailsPage} ${styles[theme]}`}>
      <h2 className={`${styles.title} ${styles[theme]}`}>Details</h2>
      <div className={`${styles.content} ${styles[theme]}`}>
        <h3>
          {item?.name}
          <hr />
        </h3>
        <div className={`${styles.details} ${styles[theme]}`}>
          <div className={styles.imgBox}>
            <img src={img} alt="" />
          </div>

          <div className={styles.texts}>
            <p>
              <span>Model:</span>
              {item?.model}
            </p>
            <p>
              <span>Hyperdrive Rating:</span>
              {item?.hyperdrive_rating}
            </p>
            <p>
              <span>Max Atmosphering Speed:</span>
              {item?.max_atmosphering_speed}
            </p>
            <p>
              <span>Manufacturer:</span>
              {item?.manufacturer}
            </p>
            <p>
              <span>Crew:</span>
              {item?.crew}
            </p>
            <p>
              <span>Cargo Capacity:</span>
              {item?.crew}
            </p>
          </div>
        </div>
        <button
          onClick={goBack}
          className={`${styles.backBtn} ${styles[theme]}`}
        >
          <SlArrowLeft size={18} />
        </button>
      </div>
    </section>
  );
};

export default Detail;

import styles from './details.module.scss';
import { useParams } from 'react-router-dom';
import imageData from '../data/ımageData.json';
import { useData } from '../store/features/dataSlice';

const DetailPage = () => {
  const { id } = useParams();
  const { items } = useData();
  const item = items[id];
  console.log(id);
  return (
    <section className={styles.detailsPage}>
      <div className={styles.content}>
        <h3>
          {item.name}
          <hr />
        </h3>
        <div className={styles.details}>
          <div className={styles.imgBox}>
            <img src={imageData[id].img} alt="" />
          </div>

          <div className={styles.texts}>
            <p>
              <span>Model:</span>
              {item.model}
            </p>
            <p>
              <span>Hyperdrive Rating:</span>
              {item.hyperdrive_rating}
            </p>
            <p>
              <span>Max Atmosphering Speed:</span>
              {item.max_atmosphering_speed}
            </p>
            <p>
              <span>Manufacturer:</span>
              {item.manufacturer}
            </p>
            <p>
              <span>Crew:</span>
              {item.crew}
            </p>
            <p>
              <span>Cargo Capacity:</span>
              {item.crew}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;

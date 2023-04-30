import Card from '../../components/Card';
import Skeleton from '../../components/Skeleton';
import { useData } from '../../store/features/dataSlice';
import { useTheme } from '../../store/redux-helpers/helper';
import { AllTypes } from '../../types/ApiTypes';
import styles from './favorites.module.scss';

const Favorites = () => {
  const { favorites, isLoading, currentPage } = useData();
  const theme = useTheme();

  return (
    <div className={`${styles.favorites} ${styles[theme]}`}>
      {favorites.length === 0 ? (
        <h3 className={`${styles[theme]}`}>
          Your favorites list is empty. Let's add some items!
        </h3>
      ) : (
        favorites.map((item: AllTypes, index: number) =>
          isLoading ? (
            <Skeleton key={index} />
          ) : (
            <Card key={index} item={item} page={currentPage} />
          )
        )
      )}
    </div>
  );
};

export default Favorites;

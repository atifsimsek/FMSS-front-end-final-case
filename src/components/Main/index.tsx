import {
  setCategory,
  setCurrentPage,
  setloadMore,
  useData,
} from '../../store/features/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useTheme } from '../../store/redux-helpers/helper';
import { fetchData } from '../../store/services/dataService';
import { AllTypes } from '../../types/ApiTypes';
import Card from '../Card';
import Skeleton from '../Skeleton';
import styles from './main.module.scss';
import { useEffect, useState } from 'react';
import { SlArrowUp } from 'react-icons/sl';

const Main: React.FC = () => {
  const theme = useTheme();
  const { items, category, totalPages, isLoading, currentPage } = useData();
  const filter = useAppSelector((state) => state.filterData.filteredItems);
  const [showButton, setShowButton] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const disableLoadMoreButton = items.length === 0 || currentPage >= totalPages;

  // "Back to top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get data and reset page number
  useEffect(() => {
    dispatch(setCategory(category));
    dispatch(setCurrentPage(1));
    dispatch(fetchData({ category: category, page: 1 }));
  }, [dispatch, category]);

  // Load more items

  const loadMore = () => {
    dispatch(setloadMore(category));
    dispatch(fetchData({ category: category, page: currentPage + 1 }));
    dispatch(setCurrentPage(currentPage + 1));
  };

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <div className={`${styles.box} ${styles[theme]}`}>
        {filter &&
          filter.map((item: AllTypes, index: number) =>
            isLoading ? (
              <Skeleton key={index} />
            ) : (
              <Card key={index} item={item} page={currentPage} />
            )
          )}
      </div>

      {showButton && (
        <div onClick={scrollTop} className={`${styles.icon} ${styles[theme]}`}>
          <SlArrowUp size={20} />
        </div>
      )}

      <button
        disabled={disableLoadMoreButton}
        className={`${styles.loadMore} ${styles[theme]}`}
        onClick={loadMore}
      >
        Load More
      </button>
    </main>
  );
};

export default Main;

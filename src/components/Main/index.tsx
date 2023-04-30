import { store } from '../../store';
import { setloadMore, useData } from '../../store/features/dataSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useTheme } from '../../store/redux-helpers/themeHelper';
import { fetchData } from '../../store/services/dataService';
import { AllTypes, Item } from '../../types/ApiTypes';
import Card from '../Card';
import styles from './main.module.scss';
import { useEffect, useState } from 'react';
import { SlArrowUp } from 'react-icons/sl';

const Main: React.FC = () => {
  const theme = useTheme();
  const { items, category, totalPages } = useData();
  const filter = useAppSelector((state) => state.filterData.filteredItems);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  const disableLoadMoreButton = items.length === 0 || page >= totalPages;

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
    setPage(1);
    dispatch(fetchData({ category: category, page: 1 }));
  }, [dispatch, category]);

  // Load more items

  const loadMore = () => {
    dispatch(setloadMore(category));
    dispatch(fetchData({ category: category, page: page + 1 }));
    setPage(page + 1);
  };

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <div className={`${styles.box} ${styles[theme]}`}>
        {filter &&
          filter.map((item: AllTypes, index: number) => (
            <Card key={index} item={item} page={page} />
          ))}
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

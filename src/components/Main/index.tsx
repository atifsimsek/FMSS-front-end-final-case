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
  const { items, category, count } = useData();
  const filter = useAppSelector((state) => state.filterData.filteredItems);
  const [showButton, setShowButton] = useState<boolean>(false);
  // Calculating the number of pages for each category
  const [page, setPage] = useState<number>(2);
  const totalPages = Math.ceil(count / 10);
  const disabledLoadMoreButton = items.length > 0 && page <= totalPages;
  const dispatch = useAppDispatch();

  //Back to top  button
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  //Get Data and reset page number
  useEffect(() => {
    dispatch(fetchData({ category: category, page: 1 }));
    setPage(2);
  }, [dispatch, category]);

  //Load More
  const loadMore = () => {
    setPage(page + 1);
    dispatch(setloadMore(category));
    dispatch(fetchData({ category: category, page: page }));
  };

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      <div className={`${styles.box} ${styles[theme]}`}>
        {filter &&
          filter.map((item: AllTypes, index: number) => (
            <Card key={index} item={item} index={index} />
          ))}
      </div>
      {showButton && (
        <div onClick={scrollTop} className={`${styles.icon} ${styles[theme]}`}>
          <SlArrowUp size={20} />
        </div>
      )}

      <button
        disabled={!disabledLoadMoreButton}
        className={`${styles.loadMore} ${styles[theme]}`}
        onClick={loadMore}
      >
        Load More
      </button>
    </main>
  );
};

export default Main;

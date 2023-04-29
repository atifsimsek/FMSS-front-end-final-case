import { useState } from 'react';
import { useTheme } from '../../store/redux-helpers/themeHelper';
import styles from './categories.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { fetchData } from '../../store/services/dataService';
import { setCategory } from '../../store/features/dataSlice';

const Categories: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const categories = [
    { label: 'Characters', value: 'people' },
    { label: 'Films', value: 'films' },
    { label: 'Starships', value: 'starships' },
    { label: 'Vehicles', value: 'vehicles' },
  ];

  const [buttonIndex, setButtonIndex] = useState<number | null>(2);

  //Select Category
  const handleClick = (index: number, category: string) => {
    if (buttonIndex === index) {
      setButtonIndex(null);
    } else {
      setButtonIndex(index);
      dispatch(setCategory(category));
      dispatch(fetchData({ category, page: 1 }));
    }
  };

  return (
    <div className={`${styles.categories} ${styles[theme]}`}>
      {categories.map((category, index: number) => (
        <button
          disabled={buttonIndex === index && true}
          onClick={() => {
            handleClick(index, category.value);
          }}
          className={`${buttonIndex === index && styles.active} ${
            styles.category
          } ${styles[theme]}`}
          key={index}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default Categories;

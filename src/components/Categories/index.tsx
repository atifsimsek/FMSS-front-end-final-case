import { useState } from 'react';
import { useTheme } from '../../store/redux-helpers/themeHelper';
import styles from './categories.module.scss';

const Categories: React.FC = () => {
  const theme = useTheme();

  const categories: string[] = ['characters', 'films', 'starships', 'vehicles'];

  const [buttonIndex, setButtonIndex] = useState<number | null>(null);

  const handleClick = (index: number, category: string) => {
    if (buttonIndex === index) {
      setButtonIndex(null);
    } else {
      setButtonIndex(index);
    }
  };

  return (
    <div className={`${styles.categories} ${styles[theme]}`}>
      {categories.map((category: string, index: number) => (
        <button
          onClick={() => {
            handleClick(index, category);
          }}
          className={`${buttonIndex === index && styles.active} ${
            styles.category
          } ${styles[theme]}`}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;

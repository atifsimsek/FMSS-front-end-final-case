import { useTheme } from '../../../store/redux-helpers/themeHelper';
import styles from './searchInput.module.scss';
import { useState } from 'react';

const SearchInput = ({ search, setSearch }) => {
  const theme = useTheme();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={styles.inputBox}>
      <input
        type="text"
        className={styles[theme]}
        value={search}
        onChange={handleInputChange}
        required
      />
      <span className={styles.highlight}></span>
      <span className={`${styles.bar} ${styles[theme]}`}></span>
      <label className={styles[theme]}>Search / Name / Title</label>
    </div>
  );
};

export default SearchInput;

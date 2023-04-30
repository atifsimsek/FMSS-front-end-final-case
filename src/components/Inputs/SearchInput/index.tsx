import { useTheme } from '../../../store/redux-helpers/helper';
import styles from './searchInput.module.scss';
import { ChangeEvent } from 'react';

interface SearchInputProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ search, setSearch }) => {
  const theme = useTheme();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      <label className={styles[theme]}> Name / Model / Title</label>
    </div>
  );
};

export default SearchInput;

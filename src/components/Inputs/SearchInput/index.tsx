import { useTheme } from '../../../store/redux-helpers/themeHelper';
import styles from './searchInput.module.scss';

const SearchInput = () => {
  const theme = useTheme();
  return (
    <div className={styles.inputBox}>
      <input className={styles[theme]} type="text" required />
      <span className={styles.highlight}></span>
      <span className={`${styles.bar} ${styles[theme]}`}></span>
      <label className={styles[theme]}>Search</label>
    </div>
  );
};

export default SearchInput;

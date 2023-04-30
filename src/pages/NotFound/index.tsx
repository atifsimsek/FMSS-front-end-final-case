import { useNavigate } from 'react-router-dom';
import styles from './notFound.module.scss';
import { useTheme } from '../../store/redux-helpers/helper';

const NotFound: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div className={` ${styles.notFound}`}>
      <h3 className={`${styles[theme]}`}>Oops, you're in the wrong place</h3>
      <button
        className={`${styles[theme]}`}
        onClick={() => {
          navigate('/');
        }}
      >
        Click here to go back to the main menu
      </button>
    </div>
  );
};

export default NotFound;

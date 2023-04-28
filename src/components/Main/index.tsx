import { useTheme } from '../../store/redux-helpers/themeHelper';
import Card from '../Card';
import styles from './main.module.scss';
import { useEffect, useState } from 'react';
import { SlArrowUp } from 'react-icons/sl';

const Main: React.FC = () => {
  const theme = useTheme();
  const [showButton, setShowButton] = useState<boolean>(false);

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

  return (
    <main className={`${styles.main} ${styles[theme]}`}>
      {Array.from({ length: 20 }).map((_, index: number) => (
        <Card key={index} />
      ))}
      {showButton && (
        <div onClick={scrollTop} className={`${styles.icon} ${styles[theme]}`}>
          <SlArrowUp size={20} />
        </div>
      )}
    </main>
  );
};

export default Main;

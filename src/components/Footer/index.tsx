import { useTheme } from '../../store/redux-helpers/themeHelper';
import styles from './footer.module.scss';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';

const Footer: React.FC = () => {
  const theme = useTheme();

  interface SocialItem {
    Icon: JSX.Element;
    link: string;
  }

  const socials: SocialItem[] = [
    { Icon: <BsGithub size={18} />, link: 'https://github.com/atifsimsek' },
    {
      Icon: <BsLinkedin size={18} />,
      link: 'https://www.linkedin.com/in/atifsimsek/',
    },
    {
      Icon: <BsInstagram size={18} />,
      link: 'https://www.instagram.com/atifsimsek/',
    },
  ];
  return (
    <div className={`${styles.footer} ${styles[theme]}`}>
      <ul className={styles.socials}>
        {socials.map((item: SocialItem, index: number) => (
          <li key={index}>
            <a
              className={`${styles[theme]}`}
              target="_blank"
              rel="noreferrer"
              href={item.link}
            >
              {item.Icon}
            </a>
          </li>
        ))}
      </ul>
      <p> &copy; 2023 atifsimsek</p>
    </div>
  );
};

export default Footer;

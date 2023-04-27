import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './header.module.scss';
import { toggleTheme, useTheme } from '../../store/redux-helpers/themeHelper';
import { AiOutlineUser } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RxHome } from 'react-icons/rx';
import Svg from '../../assets/Svg';
import { LinkItem } from '../../types/LinkItem';

const Header: React.FC = () => {
  const theme = useTheme();
  const links: LinkItem[] = [
    { title: 'Home', href: '/', Icon: <RxHome size={25} /> },
    { title: 'Login', href: '/login', Icon: <AiOutlineUser size={25} /> },
    {
      title: 'Favorites',
      href: '/favorites',
      Icon: <MdOutlineFavoriteBorder size={25} />,
    },
  ];

  return (
    <nav className={`${styles.nav} ${styles[theme]}`}>
      {/* Lightsaber */}
      <button
        onClick={() => {
          toggleTheme(theme === 'light' ? 'dark' : 'light');
        }}
        className={styles.lightsaber}
      >
        <Svg width="50" height="50" transform="-90" />
        <span className={`${styles.saber} ${styles[theme]} `}></span>
      </button>
      {/* Logo */}
      <Link to="/">
        <img className={styles.logo} src={logo} alt="" />
      </Link>
      {/* Navigation Links */}
      <div className={styles.links}>
        {links.map((link: LinkItem, index: number) => (
          <NavLink
            key={index}
            to={link.href}
            className={({ isActive }: { isActive: boolean }) =>
              isActive
                ? `${styles.active} ${styles.link} ${styles[theme]}`
                : `${styles.link} ${styles[theme]}`
            }
          >
            <>{link.Icon}</>
            <span>{link.title}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Header;

import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './header.module.scss';
import { toggleTheme, useTheme } from '../../store/redux-helpers/themeHelper';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RxHome } from 'react-icons/rx';
import Svg from '../../assets/Svg';
import { LinkItem } from '../../types/LinkItem';
import { useState } from 'react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
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

      <div
        className={`${styles.mobileMenu} ${open ? styles.open : ''} ${
          styles[theme]
        }`}
      >
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
            <span>{link.title}</span>
            <>{link.Icon}</>
          </NavLink>
        ))}
      </div>
      <button
        className={`${styles.menuIcon} ${styles[theme]} `}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <IoClose /> : <AiOutlineMenu />}
      </button>
    </nav>
  );
};

export default Header;

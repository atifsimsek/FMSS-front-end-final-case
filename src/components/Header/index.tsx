import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './header.module.scss';

const Header = () => {
  return (
    <nav className={``}>
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
    </nav>
  );
};

export default Header;

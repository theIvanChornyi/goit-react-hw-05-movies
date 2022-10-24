import { NavLink, Outlet } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.headerList}>
            <li className={css.headerItem}>
              <NavLink className={css.headerLink} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.headerLink} to="movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Header;

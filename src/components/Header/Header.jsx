import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.headerList}>
            <li className={css.headerItem}>
              <NavLink className={css.headerLink} to="/" end>
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
    </>
  );
};

export default Header;

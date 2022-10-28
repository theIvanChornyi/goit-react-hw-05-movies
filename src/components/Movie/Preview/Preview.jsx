import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import css from './Preview.module.css';
import defaulFilmPic from 'img/defaultMovie.jpg';

export const Preview = ({ filmCard }) => {
  const { poster_path, title, name, tagline } = filmCard;
  return (
    <div className={css.preview}>
      <div className={css.picture}>
        <div className={css.thumb}>
          <img
            width={'300px'}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : defaulFilmPic
            }
            alt={title ?? name}
          />
        </div>
        <p className={css.tag}>{tagline}</p>

        <ul className={css.links}>
          <li className={css.linkItem}>
            <NavLink className={css.learnMore} to="cast">
              Learn more about cast
            </NavLink>
          </li>
          <li className={css.linkItem}>
            <NavLink className={css.learnMore} to="reviews">
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

Preview.propTypes = {
  filmCard: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    tagline: PropTypes.string,
  }),
};

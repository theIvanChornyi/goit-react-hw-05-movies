import { Outlet, useLocation } from 'react-router-dom';
import { Description } from './Description';
import PropTypes from 'prop-types';

import css from './Movie.module.css';
import { Preview } from './Preview';

export const Movie = ({ movie }) => {
  const { state } = useLocation();
  const {
    name,
    title,
    poster_path,
    backdrop_path,
    overview,
    tagline,
    production_companies,
  } = movie;
  return (
    <section
      className={css.filmSection}
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.95),
         rgba(47, 48, 58, 0.95)),
         url(https://image.tmdb.org/t/p/w500${backdrop_path})`,
      }}
    >
      <div className={css.film}>
        <Preview filmCard={{ poster_path, title, name, tagline }} />
        <Description
          fields={{ title, movie, overview, production_companies }}
          state={state}
        />
      </div>
      <Outlet />
    </section>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    backdrop_path: PropTypes.string,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    production_companies: PropTypes.array,
  }),
};

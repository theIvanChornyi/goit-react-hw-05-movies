import PropTypes from 'prop-types';
import css from './MovieAtributes.module.css';
export const MovieAtributes = ({ movie }) => {
  const {
    original_title = '',
    adult,
    release_date = '',
    spoken_languages = '',
    runtime = 0,
    budget = 0,
    genres = [],
    production_countries = [],
  } = movie;
  return (
    <ul className={css.list}>
      {adult && (
        <li className={css.item}>
          <p className={css.paramName}>Age:</p>
          <p className={css.property}>{adult ? '18+' : '0+'}</p>
        </li>
      )}
      {release_date && (
        <li className={css.item}>
          <p className={css.paramName}>Release date:</p>
          <p className={css.property}>{release_date}</p>
        </li>
      )}

      {budget ? (
        <li className={css.item}>
          <p className={css.paramName}>Budget:</p>
          <p className={css.property}>{(budget / 1000000).toFixed(1)}M $</p>
        </li>
      ) : null}

      {original_title && (
        <li className={css.item}>
          <p className={css.paramName}>Original name:</p>
          <p className={css.property}>{original_title}</p>
        </li>
      )}
      {spoken_languages > 0 && (
        <li className={css.item}>
          <p className={css.paramName}>Langugaes:</p>
          <p className={css.property}>
            {spoken_languages.map(({ english_name }) => english_name).join(' ')}
          </p>
        </li>
      )}
      {genres > 0 && (
        <li className={css.item}>
          <p className={css.paramName}>Genres:</p>
          <p className={css.property}>
            {genres.map(({ name }) => name).join(' ')}
          </p>
        </li>
      )}
      {runtime && (
        <li className={css.item}>
          <p className={css.paramName}>Duration:</p>
          <p className={css.property}>{(runtime / 60).toFixed(2)} h</p>
        </li>
      )}
      {production_countries > 0 && (
        <li className={css.item}>
          <p className={css.paramName}>Countries:</p>
          <p className={css.property}>
            {production_countries.map(({ name }) => name).join(' ')}
          </p>
        </li>
      )}
    </ul>
  );
};

MovieAtributes.propTypes = {
  movie: PropTypes.shape({
    original_title: PropTypes.string,
    adult: PropTypes.bool,
    release_date: PropTypes.string,
    spoken_languages: PropTypes.arrayOf(
      PropTypes.shape({ english_name: PropTypes.string })
    ),
    runtime: PropTypes.number,
    budget: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    production_countries: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};

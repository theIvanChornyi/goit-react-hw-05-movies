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
      <li className={css.item}>
        <p className={css.paramName}>Age:</p>
        <p className={css.property}>{adult ? '18+' : '0+'}</p>
      </li>
      <li className={css.item}>
        <p className={css.paramName}>Release date:</p>
        <p className={css.property}>{release_date}</p>
      </li>
      <li className={css.item}>
        <p className={css.paramName}>Budget:</p>
        <p className={css.property}>{(budget / 1000000).toFixed(1)}M $</p>
      </li>
      <li className={css.item}>
        <p className={css.paramName}>Original name:</p>
        <p className={css.property}>{original_title}</p>
      </li>
      <li className={css.item}>
        <p className={css.paramName}>Langugaes:</p>
        <p className={css.property}>
          {spoken_languages.map(({ english_name }) => english_name).join(' ')}
        </p>
      </li>
      <li className={css.item}>
        <p className={css.paramName}>Genres:</p>
        <p className={css.property}>
          {genres.map(({ name }) => name).join(' ')}
        </p>
      </li>
      <li className={css.item}>
        <p className={css.paramName}>Duration:</p>
        <p className={css.property}>{(runtime / 60).toFixed(2)} h</p>
      </li>
      <li className={css.item}>
        <p className={css.paramName}>Countries:</p>
        <p className={css.property}>
          {production_countries.map(({ name }) => name).join(' ')}
        </p>
      </li>
    </ul>
  );
};

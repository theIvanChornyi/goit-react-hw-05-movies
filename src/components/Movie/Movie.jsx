import css from './Movie.module.css';
import { ProdactionCompany } from './ProdactionCompany';
import { MovieAtributes } from './MovieAtributes';

export const Movie = ({ movie }) => {
  const {
    name = '',
    title = '',
    poster_path = '',
    backdrop_path = '',
    overview = '',
    tagline = '',
    production_companies = [],
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
        <div className={css.text}>
          <h2 className={css.mainTitle}>{title}</h2>
          <div className={css.description}>
            <MovieAtributes movie={movie} />
            <p className={css.overview}>{overview}</p>

            <ul className={css.companies}>
              {production_companies.map(company => {
                if (!company.logo_path) {
                  return null;
                } else {
                  return (
                    <ProdactionCompany company={company} key={company.id} />
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className={css.preview}>
          <div className={css.picture}>
            <div className={css.thumb}>
              <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title ?? name}
              />
            </div>
            <p className={css.tag}>{tagline}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

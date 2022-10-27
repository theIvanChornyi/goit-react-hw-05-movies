import { Outlet, NavLink, useLocation, Link } from 'react-router-dom';
import { AiOutlineRollback } from 'react-icons/ai';
import css from './Movie.module.css';
import { ProdactionCompany } from './ProdactionCompany';
import { MovieAtributes } from './MovieAtributes';
import defaulFilmPic from 'img/defaultMovie.jpg';

export const Movie = ({ movie }) => {
  const { state } = useLocation();
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
          <Link to={state?.from ?? '/'} className={css.goBackLink}>
            <span>Go back!</span>
            <AiOutlineRollback className={css.iconBack} />
          </Link>
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
      </div>
      <Outlet />
    </section>
  );
};

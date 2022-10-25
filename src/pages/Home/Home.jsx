import { useEffect, useState } from 'react';
import { getMovies } from 'services/MovieAPI/API';
import { NavLink } from 'react-router-dom';

import css from './Home.module.css';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    get();

    async function get() {
      const { results } = await getMovies();
      setFilms([...results]);
    }
  }, []);

  return (
    <section className={css.films}>
      <h2 className={css.mainTitle}>Most trending films today</h2>
      <ol className={css.gallery}>
        {films.map(({ id, name, title, poster_path }) => {
          return (
            <li key={id} className={css.card}>
              <NavLink className={css.link} to={`/movies/${id}`}>
                <div className={css.overlay}></div>
                <div className={css.thumb}>
                  <img
                    className={css.image}
                    src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                    alt={name ?? title}
                  />
                </div>
                <p className={css.filmName}>{name ?? title}</p>
              </NavLink>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Home;

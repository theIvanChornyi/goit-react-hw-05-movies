import { useEffect, useState } from 'react';
import { getMovies } from 'services/MovieAPI/API';
import { Link } from 'react-router-dom';

import { STATE } from 'services/config/page.state';
import { useStateMachine } from 'services/hooks/stateMachine';
import css from './Home.module.css';

import { Spiner } from 'components/Spiner';
import { ErrorMesage } from 'components/ErrorMesage';

const Home = () => {
  const [films, setFilms] = useState([]);
  const { isResolved, isLoad, isRejected, setStateMachine } = useStateMachine(
    STATE.IDLE
  );

  useEffect(() => {
    setStateMachine(STATE.LOAD);
    get();

    async function get() {
      try {
        const { results } = await getMovies();
        setFilms([...results]);
        setStateMachine(STATE.RESOLVE);
      } catch (error) {
        setStateMachine(STATE.ERROR);
        console.log(error.message);
      }
    }
  }, [setStateMachine]);

  return (
    <section className={css.films}>
      <h2 className={css.mainTitle}>Most trending films today</h2>
      {isLoad && <Spiner />}
      {isRejected && <ErrorMesage />}
      {isResolved && (
        <ul className={css.gallery}>
          {films.map(({ id, name, title, poster_path }) => {
            return (
              <li key={id} className={css.card}>
                <Link className={css.link} to={`/movies/${id}`}>
                  <div className={css.thumb}>
                    <div className={css.overlay}></div>

                    <img
                      width={'250px'}
                      src={`https://image.tmdb.org/t/p/w400${poster_path}`}
                      alt={name ?? title}
                    />
                  </div>
                  <p className={css.filmName}>{name ?? title}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Home;

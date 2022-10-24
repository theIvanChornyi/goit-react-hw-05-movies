import { useEffect, useState } from 'react';
import { getMovies } from 'services/MovieAPI/API';
import { NavLink } from 'react-router-dom';

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
    <section>
      <h2>Films</h2>
      <ol>
        {films.map(({ id, name, title, poster_path }) => {
          return (
            <li key={id}>
              <NavLink to={`movies/${id}`}>
                <p>{name ?? title}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                  alt={name ?? title}
                />
              </NavLink>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Home;

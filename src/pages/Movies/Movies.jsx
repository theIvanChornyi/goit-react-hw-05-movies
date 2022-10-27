import { getMovieByName } from 'services/MovieAPI/API';
import { useEffect, useState } from 'react';
import { MoviePreviewCard } from 'components/MoviePreviewCard';

import css from './Movies.module.css';
import { STATE } from 'services/config/page.state';
import { useStateMachine } from 'services/hooks/stateMachine';

import { Paginator } from 'components/Paginator';
import { SearchForm } from 'components/SearchForm';
import { Spiner } from 'components/Spiner';
import { ErrorMesage } from 'components/ErrorMesage';
import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useSearchParams();
  const { isResolved, isLoad, isRejected, setStateMachine } = useStateMachine(
    STATE.IDLE
  );

  const filmNameStr = query.get('filmName') ?? '';
  const pageStr = query.get('pageNumber') ?? 1;

  const handleWriteQuery = ({ value = filmNameStr, number = 1 }) => {
    setQuery(value ? { filmName: value, pageNumber: number } : {});
  };

  useEffect(() => {
    if (filmNameStr) {
      setStateMachine(STATE.LOAD);
      get();
    }

    async function get() {
      try {
        const { results, total_pages } = await getMovieByName(
          filmNameStr,
          pageStr
        );
        setMovies([...results]);
        setTotalPages(total_pages);
        setStateMachine(STATE.RESOLVE);
      } catch (error) {
        setStateMachine(STATE.ERROR);
        console.log(error.message);
      }
    }
  }, [filmNameStr, pageStr, setStateMachine]);

  const moviesAmount = movies.length;
  return (
    <section className={css.container}>
      <SearchForm onHandleSubmit={handleWriteQuery} />
      {isLoad && <Spiner />}
      {moviesAmount > 0 && isResolved && (
        <ul className={css.moviesList}>
          {movies.map(({ poster_path, title, id, release_date, overview }) => (
            <MoviePreviewCard
              key={id}
              data={{ poster_path, title, release_date, id, overview }}
            />
          ))}
        </ul>
      )}
      {isResolved && moviesAmount === 0 && (
        <h2 className={css.messageEmpty}>
          Unfortunately, we do not have information about film like {query}. :(
        </h2>
      )}
      {isRejected && <ErrorMesage />}
      {totalPages > 1 && isResolved && (
        <Paginator
          totalPages={totalPages}
          page={pageStr}
          paginationFunc={handleWriteQuery}
        />
      )}
    </section>
  );
};

export default MoviePage;

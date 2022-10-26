import { getMovieByName } from 'services/MovieAPI/API';
import { useEffect, useState } from 'react';
import { MoviePreviewCard } from 'components/MoviePreviewCard';

import css from './Movies.module.css';
import { Paginator } from 'components/Paginator';
import { SearchForm } from 'components/SearchForm';

const MoviePage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    try {
      if (query) get();
    } catch (error) {
      console.log('error', error);
    }

    async function get() {
      const { results, total_pages } = await getMovieByName(query, page);
      setMovies([...results]);
      setTotalPages(total_pages);
    }
  }, [page, query]);

  const handleWriteQuery = query => {
    setQuery(query);
    setPage(1);
  };

  const handleChoosePage = number => {
    setPage(number);
  };

  return (
    <section className={css.container}>
      <SearchForm onHandleSubmit={handleWriteQuery} input={query} />
      {movies && (
        <ul className={css.moviesList}>
          {movies.map(({ poster_path, title, id, release_date, overview }) => (
            <MoviePreviewCard
              key={id}
              data={{ poster_path, title, release_date, id, overview }}
            />
          ))}
        </ul>
      )}

      {totalPages > 1 && (
        <Paginator
          totalPages={totalPages}
          page={page}
          paginationFunc={handleChoosePage}
        />
      )}
    </section>
  );
};

export default MoviePage;

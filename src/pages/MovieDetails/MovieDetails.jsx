import { getMovieDetails } from 'services/MovieAPI/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'components/Movie';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    get();
    async function get() {
      const responce = await getMovieDetails(movieId);
      setMovie({ ...responce });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return movie && <Movie movie={movie} />;
};

export default MovieDetails;

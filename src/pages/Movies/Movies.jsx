import { getMovieDetails } from 'services/MovieAPI/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'components/Movie';

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      get();
    } catch (error) {
      console.log('error', error);
    }
    async function get() {
      const responce = await getMovieDetails(movieId);
      setMovie({ ...responce });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Movie</div>;
};

export default MoviePage;

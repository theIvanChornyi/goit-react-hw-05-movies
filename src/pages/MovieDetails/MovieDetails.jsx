import { getMovieDetails } from 'services/MovieAPI/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { STATE } from 'services/config/page.state';
import { useStateMachine } from 'services/hooks/stateMachine';

import { Movie } from 'components/Movie';
import { Spiner } from 'components/Spiner';
import { ErrorMesage } from 'components/ErrorMesage';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { isResolved, isLoad, isRejected, setStateMachine } = useStateMachine(
    STATE.IDLE
  );

  useEffect(() => {
    setStateMachine(STATE.LOAD);
    get();

    async function get() {
      try {
        const responce = await getMovieDetails(movieId);
        setMovie({ ...responce });
        setStateMachine(STATE.RESOLVE);
      } catch (error) {
        setStateMachine(STATE.ERROR);
        console.log(error.message);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isResolved) return <Movie movie={movie} />;
  if (isLoad) return <Spiner />;
  if (isRejected) return <ErrorMesage />;
};

export default MovieDetails;

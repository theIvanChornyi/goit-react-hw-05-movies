import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ACTOR } from 'services/config/matchWords';
import { STATE } from 'services/config/page.state';
import { useStateMachine } from 'services/hooks/stateMachine';

import css from './Cast.module.css';
import { getCast } from 'services/MovieAPI/API';
import { CastItem } from './CastItem';
import { Spiner } from 'components/Spiner';
import { ErrorMesage } from 'components/ErrorMesage';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const { isResolved, isLoad, isRejected, setStateMachine } = useStateMachine(
    STATE.IDLE
  );

  useEffect(() => {
    setStateMachine(STATE.LOAD);
    get();
    async function get() {
      try {
        const { cast } = await getCast(movieId);
        setCast([...cast]);
        setStateMachine(STATE.RESOLVE);
      } catch (error) {
        setStateMachine(STATE.ERROR);
        console.log(error.message);
      }
    }
  }, [movieId, setStateMachine]);
  const isEmpty = cast.length < 1;
  return (
    <div className={css.wraper}>
      {isLoad && <Spiner />}
      {isRejected && <ErrorMesage />}
      {isEmpty && (
        <h2 className={css.messageEmpty}>
          Unfortunately, we do not have information about the actors from this
          film. :(
        </h2>
      )}
      {isResolved && !isEmpty && (
        <ul className={css.list}>
          {cast.map(item => {
            if (item.known_for_department !== ACTOR) return null;
            return <CastItem key={item.id} item={item} />;
          })}
        </ul>
      )}
    </div>
  );
};
export default Cast;

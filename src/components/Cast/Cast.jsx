import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './Cast.module.css';
import { getCast } from 'services/MovieAPI/API';
import { CastItem } from './CastItem';

const ACTOR = 'Acting';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      get();
    } catch (error) {}

    async function get() {
      const { cast } = await getCast(movieId);
      setCast([...cast]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={css.wraper}>
      <ul className={css.list}>
        {cast.length > 0 ? (
          cast.map(item => {
            if (item.known_for_department !== ACTOR) return null;
            return <CastItem key={item.id} item={item} />;
          })
        ) : (
          <h2>
            Unfortunately, we do not have information about the actors from this
            film. :(
          </h2>
        )}
      </ul>
    </div>
  );
};

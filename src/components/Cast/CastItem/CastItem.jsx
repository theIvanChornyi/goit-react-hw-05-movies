import PropTypes from 'prop-types';
import DefUser from 'img/defaultUser.jpg';

import css from './CastItem.module.css';

export const CastItem = ({ item }) => {
  const { gender, name, profile_path, character } = item;
  return (
    <li className={css.item}>
      <div className={css.thumb}>
        <img
          width={'75px'}
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : DefUser
          }
          alt={name}
        />
      </div>
      <div className={css.description}>
        {character && <p>{character}</p>}
        {name && <p>{name}</p>}
        {gender && <p>{gender === 1 ? 'Female' : 'Male'}</p>}
      </div>
    </li>
  );
};

CastItem.propTypes = {
  item: PropTypes.shape({
    gender: PropTypes.number,
    name: PropTypes.string,
    profile_path: PropTypes.string,
    character: PropTypes.string,
  }),
};

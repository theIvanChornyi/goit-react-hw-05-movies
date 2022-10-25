import DefUser from 'img/defaultUser.jpg';

import css from './CastItem.module.css';

export const CastItem = ({ item }) => {
  const { gender, name, profile_path, character } = item;
  return (
    <li className={css.item}>
      <div className={css.thumb}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : DefUser
          }
          alt={name}
        />
      </div>
      <div className={css.description}>
        <p>{character}</p>
        <p>{name}</p>
        <p>{gender === 1 ? 'Female' : 'Male'}</p>
      </div>
    </li>
  );
};

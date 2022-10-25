import css from './ProdactionCompany.module.css';
export const ProdactionCompany = ({ company }) => {
  const { logo_path, name } = company;
  return (
    <li className={css.company}>
      <div className={css.thumb}>
        {logo_path && (
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/original${logo_path}`}
            alt={name}
          />
        )}
      </div>
    </li>
  );
};

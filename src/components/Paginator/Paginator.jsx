import css from './Paginator.module.css';

export const Paginator = ({ totalPages, paginationFunc, page }) => {
  return (
    <div className={css.paginator}>
      <ul className={css.list}>
        {[...Array(totalPages)].map((_, number) => (
          <li key={number} className={css.item}>
            <button
              className={page !== number + 1 ? css.button : css.active}
              onClick={() => paginationFunc(number + 1)}
              type="button"
            >
              {number + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

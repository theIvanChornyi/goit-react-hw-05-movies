import PropTypes from 'prop-types';
import css from './Paginator.module.css';

export const Paginator = ({ totalPages, paginationFunc, page }) => {
  const currentPage = +page;
  return (
    <div className={css.paginator}>
      <ul className={css.list}>
        {[...Array(totalPages)].map((_, number) => {
          const nextPage = number + 1;
          return (
            <li key={number} className={css.item}>
              <button
                className={currentPage !== nextPage ? css.button : css.active}
                onClick={() => paginationFunc({ number: nextPage })}
                type="button"
              >
                {nextPage}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Paginator.propTypes = {
  totalPages: PropTypes.number,
  paginationFunc: PropTypes.func,
  page: PropTypes.string,
};

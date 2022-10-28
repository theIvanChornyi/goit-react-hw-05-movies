import PropTypes from 'prop-types';
import { AiOutlineRollback } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { MovieAtributes } from './MovieAtributes';
import { ProdactionCompany } from './ProdactionCompany';
import css from './Description.module.css';

export const Description = ({ fields, state }) => {
  const { title, movie, overview, production_companies } = fields;
  return (
    <div className={css.text}>
      <Link to={state?.from ?? '/'} className={css.goBackLink}>
        <span>Go back!</span>
        <AiOutlineRollback className={css.iconBack} />
      </Link>
      <h2 className={css.mainTitle}>{title}</h2>
      <div className={css.description}>
        <MovieAtributes movie={movie} />
        <p className={css.overview}>{overview}</p>

        <ul className={css.companies}>
          {production_companies.map(company => {
            if (!company.logo_path) {
              return null;
            } else {
              return <ProdactionCompany company={company} key={company.id} />;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

Description.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.string,
    movie: PropTypes.object,
    overview: PropTypes.string,
    production_companies: PropTypes.array,
  }),
  state: PropTypes.shape({
    from: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
  }),
};

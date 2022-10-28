import PropTypes from 'prop-types';
import { useState } from 'react';
import { HiSearch } from 'react-icons/hi';

import css from './SearchForm.module.css';

export const SearchForm = ({ onHandleSubmit }) => {
  const [query, setQuery] = useState('');

  const onChange = e => setQuery(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    onHandleSubmit({ value: query });
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <div className={css.wrapper}>
        <input
          name="film"
          onChange={onChange}
          placeholder="Film name"
          className={css.input}
          value={query}
        />
        {query && (
          <button className={css.button} type="submit">
            <HiSearch />
          </button>
        )}
      </div>
    </form>
  );
};
SearchForm.propTypes = {
  onHandleSubmit: PropTypes.func,
};

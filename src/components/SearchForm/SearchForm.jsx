import css from './SearchForm.module.css';
import { useForm } from 'react-hook-form';
import { HiSearch } from 'react-icons/hi';

const FIELD_NAME = 'film';

export const SearchForm = ({ onHandleSubmit, input }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => onHandleSubmit(data[FIELD_NAME]);
  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Film name"
        className={css.input}
        defaultValue={input}
        {...register(FIELD_NAME)}
      />
      <button className={css.button} type="submit">
        <HiSearch />
      </button>
    </form>
  );
};

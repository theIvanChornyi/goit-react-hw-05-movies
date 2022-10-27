import css from './SearchForm.module.css';
import { useForm } from 'react-hook-form';
import { HiSearch } from 'react-icons/hi';

const FIELD_NAME = 'film';

export const SearchForm = ({ onHandleSubmit, input }) => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = data => onHandleSubmit(data[FIELD_NAME]);
  const value = watch(FIELD_NAME);
  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.wrapper}>
        <input
          placeholder="Film name"
          className={css.input}
          defaultValue={value}
          {...register(FIELD_NAME)}
        />
        {value && (
          <button className={css.button} type="submit">
            <HiSearch />
          </button>
        )}
      </div>
    </form>
  );
};

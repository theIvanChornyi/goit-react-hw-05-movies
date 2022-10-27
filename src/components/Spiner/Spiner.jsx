import { Watch } from 'react-loader-spinner';
import css from './Spiner.module.css';
export const Spiner = () => (
  <Watch
    height="80"
    width="80"
    radius="48"
    color="red"
    ariaLabel="watch-loading"
    wrapperStyle
    wrapperClass={css.spiner}
    visible={true}
  />
);

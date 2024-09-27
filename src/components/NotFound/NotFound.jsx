import clsx from 'clsx';
import css from './NotFound.module.css';

function NotFound() {
  return (
    <div className={clsx(css['text-container'], 'container')}>
      <p className={css.text}>404</p>
      <p className={css.text}>Page not found.</p>
    </div>
  );
}

export default NotFound;

import { Link, Outlet } from 'react-router-dom';
import css from './Header.module.css';
import clsx from 'clsx';

function Header() {
  return (
    <>
      <header className={clsx(css.header, 'container')}>
        <Link className={css.home} to="/">
          <img className={css.logo} src="/public/favicon.svg" alt="logo" />
          <p className={css.paragraph}>Main Events</p>
        </Link>
      </header>
      <Outlet />
    </>
  );
}

export default Header;

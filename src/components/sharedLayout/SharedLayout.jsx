import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  const handleActiveStyle = ({ isActive }) => {
    return { color: isActive ? 'red' : 'black' };
  };
  return (
    <section className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.link} style={handleActiveStyle}>
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={css.link}
            style={handleActiveStyle}
            state={{ from: '/movies' }}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </section>
  );
};
export default SharedLayout;

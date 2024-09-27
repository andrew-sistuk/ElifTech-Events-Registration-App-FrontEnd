import Events from '../../components/Events/Events.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEvents } from '../../myRedux/events/operations.js';
import css from './Home.module.css';
import clsx from 'clsx';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <main className={clsx(css.main, 'container')}>
      <Events />
    </main>
  );
}

export default Home;

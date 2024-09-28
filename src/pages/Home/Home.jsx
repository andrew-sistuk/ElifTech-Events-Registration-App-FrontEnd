import Events from '../../components/Events/Events.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../../myRedux/events/operations.js';
import css from './Home.module.css';
import clsx from 'clsx';
import { selectEventsLoading } from '../../myRedux/events/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import LinkList from '../../components/LinkList/LinkList.jsx';
import Message from '../../components/Message/Message.jsx';

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(selectEventsLoading);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <main className={clsx(css.main, 'container')}>
      <h1 className="visually-hidden">Main Events</h1>
      <Events />
      <LinkList />
      <Message />
      <Loader loading={loading} />
    </main>
  );
}

export default Home;

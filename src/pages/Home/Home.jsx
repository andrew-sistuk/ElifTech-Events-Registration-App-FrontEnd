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
import SortItems from '../../components/SortItems/SortItems.jsx';
import { selectSortBy, selectSortOrder } from '../../myRedux/filters/selectors.js';

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector(selectEventsLoading);
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);

  useEffect(() => {
    dispatch(fetchEvents({ page: 1, sortBy, sortOrder }));
  }, [dispatch, sortBy, sortOrder]);

  return (
    <main className={clsx(css.main, 'container')}>
      <h1 className="visually-hidden">Main Events</h1>
      <SortItems />
      <Events />
      <LinkList />
      <Message />
      <Loader loading={loading} />
    </main>
  );
}

export default Home;

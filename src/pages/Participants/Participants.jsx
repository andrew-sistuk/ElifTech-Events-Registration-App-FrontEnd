import css from './Participants.module.css';
import Members from '../../components/Members/Members.jsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvent } from '../../myRedux/events/operations.js';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import Message from '../../components/Message/Message.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { selectEventsLoading } from '../../myRedux/events/selectors.js';
import { SearchBox } from '../../components/SearchBox/SearchBox.jsx';

function Participants() {
  const loading = useSelector(selectEventsLoading);
  const { eventId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvent(eventId));
  }, [dispatch, eventId]);

  return (
    <section className={clsx(css.participants, 'container')}>
      <h2 className="visually-hidden">Participants</h2>
      <SearchBox />
      <Members />
      <Message />
      <Loader loading={loading} />
    </section>
  );
}

export default Participants;

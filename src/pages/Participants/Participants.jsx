import css from './Participants.module.css';
import Members from '../../components/Members/Members.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEvent } from '../../myRedux/events/operations.js';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';

function Participants() {
  const { eventId } = useParams();
  console.log(eventId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEvent(eventId));
  }, [dispatch, eventId]);

  return (
    <section className={clsx(css.participants, 'container')}>
      <h2 className="visually-hidden">Participants</h2>
      <Members />
    </section>
  );
}

export default Participants;

import { useSelector } from 'react-redux';
import { selectEvents } from '../../myRedux/events/selectors.js';
import css from './Events.module.css';
import Event from '../Event/Event.jsx';

function Events() {
  const events = useSelector(selectEvents);

  return (
    <ul className={css.events}>
      {events.map(event => (
        <Event key={event._id} event={event} />
      ))}
    </ul>
  );
}

export default Events;

import { useSelector } from 'react-redux';
import { selectEvents } from '../../myRedux/events/selectors.js';
import css from './Events.module.css';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

function Events() {
  const events = useSelector(selectEvents);

  return (
    <ul className={css.events}>
      {events.map(({ _id, title, organizer, description, event_date }) => (
        <li className={css.event} key={_id}>
          <div>
            <div className={css['header-container']}>
              <h2 className={css.header}>{title}</h2>
              {organizer && <p>{`by ${organizer}`}</p>}
            </div>

            <p className={css.description}>{description}</p>
            <p className={css['event-date']}>{format(event_date, 'MM/dd/yyyy')}</p>
          </div>

          <div className={css['container-buttons']}>
            <Link className={css.button} to={`/events/${_id}/register`}>
              Register
            </Link>
            <Link className={css.button} to={`/events/${_id}/view`}>
              View
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Events;

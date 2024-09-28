import { useDispatch, useSelector } from 'react-redux';
import { selectEventsTotalPages } from '../../myRedux/events/selectors.js';
import createArrLinks from '../../helpers/createArrLinks.js';
import css from './LinkList.module.css';
import { fetchEvents } from '../../myRedux/events/operations.js';

function LinkList() {
  const totalPages = useSelector(selectEventsTotalPages);
  const dispatch = useDispatch();
  return (
    <ul className={css.pages}>
      {createArrLinks(totalPages).map(item => (
        <li key={item + 1}>
          <button
            type="button"
            onClick={() => {
              dispatch(fetchEvents(item + 1));
            }}
            className={css.item}
          >
            {item + 1}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;

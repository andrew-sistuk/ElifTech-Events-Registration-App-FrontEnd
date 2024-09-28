import { useDispatch, useSelector } from 'react-redux';
import { selectEventPage, selectEventsTotalPages } from '../../myRedux/events/selectors.js';
import createArrLinks from '../../helpers/createArrLinks.js';
import css from './LinkList.module.css';
import { fetchEvents } from '../../myRedux/events/operations.js';
import { selectSortBy, selectSortOrder } from '../../myRedux/filters/selectors.js';
import clsx from 'clsx';

function LinkList() {
  const totalPages = useSelector(selectEventsTotalPages);
  const page = useSelector(selectEventPage);
  const sortBy = useSelector(selectSortBy);
  const sortOrder = useSelector(selectSortOrder);

  const dispatch = useDispatch();
  return (
    <ul className={css.pages}>
      {createArrLinks(totalPages).map(item => (
        <li key={item + 1}>
          <button
            type="button"
            onClick={() => {
              dispatch(fetchEvents({ page: item + 1, sortBy, sortOrder }));
            }}
            className={clsx(css.item, page === item + 1 && css.active)}
          >
            {item + 1}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;

import css from './SortItems.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectSortBy, selectSortOrder } from '../../myRedux/filters/selectors.js';
import { changeSortBy, changeSortOrder } from '../../myRedux/filters/slice.js';

function SortItems() {
  const dispatch = useDispatch();
  const sortBy = useSelector(selectSortBy);
  const sorOrder = useSelector(selectSortOrder);

  return (
    <div className={css.sort}>
      <select
        className={css['filter-tranding']}
        name="sortBy"
        id="sortBy"
        value={sortBy}
        onChange={evt => {
          dispatch(changeSortBy(evt.target.value));
        }}
      >
        <option value="title">title</option>
        <option value="event_date">event date</option>
        <option value="event_date">organizer</option>
      </select>

      <select
        className={css['filter-tranding']}
        name="time_window"
        id="time_window"
        value={sorOrder}
        onChange={evt => {
          dispatch(changeSortOrder(evt.target.value));
        }}
      >
        <option value="asc">asc</option>
        <option value="desc">desc</option>
      </select>
    </div>
  );
}

export default SortItems;

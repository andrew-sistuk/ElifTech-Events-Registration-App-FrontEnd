import { useDispatch, useSelector } from 'react-redux';

import { selectNameFilter } from '../../myRedux/filters/selectors';
import { filterMembers } from '../../myRedux/filters/slice';

import css from './SearchBox.module.css';

export function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css['search-box']}>
      <label className={css['search-label']} htmlFor="searhbox">
        Find members by name or email
      </label>
      <input
        className={css['search-field']}
        type="text"
        value={filter}
        onChange={evt => dispatch(filterMembers(evt.target.value))}
        placeholder="Input name"
        name="searhbox"
      />
    </div>
  );
}

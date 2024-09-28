import css from './Members.module.css';
import { useSelector } from 'react-redux';
// import { selectEventMembers } from '../../myRedux/events/selectors.js';
import Member from '../Member/Member.jsx';
import { selectFilteredMembers } from '../../myRedux/filters/selectors.js';

function Members() {
  const members = useSelector(selectFilteredMembers);
  return (
    <ul className={css.members}>
      {members.map(member => (
        <Member key={member._id} member={member} />
      ))}
    </ul>
  );
}

export default Members;

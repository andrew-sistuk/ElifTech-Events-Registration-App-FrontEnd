import css from './Member.module.css';

function Member({ member: { name, email } }) {
  return (
    <li className={css.member}>
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  );
}

export default Member;

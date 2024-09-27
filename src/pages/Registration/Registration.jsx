import Form from '../../components/Form/Form.jsx';
import clsx from 'clsx';
import css from './Registration.module.css';

function Registration() {
  return (
    <section className={clsx(css['form-container'], 'container')}>
      <Form />
    </section>
  );
}

export default Registration;

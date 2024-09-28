import Form from '../../components/Form/Form.jsx';
import clsx from 'clsx';
import css from './Registration.module.css';
import Message from '../../components/Message/Message.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import { useSelector } from 'react-redux';
import { selectEventsLoading } from '../../myRedux/events/selectors.js';

function Registration() {
  const loading = useSelector(selectEventsLoading);

  return (
    <section className={clsx(css['form-container'], 'container')}>
      <h2 className="visually-hidden">Registration</h2>
      <Form />
      <Message />
      <Loader loading={loading} />
    </section>
  );
}

export default Registration;

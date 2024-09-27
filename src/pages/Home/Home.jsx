import Events from '../../components/Events/Events.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchEvents } from '../../myRedux/events/operations.js';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  return (
    <main>
      <Events />
    </main>
  );
}

export default Home;

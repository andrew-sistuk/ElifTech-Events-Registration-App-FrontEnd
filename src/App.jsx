import { Navigate, Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader.jsx';
// import { useSelector } from 'react-redux';
// import { selectEventsLoading } from './myRedux/events/selectors.js';

const Header = lazy(() => import('./components/Header/Header'));
const Home = lazy(() => import('./pages/Home/Home'));
const Registration = lazy(() => import('./pages/Registration/Registration'));
const Participants = lazy(() => import('./pages/Participants/Participants'));

const NotFound = lazy(() => import('./components/NotFound/NotFound'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Navigate to="/events" replace />} />
          <Route path="/events" element={<Home />} />
          <Route path="/events/:id/register" element={<Registration />} />
          <Route path="/events/:id/view" element={<Participants />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

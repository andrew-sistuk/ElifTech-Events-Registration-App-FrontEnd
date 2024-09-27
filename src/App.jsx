import { Navigate, Route, Routes } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import Loader from './components/Loader/Loader.jsx';

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
          <Route path="/evenrs/:id/register" element={<Registration />} />
          <Route path="/evenrs/:id/view" element={<Participants />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

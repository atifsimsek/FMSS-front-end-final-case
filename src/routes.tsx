import { ReactElement } from 'react';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import NotFound from './components/NotFound';

interface Route {
  name: string;
  path: string;
  element: ReactElement;
}

const routes: Route[] = [
  {
    name: 'HomePage',
    path: '/',
    element: <HomePage />,
  },
  {
    name: 'DetailsPage',
    path: 'details/:page/:id',
    element: <DetailsPage />,
  },
  {
    name: '404page',
    path: '/*',
    element: <NotFound />,
  },
];

export default routes;

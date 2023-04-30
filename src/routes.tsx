import { ReactElement } from 'react';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

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
];

export default routes;

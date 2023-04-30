import { ReactElement } from 'react';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import Detail from './pages/Detail';
import Favorites from './pages/Favorites';

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
    element: <Detail />,
  },
  {
    name: 'favorites',
    path: 'favorites/',
    element: <Favorites />,
  },
  {
    name: '404page',
    path: '/*',
    element: <NotFound />,
  },
];

export default routes;

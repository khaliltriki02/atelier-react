import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/RootLayout';

// Lazy loading des composants
const App = lazy(() => import('./App'));
const Events = lazy(() => import('./components/Events'));
const EventDetails = lazy(() => import('./components/EventDetails'));
const NotFound = lazy(() => import('./components/NotFound'));

// Configuration des routes avec createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'events/:eventName',
        element: <EventDetails />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

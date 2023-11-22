import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Home from '../pages/Home';
import { preLoadFilters } from '../pages/Home';
import GenrePage from '../pages/GenrePage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: preLoadFilters,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/games/:genre",
        element: <GenrePage />,
      },  
    ],
  }
]);



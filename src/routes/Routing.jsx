import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/Root';
import Home from '../pages/Home';
import { preLoadFilters } from '../pages/Home';
import GenrePage from '../pages/GenrePage';
import GamePage from '../pages/GamePage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Account from '../pages/Account';

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
      {
        path: "/game/:game_slug",
        element: <GamePage />,
      },  
    ],
  }, 
  {
    path: "/login", 
    element: <Login />
  },
  {
    path: "/register", 
    element: <Register />
  },
  {
    path: "/account", 
    element: <Account />
  }
]);


